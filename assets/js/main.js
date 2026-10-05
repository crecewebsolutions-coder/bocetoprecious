/**
 * PRECIOUS SEA SALT - OFFICIAL JAVASCRIPT ENGINE
 * Multi-Language (EN [Primary], ES, FR, PT, DE, IT)
 * Real-time Shopping Cart & On-Page Stripe Card Payment & WhatsApp Checkout
 * Official Courier Tracking Bridge (Zero Emojis, Luxury Typography)
 * Interactive Recipe Explorer & "Próximamente" Seasonings Handler
 */

// ==========================================================================
// 1. PRODUCTS DATA STORE
// ==========================================================================
const PRODUCTS = [
  {
    id: 'flor-de-sal',
    sku: 'PS-FDS-100',
    name: 'Colima Gourmet Flor de Sal – 100g Jar',
    category: 'pure-salt',
    price: 17.99,
    image: 'assets/usaestasfotos (5).webp',
    cardImage: 'assets/usaestasfotos (5).webp',
    badge: 'Best Seller',
    tags: ['Natural', 'Flavorful', 'Versatile'],
    bestFor: 'Meats, Vegetables, Eggs, Roasted Dishes',
    desc: 'Artisanal Flor de Sal harvested by hand from the coastal waters of Colima, Mexico. Known as the caviar of salt, forming delicate natural crystals on the water surface with pure flavor and rich ocean minerals.',
    weight: '100g (3.5 oz)',
    origin: 'Cuyutlán lagoon, Colima, Mexico',
    comingSoon: false
  },
  {
    id: 'fleur-de-sel',
    sku: 'PS-FDS-ART-100',
    name: 'Fleur de Sel Artisanal Sea Salt – 100g Jar',
    category: 'pure-salt',
    price: 17.99,
    image: 'assets/usaestasfotos (4).webp',
    cardImage: 'assets/usaestasfotos (4).webp',
    badge: 'Artisan Choice',
    tags: ['Delicate', 'Refined', 'Finishing'],
    bestFor: 'Salads, Seafood, Steak, Chocolate',
    desc: 'Delicate finishing salt crystals formed under the Mexican coastal sun. Dissolves gracefully on the palate, enhancing gourmet dishes with subtle crunch and balanced salinity without bitterness.',
    weight: '100g (3.5 oz)',
    origin: 'Colima, Mexico',
    comingSoon: false
  },
  {
    id: 'sal-marina',
    sku: 'PS-SM-1LB',
    name: 'Sal Marina Artesanal Natural – 1lb Pouch',
    category: 'pure-salt',
    price: 17.99,
    image: 'assets/usaestasfotos (8).webp',
    cardImage: 'assets/usaestasfotos (8).webp',
    badge: 'Everyday Essential',
    tags: ['Coarse', 'Natural', 'Everyday'],
    bestFor: 'Cooking, Grilling, Seasoning, Roasting',
    desc: 'Unrefined coarse artisan sea salt harvested through solar evaporation in traditional clay ponds. 100% natural, free of microplastics, additives or bleaches. Perfect for cooking and grilling.',
    weight: '1 lb (454g)',
    origin: 'Colima, Mexico',
    comingSoon: false
  },
  {
    id: 'condimento-ahumado',
    sku: 'PS-SMK-120',
    name: 'Sal Marina Ahumada Artesanal – 120g Jar',
    category: 'condimento',
    price: 19.99,
    image: 'assets/images/product-condimento-ahumado.jpg',
    cardImage: 'assets/images/product-condimento-ahumado.jpg',
    badge: 'Coming Soon',
    tags: ['Smoked', 'Applewood', 'Mesquite'],
    bestFor: 'Ribeyes, BBQ, Burgers, Grilled Veggies',
    desc: 'Slowly cold-smoked for 48 hours over organic applewood and wild mesquite coals. Imparts a profound campfire aroma and rich savory depth to roasted meats, steaks, and barbecue.',
    weight: '120g (4.2 oz)',
    origin: 'Colima, Mexico',
    comingSoon: true
  },
  {
    id: 'condimento-ajo-hierbas',
    sku: 'PS-GAR-120',
    name: 'Flor de Sal con Ajo Negro y Hierbas Finas – 120g Jar',
    category: 'condimento',
    price: 19.99,
    image: 'assets/images/product-condimento-ajo-hierbas.jpg',
    cardImage: 'assets/images/product-condimento-ajo-hierbas.jpg',
    badge: 'Coming Soon',
    tags: ['Black Garlic', 'Rosemary', 'Thyme'],
    bestFor: 'Pasta, Roasted Potatoes, Poultry, Artisan Breads',
    desc: 'An exquisite gastronomic seasoning fusing Colima fleur de sel with sweet balsamic black garlic notes, mountain rosemary, Mediterranean thyme, and organic cracked peppercorns.',
    weight: '120g (4.2 oz)',
    origin: 'Colima, Mexico',
    comingSoon: true
  },
  {
    id: 'condimento-chiltepin-citrico',
    sku: 'PS-CHL-110',
    name: 'Sal de Mar con Chile Chiltepín y Limón Criollo – 110g Jar',
    category: 'condimento',
    price: 18.99,
    image: 'assets/images/product-condimento-chiltepin-citrico.jpg',
    cardImage: 'assets/images/product-condimento-chiltepin-citrico.jpg',
    badge: 'Coming Soon',
    tags: ['Wild Chiltepín', 'Key Lime', 'Zesty Spice'],
    bestFor: 'Ceviches, Fresh Seafood, Guacamole, Cocktails & Tacos',
    desc: 'Sun-drenched Colima sea salt hand-crushed with fiery wild sonoran chiltepín peppers and dehydrated Mexican key lime zest. Delivers an unforgettable balance of heat, citrus, and mineral crunch.',
    weight: '110g (3.9 oz)',
    origin: 'Colima, Mexico',
    comingSoon: true
  }
];

// ==========================================================================
// 2. RECIPES DATA STORE (Explicit Salt References)
// ==========================================================================
const RECIPES = [
  {
    id: 'recipe-steak',
    title: 'Seared Ribeye Steak with Rosemary Garlic Butter',
    titleEs: 'Bife de Ribeye Sellado con Mantequilla de Romero y Ajo',
    category: 'Meats',
    categoryEs: 'Carnes',
    time: '25 Min',
    servings: '2-4 Servings',
    saltId: 'flor-de-sal',
    saltName: 'Colima Gourmet Flor de Sal – 100g Jar',
    image: 'assets/usaestasfotos (3).webp',
    desc: 'Thick prime ribeye steak seared in cast iron with browned garlic-rosemary butter, finished with crunchy flakes of Colima Flor de Sal.',
    descEs: 'Corte grueso de Ribeye prime sellado en sartén de hierro con mantequilla de ajo y romero, coronado con escamas crujientes de Flor de Sal de Colima.',
    ingredients: [
      '2 Prime bone-in ribeye steaks (1.5 inches thick)',
      '1 tablespoon Precious Colima Gourmet Flor de Sal',
      '3 tablespoons unsalted European butter',
      '3 crushed cloves of fresh garlic',
      '2 sprigs fresh rosemary',
      'Freshly cracked black pepper'
    ],
    instructions: [
      'Pat the steaks completely dry with paper towels and bring to room temperature for 30 minutes.',
      'Heat a heavy cast-iron skillet over high heat until smoking hot.',
      'Sear the ribeye for 3-4 minutes per side to develop a deep, caramelized golden crust.',
      'Reduce heat to medium, add butter, garlic, and rosemary. Spoon the foaming butter continuously over the steak for 2 minutes.',
      'Rest for 8 minutes on a cutting board to preserve internal juices.',
      'Slice thickly and finish with generous flakes of Colima Flor de Sal before serving.'
    ]
  },
  {
    id: 'recipe-ceviche',
    title: 'Pacific Coast Tuna & Shrimp Ceviche',
    titleEs: 'Ceviche Costero de Atún y Camarón Pacífico',
    category: 'Seafood',
    categoryEs: 'Mariscos',
    time: '20 Min',
    servings: '4 Servings',
    saltId: 'sal-marina',
    saltName: 'Sal Marina Artesanal Natural – 1lb Pouch',
    image: 'assets/images/recipe-ceviche.jpg',
    desc: 'Fresh sashimi-grade tuna and poached Pacific shrimp cured in Mexican key lime, diced avocado, and pure artisan sea salt.',
    descEs: 'Atún fresco grado sashimi y camarón del Pacífico curados con limón criollo, aguacate cremoso y sal marina artesanal pura.',
    ingredients: [
      '300g fresh yellowfin tuna diced in 1cm cubes',
      '200g cooked Pacific shrimp, peeled',
      '1 tablespoon Precious Sal Marina Artesanal Natural',
      'Fresh juice of 6 Mexican key limes',
      '1 ripe avocado diced',
      '1/2 red onion thinly sliced',
      'Fresh cilantro and warm corn tortilla chips'
    ],
    instructions: [
      'Place cubed tuna and shrimp in a chilled glass bowl.',
      'Pour freshly squeezed key lime juice over the seafood and toss gently.',
      'Season with unrefined Precious Sal Marina Artesanal Natural to cure and enhance the fresh ocean sweetness.',
      'Gently fold in diced avocado, red onion, and cilantro.',
      'Chill for 10 minutes and serve immediately with crisp corn tostadas.'
    ]
  },
  {
    id: 'recipe-chocolate',
    title: 'Dark Chocolate Fondant with Sea Salt Crystals',
    titleEs: 'Fondant de Chocolate Oscuro con Cristales de Fleur de Sel',
    category: 'Desserts',
    categoryEs: 'Postres',
    time: '30 Min',
    servings: '4 Servings',
    saltId: 'fleur-de-sel',
    saltName: 'Fleur de Sel Artisanal Sea Salt – 100g Jar',
    image: 'assets/usaestasfotos (7).webp',
    desc: 'Molten dark 70% chocolate cake with a velvety liquid center, contrasted by the delicate mineral crunch of Fleur de Sel.',
    descEs: 'Pastel volcán de chocolate amargo 70% cacao con centro líquido aterciopelado, contrastado por el crujido mineral de la Fleur de Sel.',
    ingredients: [
      '200g 70% dark Mexican cocoa chocolate',
      '100g unsalted butter',
      '3 large free-range eggs + 3 yolks',
      '60g unrefined cane sugar',
      '40g sifted all-purpose flour',
      '1 teaspoon Precious Fleur de Sel Artisanal Sea Salt'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F). Butter and dust 4 ramekins with cocoa powder.',
      'Melt the dark chocolate and butter gently in a heatproof bowl over simmering water.',
      'Whisk eggs, egg yolks, and sugar together until pale and airy.',
      'Gently fold the melted chocolate mixture into the eggs, then fold in the sifted flour.',
      'Divide into ramekins and bake for exactly 11-12 minutes until edges are set but center remains soft.',
      'Invert onto dessert plates, sprinkle generously with Fleur de Sel crystals, and serve warm.'
    ]
  }
];

