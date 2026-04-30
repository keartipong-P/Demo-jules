"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function BalanceSheetPage() {
  const [asOfDate, setAsOfDate] = useState("2026-12-31");

  const { data: report, isLoading } = api.reports.getBalanceSheet.useQuery({
    asOfDate: new Date(asOfDate),
  });

  const downloadExcel = () => {
    if (!report) return;

    const rows: any[] = [];

    rows.push({ Account: "Assets" });
    report.assets.forEach(a => {
      rows.push({ "Account Code": a.account.code, "Account Name": a.account.name, Balance: a.balance });
    });
    rows.push({ Account: "Total Assets", Balance: report.totalAssets });

    rows.push({});
    rows.push({ Account: "Liabilities" });
    report.liabilities.forEach(l => {
      rows.push({ "Account Code": l.account.code, "Account Name": l.account.name, Balance: l.balance });
    });
    const totalLiabilities = report.liabilities.reduce((sum, item) => sum + item.balance, 0);
    rows.push({ Account: "Total Liabilities", Balance: totalLiabilities });

    rows.push({});
    rows.push({ Account: "Equity" });
    report.equity.forEach(e => {
      rows.push({ "Account Code": e.account.code, "Account Name": e.account.name, Balance: e.balance });
    });
    rows.push({ Account: "Retained Earnings", Balance: report.retainedEarnings });
    const totalEquity = report.equity.reduce((sum, item) => sum + item.balance, 0) + report.retainedEarnings;
    rows.push({ Account: "Total Equity", Balance: totalEquity });

    rows.push({});
    rows.push({ Account: "Total Liabilities & Equity", Balance: report.totalLiabilitiesAndEquity });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Balance Sheet");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(blob, `balance_sheet_${asOfDate}.xlsx`);
  };

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Balance Sheet</h1>
        <button
          onClick={downloadExcel}
          disabled={!report}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Excel
        </button>
      </div>

      <div className="mb-6 bg-white p-4 rounded border inline-block">
        <label className="block text-sm font-medium text-gray-700">As Of Date</label>
        <input
          type="date"
          className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2"
          value={asOfDate}
          onChange={(e) => setAsOfDate(e.target.value)}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : report ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {/* Assets Column */}
          <div className="bg-white p-8 rounded border shadow-sm">
            <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">Assets</h2>

            {report.assets.length === 0 ? <p className="text-gray-500 italic mb-4">No asset entries.</p> : (
              <table className="w-full mb-4">
                <tbody>
                  {report.assets.map(item => (
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

            <div className="flex justify-between text-xl font-bold border-t-2 border-gray-800 pt-4 mt-8">
              <span>Total Assets</span>
              <span>${report.totalAssets.toFixed(2)}</span>
            </div>
          </div>

          {/* Liabilities & Equity Column */}
          <div className="bg-white p-8 rounded border shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">Liabilities</h2>
              {report.liabilities.length === 0 ? <p className="text-gray-500 italic mb-4">No liability entries.</p> : (
                <table className="w-full mb-8">
                  <tbody>
                    {report.liabilities.map(item => (
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

              <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">Equity</h2>
              <table className="w-full mb-4">
                <tbody>
                  {report.equity.map(item => (
                    <tr key={item.account.id}>
                      <td className="py-1 text-gray-700">
                        <Link href={`/reports/general-ledger?accountId=${item.account.id}`} className="hover:text-indigo-600 hover:underline">
                          {item.account.code} - {item.account.name}
                        </Link>
                      </td>
                      <td className="py-1 text-right text-gray-900">${item.balance.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-1 text-gray-700 font-medium">Retained Earnings</td>
                    <td className="py-1 text-right text-gray-900 font-medium">${report.retainedEarnings.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between text-xl font-bold border-t-2 border-gray-800 pt-4 mt-8">
              <span>Total Liabilities & Equity</span>
              <span>${report.totalLiabilitiesAndEquity.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
