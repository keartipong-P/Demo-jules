"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function BalanceSheetPage() {
  const [asOfDate, setAsOfDate] = useState("2026-12-31");

  const { data: report, isLoading } = api.reports.getBalanceSheet.useQuery({
    asOfDate: new Date(asOfDate),
  });

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Balance Sheet</h1>

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
                      <td className="py-1 text-gray-700">{item.account.code} - {item.account.name}</td>
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
                        <td className="py-1 text-gray-700">{item.account.code} - {item.account.name}</td>
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
                      <td className="py-1 text-gray-700">{item.account.code} - {item.account.name}</td>
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