// ==========================================================================
// 3. MULTI-LANGUAGE TRANSLATIONS DICTIONARY (EN [Primary], ES, FR, PT, DE, IT)
// ==========================================================================
const TRANSLATIONS = {
  en: {
    announcement: 'FAST SHIPPING ON ALL PRODUCTS | 100% NATURAL SEA SALT HARVESTED IN COLIMA, MEXICO',
    nav_home: 'Home',
    nav_catalog: 'Catalog',
    nav_shop_all: 'Shop All',
    nav_condiments: 'Condiments',
    nav_recipes: 'Recipes',
    nav_tracking: 'Track Order',
    nav_our_story: 'Our Story',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',

    // Submenu links
    sub_home_hero: 'Main Hero',
    sub_home_hero_desc: 'Origin and natural overview',
    sub_home_salts: 'The 3 Artisan Salts',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel & Sal Marina',
    sub_home_origin: 'Born in Colima',
    sub_home_origin_desc: 'Volcanic lagoons and sunny coast',
    sub_home_process: 'Water to Crystal',
    sub_home_process_desc: 'Traditional solar evaporation method',
    sub_home_guide: 'Salt Selector Guide',
    sub_home_guide_desc: 'Which salt matches your dishes',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'Delicate finishing caviar crystals',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Subtle crunch for chef plating',
    sub_cat_marina: 'Sal Marina Natural (1 lb)',
    sub_cat_marina_desc: 'Unrefined coarse everyday cooking salt',
    sub_cat_all: 'View Complete Catalog',
    sub_cat_all_desc: 'Explore all sizes and packages',

    sub_cond_ahumada: 'Wood Smoked Sea Salt',
    sub_cond_ahumada_desc: 'Cold-smoked over wild mesquite (Coming Soon)',
    sub_cond_ajo: 'Black Garlic & Fine Herbs',
    sub_cond_ajo_desc: 'Gourmet balsamic savory blend (Coming Soon)',
    sub_cond_chiltepin: 'Chiltepin Pepper & Lime',
    sub_cond_chiltepin_desc: 'Zesty Mexican citrus heat (Coming Soon)',
    sub_cond_all: 'Preview Coming Seasonings',
    sub_cond_all_desc: 'Join the priority launch notification list',

    sub_rec_steak: 'Prime Ribeye with Flor de Sal',
    sub_rec_steak_desc: 'Cast-iron seared with garlic butter',
    sub_rec_ceviche: 'Pacific Tuna & Shrimp Ceviche',
    sub_rec_ceviche_desc: 'Cured with natural coarse sea salt',
    sub_rec_chocolate: 'Dark Chocolate Molten Cake',
    sub_rec_chocolate_desc: 'Liquid cacao paired with Fleur de Sel',
    sub_rec_all: 'All Gourmet Recipes',
    sub_rec_all_desc: 'Step-by-step chef guides & pairings',

    sub_track_bridge: 'Track Package by Number',
    sub_track_bridge_desc: 'Direct bridge using owner-sent code',
    sub_track_couriers: 'Official Courier Directory',
    sub_track_couriers_desc: 'FedEx, DHL, Estafeta, Paquetexpress, UPS',
    sub_track_whatsapp: 'WhatsApp Tracking Support',
    sub_track_whatsapp_desc: 'Direct human concierge assistance',

    sub_story_origin: 'Cuyutlán Salt Marshes',
    sub_story_origin_desc: 'Pristine coastal lagoon ecosystem',
    sub_story_solar: '100% Solar & Hand Harvest',
    sub_story_solar_desc: 'Generations of salt-making heritage',
    sub_story_minerals: 'Living Oceanic Minerals',
    sub_story_minerals_desc: 'Naturally low sodium & rich trace elements',

    sub_faq_shipping: 'Shipping & Delivery Times',
    sub_faq_shipping_desc: 'Domestic Mexico and USA deliveries',
    sub_faq_usage: 'Culinary Usage & Storage',
    sub_faq_usage_desc: 'How to preserve artisan crystal crunch',
    sub_faq_payment: 'Payment & Guarantees',
    sub_faq_payment_desc: 'Stripe cards and WhatsApp orders',

    sub_contact_wa: 'Direct WhatsApp Concierge',
    sub_contact_wa_desc: 'Immediate response from our team',
    sub_contact_form: 'Send Us a Message',
    sub_contact_form_desc: 'Inquiries, questions and feedback',
    sub_contact_wholesale: 'Wholesale & Chefs',
    sub_contact_wholesale_desc: 'Restaurant and bulk supply options',

    // Hero
    hero_eyebrow: 'NATURALLY HARVESTED IN COLIMA, MEXICO',
    hero_title: 'A Pure Taste of Mexico.',
    hero_desc: 'Artisan sea salt, naturally harvested from the coastal waters of Colima, preserving its natural minerals and exceptional flavor.',
    hero_cta: 'Shop Our Salts',

    // Origin
    origin_eyebrow: 'OUR ORIGIN',
    origin_title: 'Born in Colima.',
    origin_desc: 'Between the Pacific waters, Mexican sun and generations of salt-making tradition, Precious sea salt celebrates salt in its purest form—natural, unrefined, and full of character.',
    origin_cta: 'Discover Our Story',

    // Three Salts
    salts_eyebrow: 'ARTISANAL COLLECTION',
    salts_title: 'Three Salts. One Natural Origin.',
    salts_subtitle: 'From delicate finishing crystals to versatile everyday sea salt, discover the Precious salt made for your table.',

    // Seasonings
    condiments_eyebrow: 'COMING SOON • NEW SPECIAL EDITIONS',
    condiments_title: '3 Gourmet Seasonings in Preparation.',
    condiments_subtitle: 'These artisan seasonings are currently in culinary development and will be released very soon. Sign up for early access.',
    coming_soon_badge: 'Coming Soon',
    coming_soon_btn: 'Notify Me at Launch',
    coming_soon_modal_title: 'Seasoning Release Alert',
    coming_soon_modal_desc: 'Leave your details to receive an exclusive early notification when this limited edition goes live.',

    // Guide
    guide_eyebrow: 'FIND YOUR PERFECT FINISH',
    guide_title: 'Which Salt Is Your Salt?',
    guide_subtitle: 'Different textures. Different uses. The same pure origin.',
    guide_learn_more: 'Learn More',

    // Process
    water_title: 'From Water to Crystal.',
    water_desc: 'Born from the coastal waters of Colima and naturally formed through solar evaporation, Precious sea salt celebrates a simple process shaped by water, sun and time.',
    water_step1: '01 — COASTAL WATERS',
    water_step2: '02 — SOLAR EVAPORATION',
    water_step3: '03 — NATURAL HARVEST',
    water_step4: '04 — YOUR TABLE',

    // Tracking
    tracking_eyebrow: 'CUSTOMER DIRECT BRIDGE',
    tracking_title: 'Track Your Order',
    tracking_subtitle: 'Received your tracking number via WhatsApp or email? Select your courier below and track your package directly on the official tracking portal.',
    tracking_step_1_title: '1. Receive Tracking Code',
    tracking_step_1_desc: 'Our owner manually sends your tracking number via WhatsApp or social media once shipped.',
    tracking_step_2_title: '2. Select Your Courier',
    tracking_step_2_desc: 'Enter your tracking code and choose whether your package travels via DHL, FedEx, Estafeta, etc.',
    tracking_step_3_title: '3. Official Real-Time Status',
    tracking_step_3_desc: 'Click the button to open the courier official platform directly with no complicated databases.',
    tracking_input_placeholder: 'Paste your tracking number here...',
    tracking_select_courier: 'Select your courier...',
    tracking_btn: 'Track on Official Portal',
    tracking_direct_couriers: 'Or visit your official courier directly:',
    tracking_wa_help: 'Have questions about your tracking number? Chat with us directly on WhatsApp',

    // Recipes
    recipes_eyebrow: 'A Little Salt. A Lot of Possibility.',
    recipes_title: 'FROM THE PRECIOUS TABLE',
    recipes_subtitle: 'Three dishes. Three salts. Endless culinary pairings.',
    recipes_view: 'View Recipe',
    recipes_more_info: 'More Information',
    recipes_ref_salt: 'Salt Reference:',

    // Newsletter
    newsletter_eyebrow: 'FROM COLIMA TO YOUR INBOX',
    newsletter_title: 'Stay Close to the Table.',
    newsletter_desc: 'Recipes, serving inspiration, product stories and simple ways to bring more flavor to everyday meals.',
    newsletter_placeholder: 'Enter your email address',
    newsletter_btn: 'Join Us',

    // Footer
    footer_care: 'CARE',
    footer_support: 'SUPPORT',
    footer_mission: 'OUR MISSION',
    footer_mission_text: 'At Precious, our mission is simple: to bring the natural character of Colima sea salt to everyday tables. Inspired by Mexico\'s coastal waters and generations of salt-making tradition, we celebrate salt in its purest form—natural, unrefined, and full of character.',
    footer_lang_label: 'Language',

    // Cart
    cart_title: 'Your Cart',
    cart_product_col: 'PRODUCT',
    cart_total_col: 'TOTAL',
    cart_empty: 'Your cart is empty',
    cart_start_shopping: 'Discover Our Salts',
    cart_subtotal: 'Estimated Total',
    cart_tax_note: 'Taxes, discounts and shipping calculated at checkout.',
    cart_btn_stripe_toggle: 'Pay with Card (Stripe)',
    cart_btn_wa: 'Order via WhatsApp',
    btn_add_to_cart: 'Add to Cart',
    added_to_cart: 'Product added to cart!',

    // Stripe Form
    stripe_title: 'Secure Stripe Card Payment',
    stripe_card_num: 'Card Number',
    stripe_expiry: 'MM / YY',
    stripe_cvc: 'CVC',
    stripe_name: 'Name on Card',
    stripe_zip: 'Postal Code',
    stripe_btn_pay: 'Pay with Stripe',
    stripe_secure_note: '256-Bit SSL Encrypted • Powered by Stripe',
    stripe_processing: 'Processing transaction securely with Stripe...',
    receipt_title: 'Payment Successful!',
    receipt_order: 'Order Confirmation',
    receipt_thank: 'Thank you for your order! Your artisan salt from Colima is being prepared.',
    receipt_btn_wa: 'Share Order to WhatsApp',
    receipt_btn_close: 'Done'
  },
  es: {
    announcement: 'ENVÍO RÁPIDO EN TODOS LOS PRODUCTOS | SAL DE MAR 100% NATURAL COSECHADA EN COLIMA, MÉXICO',
    nav_home: 'Inicio',
    nav_catalog: 'Catálogo',
    nav_shop_all: 'Tienda Completa',
    nav_condiments: 'Condimentos',
    nav_recipes: 'Recetas',
    nav_tracking: 'Rastrea tu Pedido',
    nav_our_story: 'Nuestra Historia',
    nav_faq: 'Preguntas Frecuentes',
    nav_contact: 'Contacto',

    sub_home_hero: 'Portada Principal',
    sub_home_hero_desc: 'Resumen natural y de origen',
    sub_home_salts: 'Las 3 Sales Artesanales',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel y Sal Marina',
    sub_home_origin: 'Nacida en Colima',
    sub_home_origin_desc: 'Laguna volcánica y sol del Pacífico',
    sub_home_process: 'Del Agua al Cristal',
    sub_home_process_desc: 'Método tradicional de evaporación solar',
    sub_home_guide: 'Guía de Selección',
    sub_home_guide_desc: 'Qué sal usar según tu platillo',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'El caviar de la sal para terminar carnes',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Crujido suave para alta cocina y postres',
    sub_cat_marina: 'Sal Marina Natural (1 lb)',
    sub_cat_marina_desc: 'Sal en grano sin refinar para cocina diaria',
    sub_cat_all: 'Ver Catálogo Completo',
    sub_cat_all_desc: 'Explora todas las presentaciones',

    sub_cond_ahumada: 'Sal Marina Ahumada Artesanal',
    sub_cond_ahumada_desc: 'Ahumada con leña de mezquite (Próximamente)',
    sub_cond_ajo: 'Ajo Negro y Hierbas Finas',
    sub_cond_ajo_desc: 'Toque balsámico y herbal gourmet (Próximamente)',
    sub_cond_chiltepin: 'Chile Chiltepín y Limón Criollo',
    sub_cond_chiltepin_desc: 'Sabor picante y cítrico mexicano (Próximamente)',
    sub_cond_all: 'Ver Próximos Lanzamientos',
    sub_cond_all_desc: 'Regístrate para recibir aviso de preventa',

    sub_rec_steak: 'Bife de Ribeye con Flor de Sal',
    sub_rec_steak_desc: 'Sellado al sartén con mantequilla de romero',
    sub_rec_ceviche: 'Ceviche de Atún y Camarón',
    sub_rec_ceviche_desc: 'Curado con sal marina artesanal',
    sub_rec_chocolate: 'Fondant de Chocolate Oscuro',
    sub_rec_chocolate_desc: 'Centro líquido coronado con Fleur de Sel',
    sub_rec_all: 'Todas las Recetas Gourmet',
    sub_rec_all_desc: 'Guías culinarias con maridajes de sal',

    sub_track_bridge: 'Rastrear por Número de Guía',
    sub_track_bridge_desc: 'Enlace directo con el código de la dueña',
    sub_track_couriers: 'Directorio de Paqueterías',
    sub_track_couriers_desc: 'Estafeta, DHL, FedEx, Paquetexpress, UPS',
    sub_track_whatsapp: 'Soporte por WhatsApp',
    sub_track_whatsapp_desc: 'Atención personalizada directa',

    sub_story_origin: 'Laguna de Cuyutlán',
    sub_story_origin_desc: 'Ecosistema de salinas ancestrales',
    sub_story_solar: 'Cosecha Solar y Manual',
    sub_story_solar_desc: 'Generaciones de sabiduría salinera',
    sub_story_minerals: 'Minerales Vivos del Océano',
    sub_story_minerals_desc: 'Naturalmente baja en sodio y rica en oligoelementos',

    sub_faq_shipping: 'Envíos y Tiempos de Entrega',
    sub_faq_shipping_desc: 'Envíos a todo México y Estados Unidos',
    sub_faq_usage: 'Uso en Cocina y Conservación',
    sub_faq_usage_desc: 'Cómo mantener el crujido del cristal',
    sub_faq_payment: 'Métodos de Pago y Garantías',
    sub_faq_payment_desc: 'Tarjeta Stripe y pedidos por WhatsApp',

    sub_contact_wa: 'Atención Directa WhatsApp',
    sub_contact_wa_desc: 'Respuesta inmediata de nuestro equipo',
    sub_contact_form: 'Enviar un Mensaje',
    sub_contact_form_desc: 'Dudas, pedidos especiales y sugerencias',
    sub_contact_wholesale: 'Venta Mayorista y Restaurantes',
    sub_contact_wholesale_desc: 'Abastecimiento profesional para chefs',

    hero_eyebrow: 'COSECHADA NATURALMENTE EN COLIMA, MÉXICO',
    hero_title: 'El Sabor Puro de México.',
    hero_desc: 'Sal marina artesanal, cosechada naturalmente en las aguas costeras de Colima, conservando sus minerales naturales y un sabor excepcional.',
    hero_cta: 'Comprar Nuestras Sales',

    origin_eyebrow: 'NUESTRO ORIGEN',
    origin_title: 'Nacida en Colima.',
    origin_desc: 'Entre las aguas del Pacífico, el sol mexicano y generaciones de tradición salinera, Precious Sea Salt celebra la sal en su forma más pura: natural, sin refinar y llena de carácter.',
    origin_cta: 'Conoce Nuestra Historia',

    salts_eyebrow: 'COLECCIÓN ARTESANAL',
    salts_title: 'Tres Sales. Un Origen Natural.',
    salts_subtitle: 'Desde delicados cristales para terminar platillos hasta sal marina versátil de uso diario, descubre la sal hecha para tu mesa.',

    condiments_eyebrow: 'PRÓXIMAMENTE • EDICIONES ESPECIALES',
    condiments_title: '3 Nuevos Condimentos Gourmet en Preparación.',
    condiments_subtitle: 'Estos condimentos artesanales están en fase final de formulación culinaria y se lanzarán muy pronto. Regístrate para aviso prioritario.',
    coming_soon_badge: 'Próximamente',
    coming_soon_btn: 'Avisarme al Lanzamiento',
    coming_soon_modal_title: 'Aviso de Lanzamiento',
    coming_soon_modal_desc: 'Déjanos tu correo o WhatsApp para avisarte en el momento exacto en que salga esta edición especial.',

    guide_eyebrow: 'ENCUENTRA TU TERMINADO PERFECTO',
    guide_title: '¿Cuál es tu sal ideal?',
    guide_subtitle: 'Diferentes texturas. Diferentes usos. El mismo origen puro.',
    guide_learn_more: 'Conocer Más',

    water_title: 'Del Agua al Cristal.',
    water_desc: 'Nacida de las aguas costeras de Colima y formada naturalmente mediante evaporación solar, Precious celebra un proceso guiado por agua, sol y tiempo.',
    water_step1: '01 — AGUAS COSTERAS',
    water_step2: '02 — EVAPORACIÓN SOLAR',
    water_step3: '03 — COSECHA NATURAL',
    water_step4: '04 — TU MESA',

    tracking_eyebrow: 'PUENTE DIRECTO CON LA CLIENTA',
    tracking_title: 'Rastrea tu Pedido',
    tracking_subtitle: '¿Recibiste tu número de guía por WhatsApp o redes sociales? Elige tu paquetería y consulta el estatus en tiempo real directamente en su portal oficial.',
    tracking_step_1_title: '1. Recibe tu Número de Guía',
    tracking_step_1_desc: 'La dueña te envía manualmente tu código de rastreo por WhatsApp al momento de despachar tu paquete.',
    tracking_step_2_title: '2. Selecciona la Paquetería',
    tracking_step_2_desc: 'Ingresa tu número de guía y selecciona si tu paquete viaja por DHL, FedEx, Estafeta, etc.',
    tracking_step_3_title: '3. Estatus Oficial en Tiempo Real',
    tracking_step_3_desc: 'Haz clic en el enlace para ir directo al rastreo oficial sin necesidad de bases de datos complejas.',
    tracking_input_placeholder: 'Pega tu número de guía aquí...',
    tracking_select_courier: 'Selecciona tu paquetería...',
    tracking_btn: 'Rastrear en Portal Oficial',
    tracking_direct_couriers: 'O entra directo a tu paquetería oficial:',
    tracking_wa_help: '¿Tienes dudas con tu número de guía? Escríbenos directamente por WhatsApp',

    recipes_eyebrow: 'Un Poco de Sal. Una Infinitud de Posibilidades.',
    recipes_title: 'DESDE LA MESA PRECIOUS',
    recipes_subtitle: 'Tres platillos. Tres sales. Infinitas combinaciones culinarias.',
    recipes_view: 'Ver Receta',
    recipes_more_info: 'Más Información',
    recipes_ref_salt: 'Sal de Referencia:',

    newsletter_eyebrow: 'DE COLIMA A TU BANDEJA',
    newsletter_title: 'Quédate Cerca de la Mesa.',
    newsletter_desc: 'Recetas, inspiración al servir, historias de cosecha y sencillas maneras de darle más sabor a tus comidas diarias.',
    newsletter_placeholder: 'Ingresa tu correo electrónico',
    newsletter_btn: 'Unirme',

    footer_care: 'ATENCIÓN',
    footer_support: 'SOPORTE',
    footer_mission: 'NUESTRA MISIÓN',
    footer_mission_text: 'En Precious, nuestra misión es simple: llevar el carácter natural de la sal de Colima a las mesas de todos los días. Inspirados en las costas mexicanas y generaciones de tradición salinera, celebramos la sal en su forma más pura: natural, sin refinar y llena de carácter.',
    footer_lang_label: 'Idioma',

    cart_title: 'Tu Carrito',
    cart_product_col: 'PRODUCTO',
    cart_total_col: 'TOTAL',
    cart_empty: 'Tu carrito está vacío',
    cart_start_shopping: 'Descubre Nuestras Sales',
    cart_subtotal: 'Total Estimado',
    cart_tax_note: 'Impuestos, descuentos y gastos de envío calculados en la pantalla de pago.',
    cart_btn_stripe_toggle: 'Pagar con Tarjeta (Stripe)',
    cart_btn_wa: 'Pedir por WhatsApp',
    btn_add_to_cart: 'Agregar al Carrito',
    added_to_cart: '¡Producto agregado al carrito!',

    stripe_title: 'Pago Seguro con Tarjeta vía Stripe',
    stripe_card_num: 'Número de Tarjeta',
    stripe_expiry: 'MM / AA',
    stripe_cvc: 'CVC',
    stripe_name: 'Nombre en la Tarjeta',
    stripe_zip: 'Código Postal',
    stripe_btn_pay: 'Pagar con Stripe',
    stripe_secure_note: 'Encriptación SSL de 256 bits • Procesado por Stripe',
    stripe_processing: 'Procesando pago de forma segura con Stripe...',
    receipt_title: '¡Pago Confirmado con Éxito!',
    receipt_order: 'Confirmación de Pedido',
    receipt_thank: '¡Muchas gracias por tu compra! Tu sal artesanal de Colima ya se encuentra en preparación.',
    receipt_btn_wa: 'Compartir Pedido a WhatsApp',
    receipt_btn_close: 'Aceptar'
  },
  fr: {
    announcement: 'EXPÉDITION RAPIDE SUR TOUS LES PRODUITS | SEL DE MER 100% NATUREL DE COLIMA, MEXIQUE',
    nav_home: 'Accueil',
    nav_catalog: 'Catalogue',
    nav_shop_all: 'Boutique',
    nav_condiments: 'Condiments',
    nav_recipes: 'Recettes',
    nav_tracking: 'Suivi de Commande',
    nav_our_story: 'Notre Histoire',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',

    sub_home_hero: 'Accueil Principal',
    sub_home_hero_desc: 'Origine et vue d\'ensemble',
    sub_home_salts: 'Les 3 Sels Artisanaux',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel et Sal Marina',
    sub_home_origin: 'Né à Colima',
    sub_home_origin_desc: 'Lagunes volcaniques et soleil du Pacifique',
    sub_home_process: 'De l\'Eau au Cristal',
    sub_home_process_desc: 'Évaporation solaire naturelle traditionnelle',
    sub_home_guide: 'Guide des Sels',
    sub_home_guide_desc: 'Quel sel accorder à vos plats',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'Cristaux d\'exception pour la finition',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Croquant délicat pour assiettes de chefs',
    sub_cat_marina: 'Sal Marina Naturel (1 lb)',
    sub_cat_marina_desc: 'Sel marin brut pour cuisson quotidienne',
    sub_cat_all: 'Catalogue Complet',
    sub_cat_all_desc: 'Explorer toutes nos créations',

    sub_cond_ahumada: 'Sel Marin Fumé Artisanal',
    sub_cond_ahumada_desc: 'Fumé au bois noble de mesquite (Bientôt)',
    sub_cond_ajo: 'Ail Noir et Fines Herbes',
    sub_cond_ajo_desc: 'Mélange balsamique et gourmand (Bientôt)',
    sub_cond_chiltepin: 'Piment Chiltepin et Citron Vert',
    sub_cond_chiltepin_desc: 'Chaleur zeste mexicaine (Bientôt)',
    sub_cond_all: 'Nouveautés à Venir',
    sub_cond_all_desc: 'Recevoir une alerte au lancement',

    sub_rec_steak: 'Faux-Filet Ribeye à la Fleur de Sel',
    sub_rec_steak_desc: 'Saisi au beurre de romarin et d\'ail',
    sub_rec_ceviche: 'Ceviche de Thon et Crevettes',
    sub_rec_ceviche_desc: 'Relevé au sel marin brut',
    sub_rec_chocolate: 'Fondant au Chocolat Noir',
    sub_rec_chocolate_desc: 'Cœur coulant rehaussé de cristaux de sel',
    sub_rec_all: 'Toutes les Recettes',
    sub_rec_all_desc: 'Inspiration culinaire de chefs',

    sub_track_bridge: 'Suivi par Numéro de Colis',
    sub_track_bridge_desc: 'Passerelle avec le code envoyé par WhatsApp',
    sub_track_couriers: 'Transporteurs Officiels',
    sub_track_couriers_desc: 'DHL, FedEx, Estafeta, UPS',
    sub_track_whatsapp: 'Assistance WhatsApp',
    sub_track_whatsapp_desc: 'Service direct personnalisé',

    sub_story_origin: 'Lagune de Cuyutlán',
    sub_story_origin_desc: 'Écosystème marin préservé',
    sub_story_solar: 'Récolte Solaire et Manuelle',
    sub_story_solar_desc: 'Savoir-faire hérité de générations',
    sub_story_minerals: 'Minéraux Marins Vivants',
    sub_story_minerals_desc: 'Naturellement pauvre en sodium',

    sub_faq_shipping: 'Délais de Livraison',
    sub_faq_shipping_desc: 'Expéditions Mexique et international',
    sub_faq_usage: 'Conservation et Utilisation',
    sub_faq_usage_desc: 'Préserver la texture cristalline',
    sub_faq_payment: 'Paiements Sécurisés',
    sub_faq_payment_desc: 'Carte bancaire Stripe et WhatsApp',

    sub_contact_wa: 'Concierge WhatsApp',
    sub_contact_wa_desc: 'Réponse rapide de l\'équipe',
    sub_contact_form: 'Envoyer un Message',
    sub_contact_form_desc: 'Questions et demandes spéciales',
    sub_contact_wholesale: 'Vente aux Professionnels',
    sub_contact_wholesale_desc: 'Approvisionnement chefs et restaurants',

    hero_eyebrow: 'RÉCOLTÉ NATURELLEMENT À COLIMA, MEXIQUE',
    hero_title: 'Le Goût Pur du Mexique.',
    hero_desc: 'Sel marin artisanal récolté naturellement dans les eaux côtières de Colima, préservant ses minéraux naturels et sa saveur exceptionnelle.',
    hero_cta: 'Découvrir Nos Sels',

    origin_eyebrow: 'NOTRE ORIGINE',
    origin_title: 'Né à Colima.',
    origin_desc: 'Entre les eaux du Pacifique, le soleil mexicain et des générations de tradition, Precious célèbre le sel dans son état minéral le plus pur.',
    origin_cta: 'Découvrir Notre Histoire',

    salts_eyebrow: 'COLLECTION ARTISANALE',
    salts_title: 'Trois Sels. Une Origine Naturelle.',
    salts_subtitle: 'Des cristaux délicats de finition au sel marin polyvalent du quotidien, découvrez le sel fait pour votre table.',

    condiments_eyebrow: 'BIENTÔT DISPONIBLE • ÉDITIONS SPÉCIALES',
    condiments_title: '3 Nouveaux Condiments Gourmet en Préparation.',
    condiments_subtitle: 'Ces créations artisanales sont en cours de finalisation et seront lancées très prochainement.',
    coming_soon_badge: 'Bientôt Disponible',
    coming_soon_btn: 'Me Prévenir au Lancement',
    coming_soon_modal_title: 'Alerte Nouveau Lancement',
    coming_soon_modal_desc: 'Indiquez vos coordonnées pour être prévenu dès la disponibilité de cette édition spéciale.',

    guide_eyebrow: 'TROUVEZ VOTRE FINITION PARFAITE',
    guide_title: 'Quel Sel Est Fait Pour Vous ?',
    guide_subtitle: 'Différentes textures. Différentes utilisations. La même origine pure.',
    guide_learn_more: 'En Savoir Plus',

    water_title: 'De l\'Eau au Cristal.',
    water_desc: 'Né des eaux côtières de Colima et naturellement formé par évaporation solaire, Precious célèbre un processus façonné par l\'eau, le soleil et le temps.',
    water_step1: '01 — EAUX CÔTIÈRES',
    water_step2: '02 — ÉVAPORATION SOLAIRE',
    water_step3: '03 — RÉCOLTE NATURELLE',
    water_step4: '04 — VOTRE TABLE',

    tracking_eyebrow: 'PASSERELLE DIRECTE CLIENT',
    tracking_title: 'Suivez Votre Colis',
    tracking_subtitle: 'Vous avez reçu votre numéro de suivi par WhatsApp ou e-mail ? Choisissez votre transporteur et suivez votre colis sur le portail officiel.',
    tracking_step_1_title: '1. Recevez Votre Numéro',
    tracking_step_1_desc: 'La propriétaire vous envoie personnellement votre code de suivi via WhatsApp dès l’expédition.',
    tracking_step_2_title: '2. Sélectionnez le Transporteur',
    tracking_step_2_desc: 'Collez votre code et choisissez DHL, FedEx, Estafeta ou autre.',
    tracking_step_3_title: '3. Statut Officiel en Temps Réel',
    tracking_step_3_desc: 'Accédez en 1 clic au portail officiel du transporteur sans intermédiaire.',
    tracking_input_placeholder: 'Collez votre numéro de suivi ici...',
    tracking_select_courier: 'Choisissez le transporteur...',
    tracking_btn: 'Suivre sur le Site Officiel',
    tracking_direct_couriers: 'Ou accédez directement au portail :',
    tracking_wa_help: 'Besoin d’aide avec votre suivi ? Contactez-nous directement sur WhatsApp',

    recipes_eyebrow: 'Un Peu de Sel. Une Infinité de Possibilités.',
    recipes_title: 'DEPUIS LA TABLE PRECIOUS',
    recipes_subtitle: 'Trois créations. Trois sels. D’infinis accords gastronomiques.',
    recipes_view: 'Voir la Recette',
    recipes_more_info: "Plus d'informations",
    recipes_ref_salt: 'Sel Recommandé :',

    newsletter_eyebrow: 'DE COLIMA À VOTRE BOÎTE EMAIL',
    newsletter_title: 'Restez Proche de la Table.',
    newsletter_desc: 'Recettes, inspiration culinaire et histoires de nos salines artisanales.',
    newsletter_placeholder: 'Votre adresse e-mail',
    newsletter_btn: 'Rejoindre',

    footer_care: 'SERVICE CLIENT',
    footer_support: 'SUPPORT',
    footer_mission: 'NOTRE MISSION',
    footer_mission_text: 'Chez Precious, notre mission est de porter le caractère naturel du sel marin de Colima sur les tables du quotidien.',
    footer_lang_label: 'Langue',

    cart_title: 'Votre Panier',
    cart_product_col: 'PRODUIT',
    cart_total_col: 'TOTAL',
    cart_empty: 'Votre panier est vide',
    cart_start_shopping: 'Découvrir Nos Sels',
    cart_subtotal: 'Total Estimé',
    cart_tax_note: 'Taxes et expédition calculées au paiement.',
    cart_btn_stripe_toggle: 'Payer par Carte (Stripe)',
    cart_btn_wa: 'Commander sur WhatsApp',
    btn_add_to_cart: 'Ajouter au Panier',
    added_to_cart: 'Produit ajouté au panier !',

    stripe_title: 'Paiement Sécurisé par Carte via Stripe',
    stripe_card_num: 'Numéro de Carte',
    stripe_expiry: 'MM / AA',
    stripe_cvc: 'CVC',
    stripe_name: 'Nom sur la Carte',
    stripe_zip: 'Code Postal',
    stripe_btn_pay: 'Payer avec Stripe',
    stripe_secure_note: 'Chiffrement SSL 256 bits • Sécurisé par Stripe',
    stripe_processing: 'Traitement sécurisé du paiement...',
    receipt_title: 'Paiement Confirmé !',
    receipt_order: 'Confirmation de Commande',
    receipt_thank: 'Merci pour votre achat ! Votre sel artisanal de Colima est en cours de préparation.',
    receipt_btn_wa: 'Partager la Commande sur WhatsApp',
    receipt_btn_close: 'Fermer'
  },
  pt: {
    announcement: 'ENVIO RÁPIDO EM TODOS OS PRODUTOS | SAL MARINHO 100% NATURAL DE COLIMA, MÉXICO',
    nav_home: 'Início',
    nav_catalog: 'Catálogo',
    nav_shop_all: 'Loja Completa',
    nav_condiments: 'Condimentos',
    nav_recipes: 'Receitas',
    nav_tracking: 'Rastrear Pedido',
    nav_our_story: 'Nossa História',
    nav_faq: 'Perguntas Frequentes',
    nav_contact: 'Contato',

    sub_home_hero: 'Página Inicial',
    sub_home_hero_desc: 'Origem e apresentação natural',
    sub_home_salts: 'Os 3 Sais Artesanais',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel e Sal Marinho',
    sub_home_origin: 'Nascido em Colima',
    sub_home_origin_desc: 'Lagoa vulcânica e sol do Pacífico',
    sub_home_process: 'Da Água ao Cristal',
    sub_home_process_desc: 'Método solar tradicional de evaporação',
    sub_home_guide: 'Guia de Sais',
    sub_home_guide_desc: 'Qual sal harmoniza com seu prato',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'O caviar do sal para finalização de carnes',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Crocância refinada para pratos finos',
    sub_cat_marina: 'Sal Marinho Natural (1 lb)',
    sub_cat_marina_desc: 'Sal grosso não refinado para o dia a dia',
    sub_cat_all: 'Ver Catálogo Completo',
    sub_cat_all_desc: 'Conheça todas as opções',

    sub_cond_ahumada: 'Sal Marinho Defumado Artesanal',
    sub_cond_ahumada_desc: 'Defumado em lenha nobre de mesquite (Em Breve)',
    sub_cond_ajo: 'Alho Negro e Ervas Finas',
    sub_cond_ajo_desc: 'Toque balsâmico e herbal gourmet (Em Breve)',
    sub_cond_chiltepin: 'Pimenta Chiltepin e Limão',
    sub_cond_chiltepin_desc: 'Picância cítrica mexicana (Em Breve)',
    sub_cond_all: 'Próximos Lançamentos',
    sub_cond_all_desc: 'Cadastre-se para aviso de pré-venda',

    sub_rec_steak: 'Ribeye Steak com Flor de Sal',
    sub_rec_steak_desc: 'Selado na manteiga com alecrim e alho',
    sub_rec_ceviche: 'Ceviche de Atum e Camarão',
    sub_rec_ceviche_desc: 'Curado com sal marinho natural',
    sub_rec_chocolate: 'Petit Gâteau de Chocolate Amargo',
    sub_rec_chocolate_desc: 'Coração líquido com cristais de Fleur de Sel',
    sub_rec_all: 'Todas as Receitas',
    sub_rec_all_desc: 'Preparações assinadas por chefs',

    sub_track_bridge: 'Rastrear por Código',
    sub_track_bridge_desc: 'Link direto com a guia enviada pela dona',
    sub_track_couriers: 'Transportadoras Oficiais',
    sub_track_couriers_desc: 'DHL, FedEx, Estafeta, UPS',
    sub_track_whatsapp: 'Suporte no WhatsApp',
    sub_track_whatsapp_desc: 'Atendimento direto e atencioso',

    sub_story_origin: 'Lagoa de Cuyutlán',
    sub_story_origin_desc: 'Salinas costeiras preservadas',
    sub_story_solar: 'Colheita Solar e Manual',
    sub_story_solar_desc: 'Tradição passada por gerações',
    sub_story_minerals: 'Minerais Marinhos Vivos',
    sub_story_minerals_desc: 'Naturalmente rico em oligoelementos',

    sub_faq_shipping: 'Prazos de Envio',
    sub_faq_shipping_desc: 'Envios para o México e Estados Unidos',
    sub_faq_usage: 'Uso e Armazenamento',
    sub_faq_usage_desc: 'Como manter o sal sempre crocante',
    sub_faq_payment: 'Pagamentos Seguros',
    sub_faq_payment_desc: 'Cartão via Stripe e pedidos WhatsApp',

    sub_contact_wa: 'Atendimento WhatsApp',
    sub_contact_wa_desc: 'Resposta rápida da nossa equipe',
    sub_contact_form: 'Envie uma Mensagem',
    sub_contact_form_desc: 'Dúvidas e pedidos especiais',
    sub_contact_wholesale: 'Vendas para Restaurantes',
    sub_contact_wholesale_desc: 'Fornecimento para chefs e cozinhas',

    hero_eyebrow: 'COLHIDO NATURALMENTE EM COLIMA, MÉXICO',
    hero_title: 'O Sabor Puro do México.',
    hero_desc: 'Sal marinho artesanal, colhido naturalmente nas águas costeiras de Colima, preservando seus minerais naturais e sabor excepcional.',
    hero_cta: 'Comprar Nossos Sais',

    origin_eyebrow: 'NOSSA ORIGEM',
    origin_title: 'Nascido em Colima.',
    origin_desc: 'Entre as águas do Pacífico, o sol mexicano e gerações de tradição salineira, Precious Sea Salt celebra o sal em sua forma mineral mais pura.',
    origin_cta: 'Conheça Nossa História',

    salts_eyebrow: 'COLEÇÃO ARTESANAL',
    salts_title: 'Três Sais. Uma Origem Natural.',
    salts_subtitle: 'De cristais finos de finalização ao sal marinho versátil para o dia a dia, descubra o sal ideal para sua mesa.',

    condiments_eyebrow: 'EM BREVE • EDIÇÕES ESPECIAIS',
    condiments_title: '3 Novos Condimentos Gourmet em Preparo.',
    condiments_subtitle: 'Esses condimentos artesanais estão em fase final de elaboração e estarão disponíveis muito em breve.',
    coming_soon_badge: 'Em Breve',
    coming_soon_btn: 'Avise-me no Lançamento',
    coming_soon_modal_title: 'Aviso de Lançamento',
    coming_soon_modal_desc: 'Deixe seu contato para receber aviso imediato quando esta edição for liberada.',

    guide_eyebrow: 'ENCONTRE SUA FINALIZAÇÃO PERFEITA',
    guide_title: 'Qual É o Seu Sal Ideal?',
    guide_subtitle: 'Texturas diferentes. Usos diferentes. A mesma pura origem.',
    guide_learn_more: 'Saiba Mais',

    water_title: 'Da Água ao Cristal.',
    water_desc: 'Nascido nas águas de Colima e formado por evaporação solar natural, Precious celebra um processo simples guiado pela água, sol e tempo.',
    water_step1: '01 — ÁGUAS COSTEIRAS',
    water_step2: '02 — EVAPORAÇÃO SOLAR',
    water_step3: '03 — COLHEITA NATURAL',
    water_step4: '04 — SUA MESA',

    tracking_eyebrow: 'PONTE DIRETA PARA O CLIENTE',
    tracking_title: 'Rastreie Seu Pedido',
    tracking_subtitle: 'Recebeu seu código de rastreamento no WhatsApp? Escolha a transportadora e veja o status oficial em tempo real.',
    tracking_step_1_title: '1. Receba Seu Código',
    tracking_step_1_desc: 'A proprietária envia pessoalmente seu código no WhatsApp logo após o despacho.',
    tracking_step_2_title: '2. Escolha a Transportadora',
    tracking_step_2_desc: 'Cole o código e escolha DHL, FedEx, Estafeta ou outra.',
    tracking_step_3_title: '3. Status Oficial em Tempo Real',
    tracking_step_3_desc: 'Acesse o portal oficial da transportadora em um clique.',
    tracking_input_placeholder: 'Cole seu código de rastreio aqui...',
    tracking_select_courier: 'Selecione a transportadora...',
    tracking_btn: 'Rastrear no Portal Oficial',
    tracking_direct_couriers: 'Ou acesse direto a transportadora:',
    tracking_wa_help: 'Dúvidas sobre o rastreamento? Fale conosco diretamente no WhatsApp',

    recipes_eyebrow: 'Um Pouco de Sal. Uma Infinidade de Possibilidades.',
    recipes_title: 'DA MESA PRECIOUS',
    recipes_subtitle: 'Três pratos. Três sais. Infinitas combinações à mesa.',
    recipes_view: 'Ver Receita',
    recipes_more_info: 'Mais Informações',
    recipes_ref_salt: 'Sal Recomendado:',

    newsletter_eyebrow: 'DE COLIMA PARA SEU EMAIL',
    newsletter_title: 'Fique Perto da Mesa.',
    newsletter_desc: 'Receitas, sugestões de empratamento e histórias da nossa colheita artesanal.',
    newsletter_placeholder: 'Digite seu e-mail',
    newsletter_btn: 'Inscrever-se',

    footer_care: 'ATENDIMENTO',
    footer_support: 'SUPORTE',
    footer_mission: 'NOSSA MISSÃO',
    footer_mission_text: 'Na Precious, nossa missão é levar o caráter natural do sal marinho de Colima às mesas de todos os dias.',
    footer_lang_label: 'Idioma',

    cart_title: 'Seu Carrinho',
    cart_product_col: 'PRODUTO',
    cart_total_col: 'TOTAL',
    cart_empty: 'Seu carrinho está vazio',
    cart_start_shopping: 'Descobrir Nossos Sais',
    cart_subtotal: 'Total Estimado',
    cart_tax_note: 'Taxas e frete calculados no checkout.',
    cart_btn_stripe_toggle: 'Pagar com Cartão (Stripe)',
    cart_btn_wa: 'Pedir pelo WhatsApp',
    btn_add_to_cart: 'Adicionar ao Carrinho',
    added_to_cart: 'Produto adicionado ao carrinho!',

    stripe_title: 'Pagamento Seguro com Cartão via Stripe',
    stripe_card_num: 'Número do Cartão',
    stripe_expiry: 'MM / AA',
    stripe_cvc: 'CVC',
    stripe_name: 'Nome no Cartão',
    stripe_zip: 'CEP / Código Postal',
    stripe_btn_pay: 'Pagar com Stripe',
    stripe_secure_note: 'Criptografia SSL de 256 bits • Seguro por Stripe',
    stripe_processing: 'Processando pagamento com segurança no Stripe...',
    receipt_title: 'Pagamento Confirmado!',
    receipt_order: 'Confirmação do Pedido',
    receipt_thank: 'Obrigado por comprar conosco! Seu sal artesanal de Colima já está sendo separado.',
    receipt_btn_wa: 'Enviar Pedido para o WhatsApp',
    receipt_btn_close: 'Concluir'
  },
  de: {
    announcement: 'SCHNELLER VERSAND | 100% NATÜRLICHES MEERSALZ AUS COLIMA, MEXIKO',
    nav_home: 'Startseite',
    nav_catalog: 'Katalog',
    nav_shop_all: 'Alle Produkte',
    nav_condiments: 'Gewürze',
    nav_recipes: 'Rezepte',
    nav_tracking: 'Sendung Verfolgen',
    nav_our_story: 'Unsere Geschichte',
    nav_faq: 'FAQ',
    nav_contact: 'Kontakt',

    sub_home_hero: 'Startansicht',
    sub_home_hero_desc: 'Herkunft und naturbelassene Qualität',
    sub_home_salts: 'Die 3 Handwerkssalze',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel und Meersalz',
    sub_home_origin: 'Geboren in Colima',
    sub_home_origin_desc: 'Vulkanlagune und Pazifiksonne',
    sub_home_process: 'Vom Wasser zum Kristall',
    sub_home_process_desc: 'Traditionelle Sonnenverdampfung',
    sub_home_guide: 'Salzratgeber',
    sub_home_guide_desc: 'Welches Salz zu Ihren Speisen passt',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'Kaviar der Salze zur Vollendung von Fleisch',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Feine Knusprigkeit für Feinschmecker',
    sub_cat_marina: 'Naturbelassenes Meersalz (1 lb)',
    sub_cat_marina_desc: 'Grobes unraffiniertes Kochsalz für jeden Tag',
    sub_cat_all: 'Gesamten Katalog Entdecken',
    sub_cat_all_desc: 'Alle Größen und Sorten ansehen',

    sub_cond_ahumada: 'Rauchmeersalz',
    sub_cond_ahumada_desc: 'Kaltgeräuchert über Mesquiteholz (Demnächst)',
    sub_cond_ajo: 'Schwarzer Knoblauch & Kräuter',
    sub_cond_ajo_desc: 'Balsamische Kräuternote (Demnächst)',
    sub_cond_chiltepin: 'Chiltepin-Chili & Limette',
    sub_cond_chiltepin_desc: 'Würzige mexikanische Frische (Demnächst)',
    sub_cond_all: 'Kommende Editionen',
    sub_cond_all_desc: 'Für Vorab-Benachrichtigung eintragen',

    sub_rec_steak: 'Ribeye Steak mit Flor de Sal',
    sub_rec_steak_desc: 'In Rosmarin-Knoblauchbutter geschwenkt',
    sub_rec_ceviche: 'Pazifik-Thunfisch & Garnelen',
    sub_rec_ceviche_desc: 'Veredelt mit reinem Meersalz',
    sub_rec_chocolate: 'Dunkler Schokoladenkuchen',
    sub_rec_chocolate_desc: 'Flüssiger Kern mit Fleur de Sel Flocken',
    sub_rec_all: 'Alle Gourmet-Rezepte',
    sub_rec_all_desc: 'Schritt-für-Schritt-Anleitungen von Köchen',

    sub_track_bridge: 'Tracking per Sendungsnummer',
    sub_track_bridge_desc: 'Direktlink mit der Nummer von der Inhaberin',
    sub_track_couriers: 'Offizielle Paketdienste',
    sub_track_couriers_desc: 'DHL, FedEx, Estafeta, UPS',
    sub_track_whatsapp: 'WhatsApp-Support',
    sub_track_whatsapp_desc: 'Persönliche Betreuung ohne Umwege',

    sub_story_origin: 'Lagune von Cuyutlán',
    sub_story_origin_desc: 'Geschütztes Küstensalz-Biotop',
    sub_story_solar: '100% Sonne & Handarbeit',
    sub_story_solar_desc: 'Überliefertes Handwerk der Salinero-Familien',
    sub_story_minerals: 'Lebendige Meeresmineralien',
    sub_story_minerals_desc: 'Natürlich natriumarm und mineralreich',

    sub_faq_shipping: 'Lieferzeiten & Versand',
    sub_faq_shipping_desc: 'Schnelle Zustellung in Mexiko und USA',
    sub_faq_usage: 'Küchentipps & Aufbewahrung',
    sub_faq_usage_desc: 'So bleibt die Salzkruste perfekt erhalten',
    sub_faq_payment: 'Zahlungsarten',
    sub_faq_payment_desc: 'Kreditkarte über Stripe & WhatsApp-Bestellung',

    sub_contact_wa: 'Direkter WhatsApp-Kontakt',
    sub_contact_wa_desc: 'Sofortige Antwort unseres Teams',
    sub_contact_form: 'Nachricht Senden',
    sub_contact_form_desc: 'Fragen, Sonderwünsche und Feedback',
    sub_contact_wholesale: 'Gastronomie & Großhandel',
    sub_contact_wholesale_desc: 'Lieferungen für Spitzenköche und Händler',

    hero_eyebrow: 'NATÜRLICH GEERNTET IN COLIMA, MEXIKO',
    hero_title: 'Der Reine Geschmack Mexikos.',
    hero_desc: 'Traditionell handgeerntetes Meersalz aus Colima, reich an natürlichen Mineralien und unverwechselbarem Aroma.',
    hero_cta: 'Unsere Salze Entdecken',

    origin_eyebrow: 'UNSER URSPRUNG',
    origin_title: 'Geboren in Colima.',
    origin_desc: 'Geformt durch Pazifikwasser, mexikanische Sonne und generationenalte Handwerkstradition – Precious Meersalz in reinster Form.',
    origin_cta: 'Unsere Geschichte Entdecken',

    salts_eyebrow: 'HANDWERKSKOLLEKTION',
    salts_title: 'Drei Salze. Ein Natürlicher Ursprung.',
    salts_subtitle: 'Von feinen Finishing-Kristallen bis zu vielseitigem Alltagssalz – entdecken Sie das ideale Salz für Ihren Tisch.',

    condiments_eyebrow: 'DEMNÄCHST • EXKLUSIVE SONDEREDITIONEN',
    condiments_title: '3 Gourmet-Würzsalze in Vorbereitung.',
    condiments_subtitle: 'Diese handwerklichen Mischungen befinden sich in der Fertigstellung und erscheinen in Kürze.',
    coming_soon_badge: 'Demnächst',
    coming_soon_btn: 'Zum Launch Benachrichtigen',
    coming_soon_modal_title: 'Launch-Benachrichtigung',
    coming_soon_modal_desc: 'Hinterlassen Sie Ihre Kontaktdaten, um sofort beim Verkaufsstart informiert zu werden.',

    guide_eyebrow: 'FINDEN SIE IHR PERFEKTES SALZ',
    guide_title: 'Welches Salz Passt Zu Ihnen?',
    guide_subtitle: 'Unterschiedliche Texturen. Vielfältige Verwendung. Derselbe reine Ursprung.',
    guide_learn_more: 'Mehr Erfahren',

    water_title: 'Vom Wasser zum Kristall.',
    water_desc: 'Entstanden in den Küstengewässern Colimas und geformt durch natürliche Sonnenverdunstung.',
    water_step1: '01 — KÜSTENWASSER',
    water_step2: '02 — SONNENVERDUNSTUNG',
    water_step3: '03 — NATÜRLICHE ERNTE',
    water_step4: '04 — IHR TISCH',

    tracking_eyebrow: 'DIREKTE SENDUNGSVERFOLGUNG',
    tracking_title: 'Bestellung Verfolgen',
    tracking_subtitle: 'Haben Sie Ihre Sendungsnummer per WhatsApp erhalten? Wählen Sie Ihren Paketdienst und prüfen Sie den Echtzeitstatus direkt auf dem offiziellen Portal.',
    tracking_step_1_title: '1. Sendungsnummer Erhalten',
    tracking_step_1_desc: 'Die Inhaberin sendet Ihnen Ihre Trackingnummer nach dem Versand direkt via WhatsApp.',
    tracking_step_2_title: '2. Paketdienst Wählen',
    tracking_step_2_desc: 'Nummer einfügen und DHL, FedEx, Estafeta oder andere auswählen.',
    tracking_step_3_title: '3. Offizieller Echtzeitstatus',
    tracking_step_3_desc: 'Mit einem Klick direkt auf das offizielle Trackingportal weitergeleitet werden.',
    tracking_input_placeholder: 'Sendungsnummer hier einfügen...',
    tracking_select_courier: 'Paketdienst wählen...',
    tracking_btn: 'Auf Offizieller Seite Verfolgen',
    tracking_direct_couriers: 'Oder direkt zum Paketdienst:',
    tracking_wa_help: 'Fragen zur Sendung? Kontaktieren Sie uns direkt per WhatsApp',

    recipes_eyebrow: 'Ein Wenig Salz. Eine Fülle von Möglichkeiten.',
    recipes_title: 'VOM PRECIOUS TISCH',
    recipes_subtitle: 'Drei Gerichte. Drei Salze. Unendliche kulinarische Kreationen.',
    recipes_view: 'Rezept Anzeigen',
    recipes_more_info: 'Mehr Informationen',
    recipes_ref_salt: 'Empfohlenes Salz:',

    newsletter_eyebrow: 'VON COLIMA IN IHR POSTFACH',
    newsletter_title: 'Bleiben Sie Nah am Tisch.',
    newsletter_desc: 'Rezepte, Serviertipps und Geschichten rund um authentischen Geschmack.',
    newsletter_placeholder: 'E-Mail-Adresse eingeben',
    newsletter_btn: 'Anmelden',

    footer_care: 'KUNDENSERVICE',
    footer_support: 'HILFE & RECHTLICHES',
    footer_mission: 'UNSERE MISSION',
    footer_mission_text: 'Unsere Mission bei Precious: den natürlichen Charakter von Colima-Meersalz auf die Tische der Welt zu bringen.',
    footer_lang_label: 'Sprache',

    cart_title: 'Ihr Warenkorb',
    cart_product_col: 'PRODUKT',
    cart_total_col: 'GESAMT',
    cart_empty: 'Ihr Warenkorb ist leer',
    cart_start_shopping: 'Unsere Salze Entdecken',
    cart_subtotal: 'Geschätzter Gesamtbetrag',
    cart_tax_note: 'Steuern und Versandkosten werden beim Checkout berechnet.',
    cart_btn_stripe_toggle: 'Mit Karte Bezahlen (Stripe)',
    cart_btn_wa: 'Per WhatsApp Bestellen',
    btn_add_to_cart: 'In den Warenkorb',
    added_to_cart: 'Erfolgreich zum Warenkorb hinzugefügt!',

    stripe_title: 'Sichere Kartenzahlung über Stripe',
    stripe_card_num: 'Kartennummer',
    stripe_expiry: 'MM / JJ',
    stripe_cvc: 'CVC',
    stripe_name: 'Name auf der Karte',
    stripe_zip: 'Postleitzahl',
    stripe_btn_pay: 'Mit Stripe Bezahlen',
    stripe_secure_note: '256-Bit-SSL-Verschlüsselung • Gesichert durch Stripe',
    stripe_processing: 'Zahlung wird sicher über Stripe abgewickelt...',
    receipt_title: 'Zahlung Erfolgreich!',
    receipt_order: 'Bestellbestätigung',
    receipt_thank: 'Vielen Dank für Ihre Bestellung! Ihr traditionelles Colima-Meersalz wird für den Versand vorbereitet.',
    receipt_btn_wa: 'Bestellung per WhatsApp Teilen',
    receipt_btn_close: 'Fertig'
  },
  it: {
    announcement: 'SPEDIZIONE RAPIDA SU TUTTI I PRODOTTI | SALE MARINO 100% NATURALE DA COLIMA, MESSICO',
    nav_home: 'Home',
    nav_catalog: 'Catalogo',
    nav_shop_all: 'Tutti i Prodotti',
    nav_condiments: 'Condimenti',
    nav_recipes: 'Ricette',
    nav_tracking: 'Traccia Ordine',
    nav_our_story: 'La Nostra Storia',
    nav_faq: 'FAQ',
    nav_contact: 'Contatto',

    sub_home_hero: 'Copertina Principale',
    sub_home_hero_desc: 'Origine e purezza minerale',
    sub_home_salts: 'I 3 Sali Artigianali',
    sub_home_salts_desc: 'Flor de Sal, Fleur de Sel e Sale Marino',
    sub_home_origin: 'Nato a Colima',
    sub_home_origin_desc: 'Laguna vulcanica e sole del Pacifico',
    sub_home_process: 'Dall\'Acqua al Cristallo',
    sub_home_process_desc: 'Tradizionale evaporazione solare',
    sub_home_guide: 'Guida ai Sali',
    sub_home_guide_desc: 'Quale sale abbinare a ogni piatto',

    sub_cat_flor: 'Flor de Sal de Colima (100g)',
    sub_cat_flor_desc: 'Il caviale del sale per carni e finiture',
    sub_cat_fleur: 'Fleur de Sel Gourmet (100g)',
    sub_cat_fleur_desc: 'Crocantezza delicata per piatti gourmet',
    sub_cat_marina: 'Sale Marino Naturale (1 lb)',
    sub_cat_marina_desc: 'Sale grezzo non raffinato per tutti i giorni',
    sub_cat_all: 'Visualizza Catalogo Completo',
    sub_cat_all_desc: 'Scopri tutti i formati',

    sub_cond_ahumada: 'Sale Marino Affumicato',
    sub_cond_ahumada_desc: 'Affumicato con legno di mesquite (Prossimamente)',
    sub_cond_ajo: 'Aglio Nero ed Erbe Aromatiche',
    sub_cond_ajo_desc: 'Accordo balsamico e profumato (Prossimamente)',
    sub_cond_chiltepin: 'Peperoncino Chiltepin e Lime',
    sub_cond_chiltepin_desc: 'Vivacità agrumata messicana (Prossimamente)',
    sub_cond_all: 'Prossime Uscite',
    sub_cond_all_desc: 'Iscriviti per ricevere l\'avviso di lancio',

    sub_rec_steak: 'Costata Ribeye con Flor de Sal',
    sub_rec_steak_desc: 'Scottata al burro di rosmarino e aglio',
    sub_rec_ceviche: 'Ceviche di Tonno e Gamberi',
    sub_rec_ceviche_desc: 'Insaporito con sale marino puro',
    sub_rec_chocolate: 'Tortino al Cioccolato Fondente',
    sub_rec_chocolate_desc: 'Cuore liquido con scaglie di Fleur de Sel',
    sub_rec_all: 'Tutte le Ricette Gourmet',
    sub_rec_all_desc: 'Ispirazioni create con i nostri chef',

    sub_track_bridge: 'Traccia con Codice di Spedizione',
    sub_track_bridge_desc: 'Collegamento diretto con il codice inviato dalla titolare',
    sub_track_couriers: 'Corrieri Ufficiali',
    sub_track_couriers_desc: 'DHL, FedEx, Estafeta, UPS',
    sub_track_whatsapp: 'Assistenza WhatsApp',
    sub_track_whatsapp_desc: 'Supporto immediato su WhatsApp',

    sub_story_origin: 'Laguna di Cuyutlán',
    sub_story_origin_desc: 'Ecosistema di saline millenarie',
    sub_story_solar: 'Raccolta Solare a Mano',
    sub_story_solar_desc: 'Sapienza tramandata da generazioni',
    sub_story_minerals: 'Minerali Marini Puri',
    sub_story_minerals_desc: 'Naturalmente povero di sodio e ricco di nutrienti',

    sub_faq_shipping: 'Spedizioni e Consegne',
    sub_faq_shipping_desc: 'Consegne in tutto il Messico e negli Stati Uniti',
    sub_faq_usage: 'Consigli in Cucina e Conservazione',
    sub_faq_usage_desc: 'Come custodire la freschezza dei cristalli',
    sub_faq_payment: 'Pagamenti Garantiti',
    sub_faq_payment_desc: 'Carta con Stripe e ordini WhatsApp',

    sub_contact_wa: 'Canale Diretto WhatsApp',
    sub_contact_wa_desc: 'Risposta immediata dal nostro team',
    sub_contact_form: 'Invia un Messaggio',
    sub_contact_form_desc: 'Richieste, ordini speciali e feedback',
    sub_contact_wholesale: 'Forniture per Ristoranti',
    sub_contact_wholesale_desc: 'Soluzioni dedicate a chef e botteghe',

    hero_eyebrow: 'RACCOLTO NATURALMENTE A COLIMA, MESSICO',
    hero_title: 'Il Sapore Puro del Messico.',
    hero_desc: 'Sale marino artigianale raccolto naturalmente dalle acque costiere di Colima, ricco di minerali autentici e gusto impareggiabile.',
    hero_cta: 'Scopri i Nostri Sali',

    origin_eyebrow: 'LA NOSTRA ORIGINE',
    origin_title: 'Nato a Colima.',
    origin_desc: 'Tra le acque del Pacifico, il sole messicano e generazioni di tradizione salina, Precious celebra il sale nella sua forma minerale più pura.',
    origin_cta: 'Scopri la Nostra Storia',

    salts_eyebrow: 'COLLEZIONE ARTIGIANALE',
    salts_title: 'Tre Sali. Un’Unica Origine Naturale.',
    salts_subtitle: 'Dai delicati cristalli di finitura al sale marino versatile per tutti i giorni, scopri il sale creato per la tua tavola.',

    condiments_eyebrow: 'PROSSIMAMENTE • EDIZIONI SPECIALI',
    condiments_title: '3 Nuovi Condimenti Gourmet in Preparazione.',
    condiments_subtitle: 'Questi condimenti artigianali sono nella fase finale di formulazione e saranno lanciati a breve.',
    coming_soon_badge: 'Prossimamente',
    coming_soon_btn: 'Avvisami al Lancio',
    coming_soon_modal_title: 'Avviso di Lancio',
    coming_soon_modal_desc: 'Lascia i tuoi recapiti per essere avvisato non appena l\'edizione speciale sarà disponibile.',

    guide_eyebrow: 'TROVA IL TUO SALE IDEALE',
    guide_title: 'Qual è il Tuo Sale?',
    guide_subtitle: 'Texture diverse. Usi diversi. La stessa pura origine.',
    guide_learn_more: 'Scopri di Più',

    water_title: 'Dall\'Acqua al Cristallo.',
    water_desc: 'Nato dalle acque di Colima e formato per evaporazione solare naturale, Precious celebra un processo modellato da acqua, sole e tempo.',
    water_step1: '01 — ACQUE COSTIERE',
    water_step2: '02 — EVAPORAZIONE SOLARE',
    water_step3: '03 — RACCOLTA NATURALE',
    water_step4: '04 — LA TUA TAVOLA',

    tracking_eyebrow: 'PONTE DIRETTO PER IL CLIENTE',
    tracking_title: 'Traccia il Tuo Ordine',
    tracking_subtitle: 'Hai ricevuto il codice di spedizione su WhatsApp? Seleziona il corriere e visualizza lo stato in tempo real sul sito ufficiale.',
    tracking_step_1_title: '1. Ricevi il Codice',
    tracking_step_1_desc: 'La proprietaria ti invia personalmente il codice di tracciamento su WhatsApp una volta spedito.',
    tracking_step_2_title: '2. Seleziona il Corriere',
    tracking_step_2_desc: 'Incolla il codice e scegli DHL, FedEx, Estafeta, ecc.',
    tracking_step_3_title: '3. Stato Ufficiale in Tempo Reale',
    tracking_step_3_desc: 'Accedi al portale ufficiale del corriere con un solo clic.',
    tracking_input_placeholder: 'Incolla qui il numero di tracciamento...',
    tracking_select_courier: 'Seleziona il corriere...',
    tracking_btn: 'Traccia sul Portale Ufficiale',
    tracking_direct_couriers: 'Oppure accedi direttamente al corriere:',
    tracking_wa_help: 'Domande sulla spedizione? Scrivici direttamente su WhatsApp',

    recipes_eyebrow: 'Un Pizzico di Sale. Infinite Possibilità.',
    recipes_title: 'DALLA TAVOLA PRECIOUS',
    recipes_subtitle: 'Tre piatti. Tre sali. Infinite combinazioni culinarie.',
    recipes_view: 'Vedi Ricetta',
    recipes_more_info: 'Maggiori Informazioni',
    recipes_ref_salt: 'Sale Consigliato:',

    newsletter_eyebrow: 'DA COLIMA ALLA TUA EMAIL',
    newsletter_title: 'Resta Vicino alla Tavola.',
    newsletter_desc: 'Ricette, idee per servire e storie di raccolta per esaltare i tuoi piatti quotidiani.',
    newsletter_placeholder: 'Inserisci la tua email',
    newsletter_btn: 'Iscriviti',

    footer_care: 'SERVIZIO CLIENTI',
    footer_support: 'SUPPORTO',
    footer_mission: 'LA NOSTRA MISSIONE',
    footer_mission_text: 'Da Precious, la nostra missione è portare il carattere naturale del sale marino di Colima sulle tavole di tutti i giorni.',
    footer_lang_label: 'Lingua',

    cart_title: 'Il Tuo Carrello',
    cart_product_col: 'PRODOTTO',
    cart_total_col: 'TOTALE',
    cart_empty: 'Il tuo carrello è vuoto',
    cart_start_shopping: 'Scopri i Nostri Sali',
    cart_subtotal: 'Totale Stimato',
    cart_tax_note: 'Tasse e spedizione calcolate alla cassa.',
    cart_btn_stripe_toggle: 'Paga con Carta (Stripe)',
    cart_btn_wa: 'Ordina via WhatsApp',
    btn_add_to_cart: 'Aggiungi al Carrello',
    added_to_cart: 'Prodotto aggiunto al carrello!',

    stripe_title: 'Pagamento Sicuro con Carta via Stripe',
    stripe_card_num: 'Numero di Carta',
    stripe_expiry: 'MM / AA',
    stripe_cvc: 'CVC',
    stripe_name: 'Nome sulla Carta',
    stripe_zip: 'Codice Postale',
    stripe_btn_pay: 'Paga con Stripe',
    stripe_secure_note: 'Crittografia SSL a 256 bit • Protetto da Stripe',
    stripe_processing: 'Elaborazione sicura del pagamento con Stripe...',
    receipt_title: 'Pagamento Confermato!',
    receipt_order: 'Conferma d\'Ordine',
    receipt_thank: 'Grazie per il tuo acquisto! Il tuo sale artigianale di Colima è in preparazione.',
    receipt_btn_wa: 'Condividi Ordine su WhatsApp',
    receipt_btn_close: 'Fatto'
  }
};

