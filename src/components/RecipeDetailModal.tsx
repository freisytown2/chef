import React, { useState } from 'react';
import { Recipe } from '../types/recipe';
import { useApp } from '../context/AppContext';
import { scaleIngredient } from '../data/recipes';
import {
  X,
  Users,
  ChefHat,
  Heart,
  Share2,
  Play,
  AlertTriangle,
  Lightbulb,
  Repeat,
  Activity,
  Check,
  CheckSquare,
  Square,
  Trash2,
} from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
  const {
    isFavorite,
    toggleFavorite,
    setCookingRecipe,
    deleteCustomRecipe,
  } = useApp();

  const originalServings = recipe.servings || recipe.portions || 4;
  const [servings, setServings] = useState<number>(originalServings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [copiedToast, setCopiedToast] = useState(false);

  const favorite = isFavorite(recipe.id);

  const handleToggleIngredient = (id: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = async () => {
    const stepsText = (recipe.steps || []).map((s, idx) => `${idx + 1}. ${s}`).join('\n');
    const ingsText = recipe.ingredients
      .map(i => {
        const scaled = scaleIngredient(i, originalServings, servings);
        return `- ${scaled.amount > 0 ? `${scaled.amount} ${scaled.unit} ` : ''}${scaled.name}`;
      })
      .join('\n');

    const shareContent = `🍳 ${recipe.name} (${recipe.country || 'Internacional'})
${recipe.description}

⏱️ Tiempo: ${recipe.totalTime} min | 👥 Porciones: ${servings} | Dificultad: ${recipe.difficulty}

📋 INGREDIENTES:
${ingsText}

👩‍🍳 PREPARACIÓN:
${stepsText}

💡 Descubre más en SaborChef!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.name,
          text: shareContent,
        });
        return;
      } catch (e) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareContent);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[92vh]">
        {/* Modal Header Banner */}
        <div
          className="relative h-44 sm:h-52 flex items-center justify-center p-4 transition-colors"
          style={{
            background: recipe.color
              ? `linear-gradient(135deg, ${recipe.color}33 0%, ${recipe.color}66 100%)`
              : 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-95 z-10"
            aria-label="Cerrar receta"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Action buttons (Share & Favorite) */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-95"
              title="Compartir o copiar texto de la receta"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 ${
                favorite
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200'
              }`}
              title={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Big Illustration Emoji */}
          <div className="text-7xl sm:text-8xl drop-shadow-lg select-none">
            {recipe.emoji || '🍲'}
          </div>

          {/* Bottom badge overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold">
            <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs text-neutral-800 dark:text-neutral-200 shadow-xs border border-neutral-200 dark:border-neutral-700">
              {recipe.country || 'Internacional'}
            </span>
            <span className="px-3 py-1 rounded-full bg-orange-600 text-white shadow-xs">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-neutral-800 dark:text-neutral-100">
          {/* Title & Description */}
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white leading-tight">
              {recipe.name}
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-orange-50/70 dark:bg-neutral-800/80 border border-orange-100 dark:border-neutral-700 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Prep</span>
              <span className="font-extrabold text-sm text-neutral-800 dark:text-neutral-100">
                {recipe.prepTime} min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center border-x border-orange-200 dark:border-neutral-700">
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Cocción</span>
              <span className="font-extrabold text-sm text-neutral-800 dark:text-neutral-100">
                {recipe.cookTime} min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Total</span>
              <span className="font-extrabold text-sm text-orange-600 dark:text-orange-400">
                {recipe.totalTime} min
              </span>
            </div>
          </div>

          {/* Action CTA: Start Cooking Mode */}
          <div>
            <button
              onClick={() => {
                setCookingRecipe(recipe);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base shadow-md transition-all active:scale-95"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Iniciar Modo Cocina Interactivo</span>
            </button>
          </div>

          {/* Portions & Ingredients Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h2 className="font-extrabold text-base sm:text-lg">Ingredientes</h2>
              </div>

              {/* Portion adjustment controls */}
              <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <span className="text-xs font-semibold px-1 text-neutral-500 dark:text-neutral-400">
                  Porciones:
                </span>
                <button
                  onClick={() => setServings(s => Math.max(1, s - 1))}
                  className="w-7 h-7 rounded-lg bg-white dark:bg-neutral-700 font-bold text-sm flex items-center justify-center shadow-xs active:scale-90"
                  aria-label="Disminuir porciones"
                >
                  -
                </button>
                <span className="font-extrabold text-sm w-5 text-center">{servings}</span>
                <button
                  onClick={() => setServings(s => Math.min(24, s + 1))}
                  className="w-7 h-7 rounded-lg bg-white dark:bg-neutral-700 font-bold text-sm flex items-center justify-center shadow-xs active:scale-90"
                  aria-label="Aumentar porciones"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients interactive checklist */}
            <div className="space-y-2 bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-2xl border border-neutral-100 dark:border-neutral-700">
              {recipe.ingredients.map(ing => {
                const scaled = scaleIngredient(ing, originalServings, servings);
                const isChecked = Boolean(checkedIngredients[ing.id]);

                return (
                  <label
                    key={ing.id}
                    onClick={() => handleToggleIngredient(ing.id)}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700/60 transition-colors cursor-pointer select-none"
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-orange-600 dark:text-orange-400 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-orange-100 dark:fill-orange-950" />
                      ) : (
                        <Square className="w-5 h-5 text-neutral-400" />
                      )}
                    </button>
                    <div className="flex-1 text-sm leading-snug">
                      <span className={`font-semibold ${isChecked ? 'line-through text-neutral-400 dark:text-neutral-500' : 'text-neutral-800 dark:text-neutral-100'}`}>
                        {scaled.amount > 0 ? `${scaled.amount} ${scaled.unit} ` : ''}
                        {scaled.name}
                      </span>
                      {scaled.notes && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">
                          ({scaled.notes})
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Preparation Steps Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h2 className="font-extrabold text-base sm:text-lg">Preparación paso a paso</h2>
            </div>

            <div className="space-y-3">
              {(recipe.steps || []).map((step, idx) => {
                const stepDuration = recipe.stepTimes?.[idx];
                return (
                  <div
                    key={idx}
                    className="flex gap-3.5 p-3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 shadow-2xs"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-extrabold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {step}
                      </p>
                      {stepDuration && stepDuration > 0 && (
                        <span className="inline-block mt-1 text-[11px] font-semibold text-orange-600 dark:text-orange-400">
                          ⏱️ Duración orientativa: {stepDuration} min
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chef Tips Section */}
          {recipe.tips && recipe.tips.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-extrabold text-sm">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Consejos del Chef</span>
              </div>
              <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside leading-relaxed">
                {recipe.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Substitutions Section */}
          {recipe.substitutions && recipe.substitutions.length > 0 && (
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 space-y-2">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-extrabold text-sm">
                <Repeat className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Variaciones y sustitutos recomendados</span>
              </div>
              <ul className="text-xs text-neutral-700 dark:text-neutral-300 space-y-1 list-disc list-inside leading-relaxed">
                {recipe.substitutions.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Allergens warning */}
          {recipe.allergens && recipe.allergens.length > 0 && (
            <div className="p-3.5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-rose-800 dark:text-rose-300 mr-1.5">
                  Alérgenos presentes:
                </span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {recipe.allergens.join(', ')}
                </span>
              </div>
            </div>
          )}

          {/* Nutrition Estimate */}
          {recipe.nutrition && (
            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold text-neutral-800 dark:text-neutral-200">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span>Información Nutricional (por porción estimada)</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-700">
                  <span className="text-[10px] font-semibold text-neutral-400 block">Calorías</span>
                  <span className="font-black text-sm text-neutral-800 dark:text-neutral-100">
                    {recipe.nutrition.calories} kcal
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-700">
                  <span className="text-[10px] font-semibold text-neutral-400 block">Proteínas</span>
                  <span className="font-black text-sm text-neutral-800 dark:text-neutral-100">
                    {recipe.nutrition.protein} g
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-700">
                  <span className="text-[10px] font-semibold text-neutral-400 block">Carbos</span>
                  <span className="font-black text-sm text-neutral-800 dark:text-neutral-100">
                    {recipe.nutrition.carbs} g
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white dark:bg-neutral-700">
                  <span className="text-[10px] font-semibold text-neutral-400 block">Grasas</span>
                  <span className="font-black text-sm text-neutral-800 dark:text-neutral-100">
                    {recipe.nutrition.fat} g
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-neutral-400 text-center italic leading-tight">
                {recipe.nutrition.method ||
                  'Cálculo estimado orientativo basado en valores medios estándar de ingredientes. No constituye prescripción médica ni plan dietético.'}
              </p>
            </div>
          )}

          {/* Delete custom recipe button */}
          {recipe.isCustom && (
            <div className="pt-2">
              <button
                onClick={() => {
                  if (confirm('¿Deseas eliminar esta receta personal?')) {
                    deleteCustomRecipe(recipe.id);
                    onClose();
                  }
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Eliminar mi receta</span>
              </button>
            </div>
          )}
        </div>

        {/* Toast notification */}
        {copiedToast && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>¡Receta copiada al portapapeles!</span>
          </div>
        )}
      </div>
    </div>
  );
};
