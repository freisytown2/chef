# Batch 8: Arroces, Pastas, Sopas & Cremas (32 recipes: 16 Arroces/Pastas + 16 Sopas/Cremas)

def load_batch8(add):
    # --- ARROCES Y PASTAS (16 recipes) ---
    # 189
    add(
        "Espaguetis a la carbonara romana tradicional sin nata",
        "Espaguetis al dente envueltos en emulsión sedosa de yemas de huevo frescas, queso pecorino romano, guanciale crujiente y pimienta negra.",
        "Italia", 2, 10, 10, "Media",
        ["arroces-pastas", "almuerzos", "cenas", "rapidas", "internacional"],
        ["carbonara", "auténtica", "pecorino", "guanciale", "sin nata"], ["Gluten", "Huevo", "Lácteos"],
        490, 20, 54, 22, "🍝", "#f59e0b",
        [("Espaguetis de trigo duro", 200, "g", "despensa"), ("Guanciale o panceta curada en dados", 100, "g", "carnes"), ("Yemas de huevo frescas", 3, "unidades", "frescos"), ("Huevo entero", 1, "unidad", "frescos"), ("Queso pecorino romano rallado", 50, "g", "lacteos"), ("Pimienta negra recién molida abundante", 1, "cucharadita", "especias"), ("Sal para la pasta", 1, "cucharada", "especias")],
        ["Cuece los espaguetis en agua hirviendo con sal durante 8 min al dente.", "En una sartén dora el guanciale a fuego medio sin aceite durante 6 min hasta que suelte su grasa y quede crujiente; apaga el fuego.", "En un bol bate las yemas, el huevo entero, el pecorino rallado y abundante pimienta negra formando una crema espesa.", "Pasa la pasta caliente recién escurrida a la sartén con el guanciale y su grasa tibia; mezcla bien.", "Vierte la pasta en el bol de la crema de huevo FUERA DEL FUEGO, añadiendo 3 cucharadas de agua de cocción de la pasta.", "Remueve enérgicamente durante 1 min para que el calor residual emulsione el huevo en salsa cremosa sin cuajar.", "Sirve de inmediato con más pecorino y pimienta."],
        [8, 6, 2, 1, 1],
        ["La auténtica carbonara JAMÁS lleva nata: la cremosidad proviene de emulsionar las yemas y el queso con el agua caliente de la pasta fuera del fuego.", "El guanciale aporta el toque ahumado y salino tradicional."],
        ["Usa panceta ibérica o bacon de calidad si no consigues guanciale.", "Usa pasta sin gluten."]
    )
    # 190
    add(
        "Arroz negro con calamares y salsa alioli casera",
        "Arroz cocinado en paellera con caldo de pescado oscuro con tinta de calamar, sepia tierna y alioli de ajo emulsionado.",
        "España", 4, 20, 25, "Media",
        ["arroces-pastas", "pescados-mariscos", "almuerzos", "familiares"],
        ["arroz negro", "tinta calamar", "alioli", "paella negra", "mediterráneo"], ["Moluscos", "Huevo"],
        440, 24, 58, 12, "🥘", "#18181b",
        [("Arroz bomba", 320, "g", "despensa"), ("Calamares limpios o sepia en cubitos", 400, "g", "carnes"), ("Bolsitas de tinta de calamar", 2, "unidades", "despensa"), ("Cebolla y pimiento verde picados", 1, "taza", "frescos"), ("Tomate maduro rallado", 2, "unidades", "frescos"), ("Fumet o caldo de pescado caliente", 800, "ml", "despensa"), ("Aceite de oliva virgen extra", 40, "ml", "despensa"), ("Salsa alioli casera para acompañar", 60, "g", "despensa"), ("Sal", 1, "cucharadita", "especias")],
        ["Dora los dados de sepia en la paellera con aceite a fuego vivo 5 min; retira.", "Sofríe la cebolla y el pimiento 8 min a fuego medio.", "Añade el tomate rallado y sofríe 5 min.", "Disuelve la tinta de calamar en un cucharón de caldo caliente e incorpórala al sofrito.", "Añade el arroz bomba y rehoga 2 min mezclando con la tinta.", "Vierte el caldo de pescado hirviendo y reincorpora la sepia; cocina 10 min a fuego vivo.", "Baja el fuego a mínimo durante 8 min y deja reposar 5 min fuera del fuego.", "Sirve con cucharadas de alioli fresco."],
        [5, 8, 5, 2, 2, 10, 8, 5],
        ["El arroz bomba absorbe el fumet y la tinta quedando tierno por fuera y con punto firme por dentro.", "Servir con una buena cucharada de alioli suaviza la intensidad del mar."],
        ["Añade gambas peladas en los últimos 5 minutos.", "Usa arroz carnaroli."]
    )
    # 191
    add(
        "Fettuccine alfredo con mantequilla y queso parmesano",
        "Cintas de pasta fresca al dente mantecadas con mantequilla cremosa, abundante queso parmesano reggiano rallado y pimienta.",
        "Italia", 2, 8, 10, "Fácil",
        ["arroces-pastas", "cenas", "almuerzos", "vegetarianas", "rapidas", "internacional"],
        ["fettuccine alfredo", "parmesano", "mantequilla", "pasta clásica", "rápido"], ["Gluten", "Lácteos"],
        480, 15, 52, 24, "🍝", "#fef08a",
        [("Fettuccine o tallarines de pasta fresca", 250, "g", "despensa"), ("Mantequilla de buena calidad", 60, "g", "lacteos"), ("Queso parmesano reggiano recién rallado", 80, "g", "lacteos"), ("Pimienta negra recién molida", 1, "pizca", "especias"), ("Sal gruesa para la cocción de la pasta", 1, "cucharada", "especias")],
        ["Cuece los fettuccine en abundante agua hirviendo con sal durante 3-4 min si es pasta fresca (o 9 min si es seca).", "En una fuente o sartén templada pon la mantequilla cortada en dados pequeños.", "Escurre la pasta reservando medio vaso del agua caliente de cocción.", "Vierte la pasta humeante directamente sobre la mantequilla.", "Añade la mitad del parmesano rallado y 3 cucharadas de agua de cocción de la pasta.", "Mezcla enérgicamente con dos cucharas volteando la pasta continuamente durante 1 min para emulsionar la mantequilla y el queso en crema sedosa.", "Añade el resto del parmesano, mezcla y sirve inmediatamente con pimienta recién molida."],
        [4, 1, 1, 1],
        ["La receta original de Roma no lleva nata; la emulsión se logra exclusivamente batiendo la mantequilla y el parmesano con el agua de cocción rica en almidón.", "Come de inmediato bien caliente."],
        ["Añade tiras de pollo a la plancha para la versión americana 'Chicken Alfredo'.", "Usa pasta sin gluten."]
    )
    # 192
    add(
        "Gnocchi caseros de patata con salsa de tomate y albahaca",
        "Ñoquis tiernos de patata cocida y harina salteados en salsa de tomate maduro, albahaca fresca y queso mozzarella fundido.",
        "Italia", 4, 30, 15, "Media",
        ["arroces-pastas", "almuerzos", "cenas", "vegetarianas", "familiares", "internacional"],
        ["gnocchi", "ñoquis", "patata", "tomate casero", "albahaca"], ["Gluten", "Huevo", "Lácteos"],
        360, 11, 58, 9, "🥔", "#ea580c",
        [("Gnocchi de patata frescos", 500, "g", "despensa"), ("Salsa de tomate casera concentrada", 350, "g", "despensa"), ("Mozzarella en dados", 120, "g", "lacteos"), ("Queso parmesano rallado", 40, "g", "lacteos"), ("Hojas de albahaca fresca", 8, "hojas", "frescos"), ("Aceite de oliva virgen extra y sal", 15, "ml", "despensa")],
        ["Hierve abundante agua con sal en una olla grande.", "En una sartén calienta la salsa de tomate casera con un hilo de aceite de oliva y hojas de albahaca.", "Vierte los ñoquis en el agua hirviendo; cuando suban flotando a la superficie (unos 2 min), están listos.", "Saca los ñoquis con espumadera pasándolos directamente a la sartén de salsa de tomate.", "Saltea durante 1 min para que los ñoquis absorban la salsa.", "Añade los dados de mozzarella y parmesano, tapa 1 min para fundir y sirve humeante."],
        [2, 3, 2, 1, 1],
        ["Los ñoquis avisan exactamente cuándo están cocidos: flotan en la superficie tras 2 minutos.", "No los dejes hervir de más o perderán su forma esponjosa."],
        ["Gratina en el horno 5 minutos para hacer gnocchi alla sorrentina.", "Usa ñoquis sin gluten."]
    )
    # 193
    add(
        "Arroz chaufa peruano de pollo salteado al wok",
        "Arroz blanco salteado al wok a fuego vivo con pollo dorado, tortilla de huevo en dados, cebollino chino, jengibre y sillao.",
        "Perú", 4, 15, 12, "Fácil",
        ["arroces-pastas", "carnes-pollo", "almuerzos", "cenas", "rapidas", "internacional"],
        ["arroz chaufa", "chifa", "peruano", "wok", "pollo"], ["Huevo", "Soja", "Sésamo"],
        420, 26, 54, 12, "🍚", "#ca8a04",
        [("Arroz blanco cocido frío del día anterior", 450, "g", "despensa"), ("Pechuga de pollo en cubitos", 300, "g", "carnes"), ("Huevos batidos", 2, "unidades", "frescos"), ("Cebolla china (cebollino) picada", 1, "taza", "frescos"), ("Jengibre fresco rallado (kion)", 1, "cucharada", "frescos"), ("Salsa de soja oscura (sillao)", 3, "cucharadas", "despensa"), ("Aceite de sésamo y aceite vegetal", 25, "ml", "despensa"), ("Sal y pimienta blanca", 1, "pizca", "especias")],
        ["En sartén caliente con aceite haz una tortilla fina con los huevos, córtala en cuadritos y reserva.", "En el wok bien caliente con aceite dora el pollo sazonado con jengibre durante 4 min a fuego vivo.", "Añade el arroz blanco frío separando los granos con la espátula durante 3 min a fuego máximo.", "Vierte la salsa de soja y unas gotas de aceite de sésamo salteando con movimientos continuos 2 min para teñir el grano uniformemente.", "Incorpora la tortilla en dados y la cebolla china picada; saltea 1 min y sirve humeante."],
        [2, 4, 3, 2, 1],
        ["El arroz frío del día anterior no suelta humedad permitiendo que se fría y dore sin apelmazarse.", "El kion (jengibre) rallado es el alma del chaufa peruano."],
        ["Usa carne de cerdo asada o langostinos.", "Usa tamari sin gluten."]
    )
    # 194
    add(
        "Tagliatelle con salsa bolognesa de cocción lenta artesanal",
        "Cintas de pasta al huevo bañadas en rica salsa de ternera y cerdo picada guisada con vino tinto, leche y tomate durante dos horas.",
        "Italia", 4, 20, 90, "Media",
        ["arroces-pastas", "almuerzos", "familiares", "carnes-pollo", "internacional"],
        ["tagliatelle", "boloñesa artesanal", "ragù", "pasta al huevo"], ["Gluten", "Lácteos", "Huevo"],
        480, 24, 56, 18, "🍝", "#ea580c",
        [("Tagliatelle de pasta al huevo", 350, "g", "despensa"), ("Carne picada de ternera y cerdo", 400, "g", "carnes"), ("Panceta picada fina", 50, "g", "carnes"), ("Cebolla, zanahoria y apio picados", 1, "taza", "frescos"), ("Tomate triturado", 400, "g", "despensa"), ("Vino tinto seco", 100, "ml", "despensa"), ("Leche entera", 100, "ml", "lacteos"), ("Caldo de carne", 200, "ml", "despensa"), ("Parmesano rallado", 50, "g", "lacteos"), ("Aceite de oliva virgen y sal", 30, "ml", "despensa")],
        ["En cazuela dora la panceta 4 min; añade la cebolla, zanahoria y apio pochando 8 min.", "Añade la carne picada y dora 8 min desmenuzando con cuchara de madera.", "Vierte el vino tinto y deja evaporar el alcohol 4 min a fuego vivo.", "Añade la leche entera y deja que se absorba durante 5 min (técnica tradicional boloñesa para suavizar la carne).", "Añade el tomate triturado y caldo; cocina tapado a fuego lentísimo durante 70 min.", "Cuece los tagliatelle al dente, mézclalos con la salsa bolognesa caliente y corona con parmesano."],
        [4, 8, 8, 4, 5, 70, 7, 2],
        ["Añadir un vaso de leche a la carne antes del tomate rompe la acidez y deja la carne tierna como mantequilla.", "Cocina a fuego mínimo casi sin hervir."],
        ["Usa pasta sin gluten.", "Sustituye ternera por carne de pollo."]
    )
    # 195
    add(
        "Pasta all'amatriciana tradicional con guanciale y tomate",
        "Bucatini o rigatoni con sofrito crujiente de guanciale curado, salsa de tomate reducida con vino blanco, guindilla y pecorino.",
        "Italia", 2, 10, 15, "Fácil",
        ["arroces-pastas", "almuerzos", "cenas", "rapidas", "internacional"],
        ["amatriciana", "guanciale", "pecorino", "pasta romana", "picante"], ["Gluten", "Lácteos"],
        440, 16, 56, 17, "🍝", "#dc2626",
        [("Pasta bucatini o rigatoni", 200, "g", "despensa"), ("Guanciale en tiras", 90, "g", "carnes"), ("Tomates pelados en conserva triturados a mano", 300, "g", "despensa"), ("Vino blanco seco", 40, "ml", "despensa"), ("Guindilla seca picante", 1, "unidad", "especias"), ("Queso pecorino romano rallado", 40, "g", "lacteos"), ("Sal para la pasta", 1, "cucharada", "especias")],
        ["En una sartén dora las tiras de guanciale con la guindilla a fuego medio sin aceite 6 min hasta que queden crujientes; saca el guanciale a un plato dejando la grasa en la sartén.", "Vierte el vino blanco en la grasa y deja evaporar 1 min.", "Añade los tomates triturados y cocina a fuego medio 10 min hasta hacer salsa densa.", "Hierve los bucatini al dente en agua con sal; escurre.", "Vierte la pasta en la sartén de salsa de tomate, añade el guanciale crujiente y saltea 1 min.", "Apaga el fuego, espolvorea pecorino rallado, mezcla y sirve."],
        [6, 1, 10, 8, 1, 1],
        ["El guanciale debe sacarse antes de echar el tomate para que conserve su textura crujiente al reincorporarlo al final.", "El pecorino romano le confiere su punto salino inconfundible."],
        ["Usa panceta curada si no tienes guanciale.", "Usa pasta sin gluten."]
    )
    # 196
    add(
        "Pasta alla norma siciliana con berenjena frita y ricota salada",
        "Rigatoni al dente mezclados con salsa de tomate casera, dados de berenjena dorada crujiente, albahaca y ricota salada rallada.",
        "Italia", 4, 20, 20, "Fácil",
        ["arroces-pastas", "almuerzos", "cenas", "vegetarianas", "internacional"],
        ["pasta alla norma", "sicilia", "berenjena", "albahaca", "ricota salada"], ["Gluten", "Lácteos"],
        410, 13, 58, 14, "🍆", "#e11d48",
        [("Pasta corta rigatoni o penne", 350, "g", "despensa"), ("Berenjena grande en dados de 2 cm", 1, "unidad", "frescos"), ("Tomates maduros triturados", 500, "g", "despensa"), ("Dientes de ajo laminados", 2, "unidades", "frescos"), ("Queso ricota salada o parmesano rallado", 60, "g", "lacteos"), ("Hojas de albahaca fresca", 10, "hojas", "frescos"), ("Aceite de oliva virgen extra para freír", 60, "ml", "despensa"), ("Sal gruesa", 1, "cucharadita", "especias")],
        ["Sala los dados de berenjena en un colador durante 15 min; seca bien con papel.", "Fríe la berenjena en aceite de oliva caliente 5 min hasta que esté dorada y tierna; escurre en papel.", "En sartén con dos cucharadas de aceite dora los ajos 2 min; añade el tomate triturado y cuece 12 min sazonando con sal y albahaca.", "Cuece la pasta al dente en agua con sal durante 9 min; escurre.", "Mezcla la pasta con la salsa de tomate y la mitad de la berenjena frita.", "Sirve en platos individuales coronando con el resto de berenjenas crujientes y abundante ricota salada rallada."],
        [15, 5, 12, 9, 2],
        ["Dejar dados de berenjena frita por encima de la pasta mantiene su costra crujiente intacta.", "La ricota salada siciliana es seca y madura, perfecta para rallar."],
        ["Usa queso feta o parmesano si no consigues ricota salada.", "Usa pasta sin gluten."]
    )
    # 197
    add(
        "Arroz a banda tradicional alicantino con alioli casero",
        "Arroz fino y seco cocinado en paellera con un potente caldo de pescados de roca y morralla, servido con alioli.",
        "España", 4, 15, 25, "Media",
        ["arroces-pastas", "pescados-mariscos", "almuerzos", "familiares"],
        ["arroz a banda", "alicante", "fumet roca", "alioli", "socarrat"], ["Pescado", "Huevo"],
        430, 22, 58, 12, "🥘", "#f59e0b",
        [("Arroz bomba", 320, "g", "despensa"), ("Caldo de pescado de roca muy concentrado", 800, "ml", "despensa"), ("Sepia limpia en dados pequeños", 200, "g", "carnes"), ("Dientes de ajo picados", 3, "unidades", "frescos"), ("Tomate maduro rallado", 1, "unidad", "frescos"), ("Pimentón dulce y azafrán en hebra", 1, "cucharadita", "especias"), ("Salsa alioli casera", 60, "g", "despensa"), ("Aceite de oliva virgen extra", 40, "ml", "despensa"), ("Sal", 1, "cucharadita", "especias")],
        ["En la paellera con aceite sofríe la sepia en dados 4 min a fuego vivo.", "Añade el ajo picado y el tomate rallado pochando 4 min; incorpora el pimentón 20 segundos.", "Añade el arroz bomba y sofríe 2 min nacarando el grano.", "Vierte el caldo de pescado hirviendo con el azafrán tostado y sal.", "Cocina a fuego fuerte durante 8 min repartiendo el arroz en una capa fina.", "Baja el fuego al mínimo durante 10 min más.", "Sube el fuego a tope el último minuto para conseguir socarrat crujiente; deja reposar 5 min y sirve con alioli."],
        [4, 4, 2, 8, 10, 1, 5],
        ["La clave de este arroz es la potencia del caldo de pescado de roca, ya que se sirve solo el arroz con alioli ('a banda').", "Capa fina para grano suelto."],
        ["Añade gambas peladas.", "Acompaña con pescado cocido del caldo aparte como manda la tradición."]
    )
    # 198
    add(
        "Raviolis de ricota y espinacas con mantequilla de salvia",
        "Pasta fresca rellena hervida al dente bañada en una salsa dorada de mantequilla avellana y hojas de salvia crujientes.",
        "Italia", 2, 10, 8, "Fácil",
        ["arroces-pastas", "cenas", "almuerzos", "vegetarianas", "rapidas", "internacional"],
        ["raviolis", "ricota", "salvia", "mantequilla avellana", "italiana"], ["Gluten", "Lácteos", "Huevo"],
        390, 14, 42, 19, "🥟", "#ca8a04",
        [("Raviolis frescos de ricota y espinacas", 250, "g", "despensa"), ("Mantequilla", 45, "g", "lacteos"), ("Hojas de salvia fresca", 10, "hojas", "frescos"), ("Queso parmesano rallado", 35, "g", "lacteos"), ("Pimienta negra y sal", 1, "pizca", "especias")],
        ["Cuece los raviolis en abundante agua con sal durante 3-4 min; escurre con espumadera.", "En una sartén derrite la mantequilla a fuego medio-bajo con las hojas de salvia fresca.", "Deja que la mantequilla se tueste despacio durante 3 min hasta que tome un tono dorado avellana ('beurre noisette') y la salvia quede crujiente.", "Pasa los raviolis cocidos a la sartén con 2 cucharadas de agua de cocción.", "Saltea suavemente 1 min bañando la pasta con la mantequilla de salvia.", "Sirve inmediatamente espolvoreando abundante parmesano y pimienta."],
        [4, 3, 1, 1],
        ["La mantequilla debe dorarse ligeramente sin quemarse para aportar sabor a nuez tostada.", "La salvia crujiente complementa la suavidad del relleno de ricota."],
        ["Usa tortellini o gnocchi.", "Usa pasta sin gluten rellena."]
    )
    # 199
    add(
        "Arroz caldoso marinero con gambas, almejas y rape",
        "Arroz de grano redondo cocinado en cazuela de barro en abundante caldo de pescado sabroso con rape tierno, gambas y almejas.",
        "España", 4, 20, 25, "Media",
        ["arroces-pastas", "pescados-mariscos", "almuerzos", "familiares"],
        ["arroz caldoso", "rape", "gambas", "almejas", "cazuela barro"], ["Pescado", "Crustáceos", "Moluscos"],
        420, 28, 54, 11, "🥘", "#ea580c",
        [("Arroz bomba", 250, "g", "despensa"), ("Rape limpio en dados", 300, "g", "carnes"), ("Gambas frescas", 12, "unidades", "carnes"), ("Almejas frescas lavadas", 200, "g", "carnes"), ("Cebolla y pimiento picados", 1, "taza", "frescos"), ("Tomate maduro rallado", 2, "unidades", "frescos"), ("Fumet de pescado caliente", 1.2, "l", "despensa"), ("Azafrán y pimentón dulce", 1, "cucharadita", "especias"), ("Aceite de oliva virgen y sal", 40, "ml", "despensa")],
        ["En cazuela de barro con aceite saltea las gambas 1 min por lado; retira y pela reservando colas.", "Dora los dados de rape 2 min; retira.", "En el mismo aceite sofríe cebolla y pimiento 8 min; añade el tomate rallado 4 min y el pimentón.", "Añade el arroz y rehoga 1 min.", "Vierte el fumet de pescado hirviendo con azafrán; cocina a fuego medio 12 min.", "Añade el rape, las almejas y las colas de gamba; cocina 4 min más hasta que las almejas se abran.", "Sirve caldoso al momento para que el arroz no se beba el caldo."],
        [2, 2, 8, 4, 1, 12, 4],
        ["El arroz caldoso se debe servir inmediatamente; si reposa demasiado, el grano absorbe todo el caldo y se pasa.", "Usa proporción de 4 a 5 partes de caldo por cada parte de arroz."],
        ["Usa merluza o calamar.", "Añade mejillones frescos."]
    )
    # 200
    add(
        "Pasta corta gratinada con salsa de cuatro quesos cremosa",
        "Plumas o macarrones envueltos en salsa aterciopelada de gorgonzola, parmesano, fontina y mozzarella gratinados con costra dorada.",
        "Italia", 4, 12, 20, "Fácil",
        ["arroces-pastas", "cenas", "almuerzos", "vegetarianas", "familiares", "internacional"],
        ["pasta cuatro quesos", "gratinado", "gorgonzola", "parmesano", "cremoso"], ["Gluten", "Lácteos"],
        510, 21, 56, 22, "🧀", "#f59e0b",
        [("Pasta corta penne o rigatoni", 350, "g", "despensa"), ("Queso gorgonzola dulce", 70, "g", "lacteos"), ("Queso mozzarella rallado", 100, "g", "lacteos"), ("Queso parmesano rallado", 50, "g", "lacteos"), ("Queso emmental o fontina", 60, "g", "lacteos"), ("Nata para cocinar o crema de leche", 200, "ml", "lacteos"), ("Nuez moscada y pimienta blanca", 1, "pizca", "especias"), ("Sal para la pasta", 1, "cucharada", "especias")],
        ["Hierve la pasta en agua con sal durante 8 min (un minuto menos de lo habitual); escurre.", "En una cazuela calienta la nata a fuego suave sin hervir.", "Añade los cuatro quesos troceados removiendo continuamente con cuchara hasta que se fundan en una crema homogénea y densa.", "Sazona la salsa con pimienta blanca y nuez moscada.", "Mezcla la pasta con la crema de quesos y viértela en una fuente refractaria.", "Espolvorea parmesano por encima y gratina a 210°C durante 8 min hasta que la superficie esté dorada y burbujeante."],
        [8, 4, 4, 2, 8],
        ["Fundir los quesos a fuego muy bajo con la nata evita que la grasa se separe.", "Plato contundente ideal para días frescos."],
        ["Usa pasta sin gluten.", "Añade espinacas o dados de jamón cocido."]
    )
    # 201
    add(
        "Arroz meloso de setas silvestres y queso manchego curado",
        "Arroz cocinado en cazuela con caldo concentrado de verduras, surtido de setas de temporada y mantecado con queso manchego.",
        "España", 4, 15, 22, "Fácil",
        ["arroces-pastas", "almuerzos", "cenas", "vegetarianas", "familiares"],
        ["arroz meloso", "setas", "queso manchego", "otoño", "cazuela"], ["Lácteos"],
        410, 13, 58, 14, "🍄", "#ca8a04",
        [("Arroz bomba", 300, "g", "despensa"), ("Setas variadas limpias troceadas", 350, "g", "frescos"), ("Cebolla y puerro picados", 1, "taza", "frescos"), ("Dientes de ajo laminados", 2, "unidades", "frescos"), ("Caldo vegetal caliente", 900, "ml", "despensa"), ("Queso manchego curado rallado", 60, "g", "lacteos"), ("Mantequilla o aceite de oliva", 30, "ml", "despensa"), ("Tomillo fresco y sal", 1, "cucharadita", "frescos")],
        ["En cazuela con aceite dora las setas a fuego vivo 5 min; retira la mitad para decorar.", "Añade la cebolla, puerro y ajos al fondo pochando 6 min a fuego medio.", "Incorpora el arroz bomba y rehoga 2 min.", "Vierte el caldo vegetal hirviendo (3 partes de caldo por una de arroz).", "Cocina a fuego medio durante 15 min removiendo de vez en cuando para que suelte almidón y quede meloso.", "Apaga el fuego, incorpora el queso manchego rallado y manteca removiendo 1 min.", "Decora con las setas reservadas y tomillo fresco."],
        [5, 6, 2, 15, 1, 2],
        ["Remover el arroz durante la cocción suelta almidón logrando la consistencia melosa perfecta.", "El queso manchego curado aporta un carácter profundo inconfundible."],
        ["Usa arroz carnaroli.", "Añade trufa rallada al final."]
    )
    # 202
    add(
        "Espaguetis al limone cremosos con albahaca fresca",
        "Pasta larga al dente envuelta en emulsión brillante de mantequilla, zumo y ralladura de limones maduros, parmesano y albahaca.",
        "Italia", 2, 5, 10, "Fácil",
        ["arroces-pastas", "cenas", "almuerzos", "vegetarianas", "rapidas", "internacional"],
        ["pasta al limone", "limón", "parmesano", "italiana", "cena ligera"], ["Gluten", "Lácteos"],
        420, 13, 54, 17, "🍋", "#fde047",
        [("Espaguetis de trigo", 200, "g", "despensa"), ("Limones bio (zumo y ralladura)", 2, "unidades", "frescos"), ("Mantequilla de calidad", 40, "g", "lacteos"), ("Queso parmesano rallado", 50, "g", "lacteos"), ("Hojas de albahaca fresca picadas", 8, "hojas", "frescos"), ("Pimienta negra molida y sal gruesa", 1, "pizca", "especias")],
        ["Cuece los espaguetis en agua con sal durante 8 min al dente.", "En una sartén amplia derrite la mantequilla a fuego suave con la ralladura fina de los limones 2 min sin quemar.", "Añade el zumo de limón y 4 cucharadas del agua caliente de cocción de la pasta batiendo con espátula.", "Escurre la pasta y viértela directamente en la sartén con la emulsión de limón.", "Añade el queso parmesano rallado y la albahaca picada a fuego muy bajo.", "Saltea vigorosamente durante 1 min hasta que la salsa cubra los espaguetis como una seda brillante.", "Sirve de inmediato con pimienta."],
        [8, 2, 1, 1, 1],
        ["Usa limones no tratados para aprovechar toda su cáscara fragante sin amargor.", "La mezcla del almidón de la pasta con el limón y la mantequilla crea una emulsión mágica."],
        ["Usa pasta sin gluten.", "Añade piñones tostados o ricota fresca por encima."]
    )
    # 203
    add(
        "Arroz con verduras de la huerta al azafrán en paellera",
        "Arroz seco cocinado en paellera con alcachofas tiernas, judías verdes, pimiento rojo, champiñones, azafrán en hebra y socarrat.",
        "España", 4, 20, 25, "Fácil",
        ["arroces-pastas", "vegetarianas", "veganas", "almuerzos", "familiares"],
        ["arroz verduras", "paella verduras", "alcachofas", "azafrán", "vegano"], [],
        380, 9, 64, 9, "🥘", "#f59e0b",
        [("Arroz bomba", 320, "g", "despensa"), ("Alcachofas limpias cortadas en cuartos", 3, "unidades", "frescos"), ("Judías verdes planas", 120, "g", "frescos"), ("Pimiento rojo en tiras y champiñones", 1, "taza", "frescos"), ("Tomate maduro rallado", 2, "unidades", "frescos"), ("Azafrán en hebras tostado", 1, "pizca", "especias"), ("Caldo vegetal caliente", 800, "ml", "despensa"), ("Aceite de oliva virgen extra y pimentón", 40, "ml", "despensa"), ("Sal y romero", 1, "cucharadita", "especias")],
        ["En la paellera dora las alcachofas y judías verdes en aceite durante 6 min a fuego medio; retira.", "Añade el pimiento rojo y champiñones sofriendo 5 min.", "Incorpora el tomate rallado y pimentón cocinando 3 min.", "Reincorpora las verduras, añade el arroz bomba y rehoga 2 min mezclando todo.", "Vierte el caldo vegetal hirviendo con el azafrán y sal; reparte el arroz uniformemente.", "Cocina a fuego fuerte 8 min y luego a fuego suave 10 min.", "Tuesta el fondo 1 min para el socarrat y deja reposar 5 min tapado antes de servir."],
        [6, 5, 3, 2, 8, 10, 1, 5],
        ["Limpiar bien las alcachofas retirando las hojas duras exteriores garantiza bocados tiernos.", "El socarrat crujiente de verduras es una delicia."],
        ["Añade garbanzos cocidos.", "Usa verduras de temporada como espárragos o habas frescas."]
    )
    # 204
    add(
        "Macarrones con pisto manchego y queso gratinado al horno",
        "Pasta corta mezclada con sofrito tradicional de calabacín, pimiento, cebolla y tomate casero, cubierta de queso gratinado.",
        "España", 4, 15, 25, "Fácil",
        ["arroces-pastas", "almuerzos", "cenas", "vegetarianas", "familiares", "economicas"],
        ["macarrones pisto", "gratinado", "verduras", "pasta casera"], ["Gluten", "Lácteos"],
        420, 15, 58, 14, "🧀", "#ea580c",
        [("Macarrones de trigo", 350, "g", "despensa"), ("Pisto manchego casero", 400, "g", "frescos"), ("Queso mozzarella o manchego rallado", 140, "g", "lacteos"), ("Aceite de oliva virgen y orégano", 15, "ml", "despensa"), ("Sal para la pasta", 1, "cucharada", "especias")],
        ["Hierve los macarrones en agua con sal durante 8 min al dente; escurre.", "Mezcla la pasta caliente con el pisto manchego en un bol grande.", "Vierte la mezcla en una fuente refractaria de horno.", "Cubre la superficie con abundante queso rallado y espolvorea orégano.", "Hornea y gratina a 200°C durante 12 min hasta que el queso esté dorado y burbujeante.", "Sirve caliente."],
        [8, 2, 12, 2],
        ["Una manera fabulosa de que toda la familia coma verduras con entusiasmo.", "Aprovecha el pisto que haya sobrado de otra comida."],
        ["Usa pasta sin gluten.", "Añade atún o carne picada si prefieres con proteína animal."]
    )

    # --- SOPAS Y CREMAS (16 recipes) ---
    # 205
    add(
        "Gazpacho andaluz tradicional refrescante con guarnición",
        "Sopa fría emulsionada de tomates pera muy maduros, pepino, pimiento verde, ajo suave, vinagre de jerez y aceite de oliva virgen.",
        "España", 4, 15, 0, "Fácil",
        ["sopas-cremas", "saludables", "vegetarianas", "veganas", "cenas", "rapidas", "economicas"],
        ["gazpacho", "andaluz", "sopa fría", "tomate", "verano", "hidratante"], [],
        130, 3, 11, 8, "🍅", "#dc2626",
        [("Tomates pera maduros carnosos", 1, "kg", "frescos"), ("Pimiento verde italiano", 1, "unidad", "frescos"), ("Pepino pequeño pelado", 1, "unidad", "frescos"), ("Diente de ajo pequeño sin germen", 0.5, "unidad", "frescos"), ("Aceite de oliva virgen extra de calidad", 50, "ml", "despensa"), ("Vinagre de Jerez", 20, "ml", "despensa"), ("Agua fría mineral", 100, "ml", "despensa"), ("Sal marina", 1, "cucharadita", "especias")],
        ["Lava y trocea los tomates, pimiento, pepino y el medio ajo.", "Pon todas las hortalizas en el vaso de la batidora con sal y vinagre de jerez.", "Tritura a máxima potencia durante 3 min hasta que quede totalmente líquido.", "Añade el aceite de oliva virgen extra en hilo con la batidora en marcha a media velocidad para emulsionar la sopa y volverla sedosa.", "Pasa por un colador fino si deseas una textura ultra lisa.", "Refrigera en la nevera durante al menos 2 horas antes de servir muy frío con tropezones de verduras."],
        [5, 3, 2, 120, 2],
        ["Emulsionar el aceite al final es lo que le da al gazpacho su característico color anaranjado y textura aterciopelada sin pan.", "Sírvelo helado."],
        ["Añade una rodaja de sandía o cerezas para un gazpacho frutal.", "Añade un trozo de pan blanco si prefieres gazpacho más espeso."]
    )
    # 206
    add(
        "Salmorejo cordobés espeso con virutas de jamón y huevo duro",
        "Crema fría densa elaborada con tomates maduros triturados con pan de telera, aceite de oliva virgen extra y ajo, coronada con jamón ibérico.",
        "España", 4, 15, 0, "Fácil",
        ["sopas-cremas", "almuerzos", "cenas", "economicas", "familiares"],
        ["salmorejo", "córdoba", "jamón", "huevo duro", "crema fría"], ["Gluten", "Huevo"],
        280, 8, 26, 16, "🥣", "#ea580c",
        [("Tomates pera maduros lavados", 1, "kg", "frescos"), ("Pan blanco de telera o masa madre duro", 150, "g", "despensa"), ("Aceite de oliva virgen extra excelente", 80, "ml", "despensa"), ("Diente de ajo pequeño", 0.5, "unidad", "frescos"), ("Vinagre de jerez y sal", 1, "cucharadita", "despensa"), ("Huevos duros picados para guarnición", 2, "unidades", "frescos"), ("Virutas de jamón ibérico", 50, "g", "carnes")],
        ["Tritura los tomates limpios en la batidora 2 min; pasa por colador para quitar pieles y semillas.", "Añade el pan duro troceado al jugo de tomate y deja ablandar 5 min.", "Añade el ajo sin germen y la sal.", "Tritura a máxima potencia hasta formar una pasta espesa.", "Vierte el aceite de oliva virgen en hilo mientras bates para emulsionar hasta que adquiera textura de crema densa que sostenga la cuchara.", "Refrigera al menos 2 horas.", "Sirve en cuencos coronando con huevo duro picado y virutas de jamón ibérico."],
        [2, 5, 3, 2, 120, 2],
        ["El salmorejo no lleva agua: su consistencia espesa se debe exclusivamente al pan de miga densa emulsionado con el aceite virgen.", "Usa un aceite monovarietal arbequina o picual suave."],
        ["Usa pan sin gluten para personas celíacas.", "Para versión vegana sustituye el jamón por dados de manzana o semillas tostadas."]
    )
    # 207
    add(
        "Sopa de pollo casera reconfortante con fideos y verduras",
        "Caldo dorado preparado a fuego lento con carcasa de pollo campero, puerro, zanahoria, apio y fideos finos.",
        "Internacional", 4, 15, 60, "Fácil",
        ["sopas-cremas", "cenas", "familiares", "economicas", "saludables"],
        ["sopa de pollo", "caldo casero", "fideos", "reconfortante", "antigripal"], ["Gluten"],
        210, 16, 24, 6, "🍲", "#eab308",
        [("Carcasa o cuartos de pollo campero", 600, "g", "carnes"), ("Puerro y ramas de apio", 2, "unidades", "frescos"), ("Zanahorias peladas", 2, "unidades", "frescos"), ("Cebolla tostada", 1, "unidad", "frescos"), ("Fideos finos de cabello de ángel", 100, "g", "despensa"), ("Agua fría mineral", 1.8, "l", "despensa"), ("Sal marina y perejil fresco", 1, "cucharada", "especias")],
        ["En una olla grande pon el pollo y las verduras limpias cubiertas con agua fría.", "Lleva a ebullición a fuego vivo y retira cuidadosamente toda la espuma con una espumadera.", "Baja el fuego al mínimo, tapa parcialmente y cocina a fuego suave durante 50 min.", "Cuela el caldo limpio a otra cazuela y desmenuza la carne de pollo y corta las zanahorias en rodajitas.", "Lleva el caldo colado a hervor, añade los fideos finos y cuece durante 4 min.", "Añade la carne de pollo desmenuzada y zanahorias.", "Sirve humeante espolvoreando perejil fresco."],
        [10, 50, 5, 4, 2],
        ["Tostar la cebolla cortada por la mitad en la sartén antes de meterla a la olla aporta un color dorado brillante precioso al caldo.", "Empezar siempre con agua fría extrae todos los jugos del hueso."],
        ["Usa fideos de arroz sin gluten.", "Añade un chorrito de zumo de limón para despejar la garganta."]
    )
    # 208
    add(
        "Sopa de cebolla francesa clásica gratinada con queso gruyère",
        "Cebollas caramelizadas a fuego muy lento en mantequilla, cocinadas en caldo de carne y gratinadas al horno sobre tosta de pan con gruyère.",
        "Francia", 4, 20, 50, "Media",
        ["sopas-cremas", "cenas", "almuerzos", "internacional"],
        ["sopa cebolla", "gratinada", "gruyère", "francesa", "reconfortante"], ["Gluten", "Lácteos"],
        320, 14, 28, 17, "🥣", "#b45309",
        [("Cebollas dulces cortadas en juliana fina", 5, "unidades", "frescos"), ("Mantequilla", 40, "g", "lacteos"), ("Harina de trigo", 1, "cucharada", "despensa"), ("Vino blanco seco o coñac", 80, "ml", "despensa"), ("Caldo de carne o vacuno de calidad", 1, "l", "despensa"), ("Rebanadas de pan baguette tostadas", 4, "unidades", "despensa"), ("Queso gruyère rallado abundante", 120, "g", "lacteos"), ("Tomillo fresco, sal y pimienta", 1, "cucharadita", "especias")],
        ["En una cazuela derrite la mantequilla y pocha las cebollas a fuego muy lento durante 30 min removiendo hasta que adquieran color marrón caramelo profundo.", "Añade la harina y cocina 2 min removiendo.", "Vierte el vino blanco desglasando el fondo 2 min.", "Añade el caldo de carne caliente y tomillo; cocina a fuego suave durante 20 min salpimentando.", "Reparte la sopa en cazuelas individuales de barro aptas para horno.", "Coloca una rebanada de pan tostado sobre la sopa y cubre generosamente con queso gruyère.", "Gratina en horno a 220°C durante 6 min hasta que el queso forme costra dorada burbujeante."],
        [30, 2, 2, 20, 6, 2],
        ["El único secreto de la auténtica sopa de cebolla es caramelizar la cebolla con infinita paciencia durante 30 minutos sin prisas.", "Servir hirviendo."],
        ["Usa caldo de verduras para opción vegetariana.", "Usa pan sin gluten."]
    )
    # 209
    add(
        "Minestrone italiano tradicional de verduras de la huerta y pasta",
        "Sopa densa campesina con dados de calabacín, zanahoria, judías verdes, alubias blancas cocidas, pasta corta y parmesano.",
        "Italia", 4, 20, 30, "Fácil",
        ["sopas-cremas", "almuerzos", "cenas", "vegetarianas", "familiares", "internacional"],
        ["minestrone", "verduras", "pasta", "alubias", "italiana"], ["Gluten", "Lácteos"],
        280, 11, 46, 6, "🍲", "#15803d",
        [("Zanahorias y calabacín en dados", 1, "taza", "frescos"), ("Patata pelada en cubitos", 1, "unidad", "frescos"), ("Judías verdes troceadas", 80, "g", "frescos"), ("Alubias blancas cocidas escurridas", 150, "g", "despensa"), ("Tomate maduro triturado", 150, "g", "despensa"), ("Pasta corta tipo dedales o ditalini", 80, "g", "despensa"), ("Caldo de verduras caliente", 1, "l", "despensa"), ("Corteza de queso parmesano y sal", 1, "unidad", "lacteos"), ("Aceite de oliva virgen extra y albahaca", 25, "ml", "despensa")],
        ["En una olla con aceite sofríe cebolla, zanahoria y apio 6 min.", "Añade patata, calabacín, judías verdes y tomate triturado sofriendo 4 min.", "Vierte el caldo vegetal caliente e introduce la corteza limpia de parmesano (aporta un sabor umami increíble).", "Cuece a fuego medio tapado durante 18 min.", "Añade la pasta corta y las alubias blancas cocidas; cuece 7 min hasta que la pasta esté al dente.", "Retira la corteza, añade albahaca fresca picada y sirve regado con aceite de oliva virgen y parmesano."],
        [6, 4, 18, 7, 2],
        ["Añadir una corteza limpia de queso parmesano a la cocción es el truco tradicional italiano para dar profundidad al caldo.", "Muy nutritiva."],
        ["Usa pasta sin gluten.", "Omite el queso para versión 100% vegana."]
    )
    # 210
    add(
        "Sopa azteca de tortilla tradicional mexicana",
        "Caldo aromático de jitomate asado con chile pasilla servido sobre tiras crujientes de tortilla, aguacate, queso y crema.",
        "México", 4, 20, 20, "Fácil",
        ["sopas-cremas", "cenas", "almuerzos", "internacional"],
        ["sopa azteca", "sopa tortilla", "chile pasilla", "aguacate", "mexicana"], ["Lácteos"],
        310, 11, 34, 15, "🥣", "#dc2626",
        [("Tortillas de maíz cortadas en tiras finas", 6, "unidades", "despensa"), ("Jitomates maduros asados", 4, "unidades", "frescos"), ("Chile pasilla seco desvenado", 2, "unidades", "especias"), ("Cebolla y dientes de ajo asados", 1, "unidad", "frescos"), ("Caldo de pollo o verduras", 1, "l", "despensa"), ("Rama de epazote fresco o cilantro", 1, "rama", "frescos"), ("Aguacate en cubos", 1, "unidad", "frescos"), ("Queso fresco panela en cubos", 80, "g", "lacteos"), ("Crema ácida y aceite para freír", 50, "g", "lacteos")],
        ["Fríe las tiras de tortilla en aceite caliente 2 min hasta que queden muy crujientes y doradas; escurre en papel.", "En el mismo aceite pasa un chile pasilla cortado en aros 10 segundos para dorar sin quemar; retira.", "Licúa los jitomates asados con la cebolla, ajo y el otro chile pasilla hidratado en agua caliente con un poco de caldo.", "Cuela la salsa en una cazuela con una cucharada de aceite caliente y sofríe 5 min.", "Vierte el resto del caldo caliente y la rama de epazote; cocina a fuego medio 12 min.", "Para servir: pon tiras de tortilla crujiente en platos hondos, vierte el caldo hirviendo y corona con aguacate, queso panela, crema y aros de chile pasilla crujiente."],
        [3, 1, 5, 12, 3],
        ["No dejes quemar el chile pasilla en el aceite para evitar amargor.", "El caldo caliente se echa justo al momento de comer para que la tortilla conserve crujiente."],
        ["Usa caldo de verduras para versión vegetariana.", "Añade chicharrón crujiente por encima."]
    )
    # 211
    add(
        "Crema suave de champiñones silvestres con tomillo fresco",
        "Champiñones y setas dorados a la cazuela con cebolla pochada y caldo aromatizado, triturados con un toque de nata y pimienta.",
        "Francia", 4, 12, 20, "Fácil",
        ["sopas-cremas", "cenas", "vegetarianas", "rapidas"],
        ["crema champiñones", "setas", "tomillo", "cremosa", "otoño"], ["Lácteos"],
        210, 6, 12, 16, "🥣", "#a16207",
        [("Champiñones limpios laminados", 500, "g", "frescos"), ("Cebolla picada", 1, "unidad", "frescos"), ("Dientes de ajo picados", 2, "unidades", "frescos"), ("Caldo de verduras caliente", 600, "ml", "despensa"), ("Nata para cocinar o crema", 100, "ml", "lacteos"), ("Mantequilla o aceite de oliva", 30, "g", "lacteos"), ("Tomillo fresco y pimienta negra", 1, "cucharadita", "frescos"), ("Sal", 1, "cucharadita", "especias")],
        ["En una cazuela derrite la mantequilla y sofríe la cebolla y ajos 5 min a fuego medio.", "Añade los champiñones y hojas de tomillo fresco salteando durante 8 min hasta que doren.", "Reserva unas láminas de champiñón dorado para decorar.", "Vierte el caldo de verduras caliente y cocina a fuego medio durante 10 min.", "Añade la nata líquida y tritura con la batidora a máxima potencia 2 min hasta que quede aterciopelada.", "Sirve caliente decorando con los champiñones reservados y hojitas de tomillo."],
        [5, 8, 10, 2, 2],
        ["Dorar bien los champiñones antes de añadir el caldo es el secreto de un color marrón dorado y sabor umami profundo.", "Sirve con picatostes."],
        ["Usa leche de avena o coco para opción vegana.", "Añade unas gotas de aceite de trufa."]
    )
    # 212
    add(
        "Caldo tlalpeño mexicano tradicional con pollo y garbanzos",
        "Caldo sustancioso de pollo con garbanzos cocidos, zanahoria, calabacita verde, aromatizado con chile chipotle y aguacate.",
        "México", 4, 20, 35, "Fácil",
        ["sopas-cremas", "almuerzos", "cenas", "carnes-pollo", "internacional"],
        ["caldo tlalpeño", "pollo", "garbanzos", "chipotle", "mexicano"], ["Lácteos"],
        360, 32, 28, 14, "🍲", "#ea580c",
        [("Pechuga de pollo cocida y deshebrada", 350, "g", "carnes"), ("Garbanzos cocidos escurridos", 200, "g", "despensa"), ("Calabacitas verdes en cubos", 2, "unidades", "frescos"), ("Zanahorias en rodajas", 2, "unidades", "frescos"), ("Caldo de pollo caliente", 1.2, "l", "despensa"), ("Chiles chipotles en adobo enteros", 2, "unidades", "despensa"), ("Rama de epazote fresco o cilantro", 1, "rama", "frescos"), ("Aguacate en cubos y queso panela", 1, "taza", "lacteos"), ("Gajos de lima y sal", 1, "unidad", "frescos")],
        ["En una olla pon el caldo de pollo caliente con las zanahorias y cocina 10 min.", "Añade los garbanzos cocidos, las calabacitas verdes y la rama de epazote; cocina 8 min más.", "Incorpora el pollo deshebrado y los chiles chipotles enteros; hierve suavemente 5 min para que el caldo absorba el toque ahumado sin picar en exceso.", "Sirve en boles hondos humeantes.", "Corona cada plato con cubos de aguacate, queso panela desmoronado y sirve con lima fresca."],
        [10, 8, 5, 2],
        ["Poner los chiles chipotles enteros permite regular el picante: quien quiera más puede deshacer el chile en su propio plato.", "Plato reconfortante y completísimo."],
        ["Usa caldo de pavo.", "Añade granos de maíz tierno."]
    )
    # 213
    add(
        "Vichyssoise francesa tradicional fría de puerros y patatas",
        "Crema aterciopelada clásica de la cocina francesa elaborada con la parte blanca del puerro, patata, caldo de ave y nata, servida muy fría.",
        "Francia", 4, 15, 25, "Fácil",
        ["sopas-cremas", "saludables", "cenas", "vegetarianas", "internacional"],
        ["vichyssoise", "puerros", "crema fría", "francesa", "refinada"], ["Lácteos"],
        210, 4, 20, 13, "🥣", "#f1f5f9",
        [("Puerros grandes (solo la parte blanca) en rodajas", 4, "unidades", "frescos"), ("Patatas medianas peladas y chascadas", 2, "unidades", "frescos"), ("Mantequilla", 35, "g", "lacteos"), ("Caldo de pollo suave o vegetal", 750, "ml", "despensa"), ("Nata líquida o leche entera", 120, "ml", "lacteos"), ("Cebollino fresco picado fino", 2, "cucharadas", "frescos"), ("Sal y pimienta blanca molida", 1, "pizca", "especias")],
        ["Lava muy bien los puerros retirando toda la tierra y córtalos en rodajas finas.", "En una cazuela derrite la mantequilla y pocha los puerros a fuego muy suave durante 10 min sin que tomen color dorado.", "Añade las patatas chascadas y rehoga 3 min.", "Vierte el caldo caliente y sala con pimienta blanca.", "Cuece a fuego suave tapado durante 20 min hasta que la patata esté muy tierna.", "Tritura a máxima potencia durante 2 min y pasa por colador fino.", "Añade la nata, mezcla y refrigera en la nevera durante al menos 3 horas.", "Sirve bien fría decorando con cebollino fresco picado."],
        [10, 3, 20, 2, 180, 2],
        ["No dejes dorar el puerro para conservar el color blanco marfil inmaculado característico.", "La pimienta blanca evita motas negras en la presentación."],
        ["Usa leche vegetal y aceite de oliva para versión vegana sin lácteos.", "Sírvela caliente en invierno si lo prefieres."]
    )
    # 214
    add(
        "Borsch tradicional de remolacha y verduras con crema agria",
        "Sopa roja intensa reconfortante elaborada con remolachas ralladas, col blanca, zanahoria, patata y servida con eneldo y crema agria.",
        "Ucrania", 4, 20, 35, "Fácil",
        ["sopas-cremas", "almuerzos", "cenas", "vegetarianas", "internacional"],
        ["borsch", "remolacha", "crema agria", "eneldo", "eslava"], ["Lácteos"],
        190, 5, 28, 7, "🥣", "#991b1b",
        [("Remolachas frescas peladas y ralladas gruesas", 2, "unidades", "frescos"), ("Col blanca o repollo en juliana fina", 150, "g", "frescos"), ("Patata mediana en cubitos", 1, "unidad", "frescos"), ("Zanahoria y cebolla picadas", 1, "taza", "frescos"), ("Tomate concentrado", 2, "cucharadas", "despensa"), ("Zumo de limón o vinagre de manzana", 1, "cucharada", "despensa"), ("Caldo vegetal o de carne", 1, "l", "despensa"), ("Crema agria (smetana) y eneldo fresco", 4, "cucharadas", "lacteos"), ("Aceite de oliva y sal", 25, "ml", "despensa")],
        ["En una olla con aceite sofríe cebolla y zanahoria 6 min.", "Añade la remolacha rallada, el tomate concentrado y el zumo de limón; cocina 8 min a fuego medio.", "Vierte el caldo caliente, añade las patatas y el repollo en juliana.", "Cocina a fuego lento durante 20 min hasta que todas las verduras estén tiernas y el caldo adquiera un color rubí brillante.", "Prueba de sal y rectifica el punto ácido con unas gotas de limón si es necesario.", "Sirve caliente en boles hondos coronando con una cucharada colmada de crema agria fría y eneldo fresco picado."],
        [6, 8, 20, 2],
        ["El ácido del limón o vinagre fija el color rojo rubí intenso de la remolacha impidiendo que se vuelva marrón.", "El contraste con la crema agria fría es sublime."],
        ["Añade alubias blancas cocidas.", "Para versión vegana usa yogur de soja sin azúcar."]
    )
    # 215
    add(
        "Crema de espárragos verdes trigueros con crujiente de jamón",
        "Espárragos verdes tiernos cocinados con puerro y patata, triturados finamente y decorados con puntas a la plancha y jamón crujiente.",
        "España", 4, 12, 18, "Fácil",
        ["sopas-cremas", "saludables", "cenas", "rapidas"],
        ["crema espárragos", "trigueros", "jamón crujiente", "primavera"], [],
        170, 8, 16, 8, "🥣", "#16a34a",
        [("Espárragos verdes trigueros frescos", 2, "manojos", "frescos"), ("Puerro (parte blanca) picado", 1, "unidad", "frescos"), ("Patata pequeña pelada", 1, "unidad", "frescos"), ("Caldo vegetal o de pollo suave", 600, "ml", "despensa"), ("Lonchas finas de jamón serrano", 2, "unidades", "carnes"), ("Aceite de oliva virgen extra", 25, "ml", "despensa"), ("Sal y pimienta blanca", 1, "pizca", "especias")],
        ["Corta las puntas de los espárragos y resérvalas; desecha la base leñosa dura y trocea los tallos tiernos.", "En una cazuela con aceite sofríe el puerro 5 min a fuego suave.", "Añade los tallos de espárrago y la patata troceada rehogando 3 min.", "Cubre con el caldo caliente y cuece 15 min hasta ablandar.", "Tritura a máxima potencia 2 min y pasa por colador chino para eliminar cualquier hebra.", "Saltea las puntas reservadas en sartén 3 min y hornea las lonchas de jamón entre papeles 5 min hasta dejarlas crujientes.", "Sirve la crema caliente decorada con las puntas y el jamón roto."],
        [5, 3, 15, 2, 5, 2],
        ["Pasar por colador chino garantiza una crema fina de textura sedosa sin fibras.", "El jamón crujiente aporta un toque salino crocante perfecto."],
        ["Para versión vegetariana omite el jamón y decora con piñones tostados.", "Sustituye caldo de pollo por caldo vegetal."]
    )
    # 216
    add(
        "Sopa castellana de fideos con picadillo de jamón y huevo duro",
        "Caldo claro y reconfortante de jamón serrano servido con fideos finos, huevo duro picado y taquitos de jamón crujientes.",
        "España", 4, 10, 15, "Fácil",
        ["sopas-cremas", "cenas", "almuerzos", "carnes-pollo", "economicas", "rapidas"],
        ["sopa picadillo", "jamón", "huevo duro", "fideos", "castellana"], ["Gluten", "Huevo"],
        220, 15, 26, 7, "🍲", "#eab308",
        [("Caldo casero de jamón y ave", 1.2, "l", "despensa"), ("Fideos finos de cabello de ángel", 120, "g", "despensa"), ("Huevos duros picados", 2, "unidades", "frescos"), ("Taquitos pequeños de jamón curado", 70, "g", "carnes"), ("Hojas de hierbabuena fresca", 4, "hojas", "frescos"), ("Picatostes de pan frito (opcional)", 30, "g", "despensa")],
        ["Pon a hervir el caldo de jamón en una cazuela a fuego medio-alto.", "Cuando rompa a hervir añade los fideos finos y cocina durante 3 min removiendo.", "Añade los taquitos de jamón curado y los huevos duros picados; cocina 1 min más.", "Apaga el fuego e incorpora las hojas de hierbabuena fresca para que aromaticen con el calor.", "Sirve humeante en platos soperos con picatostes."],
        [3, 1, 1, 2],
        ["La hoja de hierbabuena al final aporta el aroma inconfundible de las sopas tradicionales del sur de España.", "Rápida, económica y reconstituyente."],
        ["Usa fideos sin gluten.", "Añade pechuga de pollo cocida desmenuzada."]
    )
    # 217
    add(
        "Crema fina de puerros y manzana reineta al curry",
        "Sopa aterciopelada y fragante de puerros rehogados con manzana reineta ácida y suave toque de polvo de curry dulce.",
        "Internacional", 4, 12, 20, "Fácil",
        ["sopas-cremas", "saludables", "cenas", "vegetarianas", "veganas", "economicas"],
        ["crema puerros", "manzana", "curry", "cena ligera", "vegano"], [],
        150, 3, 24, 5, "🥣", "#facc15",
        [("Puerros limpios en rodajas", 3, "unidades", "frescos"), ("Manzanas reinetas peladas en dados", 2, "unidades", "frescos"), ("Curry dulce en polvo", 1, "cucharadita", "especias"), ("Caldo vegetal caliente", 600, "ml", "despensa"), ("Aceite de oliva virgen extra", 25, "ml", "despensa"), ("Sal y pimienta blanca", 1, "pizca", "especias")],
        ["En una cazuela calienta el aceite y sofríe los puerros 6 min a fuego medio.", "Añade los dados de manzana y el curry en polvo; rehoga 3 min.", "Vierte el caldo vegetal caliente y una pizca de sal.", "Cocina a fuego medio durante 15 min hasta que la manzana y los puerros estén muy tiernos.", "Tritura a máxima potencia durante 2 min hasta lograr una emulsión sedosa.", "Sirve caliente decorando con dados de manzana salteada o pipas."],
        [6, 3, 15, 2, 2],
        ["La manzana reineta aporta cuerpo y una acidez deliciosa que equilibra el dulzor del puerro sin necesidad de patata.", "Ligera y digestiva."],
        ["Añade leche de coco para mayor cremosidad.", "Sustituye curry por jengibre fresco."]
    )
    # 218
    add(
        "Caldo gallego tradicional con grelos, alubias y patatas",
        "Guisado tradicional de la aldea gallega con alubias blancas cocidas lentamente con patata gallega chascada, unto y grelos frescos.",
        "España", 6, 20, 70, "Media",
        ["sopas-cremas", "almuerzos", "familiares", "economicas"],
        ["caldo gallego", "grelos", "alubias", "unto", "galicia"], [],
        340, 16, 42, 12, "🍲", "#15803d",
        [("Alubias blancas remojadas", 300, "g", "despensa"), ("Patatas gallegas chascadas", 4, "unidades", "frescos"), ("Grelos frescos limpios troceados", 400, "g", "frescos"), ("Trocito de unto gallego tradicional", 25, "g", "carnes"), ("Hueso de jamón o espinazo salado desalado", 1, "unidad", "carnes"), ("Agua mineral", 2, "l", "despensa"), ("Sal gruesa", 1, "cucharadita", "especias")],
        ["En una olla grande pon el agua fría con las alubias remojadas, el hueso de jamón y el unto.", "Lleva a ebullición y cocina a fuego suave durante 50 min espumando.", "Retira el hueso de jamón y el unto.", "Añade las patatas chascadas y cocina 10 min.", "Lava los grelos retirando tallos gruesos, pícalos e incorpóralos a la olla.", "Cuece todo junto durante 15 min más hasta que las patatas se deshagan ligeramente y liguen el caldo.", "Deja reposar y sirve bien caliente."],
        [50, 10, 15, 10],
        ["El unto rancio de cerdo es el ingrediente auténtico que confiere al caldo gallego su sabor rural inconfundible.", "Al día siguiente está insuperable."],
        ["Usa repollo o berzas si no encuentras grelos de temporada.", "Para versión vegetariana omite el unto y hueso."]
    )
    # 219
    add(
        "Crema de coliflor asada con ajo confitado y almendras tostadas",
        "Ramilletes de coliflor dorados al horno con aceite y comino, batidos con caldo de verduras, ajo suave y almendra laminada.",
        "Internacional", 4, 12, 25, "Fácil",
        ["sopas-cremas", "saludables", "cenas", "vegetarianas", "veganas"],
        ["crema coliflor", "coliflor asada", "almendras", "keto", "antioxidante"], ["Frutos secos"],
        180, 6, 14, 12, "🥣", "#f1f5f9",
        [("Coliflor limpia en ramilletes", 600, "g", "frescos"), ("Dientes de ajo con piel", 4, "unidades", "frescos"), ("Almendras laminadas tostadas", 30, "g", "despensa"), ("Caldo de verduras caliente", 650, "ml", "despensa"), ("Aceite de oliva virgen extra", 30, "ml", "despensa"), ("Comino molido, sal y pimienta blanca", 1, "cucharadita", "especias")],
        ["Precalienta horno a 200°C.", "Dispón los ramilletes de coliflor y los ajos en una bandeja con aceite, sal y comino.", "Asa durante 20 min hasta que los bordes de la coliflor estén bien dorados.", "Pela los ajos asados y pon la coliflor en una olla con el caldo vegetal caliente.", "Hierve durante 5 min a fuego medio.", "Tritura a máxima potencia 2 min hasta dejarla muy fina y cremosa.", "Sirve en boles decorando con almendras laminadas tostadas y un hilo de aceite."],
        [20, 5, 2, 2],
        ["Asar la coliflor en vez de hervirla elimina cualquier olor desagradable y carameliza los azúcares aportando sabor a avellana.", "Textura de crema sin una sola gota de nata."],
        ["Añade nuez moscada rallada.", "Decora con semillas de sésamo o picatostes."]
    )
    # 220
    add(
        "Sopa campesina de verduras con judías pintas y acelgas",
        "Guisillo caliente y reconfortante de alubias pintas con hojas de acelga fresca, patatas, zanahorias y pimentón de la Vera.",
        "España", 4, 15, 45, "Fácil",
        ["sopas-cremas", "almuerzos", "cenas", "vegetarianas", "veganas", "economicas"],
        ["sopa campesina", "acelgas", "alubias pintas", "cuchara", "huerta"], [],
        290, 14, 46, 5, "🍲", "#b45309",
        [("Alubias pintas cocidas", 400, "g", "despensa"), ("Acelgas frescas limpias y troceadas", 250, "g", "frescos"), ("Patata mediana chascada", 1, "unidad", "frescos"), ("Zanahoria en rodajas", 1, "unidad", "frescos"), ("Cebolla y ajo picados", 1, "unidad", "frescos"), ("Tomate triturado", 2, "cucharadas", "despensa"), ("Pimentón dulce y laurel", 1, "cucharadita", "especias"), ("Caldo vegetal o agua", 800, "ml", "despensa"), ("Aceite de oliva virgen y sal", 30, "ml", "despensa")],
        ["En cazuela con aceite sofríe cebolla y ajo 5 min a fuego medio.", "Añade zanahoria, patata y tomate triturado sofriendo 4 min; añade el pimentón 20 segundos.", "Vierte el caldo caliente y laurel; cuece 12 min hasta que la patata esté casi tierna.", "Añade las acelgas troceadas y las alubias pintas cocidas.", "Cocina a fuego lento durante 10 min más para integrar los sabores.", "Prueba de sal y sirve bien caliente en plato hondo."],
        [5, 4, 12, 10, 2],
        ["Las acelgas aportan clorofila, hierro y ligereza al guisado de legumbres.", "Plato muy económico y saciante."],
        ["Usa espinacas en vez de acelgas.", "Añade arroz en grano para un plato aún más completo."]
    )
