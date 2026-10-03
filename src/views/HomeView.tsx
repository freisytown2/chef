import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { ChefAvatar } from '../components/ChefAvatar';
import { CATEGORIES } from '../data/categories';
import {
  getRecipeOfTheDay,
  getRecommendedRecipes,
  matchesQuery,
  normalizeText,
} from '../data/recipes';
import { getRecipeDishImage } from '../utils/recipeImages';
import {
  Search,
  X,
  SlidersHorizontal,
  Clock,
  Sparkles,
  Calendar,
  ChefHat,
  RotateCcw,
  Flame,
  ArrowRight,
  Refrigerator,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    allRecipes,
    setSelectedRecipe,
    setSelectedCategory,
    setActiveTab,
    setIsPantryModalOpen,
    setIsCustomRecipeModalOpen,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedMaxTime, setSelectedMaxTime] = useState<number | 'all'>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  const [selectedCatFilter, setSelectedCatFilter] = useState<string>('all');

  // Recipe of the day (100% offline auto rotation)
  const recipeOfTheDay = useMemo(() => {
    return getRecipeOfTheDay(allRecipes);
  }, [allRecipes]);

  // Recommendations (rotating)
  const recommendedRecipes = useMemo(() => {
    return getRecommendedRecipes(8, recipeOfTheDay?.id, allRecipes);
  }, [allRecipes, recipeOfTheDay]);

  // Live suggestions when typing
  const searchSuggestions = useMemo(() => {
    const q = searchQuery.trim();
    if (!q || q.length < 2) return [];
    const tokens = normalizeText(q).split(/\s+/).filter(Boolean);

    return allRecipes
      .filter(r => matchesQuery(`${r.name} ${r.country} ${r.tags.join(' ')}`, tokens))
      .slice(0, 5);
  }, [searchQuery, allRecipes]);

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    const q = searchQuery.trim();
    const hasSearch = q.length > 0;
    const hasFilters =
      selectedDifficulty !== 'all' ||
      selectedMaxTime !== 'all' ||
      selectedDiet !== 'all' ||
      selectedCatFilter !== 'all';

    if (!hasSearch && !hasFilters) return null;

    const tokens = hasSearch ? normalizeText(q).split(/\s+/).filter(Boolean) : [];

    return allRecipes.filter(r => {
      // Query check across name, ingredients, tags, country, categories
      if (hasSearch) {
        const fullContent = `${r.name} ${r.country} ${r.tags.join(' ')} ${r.categories.join(' ')} ${r.ingredients.map(i => i.name).join(' ')}`;
        if (!matchesQuery(fullContent, tokens)) {
          return false;
        }
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && r.difficulty !== selectedDifficulty) {
        return false;
      }

      // Max time filter
      if (selectedMaxTime !== 'all' && r.totalTime > Number(selectedMaxTime)) {
        return false;
      }

      // Category filter
      if (selectedCatFilter !== 'all' && !r.categories.includes(selectedCatFilter)) {
        return false;
      }

      // Diet filter
      if (selectedDiet === 'vegetariana' && !r.categories.includes('vegetarianas')) {
        return false;
      }
      if (selectedDiet === 'vegana' && !r.categories.includes('veganas')) {
        return false;
      }
      if (selectedDiet === 'saludable' && !r.categories.includes('saludables')) {
        return false;
      }
      if (selectedDiet === 'rapida' && !r.categories.includes('rapidas')) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedDifficulty,
    selectedMaxTime,
    selectedDiet,
    selectedCatFilter,
    allRecipes,
  ]);

  const clearAllSearchAndFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setSelectedMaxTime('all');
    setSelectedDiet('all');
    setSelectedCatFilter('all');
  };

  const isFiltering = filteredRecipes !== null;

  return (
    <div className="space-y-6 pb-8">
      {/* Search Header Banner */}
      <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-orange-600 via-amber-500 to-rose-600 text-white shadow-lg overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-black/10 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-200">
                ¡Bienvenido a la cocina!
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                ¿Qué te apetece preparar hoy?
              </h1>
            </div>
            <div className="hidden xs:block flex-shrink-0">
              <ChefAvatar size="lg" />
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative">
            <div className="flex items-center bg-white dark:bg-neutral-800 rounded-2xl shadow-md border border-neutral-100 dark:border-neutral-700 px-3 py-1.5 focus-within:ring-2 focus-within:ring-orange-300">
              <Search className="w-5 h-5 text-neutral-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Busca por plato, ingrediente (aguacate, pollo...), país o etiqueta..."
                className="w-full py-2 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-xl transition-colors flex-shrink-0 ${
                  showFilters || selectedDifficulty !== 'all' || selectedMaxTime !== 'all' || selectedDiet !== 'all' || selectedCatFilter !== 'all'
                    ? 'bg-orange-600 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                }`}
                title="Filtros avanzados"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Live Autocomplete suggestions drop */}
            {searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-20">
                <div className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Sugerencias instantáneas
                </div>
                {searchSuggestions.map(s => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedRecipe(s);
                      setSearchQuery('');
                    }}
                    className="w-full px-3.5 py-2.5 text-left text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-orange-50 dark:hover:bg-neutral-700 flex items-center justify-between transition-colors border-b last:border-b-0 border-neutral-100 dark:border-neutral-700/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <img
                        src={getRecipeDishImage(s)}
                        alt={s.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                      />
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">{s.name}</span>
                    </span>
                    <span className="text-[11px] text-neutral-400 font-normal">
                      {s.totalTime} min • {s.country}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick pantry button inside hero */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <button
              onClick={() => setIsPantryModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-xs font-bold transition-all text-white"
            >
              <Refrigerator className="w-3.5 h-3.5" />
              <span>¿Qué cocino con lo que tengo en casa?</span>
            </button>
            <button
              onClick={() => setIsCustomRecipeModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-xs font-bold transition-all text-white"
            >
              <ChefHat className="w-3.5 h-3.5" />
              <span>+ Guardar mi propia receta</span>
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Advanced Filters Tray */}
      {showFilters && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm text-neutral-800 dark:text-neutral-200">
              Filtros combinados de búsqueda
            </span>
            <button
              onClick={clearAllSearchAndFilters}
              className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpiar filtros</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {/* Time filter */}
            <div>
              <label className="block font-bold text-neutral-500 mb-1">Tiempo máximo</label>
              <select
                value={selectedMaxTime}
                onChange={e => setSelectedMaxTime(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold"
              >
                <option value="all">Cualquier duración</option>
                <option value="15">Hasta 15 minutos</option>
                <option value="30">Hasta 30 minutos (Rápidas)</option>
                <option value="45">Hasta 45 minutos</option>
                <option value="60">Hasta 1 hora</option>
              </select>
            </div>

            {/* Difficulty filter */}
            <div>
              <label className="block font-bold text-neutral-500 mb-1">Dificultad</label>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold"
              >
                <option value="all">Todas las dificultades</option>
                <option value="Fácil">Fácil</option>
                <option value="Media">Media</option>
                <option value="Difícil">Difícil</option>
              </select>
            </div>

            {/* Diet filter */}
            <div>
              <label className="block font-bold text-neutral-500 mb-1">Tipo de alimentación</label>
              <select
                value={selectedDiet}
                onChange={e => setSelectedDiet(e.target.value)}
                className="w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold"
              >
                <option value="all">Cualquiera</option>
                <option value="saludable">Saludables y ligeras</option>
                <option value="vegetariana">Vegetarianas</option>
                <option value="vegana">Veganas</option>
                <option value="rapida">Rápidas</option>
              </select>
            </div>

            {/* Category filter */}
            <div>
              <label className="block font-bold text-neutral-500 mb-1">Sección o categoría</label>
              <select
                value={selectedCatFilter}
                onChange={e => setSelectedCatFilter(e.target.value)}
                className="w-full p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-semibold"
              >
                <option value="all">Todas las secciones</option>
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.emoji} {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* IF FILTERING: DISPLAY SEARCH RESULTS */}
      {isFiltering ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-neutral-900 dark:text-white flex items-center gap-2">
              <span>Resultados encontrados</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-bold">
                {filteredRecipes.length}
              </span>
            </h2>
            <button
              onClick={clearAllSearchAndFilters}
              className="text-xs font-semibold text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Borrar búsqueda
            </button>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 space-y-3">
              <div className="text-5xl select-none">🔍</div>
              <h3 className="font-extrabold text-base text-neutral-800 dark:text-neutral-100">
                No encontramos recetas que coincidan exactamente
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                Esa receta específica no está en el catálogo actual. Puedes probar con otros ingredientes
                o explorar nuestras 20 secciones gastronómicas.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={clearAllSearchAndFilters}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-xs"
                >
                  Ver todo el catálogo
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </section>
      ) : (
        /* NORMAL HOME CONTENT: RECIPE OF DAY, CATEGORIES, SHORTCUTS & RECOMMENDATIONS */
        <>
          {/* Receta del Día Banner */}
          {recipeOfTheDay && (
            <section className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
                    <Flame className="w-4 h-4 fill-current" />
                  </span>
                  <h2 className="font-black text-base sm:text-lg text-neutral-900 dark:text-white">
                    Receta del día
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                  Rotación diaria automática
                </span>
              </div>

              <div
                onClick={() => setSelectedRecipe(recipeOfTheDay)}
                className="group relative rounded-3xl p-5 sm:p-6 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden active:scale-[0.99]"
              >
                {/* Decorative circles */}
                <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/20 backdrop-blur-xs text-[11px] font-bold">
                      <span>{recipeOfTheDay.country}</span>
                      <span>•</span>
                      <span>{recipeOfTheDay.difficulty}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-xs">
                      {recipeOfTheDay.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-orange-100 line-clamp-2 max-w-xl leading-relaxed">
                      {recipeOfTheDay.description}
                    </p>

                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-4 text-xs font-bold text-orange-100">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {recipeOfTheDay.totalTime} minutos
                      </span>
                      <span>•</span>
                      <span>{recipeOfTheDay.ingredients.length} ingredientes</span>
                    </div>
                  </div>

                  {/* Dish visual presentation photo */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-white/40 flex-shrink-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={getRecipeDishImage(recipeOfTheDay)}
                      alt={recipeOfTheDay.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Categories Horizontal Carousel / Grid */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-base sm:text-lg text-neutral-900 dark:text-white">
                Explorar Secciones ({CATEGORIES.length})
              </h2>
              <button
                onClick={() => setActiveTab('categorias')}
                className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
              >
                <span>Ver todas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
              {CATEGORIES.slice(0, 10).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveTab('categorias');
                  }}
                  className="p-3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-2xs hover:shadow-xs hover:border-orange-300 dark:hover:border-neutral-600 transition-all text-left flex items-center gap-2.5 group active:scale-95"
                >
                  <span className="text-2xl select-none group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-xs text-neutral-800 dark:text-neutral-100 block truncate group-hover:text-orange-600 dark:group-hover:text-orange-400">
                      {cat.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Quick Shortcuts to Weekly Planner & Pantry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Meal Planner Banner */}
            <div
              onClick={() => setActiveTab('planificador')}
              className="p-4 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-800/80 border border-amber-200 dark:border-neutral-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.98]"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400">
                  Organización
                </span>
                <h3 className="font-black text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                  Planificador Semanal
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Organiza tus comidas de lunes a domingo y programa tus menús.
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
            </div>

            {/* Pantry Banner */}
            <div
              onClick={() => setIsPantryModalOpen(true)}
              className="p-4 rounded-3xl bg-gradient-to-br from-orange-50 to-rose-50 dark:from-neutral-800 dark:to-neutral-800/80 border border-rose-200 dark:border-neutral-700 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.98]"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-rose-700 dark:text-rose-400">
                  Aprovechamiento
                </span>
                <h3 className="font-black text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                  Cocina con tu Despensa
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Elige los ingredientes que tienes y descubre recetas al instante.
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Refrigerator className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Recommended Recipes Grid */}
          <section className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-base sm:text-lg text-neutral-900 dark:text-white">
                Recomendaciones variadas para ti
              </h2>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                Rotación continua
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
