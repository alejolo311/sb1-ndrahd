import React from 'react';
import { BookOpen } from 'lucide-react';

interface SidebarProps {
  navigation: {
    name: string;
    icon: React.ElementType;
    id: string;
  }[];
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ navigation, activeView, setActiveView }: SidebarProps) {
  return (
    <div className="flex flex-col w-64 bg-gray-900">
      <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
        <BookOpen className="w-8 h-8 text-emerald-500" />
        <span className="ml-2 text-xl font-semibold text-white">RestaurantOS</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex items-center w-full px-4 py-2 text-sm rounded-lg ${
                activeView === item.id
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}