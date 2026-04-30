"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function IncomeStatementPage() {
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-12-31");
  const [costCenterId, setCostCenterId] = useState<number | undefined>(undefined);

  const { data: costCenters } = api.costCenters.getAll.useQuery();

  const { data: report, isLoading } = api.reports.getIncomeStatement.useQuery({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    costCenterId: costCenterId,
  });

  const downloadExcel = () => {
    if (!report) return;

    const rows: any[] = [];
    rows.push({ Account: "Revenues" });
    report.revenues.forEach(r => {
      rows.push({ "Account Code": r.account.code, "Account Name": r.account.name, Balance: r.balance });
    });
    rows.push({ Account: "Total Revenue", Balance: report.totalRevenue });

    rows.push({});
    rows.push({ Account: "Expenses" });
    report.expenses.forEach(e => {
      rows.push({ "Account Code": e.account.code, "Account Name": e.account.name, Balance: e.balance });
    });
    rows.push({ Account: "Total Expenses", Balance: report.totalExpense });

    rows.push({});
    rows.push({ Account: "Net Income", Balance: report.netIncome });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Income Statement");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(blob, `income_statement_${startDate}_to_${endDate}.xlsx`);
  };

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Income Statement (P&L)</h1>
        <button
          onClick={downloadExcel}
          disabled={!report}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Excel
        </button>
      </div>

      <div className="mb-6 flex gap-4 bg-white p-4 rounded border">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cost Center</label>
          <select
            className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2 min-w-[200px]"
            value={costCenterId || ""}
            onChange={(e) => setCostCenterId(e.target.value ? parseInt(e.target.value) : undefined)}
          >
            <option value="">All (Consolidated)</option>
            {costCenters?.map(cc => (
              <option key={cc.id} value={cc.id}>{cc.code} - {cc.name}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : report ? (
        <div className="bg-white p-8 rounded border shadow-sm max-w-4xl">
          <h2 className="text-xl font-bold border-b pb-2 mb-4">Revenues</h2>
          {report.revenues.length === 0 ? <p className="text-gray-500 italic mb-4">No revenue entries.</p> : (
            <table className="w-full mb-4">
              <tbody>
                {report.revenues.map(item => (
                  <tr key={item.account.id}>
                    <td className="py-1 text-gray-700">
                      <Link href={`/reports/general-ledger?accountId=${item.account.id}`} className="hover:text-indigo-600 hover:underline">
                        {item.account.code} - {item.account.name}
                      </Link>
                    </td>
                    <td className="py-1 text-right text-gray-900">${item.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-between font-bold text-green-700 border-t pt-2 mb-8">
            <span>Total Revenue</span>
            <span>${report.totalRevenue.toFixed(2)}</span>
          </div>

          <h2 className="text-xl font-bold border-b pb-2 mb-4">Expenses</h2>
          {report.expenses.length === 0 ? <p className="text-gray-500 italic mb-4">No expense entries.</p> : (
            <table className="w-full mb-4">
              <tbody>
                {report.expenses.map(item => (
                  <tr key={item.account.id}>
                    <td className="py-1 text-gray-700">
                      <Link href={`/reports/general-ledger?accountId=${item.account.id}`} className="hover:text-indigo-600 hover:underline">
                        {item.account.code} - {item.account.name}
                      </Link>
                    </td>
                    <td className="py-1 text-right text-gray-900">${item.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-between font-bold text-red-700 border-t pt-2 mb-8">
            <span>Total Expenses</span>
            <span>${report.totalExpense.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-2xl font-black border-t-4 border-double pt-4">
            <span>Net Income</span>
            <span className={report.netIncome >= 0 ? "text-green-600" : "text-red-600"}>
              ${report.netIncome.toFixed(2)}
            </span>
          </div>
        </div>
      ) : null}
    </main>
  );
}
