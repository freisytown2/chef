import React, { useState, useEffect, useRef } from 'react';
import { Recipe } from '../types/recipe';
import { useApp } from '../context/AppContext';
import { scaleIngredient } from '../data/recipes';
import { getRecipeDishImage } from '../utils/recipeImages';
import {
  X,
  Users,
  ChefHat,
  Heart,
  Share2,
  AlertTriangle,
  Lightbulb,
  Repeat,
  Activity,
  Check,
  CheckSquare,
  Square,
  Trash2,
  Clock,
  Sparkles,
  Camera,
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
} from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
  const {
    isFavorite,
    toggleFavorite,
    deleteCustomRecipe,
  } = useApp();

  const originalServings = recipe.servings || recipe.portions || 4;
  const [servings, setServings] = useState<number>(originalServings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [copiedToast, setCopiedToast] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // In-step timer state
  const [activeTimerStep, setActiveTimerStep] = useState<number | null>(null);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const favorite = isFavorite(recipe.id);
  const dishImageUrl = getRecipeDishImage(recipe);
  const stepsList = recipe.steps || [];

  // Toggle ingredient checklist
  const handleToggleIngredient = (id: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle step completion
  const handleToggleStep = (idx: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Timer logic for steps
  const startStepTimer = (stepIdx: number, durationMinutes: number) => {
    if (activeTimerStep === stepIdx && isTimerRunning) {
      setIsTimerRunning(false);
      return;
    }
    if (activeTimerStep === stepIdx && !isTimerRunning && timerSecondsLeft > 0) {
      setIsTimerRunning(true);
      return;
    }

    setActiveTimerStep(stepIdx);
    setTimerSecondsLeft(durationMinutes * 60);
    setIsTimerRunning(true);
  };

  const resetStepTimer = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setIsTimerRunning(false);
    setTimerSecondsLeft(0);
    setActiveTimerStep(null);
  };

  useEffect(() => {
    if (isTimerRunning && timerSecondsLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            if (activeTimerStep !== null) {
              setCompletedSteps(cs => ({ ...cs, [activeTimerStep]: true }));
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning, timerSecondsLeft, activeTimerStep]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalStepsCount = stepsList.length;
  const completedStepsCount = Object.values(completedSteps).filter(Boolean).length;
  const stepsProgressPercent = totalStepsCount > 0 ? Math.round((completedStepsCount / totalStepsCount) * 100) : 0;

  const handleShare = async () => {
    const stepsText = stepsList.map((s, idx) => `${idx + 1}. ${s}`).join('\n');
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

👩‍🍳 PREPARACIÓN PASO A PASO:
${stepsText}

💡 Descubre más recetas en SaborChef!`;

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[94vh]">
        {/* Modal Header Banner with Dish Image */}
        <div className="relative h-52 sm:h-64 overflow-hidden bg-neutral-900">
          <img
            src={dishImageUrl}
            alt={recipe.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 left-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all active:scale-95 z-10"
            aria-label="Cerrar receta"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Action buttons (Share & Favorite) */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all active:scale-95"
              title="Compartir o copiar texto de la receta"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-all active:scale-95 ${
                favorite
                  ? 'bg-rose-500 text-white'
                  : 'bg-black/50 hover:bg-black/75 text-white'
              }`}
              title={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Title & Badges inside header banner */}
          <div className="absolute bottom-3 left-4 right-4 z-10 space-y-1.5 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white shadow-xs">
                {recipe.difficulty}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                {recipe.country || 'Internacional'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-amber-300 border border-white/20 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{recipe.totalTime} min</span>
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-md">
              {recipe.name}
            </h1>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-neutral-800 dark:text-neutral-100">
          {/* Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {recipe.description}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-orange-50/70 dark:bg-neutral-800/80 border border-orange-100 dark:border-neutral-700 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Preparación</span>
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
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">Tiempo Total</span>
              <span className="font-extrabold text-sm text-orange-600 dark:text-orange-400">
                {recipe.totalTime} min
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FOTO DEL PLATO TERMINADO: "ASÍ TE VA A QUEDAR" (Reemplaza Modo Cocina)    */}
          {/* ========================================================================= */}
          <div className="rounded-3xl overflow-hidden border border-orange-200 dark:border-neutral-700 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-orange-500 text-white shadow-xs">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-black text-sm sm:text-base text-neutral-900 dark:text-white leading-tight">
                    Resultado Final: Así te va a quedar
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Foto de presentación y emplatado del plato terminado
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsImageZoomed(true)}
                className="flex items-center gap-1 text-[11px] font-bold text-orange-600 dark:text-orange-400 hover:underline bg-white/80 dark:bg-neutral-800 px-2.5 py-1 rounded-lg border border-orange-100 dark:border-neutral-700"
                title="Ampliar foto del plato"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ampliar</span>
              </button>
            </div>

            {/* Showcase Image */}
            <div
              onClick={() => setIsImageZoomed(true)}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-neutral-900 h-60 sm:h-72"
            >
              <img
                src={dishImageUrl}
                alt={`Presentación final de ${recipe.name}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-[10px] font-extrabold uppercase tracking-wide mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Emplatado final de autor</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-white drop-shadow-xs">
                  {recipe.name} listo para servir a la mesa
                </p>
                <p className="text-[11px] text-neutral-200 mt-0.5 line-clamp-1">
                  Sigue los pasos detallados a continuación para lograr este mismo dorado, aroma y textura.
                </p>
              </div>
            </div>

            {/* Serving Tip Banner */}
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Consejo de emplatado:</strong> Para que te quede idéntico a la foto, sirve en plato amplio caliente, acompaña con una ramita de hierba fresca y deja reposar 2 minutos antes de cortar o servir.
              </p>
            </div>
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

          {/* ========================================================================= */}
          {/* PREPARACIÓN PASO A PASO INTERACTIVA (Sigue los pasos de la receta)        */}
          {/* ========================================================================= */}
          <div className="space-y-3 pt-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h2 className="font-extrabold text-base sm:text-lg">
                  Sigue los pasos de la receta
                </h2>
              </div>

              {/* Progress & Reset */}
              <div className="flex items-center gap-3 text-xs">
                <span className="font-bold text-neutral-600 dark:text-neutral-300">
                  {completedStepsCount} de {totalStepsCount} completados ({stepsProgressPercent}%)
                </span>
                {completedStepsCount > 0 && (
                  <button
                    onClick={() => setCompletedSteps({})}
                    className="text-[11px] font-bold text-neutral-400 hover:text-orange-600 transition-colors"
                  >
                    Reiniciar
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${stepsProgressPercent}%` }}
              />
            </div>

            {/* Steps List */}
            <div className="space-y-3 pt-1">
              {stepsList.map((step, idx) => {
                const stepDuration = recipe.stepTimes?.[idx];
                const isStepCompleted = Boolean(completedSteps[idx]);
                const isTimerActiveForThisStep = activeTimerStep === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleStep(idx)}
                    className={`group relative flex flex-col gap-2.5 p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                      isStepCompleted
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 shadow-2xs'
                        : 'bg-white dark:bg-neutral-800 border-neutral-200/90 dark:border-neutral-700 hover:border-orange-300 dark:hover:border-neutral-600 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Step Number or Check Circle */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStep(idx);
                        }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full font-black text-xs flex items-center justify-center transition-all ${
                          isStepCompleted
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 group-hover:bg-orange-200'
                        }`}
                      >
                        {isStepCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
                      </button>

                      {/* Step Instruction */}
                      <div className="flex-1">
                        <p
                          className={`text-sm leading-relaxed transition-colors ${
                            isStepCompleted
                              ? 'line-through text-neutral-400 dark:text-neutral-500 font-medium'
                              : 'text-neutral-900 dark:text-neutral-100 font-medium'
                          }`}
                        >
                          {step}
                        </p>
                      </div>
                    </div>

                    {/* Step Duration & In-Step Active Timer */}
                    {stepDuration && stepDuration > 0 && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1 pt-2 border-t border-neutral-100 dark:border-neutral-700/60 flex flex-wrap items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400 font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Tiempo estimado: {stepDuration} min</span>
                        </div>

                        {/* Timer control */}
                        <div className="flex items-center gap-2">
                          {isTimerActiveForThisStep ? (
                            <div className="flex items-center gap-2 bg-neutral-900 text-white px-3 py-1.5 rounded-xl shadow-xs text-xs font-mono">
                              <span className={`font-black ${timerSecondsLeft === 0 ? 'text-emerald-400 animate-pulse' : 'text-amber-400'}`}>
                                {timerSecondsLeft === 0 ? '¡Listo!' : formatTimer(timerSecondsLeft)}
                              </span>
                              {timerSecondsLeft > 0 && (
                                <button
                                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                                  className="p-1 hover:text-orange-400"
                                  title={isTimerRunning ? 'Pausar' : 'Reanudar'}
                                >
                                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                                </button>
                              )}
                              <button
                                onClick={resetStepTimer}
                                className="p-1 hover:text-rose-400"
                                title="Reiniciar temporizador"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => startStepTimer(idx, stepDuration)}
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 hover:bg-orange-200 text-xs font-bold transition-colors"
                            >
                              <Play className="w-3 h-3 fill-current" />
                              <span>Iniciar temporizador ({stepDuration} min)</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
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

        {/* Zoom Lightbox Modal */}
        {isImageZoomed && (
          <div
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
          >
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
              aria-label="Cerrar vista ampliada"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl relative">
              <img
                src={dishImageUrl}
                alt={recipe.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-center">
                <p className="font-extrabold text-base">{recipe.name}</p>
                <p className="text-xs text-neutral-300">Presentación y acabado final del plato</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
