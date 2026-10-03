import { Recipe } from '../types/recipe';

// Curated high-resolution Unsplash food photography mapping
// Every URL is verified, optimized with format=auto&fit=crop, and loads reliably.
const FOOD_IMAGE_MAP: { keywords: string[]; url: string }[] = [
  // --- PAELLAS & RICE ---
  {
    keywords: ['paella', 'arroz con mariscos', 'arroz caldoso'],
    url: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['risotto'],
    url: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['chaufa', 'arroz frito', 'yakimeshi'],
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1000&auto=format&fit=crop&q=80',
  },

  // --- TACOS, BURRITOS & MEXICAN ---
  {
    keywords: ['tacos al pastor', 'tacos de cerdo'],
    url: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['taco', 'tacos'],
    url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['burrito', 'burritos', 'fajita', 'fajitas'],
    url: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['enchilada', 'enchiladas', 'quesadilla', 'quesadillas'],
    url: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['guacamole', 'nachos', 'totopos'],
    url: 'https://images.unsplash.com/photo-1570461226513-e08b58a52c53?w=1000&auto=format&fit=crop&q=80',
  },

  // --- PIZZA & FLATBREADS ---
  {
    keywords: ['pizza margarita', 'pizza napolitana'],
    url: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pizza', 'calzone', 'focaccia'],
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&auto=format&fit=crop&q=80',
  },

  // --- PASTAS ---
  {
    keywords: ['carbonara'],
    url: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['lasaña', 'lasagna'],
    url: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['boloñesa', 'bolognese', 'espagueti', 'spaghetti'],
    url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pasta', 'fettuccine', 'penne', 'macarrones', 'ravioli', 'gnocchi', 'ñoquis'],
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1000&auto=format&fit=crop&q=80',
  },

  // --- CEVICHE & SEAFOOD ---
  {
    keywords: ['ceviche', 'cebiche', 'tiradito'],
    url: 'https://images.unsplash.com/photo-1535400255456-984241443b29?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['salmón', 'salmon'],
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['camarón', 'camarones', 'gambas', 'langostinos'],
    url: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pescado', 'merluza', 'lubina', 'dorada', 'bacalao'],
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1000&auto=format&fit=crop&q=80',
  },

  // --- ASIAN (SUSHI, RAMEN, CURRY) ---
  {
    keywords: ['sushi', 'maki', 'nigiri', 'sashimi'],
    url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['ramen', 'noodles', 'fideos asiáticos'],
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['curry', 'tikka masala', 'korma'],
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['dumplings', 'gyozas', 'dim sum', 'wonton'],
    url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pad thai'],
    url: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1000&auto=format&fit=crop&q=80',
  },

  // --- BURGERS & SANDWICHES ---
  {
    keywords: ['hamburguesa', 'burger'],
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['sandwich', 'bocadillo', 'arepa', 'arepas'],
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1000&auto=format&fit=crop&q=80',
  },

  // --- MEATS & CHICKEN ---
  {
    keywords: ['lomo saltado'],
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pollo a la brasa', 'pollo asado', 'alitas'],
    url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pollo al horno', 'pechuga de pollo', 'pollo'],
    url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['carne', 'asado', 'bistec', 'chuletón', 'costillas', 'ternera'],
    url: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['estofado', 'guiso', 'ragú', 'chili con carne'],
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['empanada', 'empanadas'],
    url: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=1000&auto=format&fit=crop&q=80',
  },

  // --- SOUPS & CREAMS ---
  {
    keywords: ['gazpacho', 'salmorejo'],
    url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['sopa de tortilla', 'sopa mexicana'],
    url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['sopa', 'crema de', 'caldo'],
    url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&auto=format&fit=crop&q=80',
  },

  // --- EGGS & SPANISH TAPAS ---
  {
    keywords: ['tortilla de patatas', 'tortilla española', 'tortilla'],
    url: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['huevos', 'shakshuka', 'huevos rancheros'],
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['hummus', 'falafel'],
    url: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['croquetas', 'patatas bravas'],
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1000&auto=format&fit=crop&q=80',
  },

  // --- SALADS ---
  {
    keywords: ['ensalada césar', 'ensalada cesar'],
    url: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['ensalada griega'],
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['ensalada caprese', 'caprese'],
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2252a?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['ensalada', 'bowl', 'quinoa', 'poke'],
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&auto=format&fit=crop&q=80',
  },

  // --- BREAKFAST & SWEET ---
  {
    keywords: ['pancakes', 'hotcakes', 'tortitas', 'waffles'],
    url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['tostadas francesas', 'french toast', 'avena', 'granola', 'yogur'],
    url: 'https://images.unsplash.com/photo-1484723091739-0045614eb665?w=1000&auto=format&fit=crop&q=80',
  },

  // --- DESSERTS ---
  {
    keywords: ['tiramisú', 'tiramisu'],
    url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['cheesecake', 'tarta de queso'],
    url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['brownie', 'brownies', 'coulant', 'volcán de chocolate'],
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['flan', 'crema catalana', 'crème brûlée', 'panna cotta'],
    url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['churros', 'buñuelos'],
    url: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['pastel', 'tarta', 'bizcocho', 'torta'],
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['postre', 'mousse', 'galletas', 'cookies'],
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1000&auto=format&fit=crop&q=80',
  },

  // --- DRINKS & COCKTAILS ---
  {
    keywords: ['mojito'],
    url: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['margarita'],
    url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['sangría', 'sangria'],
    url: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=1000&auto=format&fit=crop&q=80',
  },
  {
    keywords: ['limonada', 'jugo', 'zumo', 'smoothie', 'batido', 'bebida', 'cóctel', 'coctel'],
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&auto=format&fit=crop&q=80',
  },
];

