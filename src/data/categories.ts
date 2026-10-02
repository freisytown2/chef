import { Category } from '../types/recipe';

export const CATEGORIES: Category[] = [
  {
    id: 'familiares',
    name: 'Recetas familiares',
    shortDescription: 'Platos rendidores y reconfortantes para compartir en la mesa familiar.',
    icon: 'Users',
    emoji: '👨‍👩‍👧‍👦',
    accentColor: '#f97316',
    bgGradient: 'from-orange-500 to-amber-500'
  },
  {
    id: 'saludables',
    name: 'Recetas saludables y ligeras',
    shortDescription: 'Preparaciones balanceadas ricas en vegetales, fibra y nutrientes.',
    icon: 'HeartPulse',
    emoji: '🥗',
    accentColor: '#10b981',
    bgGradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'desayunos',
    name: 'Desayunos',
    shortDescription: 'Energía y variedad para comenzar el día con el mejor sabor.',
    icon: 'Sun',
    emoji: '🥞',
    accentColor: '#eab308',
    bgGradient: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'almuerzos',
    name: 'Almuerzos',
    shortDescription: 'Comidas completas, nutritivas y sabrosas para el mediodía.',
    icon: 'Utensils',
    emoji: '🍲',
    accentColor: '#ef4444',
    bgGradient: 'from-rose-500 to-orange-500'
  },
  {
    id: 'cenas',
    name: 'Cenas',
    shortDescription: 'Opciones digestivas, agradables y fáciles para terminar la jornada.',
    icon: 'Moon',
    emoji: '🍽️',
    accentColor: '#6366f1',
    bgGradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'navidad',
    name: 'Recetas para Navidad',
    shortDescription: 'Platos tradicionales y festivos para la Nochebuena y celebraciones decembrinas.',
    icon: 'Sparkles',
    emoji: '🎄',
    accentColor: '#dc2626',
    bgGradient: 'from-red-600 to-emerald-700'
  },
  {
    id: 'fin-de-ano',
    name: 'Recetas para fin de año',
    shortDescription: 'Celebraciones elegantes y alegres para brindar por un nuevo comienzo.',
    icon: 'PartyPopper',
    emoji: '🥂',
    accentColor: '#d97706',
    bgGradient: 'from-amber-600 to-yellow-600'
  },
  {
    id: 'rapidas',
    name: 'Recetas rápidas (hasta 30 min)',
    shortDescription: 'Soluciones express llenas de sabor cuando el tiempo apremia.',
    icon: 'Zap',
    emoji: '⚡',
    accentColor: '#0ea5e9',
    bgGradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'economicas',
    name: 'Recetas económicas',
    shortDescription: 'Ingredientes accesibles de despensa con máximo rendimiento y sabor.',
    icon: 'PiggyBank',
    emoji: '🪙',
    accentColor: '#059669',
    bgGradient: 'from-emerald-600 to-green-600'
  },
  {
    id: 'vegetarianas',
    name: 'Recetas vegetarianas',
    shortDescription: 'Sin carne pero con toda la textura, color y vitalidad vegetal.',
    icon: 'Leaf',
    emoji: '🌱',
    accentColor: '#16a34a',
    bgGradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'veganas',
    name: 'Recetas veganas',
    shortDescription: '100% basadas en plantas, sin lácteos, huevos ni derivados animales.',
    icon: 'Sprout',
    emoji: '🥑',
    accentColor: '#84cc16',
    bgGradient: 'from-lime-500 to-emerald-500'
  },
  {
    id: 'carnes-pollo',
    name: 'Carnes y pollo',
    shortDescription: 'Guisados, asados y salteados jugosos de aves, res, cerdo y cordero.',
    icon: 'Beef',
    emoji: '🍗',
    accentColor: '#b91c1c',
    bgGradient: 'from-red-700 to-rose-600'
  },
  {
    id: 'pescados-mariscos',
    name: 'Pescados y mariscos',
    shortDescription: 'Tesoros del mar frescos, ligeros y con aromas marineros.',
    icon: 'Fish',
    emoji: '🐟',
    accentColor: '#0284c7',
    bgGradient: 'from-sky-500 to-indigo-600'
  },
  {
    id: 'arroces-pastas',
    name: 'Arroces y pastas',
    shortDescription: 'Paellas, risottos, tallarines y pastas al dente con salsas caseras.',
    icon: 'Wheat',
    emoji: '🍝',
    accentColor: '#ea580c',
    bgGradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'sopas-cremas',
    name: 'Sopas y cremas',
    shortDescription: 'Caldos caseros y cremas aterciopeladas que reconfortan el alma.',
    icon: 'Soup',
    emoji: '🥣',
    accentColor: '#d97706',
    bgGradient: 'from-amber-600 to-orange-600'
  },
  {
    id: 'ensaladas',
    name: 'Ensaladas',
    shortDescription: 'Combinaciones crujientes, aderezos especiales y frescura total.',
    icon: 'Carrot',
    emoji: '🥗',
    accentColor: '#059669',
    bgGradient: 'from-emerald-500 to-lime-600'
  },
  {
    id: 'postres',
    name: 'Postres y repostería',
    shortDescription: 'Tartas, bizcochos, flanes y dulces momentos para disfrutar.',
    icon: 'CakeSlice',
    emoji: '🍰',
    accentColor: '#ec4899',
    bgGradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'bebidas',
    name: 'Bebidas y batidos',
    shortDescription: 'Aguas frescas, licuados nutritivos, infusiones y cócteles sin alcohol.',
    icon: 'CupSoda',
    emoji: '🍹',
    accentColor: '#06b6d4',
    bgGradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'aperitivos-fiestas',
    name: 'Aperitivos y recetas para fiestas',
    shortDescription: 'Tapas, botanas y picoteos para compartir y celebrar con amigos.',
    icon: 'Wine',
    emoji: '🍢',
    accentColor: '#8b5cf6',
    bgGradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'internacional',
    name: 'Cocina internacional',
    shortDescription: 'Un viaje culinario por México, Italia, España, Asia, Medio Oriente y más.',
    icon: 'Globe',
    emoji: '🌎',
    accentColor: '#3b82f6',
    bgGradient: 'from-blue-600 to-cyan-600'
  }
];

export const CATEGORY_MAP = new Map(CATEGORIES.map(c => [c.id, c]));
