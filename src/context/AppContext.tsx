import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Recipe,
  MealPlanDay,
  UserPreferences,
  TextSize,
  AppLanguage,
} from '../types/recipe';
import {
  CATALOG_RECIPES,
  normalizeRecipe,
} from '../data/recipes';

export type ActiveTab =
  | 'inicio'
  | 'categorias'
  | 'favoritos'
  | 'planificador'
  | 'ajustes'
  | 'despensa'
  | 'mis-recetas';

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCategory: string | null;
  setSelectedCategory: (catId: string | null) => void;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  cookingRecipe: Recipe | null;
  setCookingRecipe: (recipe: Recipe | null) => void;
  
  // Recipes
  allRecipes: Recipe[];
  catalogRecipes: Recipe[];
  customRecipes: Recipe[];
  favorites: string[];
  history: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  addToHistory: (recipeId: string) => void;
  saveCustomRecipe: (recipe: Recipe) => void;
  deleteCustomRecipe: (recipeId: string) => void;

  // Meal Planner
  mealPlan: Record<string, MealPlanDay>;
  setMealPlanItem: (day: string, mealType: 'desayuno' | 'almuerzo' | 'cena' | 'snack', recipe: Recipe | null) => void;
  clearMealPlan: () => void;

  // Pantry
  pantryItems: string[];
  addPantryItem: (item: string) => void;
  removePantryItem: (item: string) => void;
  clearPantry: () => void;

  // Settings & Preferences
  preferences: UserPreferences;
  updatePreferences: (partial: Partial<UserPreferences>) => void;
  isOnline: boolean;
  lastCatalogUpdate: string;
  checkForCatalogUpdates: () => Promise<{ success: boolean; message: string }>;
  clearAllLocalData: () => void;

  // Modals
  isPantryModalOpen: boolean;
  setIsPantryModalOpen: (open: boolean) => void;
  isCustomRecipeModalOpen: boolean;
  setIsCustomRecipeModalOpen: (open: boolean) => void;
}

const DEFAULT_PREFERENCES: UserPreferences = {
  theme: 'light',
  textSize: 'base',
  language: 'es',
  offlinePrepared: true,
  pantryItems: [],
};

