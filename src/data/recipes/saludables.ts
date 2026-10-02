import { Recipe } from '../../types/recipe';

export const saludablesRecipes: Recipe[] = [
  {
    id: 'rec-sal-001',
    name: 'Salmón a la plancha con espárragos trigueros y limón',
    description: 'Lomos de salmón fresco con piel crujiente servidos con espárragos trigueros salteados y vinagreta cítrica de eneldo.',
    country: 'Internacional',
    servings: 2,
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'pescados-mariscos', 'rapidas'],
    tags: ['salmón', 'espárragos', 'omega 3', 'bajo en carbohidratos', 'keto'],
    allergens: ['Pescado'],
    nutrition: {
      calories: 380,
      protein: 34,
      carbs: 6,
      fat: 22,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (250 g).'
    },
    emoji: '🐟',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-sal-01', name: 'Lomos de salmón fresco con piel', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-sal-02', name: 'Espárragos trigueros frescos', amount: 1, unit: 'manojo', category: 'frescos' },
      { id: 'ing-sal-03', name: 'Aceite de oliva virgen extra', amount: 20, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-04', name: 'Limón en rodajas y zumo', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-05', name: 'Diente de ajo laminado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-06', name: 'Eneldo fresco picado', amount: 1, unit: 'cucharadita', category: 'frescos' },
      { id: 'ing-sal-07', name: 'Sal marina en escamas y pimienta negra', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Lava y retira la parte dura de los espárragos partiendo la base con las manos.',
      'En una sartén antiadherente con una cucharadita de aceite saltea los espárragos con el ajo laminado a fuego medio durante 6 minutos hasta que estén tiernos pero crujientes; reserva.',
      'Seca muy bien los lomos de salmón con papel de cocina y salpimienta.',
      'En la misma sartén bien caliente coloca los lomos con la piel hacia abajo durante 4 minutos a fuego medio-alto sin moverlos para que la piel quede crujiente.',
      'Dales la vuelta con cuidado y cocina otros 3 minutos por el otro lado hasta que el centro esté jugoso.',
      'Sirve inmediatamente el salmón sobre los espárragos, rocía con zumo de limón y espolvorea eneldo fresco.'
    ],
    stepTimes: [3, 6, 2, 4, 3, 2],
    tips: [
      'Secar la piel del salmón por completo es el truco para conseguir una costra dorada y crujiente.',
      'No sobrecocines el salmón; debe mantenerse rosado y jugoso en el centro.'
    ],
    substitutions: [
      'Puedes sustituir el salmón por trucha arcoíris o lubina.',
      'Los espárragos se pueden sustituir por judías verdes o brotes tiernos de brócoli.'
    ]
  },
  {
    id: 'rec-sal-002',
    name: 'Bowl de quinoa con garbanzos tostados y aguacate',
    description: 'Tazón nutritivo con base de quinoa esponjosa, garbanzos crujientes especiados, aguacate cremoso y aderezo de tahini.',
    country: 'Mediterráneo',
    servings: 2,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    difficulty: 'Fácil',
    categories: ['saludables', 'almuerzos', 'vegetarianas', 'veganas', 'ensaladas'],
    tags: ['quinoa', 'garbanzos', 'aguacate', 'bowl', 'proteína vegetal', 'fibra'],
    allergens: ['Sésamo'],
    nutrition: {
      calories: 420,
      protein: 16,
      carbs: 52,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (350 g).'
    },
    emoji: '🥗',
    color: '#10b981',
    ingredients: [
      { id: 'ing-sal-08', name: 'Quinoa lavada', amount: 150, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-09', name: 'Garbanzos cocidos escurridos', amount: 200, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-10', name: 'Aguacate maduro en láminas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-11', name: 'Tomates cherry en mitades', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-12', name: 'Espinacas baby frescas', amount: 60, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-13', name: 'Pasta de tahini', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-sal-14', name: 'Zumo de limón fresco', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-sal-15', name: 'Pimentón dulce y comino molido', amount: 1, unit: 'cucharadita', category: 'especias' },
      { id: 'ing-sal-16', name: 'Aceite de oliva virgen extra', amount: 20, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-17', name: 'Sal y pimienta', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Cuece la quinoa en el doble de volumen de agua con sal durante 12 minutos; escurre y deja enfriar.',
      'Seca los garbanzos con un paño, mézclalos con una cucharadita de aceite, pimentón y comino.',
      'Saltea los garbanzos en sartén a fuego vivo durante 8 minutos hasta que queden crujientes y dorados.',
      'Prepara el aderezo mezclando el tahini, zumo de limón, 2 cucharadas de agua tibia y sal hasta lograr una crema fluida.',
      'En dos boles distribuye la quinoa cocida, añade las espinacas baby, tomates cherry, el aguacate laminado y los garbanzos crujientes.',
      'Riega con la crema de tahini y sirve templado o frío.'
    ],
    stepTimes: [12, 3, 8, 3, 2, 2],
    tips: [
      'Secar muy bien los garbanzos antes de saltearlos es indispensable para que queden verdaderamente crujientes.',
      'Lavar la quinoa previamente elimina la saponina y evita cualquier sabor amargo.'
    ],
    substitutions: [
      'Puedes sustituir la quinoa por arroz integral, cuscús o mijo.',
      'El tahini puede reemplazarse por yogur natural o vinagreta de mostaza y miel.'
    ]
  },
  {
    id: 'rec-sal-003',
    name: 'Pechuga de pavo al vapor con finas hierbas y limón',
    description: 'Pechuga tierna y jugosa cocinada suavemente al vapor con limón, tomillo y romero, acompañada de verduras crujientes.',
    country: 'Internacional',
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'carnes-pollo', 'rapidas'],
    tags: ['pavo', 'vapor', 'bajo en grasas', 'sin gluten', 'ligero'],
    allergens: [],
    nutrition: {
      calories: 230,
      protein: 38,
      carbs: 3,
      fat: 5,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (220 g).'
    },
    emoji: '🥩',
    color: '#16a34a',
    ingredients: [
      { id: 'ing-sal-18', name: 'Filetes gruesos de pechuga de pavo', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-sal-19', name: 'Calabacín pequeño en rodajas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-20', name: 'Zanahoria en bastones finos', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-21', name: 'Ramas de tomillo fresco', amount: 2, unit: 'ramas', category: 'frescos' },
      { id: 'ing-sal-22', name: 'Limón en rodajas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-23', name: 'Aceite de oliva virgen extra en crudo', amount: 15, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-24', name: 'Sal y pimienta blanca', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Salpimienta las pechugas de pavo y coloca sobre cada una rodajas de limón y ramitas de tomillo.',
      'Pon agua a hervir en el fondo de la vaporera o cazuela con cesta de vapor.',
      'Coloca en la cesta las rodajas de calabacín y zanahoria, y encima el pavo con sus hierbas.',
      'Tapa bien y cocina al vapor a fuego medio-alto durante 14 minutos.',
      'Verifica que el pavo esté bien cocido pero tierno; retira a los platos.',
      'Aliña las verduras y el pavo con un hilo fino de aceite de oliva virgen extra en crudo y sal en escamas.'
    ],
    stepTimes: [5, 3, 2, 14, 2, 2],
    tips: [
      'Cocinar el pavo al vapor conserva todas sus proteínas y humedad natural sin resecar la carne.',
      'Añadir rodajas de limón sobre la carne aromatiza el vapor y aporta frescura.'
    ],
    substitutions: [
      'Puedes usar pechuga de pollo de corral en lugar de pavo.',
      'Acompaña con brócoli, judías verdes o coliflor al vapor.'
    ]
  },
  {
    id: 'rec-sal-004',
    name: 'Crema ligera de calabacín y puerros sin nata',
    description: 'Sopa aterciopelada y sedosa elaborada únicamente con calabacines, puerros, patata y aceite de oliva virgen extra.',
    country: 'España',
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'sopas-cremas', 'vegetarianas', 'veganas', 'rapidas', 'economicas'],
    tags: ['calabacín', 'puerros', 'crema', 'sin nata', 'ligero', 'depurativo'],
    allergens: [],
    nutrition: {
      calories: 140,
      protein: 4,
      carbs: 18,
      fat: 6,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (300 ml).'
    },
    emoji: '🥣',
    color: '#84cc16',
    ingredients: [
      { id: 'ing-sal-25', name: 'Calabacines medianos con piel', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-26', name: 'Puerros grandes (parte blanca)', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-27', name: 'Patata pequeña pelada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-28', name: 'Caldo vegetal casero o agua', amount: 600, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-29', name: 'Aceite de oliva virgen extra', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-30', name: 'Sal y nuez moscada molida', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Lava bien los puerros y córtalos en rodajas finas; lava los calabacines y trocéalos con su piel verde para ganar fibra y color.',
      'En una olla calienta el aceite y rehoga los puerros a fuego suave durante 6 minutos sin dorar.',
      'Añade la patata chascada y los calabacines troceados; rehoga todo junto 4 minutos.',
      'Cubre con el caldo vegetal caliente justo al ras de las verduras; añade sal y una pizca de nuez moscada.',
      'Tapa y cuece a fuego medio durante 18 minutos hasta que la patata esté muy tierna.',
      'Tritura con la batidora a máxima potencia durante 2 minutos hasta conseguir una emulsión perfectamente lisa y cremosa.'
    ],
    stepTimes: [5, 6, 4, 2, 18, 2],
    tips: [
      'Dejar la piel del calabacín aporta antioxidantes y un atractivo color verde esmeralda a la crema.',
      'Triturar durante al menos 2 minutos emulsiona el aceite con el calabacín logrando una textura de crema sin necesidad de lácteos.'
    ],
    substitutions: [
      'Si no quieres usar patata, añade una manzana verde pelada para dar espesor y un toque fresco.',
      'Decora con semillas de calabaza o sésamo tostado por encima.'
    ]
  },
  {
    id: 'rec-sal-005',
    name: 'Ensalada de espinacas tiernas con fresas, nueces y queso feta',
    description: 'Combinación fresca y crujiente de hojas de espinaca baby, fresas dulces, queso feta desmenuzado y vinagreta balsámica de miel.',
    country: 'Mediterráneo',
    servings: 2,
    prepTime: 12,
    cookTime: 0,
    totalTime: 12,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'ensaladas', 'vegetarianas', 'rapidas'],
    tags: ['ensalada', 'espinacas', 'fresas', 'nueces', 'queso feta', 'antioxidantes'],
    allergens: ['Lácteos', 'Frutos secos'],
    nutrition: {
      calories: 260,
      protein: 9,
      carbs: 14,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (220 g).'
    },
    emoji: '🥗',
    color: '#059669',
    ingredients: [
      { id: 'ing-sal-31', name: 'Espinacas baby lavadas', amount: 150, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-32', name: 'Fresas maduras en cuartos', amount: 150, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-33', name: 'Queso feta griego desmenuzado', amount: 60, unit: 'g', category: 'lacteos' },
      { id: 'ing-sal-34', name: 'Nueces peladas troceadas', amount: 30, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-35', name: 'Vinagre balsámico de Módena', amount: 15, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-36', name: 'Aceite de oliva virgen extra', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-37', name: 'Miel pura o sirope de agave', amount: 1, unit: 'cucharadita', category: 'despensa' },
      { id: 'ing-sal-38', name: 'Sal en escamas', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En un bol pequeño bate el aceite de oliva, el vinagre balsámico, la miel y una pizca de sal hasta emulsionar la vinagreta.',
      'En una ensaladera o platos llanos dispón una cama abundante de hojas de espinaca baby.',
      'Distribuye las fresas cortadas en cuartos sobre las hojas de espinaca.',
      'Desmenuza el queso feta con las manos por encima de la ensalada.',
      'Tuesta las nueces ligeramente en una sartén seca 2 minutos y espárcelas sobre el plato.',
      'Riega con la vinagreta justo antes de servir para mantener las hojas crujientes.'
    ],
    stepTimes: [3, 2, 2, 2, 2, 1],
    tips: [
      'Tostar las nueces durante dos minutos despierta sus aceites naturales y multiplica su aroma crujiente.',
      'No aliñes con antelación: las hojas de espinaca baby se ablandan rápidamente con el ácido del vinagre.'
    ],
    substitutions: [
      'Puedes sustituir las fresas por arándanos, frambuesas o gajos de mandarina.',
      'Para versión vegana sustituye el queso feta por dados de tofu marinado con limón y orégano.'
    ]
  },
  {
    id: 'rec-sal-006',
    name: 'Tofu marinado al jengibre salteado con brócoli y sésamo',
    description: 'Dados de tofu dorado crujiente con salsa de soja, jengibre fresco y ramilletes de brócoli al dente.',
    country: 'Asia',
    servings: 2,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'almuerzos', 'vegetarianas', 'veganas', 'rapidas', 'internacional'],
    tags: ['tofu', 'brócoli', 'sésamo', 'vegano', 'salteado', 'proteína vegetal'],
    allergens: ['Soja', 'Sésamo'],
    nutrition: {
      calories: 310,
      protein: 22,
      carbs: 14,
      fat: 18,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (280 g).'
    },
    emoji: '🥦',
    color: '#15803d',
    ingredients: [
      { id: 'ing-sal-39', name: 'Tofu firme prensado y en cubos', amount: 300, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-40', name: 'Brócoli en ramilletes pequeños', amount: 250, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-41', name: 'Salsa de soja baja en sal o tamari', amount: 3, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-sal-42', name: 'Jengibre fresco rallado', amount: 1, unit: 'cucharada', category: 'frescos' },
      { id: 'ing-sal-43', name: 'Diente de ajo picado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-44', name: 'Aceite de sésamo tostado', amount: 15, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-45', name: 'Semillas de sésamo tostado', amount: 1, unit: 'cucharada', category: 'despensa' }
    ],
    steps: [
      'Prensa el tofu con papel de cocina durante 10 minutos para retirar el exceso de agua y córtalo en dados de 2 cm.',
      'Mezcla la salsa de soja con el jengibre rallado y el ajo picado; vierte la mitad sobre el tofu y marina 5 minutos.',
      'En un wok o sartén caliente con aceite saltea los dados de tofu durante 6 minutos hasta que queden dorados por todos los lados; retira.',
      'En el mismo wok añade los ramilletes de brócoli y 3 cucharadas de agua; saltea a fuego vivo 4 minutos hasta que evapore y quede tierno-crujiente.',
      'Reincorpora el tofu al wok con el resto de la marinada y saltea todo junto durante 2 minutos.',
      'Sirve inmediatamente espolvoreando con semillas de sésamo tostado.'
    ],
    stepTimes: [10, 5, 6, 4, 2, 1],
    tips: [
      'Prensar bien el tofu antes de cocinarlo es el paso fundamental para que absorba la marinada y quede crujiente.',
      'El brócoli debe quedar con un toque crujiente ("al dente") para mantener su color verde vivo y sus nutrientes.'
    ],
    substitutions: [
      'Puedes sustituir el tofu por tempeh o tiras de seitán.',
      'Añade zanahoria en tiritas o pimiento rojo para darle más variedad de colores.'
    ]
  },
  {
    id: 'rec-sal-007',
    name: 'Merluza en papillote con verduras en juliana y limón',
    description: 'Filetes de merluza cocinados en su propio vapor dentro de un paquete hermético con calabacín, zanahoria y hierbas.',
    country: 'Francia',
    servings: 2,
    prepTime: 12,
    cookTime: 15,
    totalTime: 27,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'pescados-mariscos', 'rapidas'],
    tags: ['merluza', 'papillote', 'sin grasa', 'pescado blanco', 'fácil'],
    allergens: ['Pescado'],
    nutrition: {
      calories: 220,
      protein: 29,
      carbs: 6,
      fat: 8,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (240 g).'
    },
    emoji: '🐟',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-sal-46', name: 'Lomos limpios de merluza fresca', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-sal-47', name: 'Zanahoria en juliana fina', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-48', name: 'Calabacín en juliana fina', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-49', name: 'Puerro en tiras finas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-50', name: 'Aceite de oliva virgen extra', amount: 15, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-51', name: 'Vino blanco', amount: 20, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-52', name: 'Rodajas de limón y tomillo fresco', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-53', name: 'Sal y pimienta', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Precalienta el horno a 200°C.',
      'Corta dos rectángulos grandes de papel de horno o aluminio.',
      'Coloca en el centro de cada papel una cama de verduras en juliana fina con una pizca de sal.',
      'Dispón encima de las verduras un lomo de merluza, salpimienta y añade una rodaja de limón y una ramita de tomillo.',
      'Riega con unas gotas de vino blanco y un hilo fino de aceite de oliva.',
      'Cierra herméticamente los paquetes doblando bien los bordes para que no escape el vapor.',
      'Hornea a 200°C durante 15 minutos hasta que los paquetes se inflen; abre con cuidado al servir.'
    ],
    stepTimes: [5, 2, 2, 2, 1, 3, 15],
    tips: [
      'Cerrar el paquete de forma hermética es la clave para que el pescado se cocine con sus propios jugos retenidos.',
      'Ten precaución al abrir el paquete en la mesa debido al vapor caliente concentrado.'
    ],
    substitutions: [
      'Puedes usar bacalao fresco, lenguado, dorada o lubina.',
      'Sustituye el vino blanco por caldo de verduras o unas gotas de zumo de naranja.'
    ]
  },
  {
    id: 'rec-sal-008',
    name: 'Berenjenas asadas rellenas de verduras y queso de cabra',
    description: 'Mitades de berenjena horneadas rellenas de su propia pulpa, sofrito de tomate, pimientos, champiñones y queso gratinado.',
    country: 'Mediterráneo',
    servings: 2,
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'vegetarianas', 'almuerzos'],
    tags: ['berenjenas rellenas', 'verduras', 'queso de cabra', 'horno', 'vegetariano'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 270,
      protein: 10,
      carbs: 22,
      fat: 16,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (300 g).'
    },
    emoji: '🍆',
    color: '#7c3aed',
    ingredients: [
      { id: 'ing-sal-54', name: 'Berenjenas medianas', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-55', name: 'Cebolla picada', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-56', name: 'Pimiento rojo picado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-57', name: 'Champiñones laminados', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-58', name: 'Tomate frito casero o triturado', amount: 100, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-59', name: 'Rulo de queso de cabra en rodajas', amount: 60, unit: 'g', category: 'lacteos' },
      { id: 'ing-sal-60', name: 'Aceite de oliva virgen extra', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-61', name: 'Orégano seco, sal y pimienta', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Corta las berenjenas por la mitad a lo largo, haz cortes cruzados en la pulpa con cuidado de no romper la piel, sala y riega con aceite.',
      'Hornea a 190°C durante 20 minutos hasta que la pulpa esté tierna; retira y saca la pulpa con una cuchara picándola.',
      'En una sartén sofríe la cebolla, el pimiento y los champiñones en aceite durante 8 minutos.',
      'Añade la pulpa de berenjena picada y el tomate triturado; cocina 5 minutos sazonando con orégano y sal.',
      'Rellena las barquitas de berenjena con la mezcla de verduras.',
      'Coloca una rodaja de queso de cabra sobre cada una y gratina a 210°C durante 6 minutos hasta dorar.'
    ],
    stepTimes: [5, 20, 8, 5, 4, 6],
    tips: [
      'Vaciar la berenjena dejando un borde de medio centímetro asegura que la barqueta mantenga su forma al rellenarla.',
      'Puedes añadir piñones tostados al relleno para dar un toque crocante.'
    ],
    substitutions: [
      'Para versión vegana sustituye el queso de cabra por levadura nutricional o queso vegetal.',
      'Añade lentejas cocidas al sofrito para aumentar el aporte proteico.'
    ]
  },
  {
    id: 'rec-sal-009',
    name: 'Carpaccio de calabacín fresco con parmesano y piñones',
    description: 'Láminas ultrafinas de calabacín crudo aderezadas con limón, aceite de oliva virgen extra, lascas de parmesano y piñones tostados.',
    country: 'Italia',
    servings: 2,
    prepTime: 12,
    cookTime: 2,
    totalTime: 14,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'ensaladas', 'vegetarianas', 'rapidas'],
    tags: ['carpaccio', 'calabacín', 'crudo', 'parmesano', 'refrescante', 'keto'],
    allergens: ['Lácteos', 'Frutos secos'],
    nutrition: {
      calories: 190,
      protein: 7,
      carbs: 5,
      fat: 16,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (180 g).'
    },
    emoji: '🥒',
    color: '#16a34a',
    ingredients: [
      { id: 'ing-sal-62', name: 'Calabacines verdes tiernos', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-63', name: 'Lascas de queso parmesano curado', amount: 40, unit: 'g', category: 'lacteos' },
      { id: 'ing-sal-64', name: 'Piñones ibéricos', amount: 20, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-65', name: 'Zumo de medio limón', amount: 1, unit: 'cucharada', category: 'frescos' },
      { id: 'ing-sal-66', name: 'Aceite de oliva virgen extra de calidad', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-67', name: 'Hojas de albahaca fresca picadas', amount: 6, unit: 'hojas', category: 'frescos' },
      { id: 'ing-sal-68', name: 'Sal en escamas y pimienta negra molida', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Lava bien los calabacines y córtalos en láminas finísimas y translúcidas utilizando una mandolina o pelador de patatas.',
      'Tuesta los piñones en una sartén seca a fuego medio durante 2 minutos hasta que tomen un ligero tono dorado; reserva.',
      'Dispón las láminas de calabacín ligeramente solapadas en un plato grande o bandeja plana.',
      'Bate el zumo de limón con el aceite de oliva virgen extra y una pizca de sal.',
      'Riega el calabacín con la vinagreta de limón.',
      'Reparte por encima las lascas de parmesano, los piñones tostados, hojas de albahaca y un toque de pimienta negra recién molida.'
    ],
    stepTimes: [5, 2, 3, 2, 1, 1],
    tips: [
      'El calabacín crudo en láminas finas tiene una textura crujiente y delicada deliciosa que absorbe el aliño al instante.',
      'Usa un aceite de oliva virgen extra frutado para realzar el plato.'
    ],
    substitutions: [
      'Puedes añadir láminas finas de champiñón crudo o aguacate.',
      'Sustituye los piñones por almendras laminadas tostadas o semillas de girasol.'
    ]
  },
  {
    id: 'rec-sal-010',
    name: 'Wraps de hojas de lechuga con salteado de pollo al jengibre',
    description: 'Hojas crujientes de lechuga romana rellenas de picadillo de pechuga salteada con jengibre, cebolleta y salsa de soja ligera.',
    country: 'Asia',
    servings: 2,
    prepTime: 12,
    cookTime: 10,
    totalTime: 22,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'carnes-pollo', 'rapidas', 'internacional'],
    tags: ['wraps lechuga', 'pollo', 'bajo en carbohidratos', 'sin gluten', 'ligero'],
    allergens: ['Soja'],
    nutrition: {
      calories: 270,
      protein: 32,
      carbs: 7,
      fat: 12,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (260 g).'
    },
    emoji: '🥬',
    color: '#22c55e',
    ingredients: [
      { id: 'ing-sal-69', name: 'Hojas grandes enteras de lechuga cogollo o romana', amount: 8, unit: 'hojas', category: 'frescos' },
      { id: 'ing-sal-70', name: 'Pechuga de pollo picada a cuchillo en trocitos', amount: 350, unit: 'g', category: 'carnes' },
      { id: 'ing-sal-71', name: 'Cebolletas picadas', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-72', name: 'Jengibre fresco rallado', amount: 1, unit: 'cucharadita', category: 'frescos' },
      { id: 'ing-sal-73', name: 'Diente de ajo picado', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-74', name: 'Salsa de soja baja en sodio o tamari', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-sal-75', name: 'Aceite de sésamo o vegetal', amount: 15, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-76', name: 'Zumo de lima fresco', amount: 1, unit: 'cucharada', category: 'frescos' }
    ],
    steps: [
      'Lava las hojas de lechuga con agua fría, sécalas con cuidado para que no se rompan y resérvalas en la nevera para que queden crujientes.',
      'En una sartén calienta el aceite y dora el pollo picado con el ajo y jengibre a fuego vivo durante 6 minutos.',
      'Añade la salsa de soja y el zumo de lima; cocina 2 minutos más hasta que se reduzca el jugo.',
      'Apaga el fuego e incorpora la cebolleta fresca picada mezclando bien.',
      'Sirve el relleno de pollo templado en un bol rodeado con las hojas de lechuga fría.',
      'Cada comensal rellena su propia hoja de lechuga doblando como un taco y comiendo al instante con las manos.'
    ],
    stepTimes: [4, 6, 2, 1, 2, 2],
    tips: [
      'Mantener las hojas de lechuga en agua con hielo antes de secarlas las vuelve increíblemente crujientes.',
      'Puedes añadir cacahuetes picados por encima para mayor textura.'
    ],
    substitutions: [
      'Sustituye el pollo por carne de pavo picada o champiñones y tofu picados para versión vegetariana.',
      'Usa tamari sin trigo para asegurar una preparación 100% libre de gluten.'
    ]
  },
  {
    id: 'rec-sal-011',
    name: 'Lubina a la plancha con puré sedoso de coliflor',
    description: 'Filete de lubina dorada sobre una cama de puré ligero de coliflor cocida con nuez moscada y aceite de oliva virgen.',
    country: 'Mediterráneo',
    servings: 2,
    prepTime: 12,
    cookTime: 18,
    totalTime: 30,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'pescados-mariscos', 'rapidas'],
    tags: ['lubina', 'coliflor', 'puré bajo en carbohidratos', 'pescado', 'elegante'],
    allergens: ['Pescado'],
    nutrition: {
      calories: 310,
      protein: 34,
      carbs: 9,
      fat: 15,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (300 g).'
    },
    emoji: '🐟',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-sal-77', name: 'Filetes limpios de lubina con piel', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-sal-78', name: 'Coliflor limpia en ramilletes', amount: 400, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-79', name: 'Aceite de oliva virgen extra', amount: 30, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-80', name: 'Nuez moscada y pimienta blanca', amount: 1, unit: 'pizca', category: 'especias' },
      { id: 'ing-sal-81', name: 'Cebollino fresco picado', amount: 1, unit: 'cucharada', category: 'frescos' },
      { id: 'ing-sal-82', name: 'Sal en escamas', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Cuece los ramilletes de coliflor al vapor o en agua con sal durante 12 minutos hasta que estén tiernos.',
      'Escurre bien la coliflor y tritura con la batidora junto con 2 cucharadas de aceite de oliva, sal y nuez moscada hasta lograr una textura similar a puré de patata aterciopelado.',
      'Seca los filetes de lubina y haz pequeños cortes en la piel para que no encoja al cocinar.',
      'En una sartén antiadherente con un hilo de aceite dora los filetes con la piel hacia abajo durante 4 minutos a fuego medio presionando suavemente.',
      'Dales la vuelta y cocina 2 minutos más por el lado de la carne.',
      'Sirve una base de puré caliente de coliflor, coloca el filete de lubina con la piel hacia arriba y espolvorea cebollino fresco.'
    ],
    stepTimes: [12, 3, 2, 4, 2, 2],
    tips: [
      'Escurrir la coliflor completamente antes de triturar evita que el puré quede aguado.',
      'La lubina cocinada con la piel crujiente aporta un contraste fabuloso con la suavidad del puré.'
    ],
    substitutions: [
      'Puedes usar dorada, corvina o merluza.',
      'Añade un diente de ajo asado a la coliflor antes de triturar para un sabor más profundo.'
    ]
  },
  {
    id: 'rec-sal-012',
    name: 'Sopa fría de pepino y yogur griego con menta fresca',
    description: 'Sopa depurativa y refrescante de pepino triturado con yogur griego cremoso, ajo suave, menta y limón.',
    country: 'Grecia',
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'sopas-cremas', 'vegetarianas', 'rapidas'],
    tags: ['sopa fría', 'pepino', 'yogur griego', 'menta', 'verano', 'depurativo'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 160,
      protein: 8,
      carbs: 9,
      fat: 10,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (250 ml).'
    },
    emoji: '🥣',
    color: '#10b981',
    ingredients: [
      { id: 'ing-sal-83', name: 'Pepinos medianos pelados y sin semillas', amount: 2, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-84', name: 'Yogur griego natural sin azúcar', amount: 250, unit: 'g', category: 'lacteos' },
      { id: 'ing-sal-85', name: 'Diente de ajo pequeño sin germen', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-86', name: 'Hojas de menta o hierbabuena fresca', amount: 8, unit: 'hojas', category: 'frescos' },
      { id: 'ing-sal-87', name: 'Aceite de oliva virgen extra', amount: 20, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-88', name: 'Zumo de medio limón', amount: 1, unit: 'cucharada', category: 'frescos' },
      { id: 'ing-sal-89', name: 'Sal marina y pimienta blanca', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'Pela los pepinos, córtalos a lo largo y retira las semillas centrales con una cucharilla; trocéalos.',
      'Pon en el vaso de la batidora los pepinos, el yogur griego, el medio ajo, las hojas de menta fresca, el zumo de limón y una pizca de sal.',
      'Tritura a máxima potencia durante 2 minutos hasta obtener una crema muy fina y homogénea.',
      'Añade el aceite de oliva en hilo y bate 30 segundos más para emulsionar.',
      'Refrigera en la nevera durante al menos 30 minutos antes de servir para que esté bien fría.',
      'Sirve en boles o vasos decorando con hojitas de menta, rodajitas finas de pepino y unas gotas de aceite de oliva.'
    ],
    stepTimes: [3, 2, 1, 30, 2],
    tips: [
      'Retirar las semillas del pepino evita que la sopa repita y garantiza una digestión ligera.',
      'Servir muy fría acentúa su poder hidratante y refrescante.'
    ],
    substitutions: [
      'Usa yogur vegetal de coco o soja sin azúcar para una versión 100% vegana.',
      'Puedes añadir medio aguacate para darle aún más cremosidad natural.'
    ]
  },
  {
    id: 'rec-sal-013',
    name: 'Wok de verduras crujientes con anacardos y salsa tamari',
    description: 'Pimientos, calabacín, zanahoria y tirabeques salteados a fuego vivo con salsa ligera y anacardos tostados.',
    country: 'Internacional',
    servings: 2,
    prepTime: 12,
    cookTime: 8,
    totalTime: 20,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'almuerzos', 'vegetarianas', 'veganas', 'rapidas'],
    tags: ['wok', 'verduras', 'anacardos', 'vegano', 'salteado express'],
    allergens: ['Frutos secos', 'Soja'],
    nutrition: {
      calories: 240,
      protein: 7,
      carbs: 18,
      fat: 16,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (240 g).'
    },
    emoji: '🥕',
    color: '#ea580c',
    ingredients: [
      { id: 'ing-sal-90', name: 'Zanahoria en juliana', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-91', name: 'Pimiento rojo y verde en tiras', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-92', name: 'Calabacín en medias lunas', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-93', name: 'Champiñones laminados', amount: 100, unit: 'g', category: 'frescos' },
      { id: 'ing-sal-94', name: 'Anacardos tostados al natural', amount: 40, unit: 'g', category: 'despensa' },
      { id: 'ing-sal-95', name: 'Salsa tamari o soja sin gluten', amount: 2, unit: 'cucharadas', category: 'despensa' },
      { id: 'ing-sal-96', name: 'Aceite de oliva o sésamo', amount: 15, unit: 'ml', category: 'despensa' }
    ],
    steps: [
      'Corta todas las verduras en tamaños uniformes para asegurar una cocción pareja.',
      'Calienta el wok o sartén grande a fuego muy vivo con el aceite.',
      'Añade primero la zanahoria y los pimientos; saltea moviendo constantemente durante 4 minutos.',
      'Agrega el calabacín y los champiñones; saltea 3 minutos más manteniendo el fuego alto.',
      'Vierte la salsa tamari y los anacardos, remueve vigorosamente durante 1 minuto para glasear las verduras.',
      'Sirve inmediatamente mientras las verduras conserven su textura crujiente.'
    ],
    stepTimes: [4, 1, 4, 3, 1, 1],
    tips: [
      'Mantener la sartén bien caliente evita que las verduras suelten agua y se cuezan en vez de saltearse.',
      'Tener todos los ingredientes cortados antes de encender el fuego es esencial para el salteado en wok.'
    ],
    substitutions: [
      'Puedes añadir tiras de pollo, gambas o dados de tofu.',
      'Sustituye los anacardos por almendras o cacahuetes tostados.'
    ]
  },
  {
    id: 'rec-sal-014',
    name: 'Pescado blanco al ajillo con gulas y calabacín salteado',
    description: 'Filetes tiernos de merluza o dorada dorados con láminas de ajo crujiente, gulas al ajillo y cintas de calabacín.',
    country: 'España',
    servings: 2,
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'pescados-mariscos', 'rapidas'],
    tags: ['pescado', 'al ajillo', 'gulas', 'calabacín', 'rápido'],
    allergens: ['Pescado'],
    nutrition: {
      calories: 280,
      protein: 30,
      carbs: 6,
      fat: 15,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (250 g).'
    },
    emoji: '🐟',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-sal-97', name: 'Filetes de pescado blanco sin espinas', amount: 2, unit: 'unidades', category: 'carnes' },
      { id: 'ing-sal-98', name: 'Gulas o sucedáneo de angulas', amount: 120, unit: 'g', category: 'carnes' },
      { id: 'ing-sal-99', name: 'Dientes de ajo laminados', amount: 3, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-100', name: 'Guindilla cayena seca (opcional)', amount: 1, unit: 'unidad', category: 'especias' },
      { id: 'ing-sal-101', name: 'Calabacín en cintas o espaguetis', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-102', name: 'Aceite de oliva virgen extra', amount: 25, unit: 'ml', category: 'despensa' },
      { id: 'ing-sal-103', name: 'Sal y perejil picado', amount: 1, unit: 'pizca', category: 'especias' }
    ],
    steps: [
      'En una sartén calienta el aceite con los ajos laminados y la cayena a fuego medio durante 3 minutos hasta que los ajos comiencen a dorarse; retira la mitad de los ajos crujientes y reserva.',
      'Sazona el pescado y colócalo en la misma sartén dorándolo 3 minutos por cada lado; retira a un plato.',
      'En el mismo aceite saltea las cintas de calabacín durante 3 minutos.',
      'Añade las gulas y el perejil picado, salteando todo junto durante 2 minutos.',
      'Sirve las gulas y el calabacín como base y coloca el pescado encima coronado con los ajos crujientes reservados.'
    ],
    stepTimes: [3, 6, 3, 2, 2],
    tips: [
      'Retirar los ajos cuando estén dorados evita que se quemen y amarguen el aceite.',
      'Las cintas de calabacín hechas con espiralizador son un excelente sustituto bajo en calorías de la pasta tradicional.'
    ],
    substitutions: [
      'Puedes sustituir las gulas por gambas peladas.',
      'Cualquier pescado blanco de temporada (lenguado, bacalao fresco, tilapia) funciona a la perfección.'
    ]
  },
  {
    id: 'rec-sal-015',
    name: 'Ceviche ligero de pescado blanco y aguacate con lima',
    description: 'Pescado blanco marinado en zumo fresco de lima con cebolla morada crujiente, cilantro fresco y cubos de aguacate cremoso.',
    country: 'Perú',
    servings: 2,
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    difficulty: 'Fácil',
    categories: ['saludables', 'cenas', 'almuerzos', 'pescados-mariscos', 'rapidas', 'internacional'],
    tags: ['ceviche', 'pescado', 'lima', 'aguacate', 'sin cocción', 'proteína'],
    allergens: ['Pescado'],
    nutrition: {
      calories: 220,
      protein: 26,
      carbs: 7,
      fat: 10,
      method: 'Cálculo estimado a partir de tablas nutricionales estándar por porción promedio (220 g).'
    },
    emoji: '🍋',
    color: '#0284c7',
    ingredients: [
      { id: 'ing-sal-104', name: 'Filete de pescado blanco muy fresco (corvina o merluza)', amount: 300, unit: 'g', category: 'carnes' },
      { id: 'ing-sal-105', name: 'Zumo recién exprimido de limas', amount: 5, unit: 'unidades', category: 'frescos' },
      { id: 'ing-sal-106', name: 'Cebolla morada en plumas finas', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-107', name: 'Aguacate en cubos', amount: 1, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-108', name: 'Cilantro fresco picado', amount: 2, unit: 'cucharadas', category: 'frescos' },
      { id: 'ing-sal-109', name: 'Ají limo o chile fresco picado fino (sin semillas)', amount: 0.5, unit: 'unidad', category: 'frescos' },
      { id: 'ing-sal-110', name: 'Sal marina y pimienta blanca', amount: 1, unit: 'cucharadita', category: 'especias' }
    ],
    steps: [
      'Corta el pescado blanco previamente congelado (por seguridad) en dados de 1.5 cm y ponlos en un bol frío.',
      'Sazona con sal marina y mezcla con el chile picado y el cilantro fresco.',
      'Exprime las limas directamente sobre el pescado sin apretarlas en exceso para no amargar con la cáscara.',
      'Mezcla suavemente y deja reposar solo 3 a 5 minutos para que el pescado tome color blanco perlado exterior manteniéndose tierno por dentro.',
      'Añade la cebolla morada lavada en agua fría y los cubos de aguacate suavemente.',
      'Sirve inmediatamente bien frío en platos hondos con un poco del jugo ("leche de tigre").'
    ],
    stepTimes: [4, 2, 2, 5, 2],
    tips: [
      'Congelar el pescado a -20°C durante al menos 48 horas garantiza seguridad alimentaria frente al anisakis.',
      'Lavar la cebolla morada en agua muy fría le quita el picor fuerte y la deja extra crujiente.'
    ],
    substitutions: [
      'Puedes usar langostinos cocidos o palmitos para una opción vegetariana.',
      'Acompaña con rodajas de batata o maíz dulce desgranado.'
    ]
  }
];
