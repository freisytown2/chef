import { Recipe } from '../../types/recipe';

export const familiaresRecipes: Recipe[] = [
  {
    id: 'rec-fam-001',
    name: 'Lasaña boloñesa clásica artesanal',
    description: 'Capas de pasta casera, salsa boloñesa con carne estofada lentamente, bechamel cremosa y queso parmesano gratinado.',
    country: 'Italia',
    servings: 6,
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'arroces-pastas', 'internacional'],
    tags: ['lasaña', 'pasta', 'carne picada', 'bechamel', 'queso', 'italiana'],
    allergens: ['Gluten', 'Lácteos'],
    nutrition: {
      calories: 520,
      protein: 28,
      carbs: 48,
      fat: 22,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (350 g).'
    },
    emoji: '🍝',
    color: '#ea580c',
    ingredients: [
      { id: 'ing-fam-01', name: 'Láminas de lasaña', amount: 12, unit: 'unidades', category: 'despensa' },
      { id: 'ing-fam-02', name: 'Carne picada mixta (ternera y cerdo)', amount: 500, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-03', name: 'Cebolla picada finamente', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-04', name: 'Zanahoria picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-05', name: 'Salsa de tomate casera', amount: 400, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-06', name: 'Vino tinto seco', amount: 100, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-07', name: 'Mantequilla', amount: 50, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-08', name: 'Harina de trigo', amount: 50, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-09', name: 'Leche entera', amount: 600, unit: 'ml', category: 'lacteos' },
      { id: 'ing-fam-10', name: 'Queso parmesano rallado', amount: 100, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-11', name: 'Aceite de oliva virgen extra', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-12', name: 'Sal, pimienta y nuez moscada', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Sofríe la cebolla y zanahoria picadas en una cazuela con aceite de oliva durante 8 minutos hasta que ablanden.',
      'Añade la carne picada y dora a fuego vivo durante 10 minutos salpimentando al gusto.',
      'Vierte el vino tinto y deja reducir 5 minutos a fuego medio para evaporar el alcohol.',
      'Agrega la salsa de tomate, tapa y cocina a fuego lento durante 25 minutos removiendo ocasionalmente.',
      'Para la bechamel: derrite la mantequilla, agrega la harina y tuesta 2 minutos; vierte la leche tibia poco a poco batiendo hasta espesar durante 8 minutos; sazona con nuez moscada y sal.',
      'Monta en una fuente para horno: capa fina de bechamel, láminas de pasta, salsa boloñesa y repite 3 veces.',
      'Cubre con la bechamel restante y abundante parmesano rallado. Hornea a 190°C durante 25 minutos hasta que esté dorada y burbujeante.'
    ],
    stepTimes: [8, 10, 5, 25, 8, 5, 25],
    tips: [
      'Deja reposar la lasaña 10 minutos fuera del horno antes de cortarla para que las porciones queden firmes.',
      'Puedes preparar la boloñesa el día anterior para concentrar aún más sus aromas.'
    ],
    substitutions: [
      'Usa láminas de maíz o arroz para una versión sin gluten.',
      'Reemplaza la carne picada por lentejas cocidas o soja texturizada para hacerla vegetariana.'
    ]
  },
  {
    id: 'rec-fam-002',
    name: 'Pollo asado al horno con patatas panaderas',
    description: 'Pollo entero dorado y crujiente por fuera, tierno y jugoso por dentro, sobre cama de patatas asadas con vino blanco y romero.',
    country: 'España',
    servings: 4,
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'cenas', 'carnes-pollo', 'economicas'],
    tags: ['pollo asado', 'patatas', 'horno', 'romero', 'comida casera'],
    allergens: [],
    nutrition: {
      calories: 460,
      protein: 38,
      carbs: 26,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (400 g).'
    },
    emoji: '🍗',
    color: '#d97706',
    ingredients: [
      { id: 'ing-fam-13', name: 'Pollo entero limpio', amount: 1.5, unit: 'kg', category: 'carnes' },
      { id: 'ing-fam-14', name: 'Patatas medianas', amount: 4, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-15', name: 'Limones', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-16', name: 'Dientes de ajo', amount: 6, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-17', name: 'Romero fresco', amount: 3, unit: 'ramas', category: 'frescos' },
      { id: 'ing-fam-18', name: 'Vino blanco seco', amount: 120, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-19', name: 'Aceite de oliva virgen extra', amount: 40, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-20', name: 'Sal gruesa y pimienta negra', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Precalienta el horno a 200°C con calor arriba y abajo.',
      'Pela las patatas, córtalas en rodajas de 1 cm y colócalas cubriendo el fondo de una bandeja de asar con un poco de sal y aceite.',
      'Seca el pollo con papel de cocina y úntalo generosamente por dentro y por fuera con aceite de oliva, sal y pimienta.',
      'Introduce en la cavidad del pollo un limón cortado en cuartos, 3 ajos machacados y una rama de romero.',
      'Coloca el pollo sobre las patatas, riega con el vino blanco y el zumo del otro limón.',
      'Hornea a 190°C durante 30 minutos; riega el pollo con los jugos de la bandeja y dale la vuelta para hornear otros 30 minutos hasta dorar uniformemente.'
    ],
    stepTimes: [5, 5, 5, 3, 2, 60],
    tips: [
      'Secar la piel a fondo antes de hornear es la clave de una piel crujiente.',
      'Riega las patatas con los jugos del pollo a mitad del horneado para que absorban todo el sabor.'
    ],
    substitutions: [
      'Puedes sustituir las patatas por boniatos o rodajas de calabaza.',
      'Si no tienes romero fresco, el tomillo o el orégano seco son excelentes alternativas.'
    ]
  },
  {
    id: 'rec-fam-003',
    name: 'Albóndigas de la abuela en salsa española',
    description: 'Albóndigas de carne tiernas y jugosas cocinadas a fuego lento en una salsa espesa de cebolla caramelizada y vino.',
    country: 'España',
    servings: 4,
    prepTime: 25,
    cookTime: 30,
    totalTime: 55,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'economicas'],
    tags: ['albóndigas', 'ternera', 'guiso', 'salsa española', 'tradicional'],
    allergens: ['Gluten', 'Huevo'],
    nutrition: {
      calories: 430,
      protein: 32,
      carbs: 22,
      fat: 21,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (320 g).'
    },
    emoji: '🧆',
    color: '#b91c1c',
    ingredients: [
      { id: 'ing-fam-21', name: 'Carne picada de ternera y cerdo', amount: 500, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-22', name: 'Huevo fresco', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-23', name: 'Miga de pan remojada en leche', amount: 60, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-24', name: 'Dientes de ajo picados', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-25', name: 'Perejil fresco picado', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-fam-26', name: 'Cebolla grande picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-27', name: 'Harina de trigo', amount: 40, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-28', name: 'Caldo de carne o verduras', amount: 400, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-29', name: 'Vino blanco', amount: 80, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-30', name: 'Aceite de oliva virgen extra', amount: 50, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-31', name: 'Sal y pimienta', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En un bol mezcla la carne, huevo, miga de pan escurrida, ajo picado, perejil, sal y pimienta.',
      'Forma bolas medianas y pásalas ligeramente por harina sacudiendo el sobrante.',
      'En una cazuela con aceite caliente dora las albóndigas durante 5 minutos para sellar el exterior; retira a un plato.',
      'En el mismo aceite sofríe la cebolla picada a fuego lento durante 12 minutos hasta dorar.',
      'Añade una cucharadita de harina a la cebolla, tuesta 1 minuto y vierte el vino blanco reduciendo 2 minutos.',
      'Agrega el caldo caliente, reincorpora las albóndigas y cocina a fuego suave durante 20 minutos hasta que la salsa espese.'
    ],
    stepTimes: [10, 5, 5, 12, 3, 20],
    tips: [
      'Remojar la miga de pan en leche aporta una textura sumamente tierna y esponjosa a las albóndigas.',
      'Sirve con patatas fritas en dados o arroz blanco para mojar la salsa.'
    ],
    substitutions: [
      'Puedes usar carne de pollo o pavo para una versión con menos grasa.',
      'Para celíacos usa pan rallado y harina de maíz o garbanzo sin gluten.'
    ]
  },
  {
    id: 'rec-fam-004',
    name: 'Estofado de ternera melosa con patatas y zanahorias',
    description: 'Carne de ternera cocinada a fuego suave hasta quedar tierna como mantequilla, con patatas chascadas y caldo denso.',
    country: 'España',
    servings: 4,
    prepTime: 20,
    cookTime: 50,
    totalTime: 70,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'sopas-cremas'],
    tags: ['ternera', 'estofado', 'guisado', 'patatas', 'zanahorias', 'cuchara'],
    allergens: [],
    nutrition: {
      calories: 410,
      protein: 35,
      carbs: 28,
      fat: 14,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (380 g).'
    },
    emoji: '🍲',
    color: '#c2410c',
    ingredients: [
      { id: 'ing-fam-32', name: 'Carne de ternera para guisar en dados', amount: 600, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-33', name: 'Patatas medianas', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-34', name: 'Zanahorias en rodajas', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-35', name: 'Cebolla picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-36', name: 'Pimiento verde italiano', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-37', name: 'Tomate maduro triturado', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-38', name: 'Pimentón dulce de la Vera', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-39', name: 'Hoja de laurel', amount: 1, unit: 'unidad', category: 'especias' },
      { id: 'ing-fam-40', name: 'Caldo de carne o agua', amount: 650, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-41', name: 'Aceite de oliva virgen extra', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-42', name: 'Sal y pimienta negra', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Salpimienta los dados de ternera y dóralos en una olla honda con aceite caliente durante 6 minutos; retira.',
      'En el mismo aceite sofríe la cebolla, el pimiento y los ajos durante 8 minutos a fuego medio.',
      'Añade el tomate triturado y deja cocinar 6 minutos hasta que evapore el agua.',
      'Añade el pimentón dulce, remueve rápidamente durante 20 segundos y cubre con el caldo caliente y el laurel.',
      'Reincorpora la carne, tapa la olla y cocina a fuego lento durante 40 minutos hasta que la ternera esté tierna.',
      'Pela y chasca las patatas con el cuchillo; añádelas junto con las zanahorias y cocina 20 minutos más hasta que las patatas estén tiernas y el caldo espeso.'
    ],
    stepTimes: [6, 8, 6, 2, 40, 20],
    tips: [
      'Chascar las patatas (cortar un poco y quebrar) suelta almidón y liga la salsa naturalmente sin necesidad de harina.',
      'Este estofado sabe aún mejor al día siguiente cuando los sabores se asientan.'
    ],
    substitutions: [
      'Puedes sustituir la ternera por magro de cerdo o cordero.',
      'Añade guisantes o champiñones al final para más color y textura.'
    ]
  },
  {
    id: 'rec-fam-005',
    name: 'Arroz con pollo criollo al caldero',
    description: 'Arroz aromático teñido con achiote, pechuga y muslos dorados, verduras frescas y cilantro recién picado.',
    country: 'Colombia',
    servings: 6,
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'arroces-pastas', 'carnes-pollo', 'internacional'],
    tags: ['arroz con pollo', 'criollo', 'plato único', 'latino', 'achiote'],
    allergens: [],
    nutrition: {
      calories: 440,
      protein: 30,
      carbs: 52,
      fat: 11,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (350 g).'
    },
    emoji: '🥘',
    color: '#f59e0b',
    ingredients: [
      { id: 'ing-fam-43', name: 'Arroz de grano largo', amount: 400, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-44', name: 'Pechuga y muslos de pollo en dados', amount: 600, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-45', name: 'Pimiento rojo picado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-46', name: 'Cebolla blanca picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-47', name: 'Dientes de ajo triturados', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-48', name: 'Guisantes cocidos', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-fam-49', name: 'Zanahoria en cubitos pequeños', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-50', name: 'Caldo de pollo caliente', amount: 800, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-51', name: 'Achiote en polvo o colorante', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-52', name: 'Aceite vegetal', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-53', name: 'Cilantro fresco picado', amount: 3, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-fam-54', name: 'Sal y comino molido', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Sazona el pollo con sal, ajo triturado y una pizca de comino.',
      'En un caldero u olla grande calienta el aceite y dora el pollo durante 8 minutos hasta dorar.',
      'Agrega la cebolla, el pimiento y la zanahoria; sofríe todo durante 7 minutos.',
      'Añade el achiote y el arroz crudo; sofríe durante 2 minutos mezclando para impregnar los granos.',
      'Vierte el caldo de pollo hirviendo, rectifica la sal y cocina a fuego medio destapado hasta que reduzca el líquido (unos 10 minutos).',
      'Tapa la olla, baja el fuego al mínimo, añade los guisantes por encima y cocina durante 15 minutos más.',
      'Apaga el fuego, espolvorea con cilantro fresco y deja reposar 5 minutos tapado antes de servir.'
    ],
    stepTimes: [5, 8, 7, 2, 10, 15, 5],
    tips: [
      'El doble de caldo por cantidad de arroz garantiza que el grano quede suelto y bien cocido sin apelmazarse.',
      'Acompaña con rodajas de plátano maduro frito o ensalada fresca.'
    ],
    substitutions: [
      'Puedes sustituir el pollo por gambas o dados de carne de cerdo magra.',
      'Si no consigues achiote, el pimentón dulce o la cúrcuma dan un color y aroma maravillosos.'
    ]
  },
  {
    id: 'rec-fam-006',
    name: 'Canelones gratinados rellenos de rustido casero',
    description: 'Placas de pasta enrolladas con un relleno tradicional de carne asada y paté suave, cubiertos con bechamel y queso.',
    country: 'España',
    servings: 4,
    prepTime: 35,
    cookTime: 30,
    totalTime: 65,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'cenas', 'arroces-pastas', 'carnes-pollo'],
    tags: ['canelones', 'pasta rellena', 'bechamel', 'rustido', 'gratinado'],
    allergens: ['Gluten', 'Lácteos'],
    nutrition: {
      calories: 490,
      protein: 26,
      carbs: 42,
      fat: 23,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (320 g).'
    },
    emoji: '🧀',
    color: '#e11d48',
    ingredients: [
      { id: 'ing-fam-55', name: 'Placas de canelones precocidas', amount: 16, unit: 'unidades', category: 'despensa' },
      { id: 'ing-fam-56', name: 'Carne picada mixta', amount: 400, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-57', name: 'Paté suave de cerdo o pollo', amount: 50, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-58', name: 'Cebolla picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-59', name: 'Tomate maduro rallado', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-60', name: 'Vino de Jerez o coñac', amount: 50, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-61', name: 'Salsa bechamel casera', amount: 500, unit: 'ml', category: 'lacteos' },
      { id: 'ing-fam-62', name: 'Queso emmental rallado', amount: 80, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-63', name: 'Aceite de oliva virgen extra', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-64', name: 'Sal, pimienta y nuez moscada', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En una sartén con aceite sofríe la carne y la cebolla picada durante 12 minutos a fuego medio.',
      'Añade el paté, el tomate rallado y el jerez; deja reducir 10 minutos hasta que quede un relleno seco y concentrado.',
      'Deja templar el relleno e incorpora 3 cucharadas de bechamel para ligar la mezcla.',
      'Rellena los canelones y disponlos alineados en una fuente de horno con una base ligera de bechamel.',
      'Cubre con toda la bechamel restante y espolvorea el queso rallado.',
      'Hornea y gratina a 200°C durante 15 minutos hasta que la superficie esté dorada y crocante.'
    ],
    stepTimes: [12, 10, 5, 8, 3, 15],
    tips: [
      'Añadir un par de cucharadas de bechamel al relleno de carne asegura que nunca quede seco.',
      'Puedes congelar la bandeja montada antes de hornear y gratinarla directamente en otra ocasión.'
    ],
    substitutions: [
      'Sustituye la carne por espinacas cocidas, ricota y piñones para una variante vegetariana.',
      'Usa placas de pasta sin gluten para adaptar la receta a personas celíacas.'
    ]
  },
  {
    id: 'rec-fam-007',
    name: 'Milanesas de ternera a la napolitana con patatas fritas',
    description: 'Filetes de ternera empanados crujientes, cubiertos con salsa de tomate casera, jamón cocido y queso mozzarella derretido.',
    country: 'Argentina',
    servings: 4,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'internacional'],
    tags: ['milanesa', 'napolitana', 'ternera', 'queso mozzarella', 'argentina'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 530,
      protein: 42,
      carbs: 34,
      fat: 24,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (380 g).'
    },
    emoji: '🥩',
    color: '#dc2626',
    ingredients: [
      { id: 'ing-fam-65', name: 'Filetes de ternera finos (nalga o bola de lomo)', amount: 4, unit: 'unidades', category: 'carnes' },
      { id: 'ing-fam-66', name: 'Huevos batidos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-67', name: 'Diente de ajo y perejil picados', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-fam-68', name: 'Pan rallado fino', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-69', name: 'Salsa de tomate frito casera', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-70', name: 'Lonchas de jamón cocido', amount: 4, unit: 'unidades', category: 'carnes' },
      { id: 'ing-fam-71', name: 'Queso mozzarella en lonchas o rallado', amount: 150, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-72', name: 'Orégano seco', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-73', name: 'Aceite para freír o cocinar al horno', amount: 60, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-74', name: 'Sal y pimienta', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Espalma los filetes con un mazo para que queden finos y uniformes; salpimienta.',
      'Pasa la carne por los huevos batidos con ajo y perejil, y luego por el pan rallado presionando con fuerza para que se adhiera bien.',
      'Dora las milanesas en una sartén con aceite caliente durante 2 minutos por lado (o colócalas en horno a 200°C 10 minutos).',
      'Dispón las milanesas en una bandeja para horno.',
      'Cubre cada una con dos cucharadas de salsa de tomate, una loncha de jamón y queso mozzarella.',
      'Espolvorea con orégano y gratina a 220°C durante 5 minutos hasta que el queso esté bien fundido y dorado.'
    ],
    stepTimes: [5, 5, 4, 2, 2, 5],
    tips: [
      'Presionar firmemente el pan rallado sobre la carne evita que el rebozado se despegue al cocinar.',
      'Para una versión más ligera hornea las milanesas en lugar de freírlas.'
    ],
    substitutions: [
      'Puedes utilizar pechuga de pollo o lomo de cerdo en lugar de ternera.',
      'Sustituye por berenjena en rodajas finas para hacer milanesas napolitanas vegetarianas.'
    ]
  },
  {
    id: 'rec-fam-008',
    name: 'Shepherd\'s Pie británico (Pastel de carne con puré)',
    description: 'Carne picada guisada con verduras y salsa Worcestershire coronada con un puré de patatas dorado y crujiente.',
    country: 'Reino Unido',
    servings: 6,
    prepTime: 25,
    cookTime: 35,
    totalTime: 60,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'cenas', 'carnes-pollo', 'internacional'],
    tags: ['pastel de carne', 'puré de patatas', 'shepherds pie', 'carne picada'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 480,
      protein: 27,
      carbs: 42,
      fat: 22,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (350 g).'
    },
    emoji: '🥧',
    color: '#a16207',
    ingredients: [
      { id: 'ing-fam-75', name: 'Carne picada de ternera o cordero', amount: 600, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-76', name: 'Cebolla grande picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-77', name: 'Zanahorias picadas en cubitos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-78', name: 'Guisantes tiernos', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-fam-79', name: 'Concentrado de tomate', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-fam-80', name: 'Salsa inglesa Worcestershire', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-fam-81', name: 'Caldo de carne', amount: 300, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-82', name: 'Patatas para puré', amount: 800, unit: 'g', category: 'frescos' },
      { id: 'ing-fam-83', name: 'Mantequilla', amount: 50, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-84', name: 'Leche entera', amount: 60, unit: 'ml', category: 'lacteos' },
      { id: 'ing-fam-85', name: 'Sal, pimienta y tomillo', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Cuece las patatas peladas en agua con sal durante 20 minutos; aplástalas con mantequilla, leche, sal y nuez moscada.',
      'En una sartén sofríe la cebolla y zanahorias en aceite durante 7 minutos.',
      'Añade la carne picada y dora a fuego fuerte durante 8 minutos rompiendo los grumos.',
      'Agrega el concentrado de tomate, salsa inglesa y tomillo; cocina 2 minutos.',
      'Vierte el caldo de carne y guisantes; reduce a fuego lento durante 12 minutos hasta que la salsa espese.',
      'Coloca la carne en una fuente refractaria y cubre con el puré de patata marcando surcos con un tenedor.',
      'Hornea a 200°C durante 20 minutos hasta que las crestas del puré queden doradas y crujientes.'
    ],
    stepTimes: [20, 7, 8, 2, 12, 5, 20],
    tips: [
      'Hacer surcos con un tenedor en la superficie del puré ayuda a crear una corteza dorada deliciosa.',
      'Deja reposar 10 minutos antes de servir para emplatar de forma limpia.'
    ],
    substitutions: [
      'Reemplaza la ternera por lentejas cocidas para un delicioso Shepherdess Pie vegano o vegetariano.',
      'Usa aceite de oliva y bebida de avena en lugar de mantequilla y leche de vaca.'
    ]
  },
  {
    id: 'rec-fam-009',
    name: 'Cazuela de mariscos cremosa con leche de coco',
    description: 'Sopa espesa y fragante con langostinos, calamares, mejillones y pescado blanco en reducción de coco y achiote.',
    country: 'Colombia',
    servings: 4,
    prepTime: 25,
    cookTime: 20,
    totalTime: 45,
    difficulty: 'Media',
    categories: ['familiares', 'pescados-mariscos', 'almuerzos', 'internacional'],
    tags: ['cazuela', 'mariscos', 'leche de coco', 'langostinos', 'caribe'],
    allergens: ['Crustáceos', 'Pescado', 'Moluscos'],
    nutrition: {
      calories: 390,
      protein: 31,
      carbs: 16,
      fat: 19,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (380 g).'
    },
    emoji: '🍲',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-fam-86', name: 'Filete de pescado blanco en cubos (merluza o corvina)', amount: 300, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-87', name: 'Langostinos limpios pelados', amount: 200, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-88', name: 'Anillas de calamar', amount: 200, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-89', name: 'Mejillones limpios', amount: 200, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-90', name: 'Leche de coco', amount: 350, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-91', name: 'Caldo de pescado o fumet', amount: 400, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-92', name: 'Cebolla y pimientos picados', amount: 1, unit: 'taza', category: 'frescos' },
      { id: 'ing-fam-93', name: 'Dientes de ajo majados', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-94', name: 'Pasta de tomate concentrada', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-fam-95', name: 'Aceite con achiote', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-96', name: 'Cilantro fresco picado', amount: 3, unit: 'cucharadas', category: 'frescos' }
    ],
    steps: [
      'En una cazuela con aceite de achiote dora las anillas de calamar 3 minutos; retira.',
      'Sofríe la cebolla, el ajo y los pimientos durante 6 minutos a fuego medio.',
      'Agrega la pasta de tomate y el caldo de pescado caliente; deja hervir 5 minutos.',
      'Añade la leche de coco y cuando rompa a hervir incorpora el pescado blanco y los calamares.',
      'Cocina a fuego medio durante 5 minutos y agrega los langostinos y mejillones.',
      'Tapa y cocina 4 minutos más hasta que los mejillones se abran y los langostinos tomen color rosado.',
      'Espolvorea cilantro fresco y sirve caliente con arroz con coco y patacones.'
    ],
    stepTimes: [3, 6, 5, 5, 4, 2],
    tips: [
      'No sobrecocines los langostinos; 3 a 4 minutos bastan para que queden tiernos y elásticos.',
      'Un chorrito de zumo de lima al final equilibra la riqueza de la leche de coco.'
    ],
    substitutions: [
      'Puedes usar la mezcla de mariscos congelada disponible en el supermercado.',
      'Sustituye la leche de coco por leche evaporada si prefieres un perfil menos tropical.'
    ]
  },
  {
    id: 'rec-fam-010',
    name: 'Macarrones con queso cheddar gratinados (Mac and Cheese)',
    description: 'Pasta corta en salsa cremosa de queso cheddar fundido con una costra dorada de pan rallado y pimentón.',
    country: 'EE.UU.',
    servings: 4,
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    difficulty: 'Fácil',
    categories: ['familiares', 'arroces-pastas', 'rapidas', 'vegetarianas', 'almuerzos'],
    tags: ['mac and cheese', 'pasta', 'queso cheddar', 'gratinado', 'cremoso'],
    allergens: ['Gluten', 'Lácteos'],
    nutrition: {
      calories: 540,
      protein: 21,
      carbs: 58,
      fat: 25,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (300 g).'
    },
    emoji: '🧀',
    color: '#f59e0b',
    ingredients: [
      { id: 'ing-fam-97', name: 'Macarrones tipo codo', amount: 350, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-98', name: 'Mantequilla', amount: 40, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-99', name: 'Harina de trigo', amount: 35, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-100', name: 'Leche entera tibia', amount: 500, unit: 'ml', category: 'lacteos' },
      { id: 'ing-fam-101', name: 'Queso cheddar curado rallado', amount: 200, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-102', name: 'Queso mozzarella rallado', amount: 100, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-103', name: 'Pan rallado o panko', amount: 40, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-104', name: 'Mostaza en polvo y pimentón', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-105', name: 'Sal y pimienta blanca', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Cuece los macarrones en agua hirviendo con sal durante 7 minutos (al dente); escurre y reserva.',
      'Derrite la mantequilla en un cazo, añade la harina y tuesta durante 2 minutos removiendo.',
      'Vierte la leche tibia gradualmente con varillas hasta obtener una salsa bechamel sin grumos.',
      'Retira del fuego y añade la mostaza en polvo, pimienta y el 80% de los quesos removiendo hasta fundir.',
      'Mezcla la pasta escurrida con la crema de queso y viértela en una fuente para horno.',
      'Espolvorea por encima el resto del queso y el pan rallado mezclado con una pizca de pimentón.',
      'Gratina en el horno a 200°C durante 10 minutos hasta que la superficie esté dorada y crujiente.'
    ],
    stepTimes: [7, 2, 4, 3, 2, 10],
    tips: [
      'Rallar el queso cheddar en bloque en vez de usar queso de bolsa asegura una textura suave sin grumos.',
      'La mostaza en polvo intensifica el sabor del queso cheddar sin dejar sabor picante.'
    ],
    substitutions: [
      'Usa pasta sin gluten y harina fina de maíz para celíacos.',
      'Añade jamón en dados o ramitos de brócoli cocido para enriquecer el plato.'
    ]
  },
  {
    id: 'rec-fam-011',
    name: 'Empanadas argentinas de ternera al horno',
    description: 'Empanadas tradicionales con relleno jugoso de ternera picada a cuchillo, cebolla pochada, aceitunas y huevo duro.',
    country: 'Argentina',
    servings: 4,
    prepTime: 35,
    cookTime: 20,
    totalTime: 55,
    difficulty: 'Media',
    categories: ['familiares', 'aperitivos-fiestas', 'almuerzos', 'carnes-pollo', 'internacional'],
    tags: ['empanadas', 'carne picada', 'argentinas', 'horno', 'repulgue'],
    allergens: ['Gluten', 'Huevo'],
    nutrition: {
      calories: 380,
      protein: 22,
      carbs: 34,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (2 empanadas grandes).'
    },
    emoji: '🥟',
    color: '#d97706',
    ingredients: [
      { id: 'ing-fam-106', name: 'Discos de masa para empanadas al horno', amount: 12, unit: 'unidades', category: 'despensa' },
      { id: 'ing-fam-107', name: 'Carne de ternera magra picada', amount: 400, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-108', name: 'Cebollas blancas picadas', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-109', name: 'Cebolleta fresca picada', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-110', name: 'Huevos duros picados', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-111', name: 'Aceitunas verdes picadas', amount: 60, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-112', name: 'Comino y pimentón dulce', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-113', name: 'Aceite de oliva o manteca', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-114', name: 'Huevo batido para pintar', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-115', name: 'Sal y pimienta negra', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Pocha las cebollas en aceite a fuego suave durante 12 minutos hasta que estén transparentes.',
      'Sube el fuego, añade la carne y sella durante 4 minutos para conservar los jugos sin resecar.',
      'Condimenta con sal, pimienta, comino y pimentón; cocina 2 minutos más y retira del fuego.',
      'Deja enfriar el relleno en la nevera durante al menos 1 hora para que los jugos se gelatinicen.',
      'Añade el huevo duro picado, aceitunas y la parte verde de la cebolleta cruda.',
      'Coloca una cucharada colmada de relleno en cada disco de masa, humedece el borde y haz el repulgue.',
      'Pinta con huevo batido y hornea a 210°C durante 18 minutos hasta que la masa esté dorada.'
    ],
    stepTimes: [12, 4, 2, 60, 5, 10, 18],
    tips: [
      'Enfriar el relleno antes de armar las empanadas es imprescindible para que no rompa la masa y quede jugosa.',
      'Hornear a temperatura alta asegura una masa crujiente y dorada.'
    ],
    substitutions: [
      'Puedes freírlas en abundante aceite bien caliente en lugar de hornearlas.',
      'Añade pasas sultanas si prefieres el estilo tradicional norteño con matiz agridulce.'
    ]
  },
  {
    id: 'rec-fam-012',
    name: 'Cocido madrileño en tres vuelcos',
    description: 'Plato festivo y familiar por excelencia: sopa de fideos aromática, garbanzos castellanos con verduras y carnes cocidas.',
    country: 'España',
    servings: 6,
    prepTime: 20,
    cookTime: 120,
    totalTime: 140,
    difficulty: 'Media',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'sopas-cremas'],
    tags: ['cocido madrileño', 'garbanzos', 'sopa', 'carnes', 'tradicional'],
    allergens: ['Gluten'],
    nutrition: {
      calories: 620,
      protein: 44,
      carbs: 48,
      fat: 26,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio completa (450 g).'
    },
    emoji: '🍲',
    color: '#b45309',
    ingredients: [
      { id: 'ing-fam-116', name: 'Garbanzos secos remojados 12 horas', amount: 400, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-117', name: 'Morcillo de ternera', amount: 400, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-118', name: 'Pechuga o cuarto de gallina/pollo', amount: 350, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-119', name: 'Punta de jamón serrano y hueso de caña', amount: 200, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-120', name: 'Tocino ibérico fresco', amount: 100, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-121', name: 'Chorizo y morcilla asturiana', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-fam-122', name: 'Repollo mediano cortado', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-123', name: 'Patatas y zanahorias', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-124', name: 'Fideos finos para la sopa', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-125', name: 'Sal', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Pon las carnes y huesos en una olla grande con agua fría abundante y lleva a ebullición espumando con cuidado.',
      'Cuando hierva a borbotones introduce los garbanzos escurridos dentro de una red de cocina para que no se dispersen.',
      'Tapa y cuece a fuego lento constante durante 90 minutos.',
      'Añade las zanahorias, patatas y el repollo; cuece otros 30 minutos hasta que los garbanzos estén tiernos como mantequilla.',
      'Cuela el caldo hirviendo a otra olla y cuece los fideos finos durante 4 minutos (primer vuelco: la sopa).',
      'Sirve los garbanzos con las patatas y verduras regadas con aceite de oliva (segundo vuelco).',
      'Sirve en una fuente grande las carnes troceadas y los embutidos (tercer vuelco).'
    ],
    stepTimes: [15, 5, 90, 30, 4, 5, 5],
    tips: [
      'Espumar muy bien el caldo en los primeros 15 minutos garantiza una sopa limpia y transparente.',
      'Cuece el chorizo y la morcilla en un cacito aparte si prefieres una sopa menos grasa.'
    ],
    substitutions: [
      'Usa fideos sin gluten para la sopa en caso de intolerancia.',
      'Los restos de carne son la base perfecta para preparar las famosas croquetas de cocido.'
    ]
  },
  {
    id: 'rec-fam-013',
    name: 'Pastelón dominicano de plátano maduro con carne',
    description: 'Capas de puré de plátano maduro dulce alternadas con carne molida sazonada y abundante queso fundido.',
    country: 'República Dominicana',
    servings: 6,
    prepTime: 25,
    cookTime: 30,
    totalTime: 55,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'internacional'],
    tags: ['pastelón', 'plátano maduro', 'carne molida', 'caribeño', 'dulce y salado'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 48,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (320 g).'
    },
    emoji: '🍌',
    color: '#eab308',
    ingredients: [
      { id: 'ing-fam-126', name: 'Plátanos maduros (piel amarilla con manchas negras)', amount: 5, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-127', name: 'Carne molida de res', amount: 500, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-128', name: 'Mantequilla', amount: 40, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-129', name: 'Queso cheddar o mozzarella rallado', amount: 200, unit: 'g', category: 'lacteos' },
      { id: 'ing-fam-130', name: 'Cebolla picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-131', name: 'Pimiento morrón picado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-fam-132', name: 'Pasta de tomate casera', amount: 3, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-fam-133', name: 'Aceitunas alcaparradas picadas', amount: 30, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-134', name: 'Sal, pimienta y orégano', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Pela los plátanos maduros, córtalos en trozos y hiérvelos en agua con una pizca de sal durante 15 minutos hasta que estén suaves.',
      'Escúrrelos y májalos con la mantequilla hasta formar un puré suave y homogéneo.',
      'En una sartén sofríe la cebolla, el pimiento y la carne molida durante 10 minutos; sazona con pasta de tomate, aceitunas y orégano.',
      'Enmantequilla un molde refractario y coloca la mitad del puré de plátano en la base.',
      'Añade toda la carne molida sazonada y una capa de queso rallado.',
      'Cubre con el resto del puré de plátano y corona con abundante queso por encima.',
      'Hornea a 190°C durante 20 minutos hasta que el queso esté burbujeante y dorado.'
    ],
    stepTimes: [15, 5, 10, 3, 2, 2, 20],
    tips: [
      'Cuanto más maduros estén los plátanos (piel casi negra), más dulce y sabroso quedará el contraste con la carne.',
      'Puedes añadir un huevo batido sobre el pastelón antes de hornear para que dore uniformemente.'
    ],
    substitutions: [
      'Puedes usar carne de pollo o pavo molida.',
      'Sustituye el queso por una opción vegana para versiones sin lactosa.'
    ]
  },
  {
    id: 'rec-fam-014',
    name: 'Conejo guisado al ajillo con vino blanco',
    description: 'Carne blanca tierna y baja en grasas, dorada en aceite de oliva virgen extra con abundante ajo y hierbas aromáticas.',
    country: 'España',
    servings: 4,
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'cenas', 'carnes-pollo', 'saludables'],
    tags: ['conejo', 'al ajillo', 'carne blanca', 'tradicional', 'vino blanco'],
    allergens: [],
    nutrition: {
      calories: 340,
      protein: 36,
      carbs: 4,
      fat: 16,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (280 g).'
    },
    emoji: '🥘',
    color: '#ca8a04',
    ingredients: [
      { id: 'ing-fam-135', name: 'Conejo troceado limpio', amount: 1, unit: 'kg', category: 'carnes' },
      { id: 'ing-fam-136', name: 'Cabezas de ajo con dientes pelados y laminados', amount: 2, unit: 'cabezas', category: 'frescos' },
      { id: 'ing-fam-137', name: 'Vino blanco seco', amount: 150, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-138', name: 'Aceite de oliva virgen extra', amount: 60, unit: 'ml', category: 'despensa' },
      { id: 'ing-fam-139', name: 'Tomillo fresco y romero', amount: 2, unit: 'ramas', category: 'frescos' },
      { id: 'ing-fam-140', name: 'Sal gruesa y pimienta recién molida', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Salpimienta los trozos de conejo.',
      'En una sartén o cazuela amplia pon el aceite de oliva a fuego medio y confita los ajos laminados durante 5 minutos hasta dorar ligeramente; retira y reserva.',
      'En el mismo aceite dorado y aromatizado sube el fuego y dora el conejo por tandas durante 12 minutos hasta que esté bien dorado.',
      'Reincorpora los ajos confitados, el tomillo y el romero a la cazuela.',
      'Vierte el vino blanco y deja que evapore el alcohol durante 3 minutos a fuego vivo.',
      'Baja el fuego al mínimo, tapa la cazuela y deja guisar durante 20 minutos hasta que la carne esté tierna y los jugos formen una salsita dorada.'
    ],
    stepTimes: [5, 5, 12, 2, 3, 20],
    tips: [
      'No dejes quemar los ajos en el primer paso o amargarán el guiso.',
      'El conejo es una carne magra excepcional, rica en proteínas de alto valor biológico.'
    ],
    substitutions: [
      'Puedes aplicar exactamente la misma técnica con trozos de pollo campero.',
      'Acompaña con patatas al vapor o ensalada verde.'
    ]
  },
  {
    id: 'rec-fam-015',
    name: 'Cazuela chilena de vacuno con choclo y zapallo',
    description: 'Sopa tradicional de carne de res cocida con trozos enteros de mazorca de maíz, calabaza dulce, arroz y verduras.',
    country: 'Chile',
    servings: 4,
    prepTime: 20,
    cookTime: 50,
    totalTime: 70,
    difficulty: 'Fácil',
    categories: ['familiares', 'almuerzos', 'carnes-pollo', 'sopas-cremas', 'internacional'],
    tags: ['cazuela', 'chile', 'choclo', 'zapallo', 'caldo reconfortante'],
    allergens: [],
    nutrition: {
      calories: 420,
      protein: 34,
      carbs: 38,
      fat: 14,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (450 g con caldo).'
    },
    emoji: '🥣',
    color: '#d97706',
    ingredients: [
      { id: 'ing-fam-141', name: 'Trozos de carne de res con hueso (osobuco o posta)', amount: 600, unit: 'g', category: 'carnes' },
      { id: 'ing-fam-142', name: 'Mazorcas de maíz (choclo) cortadas en cuartos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-143', name: 'Trozos grandes de calabaza dulce (zapallo)', amount: 4, unit: 'trozos', category: 'frescos' },
      { id: 'ing-fam-144', name: 'Patatas medianas peladas enteras', amount: 4, unit: 'unidades', category: 'frescos' },
      { id: 'ing-fam-145', name: 'Arroz blanco', amount: 60, unit: 'g', category: 'despensa' },
      { id: 'ing-fam-146', name: 'Zanahoria y pimiento en tiritas', amount: 1, unit: 'taza', category: 'frescos' },
      { id: 'ing-fam-147', name: 'Judías verdes o porotos verdes cortados', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-fam-148', name: 'Orégano, comino y sal', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-fam-149', name: 'Cilantro fresco picado', amount: 2, unit: 'cucharadas', category: 'frescos' }
    ],
    steps: [
      'En una olla grande sella la carne con un poco de aceite durante 6 minutos; añade sal, comino y orégano.',
      'Cubre con 2 litros de agua hirviendo y cocina a fuego medio durante 30 minutos retirando la espuma.',
      'Agrega las patatas, el choclo, las zanahorias y el pimiento; cocina durante 10 minutos.',
      'Añade los trozos de zapallo, el arroz y las judías verdes; cocina durante 15 minutos más hasta que todo esté tierno.',
      'Sirve en platos hondos poniendo un trozo de carne, una patata, un trozo de zapallo y un trozo de choclo por plato.',
      'Cubre con el caldo humeante y espolvorea cilantro picado fresco.'
    ],
    stepTimes: [6, 30, 10, 15, 5],
    tips: [
      'Cocinar la carne con el hueso le confiere al caldo una textura sedosa y profunda inigualable.',
      'El zapallo se añade más tarde porque se ablanda mucho más rápido que las patatas.'
    ],
    substitutions: [
      'Puedes preparar cazuela de pollo o pavo siguiendo exactamente los mismos pasos.',
      'Si no consigues choclo fresco, usa mazorcas congeladas.'
    ]
  }
];
