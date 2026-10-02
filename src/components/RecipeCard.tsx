import React from 'react';
import { Recipe } from '../types/recipe';
import { useApp } from '../context/AppContext';
import { Clock, Users, Heart, Sparkles, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  showCategoryBadge?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, showCategoryBadge = true }) => {
  const { setSelectedRecipe, isFavorite, toggleFavorite } = useApp();
  const favorite = isFavorite(recipe.id);

  const difficultyColors = {
    'Fácil': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'Media': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    'Difícil': 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200 dark:border-rose-800',
  };

  const servings = recipe.servings || recipe.portions || 4;

  return (
    <div
      onClick={() => setSelectedRecipe(recipe)}
      className="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer flex flex-col"
    >
      {/* Visual Top Header Banner */}
      <div
        className="h-32 relative flex items-center justify-center overflow-hidden transition-colors"
        style={{
          background: recipe.color
            ? `linear-gradient(135deg, ${recipe.color}22 0%, ${recipe.color}44 100%)`
            : 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
        }}
      >
        {/* Soft Background Circular Pattern */}
        <div
          className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full opacity-20 pointer-events-none"
          style={{ backgroundColor: recipe.color || '#f97316' }}
        />

        {/* Big Emoji / Dish Illustration */}
        <div className="text-6xl drop-shadow-md transform group-hover:scale-110 transition-transform duration-300 select-none">
          {recipe.emoji || '🍲'}
        </div>

        {/* Country Badge */}
        {recipe.country && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs text-[11px] font-bold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-1">
            <span>{recipe.country}</span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xs transition-all ${
            favorite
              ? 'bg-rose-500 text-white shadow-sm'
              : 'bg-white/80 dark:bg-neutral-900/80 text-neutral-500 hover:text-rose-500 dark:text-neutral-300'
          }`}
          aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </button>

        {/* Custom recipe badge */}
        {recipe.isCustom && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-xs flex items-center gap-1">
            <ChefHat className="w-3 h-3" />
            <span>Mi receta</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 line-clamp-2 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {recipe.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Badges & Meta Info */}
        <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300">
          {/* Time */}
          <div className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>{recipe.totalTime} min</span>
          </div>

          {/* Difficulty */}
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
              difficultyColors[recipe.difficulty] || difficultyColors['Fácil']
            }`}
          >
            {recipe.difficulty}
          </span>

          {/* Servings */}
          <div className="flex items-center gap-1 font-medium text-neutral-500 dark:text-neutral-400">
            <Users className="w-3.5 h-3.5" />
            <span>{servings} {servings === 1 ? 'porción' : 'porc.'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
