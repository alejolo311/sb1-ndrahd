import React from 'react';
import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Daily Revenue', value: '$2,850', icon: TrendingUp, change: '+12.3%', changeType: 'positive' },
    { name: 'Active Tables', value: '12/20', icon: Users, change: '85%', changeType: 'neutral' },
    { name: 'Pending Orders', value: '8', icon: ShoppingBag, change: '-2', changeType: 'negative' },
    { name: 'Monthly Revenue', value: '$45,200', icon: DollarSign, change: '+8.1%', changeType: 'positive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div
                          className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.changeType === 'positive'
                              ? 'text-green-600'
                              : stat.changeType === 'negative'
                              ? 'text-red-600'
                              : 'text-gray-500'
                          }`}
                        >
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Orders</h2>
          {/* Order list component would go here */}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Low Stock Alerts</h2>
          {/* Low stock alerts component would go here */}
        </div>
      </div>
    </div>
  );
}