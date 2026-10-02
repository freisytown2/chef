import React from 'react';
import { useApp } from '../context/AppContext';
import { ChefAvatar } from './ChefAvatar';
import { WifiOff, Calendar, Refrigerator } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, isOnline, setIsPantryModalOpen } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-orange-100 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <button
          onClick={() => setActiveTab('inicio')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          aria-label="Ir al Inicio"
        >
          <ChefAvatar size="md" animate={true} showBadge={isOnline} />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-orange-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                SaborChef
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium leading-none">
              Recetas Internacionales
            </p>
          </div>
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Offline indicator if disconnected */}
          {!isOnline && (
            <div
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
              title="Modo sin conexión activo (catálogo completo disponible)"
            >
              <WifiOff className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Sin conexión</span>
            </div>
          )}

          {/* Quick "Cocina con lo que tienes" Pantry button */}
          <button
            onClick={() => setIsPantryModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-neutral-800 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-neutral-700 hover:bg-amber-100 dark:hover:bg-neutral-700 transition-colors"
            title="Buscar recetas con los ingredientes que tienes en casa"
          >
            <Refrigerator className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Mi despensa</span>
          </button>

          {/* Quick Weekly Planner */}
          <button
            onClick={() => setActiveTab('planificador')}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors ${
              activeTab === 'planificador'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            title="Planificador semanal de comidas"
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>Plan semanal</span>
          </button>
        </div>
      </div>
    </header>
  );
};
