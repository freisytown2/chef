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
  Volume2,
  VolumeX,
  CheckCircle,
  ChefHat,
  Flame,
} from 'lucide-react';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const steps = recipe.steps || [];
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  // Timer state
  const stepDuration = recipe.stepTimes?.[currentStepIdx] || 0;
  const [timerSeconds, setTimerSeconds] = useState(stepDuration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerAlarmTriggered, setTimerAlarmTriggered] = useState(false);

  // Speech synthesis state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSpeechSupport] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window);

  // Reset timer whenever step changes
  useEffect(() => {
    const newStepDuration = recipe.stepTimes?.[currentStepIdx] || 0;
    setTimerSeconds(newStepDuration * 60);
    setIsTimerRunning(false);
    setTimerAlarmTriggered(false);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentStepIdx, recipe]);

  // Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(sec => {
          if (sec <= 1) {
            setIsTimerRunning(false);
            setTimerAlarmTriggered(true);
            playChimeSound();
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  // Beep chime synthesis with Web Audio API (works without external audio files)
  const playChimeSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2); // A5

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);

      // Vibration if available on mobile
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }
    } catch {
      // Audio might be blocked until user interacts
    }
  };

  const toggleSpeakCurrentStep = () => {
    if (!hasSpeechSupport) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToSpeak = `Paso ${currentStepIdx + 1}: ${steps[currentStepIdx]}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'es-ES';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const progressPercent = Math.round(((currentStepIdx + 1) / Math.max(1, steps.length)) * 100);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900 text-white flex flex-col justify-between animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="px-4 py-3 bg-neutral-950/80 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-orange-600 text-white">
            <Flame className="w-5 h-5 animate-pulse" />
          </span>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400 block">
              Modo Cocina Guiado
            </span>
            <h2 className="text-sm font-bold line-clamp-1 max-w-[220px] sm:max-w-md">
              {recipe.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasSpeechSupport && (
            <button
              onClick={toggleSpeakCurrentStep}
              className={`p-2 rounded-xl transition-all ${
                isSpeaking
                  ? 'bg-orange-600 text-white animate-pulse'
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
              title={isSpeaking ? 'Detener lectura' : 'Leer paso en voz alta'}
            >
              {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          )}

          <button
            onClick={() => {
              if (hasSpeechSupport) window.speechSynthesis.cancel();
              onClose();
            }}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
            aria-label="Salir del Modo Cocina"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-neutral-800 h-1.5">
        <div
          className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Center Area: Large Instruction Card */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 flex flex-col justify-center overflow-y-auto">
        {/* Step Counter Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-orange-950 text-orange-400 font-extrabold text-xs sm:text-sm border border-orange-800">
            Paso {currentStepIdx + 1} de {steps.length}
          </span>
          <span className="text-xs font-semibold text-neutral-400">{progressPercent}% completado</span>
        </div>

        {/* Big Instruction Text */}
        <div className="bg-neutral-800/90 rounded-3xl p-6 sm:p-10 border border-neutral-700 shadow-xl space-y-6">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold leading-relaxed text-neutral-100 select-text">
            {steps[currentStepIdx] || '¡Has completado todos los pasos de la receta!'}
          </p>

          {/* Interactive Step Timer if duration exists */}
          {stepDuration > 0 && (
            <div className="pt-4 border-t border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className={`w-8 h-8 ${isTimerRunning ? 'text-orange-500 animate-spin' : 'text-neutral-400'}`} />
                <div>
                  <span className="text-[11px] uppercase font-bold text-neutral-400 block">
                    Temporizador del paso
                  </span>
                  <span
                    className={`font-mono text-3xl sm:text-4xl font-black ${
                      timerAlarmTriggered
                        ? 'text-rose-500 animate-bounce'
                        : isTimerRunning
                        ? 'text-orange-400'
                        : 'text-white'
                    }`}
                  >
                    {formatTimer(timerSeconds)}
                  </span>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 ${
                    isTimerRunning
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{timerSeconds === stepDuration * 60 ? 'Iniciar' : 'Reanudar'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(stepDuration * 60);
                    setTimerAlarmTriggered(false);
                  }}
                  className="p-2.5 rounded-xl bg-neutral-700 hover:bg-neutral-600 text-neutral-300 hover:text-white transition-all"
                  title="Reiniciar temporizador"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Alarm completion alert */}
          {timerAlarmTriggered && (
            <div className="p-3 rounded-2xl bg-rose-950/80 border border-rose-600 text-rose-200 text-center text-sm font-bold animate-pulse">
              🔔 ¡Tiempo cumplido! Comprueba la cocción antes de continuar.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Large Controls */}
      <div className="p-4 bg-neutral-950/90 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentStepIdx(idx => Math.max(0, idx - 1))}
            disabled={currentStepIdx === 0}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-base transition-all ${
              currentStepIdx === 0
                ? 'bg-neutral-800/40 text-neutral-600 cursor-not-allowed'
                : 'bg-neutral-800 hover:bg-neutral-700 text-white active:scale-95 shadow-md'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Paso anterior</span>
          </button>

          {currentStepIdx < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStepIdx(idx => Math.min(steps.length - 1, idx + 1))}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base shadow-lg transition-all active:scale-95"
            >
              <span>Siguiente paso</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base shadow-lg transition-all active:scale-95"
            >
              <CheckCircle className="w-5 h-5" />
              <span>¡Plato terminado!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
