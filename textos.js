// Lista de textos editables de la pagina. Cada texto tiene un nombre fijo (k),
// una etiqueta para el administrador, un tipo y el texto original (def).
// tipo: linea | parrafo | rico (admite *resaltado* y saltos de linea) | lista | regalo
window.TE_TEXTOS = [
 {g:'Menú', k:'menu_1', m:18, l:'Enlace 1 (lleva a los jabones)', t:'linea', def:'Jabones'},
 {g:'Menú', k:'menu_5', m:18, l:'Enlace 2 (lleva a las velas)', t:'linea', def:'Velas'},
 {g:'Menú', k:'menu_6', m:18, l:'Enlace 3 (catálogo completo)', t:'linea', def:'Ver todo'},
 {g:'Menú', k:'menu_2', m:18, l:'Enlace 4', t:'linea', def:'Ingredientes'},
 {g:'Menú', k:'menu_3', m:18, l:'Enlace 5', t:'linea', def:'Para regalar'},
 {g:'Menú', k:'menu_4', m:18, l:'Enlace 6', t:'linea', def:'Nosotros'},

 {g:'Portada', k:'hero_kicker', m:45, l:'Línea pequeña de arriba', t:'linea', def:'Hecho a mano · Naturaleza viva'},
 {g:'Portada', k:'hero_titulo', m:40, l:'Título grande', t:'rico', def:'Lo que nace\nde la *tierra*\nvuelve a ti.'},
 {g:'Portada', k:'hero_parrafo', m:180, l:'Párrafo', t:'parrafo', def:'Jabones y velas artesanales elaborados con ingredientes naturales, en pequeños lotes y con mucha calma. Para cuidar tu piel, tu hogar y el planeta.'},
 {g:'Portada', k:'hero_btn1', m:16, l:'Botón 1', t:'linea', def:'Descubrir'},
 {g:'Portada', k:'hero_btn2', m:16, l:'Botón 2', t:'linea', def:'Regalar Eden'},

 {g:'Frase de la marca', k:'frase_texto', m:140, l:'Frase', t:'rico', def:'No fabricamos productos.\nPreparamos pequeños *rituales* para que te detengas, respires y vuelvas a lo simple.'},
 {g:'Frase de la marca', k:'frase_firma', m:24, l:'Firma', t:'linea', def:'— Tierra Eden'},

 {g:'Colección', k:'col_kicker', m:24, l:'Línea pequeña', t:'linea', def:'La colección'},
 {g:'Colección', k:'col_titulo', m:40, l:'Título', t:'rico', def:'Tres maneras de *sentir* la tierra'},
 {g:'Colección', k:'prod1_nombre', m:20, l:'Producto 1: nombre', t:'linea', def:'Jabones'},
 {g:'Colección', k:'prod1_desc', m:100, l:'Producto 1: descripción', t:'parrafo', def:'Aceites vegetales, arcillas y hierbas. Espuma suave, aroma sutil, piel agradecida.'},
 {g:'Colección', k:'prod1_enlace', m:18, l:'Producto 1: enlace', t:'linea', def:'Ver jabones'},
 {g:'Colección', k:'prod2_nombre', m:20, l:'Producto 2: nombre', t:'linea', def:'Velas'},
 {g:'Colección', k:'prod2_desc', m:110, l:'Producto 2: descripción', t:'parrafo', def:'Cera natural y mecha de algodón. Una luz cálida que convierte cualquier rincón en refugio.'},
 {g:'Colección', k:'prod2_enlace', m:18, l:'Producto 2: enlace', t:'linea', def:'Ver velas'},
 {g:'Colección', k:'prod3_nombre', m:22, l:'Producto 3: nombre', t:'linea', def:'Cajas de regalo'},
 {g:'Colección', k:'prod3_desc', m:100, l:'Producto 3: descripción', t:'parrafo', def:'Jabón y vela, juntos y envueltos con cariño. El detalle que sí se recuerda.'},
 {g:'Colección', k:'prod3_enlace', m:20, l:'Producto 3: enlace', t:'linea', def:'Armar mi regalo'},

 {g:'Ingredientes', k:'ingr_kicker', m:28, l:'Línea pequeña', t:'linea', def:'Lo que hay adentro'},
 {g:'Ingredientes', k:'ingr_titulo', m:45, l:'Título', t:'rico', def:'Solo lo que la *tierra* ya sabe hacer'},
 {g:'Ingredientes', k:'ingr_lista', l:'Ingredientes (uno por línea)', t:'lista', def:'Lavanda\nAceite de oliva\nMiel\nAvena\nRomero\nCera de soya\nArcilla verde\nManteca de karité\nNaranja & canela'},
 {g:'Ingredientes', k:'ingr_nota', m:170, l:'Nota de abajo', t:'parrafo', def:'Sin colorantes sintéticos, sin plásticos innecesarios, sin apuros. Cada lote se elabora a mano y se deja reposar el tiempo que necesita.'},

 {g:'Productos', k:'cat_kicker', m:28, l:'Línea pequeña', t:'linea', def:'Nuestros productos'},
 {g:'Productos', k:'cat_titulo', m:45, l:'Título', t:'rico', def:'Hechos *a mano*, listos para ti'},
 {g:'Productos', k:'cat_agregar', m:22, l:'Botón de cada producto', t:'linea', def:'Agregar al pedido'},
 {g:'Productos', k:'cat_btn', m:34, l:'Enlace de solo este por WhatsApp', t:'linea', def:'Pedir solo este por WhatsApp'},
 {g:'Productos', k:'ped_titulo', m:20, l:'Título del pedido', t:'linea', def:'Mi pedido'},
 {g:'Productos', k:'ped_enviar', m:34, l:'Botón para enviar el pedido', t:'linea', def:'Enviar pedido por WhatsApp'},
 {g:'Productos', k:'cat_agotado', m:14, l:'Aviso cuando está agotado', t:'linea', def:'Agotado'},

 {g:'Regalo y Navidad', k:'reg_kicker', m:30, l:'Línea pequeña', t:'linea', def:'Navidad en Tierra Eden'},
 {g:'Regalo y Navidad', k:'reg_titulo', m:40, l:'Título', t:'rico', def:'El regalo que *huele* a hogar'},
 {g:'Regalo y Navidad', k:'reg_parrafo', m:170, l:'Párrafo', t:'parrafo', def:'Esta Navidad regala algo hecho con las manos, con tiempo y con intención. Algo que no se guarda en un cajón: se enciende, se usa, se disfruta.'},
 {g:'Regalo y Navidad', k:'reg_lista', l:'Cajas (una por línea: Nombre|detalle)', t:'regalo', def:'Caja Bosque|JABÓN + VELA\nCaja Miel & Canela|2 JABONES + VELA\nCaja Eden|EDICIÓN NAVIDAD'},
 {g:'Regalo y Navidad', k:'reg_btn', m:24, l:'Botón', t:'linea', def:'Pedir por WhatsApp'},

 {g:'Historia', k:'hist_kicker', m:24, l:'Línea pequeña', t:'linea', def:'Nuestra historia'},
 {g:'Historia', k:'hist_titulo', m:50, l:'Título', t:'rico', def:'Dos años, *muchas manos*\ny un mismo sueño'},
 {g:'Historia', k:'hist_p1', m:200, l:'Párrafo 1', t:'parrafo', def:'Tierra Eden empezó en una cocina, con unas pocas recetas y la idea de hacer las cosas bien. Hoy sigue creciendo igual que siempre: de persona en persona, de boca en boca.'},
 {g:'Historia', k:'hist_p2', m:100, l:'Párrafo 2', t:'parrafo', def:'Creemos que cuidar lo que usamos es una forma de cuidar el lugar donde vivimos.'},
 {g:'Historia', k:'hist_firma', m:34, l:'Firma', t:'linea', def:'— Con cariño, Tierra Eden'},

 {g:'Contacto y pie', k:'cont_titulo', m:45, l:'Título', t:'rico', def:'¿Hablamos? Te *escuchamos* con gusto.'},
 {g:'Contacto y pie', k:'cont_btn', m:32, l:'Botón', t:'linea', def:'Escríbenos por WhatsApp'},
 {g:'Contacto y pie', k:'pie', m:60, l:'Línea final', t:'linea', def:'© Tierra Eden · Hecho a mano, con calma'}
];
