import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { RecipeCard } from '../components/RecipeCard';
import { ChevronLeft, Search, X } from 'lucide-react';
import { normalizeText, matchesQuery } from '../data/recipes';

export const CategoriesView: React.FC = () => {
  const { allRecipes, selectedCategory, setSelectedCategory } = useApp();
  const [catSearch, setCatSearch] = useState('');

  // Active category object
  const activeCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  // Recipes in selected category
  const categoryRecipes = React.useMemo(() => {
    if (!selectedCategory) return [];
    let list = allRecipes.filter(r => r.categories.includes(selectedCategory));

    if (catSearch.trim()) {
      const tokens = normalizeText(catSearch).split(/\s+/).filter(Boolean);
      list = list.filter(r => matchesQuery(`${r.name} ${r.country} ${r.tags.join(' ')}`, tokens));
    }
    return list;
  }, [selectedCategory, allRecipes, catSearch]);

  // If a category is selected: show recipe listing for that section
  if (selectedCategory && activeCategoryObj) {
    return (
      <div className="space-y-5 pb-8 animate-in fade-in duration-150">
        {/* Category Header */}
        <div
          className="rounded-3xl p-5 sm:p-7 text-white shadow-md relative overflow-hidden"
          style={{ background: activeCategoryObj.bgGradient }}
        >
          <button
            onClick={() => {
              setSelectedCategory(null);
              setCatSearch('');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/20 hover:bg-black/30 backdrop-blur-xs text-xs font-bold text-white mb-3 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Volver a todas las secciones</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl select-none">{activeCategoryObj.emoji}</span>
            <div>
              <h1 className="text-xl sm:text-3xl font-black">{activeCategoryObj.name}</h1>
              <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
                {activeCategoryObj.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Search within this section */}
        <div className="relative">
          <div className="flex items-center bg-white dark:bg-neutral-800 rounded-2xl shadow-xs border border-neutral-200 dark:border-neutral-700 px-3 py-1.5">
            <Search className="w-4 h-4 text-neutral-400 mr-2" />
            <input
              type="text"
              value={catSearch}
              onChange={e => setCatSearch(e.target.value)}
              placeholder={`Buscar en ${activeCategoryObj.name.toLowerCase()}...`}
              className="w-full py-1.5 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-sm focus:outline-none"
            />
            {catSearch && (
              <button
                onClick={() => setCatSearch('')}
                className="text-neutral-400 hover:text-neutral-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Count summary */}
        <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
          <span>{categoryRecipes.length} recetas disponibles</span>
          {catSearch && (
            <button onClick={() => setCatSearch('')} className="text-orange-600 hover:underline">
              Limpiar filtro
            </button>
          )}
        </div>

        {/* Recipes Grid */}
        {categoryRecipes.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-2">
            <p className="font-bold text-sm text-neutral-700 dark:text-neutral-200">
              No se encontraron recetas con "{catSearch}" en esta sección.
            </p>
            <button
              onClick={() => setCatSearch('')}
              className="text-xs text-orange-600 font-bold hover:underline"
            >
              Mostrar todas las recetas de {activeCategoryObj.name}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} showCategoryBadge={false} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // All 20 Categories Grid
  return (
    <div className="space-y-5 pb-8 animate-in fade-in duration-150">
      <div>
        <h1 className="text-2xl font-black text-neutral-900 dark:text-white">
          Secciones de Recetas
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          20 categorías con más de 300 platos internacionales organizados para ti
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {CATEGORIES.map(cat => {
          const count = allRecipes.filter(r => r.categories.includes(cat.id)).length;
          return (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="group p-4 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-3xl sm:text-4xl select-none group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 truncate group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-neutral-400 block mt-0.5">
                    {count} recetas completas
                  </span>
                </div>
              </div>

              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.accentColor }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
