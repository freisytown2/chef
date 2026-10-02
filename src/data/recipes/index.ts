import { Recipe, Ingredient } from '../../types/recipe';
import catalogData from './catalog.json';

// Normalize any recipe to guarantee consistent servings, steps, and timers
export function normalizeRecipe(r: any): Recipe {
  const servings = r.servings || r.portions || 4;
  let steps: string[] = [];
  let stepTimes: number[] = [];

  if (Array.isArray(r.instructions) && r.instructions.length > 0) {
    steps = r.instructions.map((i: any) => typeof i === 'string' ? i : i.instruction);
    stepTimes = r.instructions.map((i: any) => (typeof i === 'object' && i.durationMinutes) ? i.durationMinutes : 0);
  } else if (Array.isArray(r.steps)) {
    steps = r.steps;
    stepTimes = r.stepTimes || [];
  }

  return {
    ...r,
    servings,
    portions: servings,
    steps,
    stepTimes,
    instructions: steps.map((s, idx) => ({
      stepNumber: idx + 1,
      instruction: s,
      durationMinutes: stepTimes[idx] || null,
    })),
  };
}

export const CATALOG_RECIPES: Recipe[] = (catalogData as any[]).map(normalizeRecipe);

// Synonyms dictionary for international Spanish kitchen terms
export const INGREDIENT_SYNONYMS: Record<string, string[]> = {
  'aguacate': ['palta', 'avocado'],
  'palta': ['aguacate', 'avocado'],
  'frijoles': ['alubias', 'habichuelas', 'judías', 'porotos', 'caraotas'],
  'alubias': ['frijoles', 'habichuelas', 'judías', 'porotos', 'caraotas'],
  'habichuelas': ['frijoles', 'alubias', 'judías', 'porotos'],
  'porotos': ['frijoles', 'alubias', 'judías', 'habichuelas'],
  'patata': ['papa', 'patatas', 'papas'],
  'papa': ['patata', 'patatas', 'papas'],
  'calabacín': ['zucchini', 'zapallito', 'calabacita'],
  'zucchini': ['calabacín', 'zapallito'],
  'calabaza': ['auyama', 'zapallo'],
  'zapallo': ['calabaza', 'auyama'],
  'maíz': ['choclo', 'elote', 'mazorca'],
  'choclo': ['maíz', 'elote'],
  'elote': ['maíz', 'choclo'],
  'plátano': ['banana', 'banano', 'guineo'],
  'banana': ['plátano', 'banano'],
  'pimiento': ['chile', 'morrón', 'ají', 'pimentón'],
  'chile': ['pimiento', 'ají', 'guindilla'],
  'ají': ['chile', 'pimiento'],
  'tomate': ['jitomate'],
  'jitomate': ['tomate'],
  'zanahoria': ['zanahorias'],
  'limón': ['lima'],
  'lima': ['limón'],
  'cacahuete': ['maní', 'cacahuate'],
  'maní': ['cacahuete', 'cacahuate'],
  'gambas': ['camarones', 'langostinos'],
  'camarones': ['gambas', 'langostinos'],
  'langostinos': ['gambas', 'camarones'],
  'nata': ['crema de leche', 'crema'],
  'crema de leche': ['nata'],
  'ternera': ['res', 'carne de vaca'],
  'res': ['ternera', 'carne de res'],
  'cerdo': ['puerco', 'chancho', 'lechón'],
  'arroz': ['arroz bomba', 'arroz basmati'],
};

// Text normalization: remove accents, lowercase, strip punctuation
export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Check if search terms match a string, taking into account synonyms and typos
export function matchesQuery(targetText: string, queryTokens: string[]): boolean {
  const normTarget = normalizeText(targetText);
  if (!normTarget) return false;

  return queryTokens.every(token => {
    if (normTarget.includes(token)) return true;

    // Check synonyms
    const synonyms = INGREDIENT_SYNONYMS[token];
    if (synonyms) {
      if (synonyms.some(syn => normTarget.includes(normalizeText(syn)))) {
        return true;
      }
    }

    // Levenshtein / fuzzy check for small typos (>4 chars)
    if (token.length >= 4) {
      const words = normTarget.split(/\s+/);
      return words.some(w => {
        if (Math.abs(w.length - token.length) <= 1) {
          let diff = 0;
          for (let i = 0; i < Math.min(w.length, token.length); i++) {
            if (w[i] !== token[i]) diff++;
          }
          return diff <= 1;
        }
        return false;
      });
    }

    return false;
  });
}

