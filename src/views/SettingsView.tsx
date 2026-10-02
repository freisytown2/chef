import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TextSize } from '../types/recipe';
import {
  Sun,
  Moon,
  Type,
  Trash2,
  RefreshCw,
  HardDrive,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const {
    preferences,
    updatePreferences,
    allRecipes,
    customRecipes,
    favorites,
    checkForCatalogUpdates,
    clearAllLocalData,
  } = useApp();

  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [updateResult, setUpdateResult] = useState<{ success: boolean; message: string } | null>(
    null
  );
  const [confirmClear, setConfirmClear] = useState(false);

  const handleCheckUpdate = async () => {
    setCheckingUpdate(true);
    setUpdateResult(null);
    const res = await checkForCatalogUpdates();
    setUpdateResult(res);
    setCheckingUpdate(false);
  };

  const handleClearData = () => {
    if (confirmClear) {
      clearAllLocalData();
      setConfirmClear(false);
      alert('Se han borrado los datos locales y restablecido las preferencias.');
    } else {
      setConfirmClear(true);
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-2xl mx-auto animate-in fade-in duration-150">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black text-neutral-900 dark:text-white">Ajustes & Soporte</h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
          Personaliza la apariencia, el tamaño del texto y gestiona tus datos locales
        </p>
      </div>

      {/* Theme Setting */}
      <div className="p-4 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
            {preferences.theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-neutral-900 dark:text-neutral-100">
              Tema Visual
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Alterna entre modo claro para el día y modo oscuro para la noche
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => updatePreferences({ theme: 'light' })}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              preferences.theme === 'light'
                ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                : 'bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Modo Claro</span>
          </button>
          <button
            onClick={() => updatePreferences({ theme: 'dark' })}
            className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              preferences.theme === 'dark'
                ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                : 'bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Modo Oscuro</span>
          </button>
        </div>
      </div>

      {/* Text Size Setting */}
      <div className="p-4 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-neutral-900 dark:text-neutral-100">
              Tamaño del Texto
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Ajusta la legibilidad para cocinar cómodamente con el teléfono a distancia
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-1">
          {(
            [
              { size: 'sm', label: 'Pequeño', desc: 'Compacto' },
              { size: 'base', label: 'Normal', desc: 'Estándar' },
              { size: 'lg', label: 'Grande', desc: 'Cómodo' },
              { size: 'xl', label: 'Extra', desc: 'Cocina' },
            ] as const
          ).map(opt => (
            <button
              key={opt.size}
              onClick={() => updatePreferences({ textSize: opt.size as TextSize })}
              className={`py-2 px-1 rounded-xl border text-center transition-all ${
                preferences.textSize === opt.size
                  ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                  : 'bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <span className="block font-bold text-xs">{opt.label}</span>
              <span className="text-[10px] opacity-80">{opt.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Catalog & Storage Status */}
      <div className="p-4 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-neutral-900 dark:text-neutral-100">
                Estado del Catálogo Local
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {allRecipes.length} recetas totales listas para funcionar sin conexión
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="w-4 h-4" />
            <span>100% Offline</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 text-center text-xs">
          <div>
            <span className="text-neutral-400 block text-[10px]">Catálogo base</span>
            <span className="font-black text-sm text-neutral-800 dark:text-neutral-200">
              316 recetas
            </span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px]">Mis recetas</span>
            <span className="font-black text-sm text-neutral-800 dark:text-neutral-200">
              {customRecipes.length} creadas
            </span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px]">Favoritos</span>
            <span className="font-black text-sm text-neutral-800 dark:text-neutral-200">
              {favorites.length} guardados
            </span>
          </div>
        </div>

        {/* Update Checker */}
        <div className="pt-1">
          <button
            onClick={handleCheckUpdate}
            disabled={checkingUpdate}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700/60 font-bold text-xs transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${checkingUpdate ? 'animate-spin' : ''}`} />
            <span>
              {checkingUpdate ? 'Comprobando actualizaciones...' : 'Comprobar actualización del catálogo'}
            </span>
          </button>

          {updateResult && (
            <div
              className={`mt-2 p-3 rounded-xl text-xs font-semibold flex items-start gap-2 ${
                updateResult.success
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200'
              }`}
            >
              {updateResult.success ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-500 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-500 mt-0.5" />
              )}
              <span>{updateResult.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Clear Local Data with Confirmation */}
      <div className="p-4 rounded-3xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-3">
        <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-extrabold text-sm">
          <Trash2 className="w-4 h-4 text-rose-600" />
          <span>Restablecer Datos Locales</span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Borra tu historial de navegación, recetas favoritas y recetas personales
          almacenadas en este dispositivo.
        </p>

        {confirmClear ? (
          <div className="space-y-2 p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-rose-300 dark:border-rose-800">
            <span className="text-xs font-bold text-rose-600 block">
              ¿Estás absolutamente seguro? Esta acción no se puede deshacer.
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleClearData}
                className="flex-1 py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
              >
                Sí, borrar todo
              </button>
              <button
                onClick={() => setConfirmClear(false)}
                className="flex-1 py-2 px-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 font-bold text-xs"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setConfirmClear(true)}
            className="py-2 px-4 rounded-xl border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100/60 font-bold text-xs transition-colors"
          >
            Borrar historial y datos del dispositivo
          </button>
        )}
      </div>
    </div>
  );
};
