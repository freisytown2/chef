import React from 'react';
import { useApp, ActiveTab } from '../context/AppContext';
import {
  Home,
  Grid,
  Heart,
  Calendar,
  Settings,
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, favorites } = useApp();

  const navItems: { tab: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: number }[] = [
    { tab: 'inicio', label: 'Inicio', icon: Home },
    { tab: 'categorias', label: 'Categorías', icon: Grid },
    { tab: 'planificador', label: 'Plan Semanal', icon: Calendar },
    { tab: 'favoritos', label: 'Favoritos', icon: Heart, badge: favorites.length },
    { tab: 'ajustes', label: 'Ajustes', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-orange-100 dark:border-neutral-800 pb-safe shadow-lg transition-colors">
      <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-1.5">
        {navItems.map(item => {
          const isActive = activeTab === item.tab;
          const Icon = item.icon;

          return (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all focus:outline-none"
              aria-label={item.label}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 stroke-[2.5]'
                      : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-orange-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full min-w-[15px] text-center shadow-xs">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium mt-1 transition-colors ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400 font-bold'
                    : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