// Automatic offline rotation for Recipe of the Day
export function getRecipeOfTheDay(recipes: Recipe[] = CATALOG_RECIPES): Recipe {
  if (!recipes || recipes.length === 0) return CATALOG_RECIPES[0];
  const now = new Date();
  // Deterministic seed based on day, month, year
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = Math.abs((now.getFullYear() * 365 + dayOfYear) % recipes.length);
  return recipes[index] || recipes[0];
}

// Rotating recommendations based on seed
export function getRecommendedRecipes(
  count: number = 8,
  excludeId?: string,
  recipes: Recipe[] = CATALOG_RECIPES
): Recipe[] {
  if (!recipes || recipes.length === 0) return [];
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const hour = now.getHours();

  // Shift offset deterministically by 6-hour blocks
  const offset = (dayOfYear * 7 + Math.floor(hour / 6) * 11) % recipes.length;

  const result: Recipe[] = [];
  let i = 0;
  while (result.length < count && i < recipes.length) {
    const candidate = recipes[(offset + i) % recipes.length];
    if (candidate && candidate.id !== excludeId && !result.some(r => r.id === candidate.id)) {
      result.push(candidate);
    }
    i++;
  }
  return result;
}

// Pantry ingredient matching: "Cocina con lo que tienes"
export interface PantryMatchResult {
  recipe: Recipe;
  matchedCount: number;
  totalIngredients: number;
  matchPercentage: number;
  missingIngredients: Ingredient[];
}

export function matchRecipesWithPantry(
  pantryItems: string[],
  recipes: Recipe[] = CATALOG_RECIPES
): PantryMatchResult[] {
  if (!pantryItems || pantryItems.length === 0) return [];

  const normPantry = pantryItems.map(normalizeText).filter(Boolean);
  if (normPantry.length === 0) return [];

  const results: PantryMatchResult[] = [];

  for (const recipe of recipes) {
    const missing: Ingredient[] = [];
    let matchedCount = 0;

    for (const ing of recipe.ingredients) {
      const normIngName = normalizeText(ing.name);
      const isMatched = normPantry.some(pantryItem => {
        if (normIngName.includes(pantryItem) || pantryItem.includes(normIngName)) return true;
        const syns = INGREDIENT_SYNONYMS[pantryItem];
        if (syns && syns.some(s => normIngName.includes(normalizeText(s)))) return true;
        return false;
      });

      if (isMatched) {
        matchedCount++;
      } else {
        missing.push(ing);
      }
    }

    if (matchedCount > 0) {
      const totalIngredients = recipe.ingredients.length;
      results.push({
        recipe,
        matchedCount,
        totalIngredients,
        matchPercentage: Math.round((matchedCount / Math.max(1, totalIngredients)) * 100),
        missingIngredients: missing,
      });
    }
  }

  // Sort by highest match percentage and most matched ingredients
  return results.sort((a, b) => {
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }
    return b.matchedCount - a.matchedCount;
  });
}

// Portion scaling helper
export function scaleIngredient(ing: Ingredient, originalServings: number, targetServings: number): Ingredient {
  if (!originalServings || originalServings <= 0 || !targetServings || targetServings <= 0) {
    return ing;
  }
  const factor = targetServings / originalServings;
  const rawAmount = ing.amount * factor;

  // Reasonable rounding: integers if > 10, 1 decimal if between 1 and 10, 2 decimals if < 1
  let roundedAmount: number;
  if (rawAmount >= 10) {
    roundedAmount = Math.round(rawAmount);
  } else if (rawAmount >= 1) {
    roundedAmount = Math.round(rawAmount * 10) / 10;
  } else {
    roundedAmount = Math.round(rawAmount * 100) / 100;
  }

  return {
    ...ing,
    amount: roundedAmount,
  };
}

// Merge compatible items for the shopping list
export function mergeShoppingItems(existing: any[], newItems: any[]): any[] {
  const result = [...existing];

  for (const item of newItems) {
    const normName = normalizeText(item.name);
    const normUnit = normalizeText(item.unit || '');

    const existingIdx = result.findIndex(
      r => normalizeText(r.name) === normName && normalizeText(r.unit || '') === normUnit
    );

    if (existingIdx >= 0) {
      const prev = result[existingIdx];
      const mergedAmount = Number((prev.amount + item.amount).toFixed(2));
      result[existingIdx] = {
        ...prev,
        amount: mergedAmount,
      };
    } else {
      result.push(item);
    }
  }

  return result;
}