// ==========================================================================
// 4. COURIER TRACKING DIRECTORY & URL BUILDER (Zero Emojis)
// ==========================================================================
const COURIERS = {
  estafeta: {
    name: 'Estafeta',
    url: (code) => code ? `https://www.estafeta.com/Herramientas/Rastreo?rastreo=${encodeURIComponent(code)}` : 'https://www.estafeta.com/Herramientas/Rastreo',
    direct: 'https://www.estafeta.com/Herramientas/Rastreo'
  },
  dhl: {
    name: 'DHL Express',
    url: (code) => code ? `https://www.dhl.com/en/express/tracking.html?AWB=${encodeURIComponent(code)}` : 'https://www.dhl.com/en/express/tracking.html',
    direct: 'https://www.dhl.com/en/express/tracking.html'
  },
  fedex: {
    name: 'FedEx',
    url: (code) => code ? `https://www.fedex.com/fedextrack/?trknbr=${encodeURIComponent(code)}` : 'https://www.fedex.com/fedextrack/',
    direct: 'https://www.fedex.com/fedextrack/'
  },
  paquetexpress: {
    name: 'Paquetexpress',
    url: (code) => code ? `https://www.paquetexpress.com.mx/rastreo` : 'https://www.paquetexpress.com.mx/rastreo',
    direct: 'https://www.paquetexpress.com.mx/rastreo'
  },
  correos: {
    name: 'Correos Mexpost',
    url: (code) => 'https://www.correosdemexico.gob.mx/SSLServicios/SeguimientoEnvio/Seguimiento.aspx',
    direct: 'https://www.correosdemexico.gob.mx/SSLServicios/SeguimientoEnvio/Seguimiento.aspx'
  },
  minutos99: {
    name: '99 Minutos',
    url: (code) => code ? `https://tracking.99minutos.com/search?tracking_number=${encodeURIComponent(code)}` : 'https://tracking.99minutos.com/',
    direct: 'https://tracking.99minutos.com/'
  },
  redpack: {
    name: 'Redpack',
    url: (code) => 'https://www.redpack.com.mx/rastreo-de-envios/',
    direct: 'https://www.redpack.com.mx/rastreo-de-envios/'
  },
  ups: {
    name: 'UPS',
    url: (code) => code ? `https://www.ups.com/track?tracknum=${encodeURIComponent(code)}` : 'https://www.ups.com/track',
    direct: 'https://www.ups.com/track'
  },
  usps: {
    name: 'USPS (USA)',
    url: (code) => code ? `https://tools.usps.com/go/TrackConfirmAction?tLabels=${encodeURIComponent(code)}` : 'https://tools.usps.com/go/TrackConfirmAction_input',
    direct: 'https://tools.usps.com/go/TrackConfirmAction_input'
  }
};

