import React, { useState, useEffect, useRef } from 'react';
import { Recipe } from '../types/recipe';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  ChefHat,
  Sparkles,
} from 'lucide-react';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const steps = recipe.steps || [];
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Timer state
  const stepDuration = recipe.stepTimes?.[currentStep] || 0;
  const [timeLeft, setTimeLeft] = useState<number>(stepDuration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // When step changes, reset timer to current step duration
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const duration = recipe.stepTimes?.[currentStep] || 0;
    setTimeLeft(duration * 60);
    setIsTimerRunning(false);
  }, [currentStep, recipe.stepTimes]);

  // Timer countdown
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
      setIsCompleted(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex flex-col justify-between text-white p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-orange-600 flex items-center justify-center shadow-md">
            <ChefHat className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block">
              Modo Cocina Interactivo
            </span>
            <h2 className="font-extrabold text-base sm:text-lg text-white line-clamp-1">
              {recipe.name}
            </h2>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Cerrar modo cocina"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col justify-center py-6">
        {!isCompleted ? (
          <div className="space-y-6">
            {/* Step Counter & Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-400">
                <span>
                  Paso {currentStep + 1} de {steps.length}
                </span>
                <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Text Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl min-h-[220px] flex flex-col justify-center">
              <span className="inline-block w-8 h-8 rounded-full bg-orange-600/30 text-orange-400 font-black text-sm flex items-center justify-center mb-4">
                {currentStep + 1}
              </span>
              <p className="text-lg sm:text-2xl font-bold leading-relaxed text-neutral-100">
                {steps[currentStep] || 'Sigue las instrucciones del recetario.'}
              </p>
            </div>

            {/* In-Step Timer (if step has duration) */}
            {stepDuration > 0 && (
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-300 font-semibold">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Temporizador del paso:</span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xl font-black ${
                      timeLeft === 0 ? 'text-emerald-400 animate-pulse' : 'text-amber-400'
                    }`}
                  >
                    {timeLeft === 0 ? '¡Tiempo cumplido!' : formatTime(timeLeft)}
                  </span>

                  {timeLeft > 0 && (
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                      title={isTimerRunning ? 'Pausar' : 'Iniciar'}
                    >
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimeLeft(stepDuration * 60);
                    }}
                    className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                    title="Reiniciar temporizador"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">¡Plato terminado con éxito!</h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Has completado todos los pasos de la receta. Sirve caliente, disfruta con tu familia o amigos y ¡buen provecho!
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setIsCompleted(false);
                }}
                className="px-4 py-2.5 rounded-xl border border-neutral-700 text-xs font-bold hover:bg-neutral-800 text-neutral-300"
              >
                Ver pasos de nuevo
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md"
              >
                Finalizar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="max-w-2xl w-full mx-auto pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0 && !isCompleted}
          className="flex items-center gap-2 py-3 px-5 rounded-2xl border border-neutral-700 hover:bg-neutral-800 disabled:opacity-40 disabled:pointer-events-none font-bold text-sm transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {!isCompleted ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 py-3 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-lg transition-all active:scale-95"
          >
            <span>{currentStep === steps.length - 1 ? 'Terminar receta' : 'Siguiente paso'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onClose}
            className="flex items-center gap-2 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg transition-all active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Cerrar modo cocina</span>
          </button>
        )}
      </div>
    </div>
  );
};
