import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { Heart, Clock, ChefHat, Plus, Trash2 } from 'lucide-react';

export const FavoritesView: React.FC = () => {
  const {
    allRecipes,
    favorites,
    history,
    customRecipes,
    setActiveTab,
    setIsCustomRecipeModalOpen,
  } = useApp();

  const [subTab, setSubTab] = useState<'favoritos' | 'historial' | 'propias'>('favoritos');

  // Recipes saved in favorites
  const favoriteRecipes = allRecipes.filter(r => favorites.includes(r.id));

  // Recipes in history in ordered sequence
  const historyRecipes = history
    .map(id => allRecipes.find(r => r.id === id))
    .filter((r): r is typeof allRecipes[0] => Boolean(r));

  return (
    <div className="space-y-5 pb-8 animate-in fade-in duration-150">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 dark:text-white">
            Tu Cocina Personal
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Platos guardados, historial de navegación y creaciones propias
          </p>
        </div>

        <button
          onClick={() => setIsCustomRecipeModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Nueva receta</span>
        </button>
      </div>

      {/* Sub Tabs Selector */}
      <div className="flex p-1 bg-neutral-100 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 text-xs font-bold">
        <button
          onClick={() => setSubTab('favoritos')}
          className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            subTab === 'favoritos'
              ? 'bg-white dark:bg-neutral-700 text-orange-600 dark:text-orange-400 shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Favoritos ({favoriteRecipes.length})</span>
        </button>

        <button
          onClick={() => setSubTab('historial')}
          className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            subTab === 'historial'
              ? 'bg-white dark:bg-neutral-700 text-orange-600 dark:text-orange-400 shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Historial ({historyRecipes.length})</span>
        </button>

        <button
          onClick={() => setSubTab('propias')}
          className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
            subTab === 'propias'
              ? 'bg-white dark:bg-neutral-700 text-orange-600 dark:text-orange-400 shadow-xs'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
          }`}
        >
          <ChefHat className="w-4 h-4" />
          <span>Mis Recetas ({customRecipes.length})</span>
        </button>
      </div>

      {/* Tab 1: Favorites */}
      {subTab === 'favoritos' && (
        <>
          {favoriteRecipes.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-3">
              <Heart className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto" />
              <h3 className="font-extrabold text-base text-neutral-800 dark:text-neutral-200">
                Aún no tienes recetas favoritas guardadas
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Pulsa en el corazón de cualquier receta del catálogo para tenerla siempre a mano,
                incluso sin conexión a internet.
              </p>
              <button
                onClick={() => setActiveTab('inicio')}
                className="mt-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-xs"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favoriteRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Tab 2: History */}
      {subTab === 'historial' && (
        <>
          {historyRecipes.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-3">
              <Clock className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto" />
              <h3 className="font-extrabold text-base text-neutral-800 dark:text-neutral-200">
                Tu historial de recetas está vacío
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Los platos que vayas consultando se guardarán aquí automáticamente en tu dispositivo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {historyRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Tab 3: Custom Recipes */}
      {subTab === 'propias' && (
        <>
          {customRecipes.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-3">
              <ChefHat className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto" />
              <h3 className="font-extrabold text-base text-neutral-800 dark:text-neutral-200">
                No tienes recetas personales creadas
              </h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Añade tus platos familiares, creaciones propias o recetas secretas para que
                nunca se pierdan.
              </p>
              <button
                onClick={() => setIsCustomRecipeModalOpen(true)}
                className="mt-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-xs"
              >
                Crear mi primera receta
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {customRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
