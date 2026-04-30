"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

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

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Income Statement (P&L)</h1>

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
                    <td className="py-1 text-gray-700">{item.account.code} - {item.account.name}</td>
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
                    <td className="py-1 text-gray-700">{item.account.code} - {item.account.name}</td>
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
