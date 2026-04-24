"use client";

import Link from "next/link";
import { api } from "~/trpc/react";

export default function DashboardPage() {
  const accountsQuery = api.account.getAll.useQuery();
  const journalQuery = api.journal.getAll.useQuery();

  // Basic analytics logic (assuming all balances start at 0)
  // In a real app, this would be computed on the server side to handle large volumes of data.

  let totalAssets = 0;
  let totalLiabilities = 0;
  let totalEquity = 0;
  let totalRevenue = 0;
  let totalExpenses = 0;

  if (accountsQuery.data && journalQuery.data) {
    const accountBalances: Record<number, number> = {};

    // Calculate raw balance for each account based on debits/credits, only for APPROVED entries
    journalQuery.data.forEach((entry) => {
      if (entry.status === "APPROVED") {
        entry.lines.forEach((line) => {
          const amt = line.isDebit ? line.amount : -line.amount;
          accountBalances[line.accountId] = (accountBalances[line.accountId] || 0) + amt;
        });
      }
    });

    // Aggregate by account type
    // Accounting rules:
    // Assets & Expenses normally have Debit balances (positive in our raw balance)
    // Liabilities, Equity, & Revenue normally have Credit balances (negative in our raw balance)
    accountsQuery.data.forEach((acc) => {
      const rawBalance = accountBalances[acc.id] || 0;
      switch (acc.type) {
        case "ASSET":
          totalAssets += rawBalance;
          break;
        case "EXPENSE":
          totalExpenses += rawBalance;
          break;
        case "LIABILITY":
          totalLiabilities += -rawBalance;
          break;
        case "EQUITY":
          totalEquity += -rawBalance;
          break;
        case "REVENUE":
          totalRevenue += -rawBalance;
          break;
      }
    });
  }

  const netIncome = totalRevenue - totalExpenses;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500 mt-2">Overview of your financial position</p>
      </div>

      {(accountsQuery.isLoading || journalQuery.isLoading) ? (
        <div className="text-gray-500">Loading financial data...</div>
      ) : (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Net Income</p>
                <h3 className={`text-3xl font-bold mt-2 ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${netIncome.toFixed(2)}
                </h3>
              </div>
              <p className="text-xs text-gray-400 mt-4">Revenue - Expenses</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Assets</p>
                <h3 className="text-3xl font-bold text-indigo-600 mt-2">
                  ${totalAssets.toFixed(2)}
                </h3>
              </div>
              <p className="text-xs text-gray-400 mt-4">What you own</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Liabilities</p>
                <h3 className="text-3xl font-bold text-orange-600 mt-2">
                  ${totalLiabilities.toFixed(2)}
                </h3>
              </div>
              <p className="text-xs text-gray-400 mt-4">What you owe</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/journal" className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  + New Journal Entry
                </Link>
                <Link href="/accounts" className="block w-full text-center bg-white text-indigo-600 border border-indigo-200 py-2 rounded-md hover:bg-indigo-50 transition-colors">
                  Manage Accounts
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Income Statement Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Total Revenue</span>
                  <span className="font-medium text-gray-900">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Total Expenses</span>
                  <span className="font-medium text-gray-900">${totalExpenses.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-gray-800">Net Income</span>
                  <span className={`font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${netIncome.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
