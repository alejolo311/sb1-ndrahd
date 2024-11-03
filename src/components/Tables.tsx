import React, { useState } from 'react';
import { Table } from '../types';

export default function Tables() {
  const [tables, setTables] = useState<Table[]>([
    { id: 1, number: 1, capacity: 4, status: 'available' },
    { id: 2, number: 2, capacity: 2, status: 'occupied' },
    { id: 3, number: 3, capacity: 6, status: 'reserved' },
    // Add more tables as needed
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'occupied':
        return 'bg-red-100 text-red-800';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Table Management</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Add Table
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tables.map((table) => (
          <div key={table.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Table {table.number}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  table.status
                )}`}
              >
                {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Capacity: {table.capacity} people</p>
              {table.currentOrder && (
                <>
                  <p>Current Order: #{table.currentOrder.id}</p>
                  <p>Time: {table.currentOrder.startTime.toLocaleTimeString()}</p>
                </>
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200">
                Take Order
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}