// ==========================================================================
// 5. APPLICATION STATE & CART LOGIC
// ==========================================================================
let currentLang = localStorage.getItem('precious_lang') || 'en'; // Primary language English
let cart = JSON.parse(localStorage.getItem('precious_cart') || '[]');
let isStripeFormOpen = false;

function saveCart() {
  localStorage.setItem('precious_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  if (prod.comingSoon) {
    notifyComingSoon(prod.name);
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      qty: qty
    });
  }
  saveCart();
  showToast(TRANSLATIONS[currentLang].added_to_cart || 'Product added to cart!');
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function toggleStripeInCart() {
  isStripeFormOpen = !isStripeFormOpen;
  const box = document.getElementById('cartStripeBox');
  if (box) {
    box.style.display = isStripeFormOpen ? 'block' : 'none';
  }
}

// Render Cart Drawer Content
function updateCartUI() {
  const cartBadge = document.getElementById('cartCountBadge');
  const cartBody = document.getElementById('cartDrawerBody');
  const cartTotalEl = document.getElementById('cartDrawerTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  if (cartTotalEl) {
    cartTotalEl.textContent = `$${totalPrice.toFixed(2)} USD`;
  }

  if (cartBody) {
    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <p>${TRANSLATIONS[currentLang].cart_empty}</p>
          <a href="shopall.html" class="btn-gold" style="display:inline-block; font-size:11px; padding:10px 20px;">
            ${TRANSLATIONS[currentLang].cart_start_shopping}
          </a>
        </div>
      `;
    } else {
      cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-price">$${item.price.toFixed(2)} USD</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" title="Remove" onclick="removeFromCart('${item.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `).join('');
    }
  }

  // Update stripe button label in drawer
  const stripePayBtn = document.getElementById('drawerStripePayBtn');
  if (stripePayBtn) {
    stripePayBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
      <span>${TRANSLATIONS[currentLang].stripe_btn_pay}: $${totalPrice.toFixed(2)} USD</span>
    `;
  }
}

// WhatsApp Checkout Generator
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert(TRANSLATIONS[currentLang].cart_empty);
    return;
  }

  const phone = '5213120000000'; // Official store contact
  let msg = `Hola Precious Sea Salt! Me gustaría realizar un pedido:\n\n`;

  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    msg += `• ${item.qty}x ${item.name} - $${itemTotal.toFixed(2)} USD\n`;
  });

  msg += `\n*Total Estimado:* $${total.toFixed(2)} USD\n`;
  msg += `¿Podrían ayudarme con los datos de pago y envío? Gracias!`;

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Coming Soon Notification Prompt
function notifyComingSoon(condimentName) {
  const modal = document.getElementById('comingSoonModal');
  const titleEl = document.getElementById('comingSoonModalTitle');
  if (modal && titleEl) {
    titleEl.textContent = condimentName || TRANSLATIONS[currentLang].coming_soon_badge;
    modal.classList.add('open');
  } else {
    alert(`Precious Sea Salt: "${condimentName}" ${TRANSLATIONS[currentLang].condiments_subtitle}`);
  }
}

function closeComingSoonModal() {
  const modal = document.getElementById('comingSoonModal');
  if (modal) modal.classList.remove('open');
}

function submitComingSoonAlert(e) {
  if (e) e.preventDefault();
  closeComingSoonModal();
  showToast('¡Gracias! Te avisaremos con prioridad en el momento del lanzamiento.');
}

// ==========================================================================
// 6. ON-PAGE STRIPE CARD PAYMENT SIMULATOR & CONFIRMATION
// ==========================================================================
function handleCardNumberInput(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 16) value = value.slice(0, 16);
  const parts = value.match(/[\s\S]{1,4}/g) || [];
  input.value = parts.join(' ');
}

function handleCardExpiryInput(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 4) value = value.slice(0, 4);
  if (value.length >= 3) {
    input.value = value.slice(0, 2) + ' / ' + value.slice(2);
  } else {
    input.value = value;
  }
}

function processStripePayment(e) {
  if (e) e.preventDefault();

  if (cart.length === 0) {
    alert(TRANSLATIONS[currentLang].cart_empty);
    return;
  }

  // Get form elements
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<svg style="display:inline-block; vertical-align:middle; margin-right:6px; animation:spin 1s linear infinite;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg> ${TRANSLATIONS[currentLang].stripe_processing}`;
  }

  setTimeout(() => {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }

    const orderId = 'PRE-' + Math.floor(100000 + Math.random() * 900000);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const purchasedItems = [...cart];

    // Clear cart
    cart = [];
    saveCart();
    closeCartDrawer();
    closeCheckoutModal();

    // Show Confirmation Receipt
    showOrderReceipt(orderId, totalPrice, purchasedItems);
  }, 1400);
}

