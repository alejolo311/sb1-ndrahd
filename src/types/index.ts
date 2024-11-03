export interface Table {
  id: number;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved';
  currentOrder?: Order;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
  cost: number;
}

export interface Order {
  id: number;
  tableId: number;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'served' | 'paid';
  startTime: Date;
  endTime?: Date;
  total: number;
}

export interface OrderItem {
  menuItemId: number;
  quantity: number;
  notes?: string;
}

export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
}

export interface Recipe {
  id: number;
  menuItemId: number;
  ingredients: RecipeIngredient[];
  instructions: string[];
  prepTime: number;
  servings: number;
}

export interface RecipeIngredient {
  ingredientId: number;
  quantity: number;
}