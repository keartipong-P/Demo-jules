"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function AgingReportPage() {
  const [type, setType] = useState<"RECEIVABLE" | "PAYABLE">("RECEIVABLE");
  const [asOfDate, setAsOfDate] = useState("2026-12-31");

  const { data: report, isLoading } = api.reports.getAgingReport.useQuery({
    type,
    asOfDate: new Date(asOfDate),
  });

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Aging Report</h1>

      <div className="mb-6 flex gap-4 bg-white p-4 rounded border">
        <div>
          <label className="block text-sm font-medium text-gray-700">Report Type</label>
          <select
            className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2"
            value={type}
            onChange={(e) => setType(e.target.value as "RECEIVABLE" | "PAYABLE")}
          >
            <option value="RECEIVABLE">AR Aging (Accounts Receivable)</option>
            <option value="PAYABLE">AP Aging (Accounts Payable)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">As Of Date</label>
          <input
            type="date"
            className="mt-1 block rounded-md border-gray-300 shadow-sm border p-2"
            value={asOfDate}
            onChange={(e) => setAsOfDate(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : report ? (
        <div className="bg-white rounded-lg border shadow-sm overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Contact</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Current</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">1 - 30 Days</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">31 - 60 Days</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">61 - 90 Days</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">&gt; 90 Days</th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-gray-900">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {report.details.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">No open invoices found.</td>
                </tr>
              ) : (
                report.details.map((row: any) => (
                  <tr key={row.contact.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.contact.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">${row.current.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">${row.days30.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">${row.days60.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">${row.days90.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-500">${row.older.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-gray-900">${row.total.toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="bg-gray-100 font-bold border-t-2 border-gray-300">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Grand Total</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${report.summary.current.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${report.summary.days30.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${report.summary.days60.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${report.summary.days90.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">${report.summary.older.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                  ${(report.summary.current + report.summary.days30 + report.summary.days60 + report.summary.days90 + report.summary.older).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : null}
    </main>
  );
}
