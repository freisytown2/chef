import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types/recipe';
import {
  Calendar,
  Plus,
  Trash2,
  ChefHat,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';

const DAYS = [
  { key: 'lunes', label: 'Lunes' },
  { key: 'martes', label: 'Martes' },
  { key: 'miercoles', label: 'Miércoles' },
  { key: 'jueves', label: 'Jueves' },
  { key: 'viernes', label: 'Viernes' },
  { key: 'sabado', label: 'Sábado' },
  { key: 'domingo', label: 'Domingo' },
];

const MEAL_TYPES = [
  { key: 'desayuno', label: 'Desayuno', emoji: '🍳' },
  { key: 'almuerzo', label: 'Almuerzo', emoji: '🍲' },
  { key: 'cena', label: 'Cena', emoji: '🥗' },
  { key: 'snack', label: 'Snack / Merienda', emoji: '🍎' },
] as const;

export const MealPlannerView: React.FC = () => {
  const {
    mealPlan,
    setMealPlanItem,
    clearMealPlan,
    allRecipes,
    setSelectedRecipe,
  } = useApp();

  // Selector modal state to pick a recipe for a slot
  const [activeSlot, setActiveSlot] = useState<{
    day: string;
    mealType: 'desayuno' | 'almuerzo' | 'cena' | 'snack';
  } | null>(null);

  const [recipePickerSearch, setRecipePickerSearch] = useState('');

  const pickerRecipes = React.useMemo(() => {
    if (!recipePickerSearch.trim()) return allRecipes.slice(0, 40);
    const q = recipePickerSearch.toLowerCase();
    return allRecipes.filter(
      r => r.name.toLowerCase().includes(q) || r.country.toLowerCase().includes(q)
    );
  }, [allRecipes, recipePickerSearch]);

  const countPlannedMeals = Object.values(mealPlan).reduce((acc, day) => {
    return acc + Object.values(day.meals).filter(Boolean).length;
  }, 0);

  return (
    <div className="space-y-5 pb-8 animate-in fade-in duration-150">
      {/* Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 dark:text-white">
            Planificador Semanal
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
            Organiza tus comidas de lunes a domingo para toda la familia
          </p>
        </div>

        <div className="flex items-center gap-2">
          {countPlannedMeals > 0 && (
            <button
              onClick={() => {
                if (confirm('¿Vaciar la planificación de toda la semana?')) {
                  clearMealPlan();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-rose-600 hover:border-rose-300 dark:hover:border-rose-800 text-xs font-semibold transition-colors"
              title="Vaciar plan semanal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Vaciar plan</span>
            </button>
          )}
        </div>
      </div>

      {/* 7 Days Columns */}
      <div className="space-y-4">
        {DAYS.map(day => {
          const dayData = mealPlan[day.key] || { dayOfWeek: day.key as any, label: day.label, meals: {} };
          return (
            <div
              key={day.key}
              className="p-4 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-700/60 pb-2">
                <span className="font-black text-sm text-neutral-900 dark:text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>{day.label}</span>
                </span>
                <span className="text-[11px] font-semibold text-neutral-400">
                  {Object.values(dayData.meals).filter(Boolean).length} comidas asignadas
                </span>
              </div>

              {/* 4 Meals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {MEAL_TYPES.map(meal => {
                  const assignedRecipe: Recipe | null | undefined = dayData.meals[meal.key];
                  return (
                    <div
                      key={meal.key}
                      className="p-2.5 rounded-2xl bg-neutral-50 dark:bg-neutral-700/40 border border-neutral-200/80 dark:border-neutral-700 flex flex-col justify-between min-h-[92px]"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-1">
                        <span className="flex items-center gap-1">
                          <span>{meal.emoji}</span>
                          <span>{meal.label}</span>
                        </span>
                        {assignedRecipe && (
                          <button
                            onClick={() => setMealPlanItem(day.key, meal.key, null)}
                            className="text-neutral-400 hover:text-rose-500 p-0.5"
                            title="Quitar plato"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {assignedRecipe ? (
                        <div
                          onClick={() => setSelectedRecipe(assignedRecipe)}
                          className="cursor-pointer group mt-1"
                        >
                          <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 line-clamp-2 group-hover:text-orange-600 transition-colors">
                            {assignedRecipe.name}
                          </span>
                          <span className="text-[10px] text-neutral-400 block mt-0.5">
                            {assignedRecipe.totalTime} min • {assignedRecipe.difficulty}
                          </span>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setActiveSlot({ day: day.key, mealType: meal.key });
                            setRecipePickerSearch('');
                          }}
                          className="mt-1 w-full py-2 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 hover:border-orange-500 hover:text-orange-600 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Elegir receta</span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recipe Picker Modal */}
      {activeSlot && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[85vh]">
            <div className="p-4 bg-orange-600 text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base">Seleccionar Receta</h3>
                <p className="text-xs text-orange-100 capitalize">
                  Para {activeSlot.day} ({activeSlot.mealType})
                </p>
              </div>
              <button
                onClick={() => setActiveSlot(null)}
                className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
              <div className="flex items-center bg-white dark:bg-neutral-900 rounded-xl px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 text-xs">
                <Search className="w-4 h-4 text-neutral-400 mr-2" />
                <input
                  type="text"
                  value={recipePickerSearch}
                  onChange={e => setRecipePickerSearch(e.target.value)}
                  placeholder="Buscar receta en el catálogo..."
                  className="w-full bg-transparent text-sm focus:outline-none text-neutral-900 dark:text-neutral-100"
                />
              </div>
            </div>

            {/* Recipes List */}
            <div className="p-3 overflow-y-auto space-y-1.5 flex-1 divide-y divide-neutral-100 dark:divide-neutral-800">
              {pickerRecipes.map(recipe => (
                <button
                  key={recipe.id}
                  onClick={() => {
                    setMealPlanItem(activeSlot.day, activeSlot.mealType, recipe);
                    setActiveSlot(null);
                  }}
                  className="w-full pt-2 first:pt-0 pb-2 text-left flex items-center justify-between gap-3 hover:bg-orange-50 dark:hover:bg-neutral-800/80 p-2 rounded-xl transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{recipe.emoji || '🍲'}</span>
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 block group-hover:text-orange-600 transition-colors">
                        {recipe.name}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {recipe.totalTime} min • {recipe.difficulty} • {recipe.country}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Elegir
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
