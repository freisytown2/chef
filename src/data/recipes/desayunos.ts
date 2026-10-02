import { Recipe } from '../../types/recipe';

export const desayunosRecipes: Recipe[] = [
  {
    id: 'rec-des-001',
    name: 'Shakshuka tradicional con huevos escalfados',
    description: 'Huevos escalfados en salsa especiada de tomates maduros, pimientos rojos asados, comino y pimentón dulce.',
    country: 'Oriente Medio',
    servings: 2,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Fácil',
    categories: ['desayunos', 'cenas', 'vegetarianas', 'rapidas', 'internacional'],
    tags: ['shakshuka', 'huevos', 'tomate', 'especias', 'desayuno nutritivo'],
    allergens: ['Huevo'],
    nutrition: {
      calories: 280,
      protein: 15,
      carbs: 16,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (280 g).'
    },
    emoji: '🍳',
    color: '#ef4444',
    ingredients: [
      { id: 'ing-des-01', name: 'Huevos de campo', amount: 4, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-02', name: 'Tomates maduros triturados', amount: 400, unit: 'g', category: 'frescos' },
      { id: 'ing-des-03', name: 'Pimiento rojo en tiras', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-04', name: 'Cebolla picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-05', name: 'Dientes de ajo laminados', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-06', name: 'Comino molido y pimentón dulce', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-des-07', name: 'Aceite de oliva virgen extra', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-08', name: 'Cilantro fresco picado', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-des-09', name: 'Sal y pimienta', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En una sartén con aceite sofríe la cebolla y el pimiento durante 8 minutos hasta ablandar.',
      'Añade el ajo, comino y pimentón; cocina 1 minuto sin que se quemen.',
      'Vierte los tomates triturados, salpimienta y deja cocer a fuego medio durante 10 minutos hasta que la salsa espese.',
      'Haz cuatro huecos en la salsa con una cuchara y casca un huevo en cada hueco.',
      'Tapa la sartén y cocina a fuego suave durante 5 minutos hasta que la clara cuaje y la yema quede líquida.',
      'Espolvorea cilantro fresco y sirve caliente en la misma sartén con pan crujiente.'
    ],
    stepTimes: [8, 1, 10, 2, 5, 1],
    tips: [
      'Tapar la sartén ayuda a que las claras cuajen uniformemente con el vapor mientras las yemas quedan deliciosamente líquidas.',
      'Acompaña con pan de pita o pan rústico para mojar en la yema.'
    ],
    substitutions: [
      'Puedes desmenuzar queso feta o de cabra por encima al retirar del fuego.',
      'Añade espinacas frescas al sofrito de tomate para más nutrientes.'
    ]
  },
  {
    id: 'rec-des-002',
    name: 'Tostadas francesas esponjosas con canela y miel',
    description: 'Rebanadas de pan brioche bañadas en mezcla aromática de huevo, leche, vainilla y canela, doradas en mantequilla.',
    country: 'Francia',
    servings: 2,
    prepTime: 8,
    cookTime: 10,
    totalTime: 18,
    difficulty: 'Fácil',
    categories: ['desayunos', 'postres', 'rapidas', 'vegetarianas', 'internacional'],
    tags: ['tostadas francesas', 'brioche', 'canela', 'miel', 'desayuno dulce'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 320,
      protein: 11,
      carbs: 42,
      fat: 12,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (2 rebanadas).'
    },
    emoji: '🍞',
    color: '#d97706',
    ingredients: [
      { id: 'ing-des-10', name: 'Rebanadas gruesas de pan brioche o challah', amount: 4, unit: 'unidades', category: 'despensa' },
      { id: 'ing-des-11', name: 'Huevos frescos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-12', name: 'Leche entera o vegetal', amount: 120, unit: 'ml', category: 'lacteos' },
      { id: 'ing-des-13', name: 'Canela molida', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-des-14', name: 'Extracto de vainilla natural', amount: 1, unit: 'cucharadita', category: 'despensa' },
      { id: 'ing-des-15', name: 'Mantequilla', amount: 25, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-16', name: 'Miel de abeja o sirope de arce', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-des-17', name: 'Frutos rojos frescos para acompañar', amount: 50, unit: 'g', category: 'frescos' }
    ],
    steps: [
      'En un plato hondo bate los huevos con la leche, la canela y la vainilla.',
      'Sumerge las rebanadas de pan brioche durante 20 segundos por lado para que absorban bien el líquido sin romperse.',
      'Derrite la mitad de la mantequilla en una sartén antiadherente a fuego medio.',
      'Coloca las rebanadas y dora durante 3 minutos por cada lado hasta que adquieran un color tostado y brillante.',
      'Sirve inmediatamente calientes con un chorro de miel de abeja y frutos rojos por encima.'
    ],
    stepTimes: [2, 1, 1, 6, 1],
    tips: [
      'Usar pan del día anterior o brioche firme evita que la tostada se deshaga al remojarla.',
      'Mantén el fuego medio-bajo para que el interior se cocine sin quemar la superficie de mantequilla.'
    ],
    substitutions: [
      'Usa pan sin gluten para personas con celiaquía.',
      'Sustituye la leche entera por leche de almendras o avena.'
    ]
  },
  {
    id: 'rec-des-003',
    name: 'Huevos rancheros mexicanos sobre tortilla de maíz',
    description: 'Tortillas de maíz pasadas por aceite con frijoles refritos, huevos fritos con puntilla y salsa ranchera de tomate y chile.',
    country: 'México',
    servings: 2,
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    difficulty: 'Fácil',
    categories: ['desayunos', 'rapidas', 'economicas', 'vegetarianas', 'internacional'],
    tags: ['huevos rancheros', 'tortillas', 'frijoles', 'salsa ranchera', 'mexicano'],
    allergens: ['Huevo', 'Lácteos'],
    nutrition: {
      calories: 360,
      protein: 16,
      carbs: 32,
      fat: 19,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (2 piezas).'
    },
    emoji: '🍳',
    color: '#dc2626',
    ingredients: [
      { id: 'ing-des-18', name: 'Tortillas de maíz', amount: 4, unit: 'unidades', category: 'despensa' },
      { id: 'ing-des-19', name: 'Huevos de campo', amount: 4, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-20', name: 'Frijoles negros refritos calientes', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-des-21', name: 'Tomates maduros asados y licuados', amount: 300, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-des-22', name: 'Chile serrano picado y cebolla', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-23', name: 'Queso fresco desmoronado (queso panela o cotija)', amount: 40, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-24', name: 'Aceite vegetal', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-25', name: 'Cilantro picado fresco y sal', amount: 1, unit: 'cucharadita', category: 'frescos' }
    ],
    steps: [
      'En una sartén calienta una cucharada de aceite y sofríe la cebolla con el chile y los tomates licuados durante 6 minutos hasta obtener una salsa ranchera espesa; sal al gusto.',
      'En otra sartén pasa las tortillas por un poco de aceite caliente 10 segundos por lado para suavizarlas sin que se doren demasiado; colócalas en los platos.',
      'Unta cada tortilla con una capa generosa de frijoles negros refritos calientes.',
      'Fríe los huevos en aceite caliente dejando la yema tierna.',
      'Coloca un huevo frito sobre cada tortilla con frijol.',
      'Baña con la salsa ranchera caliente por los bordes sin cubrir del todo la yema.',
      'Espolvorea queso fresco desmoronado y hojas de cilantro.'
    ],
    stepTimes: [6, 2, 2, 4, 1, 1],
    tips: [
      'Pasar las tortillas brevemente por aceite caliente evita que se rompan al agregar la salsa húmeda.',
      'Asar previamente los tomates y el chile en comal le da el toque ahumado característico de México.'
    ],
    substitutions: [
      'Añade aguacate en cubitos por encima para mayor cremosidad.',
      'Si prefieres menos picante, retira las semillas y venas del chile serrano.'
    ]
  },
  {
    id: 'rec-des-004',
    name: 'Avena cremosa cocida con canela, chía y frutos rojos',
    description: 'Copos de avena integral cocidos lentamente con leche, canela en rama y semillas de chía, coronados con frutos del bosque.',
    country: 'Internacional',
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: 'Fácil',
    categories: ['desayunos', 'saludables', 'economicas', 'vegetarianas', 'rapidas'],
    tags: ['avena', 'porridge', 'chía', 'frutos rojos', 'fibra', 'energético'],
    allergens: ['Gluten'],
    nutrition: {
      calories: 270,
      protein: 9,
      carbs: 45,
      fat: 6,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (250 g).'
    },
    emoji: '🥣',
    color: '#ca8a04',
    ingredients: [
      { id: 'ing-des-26', name: 'Copos de avena integral', amount: 100, unit: 'g', category: 'despensa' },
      { id: 'ing-des-27', name: 'Leche (entera, avena o almendras)', amount: 400, unit: 'ml', category: 'lacteos' },
      { id: 'ing-des-28', name: 'Rama de canela', amount: 1, unit: 'unidad', category: 'especias' },
      { id: 'ing-des-29', name: 'Semillas de chía', amount: 1, unit: 'cucharada', category: 'despensa' },
      { id: 'ing-des-30', name: 'Miel pura o sirope de arce', amount: 1, unit: 'cucharada', category: 'despensa' },
      { id: 'ing-des-31', name: 'Frutos rojos frescos (arándanos y frambuesas)', amount: 80, unit: 'g', category: 'frescos' },
      { id: 'ing-des-32', name: 'Pizca de sal', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En una cacerola mediana pon la leche con la rama de canela y una pizca de sal a fuego medio.',
      'Cuando empiece a calentarse añade los copos de avena y las semillas de chía.',
      'Cocina a fuego lento durante 8 minutos removiendo continuamente con una cuchara de madera hasta que espese y adquiera textura aterciopelada.',
      'Retira la rama de canela y añade la miel.',
      'Vierte en boles individuales y coloca por encima los frutos rojos frescos y una pizca de canela molida.'
    ],
    stepTimes: [2, 1, 8, 1, 1],
    tips: [
      'Remover constantemente libera los betaglucanos de la avena y le confiere una textura cremosa como de natilla.',
      'Una pizca de sal realza la dulzura natural de los cereales.'
    ],
    substitutions: [
      'Usa avena certificada sin gluten para personas celíacas.',
      'Añade nueces picadas o mantequilla de cacahuete para sumar grasas saludables.'
    ]
  },
  {
    id: 'rec-des-005',
    name: 'Pancakes esponjosos de plátano y avena sin azúcar añadida',
    description: 'Tortitas doradas elaboradas con plátano maduro machacado, copos de avena triturados, huevo y toque de vainilla.',
    country: 'Internacional',
    servings: 2,
    prepTime: 8,
    cookTime: 10,
    totalTime: 18,
    difficulty: 'Fácil',
    categories: ['desayunos', 'saludables', 'vegetarianas', 'rapidas', 'economicas'],
    tags: ['pancakes', 'plátano', 'avena', 'sin azúcar', 'esponjoso'],
    allergens: ['Huevo'],
    nutrition: {
      calories: 260,
      protein: 10,
      carbs: 42,
      fat: 6,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (3 tortitas medianas).'
    },
    emoji: '🥞',
    color: '#eab308',
    ingredients: [
      { id: 'ing-des-33', name: 'Plátanos maduros grandes', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-34', name: 'Huevos medianos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-35', name: 'Copos de avena triturados en harina', amount: 80, unit: 'g', category: 'despensa' },
      { id: 'ing-des-36', name: 'Levadura química en polvo (polvo de hornear)', amount: 1, unit: 'cucharadita', category: 'despensa' },
      { id: 'ing-des-37', name: 'Canela molida y extracto de vainilla', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-des-38', name: 'Aceite de coco o mantequilla para engrasar', amount: 10, unit: 'g', category: 'despensa' }
    ],
    steps: [
      'En un bol aplasta los plátanos con un tenedor hasta obtener un puré homogéneo.',
      'Añade los huevos batidos, la vainilla y la canela; mezcla bien.',
      'Incorpora la harina de avena y el polvo de hornear, mezclando hasta formar una masa suave y densa.',
      'Calienta una sartén antiadherente a fuego medio y pincela con una gota de aceite de coco.',
      'Vierte 2 cucharadas colmadas de masa por cada pancake.',
      'Cocina durante 2 minutos hasta que aparezcan burbujitas en la superficie; dale la vuelta con una espátula y cocina 1 minuto más por el otro lado.',
      'Sirve apilados con rodajas de plátano fresco y frutos secos.'
    ],
    stepTimes: [3, 2, 2, 1, 6, 1],
    tips: [
      'Cuanto más maduro esté el plátano (con motas oscuras), más dulces y esponjosos quedarán sin necesidad de añadir azúcar.',
      'Cocina a fuego moderado para que no se quemen antes de cuajar por dentro.'
    ],
    substitutions: [
      'Usa harina de avena sin gluten si eres intolerante.',
      'Añade arándanos enteros a la masa justo después de verterla en la sartén.'
    ]
  },
  {
    id: 'rec-des-006',
    name: 'Tortilla de patatas casera jugosa',
    description: 'El emblema de la gastronomía española: patatas y cebolla confitadas a fuego suave en aceite de oliva y cuajadas con huevos frescos.',
    country: 'España',
    servings: 4,
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    difficulty: 'Media',
    categories: ['desayunos', 'almuerzos', 'cenas', 'familiares', 'vegetarianas', 'economicas'],
    tags: ['tortilla de patatas', 'española', 'cebolla', 'huevos', 'tapa'],
    allergens: ['Huevo'],
    nutrition: {
      calories: 340,
      protein: 12,
      carbs: 26,
      fat: 21,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (200 g).'
    },
    emoji: '🍳',
    color: '#eab308',
    ingredients: [
      { id: 'ing-des-39', name: 'Patatas tipo Monalisa o agria', amount: 600, unit: 'g', category: 'frescos' },
      { id: 'ing-des-40', name: 'Huevos camperos frescos', amount: 6, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-41', name: 'Cebolla dulce picada en juliana', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-42', name: 'Aceite de oliva virgen extra para confitar', amount: 200, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-43', name: 'Sal marina', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Pela las patatas y córtalas en láminas finas e irregulares; sala ligeramente.',
      'En una sartén honda calienta abundante aceite de oliva a fuego medio-bajo e introduce las patatas y la cebolla picada.',
      'Confita a fuego suave durante 18 minutos removiendo con frecuencia para que las patatas se queden tiernas y melosas sin dorarse en exceso.',
      'Escurre bien las patatas y cebolla con una espumadera, reservando el aceite.',
      'En un bol amplio bate los huevos con una pizca de sal, añade las patatas y cebolla calientes y deja reposar 5 minutos para que absorban el huevo.',
      'En una sartén antiadherente con una cucharada de aceite bien caliente vierte la mezcla a fuego vivo durante 1 minuto moviendo en círculos.',
      'Baja el fuego, dale la vuelta con la ayuda de un plato llano y cuaja el otro lado durante 1 minuto si te gusta jugosa (o 2 minutos más cuajada).',
      'Pasa a un plato y sirve templada.'
    ],
    stepTimes: [5, 2, 18, 2, 5, 2, 2, 1],
    tips: [
      'Dejar reposar las patatas confitadas calientes en el huevo batido durante 5 minutos es el secreto de una tortilla sedosa y jugosa.',
      'Una sartén de buena calidad y antiadherente exclusiva para tortillas garantiza que no se pegue al voltear.'
    ],
    substitutions: [
      'Puedes prescindir de la cebolla si prefieres la versión "concebollista" o "sincebollista".',
      'Añade taquitos de calabacín confitado para hacerla más ligera.'
    ]
  },
  {
    id: 'rec-des-007',
    name: 'Arepas rellenas de queso blanco y huevo revuelto perico',
    description: 'Arepas crujientes por fuera y suaves por dentro, rellenas de sofrito criollo de tomate, cebolla y huevos revueltos con queso.',
    country: 'Venezuela',
    servings: 2,
    prepTime: 12,
    cookTime: 15,
    totalTime: 27,
    difficulty: 'Fácil',
    categories: ['desayunos', 'cenas', 'economicas', 'vegetarianas', 'internacional'],
    tags: ['arepas', 'huevos pericos', 'queso blanco', 'sin gluten', 'venezolano'],
    allergens: ['Huevo', 'Lácteos'],
    nutrition: {
      calories: 390,
      protein: 16,
      carbs: 46,
      fat: 16,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (2 arepas medianas).'
    },
    emoji: '🫓',
    color: '#f59e0b',
    ingredients: [
      { id: 'ing-des-44', name: 'Harina de maíz precocida blanca', amount: 200, unit: 'g', category: 'despensa' },
      { id: 'ing-des-45', name: 'Agua tibia', amount: 250, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-46', name: 'Huevos batidos', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-47', name: 'Tomate maduro picado fino', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-48', name: 'Cebolla y cebolleta picadas', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-49', name: 'Queso blanco tipo llanero o feta desmenuzado', amount: 80, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-50', name: 'Mantequilla o aceite', amount: 20, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-51', name: 'Sal', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'En un bol mezcla el agua tibia con una cucharadita de sal; agrega la harina de maíz en lluvia mientras mezclas con los dedos.',
      'Amasa durante 2 minutos hasta conseguir una masa suave que no se pegue a las manos; deja reposar 5 minutos.',
      'Forma bolas de masa y aplástalas entre las manos formando discos gruesos de 1.5 cm.',
      'Cocina las arepas en una plancha o sartén caliente ligeramente engrasada durante 6 minutos por lado hasta que formen concha dorada.',
      'Para los huevos pericos: en una sartén sofríe el tomate y la cebolla en mantequilla 4 minutos; agrega los huevos batidos y cocina revolviendo suavemente 2 minutos.',
      'Abre las arepas calientes por la mitad como un bolsillo, unta mantequilla y rellena con los huevos pericos y abundante queso blanco rallado.'
    ],
    stepTimes: [2, 5, 2, 12, 6, 2],
    tips: [
      'Saber cuándo está lista la arepa: dale un golpecito con los nudillos en el centro; si suena hueca, está en su punto perfecto.',
      'La masa de harina de maíz precocida es naturalmente libre de gluten.'
    ],
    substitutions: [
      'Rellena con aguacate y pollo deshebrado para hacer la famosa arepa Reina Pepiada.',
      'Usa queso vegetal para versiones libres de lactosa.'
    ]
  },
  {
    id: 'rec-des-008',
    name: 'Chilaquiles verdes con pollo deshebrado y crema ácida',
    description: 'Totopos crujientes de maíz bañados en salsa verde tibia de tomatillo y jalapeño, con pechuga de pollo, crema y queso fresco.',
    country: 'México',
    servings: 2,
    prepTime: 12,
    cookTime: 15,
    totalTime: 27,
    difficulty: 'Fácil',
    categories: ['desayunos', 'almuerzos', 'carnes-pollo', 'rapidas', 'internacional'],
    tags: ['chilaquiles', 'salsa verde', 'totopos', 'pollo', 'mexicano', 'desayuno'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 460,
      protein: 28,
      carbs: 42,
      fat: 20,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (320 g).'
    },
    emoji: '🌮',
    color: '#16a34a',
    ingredients: [
      { id: 'ing-des-52', name: 'Totopos de maíz crujientes horneados o fritos', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-des-53', name: 'Tomatillos verdes (tomate de cáscara)', amount: 350, unit: 'g', category: 'frescos' },
      { id: 'ing-des-54', name: 'Chile jalapeño o serrano', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-55', name: 'Diente de ajo y trozo de cebolla', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-56', name: 'Pechuga de pollo cocida y deshebrada', amount: 180, unit: 'g', category: 'carnes' },
      { id: 'ing-des-57', name: 'Crema agria o nata fresca', amount: 40, unit: 'ml', category: 'lacteos' },
      { id: 'ing-des-58', name: 'Queso fresco tipo panela desmoronado', amount: 50, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-59', name: 'Cebolla morada en aros y cilantro', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-des-60', name: 'Aceite vegetal y sal', amount: 1, unit: 'cucharada', category: 'despensa' }
    ],
    steps: [
      'Hierve los tomatillos limpios y el chile durante 6 minutos hasta que cambien a color verde oliva claro.',
      'Licúa los tomatillos con el chile, el ajo, la cebolla, unas ramas de cilantro y sal con un chorrito de agua de cocción.',
      'En una cazuela calienta el aceite, vierte la salsa y sofríe durante 5 minutos a fuego medio.',
      'Añade los totopos de maíz a la salsa caliente y revuelve rápidamente durante 1 minuto para que absorban la salsa pero sigan crujientes.',
      'Sirve de inmediato en platos hondos.',
      'Corona con el pollo deshebrado tibio, un hilo de crema fresca, queso desmoronado, aros de cebolla morada y cilantro.'
    ],
    stepTimes: [6, 2, 5, 1, 2],
    tips: [
      'No hiervas los tomatillos en exceso para que no se revienten y amarguen la salsa.',
      'Si prefieres los chilaquiles crujientes, vierte la salsa hirviendo sobre los totopos directamente en el plato.'
    ],
    substitutions: [
      'Puedes sustituir el pollo por dos huevos estrellados por encima.',
      'Usa salsa roja de jitomate asado para hacer chilaquiles rojos.'
    ]
  },
  {
    id: 'rec-des-009',
    name: 'Tostada de aguacate hass con huevo poché y semillas',
    description: 'Pan de masa madre tostado cubierto con aguacate machacado con lima y un huevo escalfado con yema líquida y semillas tostadas.',
    country: 'Internacional',
    servings: 2,
    prepTime: 8,
    cookTime: 5,
    totalTime: 13,
    difficulty: 'Fácil',
    categories: ['desayunos', 'cenas', 'saludables', 'vegetarianas', 'rapidas'],
    tags: ['tostada aguacate', 'huevo poché', 'masa madre', 'desayuno saludable'],
    allergens: ['Gluten', 'Huevo'],
    nutrition: {
      calories: 310,
      protein: 14,
      carbs: 24,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (1 tostada grande).'
    },
    emoji: '🥑',
    color: '#84cc16',
    ingredients: [
      { id: 'ing-des-61', name: 'Rebanadas gruesas de pan de masa madre', amount: 2, unit: 'unidades', category: 'despensa' },
      { id: 'ing-des-62', name: 'Aguacate Hass maduro', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-63', name: 'Huevos muy frescos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-64', name: 'Zumo de lima o limón', amount: 1, unit: 'cucharadita', category: 'frescos' },
      { id: 'ing-des-65', name: 'Copos de chile rojo o pimentón', amount: 1, unit: 'pizca', category: 'especias' },
      { id: 'ing-des-66', name: 'Semillas variadas (chía, calabaza, sésamo)', amount: 1, unit: 'cucharada', category: 'despensa' },
      { id: 'ing-des-67', name: 'Aceite de oliva virgen extra y sal en escamas', amount: 1, unit: 'cucharadita', category: 'despensa' },
      { id: 'ing-des-68', name: 'Vinagre blanco para escalfar', amount: 1, unit: 'cucharada', category: 'despensa' }
    ],
    steps: [
      'En un bol aplasta la pulpa del aguacate con el zumo de lima, una pizca de sal y unas gotas de aceite de oliva hasta que quede rústico.',
      'Tuesta las rebanadas de pan de masa madre hasta que queden bien doradas y crujientes.',
      'Pon a hervir agua con una cucharada de vinagre en una cacerola pequeña; baja el fuego para que solo haya burbujas suaves.',
      'Crea un remolino suave con una cuchara y vierte el huevo en el centro; cocina durante exactamente 3 minutos para que la clara cuaje y la yema quede fluida.',
      'Retira el huevo con una espumadera y escurre sobre papel de cocina.',
      'Extiende el aguacate sobre las tostadas calientes, coloca el huevo poché encima y espolvorea sal en escamas, copos de chile y semillas tostadas.'
    ],
    stepTimes: [2, 3, 3, 3, 1, 1],
    tips: [
      'Usar huevos muy frescos garantiza que la clara se mantenga compacta alrededor de la yema al escalfar.',
      'El vinagre en el agua ayuda a coagular las proteínas de la clara rápidamente.'
    ],
    substitutions: [
      'Puedes usar huevo frito o cocido en lugar de poché.',
      'Para versión sin gluten utiliza pan artesanal de trigo sarraceno o maíz.'
    ]
  },
  {
    id: 'rec-des-010',
    name: 'Omelette francés clásico con champiñones y queso emmental',
    description: 'Tortilla francesa sedosa y dorada por fuera, cremosa y ligeramente fundente en el centro, rellena de champiñones al tomillo.',
    country: 'Francia',
    servings: 1,
    prepTime: 5,
    cookTime: 6,
    totalTime: 11,
    difficulty: 'Fácil',
    categories: ['desayunos', 'cenas', 'saludables', 'rapidas', 'vegetarianas'],
    tags: ['omelette', 'tortilla francesa', 'champiñones', 'queso emmental', 'rápido'],
    allergens: ['Huevo', 'Lácteos'],
    nutrition: {
      calories: 290,
      protein: 19,
      carbs: 4,
      fat: 22,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (200 g).'
    },
    emoji: '🍳',
    color: '#facc15',
    ingredients: [
      { id: 'ing-des-69', name: 'Huevos grandes a temperatura ambiente', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-des-70', name: 'Champiñones frescos laminados', amount: 80, unit: 'g', category: 'frescos' },
      { id: 'ing-des-71', name: 'Queso emmental rallado', amount: 30, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-72', name: 'Mantequilla francesa', amount: 15, unit: 'g', category: 'lacteos' },
      { id: 'ing-des-73', name: 'Cebollino fresco finamente picado', amount: 1, unit: 'cucharadita', category: 'frescos' },
      { id: 'ing-des-74', name: 'Sal y pimienta blanca molida', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En una sartén antiadherente dora los champiñones con media cucharadita de mantequilla durante 3 minutos salpimentando; reserva templados.',
      'Bate enérgicamente los huevos con un tenedor hasta que no queden hilos de clara, añadiendo una pizca de sal.',
      'En la misma sartén derrite el resto de la mantequilla a fuego medio-alto hasta que haga espuma sin dorarse.',
      'Vierte los huevos batidos y remueve continuamente con una espátula de silicona en círculos pequeños mientras agitas la sartén durante 1 minuto para formar una cuajada tierna.',
      'Cuando la superficie esté cremosa y húmeda ("baveuse"), coloca en el centro los champiñones y el queso rallado.',
      'Enrolla la tortilla sobre sí misma inclinando la sartén y déjala rodar sobre el plato.',
      'Pincela con una pizca de mantequilla y decora con cebollino fresco.'
    ],
    stepTimes: [3, 1, 1, 1, 1, 1],
    tips: [
      'Mover la sartén vigorosamente en los primeros 45 segundos es el secreto francés para evitar costra dura y lograr textura de terciopelo.',
      'El interior debe quedar jugoso antes de enrollar.'
    ],
    substitutions: [
      'Sustituye los champiñones por espinacas tiernas salteadas o taquitos de jamón cocido.',
      'Puedes usar aceite de oliva en lugar de mantequilla.'
    ]
  },
  {
    id: 'rec-des-011',
    name: 'Granola casera crujiente con frutos secos, miel y yogur',
    description: 'Avena horneada dorada con almendras, nueces, semillas de girasol, miel y canela, servida con yogur natural cremoso.',
    country: 'Internacional',
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Fácil',
    categories: ['desayunos', 'saludables', 'vegetarianas', 'postres'],
    tags: ['granola', 'frutos secos', 'yogur', 'miel', 'casero', 'crujiente'],
    allergens: ['Frutos secos', 'Lácteos'],
    nutrition: {
      calories: 340,
      protein: 11,
      carbs: 44,
      fat: 15,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (60 g granola + 125 g yogur).'
    },
    emoji: '🥣',
    color: '#b45309',
    ingredients: [
      { id: 'ing-des-75', name: 'Copos de avena gruesos', amount: 200, unit: 'g', category: 'despensa' },
      { id: 'ing-des-76', name: 'Almendras y nueces troceadas', amount: 80, unit: 'g', category: 'despensa' },
      { id: 'ing-des-77', name: 'Semillas de calabaza y girasol', amount: 40, unit: 'g', category: 'despensa' },
      { id: 'ing-des-78', name: 'Miel de abeja o sirope de arce', amount: 50, unit: 'g', category: 'despensa' },
      { id: 'ing-des-79', name: 'Aceite de coco virgen derretido', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-80', name: 'Canela molida y pizca de sal marina', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-des-81', name: 'Yogur natural cremoso para servir', amount: 4, unit: 'vasos', category: 'lacteos' }
    ],
    steps: [
      'Precalienta el horno a 160°C con calor arriba y abajo.',
      'En un bol grande mezcla los copos de avena, frutos secos, semillas, canela y una pizca de sal.',
      'En un cazo pequeño entibia la miel con el aceite de coco para fluidificar.',
      'Vierte los líquidos sobre la mezcla seca y remueve muy bien con espátula para que todo quede impregnado.',
      'Extiende en una bandeja con papel de hornear formando una capa uniforme presionando ligeramente.',
      'Hornea a 160°C durante 20 minutos, removiendo con cuidado a mitad del tiempo para que no se quemen los bordes.',
      'Deja enfriar por completo en la bandeja sin tocarla; al enfriar se volverá súper crujiente.',
      'Sirve sobre boles de yogur natural frío con fruta fresca.'
    ],
    stepTimes: [5, 2, 2, 2, 20, 15, 2],
    tips: [
      'No toques la granola mientras esté caliente; el crujiente se forma al enfriarse el azúcar de la miel sobre la avena.',
      'Guárdala en un tarro hermético de cristal y se conservará fresca hasta 3 semanas.'
    ],
    substitutions: [
      'Puedes añadir pasas o trocitos de chocolate negro después de hornear y enfriar.',
      'Usa yogur de coco o almendras para una versión vegana.'
    ]
  },
  {
    id: 'rec-des-012',
    name: 'Açai bowl tropical con plátano, arándanos y coco',
    description: 'Crema helada y densa de pulpa de açai puro batido con plátano congelado, decorada con granola, arándanos y lascas de coco.',
    country: 'Brasil',
    servings: 1,
    prepTime: 8,
    cookTime: 0,
    totalTime: 8,
    difficulty: 'Fácil',
    categories: ['desayunos', 'saludables', 'vegetarianas', 'veganas', 'rapidas', 'bebidas', 'internacional'],
    tags: ['acai bowl', 'antioxidantes', 'brasil', 'frutas', 'vegano', 'energía'],
    allergens: [],
    nutrition: {
      calories: 280,
      protein: 5,
      carbs: 52,
      fat: 7,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (280 g).'
    },
    emoji: '🫐',
    color: '#6b21a8',
    ingredients: [
      { id: 'ing-des-82', name: 'Pulpa de açai congelada sin azúcar', amount: 100, unit: 'g', category: 'despensa' },
      { id: 'ing-des-83', name: 'Plátano maduro congelado en rodajas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-des-84', name: 'Bebida de almendras o leche de coco', amount: 50, unit: 'ml', category: 'despensa' },
      { id: 'ing-des-85', name: 'Arándanos frescos', amount: 30, unit: 'g', category: 'frescos' },
      { id: 'ing-des-86', name: 'Coco rallado o en lascas tostadas', amount: 10, unit: 'g', category: 'despensa' },
      { id: 'ing-des-87', name: 'Granola casera crujiente', amount: 25, unit: 'g', category: 'despensa' }
    ],
    steps: [
      'Pon en el vaso de una batidora potente la pulpa de açai ligeramente rota, las rodajas de plátano congelado y un chorrito de leche de almendras.',
      'Tritura a velocidad alta empujando con la espátula hasta obtener una crema espesa y suave con consistencia de helado cremoso.',
      'Vierte la crema de açai inmediatamente en un bol hondo bien frío.',
      'Decora la superficie en hileras alineadas con granola crujiente, arándanos frescos, rodajas de plátano y lascas de coco tostado.',
      'Degusta al momento con cuchara.'
    ],
    stepTimes: [2, 3, 1, 2],
    tips: [
      'Usa la mínima cantidad posible de líquido para que el açai quede tan denso que sostenga las frutas en la superficie.',
      'Tener el plátano bien congelado es clave para lograr la textura de helado cremoso.'
    ],
    substitutions: [
      'Puedes añadir fresas, mango en dados o semillas de chía por encima.',
      'Añade una cucharadita de crema de cacahuete para enriquecer en proteínas.'
    ]
  }
];