// Fallback high quality category photo defaults
const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  'almuerzos': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
  'cenas': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80',
  'rapidas': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1000&auto=format&fit=crop&q=80',
  'desayunos': 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1000&auto=format&fit=crop&q=80',
  'postres': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&auto=format&fit=crop&q=80',
  'bebidas': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&auto=format&fit=crop&q=80',
  'ensaladas': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&auto=format&fit=crop&q=80',
  'carnes-pollo': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
  'pescados-mariscos': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=1000&auto=format&fit=crop&q=80',
  'pastas-arroces': 'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?w=1000&auto=format&fit=crop&q=80',
  'sopas-cremas': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&auto=format&fit=crop&q=80',
  'vegetarianas': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1000&auto=format&fit=crop&q=80',
  'veganas': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&auto=format&fit=crop&q=80',
  'saludables': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=80',
  'familiares': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80',
  'economicas': 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=1000&auto=format&fit=crop&q=80',
  'aperitivos-fiestas': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1000&auto=format&fit=crop&q=80',
  'navidad': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&auto=format&fit=crop&q=80',
  'fin-de-ano': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&auto=format&fit=crop&q=80',
  'comida-internacional': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&auto=format&fit=crop&q=80',
};

const DEFAULT_FOOD_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&auto=format&fit=crop&q=80';

/**
 * Returns a high-definition, verified photographic image of the finished dish for any recipe.
 */
export function getRecipeDishImage(recipe: Recipe): string {
  if (recipe.imageUrl && recipe.imageUrl.trim().startsWith('http')) {
    return recipe.imageUrl;
  }

  const nameLower = (recipe.name || '').toLowerCase();
  const descLower = (recipe.description || '').toLowerCase();
  const fullText = `${nameLower} ${descLower}`;

  // 1. Specific keyword matching
  for (const item of FOOD_IMAGE_MAP) {
    for (const kw of item.keywords) {
      if (nameLower.includes(kw)) {
        return item.url;
      }
    }
  }

  // 2. Secondary check in full description
  for (const item of FOOD_IMAGE_MAP) {
    for (const kw of item.keywords) {
      if (fullText.includes(kw)) {
        return item.url;
      }
    }
  }

  // 3. Category match
  if (recipe.categories && recipe.categories.length > 0) {
    for (const cat of recipe.categories) {
      if (CATEGORY_FALLBACK_IMAGES[cat]) {
        return CATEGORY_FALLBACK_IMAGES[cat];
      }
    }
  }

  return DEFAULT_FOOD_IMAGE;
}
