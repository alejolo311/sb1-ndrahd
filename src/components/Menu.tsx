import React, { useState } from 'react';
import { MenuItem } from '../types';

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: 'Classic Burger',
      price: 12.99,
      category: 'Main Course',
      description: 'Juicy beef patty with fresh vegetables and special sauce',
      ingredients: [
        { id: 1, name: 'Beef Patty', quantity: 1, unit: 'piece', minStock: 50, cost: 2.5 },
        { id: 2, name: 'Burger Bun', quantity: 1, unit: 'piece', minStock: 100, cost: 0.5 },
      ],
    },
    // Add more menu items
  ]);

  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Menu Management</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Add Item
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems
          .filter((item) => activeCategory === 'All' || item.category === activeCategory)
          .map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold text-emerald-600">${item.price}</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700">Ingredients:</h4>
                  <ul className="mt-2 space-y-1">
                    {item.ingredients.map((ingredient) => (
                      <li key={ingredient.id} className="text-sm text-gray-500">
                        {ingredient.name} ({ingredient.quantity} {ingredient.unit})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200">
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}