const DEFAULT_MEAL_PLAN: Record<string, MealPlanDay> = {
  lunes: { dayOfWeek: 'lunes', label: 'Lunes', meals: {} },
  martes: { dayOfWeek: 'martes', label: 'Martes', meals: {} },
  miercoles: { dayOfWeek: 'miercoles', label: 'Miércoles', meals: {} },
  jueves: { dayOfWeek: 'jueves', label: 'Jueves', meals: {} },
  viernes: { dayOfWeek: 'viernes', label: 'Viernes', meals: {} },
  sabado: { dayOfWeek: 'sabado', label: 'Sábado', meals: {} },
  domingo: { dayOfWeek: 'domingo', label: 'Domingo', meals: {} },
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [cookingRecipe, setCookingRecipe] = useState<Recipe | null>(null);

  const [isPantryModalOpen, setIsPantryModalOpen] = useState(false);
  const [isCustomRecipeModalOpen, setIsCustomRecipeModalOpen] = useState(false);

  // Network status
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    if (typeof navigator !== 'undefined') return navigator.onLine;
    return true;
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Preferences (theme, text size, language)
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    try {
      const saved = localStorage.getItem('saborchef_preferences');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return DEFAULT_PREFERENCES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_preferences', JSON.stringify(preferences));
    } catch (e) {
      console.warn('Could not save preferences', e);
    }

    // Apply theme
    const root = document.documentElement;
    if (preferences.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply text size attribute to html root
    root.setAttribute('data-text-size', preferences.textSize || 'base');
  }, [preferences]);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saborchef_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Could not save favorites', e);
    }
  }, [favorites]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev =>
      prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
    );
  };

  const isFavorite = (recipeId: string) => favorites.includes(recipeId);

  // Browsing History
  const [history, setHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saborchef_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_history', JSON.stringify(history));
    } catch (e) {
      console.warn('Could not save history', e);
    }
  }, [history]);

  const addToHistory = (recipeId: string) => {
    setHistory(prev => {
      const filtered = prev.filter(id => id !== recipeId);
      return [recipeId, ...filtered].slice(0, 50); // Keep last 50
    });
  };

  // Custom Recipes
  const [customRecipes, setCustomRecipes] = useState<Recipe[]>(() => {
    try {
      const saved = localStorage.getItem('saborchef_custom_recipes');
      return saved ? JSON.parse(saved).map(normalizeRecipe) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_custom_recipes', JSON.stringify(customRecipes));
    } catch (e) {
      console.warn('Could not save custom recipes', e);
    }
  }, [customRecipes]);

  const saveCustomRecipe = (recipe: Recipe) => {
    const normalized = normalizeRecipe({
      ...recipe,
      id: recipe.id || `custom-${Date.now()}`,
      isCustom: true,
      createdAt: recipe.createdAt || new Date().toISOString(),
    });

    setCustomRecipes(prev => {
      const exists = prev.findIndex(r => r.id === normalized.id);
      if (exists >= 0) {
        const updated = [...prev];
        updated[exists] = normalized;
        return updated;
      }
      return [normalized, ...prev];
    });
  };

  const deleteCustomRecipe = (recipeId: string) => {
    setCustomRecipes(prev => prev.filter(r => r.id !== recipeId));
    if (favorites.includes(recipeId)) {
      toggleFavorite(recipeId);
    }
    if (selectedRecipe?.id === recipeId) {
      setSelectedRecipe(null);
    }
  };

  // Combine Catalog + Custom Recipes
  const allRecipes = useMemo(() => {
    return [...customRecipes, ...CATALOG_RECIPES];
  }, [customRecipes]);

  // Meal Planner
  const [mealPlan, setMealPlan] = useState<Record<string, MealPlanDay>>(() => {
    try {
      const saved = localStorage.getItem('saborchef_meal_plan');
      return saved ? JSON.parse(saved) : DEFAULT_MEAL_PLAN;
    } catch {
      return DEFAULT_MEAL_PLAN;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_meal_plan', JSON.stringify(mealPlan));
    } catch (e) {
      console.warn('Could not save meal plan', e);
    }
  }, [mealPlan]);

  const setMealPlanItem = (
    day: string,
    mealType: 'desayuno' | 'almuerzo' | 'cena' | 'snack',
    recipe: Recipe | null
  ) => {
    setMealPlan(prev => {
      const currentDay = prev[day] || { dayOfWeek: day as any, label: day, meals: {} };
      return {
        ...prev,
        [day]: {
          ...currentDay,
          meals: {
            ...currentDay.meals,
            [mealType]: recipe,
          },
        },
      };
    });
  };

  const clearMealPlan = () => {
    setMealPlan(DEFAULT_MEAL_PLAN);
  };

  // Pantry
  const [pantryItems, setPantryItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saborchef_pantry');
      return saved ? JSON.parse(saved) : ['huevos', 'arroz', 'cebolla', 'ajo', 'aceite de oliva', 'tomate', 'sal'];
    } catch {
      return ['huevos', 'arroz', 'cebolla', 'ajo', 'aceite de oliva', 'tomate', 'sal'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saborchef_pantry', JSON.stringify(pantryItems));
    } catch (e) {
      console.warn('Could not save pantry', e);
    }
  }, [pantryItems]);

  const addPantryItem = (item: string) => {
    const clean = item.trim().toLowerCase();
    if (!clean) return;
    if (!pantryItems.includes(clean)) {
      setPantryItems(prev => [clean, ...prev]);
    }
  };

  const removePantryItem = (item: string) => {
    setPantryItems(prev => prev.filter(i => i.toLowerCase() !== item.toLowerCase()));
  };

  const clearPantry = () => {
    setPantryItems([]);
  };

  // Catalog update checker
  const [lastCatalogUpdate, setLastCatalogUpdate] = useState<string>(() => {
    return localStorage.getItem('saborchef_catalog_sync') || new Date().toISOString();
  });

  const checkForCatalogUpdates = async (): Promise<{ success: boolean; message: string }> => {
    try {
      const res = await fetch('/api/recipes/version', { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        const dateStr = new Date().toISOString();
        localStorage.setItem('saborchef_catalog_sync', dateStr);
        setLastCatalogUpdate(dateStr);
        return {
          success: true,
          message: `Catálogo sincronizado. Versión: ${data.version || '1.0.0'} (${data.totalRecipes || allRecipes.length} recetas disponibles sin conexión).`,
        };
      }
    } catch {
      // Offline fallback
    }

    return {
      success: true,
      message: `El catálogo local cuenta con ${allRecipes.length} recetas completas disponibles y listas para su uso sin conexión a internet.`,
    };
  };

  const updatePreferences = (partial: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...partial }));
  };

  const clearAllLocalData = () => {
    try {
      localStorage.removeItem('saborchef_favorites');
      localStorage.removeItem('saborchef_history');
      localStorage.removeItem('saborchef_custom_recipes');
      localStorage.removeItem('saborchef_shopping_list');
      localStorage.removeItem('saborchef_meal_plan');
      localStorage.removeItem('saborchef_pantry');
      localStorage.removeItem('saborchef_preferences');
      setFavorites([]);
      setHistory([]);
      setCustomRecipes([]);
      setMealPlan(DEFAULT_MEAL_PLAN);
      setPantryItems(['huevos', 'arroz', 'cebolla', 'ajo', 'aceite de oliva', 'tomate', 'sal']);
      setPreferences(DEFAULT_PREFERENCES);
    } catch (e) {
      console.error('Error clearing data', e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        selectedRecipe,
        setSelectedRecipe,
        cookingRecipe,
        setCookingRecipe,
        allRecipes,
        catalogRecipes: CATALOG_RECIPES,
        customRecipes,
        favorites,
        history,
        toggleFavorite,
        isFavorite,
        addToHistory,
        saveCustomRecipe,
        deleteCustomRecipe,
        mealPlan,
        setMealPlanItem,
        clearMealPlan,
        pantryItems,
        addPantryItem,
        removePantryItem,
        clearPantry,
        preferences,
        updatePreferences,
        isOnline,
        lastCatalogUpdate,
        checkForCatalogUpdates,
        clearAllLocalData,
        isPantryModalOpen,
        setIsPantryModalOpen,
        isCustomRecipeModalOpen,
        setIsCustomRecipeModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
