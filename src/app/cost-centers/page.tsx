"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function CostCentersPage() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const utils = api.useUtils();

  const { data: costCenters, isLoading } = api.costCenters.getAll.useQuery();

  const createCostCenter = api.costCenters.create.useMutation({
    onSuccess: () => {
      setCode("");
      setName("");
      void utils.costCenters.getAll.invalidate();
    },
    onError: (e) => {
      alert(e.message);
    }
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !name) return;
    createCostCenter.mutate({
      code,
      name,
    });
  };

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Cost Centers / Dimensions</h1>

      <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">New Cost Center</h2>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Code</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm border focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="e.g. CC-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm border focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sales Department"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={createCostCenter.isPending}
            className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {createCostCenter.isPending ? "Creating..." : "Create Cost Center"}
          </button>
        </form>
      </div>

      <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {isLoading ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center">Loading cost centers...</td>
              </tr>
            ) : costCenters?.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">No cost centers found.</td>
              </tr>
            ) : (
              costCenters?.map((cc) => (
                <tr key={cc.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cc.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cc.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${cc.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {cc.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