function showOrderReceipt(orderId, total, items) {
  const modal = document.getElementById('receiptModal');
  const body = document.getElementById('receiptModalBody');
  if (!modal || !body) return;

  const itemsHtml = items.map(item => `
    <div class="receipt-row">
      <span>${item.qty}x ${item.name}</span>
      <span>$${(item.price * item.qty).toFixed(2)} USD</span>
    </div>
  `).join('');

  body.innerHTML = `
    <div class="receipt-box">
      <div class="receipt-icon-circle">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h3 class="receipt-title">${TRANSLATIONS[currentLang].receipt_title}</h3>
      <div class="receipt-order-id">${TRANSLATIONS[currentLang].receipt_order}: #${orderId}</div>
      <p style="font-size:14px; color:var(--text-muted); margin-bottom:20px; line-height:1.6;">
        ${TRANSLATIONS[currentLang].receipt_thank}
      </p>

      <div class="receipt-summary-table">
        ${itemsHtml}
        <div class="receipt-row total">
          <span>${TRANSLATIONS[currentLang].cart_subtotal}:</span>
          <span>$${total.toFixed(2)} USD</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;">
        <button class="cart-btn-whatsapp" onclick="sendReceiptToWhatsApp('${orderId}', ${total})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.984.581 3.828 1.583 5.375L2 22l4.781-1.562c1.484.906 3.234 1.438 5.25 1.438 5.516 0 10-4.484 10-10s-4.484-9.875-10-9.875zm0 18.125c-1.781 0-3.328-.484-4.641-1.344l-.328-.219-3.094 1.016 1.031-3.016-.219-.344c-.953-1.422-1.469-3.094-1.469-4.875 0-4.578 3.719-8.297 8.297-8.297 4.578 0 8.297 3.719 8.297 8.297s-3.719 8.297-8.297 8.297zm4.547-6.203c-.25-.125-1.469-.719-1.688-.812-.234-.094-.406-.125-.578.125-.172.25-.672.812-.812.984-.156.172-.312.188-.562.062-.25-.125-1.047-.391-2-1.234-.734-.656-1.234-1.469-1.375-1.719-.156-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.25.25-.422.078-.172.047-.328-.016-.453-.062-.125-.578-1.391-.797-1.906-.219-.5-.438-.438-.594-.438h-.516c-.172 0-.453.062-.688.328-.25.25-.938.922-.938 2.25 0 1.328.969 2.609 1.109 2.797.141.188 1.906 2.922 4.625 4.094.641.281 1.141.453 1.531.578.641.203 1.234.172 1.703.109.516-.078 1.469-.609 1.688-1.203.203-.594.203-1.094.141-1.203-.062-.109-.234-.172-.484-.297z"/></svg>
          <span>${TRANSLATIONS[currentLang].receipt_btn_wa}</span>
        </button>
        <button class="btn-gold" style="width:100%; justify-content:center;" onclick="closeReceiptModal()">
          ${TRANSLATIONS[currentLang].receipt_btn_close}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function sendReceiptToWhatsApp(orderId, total) {
  const phone = '5213120000000';
  const msg = `Hola! Realicé mi pago exitoso con tarjeta Stripe para el pedido #${orderId} por $${total.toFixed(2)} USD. ¿Me podrían confirmar el estatus de mi guía? Gracias!`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function closeReceiptModal() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.remove('open');
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert(TRANSLATIONS[currentLang].cart_empty);
    return;
  }
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.add('open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// 7. TRACKING BRIDGE EXECUTION
// ==========================================================================
function executeOrderTracking(e) {
  if (e) e.preventDefault();

  const codeInput = document.getElementById('trackingCodeInput');
  const courierSelect = document.getElementById('courierSelect');

  const code = codeInput ? codeInput.value.trim() : '';
  const courierKey = courierSelect ? courierSelect.value : '';

  if (!courierKey) {
    alert('Por favor selecciona la paquetería correspondiente / Please select your courier.');
    if (courierSelect) courierSelect.focus();
    return;
  }

  const courier = COURIERS[courierKey];
  if (!courier) return;

  const targetUrl = courier.url(code);
  window.open(targetUrl, '_blank');
}

function trackDirect(courierKey) {
  const courier = COURIERS[courierKey];
  if (courier) {
    window.open(courier.direct, '_blank');
  }
}

// ==========================================================================
// 8. MULTI-LANGUAGE ENGINE
// ==========================================================================
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('precious_lang', lang);

  // Update active state in desktop dropdown
  document.querySelectorAll('.lang-item').forEach(item => {
    item.classList.toggle('active', item.dataset.lang === lang);
  });

  const langCodeMap = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    pt: 'PT',
    de: 'DE',
    it: 'IT'
  };

  const headerBtn = document.getElementById('currentLangLabel');
  if (headerBtn) headerBtn.textContent = langCodeMap[lang] || 'EN';

  const footerSelect = document.getElementById('footerLangSelect');
  if (footerSelect) footerSelect.value = lang;

  // Apply translations to all data-i18n elements
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Re-render Cart with localized labels
  updateCartUI();
}

