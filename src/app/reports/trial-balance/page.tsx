"use client";

import { api } from "~/trpc/react";
import { useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function TrialBalancePage() {
  const [asOfDate, setAsOfDate] = useState(() => new Date().toISOString().split("T")[0]);
  const trialBalanceQuery = api.reports.getTrialBalance.useQuery({
      asOfDate: asOfDate ? new Date(asOfDate) : undefined
  });

  const downloadExcel = () => {
    if (!trialBalanceQuery.data) return;

    const rows = trialBalanceQuery.data.map(row => ({
      "Account Code": row.account.code,
      "Account Name": row.account.name,
      "Debit": row.debit,
      "Credit": row.credit
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Trial Balance");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(blob, `trial_balance_${asOfDate}.xlsx`);
  };

  const totalDebit = trialBalanceQuery.data?.reduce((sum, row) => sum + row.debit, 0) || 0;
  const totalCredit = trialBalanceQuery.data?.reduce((sum, row) => sum + row.credit, 0) || 0;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Trial Balance</h2>
          <p className="text-gray-500 mt-2">Verify the equality of debits and credits</p>
        </div>
        <div className="flex gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">As of Date</label>
                <input
                    type="date"
                    value={asOfDate}
                    onChange={(e) => setAsOfDate(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <button
                onClick={downloadExcel}
                disabled={!trialBalanceQuery.data || trialBalanceQuery.data.length === 0}
                className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
                Export Excel
            </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-48">Debit</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-48">Credit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {trialBalanceQuery.isLoading ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">Loading trial balance...</td>
              </tr>
            ) : trialBalanceQuery.data?.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">No data found.</td>
              </tr>
            ) : (
              trialBalanceQuery.data?.map((row) => (
                <tr key={row.account.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Link href={`/reports/general-ledger?accountId=${row.account.id}`} className="hover:text-indigo-600 hover:underline">
                      <span className="font-medium mr-2">{row.account.code}</span>
                      {row.account.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {row.debit > 0 ? row.debit.toFixed(2) : ""}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    {row.credit > 0 ? row.credit.toFixed(2) : ""}
                  </td>
                </tr>
              ))
            )}
          </tbody>
          {trialBalanceQuery.data && trialBalanceQuery.data.length > 0 && (
             <tfoot className="bg-gray-50 border-t-2 border-gray-200 font-bold">
                 <tr>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">Total</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{totalDebit.toFixed(2)}</td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{totalCredit.toFixed(2)}</td>
                 </tr>
             </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
