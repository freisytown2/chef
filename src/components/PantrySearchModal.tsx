import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { matchRecipesWithPantry, PantryMatchResult } from '../data/recipes';
import { Recipe } from '../types/recipe';
import {
  X,
  Refrigerator,
  Plus,
  Trash2,
  Check,
  AlertCircle,
  Clock,
  ChefHat,
  Search,
} from 'lucide-react';

const COMMON_PANTRY_CHIPS = [
  'huevos',
  'arroz',
  'cebolla',
  'ajo',
  'patatas',
  'tomate',
  'pollo',
  'pasta',
  'leche',
  'queso',
  'atún',
  'aceite de oliva',
  'zanahoria',
  'limón',
  'harina',
  'mantequilla',
  'espinacas',
  'garbanzos',
  'pimiento',
  'aguacate',
  'pan',
  'salmón',
];

interface PantrySearchModalProps {
  onClose: () => void;
}

export const PantrySearchModal: React.FC<PantrySearchModalProps> = ({ onClose }) => {
  const {
    pantryItems,
    addPantryItem,
    removePantryItem,
    clearPantry,
    allRecipes,
    setSelectedRecipe,
  } = useApp();

  const [inputVal, setInputVal] = useState('');

  const handleAdd = () => {
    if (inputVal.trim()) {
      addPantryItem(inputVal.trim());
      setInputVal('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  const matchResults: PantryMatchResult[] = useMemo(() => {
    return matchRecipesWithPantry(pantryItems, allRecipes);
  }, [pantryItems, allRecipes]);

  const handleSelectRecipe = (r: Recipe) => {
    setSelectedRecipe(r);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs">
              <Refrigerator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg">Cocina con lo que tienes</h2>
              <p className="text-xs text-orange-100">
                Encuentra platos según los ingredientes disponibles en tu casa
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
            aria-label="Cerrar búsqueda por despensa"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pantry Management Area */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 space-y-3 bg-neutral-50 dark:bg-neutral-800/40">
          {/* Input to add ingredients */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un ingrediente (ej. calabacín, champiñones...)"
                className="w-full pl-3 pr-8 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {inputVal && (
                <button
                  onClick={() => setInputVal('')}
                  className="absolute right-2.5 top-3 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={handleAdd}
              disabled={!inputVal.trim()}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-sm flex items-center gap-1 shadow-xs transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir</span>
            </button>
          </div>

          {/* Quick chip suggestions */}
          <div>
            <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 block mb-1.5">
              Sugerencias rápidas para añadir:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
              {COMMON_PANTRY_CHIPS.map(chip => {
                const isSelected = pantryItems.includes(chip);
                return (
                  <button
                    key={chip}
                    onClick={() => (isSelected ? removePantryItem(chip) : addPantryItem(chip))}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                      isSelected
                        ? 'bg-orange-600 text-white shadow-2xs font-bold'
                        : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-orange-50 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 inline mr-1" />}
                    {chip}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current selected items in pantry */}
          {pantryItems.length > 0 && (
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-neutral-500">
              <span>{pantryItems.length} ingredientes en tu despensa</span>
              <button
                onClick={clearPantry}
                className="text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Vaciar lista</span>
              </button>
            </div>
          )}
        </div>

        {/* Results List */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-neutral-700 dark:text-neutral-200">
              Recetas sugeridas ({matchResults.length})
            </h3>
            <span className="text-xs text-neutral-400">Ordenadas por coincidencia</span>
          </div>

          {matchResults.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <ChefHat className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto" />
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                Añade más ingredientes a tu despensa para encontrar platos afines
              </p>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                Prueba agregando alimentos básicos como huevos, cebolla, arroz, patatas o tomate.
              </p>
            </div>
          ) : (
            matchResults.slice(0, 30).map(({ recipe, matchedCount, totalIngredients, matchPercentage, missingIngredients }) => (
              <div
                key={recipe.id}
                onClick={() => handleSelectRecipe(recipe)}
                className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs hover:border-orange-400 dark:hover:border-orange-500 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl select-none flex-shrink-0 p-1.5 rounded-xl bg-orange-50 dark:bg-neutral-700/50">
                    {recipe.emoji || '🍲'}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {recipe.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-orange-500" />
                        {recipe.totalTime} min
                      </span>
                      <span>•</span>
                      <span>{recipe.difficulty}</span>
                      <span>•</span>
                      <span>{recipe.country}</span>
                    </div>

                    {/* Missing ingredients tag summary */}
                    <div className="mt-2 text-xs">
                      {missingIngredients.length === 0 ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                          <Check className="w-3.5 h-3.5" />
                          ¡Tienes todos los ingredientes!
                        </span>
                      ) : (
                        <div className="text-neutral-500 dark:text-neutral-400">
                          <span className="font-semibold text-rose-600 dark:text-rose-400">
                            Te faltan {missingIngredients.length}:
                          </span>{' '}
                          <span className="text-[11px] italic">
                            {missingIngredients.slice(0, 3).map(m => m.name).join(', ')}
                            {missingIngredients.length > 3 ? '...' : ''}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Match percentage badge and action */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-100 dark:border-neutral-700">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs font-black px-2.5 py-1 rounded-xl shadow-2xs ${
                        matchPercentage >= 75
                          ? 'bg-emerald-500 text-white'
                          : matchPercentage >= 50
                          ? 'bg-amber-500 text-white'
                          : 'bg-neutral-600 text-white'
                      }`}
                    >
                      {matchPercentage}% listo
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400">
                      ({matchedCount}/{totalIngredients})
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