// ==========================================================================
// 9. TOAST NOTIFICATION HELPER (Zero Emojis)
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 10. RECIPE DETAILS MODAL
// ==========================================================================
function openRecipeModal(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  const modal = document.getElementById('recipeModal');
  const body = document.getElementById('recipeModalBody');
  if (!modal || !body) return;

  const isEs = currentLang === 'es';
  const title = isEs ? (recipe.titleEs || recipe.title) : recipe.title;
  const category = isEs ? (recipe.categoryEs || recipe.category) : recipe.category;
  const desc = isEs ? (recipe.descEs || recipe.desc) : recipe.desc;

  body.innerHTML = `
    <div style="margin-bottom: 20px;">
      <img src="${recipe.image}" alt="${title}" style="width:100%; height:280px; object-fit:cover; border-radius:6px; margin-bottom:16px;">
      <span style="font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--accent-gold-dark);">${category} • ${recipe.time} • ${recipe.servings}</span>
      <h2 style="font-family:var(--font-serif); font-size:30px; color:var(--primary-green); margin:8px 0 12px; line-height:1.2;">${title}</h2>
      <p style="font-size:14.5px; color:var(--text-muted); line-height:1.6; margin-bottom:18px;">${desc}</p>
    </div>

    <div style="background:var(--bg-cream); padding:16px; border-radius:6px; margin-bottom:20px; border-left:3px solid var(--accent-gold);">
      <h4 style="font-family:var(--font-serif); font-size:18px; color:var(--primary-green); margin-bottom:8px;">${currentLang === 'es' ? 'Ingredientes' : 'Ingredients'}</h4>
      <ul style="list-style:disc; padding-left:20px; font-size:13.5px; line-height:1.7;">
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom:24px;">
      <h4 style="font-family:var(--font-serif); font-size:18px; color:var(--primary-green); margin-bottom:12px;">${currentLang === 'es' ? 'Preparación Paso a Paso' : 'Step-by-Step Method'}</h4>
      <ol style="padding-left:20px; font-size:13.5px; line-height:1.7;">
        ${recipe.instructions.map(step => `<li style="margin-bottom:8px;">${step}</li>`).join('')}
      </ol>
    </div>

    <div style="background:#f4efe4; padding:16px; border-radius:6px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
      <div>
        <span style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--accent-gold-dark);">${currentLang === 'es' ? 'Sal de Referencia Utilizada' : 'Artisan Salt Used'}:</span>
        <h5 style="font-family:var(--font-serif); font-size:18px; color:var(--primary-green);">${recipe.saltName}</h5>
      </div>
      <button class="btn-gold" style="padding:10px 18px;" onclick="addToCart('${recipe.saltId}'); closeRecipeModal();">
        <span>+ ${currentLang === 'es' ? 'Añadir Sal al Carrito' : 'Add Salt to Cart'} ($17.99 USD)</span>
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function closeRecipeModal() {
  const modal = document.getElementById('recipeModal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// 11. SEARCH OVERLAY
// ==========================================================================
function toggleSearchOverlay(open) {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  if (open) {
    overlay.classList.add('open');
    const input = document.getElementById('searchInput');
    if (input) input.focus();
  } else {
    overlay.classList.remove('open');
  }
}

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const resultsEl = document.getElementById('searchResults');
  if (!resultsEl) return;

  if (!q) {
    resultsEl.innerHTML = '';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.desc.toLowerCase().includes(q) ||
    p.bestFor.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    resultsEl.innerHTML = `<p style="padding:20px; color:var(--text-muted);">${currentLang === 'es' ? 'No se encontraron productos para' : 'No products found for'} "${query}".</p>`;
    return;
  }

  resultsEl.innerHTML = matches.map(p => `
    <div style="display:flex; align-items:center; gap:16px; padding:12px; border-bottom:1px solid var(--border-light); cursor:pointer;" onclick="location.href='shopall.html'">
      <img src="${p.image}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
      <div>
        <h4 style="font-family:var(--font-serif); font-size:17px; margin-bottom:2px;">${p.name}</h4>
        <span style="font-size:13px; font-weight:700; color:var(--primary-green);">$${p.price.toFixed(2)} USD</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 12. DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cart UI
  updateCartUI();

  // Initialize Language (Default EN)
  setLanguage(currentLang);

  // Language Dropdown Toggle
  const langBtn = document.getElementById('langSelectorBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }

  // Language Switch Items
  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.dataset.lang;
      setLanguage(lang);
      if (langDropdown) langDropdown.classList.remove('show');
    });
  });

  // Footer Language Selector
  const footerLangSelect = document.getElementById('footerLangSelect');
  if (footerLangSelect) {
    footerLangSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (mobileToggle && mobileDrawer && drawerBackdrop) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
    });

    const closeMobile = () => {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
    };

    if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobile);
    drawerBackdrop.addEventListener('click', closeMobile);
  }

  // Cart Drawer Triggers
  const cartTrigger = document.getElementById('cartTriggerBtn');
  const cartClose = document.getElementById('cartDrawerClose');
  const cartOverlay = document.getElementById('cartOverlay');

  if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Accordions Handler
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = header.classList.contains('active');

      const parent = header.closest('.accordion-group');
      if (parent) {
        parent.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('active');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
      }

      if (!isOpen) {
        header.classList.add('active');
        if (content) content.classList.add('open');
      } else {
        header.classList.remove('active');
        if (content) content.classList.remove('open');
      }
    });
  });

  // Smooth scroll and highlight for recipe anchors (from index.html More Information links)
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (['recipe-steak', 'recipe-ceviche', 'recipe-chocolate'].includes(hash)) {
      setTimeout(() => {
        const targetCard = document.getElementById(hash);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('highlight-recipe');
        }
      }, 350);
    }
  }
});
