# Batch 9: Ensaladas, Bebidas & Postres (48 recipes: 16 Ensaladas + 16 Bebidas + 16 Postres)

def load_batch9(add):
    # ==========================================
    # --- ENSALADAS (16 recipes) ---
    # ==========================================
    # 221
    add(
        "Ensalada César tradicional con pollo crujiente y picatostes",
        "Corazones de lechuga romana crujiente con pechuga de pollo dorada, láminas de parmesano, picatostes al ajo y aderezo César con anchoas.",
        "México", 4, 15, 10, "Fácil",
        ["ensaladas", "almuerzos", "cenas", "carnes-pollo", "rapidas", "internacional"],
        ["césar", "pollo", "parmesano", "aderezo césar", "lechuga romana"], ["Gluten", "Lácteos", "Huevo", "Pescado"],
        360, 28, 12, 22, "🥗", "#84cc16",
        [("Lechuga romana fresca picada", 2, "cogollos", "frescos"), ("Pechuga de pollo en tiras", 300, "g", "carnes"), ("Pan duro en cubos para picatostes", 80, "g", "despensa"), ("Queso parmesano en lascas finas", 40, "g", "lacteos"), ("Yema de huevo", 1, "unidad", "frescos"), ("Filetes de anchoa en aceite", 3, "unidades", "pescados"), ("Diente de ajo picado", 1, "diente", "frescos"), ("Mostaza Dijon", 1, "cucharadita", "despensa"), ("Zumo de limón", 15, "ml", "frescos"), ("Aceite de oliva virgen extra", 50, "ml", "despensa")],
        ["Dora los cubos de pan con un hilo de aceite y ajo picado en sartén hasta que queden crujientes (5 min).", "Sazona y dora las tiras de pechuga a la plancha 6 min hasta que queden jugosas.", "Prepara el aderezo triturando la yema, anchoas, ajo, mostaza, zumo de limón y emulsionando con aceite de oliva lentamente.", "En una ensaladera grande coloca la lechuga romana lavada y bien seca.", "Añade el pollo templado y los picatostes dorados.", "Riega con el aderezo César y corona con lascas generosas de parmesano."],
        [5, 6, 3, 2],
        ["Seca muy bien la lechuga para que el aderezo se adhiera perfectamente a las hojas sin aguarse.", "El aderezo César original nació en Tijuana, México, y su toque característico proviene de las anchoas y el limón."],
        ["Sustituye el pollo por gambas a la plancha.", "Usa picatostes sin gluten."]
    )
    # 222
    add(
        "Ensalada griega Horiatiki con queso feta y aceitunas Kalamata",
        "Tomates maduros en gajos, pepino crujiente, cebolla morada fina, pimiento verde, aceitunas kalamata y bloque de auténtico queso feta con orégano silvestre.",
        "Grecia", 4, 15, 0, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "cenas", "almuerzos", "rapidas", "internacional"],
        ["griega", "feta", "kalamata", "mediterránea", "sin cocción"], ["Lácteos"],
        240, 7, 11, 18, "🥗", "#0284c7",
        [("Tomates maduros aromáticos", 4, "unidades", "frescos"), ("Pepino mediano en rodajas", 1, "unidad", "frescos"), ("Cebolla morada en plumas finas", 1, "unidad", "frescos"), ("Pimiento verde en aros", 1, "unidad", "frescos"), ("Queso feta griego en bloque", 200, "g", "lacteos"), ("Aceitunas Kalamata con hueso", 80, "g", "despensa"), ("Aceite de oliva virgen extra de calidad", 45, "ml", "despensa"), ("Vinagre de vino tinto", 15, "ml", "despensa"), ("Orégano seco silvestre", 1, "cucharada", "especias"), ("Sal marina", 1, "pizca", "especias")],
        ["Corta los tomates en gajos irregulares y colócalos en una ensaladera honda.", "Pela el pepino a rayas alternas, córtalo en rodajas gruesas e incorpóralo.", "Añade la cebolla morada en plumas y los aros de pimiento verde.", "Agrega las aceitunas Kalamata enteras.", "Sazona con sal, vinagre de vino y abundante aceite de oliva virgen virgen extra; mezcla suavemente.", "Coloca encima el bloque entero de queso feta, rocía con más aceite de oliva y espolvorea generosamente con orégano seco."],
        [10, 2],
        ["La ensalada griega tradicional no lleva lechuga: su magia reside en la frescura del tomate y el pepino con queso de calidad.", "El bloque de feta se coloca entero para que cada comensal lo trocee con su tenedor."],
        ["Usa queso feta vegetal para versión vegana.", "Añade alcaparras escurridas."]
    )
    # 223
    add(
        "Ensalada Caprese italiana con mozzarella de búfala y pesto genovés",
        "Rodajas de tomate raf dulce intercaladas con mozzarella fresca de búfala, hojas de albahaca fresca y gotas de reducción balsámica de Módena.",
        "Italia", 2, 10, 0, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "cenas", "rapidas", "internacional"],
        ["caprese", "mozzarella", "albahaca", "balsámico", "italia"], ["Lácteos"],
        280, 14, 8, 22, "🍅", "#dc2626",
        [("Tomates maduros grandes o raf", 3, "unidades", "frescos"), ("Mozzarella de búfala fresca", 250, "g", "lacteos"), ("Hojas de albahaca fresca brillante", 1, "manojo", "frescos"), ("Aceite de oliva virgen extra", 30, "ml", "despensa"), ("Crema o reducción de vinagre balsámico", 15, "ml", "despensa"), ("Sal en escamas", 1, "pizca", "especias"), ("Pimienta negra recién molida", 1, "pizca", "especias")],
        ["Corta los tomates en rodajas de 1 cm de grosor.", "Escurre la bola de mozzarella de búfala y córtala en rodajas del mismo grosor.", "En un plato llano coloca alternando una rodaja de tomate, una de mozzarella y una hoja grande de albahaca fresca.", "Espolvorea con sal en escamas y pimienta negra recién molida.", "Riega generosamente con aceite de oliva virgen extra en hilo fino.", "Termina con unas gotas decorativas de reducción balsámica."],
        [8, 2],
        ["Saca la mozzarella del frigorífico 30 minutos antes de servir para apreciar todo su sabor cremoso láctico.", "Usa tomates carnosos y a temperatura ambiente."],
        ["Usa tomates cherry de colores variados y bolitas de mozzarella bocconcini.", "Sustituye por queso vegano estilo mozzarella."]
    )
    # 224
    add(
        "Ensalada de espinacas tiernas con queso de cabra caramelizado y nueces",
        "Espinacas baby con medallones de queso de cabra gratinados con miel, nueces tostadas crujientes y vinagreta de mostaza antigua.",
        "Francia", 2, 12, 4, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "cenas", "rapidas", "internacional"],
        ["queso cabra", "espinacas baby", "nueces", "miel", "gourmet"], ["Lácteos", "Frutos secos"],
        310, 11, 14, 25, "🥗", "#16a34a",
        [("Espinacas tiernas baby limpias", 150, "g", "frescos"), ("Rulo de queso de cabra en medallones", 120, "g", "lacteos"), ("Nueces peladas troceadas", 40, "g", "despensa"), ("Miel pura", 15, "g", "despensa"), ("Aceite de oliva virgen extra", 30, "ml", "despensa"), ("Vinagre de sidra o manzana", 10, "ml", "despensa"), ("Mostaza a la antigua en grano", 1, "cucharadita", "despensa"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Tuesta las nueces ligeramente en una sartén seca 3 min hasta que desprendan aroma.", "Coloca los medallones de rulo de cabra en una bandeja de horno, pincela la superficie con miel y gratina a 200°C durante 4 min hasta que los bordes doren.", "Prepara la vinagreta mezclando en un frasco el aceite, vinagre, mostaza antigua, sal y pimienta; agita bien.", "En platos individuales coloca la base de espinacas baby bien frescas.", "Dispón en el centro los medallones de queso de cabra caramelizado tibios.", "Reparte las nueces tostadas y riega con la vinagreta."],
        [3, 4, 3, 2],
        ["El contraste entre las espinacas frescas crujientes y el queso templado fundente eleva el plato a nivel de restaurante.", "Vigila el horno para que el queso no se derrita completamente."],
        ["Añade granos de granada fresca para un toque crujiente dulce.", "Sustituye nueces por piñones o almendras tostadas."]
    )
    # 225
    add(
        "Ensaladilla rusa casera tradicional con atún y huevo duro",
        "Patatas y zanahorias tiernas en cubitos con guisantes, atún en conserva de calidad, aceitunas y mayonesa cremosa casera emulsionada.",
        "España", 4, 25, 20, "Fácil",
        ["ensaladas", "aperitivos-fiestas", "almuerzos", "pescados-mariscos", "familiares", "economicas"],
        ["ensaladilla rusa", "tapas", "atún", "mayonesa", "clásico español"], ["Pescado", "Huevo"],
        340, 14, 26, 20, "🥔", "#f59e0b",
        [("Patatas medianas para cocer", 3, "unidades", "frescos"), ("Zanahorias medianas", 2, "unidades", "frescos"), ("Huevos camperos", 3, "unidades", "frescos"), ("Guisantes finos cocidos", 80, "g", "despensa"), ("Atún en aceite de oliva escurrido", 160, "g", "despensa"), ("Aceitunas verdes rellenas picadas", 60, "g", "despensa"), ("Mayonesa suave casera", 150, "g", "despensa"), ("Sal fina", 1, "cucharadita", "especias")],
        ["Cuece las patatas enteras con piel y las zanahorias peladas en abundante agua con sal durante 20 min hasta que estén tiernas.", "En otro cazo cuece los huevos 10 min; enfría y pela.", "Pela las patatas templadas y córtalas en daditos uniformes junto con las zanahorias.", "Pica dos huevos cocidos y reserva uno para decorar.", "En un bol grande mezcla la patata, zanahoria, huevos picados, guisantes, atún desmigado y aceitunas.", "Sazona al gusto y mezcla con la mayonesa con movimientos suaves.", "Refrigera al menos 2 horas. Decora por encima con el huevo duro rallado y aceitunas enteras."],
        [20, 10, 10, 120],
        ["Cocer las patatas con su piel evita que absorban agua en exceso y mantiene la textura perfecta.", "La ensaladilla gana muchísimo sabor al reposar fría varias horas."],
        ["Añade gambas cocidas peladas o pimientos del piquillo en tiras.", "Usa mayonesa vegana sin huevo."]
    )
    # 226
    add(
        "Tabbouleh libanés tradicional con perejil fresco, tomate y trigo burgol",
        "Ensalada fresca de Oriente Medio con abundante perejil picado muy fino, hierbabuena fresca, trigo burgol hidratado, tomate y aliño de limón con aceite de oliva.",
        "Líbano", 4, 20, 0, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "veganas", "cenas", "internacional", "economicas"],
        ["tabbouleh", "perejil", "burgol", "libanés", "refrescante"], ["Gluten"],
        180, 5, 24, 8, "🌿", "#15803d",
        [("Perejil fresco de hoja plana abundante", 3, "manojos", "frescos"), ("Hierbabuena o menta fresca picada", 1, "manojo", "frescos"), ("Trigo burgol fino crudo", 50, "g", "despensa"), ("Tomates rojos firmes en cubitos diminutos", 3, "unidades", "frescos"), ("Cebolletas frescas picadas", 2, "unidades", "frescos"), ("Zumo de limón recién exprimido", 45, "ml", "frescos"), ("Aceite de oliva virgen extra", 45, "ml", "despensa"), ("Sal y pimienta de Jamaica", 1, "pizca", "especias")],
        ["Pon el trigo burgol en un cuenco con zumo de limón y 3 cucharadas de agua tibia para que se hidrate durante 15 min.", "Lava muy bien el perejil y la hierbabuena y sécalos minuciosamente con papel absorbente.", "Pica el perejil y la menta finísimos con un cuchillo bien afilado sin machacarlos.", "Pica los tomates en dados diminutos eliminando el exceso de jugo.", "Pica finamente las cebolletas con parte de su tallo verde.", "En una fuente mezcla el perejil, menta, cebolleta, tomate y el burgol hinchado.", "Aliña con aceite de oliva virgen extra, sal y una pizca de pimienta; mezcla y sirve fresco con hojas de lechuga romana."],
        [15, 12, 3],
        ["El auténtico tabbouleh libanés es una ensalada de perejil con un toque de burgol, no al revés.", "El cuchillo debe estar muy afilado para cortar las hierbas limpiamente sin magullarlas."],
        ["Usa quinoa cocida en lugar de burgol para una versión 100% sin gluten.", "Añade pepino en dados muy finos."]
    )
    # 227
    add(
        "Ensalada de quinoa con aguacate, maíz dulce, alubias negras y cilantro",
        "Grano de quinoa esponjoso con dados cremosos de aguacate, frijoles negros cocidos, maíz dulce crujiente, cilantro fresco y vinagreta cítrica de lima.",
        "México", 4, 15, 15, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "veganas", "almuerzos", "cenas", "internacional"],
        ["quinoa", "aguacate", "frijoles negros", "mexicana", "sin gluten"], [],
        290, 9, 38, 12, "🥑", "#10b981",
        [("Quinoa lavada", 180, "g", "despensa"), ("Frijoles negros cocidos escurridos", 150, "g", "despensa"), ("Aguacate maduro en dados", 1, "unidad", "frescos"), ("Maíz dulce en grano", 100, "g", "despensa"), ("Pimiento rojo en daditos", 1, "unidad", "frescos"), ("Cilantro fresco picado", 1, "taza", "frescos"), ("Cebolla morada finamente picada", 1, "unidad", "frescos"), ("Zumo de lima fresca", 30, "ml", "frescos"), ("Aceite de oliva virgen extra", 35, "ml", "despensa"), ("Comino molido y sal", 1, "pizca", "especias")],
        ["Cuece la quinoa lavada en 360 ml de agua con sal durante 12-14 min hasta que absorba el líquido; deja enfriar esponjando con un tenedor.", "En un bol espacioso combina la quinoa fría, los frijoles negros, el maíz dulce y el pimiento rojo.", "Añade la cebolla morada picada y abundante cilantro fresco.", "Prepara el aliño batiendo el zumo de lima con aceite de oliva, comino molido y sal.", "Vierte el aliño sobre la ensalada y remueve para integrar sabores.", "Incorpora suavemente los cubos de aguacate al final para que no se deshagan."],
        [14, 5, 2],
        ["Lavar la quinoa bajo el grifo en colador fino retira la saponina natural amarga.", "Es una ensalada completísima con proteína vegetal de alto valor biológico perfecta para llevar en tupper."],
        ["Añade jalapeño fresco en rodajitas para un toque picante.", "Añade dados de pechuga de pollo asada."]
    )
    # 228
    add(
        "Ensalada templada de lentejas pardinas con queso feta, tomate cherry y albahaca",
        "Lentejas pardinas tiernas con tomates cherry asados al horno, queso feta en dados, espinacas y vinagreta templada de mostaza y miel.",
        "Francia", 4, 15, 20, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "almuerzos", "cenas", "economicas"],
        ["lentejas", "feta", "tomates asados", "templada", "legumbres"], ["Lácteos"],
        270, 14, 32, 10, "🥗", "#78716c",
        [("Lentejas pardinas cocidas", 400, "g", "despensa"), ("Tomates cherry en mitades", 200, "g", "frescos"), ("Queso feta en dados", 100, "g", "lacteos"), ("Hojas de espinaca tierna", 80, "g", "frescos"), ("Aceite de oliva virgen extra", 35, "ml", "despensa"), ("Vinagre balsámico", 15, "ml", "despensa"), ("Diente de ajo picado", 1, "diente", "frescos"), ("Albahaca fresca picada", 1, "puñado", "frescos"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Coloca los tomates cherry en una bandeja con un hilo de aceite, ajo picado y sal; asa a 190°C durante 15 min hasta que se arruguen y concentren su dulzor.", "Templa las lentejas cocidas en un cazo con un hilo de aceite.", "En una ensaladera coloca las espinacas frescas.", "Añade las lentejas tibias sobre las espinacas para que se ablanden levemente con el calor.", "Incorpora los tomates cherry asados calientes y su jugo caramelizado.", "Agrega el queso feta desmenuzado y la albahaca fresca.", "Aliña con aceite de oliva, vinagre balsámico y pimienta recién molida."],
        [15, 4, 3],
        ["El calor de las lentejas y los tomates templados hace que el queso feta empiece a fundirse ligeramente aportando untuosidad.", "Un plato de legumbres ligero, rico en hierro y fibra."],
        ["Usa garbanzos cocidos en lugar de lentejas.", "Sustituye feta por tofu marinado a la plancha para versión vegana."]
    )
    # 229
    add(
        "Ensalada de garbanzos crujientes mediterránea con pepino y menta",
        "Garbanzos cocidos especiados con comino y pimentón salteados, mezclados con pepino, pimiento rojo, cebolla y aderezo cremoso de yogur griego.",
        "Mediterráneo", 4, 12, 10, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "almuerzos", "cenas", "rapidas", "economicas"],
        ["garbanzos", "pepino", "salsa yogur", "mediterránea", "económica"], ["Lácteos"],
        250, 11, 30, 9, "🥗", "#eab308",
        [("Garbanzos cocidos escurridos", 400, "g", "despensa"), ("Pepino mediano en cubos", 1, "unidad", "frescos"), ("Pimiento rojo en cuadritos", 1, "unidad", "frescos"), ("Cebolleta picada", 1, "unidad", "frescos"), ("Yogur griego natural sin azúcar", 125, "g", "lacteos"), ("Zumo de limón", 20, "ml", "frescos"), ("Aceite de oliva virgen extra", 25, "ml", "despensa"), ("Comino molido y pimentón dulce", 1, "cucharadita", "especias"), ("Hojas de menta fresca picadas", 1, "puñado", "frescos"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Saltea los garbanzos en sartén con una cucharada de aceite, comino y pimentón durante 8 min a fuego medio hasta que adquieran tono dorado; retira y entibia.", "En un cuenco bate el yogur griego con zumo de limón, aceite de oliva, sal y menta picada.", "En una fuente mezcla el pepino en cubitos, pimiento rojo y cebolleta.", "Añade los garbanzos templados especiados.", "Vierte la salsa de yogur cremosa por encima y remueve suavemente.", "Sirve con unas hojas enteras de menta para aromatizar."],
        [8, 5, 2],
        ["Saltear brevemente los garbanzos con especias potencia su sabor tostado y textura crujiente exterior.", "La salsa de yogur aporta frescura y ligereza."],
        ["Usa yogur vegetal de soja para convertirla en vegana.", "Añade rabanitos laminados finos."]
    )
    # 230
    add(
        "Ensalada de pasta tricolor con pesto, mozzarella, tomate seco y rúcula",
        "Espirales de pasta al dente mezcladas con perlas de mozzarella fresca, tomates secos en aceite aromáticos, rúcula silvestre picante y salsa pesto casera.",
        "Italia", 4, 12, 10, "Fácil",
        ["ensaladas", "arroces-pastas", "vegetarianas", "almuerzos", "rapidas", "internacional"],
        ["pasta fría", "pesto", "mozzarella", "tomates secos", "veraniega"], ["Gluten", "Lácteos", "Frutos secos"],
        380, 13, 46, 16, "🍝", "#16a34a",
        [("Pasta espirales o fusilli", 280, "g", "despensa"), ("Bolitas de mozzarella fresca mini", 150, "g", "lacteos"), ("Tomates secos hidratados en aceite picados", 60, "g", "despensa"), ("Hojas de rúcula fresca", 60, "g", "frescos"), ("Salsa pesto genovés de albahaca", 60, "g", "despensa"), ("Piñones tostados", 25, "g", "despensa"), ("Aceite de oliva virgen extra", 20, "ml", "despensa"), ("Sal para la pasta", 1, "cucharada", "especias")],
        ["Cuece la pasta en abundante agua hirviendo con sal durante 9 min al dente.", "Escurre la pasta y enfríala bajo el chorro de agua fría para frenar la cocción; escurre minuciosamente.", "Coloca la pasta en un bol y mezcla de inmediato con una cucharada de aceite para que no se pegue.", "Añade la salsa pesto genovés y mezcla hasta impregnar cada espiral.", "Incorpora las bolitas de mozzarella cortadas a la mitad y los tomates secos picados.", "Añade la rúcula fresca y los piñones tostados.", "Remueve suavemente y sirve a temperatura ambiente o fresca."],
        [9, 4, 2],
        ["Enfriar la pasta al dente con agua fría evita que se pase y absorba en exceso el aderezo graso.", "El tomate seco en aceite aporta una concentración umami irresistible."],
        ["Añade aceitunas negras deshuesadas.", "Usa pasta de garbanzos o lentejas sin gluten."]
    )
    # 231
    add(
        "Ensalada Waldorf clásica con manzana crujiente, apio, nueces y uvas",
        "Trozos crujientes de manzana verde ácida, tallos de apio fresco laminado, mitades de uvas rojas dulces, nueces tostadas y aderezo ligero de mayonesa y yogur.",
        "Estados Unidos", 4, 15, 0, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "cenas", "navidad", "fin-de-ano", "internacional"],
        ["waldorf", "manzana", "apio", "nueces", "clásico neoyorquino"], ["Frutos secos", "Lácteos", "Huevo"],
        220, 4, 22, 14, "🍏", "#84cc16",
        [("Manzanas verdes Granny Smith", 2, "unidades", "frescos"), ("Ramas de apio limpias en rodajitas finas", 3, "unidades", "frescos"), ("Uvas rojas sin pepitas cortadas a la mitad", 100, "g", "frescos"), ("Nueces peladas troceadas", 50, "g", "despensa"), ("Mayonesa suave", 40, "g", "despensa"), ("Yogur griego natural sin azúcar", 40, "g", "lacteos"), ("Zumo de limón", 15, "ml", "frescos"), ("Sal y pimienta blanca", 1, "pizca", "especias"), ("Hojas de lechuga para servir", 4, "hojas", "frescos")],
        ["Corta las manzanas sin pelar en dados medianos y rocíalas de inmediato con el zumo de limón para evitar la oxidación.", "Lava el apio y córtalo en finas rodajas crujientes.", "Corta las uvas rojas en mitades longitudinales.", "En un cuenco mezcla la mayonesa con el yogur griego, una pizca de sal y pimienta blanca formando una crema ligera.", "En una ensaladera combina manzana, apio, uvas y nueces.", "Vierte el aderezo cremoso y mezcla con suavidad.", "Sirve fresca sobre una cama de hojas de lechuga crujiente."],
        [10, 3, 2],
        ["La combinación mitad mayonesa mitad yogur aligera la salsa sin perder cremosidad clásica.", "Creada a finales del siglo XIX en el mítico Hotel Waldorf-Astoria de Nueva York."],
        ["Añade dados de pollo asado para convertirla en plato completo.", "Sustituye nueces por pacanas caramelizadas."]
    )
    # 232
    add(
        "Ensalada de remolacha asada con rúcula, naranja y queso de cabra",
        "Remolachas asadas al horno en gajos dulces combinadas con gajos vivos de naranja fresca, rúcula salvaje, queso de cabra y vinagreta balsámica cítrica.",
        "Francia", 2, 12, 0, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "cenas", "navidad", "internacional"],
        ["remolacha", "naranja", "rúcula", "queso cabra", "antioxidante"], ["Lácteos"],
        210, 7, 18, 13, "🥗", "#9d174d",
        [("Remolachas cocidas o asadas peladas", 2, "unidades", "frescos"), ("Naranjas de mesa peladas a lo vivo en gajos", 2, "unidades", "frescos"), ("Hojas de rúcula fresca", 80, "g", "frescos"), ("Queso de cabra desmenuzado", 80, "g", "lacteos"), ("Pipas de calabaza tostadas", 20, "g", "despensa"), ("Aceite de oliva virgen extra", 30, "ml", "despensa"), ("Vinagre balsámico de Módena", 10, "ml", "despensa"), ("Sal en escamas", 1, "pizca", "especias")],
        ["Corta las remolachas en gajos o rodajas gruesas.", "Pela las naranjas a lo vivo retirando la piel blanca y extrae los gajos limpios de membrana sobre un cuenco para recoger el zumo.", "Mezcla el zumo recogido de naranja con el aceite de oliva, vinagre balsámico y una pizca de sal.", "En una fuente dispone una cama de rúcula fresca bien lavada.", "Reparte armónicamente los gajos de remolacha y naranja.", "Desmenuza por encima el queso de cabra fresco.", "Espolvorea con las pipas de calabaza crujientes y riega con la vinagreta cítrica."],
        [10, 3, 2],
        ["El dulzor terroso de la remolacha equilibra maravillosamente la acidez jugosa de la naranja y el picor de la rúcula.", "Rica en nitratos naturales y antioxidantes protectores."],
        ["Usa queso feta o ricota en lugar de queso de cabra.", "Añade nueces peladas."]
    )
    # 233
    add(
        "Ensalada de col americana Coleslaw crujiente con aderezo agridulce",
        "Col blanca y lombarda cortadas en juliana fina con zanahoria rallada crujiente, aderezadas con salsa cremosa de mayonesa, yogur, vinagre de manzana y mostaza.",
        "Estados Unidos", 4, 15, 0, "Fácil",
        ["ensaladas", "vegetarianas", "rapidas", "economicas", "internacional"],
        ["coleslaw", "col blanca", "aderezo agridulce", "zanahoria", "guarnición"], ["Huevo", "Lácteos"],
        160, 3, 12, 12, "🥗", "#a3e635",
        [("Col blanca fresca cortada en juliana finísima", 300, "g", "frescos"), ("Col lombarda morada en juliana fina", 100, "g", "frescos"), ("Zanahorias peladas y ralladas gruesas", 2, "unidades", "frescos"), ("Mayonesa cremosa", 50, "g", "despensa"), ("Yogur natural entero", 40, "g", "lacteos"), ("Vinagre de sidra de manzana", 20, "ml", "despensa"), ("Azúcar moreno", 1, "cucharadita", "despensa"), ("Mostaza de Dijon", 1, "cucharadita", "despensa"), ("Sal y pimienta negra", 1, "pizca", "especias")],
        ["Corta la col blanca y morada con cuchillo afilado o mandolina en tiras finísimas.", "Ralla las zanahorias limpias.", "En un bol amplio prepara el aderezo mezclando mayonesa, yogur, vinagre de manzana, mostaza, azúcar, sal y pimienta hasta homogenizar.", "Añade las coles y zanahoria ralladas al bol del aderezo.", "Mezcla enérgicamente con las manos o pinzas para masajear y ablandar ligeramente las verduras.", "Tapa y refrigera al menos 1 hora antes de servir para amalgamar sabores."],
        [10, 3, 60],
        ["Masajear la col con el aderezo rompe suavemente su fibra manteniéndola crujiente pero agradable al morder.", "Guarnición indispensable para hamburguesas, carnes asadas o tacos."],
        ["Usa mayonesa vegana para opción 100% vegetal.", "Añade pasas o dados de manzana verde ácida."]
    )
    # 234
    add(
        "Ensalada de cuscús mediterráneo con verduras frescas, menta y limón",
        "Sémola de trigo esponjada y suelta con pimientos de colores, pepino crujiente, pasas sultanas dulces, cebolleta y aliño perfumado con comino y menta fresca.",
        "Marruecos", 4, 10, 5, "Fácil",
        ["ensaladas", "saludables", "vegetarianas", "veganas", "almuerzos", "rapidas", "economicas", "internacional"],
        ["cuscús", "sémola", "marroquí", "pasas", "ensalada fría"], ["Gluten"],
        230, 6, 42, 5, "🥗", "#f59e0b",
        [("Sémola de cuscús de trigo medio", 200, "g", "despensa"), ("Agua caliente o caldo vegetal", 200, "ml", "despensa"), ("Pimiento rojo en daditos", 1, "unidad", "frescos"), ("Pepino pequeño en daditos", 1, "unidad", "frescos"), ("Cebolleta tierna picada", 1, "unidad", "frescos"), ("Pasas sultanas sin pepitas", 30, "g", "despensa"), ("Hojas de menta fresca picadas", 1, "puñado", "frescos"), ("Zumo de limón", 30, "ml", "frescos"), ("Aceite de oliva virgen extra", 35, "ml", "despensa"), ("Sal y comino molido", 1, "pizca", "especias")],
        ["Pon el cuscús en un cuenco amplio con una pizca de sal y una cucharada de aceite.", "Vierte el agua hirviendo, tapa el cuenco con un plato y deja reposar 5 min.", "Destapa y esponja los granos de cuscús separándolos con un tenedor hasta que queden sueltos.", "Pica el pimiento, pepino y cebolleta en dados muy pequeños uniformes.", "Añade las verduras picadas y las pasas sultanas al cuscús tibio.", "Aliña con zumo de limón, aceite de oliva virgen extra, sal, comino y abundante menta fresca picada.", "Mezcla bien y deja reposar 15 min en nevera antes de servir."],
        [5, 5, 5, 15],
        ["El reposo tapado de la sémola es crucial para que absorba el vapor sin quedar apelmazada.", "Ideal para picnics o almuerzos al aire libre porque no necesita refrigeración inmediata extrema."],
        ["Añade garbanzos cocidos para proteína vegetal extra.", "Usa cuscús de espelta o maíz para opciones especiales."]
    )
    # 235
    add(
        "Ensalada de espárragos trigueros a la plancha con jamón serrano y virutas de queso",
        "Espárragos verdes tiernos tostados a la plancha con lascas de jamón curado, virutas de queso manchego y reducción ligera de módena.",
        "España", 2, 8, 8, "Fácil",
        ["ensaladas", "saludables", "cenas", "aperitivos-fiestas", "rapidas"],
        ["espárragos", "jamón ibérico", "manchego", "plancha", "español"], ["Lácteos"],
        210, 16, 5, 14, "🌿", "#15803d",
        [("Espárragos trigueros verdes finos", 1, "manojo", "frescos"), ("Jamón serrano o ibérico en finas lonchas", 80, "g", "carnes"), ("Queso manchego semicurado en lascas", 40, "g", "lacteos"), ("Aceite de oliva virgen extra", 25, "ml", "despensa"), ("Crema de vinagre balsámico", 10, "ml", "despensa"), ("Sal gruesa en escamas", 1, "pizca", "especias")],
        ["Lava los espárragos y desecha la parte dura del tallo quebrándolos con las manos por su punto natural de rotura.", "Calienta una plancha o sartén amplia con una cucharada de aceite de oliva.", "Cocina los espárragos a fuego medio-alto durante 6-7 min volteándolos con pinzas hasta que queden tiernos con marcas doradas apetitosas.", "Pasa los espárragos calientes a una fuente alargada de servir.", "Dispón por encima las lonchas finas de jamón para que se atemperen con el calor.", "Corona con lascas finas de queso manchego, escamas de sal y un hilo de reducción de vinagre balsámico."],
        [3, 7, 2],
        ["Quebrar los espárragos con las manos garantiza desechar exactamente la parte leñosa sin cortar de más.", "El calor de los espárragos funde la grasa del jamón resaltando su aroma curado."],
        ["Añade un huevo poché encima para un plato completo.", "Omite el jamón para versión vegetariana."]
    )
    # 236
    add(
        "Ensalada poke bowl de atún marinado con edamame, mango y sésamo",
        "Arroz de sushi tibio con dados de atún fresco marinados en soja y aceite de sésamo, dados de mango maduro, pepino, vainas de edamame y semillas tostadas.",
        "Estados Unidos", 2, 20, 15, "Media",
        ["ensaladas", "saludables", "pescados-mariscos", "almuerzos", "cenas", "internacional"],
        ["poke bowl", "atún marinado", "edamame", "hawaiano", "mango"], ["Pescado", "Soja", "Sésamo", "Gluten"],
        420, 30, 52, 10, "🥗", "#0284c7",
        [("Lomo de atún fresco descongelado de calidad sushi", 250, "g", "pescados"), ("Arroz de grano corto para sushi cocido", 200, "g", "despensa"), ("Mango maduro pelado en dados", 1, "unidad", "frescos"), ("Edamame desgranado cocido", 80, "g", "despensa"), ("Pepino holandés en rodajitas", 1, "unidad", "frescos"), ("Salsa de soja baja en sal", 30, "ml", "despensa"), ("Aceite de sésamo tostado", 10, "ml", "despensa"), ("Semillas de sésamo blanco y negro", 1, "cucharada", "despensa"), ("Zumo de lima", 15, "ml", "frescos")],
        ["Corta el lomo de atún en cubos regulares de 1.5 cm.", "En un cuenco mezcla la salsa de soja, aceite de sésamo, zumo de lima y la mitad de las semillas; añade el atún y marina 15 min en frío.", "Reparte el arroz cocido atemperado en dos boles amplios como base.", "Coloca de forma estética en secciones sobre el arroz: los dados de atún marinado, los cubos de mango, las rodajas de pepino y el edamame desgranado.", "Riega con el jugo restante de la marinada.", "Espolvorea con semillas de sésamo tostadas por encima y sirve de inmediato."],
        [15, 15, 5],
        ["Congelar el pescado a -20°C al menos 5 días garantiza la máxima seguridad frente a anisakis antes de consumirlo crudo.", "El contraste dulce del mango con la soja salada potencia la frescura del pescado."],
        ["Sustituye atún por salmón o tofu crujiente.", "Usa base de quinoa o lechugas en vez de arroz."]
    )

    # ==========================================
    # --- BEBIDAS & BATIDOS (16 recipes) ---
    # ==========================================
    # 237
    add(
        "Batido verde détox de espinacas tiernas, manzana verde, pepino y jengibre",
        "Licuado refrescante y depurativo con hojas de espinaca baby, manzana verde fresca ácida, pepino hidratante, zumo de limón y raíz de jengibre fresca.",
        "Internacional", 2, 8, 0, "Fácil",
        ["bebidas", "saludables", "desayunos", "veganas", "vegetarianas", "rapidas"],
        ["smoothie verde", "détox", "espinacas", "jengibre", "energético"], [],
        90, 3, 20, 1, "🥤", "#84cc16",
        [("Espinacas frescas baby limpias", 80, "g", "frescos"), ("Manzana verde Granny Smith con piel en trozos", 1, "unidad", "frescos"), ("Pepino pelado en rodajas", 1, "unidad", "frescos"), ("Zumo de limón fresco", 25, "ml", "frescos"), ("Jengibre fresco pelado rallado", 5, "g", "frescos"), ("Agua fría o agua de coco", 300, "ml", "despensa"), ("Cubitos de hielo", 4, "unidades", "despensa")],
        ["Lava minuciosamente las espinacas y la manzana verde.", "Corta la manzana en gajos desechando el corazón y las semillas.", "Trocea el pepino y ralla el jengibre pelado.", "Coloca en el vaso de la batidora las espinacas, manzana, pepino, jengibre, zumo de limón, agua fría y los cubos de hielo.", "Bate a máxima potencia durante 90 segundos hasta conseguir una textura uniforme, sedosa y sin grumos.", "Sirve de inmediato en vaso alto para disfrutar de sus nutrientes intactos."],
        [5, 2],
        ["Consumir recién preparado evita la pérdida oxidativa de vitaminas sensibles a la luz y al aire.", "El toque de jengibre y limón aporta frescura vibrante y digestiva."],
        ["Añade medio plátano congelado para mayor cremosidad.", "Sustituye espinacas por hojas de col rizada kale."]
    )
    # 238
    add(
        "Limonada casera tradicional a la hierbabuena con hielo picado",
        "Bebida veraniega ultra refrescante elaborada con zumo de limones naturales recién exprimidos, jarabe suave, hojas de menta machacadas y hielo abundante.",
        "España", 4, 10, 0, "Fácil",
        ["bebidas", "saludables", "vegetarianas", "veganas", "rapidas", "economicas"],
        ["limonada", "hierbabuena", "refrescante", "sin alcohol", "verano"], [],
        75, 1, 18, 0, "🍋", "#fde047",
        [("Limones medianos jugosos", 6, "unidades", "frescos"), ("Agua mineral fría", 800, "ml", "despensa"), ("Hojas de hierbabuena o menta fresca", 1, "manojo", "frescos"), ("Azúcar moreno o miel", 60, "g", "despensa"), ("Hielo picado abundante", 300, "g", "despensa"), ("Rodajas finas de limón para decorar", 4, "rodajas", "frescos")],
        ["Exprime los limones colando las pepitas para obtener unos 200 ml de zumo limpio.", "Disuelve el azúcar o la miel en 100 ml de agua templada removiendo bien hasta formar un almíbar suave.", "En una jarra grande coloca las hojas de hierbabuena lavadas y machácalas suavemente con el mazo de un mortero para liberar sus aceites esenciales.", "Vierte el zumo de limón natural, el jarabe dulce y el resto del agua fría.", "Remueve con una cuchara larga para integrar.", "Llena vasos con abundante hielo picado, vierte la limonada y decora con rodajas de limón y ramitas de menta."],
        [8, 2],
        ["Presionar la menta sin triturarla del todo evita que amargue y mantiene el líquido limpio.", "Puedes regular el dulzor al gusto añadiendo más agua si prefieres un trago más ácido."],
        ["Usa lima en lugar de limón para una versión estilo mojito virgen.", "Endulza con estevia o sirope de agave."]
    )
    # 239
    add(
        "Agua de horchata casera tradicional mexicana de arroz y canela",
        "Bebida suave y aromática de arroz blanco remojado y licuado con leche vegetal, canela en rama, vainilla pura y toque de azúcar moreno bien fría.",
        "México", 4, 15, 0, "Fácil",
        ["bebidas", "vegetarianas", "veganas", "internacional", "economicas"],
        ["horchata", "arroz", "canela", "mexicana", "bebida tradicional"], [],
        140, 2, 28, 2, "🥛", "#f8fafc",
        [("Arroz blanco crudo de grano redondo", 150, "g", "despensa"), ("Rama de canela de ceilán", 1, "unidad", "especias"), ("Agua templada para remojo", 600, "ml", "despensa"), ("Leche de almendras o leche entera", 400, "ml", "lacteos"), ("Extracto natural de vainilla", 1, "cucharadita", "despensa"), ("Azúcar de caña o endulzante", 60, "g", "despensa"), ("Canela molida para espolvorear", 1, "cucharadita", "especias"), ("Hielo en cubos", 200, "g", "despensa")],
        ["Enjuaga el arroz crudo y colócalo en un bol hondo con la rama de canela troceada y 600 ml de agua templada; deja reposar al menos 4 horas (o toda la noche).", "Vierte el arroz remojado con toda su agua y la canela reblandecida en el vaso de la licuadora.", "Tritura a máxima potencia durante 3 minutos hasta pulverizar el grano por completo.", "Cuela la mezcla vertiéndola a través de un colador de malla muy fina o una bolsa de leches vegetales, presionando bien con una cuchara para extraer toda la leche de arroz sedosa.", "Añade la leche de almendras, el extracto de vainilla y el azúcar; bate para disolver el azúcar.", "Refrigera hasta que esté muy fría. Sirve en vasos con hielo y espolvorea canela molida."],
        [3, 5, 240],
        ["Colar con tela o colador de malla fina retira los granitos ásperos logrando una horchata aterciopelada.", "La canela en rama infusionada en el remojo aporta ese perfume clásico inconfundible."],
        ["Usa leche de avena o coco para matices diferentes.", "Endulza con dátiles triturados para versión sin azúcar refinado."]
    )
    # 240
    add(
        "Smoothie cremoso de mango, plátano congelado y leche de coco",
        "Batido tropical espeso y sedoso elaborado con pulpa de mango dulce maduro, plátano previamente congelado, leche cremosa de coco y ralladura de lima.",
        "Internacional", 2, 8, 0, "Fácil",
        ["bebidas", "saludables", "desayunos", "veganas", "vegetarianas", "rapidas"],
        ["smoothie", "mango", "coco", "plátano", "tropical"], [],
        185, 3, 34, 5, "🥭", "#f59e0b",
        [("Mango maduro pelado troceado", 200, "g", "frescos"), ("Plátano maduro cortado en rodajas y congelado", 1, "unidad", "frescos"), ("Leche de coco en lata o brick cremosa", 250, "ml", "lacteos"), ("Zumo de lima", 10, "ml", "frescos"), ("Semillas de chía para decorar", 1, "cucharadita", "despensa")],
        ["Pela el mango y córtalo en trozos regulares.", "Coloca en el vaso de la batidora el mango troceado, las rodajas de plátano congeladas y el zumo de lima.", "Vierte la leche cremosa de coco.", "Bate a velocidad progresiva hasta conseguir una textura espesa, aterciopelada y homogénea similar a un helado blando.", "Sirve en vasos altos fríos decorando la superficie con semillas de chía y una fina rodajita de lima."],
        [5, 2],
        ["Usar plátano previamente congelado en rodajas aporta cremosidad sin necesidad de añadir lácteos pesados ni hielo que agüe el sabor.", "El mango aporta dulzor natural sin azúcares agregados."],
        ["Añade una cucharada de proteína vegetal en polvo para recuperador post-entreno.", "Incorpora piña fresca troceada."]
    )
    # 241
    add(
        "Chocolate caliente espeso a la española con canela y toque de vainilla",
        "Taza humeante y reconfortante de chocolate negro a la taza fundido a fuego lento con leche entera, fécula de maíz y perfume de canela para mojar churros.",
        "España", 4, 5, 12, "Fácil",
        ["bebidas", "postres", "desayunos", "navidad", "fin-de-ano", "familiares"],
        ["chocolate a la taza", "chocolate espeso", "churros", "merienda", "invierno"], ["Lácteos"],
        260, 7, 32, 12, "☕", "#78350f",
        [("Chocolate negro especial para postres (min 60% cacao)", 200, "g", "despensa"), ("Leche entera fresca", 750, "ml", "lacteos"), ("Fécula de maíz (maicena)", 25, "g", "despensa"), ("Azúcar moreno", 35, "g", "despensa"), ("Rama de canela", 1, "unidad", "especias"), ("Pizca de sal", 1, "pizca", "especias")],
        ["Reserva medio vaso de leche fría y disuelve en él la fécula de maíz con un tenedor hasta que no queden grumos.", "Pon el resto de la leche en un cazo a fuego medio con la rama de canela, el azúcar y la pizca de sal; calienta hasta que esté a punto de hervir y retira la canela.", "Trocea el chocolate negro en pedazos pequeños y añádelo a la leche caliente, removiendo constantemente con varillas hasta que se funda por completo.", "Vierte la leche reservada con la fécula de maíz disuelta sin dejar de batir.", "Cocina a fuego suave durante 4-5 min removiendo sin parar hasta que espese y adquiera brillo.", "Sirve bien caliente en tazas hondas con cuchara o churros para mojar."],
        [2, 5, 5],
        ["Disolver la maicena en leche fría evita la formación de grumos difíciles de disolver después.", "No dejes que hierva vigorosamente una vez espeso para que el chocolate no se queme en el fondo."],
        ["Usa bebida vegetal de avena y chocolate vegano para intolerantes a la lactosa.", "Añade una pizca de chile o pimienta de cayena para toque picante azteca."]
    )
    # 242
    add(
        "Batido energético de avena, plátano, crema de cacahuete y cacao puro",
        "Batido saciante y nutritivo con copos de avena integral fina, plátano maduro, leche vegetal, crema de cacahuete natural y cacao puro desgrasado.",
        "Internacional", 2, 5, 0, "Fácil",
        ["bebidas", "desayunos", "saludables", "vegetarianas", "veganas", "rapidas", "economicas"],
        ["smoothie proteico", "avena", "cacahuete", "cacao", "desayuno"], ["Frutos secos"],
        280, 10, 42, 9, "🥤", "#b45309",
        [("Copos de avena suaves", 50, "g", "despensa"), ("Plátano maduro grande", 1, "unidad", "frescos"), ("Leche de almendras o soja sin azúcar", 350, "ml", "lacteos"), ("Crema de cacahuete 100% natural", 30, "g", "despensa"), ("Cacao puro en polvo desgrasado", 15, "g", "despensa"), ("Canela molida", 1, "pizca", "especias"), ("Cubitos de hielo", 3, "unidades", "despensa")],
        ["Pon los copos de avena en la batidora y tritura 10 segundos en seco para pulverizarlos.", "Añade el plátano pelado en rodajas, la crema de cacahuete y el cacao puro en polvo.", "Vierte la leche vegetal, añade la pizca de canela y los cubos de hielo.", "Bate a máxima potencia durante 1 minuto hasta obtener una bebida cremosa, densa y homogénea.", "Sirve en vasos altos decorando con una pizca de cacao espolvoreado."],
        [2, 1],
        ["Pulverizar la avena antes de añadir los líquidos garantiza una textura lisa sin sensación arenosa.", "Proporciona energía de liberación sostenida gracias a los carbohidratos complejos de la avena."],
        ["Sustituye crema de cacahuete por crema de almendras o avellanas.", "Añade una cucharadita de semillas de lino o chía."]
    )
    # 243
    add(
        "Infusión fría de hibisco (Agua de Jamaica) con naranja y canela",
        "Bebida floral de color rubí brillante elaborada con flores secas de hibisco infusionadas en frío, rodajas de naranja dulce, canela y toque de miel.",
        "México", 4, 10, 8, "Fácil",
        ["bebidas", "saludables", "vegetarianas", "veganas", "economicas"],
        ["agua de jamaica", "hibisco", "antioxidante", "refrescante", "sin cafeína"], [],
        50, 1, 12, 0, "🌺", "#be123c",
        [("Flores secas de hibisco (flor de Jamaica)", 40, "g", "despensa"), ("Agua mineral pura", 1000, "ml", "despensa"), ("Rama de canela", 1, "unidad", "especias"), ("Naranja cortada en rodajas finas", 1, "unidad", "frescos"), ("Miel o azúcar de caña", 40, "g", "despensa"), ("Cubitos de hielo abundantes", 200, "g", "despensa")],
        ["Hierve 500 ml de agua con la rama de canela en un cazo durante 3 min.", "Apaga el fuego, añade las flores secas de hibisco y tapa; deja infusionar durante 12-15 min hasta que el agua adquiera un color rojo profundo rubí.", "Cuela la infusión presionando las flores en un colador fino para extraer todo el extracto.", "Disuelve la miel o el azúcar en el concentrado caliente.", "Vierte la infusión en una jarra de cristal grande y añade los otros 500 ml de agua fría.", "Incorpora las rodajas de naranja y abundante hielo; remueve bien y sirve muy fría."],
        [3, 12, 5],
        ["El hibisco posee un toque cítrico y astringente similar al arándano, lleno de antocianinas protectoras.", "Excelente alternativa sin teína ni cafeína para hidratarse sanamente a cualquier hora."],
        ["Añade jengibre fresco rallado a la infusión caliente.", "Combina con hojas de menta fresca machacada."]
    )
    # 244
    add(
        "Té Chai especiado reconfortante con leche de avena y especias enteras",
        "Té negro infusionado con cardamomo verde, jengibre fresco, clavo, canela y pimienta negra cocido a fuego lento con leche cremosa vegetal.",
        "India", 2, 5, 12, "Fácil",
        ["bebidas", "vegetarianas", "veganas", "desayunos", "internacional"],
        ["masala chai", "té chai", "especias", "cardamomo", "otoño"], [],
        110, 2, 18, 3, "☕", "#b45309",
        [("Agua mineral", 250, "ml", "despensa"), ("Leche de avena cremosa para baristas", 300, "ml", "lacteos"), ("Té negro en hojas de Assam o Ceilán", 2, "cucharaditas", "despensa"), ("Vainas de cardamomo verde machacadas", 4, "unidades", "especias"), ("Rama de canela", 1, "unidad", "especias"), ("Clavos de olor enteros", 3, "unidades", "especias"), ("Jengibre fresco en rodajitas", 10, "g", "frescos"), ("Granos de pimienta negra enteros", 3, "unidades", "especias"), ("Miel pura o sirope de arce", 20, "g", "despensa")],
        ["Machaca ligeramente en el mortero las vainas de cardamomo, los clavos y los granos de pimienta para que se abran.", "En un cazo pon el agua, las especias machacadas, la canela y el jengibre; lleva a ebullición suave durante 5 min para extraer los aceites.", "Añade las hojas de té negro y cocina a fuego bajo durante 2 min más.", "Vierte la leche de avena y calienta a fuego medio hasta que empiece a subir la espuma sin derramarse.", "Baja el fuego al mínimo y remueve durante 2 min para infusionar.", "Cuela en dos tazas mediante un colador de malla fina, endulza con miel y disfruta humeante."],
        [5, 2, 4],
        ["Cocinar el té con las especias y la leche a fuego lento (técnica masala chai) produce una textura sedosa muy superior a usar bolsitas comerciales.", "El cardamomo y el jengibre aportan calidez interior reconfortante."],
        ["Usa leche entera de vaca si prefieres lácteos clásicos.", "Haz versión descafeinada usando rooibos en lugar de té negro."]
    )
    # 245
    add(
        "Batido de frutos rojos, yogur griego y semillas de chía",
        "Batido espeso y antioxidante de frambuesas, arándanos y fresas con yogur griego rico en proteínas, leche fresca y chía hidratada.",
        "Internacional", 2, 5, 0, "Fácil",
        ["bebidas", "saludables", "desayunos", "vegetarianas", "rapidas"],
        ["smoothie frutos rojos", "arándanos", "yogur griego", "chía", "antioxidante"], ["Lácteos"],
        170, 8, 24, 4, "🫐", "#be123c",
        [("Mezcla de frutos rojos congelados (arándanos, frambuesas, moras)", 200, "g", "frescos"), ("Yogur griego natural sin azúcar", 150, "g", "lacteos"), ("Leche fresca entera o vegetal", 200, "ml", "lacteos"), ("Semillas de chía", 1, "cucharada", "despensa"), ("Miel o sirope de agave", 15, "g", "despensa")],
        ["Coloca los frutos rojos en el vaso de la batidora con el yogur griego y la leche.", "Añade la miel o sirope de agave.", "Bate a máxima potencia durante 1 minuto hasta obtener una crema espesa y uniforme de color violeta intenso.", "Añade las semillas de chía y remueve suavemente con cuchara para repartirlas.", "Deja reposar 5 min en la nevera para que la chía absorba humedad y espese el batido.", "Sirve en vasos altos decorando con unos arándanos enteros por encima."],
        [2, 5],
        ["Los frutos rojos congelados enfrían el batido y aportan textura de frappé sin diluir el sabor con cubos de agua.", "Aporte masivo de polifenoles y vitamina C."],
        ["Usa yogur de coco o almendras para versión sin lácteos.", "Añade medio aguacate para ganar grasas saludables insaturadas."]
    )
    # 246
    add(
        "Zumo reconstituyente de naranja natural, zanahoria y cúrcuma fresca",
        "Jugo prensado lleno de color y vitaminas con naranjas dulces exprimidas, zumo de zanahoria fresca, pizca de cúrcuma dorada y aceite de oliva.",
        "Internacional", 2, 10, 0, "Fácil",
        ["bebidas", "saludables", "desayunos", "vegetarianas", "veganas", "rapidas"],
        ["zumo natural", "zanahoria", "naranja", "cúrcuma", "vitamina c"], [],
        95, 2, 22, 1, "🥕", "#ea580c",
        [("Naranjas de zumo maduras", 4, "unidades", "frescos"), ("Zanahorias medianas peladas", 3, "unidades", "frescos"), ("Cúrcuma fresca rallada o en polvo", 3, "g", "especias"), ("Gotas de aceite de oliva virgen extra", 3, "gotas", "despensa")],
        ["Exprime las naranjas con exprimidor para obtener unos 250 ml de zumo fresco.", "Pasa las zanahorias limpias por la licuadora o extractor de zumos para extraer su néctar brillante.", "En una jarra mezcla el zumo de naranja con el zumo de zanahoria.", "Añade la cúrcuma y las tres gotas de aceite de oliva virgen extra.", "Remueve vigorosamente con una varilla o agitador.", "Sirve fresco en vasos con una rodaja de naranja en el borde."],
        [8, 2],
        ["Añadir 3 gotas de aceite de oliva aumenta exponencialmente la absorción intestinal del betacaroteno liposoluble de la zanahoria y la curcumina.", "Sabor dulce natural y energizante matutino."],
        ["Añade un trocito de jengibre fresco si te gusta el toque picante.", "Combina con zumo de pomelo rosa."]
    )
    # 247
    add(
        "Café frappé espumoso estilo griego con hielo y espuma densa",
        "Café soluble batido vigorosamente con un toque de agua fría y azúcar hasta crear una capa de espuma densa y cremosa sobre hielo y leche fresca.",
        "Grecia", 1, 4, 0, "Fácil",
        ["bebidas", "vegetarianas", "rapidas", "internacional", "economicas"],
        ["frappé", "café helado", "griego", "verano", "espuma de café"], ["Lácteos"],
        85, 3, 14, 2, "☕", "#78350f",
        [("Café soluble instantáneo de calidad", 2, "cucharaditas", "despensa"), ("Agua fría", 30, "ml", "despensa"), ("Azúcar moreno", 1, "cucharadita", "despensa"), ("Cubitos de hielo", 6, "unidades", "despensa"), ("Leche fresca evaporada o entera", 100, "ml", "lacteos"), ("Agua fría para completar", 100, "ml", "despensa")],
        ["En un vaso alto o coctelera pon el café soluble, el azúcar y 30 ml de agua fría.", "Bate con un espumador de leche a pilas durante 30 segundos (o agita con fuerza en coctelera) hasta formar una espuma dorada muy densa y firme.", "Llena el vaso con cubitos de hielo.", "Vierte con cuidado la leche y completa con agua fría vertida por el borde para no desarmar la espuma.", "Introduce una pajita de metal o papel y degusta sorbiendo despacio."],
        [2, 2],
        ["El café soluble contiene aceites y tensoactivos que permiten crear una espuma estable con solo agua y agitación rápida.", "Bebida nacional veraniega de las islas griegas."],
        ["Prepáralo sin azúcar para versión Sketos.", "Usa leche de avena para opción vegetal."]
    )
    # 248
    add(
        "Cóctel tropical San Francisco sin alcohol con granadina y frutas",
        "Combinación frutal y festiva con capas de zumo de naranja, piña, melocotón y limón con un toque de granadina dulce en el fondo y copa escarchada con azúcar.",
        "España", 2, 8, 0, "Fácil",
        ["bebidas", "aperitivos-fiestas", "navidad", "fin-de-ano", "vegetarianas", "veganas", "rapidas"],
        ["san francisco", "cóctel sin alcohol", "mocktail", "fiesta", "granadina"], [],
        130, 1, 32, 0, "🍹", "#f97316",
        [("Zumo de naranja natural", 100, "ml", "frescos"), ("Zumo de piña", 100, "ml", "despensa"), ("Zumo o néctar de melocotón", 80, "ml", "despensa"), ("Zumo de limón fresco", 20, "ml", "frescos"), ("Sirope de granadina", 30, "ml", "despensa"), ("Hielo picado en abundancia", 200, "g", "despensa"), ("Azúcar para escarchar la copa", 2, "cucharadas", "despensa"), ("Guinda roja confitada y rodaja de naranja", 2, "unidades", "despensa")],
        ["Pasa el borde de dos copas por un poco de zumo de limón y luego por azúcar en un plato para crear un escarchado perfecto.", "En una coctelera con hielo añade el zumo de naranja, zumo de piña, zumo de melocotón y zumo de limón.", "Agita enérgicamente durante 15 segundos hasta enfriar y mezclar los zumos.", "Llena las copas con hielo picado y vierte la mezcla colada de zumos.", "Vierte suavemente la granadina por un lado de la copa; por su densidad caerá al fondo creando un espectacular degradado rojo-anaranjado.", "Decora con una guinda en un palillo y media rodaja de naranja en el borde."],
        [5, 3],
        ["La diferencia de densidades entre la granadina y los zumos crea el clásico degradado bicolor sin mezclarse si se vierte con delicadeza.", "El cóctel sin alcohol más famoso de la hostelería española."],
        ["Añade un chorrito de agua con gas al final para un toque burbujeante.", "Sustituye melocotón por néctar de mango."]
    )

    # ==========================================
    # --- POSTRES & REPOSTERÍA (16 recipes) ---
    # ==========================================
    # 249
    add(
        "Tarta de queso La Viña donostiarra cremosa con corazón fundente",
        "Tarta de queso al horno estilo San Sebastián con bordes dorados y tostados caramelizados y un centro suave, untuoso y tembloroso irresistible.",
        "España", 8, 15, 45, "Media",
        ["postres", "familiares", "navidad", "fin-de-ano", "internacional"],
        ["tarta de queso", "la viña", "san sebastián", "cheesecake", "horno"], ["Lácteos", "Huevo", "Gluten"],
        380, 8, 28, 26, "🧀", "#f59e0b",
        [("Queso crema tipo Philadelphia a temperatura ambiente", 600, "g", "lacteos"), ("Huevos camperos a temperatura ambiente", 4, "unidades", "frescos"), ("Azúcar blanco", 200, "g", "despensa"), ("Nata para montar (35% materia grasa)", 300, "ml", "lacteos"), ("Harina de trigo de repostería", 15, "g", "despensa"), ("Pizca de sal", 1, "pizca", "especias")],
        ["Precalienta el horno a 210°C con calor arriba y abajo.", "Humedece y arruga una hoja grande de papel de hornear; forra con ella un molde redondo desmontable de 20-22 cm.", "En un bol amplio bate suavemente el queso crema con el azúcar con una espátula o varillas a baja velocidad sin introducir aire.", "Añade los huevos uno a uno, integrando cada uno antes de añadir el siguiente.", "Disuelve la harina en un chorro de la nata e incorpórala junto con el resto de la nata y la pizca de sal; mezcla hasta obtener una crema lisa.", "Vierte la crema en el molde preparado.", "Hornea a 210°C durante 42-45 min hasta que la superficie esté dorada y quemadita y el centro baile al mover el molde.", "Deja enfriar en el molde a temperatura ambiente durante al menos 4 horas antes de desmoldar."],
        [15, 45, 240],
        ["La tarta no debe comerse fría de la nevera: a temperatura ambiente es cuando el corazón revela su cremosidad sedosa sublime.", "El papel arrugado mojado se adapta a la forma del molde y aporta ese aspecto rústico tradicional."],
        ["Sustituye la harina de trigo por almidón de maíz (maicena) para hacerla 100% libre de gluten.", "Añade 50 g de queso azul suave para un toque gourmet."]
    )
    # 250
    add(
        "Tiramisú italiano veneciano tradicional con queso mascarpone y café",
        "Capas de bizcochos savoiardi tiernos mojados en espresso fuerte, crema aireada de yemas batidas con auténtico queso mascarpone y cacao amargo espolvoreado.",
        "Italia", 6, 25, 0, "Media",
        ["postres", "navidad", "fin-de-ano", "internacional"],
        ["tiramisú", "mascarpone", "café", "postre italiano", "savoiardi"], ["Lácteos", "Huevo", "Gluten"],
        360, 7, 34, 22, "🍰", "#78350f",
        [("Queso mascarpone italiano", 400, "g", "lacteos"), ("Huevos camperos frescos (yemas y claras separadas)", 4, "unidades", "frescos"), ("Bizcochos de soletilla savoiardi secos", 200, "g", "despensa"), ("Café espresso fuerte recién hecho frío", 250, "ml", "despensa"), ("Azúcar blanco fino", 100, "g", "despensa"), ("Cacao puro amargo en polvo", 30, "g", "despensa"), ("Licor amaretto o marsala (opcional)", 20, "ml", "despensa")],
        ["Prepara el café espresso, añade el licor amaretto si lo usas y deja enfriar por completo en un plato hondo.", "En un bol grande bate las yemas de huevo con el azúcar con varillas eléctricas durante 5 min hasta que blanqueen y doblen su volumen.", "Añade el mascarpone frío poco a poco batiendo a velocidad mínima hasta obtener una crema densa y homogénea.", "En otro bol monta las claras a punto de nieve firme con una pizca de sal.", "Integra las claras montadas a la crema de mascarpone con espátula mediante movimientos envolventes suaves para no perder aire.", "Sumerge los bizcochos savoiardi en el café apenas 1 segundo por lado para que no se empapen en exceso.", "En una fuente coloca una primera capa de bizcochos alineados, cubre con la mitad de la crema, coloca otra capa de bizcochos y termina con el resto de crema alisando la superficie.", "Refrigera un mínimo de 6 horas (mejor toda la noche). Espolvorea generosamente con cacao puro amargo justo antes de servir."],
        [10, 15, 360],
        ["No empapes los bizcochos más de 1 segundo: deben absorber café sin desintegrarse en la fuente.", "El reposo prolongado en frío es esencial para que la crema adquiera cuerpo y los sabores se fundan."],
        ["Usa huevos pasteurizados si lo van a consumir niños o embarazadas.", "Usa bizcochos de soletilla sin gluten."]
    )
    # 251
    add(
        "Flan casero de huevo de la abuela con caramelo dorado",
        "Flan tradicional de textura sedosa y firme cocido al baño maría al horno, elaborado con huevos frescos, leche infusionada con limón y canela y caramelo líquido.",
        "España", 6, 20, 50, "Fácil",
        ["postres", "familiares", "economicas"],
        ["flan de huevo", "baño maría", "caramelo", "casero", "tradicional"], ["Lácteos", "Huevo"],
        220, 6, 32, 8, "🍮", "#f59e0b",
        [("Leche entera fresca", 500, "ml", "lacteos"), ("Huevos camperos enteros", 4, "unidades", "frescos"), ("Azúcar para la mezcla del flan", 100, "g", "despensa"), ("Piel de medio limón sin parte blanca", 1, "trozo", "frescos"), ("Rama de canela", 1, "unidad", "especias"), ("Azúcar para el caramelo líquido", 80, "g", "despensa"), ("Gotas de zumo de limón y 1 cucharada de agua para caramelo", 10, "ml", "frescos")],
        ["En un cazo pon los 80 g de azúcar con las gotas de limón y agua; calienta a fuego medio sin remover con cuchara hasta que se forme un caramelo dorado ámbar.", "Vierte el caramelo caliente en el fondo de una flanera o moldes individuales y gira con cuidado para cubrir el fondo.", "En un cazo calienta la leche con la piel de limón y la canela; cuando rompa a hervir apaga el fuego, tapa y deja infusionar 10 min; luego retira los aromas.", "En un bol bate los huevos con los 100 g de azúcar con varillas de mano sin hacer espuma excesiva.", "Vierte la leche templada poco a poco sobre los huevos batiendo suavemente.", "Pasa la mezcla por un colador fino y viértela en la flanera caramelizada.", "Coloca la flanera dentro de una bandeja honda con agua caliente (baño maría) que cubra hasta la mitad del molde.", "Hornea a 160°C durante 50 min hasta que al clavar un palillo salga limpio.", "Enfría a temperatura ambiente y refrigera 4 horas antes de desmoldar pasando un cuchillo fino por el borde."],
        [8, 10, 50, 240],
        ["No batir los huevos en exceso ni hornear a más de 160°C garantiza un flan liso como la seda, sin agujeros ni textura esponjosa indeseada.", "El toque de limón en el caramelo evita que se cristalice."],
        ["Sustituye la mitad de la leche por nata líquida para un flan más cremoso estilo tocinillo.", "Hazlo con leche condensada reduciendo el azúcar."]
    )
    # 252
    add(
        "Arroz con leche cremoso asturiano con costra de azúcar requemado",
        "Arroz cocido muy lentamente en leche entera perfumada con piel de naranja, limón y canela, mantecado con mantequilla y superficie caramelizada con soplete.",
        "España", 6, 15, 60, "Media",
        ["postres", "familiares", "navidad", "economicas"],
        ["arroz con leche", "asturiano", "requemado", "cremoso", "canela"], ["Lácteos"],
        280, 7, 48, 7, "🍚", "#ea580c",
        [("Arroz redondo de grano corto", 160, "g", "despensa"), ("Leche entera fresca", 1200, "ml", "lacteos"), ("Agua", 150, "ml", "despensa"), ("Azúcar blanco", 160, "g", "despensa"), ("Mantequilla de calidad", 30, "g", "lacteos"), ("Piel de medio limón y media naranja", 1, "unidad", "frescos"), ("Rama de canela", 1, "unidad", "especias"), ("Pizca de sal", 1, "pizca", "especias"), ("Azúcar extra para caramelizar con soplete", 40, "g", "despensa")],
        ["En una cazuela pon el arroz con el agua y la pizca de sal a fuego medio hasta que el grano absorba casi toda el agua (unos 5 min) para abrir el poro.", "Añade la leche templada, la rama de canela y las pieles de cítricos.", "Cocina a fuego muy suave durante 45-50 min, removiendo frecuentemente con cuchara de madera para que el arroz suelte su almidón sin agarrarse al fondo.", "Cuando esté cremoso y tierno, retira las pieles y la canela; añade el azúcar y la mantequilla.", "Cocina 8-10 min más removiendo continuamente para que el azúcar se disuelva y caramelice ligeramente la mezcla.", "Vierte en cuencos de barro individuales y deja enfriar.", "Antes de servir, espolvorea una capa fina de azúcar sobre la superficie y quémala con un soplete de cocina o pala de quemar hasta crear una costra crujiente de caramelo."],
        [5, 45, 10, 3],
        ["Cocer el arroz primero unos minutos en agua rompe el grano para que libere almidón y absorba la leche infinitamente mejor.", "El azúcar se añade siempre al final para que no endurezca el grano de arroz."],
        ["Si no tienes soplete, espolvorea simplemente con canela molida clásica.", "Usa leche de avena o almendra para versión sin lactosa."]
    )
    # 253
    add(
        "Brownie americano de chocolate negro fudgy con nueces crujientes",
        "Cuadrados de brownie de chocolate intenso con textura densa y fundente en el interior, corteza brillante craquelada y trozos crujientes de nuez.",
        "Estados Unidos", 8, 15, 25, "Fácil",
        ["postres", "familiares", "internacional"],
        ["brownie", "chocolate", "nueces", "fudgy", "americano"], ["Lácteos", "Huevo", "Gluten", "Frutos secos"],
        340, 5, 38, 19, "🍫", "#451a03",
        [("Chocolate negro 70% troceado", 200, "g", "despensa"), ("Mantequilla sin sal", 150, "g", "lacteos"), ("Huevos camperos a temperatura ambiente", 3, "unidades", "frescos"), ("Azúcar blanco", 150, "g", "despensa"), ("Azúcar moreno", 50, "g", "despensa"), ("Harina de trigo común", 80, "g", "despensa"), ("Cacao puro amargo en polvo", 20, "g", "despensa"), ("Nueces peladas troceadas", 80, "g", "despensa"), ("Extracto de vainilla y pizca de sal marina", 1, "cucharadita", "despensa")],
        ["Precalienta el horno a 175°C y forra un molde cuadrado de 20x20 cm con papel de hornear dejando bordes sobresalientes.", "Derrite el chocolate negro con la mantequilla al baño maría o en el microondas a intervalos de 30 segundos removiendo; deja templar.", "En un bol bate los huevos con los dos tipos de azúcar y la vainilla con varillas enérgicamente durante 3 min hasta que quede espumoso y brillante.", "Vierte el chocolate fundido tibio sobre la mezcla de huevos batiendo suavemente.", "Tamiza la harina, el cacao puro y la sal sobre la mezcla; integra con una espátula con movimientos envolventes lo justo hasta que no queden rastros de harina.", "Añade las nueces troceadas e integra.", "Vierte la masa en el molde alisando la superficie.", "Hornea a 175°C durante 22-25 min: al clavar un palillo debe salir con migas húmedas pegadas (nunca seco ni líquido). Deja enfriar completamente antes de cortar en cuadrados."],
        [5, 5, 25, 60],
        ["No hornear de más es el gran secreto de un brownie fudgy fundente; si el palillo sale completamente limpio se habrá convertido en bizcocho seco.", "Batir bien el huevo con el azúcar genera esa codiciada película brillante craquelada superior."],
        ["Sustituye la harina de trigo por harina de arroz o almendra para versión sin gluten.", "Usa nueces de pecán o chips de chocolate blanco."]
    )
    # 254
    add(
        "Coulant volcán de chocolate caliente con corazón líquido fundido",
        "Bizcocho individual de chocolate negro con exterior esponjoso cocido que al cortar con la cuchara libera un torrente de chocolate caliente líquido irresistible.",
        "Francia", 4, 15, 12, "Media",
        ["postres", "navidad", "fin-de-ano", "internacional"],
        ["coulant", "volcán de chocolate", "chocolate líquido", "postre francés", "romántico"], ["Lácteos", "Huevo", "Gluten"],
        360, 6, 32, 23, "🌋", "#3b0764",
        [("Chocolate negro 70% de buena calidad", 150, "g", "despensa"), ("Mantequilla sin sal", 100, "g", "lacteos"), ("Huevos camperos grandes", 3, "unidades", "frescos"), ("Azúcar blanco", 70, "g", "despensa"), ("Harina de trigo de repostería", 40, "g", "despensa"), ("Cacao en polvo para encamisar los moldes", 1, "cucharada", "despensa"), ("Frambuesas frescas y azúcar glas para decorar", 1, "puñado", "frescos")],
        ["Precalienta el horno a 200°C con calor arriba y abajo.", "Unta 4 moldes individuales tipo ramequín o flaneras con mantequilla derretida y espolvorea con cacao puro en polvo desechando el exceso.", "Funde el chocolate troceado junto con la mantequilla al baño maría suave o en microondas; remueve y deja templar.", "En un bol bate los huevos con el azúcar con varillas hasta que blanqueen.", "Añade el chocolate fundido tibio a los huevos mezclando suavemente.", "Incorpora la harina tamizada mezclando con espátula lo justo hasta integrar.", "Reparte la mezcla en los 4 moldes llenando 3/4 partes.", "Hornea exactamente durante 10-12 min a 200°C: los bordes deben estar cocidos y firmes pero el centro tembloroso y hundido.", "Saca del horno, deja reposar 1 minuto, pasa la punta de un cuchillo por el borde y desmolda en platos individuales; espolvorea azúcar glas y sirve de inmediato."],
        [5, 5, 11, 2],
        ["El tiempo exacto de horno es la clave absoluta: cada horno varía 1 o 2 minutos, haz una prueba con uno si es la primera vez para clavar el punto líquido perfecto.", "Creado originalmente por el chef francés Michel Bras en 1981."],
        ["Introduce una onza de chocolate blanco en el centro de la masa antes de hornear para un corazón bicolor.", "Sirve con una bola de helado de vainilla para contraste frío-calor."]
    )
    # 255
    add(
        "Mousse ligera de limón esponjosa con solo 3 ingredientes",
        "Postre cítrico refrescante, aireado y suave elaborado batiendo leche condensada con zumo de limón fresco y nata montada firme.",
        "España", 4, 15, 0, "Fácil",
        ["postres", "saludables", "rapidas", "economicas"],
        ["mousse de limón", "postre rápido", "refrescante", "sin horno", "3 ingredientes"], ["Lácteos"],
        240, 5, 28, 12, "🍋", "#fde047",
        [("Nata líquida para montar muy fría (35% grasa)", 250, "ml", "lacteos"), ("Leche condensada", 200, "g", "lacteos"), ("Zumo de limón fresco recién exprimido", 100, "ml", "frescos"), ("Ralladura fina de limón", 1, "cucharadita", "frescos"), ("Hojitas de menta fresca para decorar", 4, "unidades", "frescos")],
        ["Lava los limones y ralla la parte amarilla sin llegar a la parte blanca amarga.", "Exprime los limones y cuela el zumo.", "En un bol mezcla la leche condensada con el zumo de limón y la ralladura; el ácido del limón espesará inmediatamente la leche condensada como por arte de magia.", "En otro bol bien frío monta la nata con varillas eléctricas hasta que forme picos firmes pero sin pasarte a mantequilla.", "Añade un tercio de la nata montada a la crema de limón y mezcla enérgicamente para aligerar.", "Añade el resto de la nata montada con movimientos envolventes de abajo hacia arriba con una espátula para conservar todo el aire.", "Reparte la mousse en copas de cristal o vasitos.", "Refrigera al menos 3 horas para que tome consistencia cremosa y firme."],
        [10, 5, 180],
        ["El ácido cítrico del limón desnaturaliza las proteínas de la leche condensada cuajándola sin necesidad de gelatina ni cocción.", "Un postre digestivo ideal tras comidas copiosas."],
        ["Usa lima o fruta de la pasión en lugar de limón.", "Coloca una base de galletas trituradas en el fondo de las copas."]
    )
    # 256
    add(
        "Galletas de avena crujientes con plátano y chips de chocolate sin azúcar",
        "Galletas caseras saludables y nutritivas preparadas en minutos mezclando copos de avena tiernos, puré de plátano maduro, canela y pepitas de chocolate negro.",
        "Internacional", 4, 10, 15, "Fácil",
        ["postres", "saludables", "desayunos", "vegetarianas", "veganas", "rapidas", "economicas"],
        ["galletas de avena", "sin azúcar añadido", "plátano", "saludables", "snack"], [],
        130, 3, 20, 4, "🍪", "#d97706",
        [("Copos de avena suaves", 120, "g", "despensa"), ("Plátanos maduros grandes", 2, "unidades", "frescos"), ("Chips de chocolate negro 70%", 40, "g", "despensa"), ("Canela molida", 1, "cucharadita", "especias"), ("Pizca de sal", 1, "pizca", "especias")],
        ["Precalienta el horno a 180°C y prepara una bandeja con papel de hornear.", "En un plato hondo aplasta los plátanos maduros con un tenedor hasta obtener un puré homogéneo.", "En un bol mezcla el puré de plátano con los copos de avena, la canela y la pizca de sal.", "Deja reposar la masa 5 min para que la avena absorba la humedad del plátano.", "Añade los chips de chocolate negro y mezcla suavemente.", "Con una cuchara toma porciones de masa, colócalas sobre la bandeja y aplástalas ligeramente dándoles forma redonda de galleta.", "Hornea a 180°C durante 14-16 min hasta que los bordes estén dorados y secos.", "Pasa a una rejilla para que se enfríen y adquieran textura crujiente por fuera."],
        [5, 5, 15, 15],
        ["Cuanto más maduros estén los plátanos (con piel moteada de negro), más dulces y aromáticas quedarán las galletas sin necesitar ni un gramo de azúcar refinado.", "Perfectas para la merienda de los niños o pre-entrenamiento."],
        ["Añade nueces picadas o pasas sultanas.", "Usa avena certificada sin gluten si padeces celiaquía."]
    )
    # 257
    add(
        "Natillas caseras tradicionales de vainilla con galleta María y canela",
        "Crema suave y perfumada de leche cocida a fuego lento con yemas de huevo, piel de limón, vainilla y coronada con la clásica galleta María y canela.",
        "España", 4, 15, 15, "Fácil",
        ["postres", "familiares", "economicas"],
        ["natillas", "galleta maría", "canela", "crema de vainilla", "postre de la abuela"], ["Lácteos", "Huevo", "Gluten"],
        210, 6, 32, 6, "🥣", "#f59e0b",
        [("Leche entera fresca", 600, "ml", "lacteos"), ("Yemas de huevo camperas", 4, "unidades", "frescos"), ("Azúcar blanco", 80, "g", "despensa"), ("Fécula de maíz (maicena)", 18, "g", "despensa"), ("Piel de medio limón sin blanco", 1, "trozo", "frescos"), ("Rama de canela", 1, "unidad", "especias"), ("Extracto de vainilla", 1, "cucharadita", "despensa"), ("Galletas María tradicionales", 4, "unidades", "despensa"), ("Canela molida para espolvorear", 1, "cucharadita", "especias")],
        ["Separa medio vaso de leche fría y disuelve en él la fécula de maíz con un tenedor hasta que no queden grumos.", "Pon el resto de la leche en un cazo con la piel de limón y la rama de canela; lleva a ebullición suave, apaga el fuego y deja infusionar 10 min; luego retira los aromas.", "En un bol amplio bate las yemas con el azúcar y la vainilla hasta que blanqueen levemente.", "Añade la leche con maicena a las yemas batidas y mezcla bien.", "Vierte la leche infusionada templada sobre la mezcla de yemas batiendo continuamente.", "Pasa toda la mezcla al cazo a través de un colador.", "Cocina a fuego medio-bajo sin parar de remover con varillas en forma de ocho durante 6-8 min hasta que espese y cubra el dorso de una cuchara (no dejes que hierva a borbotones).", "Vierte de inmediato en cuencos individuales, coloca una galleta María sobre cada una y deja enfriar.", "Espolvorea con canela molida y refrigera 2 horas."],
        [5, 10, 8, 120],
        ["Remover en forma de ocho cubre todo el fondo del cazo evitando que las yemas cuajen en los bordes.", "La galleta María se reblandece con la crema caliente adquiriendo esa textura tierna nostálgica."],
        ["Usa galletas sin gluten para celíacos.", "Sustituye la leche por leche vegetal de almendras o avena."]
    )
    # 258
    add(
        "Churros tradicionales crujientes caseros dorados con azúcar",
        "Masa tradicional elaborada únicamente con agua, harina de trigo y sal, frita en aceite bien caliente hasta quedar dorada y crujiente por fuera y tierna por dentro.",
        "España", 4, 15, 15, "Fácil",
        ["postres", "desayunos", "familiares", "navidad", "fin-de-ano", "economicas"],
        ["churros", "churros caseros", "desayuno español", "crujientes", "tradicional"], ["Gluten"],
        240, 4, 34, 10, "🥖", "#d97706",
        [("Harina de trigo de todo uso", 250, "g", "despensa"), ("Agua", 250, "ml", "despensa"), ("Sal fina", 1, "cucharadita", "especias"), ("Aceite de oliva suave o girasol para freír", 500, "ml", "despensa"), ("Azúcar blanco para rebozar", 50, "g", "despensa")],
        ["Pon el agua con la sal en un cazo y llévala a ebullición.", "En cuanto rompa a hervir vigorosamente, retira del fuego y echa de golpe toda la harina tamizada.", "Remueve enérgicamente con una cuchara de madera durante 1-2 min hasta que la harina absorba todo el líquido y se forme una masa densa y pegajosa que se despegue de las paredes.", "Deja templar la masa 5 min para que no esté hirviendo.", "Introduce la masa en una churrera o manga pastelera resistente con boquilla de estrella gruesa (imprescindible boquilla estrellada para evitar explosiones de vapor).", "Forma tiras de masa de unos 10-12 cm cortando con tijeras sobre papel o directamente sobre la sartén.", "Calienta abundante aceite a 190°C y fríe los churros por tandas de 4 en 4 durante 3-4 min dándoles la vuelta hasta que estén bien dorados y crujientes.", "Escurre sobre papel absorbente y rebózalos inmediatamente en azúcar blanco mientras estén calientes."],
        [5, 5, 4, 2],
        ["Usar boquilla de estrella es una regla de seguridad crucial: las estrías permiten que el vapor escape impidiendo que los churros estallen durante la fritura.", "El aceite debe estar muy caliente (190°C) para que queden secos y crujientes sin empaparse."],
        ["Añade canela molida mezclada con el azúcar para rebozar.", "Sirve con taza de chocolate caliente espeso."]
    )
    # 259
    add(
        "Panna cotta italiana tradicional con coulis brillante de frutos rojos",
        "Postre piamontés sedoso y tembloroso de nata infusionada con vaina de vainilla bourbon pura, gelatina suave y salsa brillante de frambuesas ácidas.",
        "Italia", 4, 15, 10, "Fácil",
        ["postres", "navidad", "fin-de-ano", "internacional"],
        ["panna cotta", "coulis", "frambuesas", "vainilla", "postre piamontés"], ["Lácteos"],
        290, 4, 26, 19, "🍮", "#be123c",
        [("Nata líquida para montar (35% materia grasa)", 400, "ml", "lacteos"), ("Leche entera", 100, "ml", "lacteos"), ("Hojas de gelatina neutra (cola de pescado)", 3, "hojas", "despensa"), ("Azúcar blanco", 70, "g", "despensa"), ("Vaina de vainilla natural abierta o extracto", 1, "unidad", "especias"), ("Frambuesas o frutos rojos frescos", 200, "g", "frescos"), ("Azúcar para el coulis", 30, "g", "despensa"), ("Zumo de limón", 10, "ml", "frescos")],
        ["Hidrata las hojas de gelatina en un cuenco con agua muy fría durante 8 min.", "En un cazo calienta la nata con la leche, los 70 g de azúcar y las semillas raspadas de la vaina de vainilla; calienta hasta que esté a punto de hervir y apaga el fuego.", "Escurre bien la gelatina hidratada con las manos y añádela al cazo caliente; remueve con varillas hasta que se disuelva por completo.", "Reparte la mezcla colada en 4 moldes individuales o vasitos de cristal.", "Deja enfriar a temperatura ambiente y luego refrigera un mínimo de 4 horas hasta que cuaje con textura temblorosa.", "Prepara el coulis cociendo las frambuesas con los 30 g de azúcar y el limón durante 6 min a fuego medio; tritura y cuela para retirar las semillitas.", "Vierte una capa generosa de coulis frío sobre cada panna cotta antes de servir."],
        [8, 5, 6, 240],
        ["La cantidad justa de gelatina produce ese codiciado bamboleo ('pantofola') delicado que se deshace en la boca sin parecer gelatina gomosa.", "El contraste ácido del coulis de frambuesa corta la riqueza láctea de la nata."],
        ["Usa leche de coco y agar-agar para versión vegana sin lácteos.", "Sirve con caramelo salado en lugar de frutos rojos."]
    )
    # 260
    add(
        "Tarta de manzana fina hojaldrada clásica con canela y brillo de albaricoque",
        "Lámina crujiente de hojaldre de mantequilla cubierta con finas láminas de manzana dulce asadas al horno, canela y pinceladas de mermelada brillante.",
        "Francia", 6, 20, 30, "Fácil",
        ["postres", "familiares", "navidad", "economicas"],
        ["tarta de manzana", "hojaldre", "manzanas asadas", "canela", "repostería"], ["Gluten", "Lácteos"],
        260, 3, 36, 12, "🥧", "#f59e0b",
        [("Lámina de masa de hojaldre fresca rectangular", 1, "unidad", "despensa"), ("Manzanas Reineta o Golden maduras", 4, "unidades", "frescos"), ("Azúcar moreno", 40, "g", "despensa"), ("Mantequilla derretida", 25, "g", "lacteos"), ("Canela molida", 1, "cucharadita", "especias"), ("Mermelada de albaricoque o melocotón", 50, "g", "despensa"), ("Zumo de limón", 15, "ml", "frescos")],
        ["Precalienta el horno a 200°C con calor arriba y abajo.", "Extiende la lámina de hojaldre sobre la bandeja del horno con su papel; pincha toda la superficie con un tenedor dejando un borde de 1.5 cm sin pinchar.", "Pela las manzanas, córtalas por la mitad, descorazónalas y córtalas en láminas finísimas de 2 mm con mandolina o cuchillo; rocía con limón.", "Coloca las láminas de manzana sobre el hojaldre montándolas una sobre otra de forma ordenada como escamas de pez.", "Pincela las manzanas con la mantequilla derretida.", "Espolvorea por encima con el azúcar moreno y la canela.", "Hornea a 200°C durante 25-30 min hasta que el hojaldre esté dorado y crujiente y las manzanas tiernas y tostadas en los bordes.", "Calienta la mermelada con una cucharada de agua y pincela la tarta recién salida del horno para darle un brillo de pastelería profesional."],
        [15, 30, 5],
        ["Pinchar el centro del hojaldre evita que suba de más, permitiendo que suban solo los bordes creando un marco dorado.", "Pincelar con mermelada caliente aporta brillo y protege la manzana de secarse."],
        ["Sirve tibia acompañada de una bola de helado de vainilla.", "Usa masa quebrada si prefieres una base más consistente."]
    )
    # 261
    add(
        "Alfajores argentinos tradicionales de maicena rellenos de dulce de leche y coco",
        "Bocaditos suaves y delicados de masa de fécula de maíz que se deshacen en la boca, unidos por dulce de leche repostero espeso y rebozados en coco rallado.",
        "Argentina", 8, 25, 12, "Media",
        ["postres", "navidad", "fin-de-ano", "internacional"],
        ["alfajores", "maicena", "dulce de leche", "coco", "argentina"], ["Lácteos", "Huevo", "Gluten"],
        270, 4, 38, 11, "🍪", "#d97706",
        [("Fécula de maíz (maicena)", 200, "g", "despensa"), ("Harina de trigo de repostería", 100, "g", "despensa"), ("Mantequilla pomada a temperatura ambiente", 150, "g", "lacteos"), ("Azúcar glas o impalpable", 100, "g", "despensa"), ("Yemas de huevo camperas", 3, "unidades", "frescos"), ("Ralladura fina de medio limón", 1, "cucharadita", "frescos"), ("Extracto de vainilla y polvo de hornear", 1, "cucharadita", "despensa"), ("Dulce de leche repostero firme", 300, "g", "despensa"), ("Coco rallado seco", 60, "g", "despensa")],
        ["Bate la mantequilla pomada con el azúcar glas hasta obtener una crema suave y blanquecina.", "Añade las yemas de una en una, la ralladura de limón y la vainilla; integra bien.", "Tamiza la maicena, la harina y el polvo de hornear sobre la mezcla; une los ingredientes con una espátula sin amasar hasta formar un bollo suave; refrigera 30 min.", "Estira la masa con rodillo sobre superficie enharinada hasta dejar 5 mm de grosor.", "Corta círculos de 4-5 cm con cortapastas y colócalos en bandejas con papel de hornear.", "Hornea a 170°C durante 10-12 min: deben cocerse sin dorarse (deben quedar blanquitos).", "Deja enfriar completamente sobre rejilla.", "Une las tapitas de dos en dos con una generosa capa de dulce de leche repostero y rueda los laterales por coco rallado para que se adhiera."],
        [15, 30, 12, 10],
        ["La proporción alta de maicena frente a harina de trigo es la que otorga esa textura única que se funde en el paladar al morder.", "El dulce de leche repostero es imprescindible por su consistencia firme que no se derrama."],
        ["Usa dulce de leche vegetal de almendras o coco para opción adaptada.", "Baña la mitad de los alfajores en chocolate negro fundido."]
    )
    # 262
    add(
        "Macedonia de frutas frescas de temporada macerada en zumo de naranja y hierbabuena",
        "Ensalada multicolor de frutas frescas troceadas (fresas, plátano, manzana, kiwi y uvas) marinadas en zumo de naranja recién exprimido con hojitas de hierbabuena.",
        "Internacional", 4, 15, 0, "Fácil",
        ["postres", "saludables", "desayunos", "vegetarianas", "veganas", "rapidas", "economicas"],
        ["macedonia", "frutas frescas", "ensalada de frutas", "postre ligero", "vitaminas"], [],
        110, 2, 26, 0, "🍓", "#f43f5e",
        [("Fresas maduras limpias en cuartos", 150, "g", "frescos"), ("Kiwis pelados en daditos", 2, "unidades", "frescos"), ("Plátano maduro en rodajitas", 1, "unidad", "frescos"), ("Manzana dulce pelada en cubitos", 1, "unidad", "frescos"), ("Uvas frescas sin pepitas cortadas por mitad", 100, "g", "frescos"), ("Naranjas de zumo", 3, "unidades", "frescos"), ("Hojas de hierbabuena fresca picadas", 1, "puñado", "frescos"), ("Miel o azúcar moreno (opcional)", 1, "cucharada", "despensa")],
        ["Lava y pela las frutas meticulosamente.", "Corta las fresas, kiwis, manzana y plátano en trozos uniformes de bocado.", "Coloca todas las frutas troceadas y las uvas en un cuenco amplio de cristal.", "Exprime las naranjas y disuelve la miel o azúcar en el zumo si las frutas no son muy dulces.", "Vierte el zumo de naranja sobre las frutas hasta cubrirlas parcialmente.", "Añade las hojitas de hierbabuena fresca picada y remueve suavemente para no magullar la fruta.", "Tapa y deja macerar en la nevera durante al menos 1 hora para que los jugos se mezclen creando un almíbar natural delicioso."],
        [15, 60],
        ["El zumo de naranja actúa como antioxidante natural manteniendo la manzana y el plátano claros y apetitosos.", "Un postre 100% natural, repleto de fibra, agua y enzimas digestivas."],
        ["Añade arándanos, mango o melocotón según la estación del año.", "Acompaña con una cucharada de yogur griego."]
    )
    # 263
    add(
        "Crepes franceses tradicionales dulces con azúcar, mantequilla y limón",
        "Finas obleas doradas de masa suave elaborada con leche, huevos camperos y harina, dobladas en pañuelo con mantequilla fundida, azúcar y gotas de limón.",
        "Francia", 4, 15, 12, "Fácil",
        ["postres", "desayunos", "familiares", "rapidas", "economicas", "internacional"],
        ["crepes", "crêpes", "bretaña", "postre francés", "merienda"], ["Gluten", "Lácteos", "Huevo"],
        190, 5, 26, 7, "🥞", "#f59e0b",
        [("Harina de trigo de repostería tamizada", 150, "g", "despensa"), ("Leche entera fresca", 350, "ml", "lacteos"), ("Huevos camperos medianos", 2, "unidades", "frescos"), ("Mantequilla derretida para la masa", 25, "g", "lacteos"), ("Azúcar blanco", 20, "g", "despensa"), ("Pizca de sal fina", 1, "pizca", "especias"), ("Mantequilla extra y azúcar para servir", 30, "g", "lacteos")],
        ["En una batidora o bol pon los huevos, la leche, la mantequilla derretida, el azúcar y la pizca de sal.", "Añade la harina tamizada y bate hasta obtener una masa líquida, suave y completamente libre de grumos.", "Deja reposar la masa en la nevera durante 20 min para relajar el gluten.", "Calienta una sartén antiadherente o crepera a fuego medio-alto y engrasa con una nuez pequeña de mantequilla.", "Vierte un cucharón pequeño de masa en el centro y gira la sartén inmediatamente en círculo para que la masa cubra todo el fondo en una capa finísima.", "Cocina durante 1 min hasta que los bordes se despeguen; dale la vuelta con una espátula y cocina 30 segundos por el otro lado.", "Repite con el resto de la masa apilando los crepes en un plato cubierto con un paño.", "Sirve calientes doblados en cuatro con una pizca de azúcar y mantequilla fundida."],
        [5, 20, 12],
        ["Dejar reposar la masa 20 minutos elimina las burbujas de aire y relaja el almidón para que los crepes no se rompan al voltearlos.", "La sartén debe estar bien caliente para lograr ese encaje dorado característico."],
        ["Rellena con crema de cacao, dulce de leche o mermelada de fresa.", "Usa harina sin gluten de arroz y fécula de maíz."]
    )
    # 264
    add(
        "Compota casera de manzana a la canela y miel sin azúcar añadido",
        "Trozos de manzana dulce cocidos a fuego lento en su propio jugo con rama de canela, piel de limón y un toque de miel hasta deshacerse en puré rústico reconfortante.",
        "España", 4, 10, 25, "Fácil",
        ["postres", "saludables", "desayunos", "vegetarianas", "economicas"],
        ["compota", "manzana", "canela", "sin azúcar", "digestivo"], [],
        90, 1, 22, 0, "🍎", "#d97706",
        [("Manzanas dulces (Golden o Reineta)", 4, "unidades", "frescos"), ("Agua mineral", 60, "ml", "despensa"), ("Rama de canela", 1, "unidad", "especias"), ("Piel de medio limón sin parte blanca", 1, "trozo", "frescos"), ("Miel pura (opcional si la manzana es dulce)", 15, "g", "despensa")],
        ["Pela las manzanas, descorazónalas y córtalas en dados medianos.", "En una cazuela pon los trozos de manzana, los 60 ml de agua, la rama de canela y la piel de limón.", "Tapa la cazuela y cocina a fuego suave durante 20-25 min, removiendo de vez en cuando.", "Las manzanas soltarán su propio jugo y se ablandarán hasta deshacerse al tocarlas con la cuchara.", "Retira la canela y la piel de limón.", "Aplasta con un tenedor o pasapurés para una textura rústica con trocitos (o bate si prefieres puré liso).", "Añade la miel si deseas un toque más dulce, remueve y sirve tibia o fría."],
        [10, 25, 2],
        ["Cocinar la manzana tapada a fuego lento permite que se cocine en su propio vapor conservando toda su pectina digestiva.", "Excelente postre reconfortante o acompañamiento para carnes de cerdo o aves."],
        ["Añade unas pasas o ciruelas secas durante la cocción.", "Combina mitad manzana y mitad pera de agua."]
    )
