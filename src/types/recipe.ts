export type DifficultyLevel = 'Fácil' | 'Media' | 'Difícil';

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  category?: 'frescos' | 'carnes' | 'despensa' | 'lacteos' | 'especias' | 'otros';
}

export interface NutritionalEstimate {
  calories: number; // kcal
  protein: number;  // g
  carbs: number;    // g
  fat: number;      // g
  method: string;   // Explanation of approximate calculation
  isEstimated?: boolean;
}

export interface RecipeInstruction {
  stepNumber: number;
  instruction: string;
  durationMinutes?: number | null;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  country: string;
  servings: number;
  portions?: number;
  prepTime: number; // minutes
  cookTime: number; // minutes
  totalTime: number; // minutes
  difficulty: DifficultyLevel;
  ingredients: Ingredient[];
  steps?: string[];
  instructions?: RecipeInstruction[];
  stepTimes?: number[];
  tips: string[];
  substitutions: string[];
  categories: string[];
  tags: string[];
  allergens: string[];
  nutrition: NutritionalEstimate;
  imageUrl?: string;
  emoji?: string;
  color?: string;
  isCustom?: boolean;
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  emoji: string;
  accentColor: string;
  bgGradient: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  amount: number;
  unit: string;
  checked: boolean;
  recipeSource?: string;
  category: 'frescos' | 'carnes' | 'despensa' | 'lacteos' | 'especias' | 'otros';
}

export interface MealPlanDay {
  dayOfWeek: 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo';
  label: string;
  meals: {
    desayuno?: Recipe | null;
    almuerzo?: Recipe | null;
    cena?: Recipe | null;
    snack?: Recipe | null;
  };
}

export type TextSize = 'sm' | 'base' | 'lg' | 'xl';
export type AppLanguage = 'es' | 'en' | 'pt' | 'fr' | 'de' | 'it' | 'ar' | 'hi' | 'zh' | 'ja';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  textSize: TextSize;
  language: AppLanguage;
  offlinePrepared: boolean;
  lastOfflineSync?: string;
  pantryItems: string[];
}
