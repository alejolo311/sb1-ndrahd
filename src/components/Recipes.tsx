import React, { useState } from 'react';
import { Recipe } from '../types';
import { Clock, Users } from 'lucide-react';

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      menuItemId: 1,
      ingredients: [
        { ingredientId: 1, quantity: 1 },
        { ingredientId: 2, quantity: 1 },
      ],
      instructions: [
        'Season the beef patty with salt and pepper',
        'Grill for 4-5 minutes each side',
        'Toast the buns until golden brown',
        'Assemble the burger with lettuce, tomato, and special sauce',
      ],
      prepTime: 15,
      servings: 1,
    },
    // Add more recipes
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Recipe Management</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Add Recipe
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Classic Burger</h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {recipe.prepTime} minutes
                <Users className="w-4 h-4 ml-4 mr-1" />
                {recipe.servings} serving(s)
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Ingredients:</h4>
                <ul className="mt-2 space-y-1">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.ingredientId} className="text-sm text-gray-500">
                      • Ingredient {ingredient.ingredientId}: {ingredient.quantity} units
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Instructions:</h4>
                <ol className="mt-2 space-y-2">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm text-gray-500">
                      {index + 1}. {instruction}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200">
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}