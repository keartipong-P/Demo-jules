"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function JournalPage() {
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [description, setDescription] = useState("");
  const [lines, setLines] = useState<
    { accountId: number; amount: number | ""; isDebit: boolean }[]
  >([
    { accountId: 0, amount: "", isDebit: true },
    { accountId: 0, amount: "", isDebit: false },
  ]);
  const [error, setError] = useState<string | null>(null);

  const utils = api.useUtils();
  const accountsQuery = api.account.getAll.useQuery();
  const journalQuery = api.journal.getAll.useQuery();

  const createJournalEntry = api.journal.create.useMutation({
    onSuccess: async () => {
      setDescription("");
      setLines([
        { accountId: 0, amount: "", isDebit: true },
        { accountId: 0, amount: "", isDebit: false },
      ]);
      setError(null);
      await utils.journal.getAll.invalidate();
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleAddLine = () => {
    setLines([...lines, { accountId: 0, amount: "", isDebit: true }]);
  };

  const handleRemoveLine = (index: number) => {
    if (lines.length > 2) {
      setLines(lines.filter((_, i) => i !== index));
    }
  };

  const handleLineChange = (
    index: number,
    field: keyof typeof lines[0],
    value: string | number | boolean
  ) => {
    const newLines = [...lines];
    const line = newLines[index];
    if (line) {
        // @ts-ignore
        line[field] = value;
        setLines(newLines);
    }
  };

  const totalDebits = lines.reduce(
    (sum, line) => sum + (line.isDebit && typeof line.amount === "number" ? line.amount : 0),
    0
  );
  const totalCredits = lines.reduce(
    (sum, line) => sum + (!line.isDebit && typeof line.amount === "number" ? line.amount : 0),
    0
  );

  const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || lines.some((l) => l.accountId === 0 || l.amount === "")) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isBalanced) {
      setError("Total debits must equal total credits.");
      return;
    }

    createJournalEntry.mutate({
      date: new Date(date!),
      description,
      lines: lines.map((l) => ({
        accountId: l.accountId,
        amount: l.amount as number,
        isDebit: l.isDebit,
      })),
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Journal Entries</h2>
        <p className="text-gray-500 mt-2">Record and view financial transactions</p>
      </div>

      {/* Create Entry Form */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">New Journal Entry</h3>
        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Office supplies purchase"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Lines</label>
            {lines.map((line, index) => (
              <div key={index} className="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                <select
                  value={line.accountId}
                  onChange={(e) => handleLineChange(index, "accountId", Number(e.target.value))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  required
                >
                  <option value={0} disabled>Select Account</option>
                  {accountsQuery.data?.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.code} - {acc.name}
                    </option>
                  ))}
                </select>

                <div className="flex bg-white rounded-md border border-gray-300 shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleLineChange(index, "isDebit", true)}
                    className={`px-3 py-2 text-sm font-medium ${line.isDebit ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                  >
                    Dr
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLineChange(index, "isDebit", false)}
                    className={`px-3 py-2 text-sm font-medium ${!line.isDebit ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                  >
                    Cr
                  </button>
                </div>

                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={line.amount}
                  onChange={(e) => handleLineChange(index, "amount", e.target.value === "" ? "" : parseFloat(e.target.value))}
                  placeholder="Amount"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-right"
                  required
                />

                <button
                  type="button"
                  onClick={() => handleRemoveLine(index)}
                  disabled={lines.length <= 2}
                  className="text-red-500 hover:text-red-700 disabled:opacity-30 px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleAddLine}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              + Add Line
            </button>

            <div className="text-right space-y-1">
              <div className="text-sm text-gray-500">
                Total Debits: <span className="font-medium text-gray-900">{totalDebits.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-500">
                Total Credits: <span className="font-medium text-gray-900">{totalCredits.toFixed(2)}</span>
              </div>
              <div className={`text-sm font-medium ${isBalanced ? 'text-green-600' : 'text-red-600'}`}>
                Difference: {Math.abs(totalDebits - totalCredits).toFixed(2)}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={createJournalEntry.isPending || !isBalanced}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
          >
            {createJournalEntry.isPending ? "Recording..." : "Record Journal Entry"}
          </button>
        </form>
      </div>

      {/* Journal Entry List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {journalQuery.isLoading ? (
            <div className="p-6 text-center text-gray-500">Loading entries...</div>
          ) : journalQuery.data?.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No journal entries found.</div>
          ) : (
            journalQuery.data?.map((entry) => (
              <div key={entry.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-900">{entry.description}</h4>
                    <p className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</p>
                  </div>
                  <span className="text-xs text-gray-400">Entry #{entry.id}</span>
                </div>

                <table className="min-w-full text-sm">
                  <thead className="text-gray-500">
                    <tr>
                      <th className="text-left font-normal pb-2">Account</th>
                      <th className="text-right font-normal pb-2 w-32">Debit</th>
                      <th className="text-right font-normal pb-2 w-32">Credit</th>
                    </tr>
                  </thead>
                  <tbody className="border-t border-gray-100">
                    {/* Sort to show Debits first, then Credits */}
                    {[...entry.lines]
                      .sort((a, b) => (a.isDebit === b.isDebit ? 0 : a.isDebit ? -1 : 1))
                      .map((line) => (
                      <tr key={line.id}>
                        <td className={`py-1 ${!line.isDebit ? 'pl-8 text-gray-600' : 'text-gray-900'}`}>
                          {line.account.code} - {line.account.name}
                        </td>
                        <td className="text-right py-1 text-gray-900">
                          {line.isDebit ? line.amount.toFixed(2) : ""}
                        </td>
                        <td className="text-right py-1 text-gray-900">
                          {!line.isDebit ? line.amount.toFixed(2) : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
