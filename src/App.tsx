import React, { useState } from 'react';
import { LayoutDashboard, Users, Utensils, BookOpen, Package, DollarSign, ChefHat } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Tables from './components/Tables';
import Menu from './components/Menu';
import Inventory from './components/Inventory';
import Finance from './components/Finance';
import Recipes from './components/Recipes';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Tables', icon: Users, id: 'tables' },
    { name: 'Menu', icon: Utensils, id: 'menu' },
    { name: 'Inventory', icon: Package, id: 'inventory' },
    { name: 'Finance', icon: DollarSign, id: 'finance' },
    { name: 'Recipes', icon: ChefHat, id: 'recipes' },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'tables':
        return <Tables />;
      case 'menu':
        return <Menu />;
      case 'inventory':
        return <Inventory />;
      case 'finance':
        return <Finance />;
      case 'recipes':
        return <Recipes />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar navigation={navigation} activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">{renderView()}</div>
      </main>
    </div>
  );
}

export default App;