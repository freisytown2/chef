# Batch 4: Navidad & Fin de Año (30 recipes: 15 Navidad + 15 Fin de Año)

def load_batch4(add):
    # --- NAVIDAD (15 recipes) ---
    # 71
    add(
        "Pavo asado relleno navideño tradicional",
        "Pavo entero dorado al horno relleno de carne picada, manzana, ciruelas pasas, piñones y bañado en salsa de jugo de asado al jerez.",
        "Internacional", 10, 45, 180, "Media",
        ["navidad", "familiares", "carnes-pollo", "cenas"],
        ["pavo relleno", "navidad", "asado", "festivo", "ciruelas pasas"], ["Frutos secos"],
        510, 48, 18, 26, "🦃", "#991b1b",
        [("Pavo entero limpio", 4, "kg", "carnes"), ("Carne picada mixta", 500, "g", "carnes"), ("Manzanas reinetas en dados", 2, "unidades", "frescos"), ("Ciruelas pasas sin hueso", 100, "g", "despensa"), ("Piñones tostados", 50, "g", "despensa"), ("Vino de Jerez o brandy", 150, "ml", "despensa"), ("Mantequilla en pomada", 80, "g", "lacteos"), ("Caldo de ave", 500, "ml", "despensa"), ("Sal, pimienta y tomillo", 1, "cucharada", "especias")],
        ["Precalienta horno a 180°C.", "En un bol mezcla la carne picada con manzana, ciruelas, piñones y jerez.", "Rellena la cavidad del pavo y ata las patas con hilo de cocina.", "Unta la piel generosamente con mantequilla, sal y tomillo.", "Hornea a 170°C durante 3 horas regando con el caldo y jugos cada 30 min.", "Sube a 200°C los últimos 15 min para dorar la piel y deja reposar 20 min antes de trinchar."],
        [20, 10, 5, 5, 180, 20],
        ["Untar mantequilla debajo de la piel de la pechuga evita que quede seca.", "El reposo previo al trinchado es indispensable para no perder jugos."],
        ["Usa pularda o capón asado.", "Sustituye piñones por nueces o castañas cocidas."]
    )
    # 72
    add(
        "Pierna de cerdo glaseada con piña y naranja navideña",
        "Pierna de cerdo asada a fuego lento con costra glaseada de jugo de piña, naranja, miel, clavo de olor y mostaza dijon.",
        "México", 8, 25, 150, "Media",
        ["navidad", "familiares", "carnes-pollo", "cenas", "internacional"],
        ["pierna cerdo", "glaseado", "piña", "naranja", "navidad mexicana"], [],
        530, 44, 22, 28, "🍖", "#c2410c",
        [("Pierna de cerdo deshuesada", 2.5, "kg", "carnes"), ("Rodajas de piña en su jugo", 1, "lata", "despensa"), ("Zumo de naranja natural", 300, "ml", "frescos"), ("Miel de abeja", 80, "g", "despensa"), ("Mostaza de Dijon", 2, "cucharadas", "despensa"), ("Clavos de olor enteros", 12, "unidades", "especias"), ("Dientes de ajo majados", 4, "unidades", "frescos"), ("Sal gruesa y pimienta", 1, "cucharada", "especias")],
        ["Haz incisiones en forma de rombo en la piel del cerdo e incrusta clavos de olor.", "Mezcla zumo de naranja, jugo de piña, miel, mostaza y ajo majado para el glaseado.", "Unta la pierna con sal gruesa y la mitad del glaseado.", "Hornea a 160°C durante 2 horas cubierto con papel aluminio.", "Retira el aluminio, decora con rodajas de piña y baña con el resto del glaseado.", "Hornea 30 min más a 190°C hasta que la superficie quede acaramelada."],
        [15, 10, 5, 120, 30, 15],
        ["Hornear tapado al principio asegura que el interior quede tierno como mantequilla.", "El clavo de olor aporta el inconfundible aroma festivo."],
        ["Usa lomo de cerdo en lugar de pierna.", "Sustituye piña por compota de manzana."]
    )
    # 73
    add(
        "Romeritos navideños con mole y tortitas de camarón seco",
        "Plato mexicano tradicional de quelites romeritos en salsa de mole poblano con patatas cambray, nopales y tortitas de camarón.",
        "México", 6, 35, 40, "Media",
        ["navidad", "cenas", "pescados-mariscos", "internacional"],
        ["romeritos", "mole", "camarón", "navidad", "tradición mexicana"], ["Crustáceos", "Huevo", "Frutos secos"],
        420, 24, 38, 20, "🍲", "#78350f",
        [("Romeritos limpios cocidos", 600, "g", "frescos"), ("Mole poblano en pasta", 250, "g", "despensa"), ("Camarón seco en polvo", 80, "g", "despensa"), ("Huevos (claras y yemas separadas)", 4, "unidades", "frescos"), ("Patatas cambray cocidas", 250, "g", "frescos"), ("Nopales cocidos en tiritas", 150, "g", "frescos"), ("Caldo de pollo o camarón", 800, "ml", "despensa"), ("Aceite para freír las tortitas", 100, "ml", "despensa")],
        ["Disuelve el mole en pasta en una cazuela con caldo caliente y cocina 15 min hasta que espese y brille.", "Añade los romeritos cocidos y escurridos, las patatas cambray y los nopales.", "Para las tortitas: bate claras a punto de nieve, añade yemas y el polvo de camarón seco con movimientos envolventes.", "Fríe cucharadas de masa en aceite caliente 1 min por lado dorando las tortitas; escurre en papel.", "Agrega las tortitas de camarón al mole con romeritos y hierve todo junto 5 min para que absorban la salsa."],
        [15, 15, 10, 5, 5],
        ["Limpia muy bien los romeritos quitando los tallos gruesos.", "Añadir las tortitas al final evita que se deshagan en el mole."],
        ["Puedes usar camarones enteros frescos en vez de polvo.", "Acompaña con pan bolillo o baguette crujiente."]
    )
    # 74
    add(
        "Bacalao a la mexicana navideño con alcaparras y aceitunas",
        "Lomos de bacalao desalado desmenuzado y guisado en salsa de tomate rojo, pimiento morrón, pasas, alcaparras y chiles güeros.",
        "México", 6, 25, 45, "Fácil",
        ["navidad", "pescados-mariscos", "familiares", "internacional"],
        ["bacalao a la vizcaína", "bacalao navideño", "alcaparras", "aceitunas"], ["Pescado"],
        380, 36, 16, 18, "🐟", "#dc2626",
        [("Bacalao desalado y desmenuzado", 800, "g", "carnes"), ("Tomates maduros picados", 1, "kg", "frescos"), ("Cebollas grandes picadas", 2, "unidades", "frescos"), ("Dientes de ajo picados", 4, "unidades", "frescos"), ("Aceitunas verdes rellenas", 100, "g", "despensa"), ("Alcaparras escurridas", 50, "g", "despensa"), ("Pimientos morrones asados en tiras", 2, "unidades", "despensa"), ("Chiles güeros en escabeche", 4, "unidades", "despensa"), ("Aceite de oliva virgen extra", 80, "ml", "despensa"), ("Patatas cambray cocidas", 200, "g", "frescos")],
        ["En una cazuela amplia calienta el aceite y sofríe la cebolla y el ajo durante 10 min.", "Añade los tomates picados y cocina a fuego medio 15 min hasta que se forme una salsa densa.", "Incorpora el bacalao desmenuzado y mezcla bien.", "Añade aceitunas, alcaparras, pimientos morrones y las patatas cambray.", "Cocina a fuego bajo durante 20 min removiendo ocasionalmente.", "Coloca los chiles güeros encima al final y deja reposar."],
        [10, 15, 5, 20, 5],
        ["Sabe infinitamente mejor al día siguiente servido en tortas o recalentado.", "Prueba de sal antes de añadir más, el bacalao y alcaparras aportan sal suficiente."],
        ["Usa merluza o abadejo desalado.", "Añade almendras fileteadas tostadas."]
    )
    # 75
    add(
        "Panettone artesanal navideño con pasas y fruta escarchada",
        "Bollo navideño tradicional de masa brioche aireada aromatizada con vainilla natural, naranja, pasas sultanas y naranja confitada.",
        "Italia", 8, 40, 45, "Difícil",
        ["navidad", "postres", "internacional"],
        ["panettone", "navidad", "brioche", "pasas", "repostería"], ["Gluten", "Huevo", "Lácteos"],
        390, 8, 54, 16, "🍞", "#eab308",
        [("Harina de fuerza", 500, "g", "despensa"), ("Levadura fresca de panadería", 25, "g", "despensa"), ("Mantequilla a temperatura ambiente", 150, "g", "lacteos"), ("Azúcar de caña", 120, "g", "despensa"), ("Yemas de huevo", 4, "unidades", "frescos"), ("Leche tibia", 150, "ml", "lacteos"), ("Pasas sultanas remojadas en ron", 100, "g", "despensa"), ("Naranja confitada en cubitos", 80, "g", "despensa"), ("Ralladura de naranja y vainilla", 1, "cucharada", "frescos"), ("Pizca de sal", 1, "pizca", "especias")],
        ["Prepara un prefermento con 100 g de harina, levadura y leche; deja levar 45 min.", "Añade el resto de harina, azúcar, yemas y amasa 10 min.", "Incorpora la mantequilla en pomada poco a poco amasando hasta obtener membrana fina.", "Añade las pasas escurridas y la naranja confitada integrando suavemente.", "Coloca en molde alto de panettone de 1 kg y deja levar 2 horas hasta que asome por el borde.", "Haz un corte en cruz arriba, coloca una nuez de mantequilla y hornea a 170°C durante 45 min.", "Pincha con brochetas en la base y enfría boca abajo suspendido entre dos ollas."],
        [45, 10, 15, 120, 45, 60],
        ["Enfriar el panettone boca abajo colgado evita que se colapse su estructura esponjosa.", "Amasar con paciencia hasta lograr el velo es indispensable."],
        ["Sustituye la fruta confitada por pepitas de chocolate negro.", "Usa agua de azahar para un toque de roscón."]
    )
    # 76
    add(
        "Galletas navideñas de jengibre y canela glaseadas",
        "Galletas crujientes y especiadas con jengibre molido, canela, nuez moscada y miel, decoradas con glaseado real blanco.",
        "Internacional", 8, 25, 12, "Fácil",
        ["navidad", "postres", "rapidas", "vegetarianas"],
        ["galletas jengibre", "navidad", "especias", "muñeco jengibre"], ["Gluten", "Huevo", "Lácteos"],
        180, 3, 28, 7, "🍪", "#b45309",
        [("Harina de trigo de repostería", 300, "g", "despensa"), ("Mantequilla fría en dados", 120, "g", "lacteos"), ("Azúcar moreno", 100, "g", "despensa"), ("Huevo", 1, "unidad", "frescos"), ("Miel o melaza", 2, "cucharadas", "despensa"), ("Jengibre en polvo", 2, "cucharaditas", "especias"), ("Canela molida y nuez moscada", 1, "cucharadita", "especias"), ("Azúcar glas y limón para glasa", 150, "g", "despensa")],
        ["Mezcla harina, jengibre, canela y azúcar moreno en un bol.", "Añade la mantequilla y frota con las manos hasta hacer textura arenosa.", "Agrega el huevo y la miel, amasando brevemente hasta formar una bola firme; refrigera 30 min.", "Estira la masa con rodillo a 5 mm de grosor y corta con moldes navideños.", "Hornea a 180°C durante 11 min hasta que los bordes doren ligeramente.", "Deja enfriar en rejilla y decora con glaseado de azúcar glas batido con limón."],
        [10, 30, 10, 11, 15],
        ["Enfriar la masa estirada 10 min antes de cortar ayuda a que las figuras mantengan su forma perfecta.", "Guárdalas en lata de metal para que sigan crujientes semanas."],
        ["Usa harina sin gluten para celíacos.", "Sustituye mantequilla por margarina vegetal."]
    )
    # 77
    add(
        "Ensalada navideña de manzana con nuez y crema dulce",
        "Ensalada festiva mexicana de manzanas crujientes en cubitos con piña, nueces pecana picadas, pasas y aderezo de crema suave.",
        "México", 6, 15, 0, "Fácil",
        ["navidad", "ensaladas", "postres", "vegetarianas", "rapidas"],
        ["ensalada manzana", "navidad", "postre navideño", "nueces"], ["Lácteos", "Frutos secos"],
        220, 3, 32, 10, "🥗", "#16a34a",
        [("Manzanas amarillas o rojas crujientes", 4, "unidades", "frescos"), ("Piña en almíbar en cubos", 150, "g", "despensa"), ("Nueces troceadas", 60, "g", "despensa"), ("Pasas sultanas", 50, "g", "despensa"), ("Crema ácida o media crema", 150, "ml", "lacteos"), ("Leche condensada", 2, "cucharadas", "lacteos"), ("Cerezas en almíbar para decorar", 6, "unidades", "despensa")],
        ["Pela y corta las manzanas en cubitos pequeños.", "En un bol amplio mezcla la crema con la leche condensada y un par de cucharadas del jugo de la piña.", "Incorpora las manzanas picadas, la piña escurrida, las nueces y las pasas.", "Mezcla suavemente con una cuchara de madera.", "Refrigera en la nevera durante al menos 1 hora antes de servir.", "Sirve en copas decoradas con una cereza encima."],
        [10, 5, 60, 2],
        ["Añadir un poco del jugo de la piña a la crema evita que la manzana se oxide y da fluidez perfecta.", "Sírvela bien fría acompañando las carnes asadas."],
        ["Añade uvas verdes sin semillas en mitades.", "Usa yogur griego en lugar de crema para una versión más ligera."]
    )
    # 78
    add(
        "Tronco de Navidad clásico de chocolate (Bûche de Noël)",
        "Bizcocho genovés esponjoso enrollado con crema de trufa de chocolate negro y decorado imitando corteza de árbol con azúcar glas.",
        "Francia", 8, 35, 12, "Media",
        ["navidad", "postres", "internacional"],
        ["tronco navidad", "buche de noel", "chocolate", "repostería festiva"], ["Gluten", "Huevo", "Lácteos"],
        360, 7, 46, 18, "🪵", "#451a03",
        [("Huevos (claras y yemas separadas)", 4, "unidades", "frescos"), ("Azúcar de caña", 100, "g", "despensa"), ("Harina de trigo", 80, "g", "despensa"), ("Cacao puro en polvo", 30, "g", "despensa"), ("Chocolate negro para fundir", 200, "g", "despensa"), ("Nata para montar 35% MG", 250, "ml", "lacteos"), ("Azúcar glas para simular nieve", 2, "cucharadas", "despensa")],
        ["Bate yemas con 50 g de azúcar hasta blanquear.", "Monta claras a punto de nieve con el resto del azúcar.", "Integra con espátula la harina tamizada con el cacao.", "Extiende en bandeja plana con papel de horno y hornea a 180°C durante 10 min.", "Vuelca el bizcocho sobre un paño húmedo y enrolla de inmediato; deja enfriar enrollado.", "Funde chocolate con 100 ml de nata caliente y mezcla con el resto de nata montada para hacer la trufa.", "Desenrolla el bizcocho, rellena con la trufa, vuelve a enrollar, cubre con ganache dibujando vetas con tenedor y espolvorea azúcar glas."],
        [10, 10, 10, 20, 10],
        ["Enrollar el bizcocho caliente dentro de un paño húmedo evita que se quiebre.", "Dibuja las vetas de la corteza con las puntas de un tenedor."],
        ["Rellena con crema de castañas o dulce de leche.", "Usa harina de maíz para versión sin gluten."]
    )
    # 79
    add(
        "Cordero lechal asado al horno tradicional al romero",
        "Paletilla o pierna de lechazo asada lentamente en cazuela de barro con manteca, agua, sal gorda y romero fresco.",
        "España", 4, 15, 90, "Fácil",
        ["navidad", "fin-de-ano", "carnes-pollo", "familiares", "cenas"],
        ["lechazo", "cordero asado", "navidad", "cazuela de barro"], [],
        520, 42, 2, 38, "🍖", "#b45309",
        [("Paletillas de cordero lechal", 2, "unidades", "carnes"), ("Manteca de cerdo ibérico o aceite de oliva", 40, "g", "despensa"), ("Agua mineral", 250, "ml", "despensa"), ("Ramas de romero y tomillo", 2, "unidades", "frescos"), ("Sal gorda", 1, "cucharada", "especias"), ("Dientes de ajo enteros", 4, "unidades", "frescos")],
        ["Precalienta el horno a 170°C.", "Sazona el cordero con sal gorda y unta con la manteca de cerdo.", "Coloca el cordero en una cazuela de barro con la piel hacia abajo.", "Vierte el agua en el fondo de la cazuela sin mojar la carne y añade ajos y romero.", "Hornea a 160°C durante 60 min regando con el jugo del fondo.", "Dale la vuelta dejando la piel hacia arriba, sube a 200°C y hornea 30 min más hasta que la piel quede crujiente."],
        [10, 60, 5, 30, 10],
        ["El agua debe estar siempre en el fondo de la cazuela para aportar humedad sin mojar la piel.", "La piel debe quedar dorada y quebradiza."],
        ["Usa pierna de cabrito lechal.", "Acompaña con ensalada fresca de escarola y granada."]
    )
    # 80
    add(
        "Ponche navideño tradicional de frutas con caña y tejocote",
        "Bebida aromática caliente de frutas de temporada cocidas a fuego lento con piloncillo, canela, tejocotes, guayaba y jamaica.",
        "México", 8, 20, 40, "Fácil",
        ["navidad", "bebidas", "vegetarianas", "veganas", "internacional"],
        ["ponche navideño", "tejocote", "guayaba", "piloncillo", "caliente"], [],
        110, 1, 28, 0, "🍎", "#b91c1c",
        [("Agua purificada", 3, "l", "despensa"), ("Piloncillo o panela", 200, "g", "despensa"), ("Ramas de canela", 2, "unidades", "especias"), ("Tejocotes pelados", 200, "g", "frescos"), ("Guayabas en cuartos", 200, "g", "frescos"), ("Manzanas en dados", 2, "unidades", "frescos"), ("Caña de azúcar en bastoncitos", 150, "g", "frescos"), ("Ciruelas pasas", 80, "g", "despensa"), ("Flor de jamaica", 20, "g", "despensa")],
        ["En una olla grande hierve el agua con el piloncillo y la canela durante 15 min hasta disolver.", "Añade la caña de azúcar pelada y los tejocotes; hierve 10 min.", "Agrega las manzanas, guayabas, ciruelas pasas y la flor de jamaica.", "Baja el fuego y cocina a fuego lento durante 25 min hasta que la fruta esté suave y el ponche fragante.", "Sirve humeante en jarritos de barro con trozos de fruta y un bastón de caña."],
        [15, 10, 25, 5],
        ["Añadir la guayaba al final evita que se deshaga en el caldo.", "Se puede añadir un chorrito de ron o tequila ('con piquete') al gusto."],
        ["Usa peras o melocotones secos si no consigues tejocote.", "Endulza con azúcar moreno si no tienes piloncillo."]
    )
    # 81
    add(
        "Cochinillo asado estilo segoviano crujiente",
        "Cochinillo lechal asado al horno de leña o tradicional con agua y sal, piel crujiente dorada y carne que se deshace.",
        "España", 6, 15, 120, "Fácil",
        ["navidad", "fin-de-ano", "carnes-pollo", "familiares", "cenas"],
        ["cochinillo", "asado", "segovia", "crujiente", "fiesta"], [],
        580, 45, 1, 42, "🍖", "#ea580c",
        [("Medio cochinillo lechal limpio", 2.5, "kg", "carnes"), ("Manteca de cerdo ibérico", 30, "g", "despensa"), ("Agua mineral", 300, "ml", "despensa"), ("Sal gorda", 1, "cucharada", "especias"), ("Hojas de laurel", 2, "unidades", "especias")],
        ["Precalienta el horno a 180°C.", "Sazona el cochinillo por el lado interior con sal gorda.", "Colócalo en una bandeja con la piel hacia abajo sobre unos palillos de madera para que no toque el fondo.", "Vierte el agua con laurel en el fondo de la bandeja.", "Hornea a 170°C durante 70 min.", "Dale la vuelta dejando la piel hacia arriba, seca la piel, unta con una pizca de manteca y sal gorda.", "Sube el horno a 210°C y hornea 45 min hasta que la piel quede crujiente como cristal."],
        [10, 70, 5, 45, 10],
        ["Poner la carne sobre palos de madera evita que la piel hierva con el agua del fondo.", "La piel debe quedar tan crujiente que se pueda cortar con un plato."],
        ["Usa lechazo de cordero.", "Acompaña con puré de manzana asada."]
    )
    # 82
    add(
        "Turrón blando artesanal de almendras y miel (estilo Jijona)",
        "Dulce navideño español por excelencia elaborado con almendra marcona tostada molida, miel de azahar y clara de huevo.",
        "España", 8, 20, 15, "Media",
        ["navidad", "postres", "vegetarianas"],
        ["turrón jijona", "turrón blando", "almendras", "miel", "dulce navideño"], ["Frutos secos", "Huevo"],
        310, 8, 26, 20, "🍯", "#ca8a04",
        [("Almendras marconas tostadas sin sal", 300, "g", "despensa"), ("Miel pura de romero o azahar", 200, "g", "despensa"), ("Azúcar blanquilla", 100, "g", "despensa"), ("Clara de huevo montada", 1, "unidad", "frescos"), ("Canela molida", 1, "pizca", "especias")],
        ["Tritura las almendras tostadas en un procesador hasta obtener una pasta ligeramente oleosa.", "En un cazo pon la miel con el azúcar a fuego suave hasta disolver y alcanzar 120°C.", "Retira del fuego y añade la clara de huevo montada batiendo rápidamente para blanquear la masa sin que cuaje en hilos.", "Añade la almendra molida y la canela mezclando enérgicamente con cuchara de madera.", "Vierte la pasta caliente en un molde forrado con papel de hornear, prensa con peso encima y deja enfriar y reposar 48 horas."],
        [5, 10, 5, 5, 48],
        ["El reposo de dos días con peso encima permite que la pasta suelte sus aceites y adquiera la textura blanda untuosa.", "Tostar bien la almendra es la clave del sabor profundo."],
        ["Usa avellanas tostadas para una variante exquisita.", "Prepara turrón duro de Alicante sin triturar las almendras."]
    )
    # 83
    add(
        "Roscón de reyes tradicional aromatizado con agua de azahar",
        "Corona esponjosa de masa brioche navideña fermentada lentamente con agua de azahar, fruta escarchada y almendra laminada.",
        "España", 8, 40, 25, "Media",
        ["navidad", "postres", "desayunos"],
        ["roscón de reyes", "azahar", "navidad", "bollo tradicional"], ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
        340, 7, 52, 12, "👑", "#eab308",
        [("Harina de gran fuerza", 450, "g", "despensa"), ("Levadura fresca de panadería", 25, "g", "despensa"), ("Leche entera tibia", 130, "ml", "lacteos"), ("Azúcar de caña", 100, "g", "despensa"), ("Mantequilla en pomada", 80, "g", "lacteos"), ("Huevos camperos", 2, "unidades", "frescos"), ("Agua de azahar pura", 25, "ml", "despensa"), ("Ralladura de naranja y limón", 1, "cucharada", "frescos"), ("Frutas escarchadas y almendras laminadas", 80, "g", "despensa")],
        ["Prepara masa madre mezclando 50 g de harina, levadura y 80 ml de leche; deja levar en bola dentro de agua tibia hasta que flote.", "Amasa el resto de harina con azúcar, huevos, ralladuras, agua de azahar y la masa madre.", "Incorpora la mantequilla en pomada hasta obtener masa elástica; deja levar 2 horas.", "Forma la corona abriendo el agujero central con las manos aceitadas sobre la bandeja de horno.", "Deja levar 1 hora más, pinta con huevo batido, decora con fruta escarchada, almendra y azúcar humedecido.", "Hornea a 180°C durante 20 min hasta dorar uniformemente."],
        [40, 120, 10, 60, 20],
        ["El agua de azahar auténtica de farmacia o repostería aporta el inconfundible aroma tradicional.", "No hornees en exceso para que la miga se mantenga tierna y algodonosa."],
        ["Rellena con nata montada, crema pastelera o trufa de chocolate.", "Usa harina sin gluten con almidón de tapioca."]
    )
    # 84
    add(
        "Sopa de galets con pelota navideña tradicional catalana",
        "Caldo concentrado festivo con carnes de cocido servido con pasta gigante de galets rellena de carne picada sazonada.",
        "España", 6, 25, 90, "Media",
        ["navidad", "sopas-cremas", "familiares", "cenas"],
        ["sopa galets", "escudella", "pelota", "navidad catalana"], ["Gluten", "Huevo"],
        380, 28, 36, 14, "🍲", "#d97706",
        [("Pasta tradicional de galets gigantes", 250, "g", "despensa"), ("Carne picada de ternera y cerdo", 300, "g", "carnes"), ("Huevo", 1, "unidad", "frescos"), ("Miga de pan con leche, ajo y perejil", 50, "g", "despensa"), ("Caldo de cocido concentrado casero", 1.8, "l", "despensa"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Mezcla la carne picada con el huevo, miga escurrida, ajo, perejil y sal.", "Rellena los galets crudos con la mezcla de carne ayudándote de una manga pastelera o cucharilla.", "Pon a hervir el caldo de escudella en una olla grande.", "Cuando hierva introduce los galets rellenos con cuidado.", "Cocina a fuego medio durante 15 min hasta que la pasta esté al dente y el relleno cocido.", "Sirve bien caliente con caldo abundante en platos soperos."],
        [15, 10, 15, 5],
        ["Rellenar con manga pastelera ahorra tiempo y deja la carne bien compactada dentro de la pasta.", "El caldo debe ser denso y aromático elaborado con pollo, jamón y verduras."],
        ["Usa galets sin gluten.", "Si prefieres, cocina la carne formando pelotas grandes separadas en vez de rellenar la pasta."]
    )
    # 85
    add(
        "Besugo al horno navideño al estilo madrileño tradicional",
        "Pescado entero asado con cortes transversales rellenos de rodajas de limón, pan rallado con perejil y patatas panaderas.",
        "España", 4, 15, 30, "Fácil",
        ["navidad", "fin-de-ano", "pescados-mariscos", "cenas"],
        ["besugo al horno", "pescado navidad", "panaderas", "limón"], ["Pescado"],
        340, 36, 12, 15, "🐟", "#0284c7",
        [("Besugo entero limpio y escamado", 1.2, "kg", "carnes"), ("Patatas medianas en rodajas", 3, "unidades", "frescos"), ("Cebolla en juliana", 1, "unidad", "frescos"), ("Limones en rodajas finas", 2, "unidades", "frescos"), ("Dientes de ajo laminados", 3, "unidades", "frescos"), ("Pan rallado fino y perejil", 2, "cucharadas", "despensa"), ("Vino blanco seco", 100, "ml", "despensa"), ("Aceite de oliva virgen extra", 40, "ml", "despensa"), ("Sal gruesa", 1, "cucharadita", "especias")],
        ["Precalienta el horno a 190°C.", "Hornea las patatas y cebolla con un hilo de aceite y vino blanco durante 15 min en la bandeja.", "Haz tres cortes profundos en el lomo del besugo e introduce media rodaja de limón en cada corte.", "Coloca el besugo sobre las patatas precocidas.", "Espolvorea por encima con el pan rallado mezclado con perejil y sal.", "Hornea a 190°C durante 20 min.", "Dora los ajos laminados en aceite y riega el pescado justo antes de servir."],
        [15, 5, 20, 3, 2],
        ["No sobrecocines el besugo; la carne debe despegarse fácilmente de la espina central manteniéndose perlada.", "El pan rallado con perejil crea una costra protectora deliciosa."],
        ["Usa dorada o lubina grande si no consigues besugo.", "Acompaña con lombarda salteada con piñones y pasas."]
    )

    # --- FIN DE AÑO (15 recipes) ---
    # 86
    add(
        "Solomillo Wellington con salsa de oporto y duxelle de setas",
        "Solomillo de ternera envuelto en paté, sofrito fino de champiñones y hojaldre dorado crujiente al horno.",
        "Reino Unido", 6, 40, 35, "Difícil",
        ["fin-de-ano", "carnes-pollo", "cenas", "internacional"],
        ["solomillo wellington", "hojaldre", "duxelle", "fin de año", "gourmet"], ["Gluten", "Huevo", "Lácteos"],
        560, 44, 28, 30, "🥩", "#991b1b",
        [("Centro de solomillo de ternera", 900, "g", "carnes"), ("Lámina de hojaldre de mantequilla", 1, "unidad", "despensa"), ("Champiñones y setas picados finos (duxelle)", 400, "g", "frescos"), ("Lonchas de jamón ibérico", 6, "unidades", "carnes"), ("Chalotas y ajo picados", 2, "unidades", "frescos"), ("Huevo batido para pintar", 1, "unidad", "frescos"), ("Vino de Oporto para la salsa", 150, "ml", "despensa"), ("Caldo de carne y mantequilla", 200, "ml", "despensa"), ("Aceite de oliva, sal y pimienta", 1, "cucharada", "especias")],
        ["Sella el solomillo salpimentado a fuego muy vivo 2 min por lado; deja enfriar por completo.", "Sofríe setas y chalotas en sartén sin grasa hasta que evaporen toda el agua (duxelle seca).", "Extiende film transparente, coloca las lonchas de jamón, cubre con la duxelle y pon el solomillo en el centro.", "Enrolla firmemente con el film y refrigera 30 min para compactar.", "Envuelve el cilindro de carne en la masa de hojaldre sellando bien los bordes.", "Pinta con huevo batido, haz incisiones decorativas y hornea a 200°C durante 28 min.", "Deja reposar 10 min antes de cortar y sirve con reducción de oporto."],
        [10, 15, 30, 10, 28, 10],
        ["La duxelle de setas debe quedar completamente seca para que el hojaldre no se humedezca.", "El solomillo debe estar frío antes de envolver en hojaldre."],
        ["Usa solomillo de cerdo ibérico.", "Usa masa de hojaldre sin gluten."]
    )
    # 87
    add(
        "Carpaccio de buey con rúcula, lascas de parmesano y trufa",
        "Láminas ultrafinas de solomillo de buey crudo con aceite de trufa blanca, alcaparras, rúcula fresca y queso parmesano.",
        "Italia", 4, 15, 0, "Fácil",
        ["fin-de-ano", "aperitivos-fiestas", "cenas", "saludables", "internacional"],
        ["carpaccio buey", "parmesano", "trufa", "gourmet", "fin de año"], ["Lácteos"],
        210, 24, 2, 12, "🥩", "#dc2626",
        [("Solomillo de buey o ternera semicongelado", 300, "g", "carnes"), ("Rúcula fresca limpia", 80, "g", "frescos"), ("Lascas de queso parmesano curado", 50, "g", "lacteos"), ("Aceite de oliva virgen aromatizado con trufa", 30, "ml", "despensa"), ("Alcaparras pequeñas escurridas", 20, "g", "despensa"), ("Zumo de medio limón", 1, "cucharada", "frescos"), ("Sal en escamas y pimienta negra molida", 1, "pizca", "especias")],
        ["Corta el solomillo semicongelado en láminas translúcidas con cortadora o cuchillo muy afilado.", "Dispón las láminas cubriendo los platos sin amontonar.", "Aliña la carne con un hilo fino de zumo de limón y aceite de trufa.", "Coloca un bouquet de hojas de rúcula en el centro de cada plato.", "Distribuye las alcaparras y las lascas de queso parmesano.", "Remata con sal en escamas y pimienta negra recién molida."],
        [8, 3, 2, 2],
        ["Semicongelar la carne 45 min antes de cortar permite sacar láminas ultrafinas con facilidad.", "Sirve con tostas finas de pan crujiente."],
        ["Usa lomo de ternera madurada.", "Usa aceite de oliva virgen extra con limón si prefieres sin trufa."]
    )
    # 88
    add(
        "Canapés elegantes de salmón ahumado con queso crema al eneldo",
        "Tostitas crujientes con crema suave de queso aromatizada con limón y eneldo, coronadas con rosas de salmón ahumado y alcaparras.",
        "Internacional", 6, 20, 0, "Fácil",
        ["fin-de-ano", "aperitivos-fiestas", "pescados-mariscos", "rapidas"],
        ["canapés", "salmón ahumado", "queso crema", "eneldo", "tapas fiesta"], ["Gluten", "Pescado", "Lácteos"],
        170, 9, 12, 10, "🍢", "#f97316",
        [("Salmón ahumado en lonchas finas", 200, "g", "carnes"), ("Queso crema para untar", 150, "g", "lacteos"), ("Tostadas pequeñas gourmet o blinis", 18, "unidades", "despensa"), ("Eneldo fresco picado", 2, "cucharadas", "frescos"), ("Ralladura y zumo de medio limón", 1, "cucharadita", "frescos"), ("Alcaparras pequeñas", 2, "cucharadas", "despensa"), ("Pimienta rosa en grano", 1, "pizca", "especias")],
        ["En un bol mezcla el queso crema con el eneldo picado, ralladura de limón, pimienta y unas gotas de zumo.", "Unta una cucharadita colmada de crema sobre cada tosta o blini.", "Corta tiras de salmón ahumado y enróllalas formando pequeñas flores o lazos.", "Coloca una flor de salmón sobre la crema de queso.", "Decora con una alcaparra y una ramita diminuta de eneldo.", "Sirve en bandejas de fiesta frías."],
        [5, 5, 8, 2],
        ["Monta los canapés poco antes de servir para que la base de pan se conserve crujiente.", "El toque de ralladura de limón aporta frescura que corta la grasa del salmón."],
        ["Usa blinis de trigo sarraceno para versión sin gluten.", "Sustituye por trucha ahumada o bacalao ahumado."]
    )
    # 89
    add(
        "Crema fina de bogavante con crujiente de hojaldre",
        "Bisque aterciopelado elaborado con caparazones y carne de bogavante flambeados al coñac, verduras y nata fresca.",
        "Francia", 4, 25, 35, "Media",
        ["fin-de-ano", "sopas-cremas", "pescados-mariscos", "cenas"],
        ["crema bogavante", "bisque", "marisco", "gourmet", "fiesta"], ["Crustáceos", "Lácteos"],
        310, 18, 14, 20, "🦞", "#ea580c",
        [("Bogavante fresco troceado", 1, "unidad", "carnes"), ("Puerro, cebolla y zanahoria picados", 1, "taza", "frescos"), ("Tomate maduro triturado", 150, "g", "despensa"), ("Coñac o brandy", 50, "ml", "despensa"), ("Caldo de pescado o fumet", 700, "ml", "despensa"), ("Arroz blanco para espesar", 30, "g", "despensa"), ("Nata líquida", 80, "ml", "lacteos"), ("Aceite de oliva virgen", 30, "ml", "despensa"), ("Sal y pimienta blanca", 1, "pizca", "especias")],
        ["Dora el bogavante troceado en cazuela con aceite 5 min; flambea con el coñac con cuidado.", "Retira la carne de las pinzas y cola para decorar; reserva los caparazones.", "En la misma cazuela sofríe las verduras 8 min y añade el tomate 5 min.", "Machaca los caparazones en el sofrito para extraer sus jugos.", "Añade el arroz y el caldo de pescado caliente; hierve a fuego medio 20 min.", "Cuela presionando muy bien por colador chino; añade la nata y bate.", "Sirve caliente decorando con los trozos de carne de bogavante."],
        [5, 8, 5, 20, 5, 2],
        ["Machacar bien los caparazones durante la cocción es el secreto del sabor concentrado a marisco.", "El arroz espesa la crema de forma natural sin necesidad de harinas."],
        ["Usa gambones o langostinos si no consigues bogavante.", "Omite la nata para una versión más ligera."]
    )
    # 90
    add(
        "Uvas de la suerte caramelizadas con mousse de queso azul",
        "Aperitivo elegante de uvas blancas sin pepitas rebozadas en queso crema con gorgonzola y pistachos picados.",
        "España", 6, 20, 0, "Fácil",
        ["fin-de-ano", "aperitivos-fiestas", "vegetarianas", "rapidas"],
        ["uvas fin de año", "queso azul", "pistachos", "campanadas", "aperitivo"], ["Lácteos", "Frutos secos"],
        150, 5, 12, 10, "🍇", "#15803d",
        [("Uvas blancas grandes sin pepitas lavadas", 24, "unidades", "frescos"), ("Queso azul o gorgonzola cremoso", 100, "g", "lacteos"), ("Queso crema de untar", 80, "g", "lacteos"), ("Pistachos tostados pelados y picados", 60, "g", "despensa"), ("Miel de flores", 1, "cucharada", "despensa")],
        ["Bate en un bol el queso azul con el queso crema y la miel hasta lograr pasta suave y moldeable.", "Seca muy bien las uvas con papel de cocina.", "Cubre cada uva con una capa fina de la crema de quesos rodándola entre las palmas.", "Pasa de inmediato por los pistachos picados para que queden totalmente cubiertas.", "Refrigera 30 min en nevera para que el queso tome consistencia.", "Sirve pinchadas en brochetas individuales para brindar."],
        [5, 5, 10, 30, 2],
        ["Secar las uvas a fondo es indispensable para que el queso se adhiera sin resbalar.", "El contraste entre el dulzor fresco de la uva y la intensidad del queso azul es sublime."],
        ["Usa nueces picadas o almendras tostadas.", "Usa queso de cabra suave en vez de queso azul."]
    )
    # 91
    add(
        "Chuletitas de cordero lechal con costra crujiente de hierbas provenzales",
        "Chuletitas tiernas a la plancha cubiertas con un empanado fino de pan rallado, parmesano, perejil, tomillo y ajo.",
        "Francia", 4, 15, 10, "Fácil",
        ["fin-de-ano", "carnes-pollo", "cenas", "rapidas"],
        ["chuletillas cordero", "costra hierbas", "gourmet", "fin de año"], ["Gluten", "Lácteos"],
        380, 32, 8, 24, "🥩", "#b91c1c",
        [("Chuletitas de cordero lechal", 12, "unidades", "carnes"), ("Pan rallado fino o panko", 50, "g", "despensa"), ("Queso parmesano rallado", 30, "g", "lacteos"), ("Ajo picado muy fino", 1, "diente", "frescos"), ("Tomillo, romero y perejil picados", 2, "cucharadas", "frescos"), ("Mostaza de Dijon suave", 2, "cucharadas", "despensa"), ("Aceite de oliva virgen extra", 25, "ml", "despensa"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Mezcla en un plato el pan rallado con parmesano, ajo y hierbas picadas.", "Salpimienta las chuletitas de cordero.", "Pinta un lado de cada chuletita con una capa ligera de mostaza.", "Presiona el lado untado con mostaza en la mezcla de pan y hierbas.", "Dora en sartén con aceite 2 min por el lado de carne.", "Coloca en bandeja de horno y gratina a 220°C durante 4 min hasta que la costra esté dorada y crujiente."],
        [5, 2, 2, 2, 4],
        ["Cocinar muy poco tiempo mantiene el interior sonrosado y tierno.", "La mostaza actúa como pegamento sabroso para la costra de hierbas."],
        ["Usa chuletas de lomo de cerdo ibérico.", "Usa pan rallado sin gluten."]
    )
    # 92
    add(
        "Langostinos al cava flambeados con ajo y pimentón",
        "Langostinos frescos salteados en cazuela de barro con láminas de ajo, guindilla y reducción espumosa de cava brut.",
        "España", 4, 10, 10, "Fácil",
        ["fin-de-ano", "pescados-mariscos", "aperitivos-fiestas", "rapidas"],
        ["langostinos", "cava", "al ajillo", "marisco fiesta", "brindis"], ["Crustáceos"],
        220, 28, 3, 9, "🦐", "#ea580c",
        [("Langostinos frescos enteros", 16, "unidades", "carnes"), ("Cava brut seco de calidad", 150, "ml", "despensa"), ("Dientes de ajo laminados", 4, "unidades", "frescos"), ("Guindilla seca (opcional)", 1, "unidad", "especias"), ("Aceite de oliva virgen extra", 40, "ml", "despensa"), ("Perejil fresco picado y sal gruesa", 2, "cucharadas", "frescos")],
        ["En una cazuela de barro calienta el aceite y dora los ajos y la guindilla 2 min.", "Añade los langostinos enteros y dora a fuego vivo 2 min por lado.", "Vierte el cava brut y deja reducir a fuego vivo durante 3 min hasta evaporar el alcohol.", "Espolvorea perejil fresco picado y sal gruesa.", "Sirve inmediatamente burbujeante en la misma cazuela."],
        [2, 4, 3, 1],
        ["Usa cava seco para que la salsa no quede azucarada.", "No sobrecocines los langostinos para que la carne se mantenga firme y tersa."],
        ["Usa gambas rojas o cigalas.", "Sustituye cava por champán o vino blanco seco."]
    )
    # 93
    add(
        "Pastel de cabracho tradicional asturiano con salsa rosa",
        "Pudín cremoso de pescado de roca al horno al baño maría con tomate, huevos y nata, servido frío con tostas.",
        "España", 6, 20, 45, "Media",
        ["fin-de-ano", "pescados-mariscos", "aperitivos-fiestas"],
        ["pastel cabracho", "asturias", "pudín pescado", "entrante fiesta"], ["Pescado", "Huevo", "Lácteos"],
        240, 22, 6, 14, "🐟", "#dc2626",
        [("Carne limpia cocida de cabracho o merluza", 400, "g", "carnes"), ("Huevos camperos", 4, "unidades", "frescos"), ("Nata para cocinar", 200, "ml", "lacteos"), ("Tomate frito casero", 100, "g", "despensa"), ("Mantequilla para el molde", 15, "g", "lacteos"), ("Pan rallado para el molde", 20, "g", "despensa"), ("Salsa rosa y tostas finas para acompañar", 100, "g", "despensa"), ("Sal y pimienta", 1, "pizca", "especias")],
        ["Limpia el pescado cocido desmenuzándolo con cuidado de no dejar ninguna espina.", "En un vaso batidor pon el pescado, huevos, nata, tomate frito, sal y pimienta.", "Tritura hasta lograr una crema homogénea y densa.", "Vierte en molde de plum cake engrasado y espolvoreado con pan rallado.", "Hornea al baño maría a 170°C durante 45 min hasta que al pinchar con brocheta salga limpia.", "Deja enfriar en la nevera al menos 4 horas antes de desmoldar.", "Sirve con tostas y salsa rosa suave."],
        [10, 5, 45, 240, 5],
        ["Desespinar a conciencia con las manos es el paso más importante.", "Cocer al baño maría asegura una textura untuosa sin costra reseca."],
        ["Usa merluza y gambas si no tienes cabracho.", "Usa mayonesa casera o salsa tártara."]
    )
    # 94
    add(
        "Mousse ligera de champán o cava con frutos rojos frescos",
        "Postre aéreo y chispeante elaborado con reducción de cava brut, nata montada, claras batidas y culis de frambuesa.",
        "Francia", 6, 25, 5, "Media",
        ["fin-de-ano", "postres", "vegetarianas"],
        ["mousse cava", "champán", "postre fin de año", "burbujas", "elegante"], ["Huevo", "Lácteos"],
        210, 4, 22, 12, "🥂", "#fbbf24",
        [("Cava brut o champán", 200, "ml", "despensa"), ("Hojas de gelatina neutra", 4, "unidades", "despensa"), ("Nata para montar 35% MG", 200, "ml", "lacteos"), ("Claras de huevo pasteurizadas", 2, "unidades", "frescos"), ("Azúcar de caña", 80, "g", "despensa"), ("Frambuesas frescas para decorar", 100, "g", "frescos")],
        ["Hidrata las hojas de gelatina en agua fría 5 min.", "Calienta 50 ml de cava con el azúcar hasta disolver; añade la gelatina escurrida mezclando bien.", "Incorpora el resto del cava frío despacio para mantener las burbujas.", "Monta la nata bien fría y monta las claras a punto de nieve por separado.", "Cuando la mezcla de cava esté tibia, integra primero la nata montada con espátula y luego las claras con movimientos envolventes.", "Reparte en copas de cristal y refrigera en la nevera al menos 3 horas.", "Decora con frambuesas frescas al servir."],
        [5, 5, 5, 5, 180, 2],
        ["Integrar las claras al final con suavidad es lo que da la textura etérea.", "Servir en copas de champán realza la elegancia de la mesa."],
        ["Usa mosto de uva blanco para versión sin alcohol.", "Decora con grosellas o fresitas silvestres."]
    )
    # 95
    add(
        "Tarta milhojas con crema diplomática y azúcar glas",
        "Capas hojaldradas caramelizadas ultrafinas intercaladas con crema pastelera aligerada con nata y vainilla de Madagascar.",
        "Francia", 8, 30, 20, "Media",
        ["fin-de-ano", "postres", "vegetarianas"],
        ["milhojas", "hojaldre", "crema diplomática", "repostería festiva"], ["Gluten", "Huevo", "Lácteos"],
        320, 6, 42, 15, "🍰", "#f59e0b",
        [("Lámina de hojaldre rectangular de mantequilla", 1, "unidad", "despensa"), ("Leche entera", 400, "ml", "lacteos"), ("Yemas de huevo", 4, "unidades", "frescos"), ("Maicena (almidón de maíz)", 35, "g", "despensa"), ("Azúcar de caña", 90, "g", "despensa"), ("Vaina de vainilla", 1, "unidad", "especias"), ("Nata para montar", 150, "ml", "lacteos"), ("Azúcar glas para espolvorear", 30, "g", "despensa")],
        ["Pincha el hojaldre por toda la superficie, espolvorea azúcar glas y coloca otra bandeja encima con peso para que no suba.", "Hornea a 190°C durante 18 min hasta que quede caramelizado y crujiente; corta en 3 rectángulos iguales.", "Hierve leche con vainilla; bate yemas con azúcar y maicena; vierte la leche y cuaja la crema a fuego medio 3 min; enfría.", "Monta la nata y mézclala con la crema pastelera fría para formar la crema diplomática.", "Monta la tarta alternando láminas crujientes de hojaldre y crema con manga pastelera.", "Corona con abundante azúcar glas formando rombos."],
        [18, 5, 10, 5, 10],
        ["Hornear el hojaldre con peso encima asegura láminas planas, hojaldradas y crujientes.", "Monta poco antes de comer para que el hojaldre no se ablande."],
        ["Añade frambuesas frescas entre las capas de crema.", "Usa hojaldre sin gluten."]
    )
    # 96
    add(
        "Jamón ibérico de bellota con tostas de pan de cristal y tomate",
        "Lonchas finas de jamón ibérico recién cortado servidas a temperatura ambiente sobre tostas crujientes de pan de cristal con tomate y virgen extra.",
        "España", 4, 10, 5, "Fácil",
        ["fin-de-ano", "aperitivos-fiestas", "carnes-pollo", "rapidas"],
        ["jamón ibérico", "pan con tomate", "pan cristal", "tapa gourmet"], ["Gluten"],
        280, 20, 16, 16, "🥓", "#991b1b",
        [("Jamón ibérico de bellota en lonchas finas", 150, "g", "carnes"), ("Barras de pan de cristal o chapata", 2, "unidades", "despensa"), ("Tomates maduros de colgar", 2, "unidades", "frescos"), ("Aceite de oliva virgen extra arbequina", 30, "ml", "despensa"), ("Sal marina en escamas", 1, "pizca", "especias")],
        ["Saca el jamón ibérico de la nevera 30 min antes para que temple a unos 22°C y sude su grasa natural.", "Abre el pan de cristal longitudinalmente y tuéstalo a fuego fuerte hasta que quede muy crujiente.", "Frota el tomate maduro cortado por la mitad sobre la miga caliente del pan.", "Riega generosamente con aceite de oliva virgen extra arbequina y sal.", "Dispón las lonchas de jamón ibérico sueltas y onduladas por encima.", "Sirve de inmediato."],
        [30, 4, 2, 2],
        ["El jamón debe comerse templado para que la grasa se funda en el paladar.", "El pan de cristal tiene corteza fina y aireada perfecta para no robar protagonismo al jamón."],
        ["Usa paletilla ibérica o cecina de León curada.", "Usa pan sin gluten tostado."]
    )
    # 97
    add(
        "Vieiras gratinadas a la gallega con jamón y cebolla pochada",
        "Vieiras en su concha con sofrito tradicional de cebolla picada fina, jamón ibérico en taquitos, pimentón y pan rallado dorado.",
        "España", 4, 15, 15, "Fácil",
        ["fin-de-ano", "pescados-mariscos", "aperitivos-fiestas", "cenas"],
        ["vieiras", "a la gallega", "marisco", "concha", "gratinado"], ["Moluscos", "Gluten"],
        220, 21, 10, 10, "🐚", "#dc2626",
        [("Vieiras limpias con su concha", 8, "unidades", "carnes"), ("Cebolla dulce picada muy fina", 1, "unidad", "frescos"), ("Taquitos de jamón ibérico", 60, "g", "carnes"), ("Tomate maduro triturado", 3, "cucharadas", "despensa"), ("Vino blanco gallego (Albariño o Ribeiro)", 50, "ml", "despensa"), ("Pan rallado y perejil picado", 3, "cucharadas", "despensa"), ("Pimentón dulce", 1, "cucharadita", "especias"), ("Aceite de oliva virgen", 30, "ml", "despensa")],
        ["En una sartén pocha la cebolla a fuego muy suave durante 12 min sin que tome color oscuro.", "Añade el jamón ibérico y sofríe 1 min; incorpora el pimentón y el tomate.", "Vierte el vino blanco y deja reducir 3 min hasta obtener sofrito espeso.", "Coloca las conchas de vieira en bandeja de horno y salpimienta el molusco.", "Cubre cada vieira con una porción generosa de sofrito.", "Espolvorea con pan rallado y perejil picado.", "Gratina a 210°C durante 8 min hasta que dore la superficie."],
        [12, 1, 3, 2, 8],
        ["No sobrecocines la vieira en el horno para que no se vuelva gomosa.", "El toque de jamón ibérico aporta salinidad y aroma inigualables."],
        ["Usa zamburiñas preparadas de la misma manera.", "Usa pan rallado sin gluten."]
    )
    # 98
    add(
        "Medallones de solomillo de ternera al Pedro Ximénez con pasas",
        "Medallones jugosos sellados a la plancha bañados en una reducción aterciopelada y brillante de vino dulce Pedro Ximénez.",
        "España", 4, 10, 15, "Fácil",
        ["fin-de-ano", "carnes-pollo", "cenas", "rapidas"],
        ["solomillo", "pedro ximénez", "pasas", "gourmet", "reducción"], [],
        420, 36, 18, 19, "🥩", "#78350f",
        [("Medallones de solomillo de ternera gruesos", 4, "unidades", "carnes"), ("Vino dulce Pedro Ximénez", 200, "ml", "despensa"), ("Pasas sultanas sin pepitas", 40, "g", "despensa"), ("Caldo de carne oscuro", 100, "ml", "despensa"), ("Mantequilla fría en dados", 25, "g", "lacteos"), ("Aceite de oliva virgen extra", 20, "ml", "despensa"), ("Sal en escamas y pimienta recién molida", 1, "pizca", "especias")],
        ["En un cazo pon el Pedro Ximénez con las pasas y deja reducir a fuego medio durante 10 min a la mitad.", "Añade el caldo de carne y hierve 4 min más hasta espesar levemente; apaga el fuego y manteca batiendo con los dados de mantequilla fría.", "En una sartén bien caliente con aceite sella los medallones de solomillo 2.5 min por lado dejando el centro jugoso.", "Salpimienta la carne con sal en escamas.", "Sirve los medallones calientes salseando por encima con la reducción dulce y las pasas hidratadas."],
        [10, 4, 5, 2],
        ["Mantecar la reducción con mantequilla muy fría al final le da un brillo espejo y textura de terciopelo.", "Saca la carne de la nevera 30 min antes de cocinar."],
        ["Usa solomillo de cerdo ibérico.", "Acompaña con puré fino de patata o castañas."]
    )
    # 99
    add(
        "Almejas a la marinera tradicionales con vino fino y pimentón",
        "Almejas frescas abiertas al vapor en una salsa de ajo laminado, cebolla pochada, pimentón dulce, vino de Jerez y perejil.",
        "España", 4, 15, 10, "Fácil",
        ["fin-de-ano", "pescados-mariscos", "aperitivos-fiestas", "rapidas"],
        ["almejas", "a la marinera", "vino fino", "tapa fiesta", "marisco"], ["Moluscos", "Gluten"],
        180, 18, 8, 7, "🐚", "#d97706",
        [("Almejas finas o babosas vivas", 600, "g", "carnes"), ("Cebolla picada fina", 0.5, "unidad", "frescos"), ("Dientes de ajo laminados", 3, "unidades", "frescos"), ("Harina de trigo", 1, "cucharadita", "despensa"), ("Pimentón dulce de la Vera", 1, "cucharadita", "especias"), ("Vino fino de Jerez o blanco", 80, "ml", "despensa"), ("Aceite de oliva virgen extra", 30, "ml", "despensa"), ("Perejil fresco picado y sal", 2, "cucharadas", "frescos")],
        ["Pon las almejas en agua fría con sal durante 30 min para que suelten la arena; escurre.", "En una cazuela con aceite sofríe la cebolla y ajos 6 min a fuego medio.", "Añade la cucharadita de harina y el pimentón tostando 30 segundos sin quemar.", "Vierte el vino fino y deja reducir 2 min.", "Añade las almejas, tapa la cazuela y cocina a fuego vivo 3 min hasta que se abran todas.", "Desecha las que no se abran, espolvorea perejil fresco y sirve con pan para mojar."],
        [30, 6, 1, 2, 3],
        ["Tapar la cazuela concentra el vapor abriendo las almejas rápidamente sin resecarlas.", "Desecha cualquier almeja que permanezca cerrada tras la cocción."],
        ["Usa berberechos o chirlas frescas.", "Usa harina fina de maíz para opción sin gluten."]
    )
    # 100
    add(
        "Crema quemada tradicional con costra crujiente de azúcar",
        "Natilla sedosa aromatizada con canela en rama y corteza de limón, coronada con una lámina crujiente de azúcar caramelizado al soplete.",
        "España", 6, 20, 15, "Fácil",
        ["fin-de-ano", "postres", "vegetarianas"],
        ["crema catalana", "crema quemada", "caramelo", "canela", "limón"], ["Huevo", "Lácteos"],
        270, 6, 36, 12, "🍮", "#ea580c",
        [("Leche entera fresca", 500, "ml", "lacteos"), ("Yemas de huevo camperas", 4, "unidades", "frescos"), ("Azúcar de caña", 100, "g", "despensa"), ("Almidón de maíz (maicena)", 25, "g", "despensa"), ("Rama de canela", 1, "unidad", "especias"), ("Piel de medio limón sin parte blanca", 1, "unidad", "frescos"), ("Azúcar para caramelizar la superficie", 4, "cucharadas", "despensa")],
        ["Infusiona la leche con la rama de canela y la piel de limón a fuego suave durante 10 min sin hervir; cuela.", "En un bol bate las yemas con el azúcar y la maicena hasta que no haya grumos.", "Vierte la leche templada sobre las yemas batiendo continuamente.", "Pasa la mezcla a la cazuela a fuego medio-bajo removiendo sin parar con varillas hasta que espese con textura de crema (unos 5 min).", "Reparte en cazuelitas individuales de barro y deja enfriar en nevera al menos 2 horas.", "Justo antes de servir espolvorea una capa fina de azúcar y quema con soplete hasta crear costra dorada crujiente."],
        [10, 3, 5, 120, 2],
        ["Quemar el azúcar justo antes de comer asegura que la costra esté crujiente y caliente sobre la crema fría.", "Remover sin descanso a fuego suave evita que se corte el huevo."],
        ["Añade un toque de vainilla o licor de naranja.", "Usa leche vegetal espesa sin azúcar."]
    )
