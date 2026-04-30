"use client";

import { api } from "~/trpc/react";
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

function GeneralLedgerContent() {
  const searchParams = useSearchParams();
  const [accountId, setAccountId] = useState<number | "">("");

  useEffect(() => {
    const idParam = searchParams.get("accountId");
    if (idParam) {
      setAccountId(Number(idParam));
    }
  }, [searchParams]);

  const accountsQuery = api.account.getAll.useQuery();
  const ledgerQuery = api.reports.getGeneralLedger.useQuery(
    { accountId: Number(accountId) },
    { enabled: accountId !== "" }
  );

  const downloadExcel = () => {
    if (!ledgerQuery.data) return;

    const headers = ["Date", "Description", "Debit", "Credit", "Balance"];
    const rows = ledgerQuery.data.entries.map(row => ({
      Date: new Date(row.date).toLocaleDateString(),
      Description: row.description,
      Debit: row.debit,
      Credit: row.credit,
      Balance: row.balance
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "General Ledger");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(blob, `general_ledger_${ledgerQuery.data.account.code}.xlsx`);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">General Ledger</h2>
          <p className="text-gray-500 mt-2">Detailed transaction history by account</p>
        </div>

        <div className="flex items-end gap-4 w-full md:w-auto">
            <div className="flex-1 md:w-64">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Account</label>
                <select
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                >
                    <option value="">-- Choose Account --</option>
                    {accountsQuery.data?.map(acc => (
                        <option key={acc.id} value={acc.id}>
                            {acc.code} - {acc.name}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={downloadExcel}
                disabled={!ledgerQuery.data || ledgerQuery.data.entries.length === 0}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
                Export Excel
            </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
         {accountId === "" ? (
             <div className="p-12 text-center text-gray-500">
                 Please select an account to view its ledger.
             </div>
         ) : ledgerQuery.isLoading ? (
             <div className="p-12 text-center text-gray-500">
                 Loading ledger data...
             </div>
         ) : (
            <>
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            {ledgerQuery.data?.account.code} - {ledgerQuery.data?.account.name}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase">{ledgerQuery.data?.account.type}</p>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Debit</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Credit</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Balance</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {ledgerQuery.data?.entries.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">No transactions found for this account.</td>
                        </tr>
                    ) : (
                        ledgerQuery.data?.entries.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(row.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {row.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.debit > 0 ? row.debit.toFixed(2) : ""}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                    {row.credit > 0 ? row.credit.toFixed(2) : ""}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                    {row.balance.toFixed(2)}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
                </table>
            </>
         )}
      </div>
    </div>
  );
}

export default function GeneralLedgerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GeneralLedgerContent />
    </Suspense>
  );
}
