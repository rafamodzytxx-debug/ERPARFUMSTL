/**
 * ER PARFUM - Bilingual Internationalization (i18n) Engine
 * Automatically detects device/browser language (English / Spanish)
 * Supports manual toggling with instant UI updates and persistent storage.
 */

const TRANSLATIONS = {
  es: {
    // Page Title & Header
    pageTitle: "ER PARFUM — Fragancias Que Dejan Huella",
    cartPageTitle: "ER PARFUM — Lista de Selección",
    collections: "COLECCIONES ▾",
    searchPlaceholder: "Buscar perfume, notas o casa...",
    wh_IL: "Almacén IL",
    wh_TX: "Almacén TX",
    wh_bodega_IL: "🇺🇸 Bodega IL",
    wh_bodega_TX: "🇺🇸 Bodega TX",
    cartTitleTooltip: "Ver Lista de Pedido",
    sideQuote1: "Elegancia",
    sideQuote2: "en cada",
    sideQuote3: "esencia",
    slogan: "FRAGANCIAS QUE DEJAN HUELLA",
    backToCatalog: "← VOLVER AL CATÁLOGO",
    selectionList: "LISTA DE SELECCIÓN",
    cartHeaderSubtitle: "LISTA DE SELECCIÓN",
    
    // Quick brand chips
    chipHotSelling: "🔥 Hot Selling",
    chipNew: "✨ Novedades",
    chipAll: "✦ Ver Todo A-Z",
    
    // Delivery Banner & Footer
    deliveriesSL: "ENTREGAS EN TODO SAN LUIS",
    deliveriesSL_sub: "SEGUROS Y RÁPIDOS",
    contactUs: "CONTÁCTANOS",
    followUs: "SÍGUENOS",
    tagline: "ER PARFUM | MÁS QUE UN PERFUME, ES UNA EXPERIENCIA",
    
    // Catalog sections
    collectionPrefix: "COLECCIÓN ",
    hotSelling: "🔥 FRAGANCIAS DESTACADAS (HOT SELLING)",
    newArrivals: "✨ NOVEDADES RECIENTES",
    allDirectory: "✦ DIRECTORIO COMPLETO A-Z",
    resultsFor: 'RESULTADOS PARA: "',
    nextHouse: "Siguiente Casa: ",
    exploreAllMenu: "☰ Explorar Todas las Marcas en el Menú",
    fragrancesCount: "fragancias",
    fragranceCountSingular: "fragancia",
    noPerfumesFound: "No se encontraron perfumes en esta selección.",
    exploreInWarehouse: "Explorar en Bodega ",
    seeCollection: "Ver Colección >",
    defaultNotes: "Equilibrio perfecto y armonía sensorial. Notas de cítricos nobles, ámbar cálido y maderas refinadas.",
    
    // Card & Modal
    addToList: "+ AÑADIR A LA LISTA",
    highDemand: "🔥 Alta Demanda: ¡Solo quedan {n} disponibles!",
    addedToast: "¡+{qty} {name} agregado a tu lista! 🛒",
    
    // Floating bar
    cartLabel: "Lista",
    viewCopyList: "VER / COPIAR LISTA",
    
    // Drawer
    drawerTitle: "ER PARFUM",
    drawerSubtitle: "DIRECTORIO DE COLECCIONES",
    drawerSearchPlaceholder: "🔍 Filtrar en el menú...",
    warehouseTabIL: "ALMACÉN IL",
    warehouseTabTX: "ALMACÉN TX",
    drawerFeatured: "SELECCIONES DESTACADAS",
    drawerHotSelling: "MÁS VENDIDOS (HOT SELLING)",
    drawerNew: "NOVEDADES RECIENTES",
    drawerAll: "DIRECTORIO COMPLETO A-Z",
    drawerByBrand: "COLECCIONES POR MARCA (TOCA PARA EXPANDIR)",
    drawerAddBtn: "+ Añadir",
    viewOrderListNum: "🛒 VER LISTA DE PEDIDO ({n})",
    orderViaWhatsApp: "💬 PEDIR POR WHATSAPP",
    
    // Cart page
    selectedFragrances: "🧴 Fragancias Seleccionadas",
    orderSummary: "Resumen de Selección",
    orderSummarySub: "Detalle y formato de tu pedido",
    lvCollection: "Colección Louis Vuitton",
    otherHouses: "Otras Casas",
    totalFragrances: "Total de Fragancias:",
    articleSingular: "artículo",
    articlePlural: "artículos",
    formattedListTitle: "📋 Lista Formateada para Pedido",
    copyBtn: "Copiar",
    copiedBtn: "¡Copiado! ✓",
    detailedFormat: "✨ Con Nombres (Detallado)",
    codeFormat: "🏷️ Solo Códigos (Bodega)",
    previewHint: "💡 Lista lista para copiar o enviar directamente por WhatsApp a nuestro asesor.",
    sendWhatsAppBtn: "💬 Enviar Pedido por WhatsApp",
    copyListBtn: "📋 Copiar Lista de Pedido",
    clearBtn: "Limpiar",
    emptyCartTitle: "Tu lista de selección está vacía.",
    emptyCartSub: "Agrega fragancias desde el catálogo para armar tu pedido personalizado.",
    exploreCollectionsBtn: "Explorar Colecciones",
    listCopiedToast: "¡Lista copiada al portapapeles! 📋",
    cartClearedToast: "Lista vaciada 🗑️",
    itemRemovedToast: "Fragancia eliminada de la lista 🗑️",
    confirmClear: "¿Deseas vaciar tu lista de selección?",
    emptyListToast: "Tu lista está vacía.",
    openingWhatsAppToast: "Abriendo WhatsApp... 💬",
    removeItemTitle: "Eliminar",
    decreaseAria: "Disminuir",
    increaseAria: "Aumentar",
    btnOrderSticky: "📋 Copiar Lista",
    btnWaSticky: "💬 Pedir WhatsApp",
    cartCopiedBtnFeedback: "✓ ¡Lista Copiada!",
    cartPromptManualCopy: "Copia tu lista manualmente:",
    
    // WhatsApp & Formatted order text
    orderHeader: "👑 ER PARFUM — Pedido de Selección",
    orderWarehouse: "📦 Almacén",
    warehouseLabel: "Almacén",
    warehouseBoxLabel: "📦 Almacén",
    totalItemsLabel: "Total Artículos:",
    totalFragrancesLabel: "Total de Fragancias:",
    waGreeting: "¡Hola ER PARFUM! 👋 Me gustaría cotizar / ordenar el siguiente pedido de selección:\n\n",
    unitSuffix: "uds.",
    
    // Genders
    women: "WOMEN",
    men: "MEN",
    unisex: "UNISEX"
  },
  en: {
    // Page Title & Header
    pageTitle: "ER PARFUM — Fragrances That Leave a Mark",
    cartPageTitle: "ER PARFUM — Selection List",
    collections: "COLLECTIONS ▾",
    searchPlaceholder: "Search perfume, notes or brand...",
    wh_IL: "IL Warehouse",
    wh_TX: "TX Warehouse",
    wh_bodega_IL: "🇺🇸 Warehouse IL",
    wh_bodega_TX: "🇺🇸 Warehouse TX",
    cartTitleTooltip: "View Order List",
    sideQuote1: "Elegance",
    sideQuote2: "in every",
    sideQuote3: "essence",
    slogan: "FRAGRANCES THAT LEAVE A MARK",
    backToCatalog: "← BACK TO CATALOG",
    selectionList: "SELECTION LIST",
    cartHeaderSubtitle: "SELECTION LIST",
    
    // Quick brand chips
    chipHotSelling: "🔥 Hot Selling",
    chipNew: "✨ New Arrivals",
    chipAll: "✦ View All A-Z",
    
    // Delivery Banner & Footer
    deliveriesSL: "DELIVERIES THROUGHOUT ST. LOUIS",
    deliveriesSL_sub: "FAST & SECURE",
    contactUs: "CONTACT US",
    followUs: "FOLLOW US",
    tagline: "ER PARFUM | MORE THAN A PERFUME, AN EXPERIENCE",
    
    // Catalog sections
    collectionPrefix: "COLLECTION ",
    hotSelling: "🔥 FEATURED FRAGRANCES (HOT SELLING)",
    newArrivals: "✨ RECENT ARRIVALS",
    allDirectory: "✦ COMPLETE A-Z DIRECTORY",
    resultsFor: 'RESULTS FOR: "',
    nextHouse: "Next House: ",
    exploreAllMenu: "☰ Explore All Brands in Menu",
    fragrancesCount: "fragrances",
    fragranceCountSingular: "fragrance",
    noPerfumesFound: "No perfumes found in this selection.",
    exploreInWarehouse: "Explore in Warehouse ",
    seeCollection: "View Collection >",
    defaultNotes: "Perfect balance and sensory harmony. Notes of noble citrus, warm amber, and refined woods.",
    
    // Card & Modal
    addToList: "+ ADD TO LIST",
    highDemand: "🔥 High Demand: Only {n} left in stock!",
    addedToast: "+{qty} {name} added to your list! 🛒",
    
    // Floating bar
    cartLabel: "List",
    viewCopyList: "VIEW / COPY LIST",
    
    // Drawer
    drawerTitle: "ER PARFUM",
    drawerSubtitle: "COLLECTIONS DIRECTORY",
    drawerSearchPlaceholder: "🔍 Filter in menu...",
    warehouseTabIL: "IL WAREHOUSE",
    warehouseTabTX: "TX WAREHOUSE",
    drawerFeatured: "FEATURED SELECTIONS",
    drawerHotSelling: "BEST SELLERS (HOT SELLING)",
    drawerNew: "RECENT ARRIVALS",
    drawerAll: "COMPLETE A-Z DIRECTORY",
    drawerByBrand: "COLLECTIONS BY BRAND (TAP TO EXPAND)",
    drawerAddBtn: "+ Add",
    viewOrderListNum: "🛒 VIEW ORDER LIST ({n})",
    orderViaWhatsApp: "💬 ORDER VIA WHATSAPP",
    
    // Cart page
    selectedFragrances: "🧴 Selected Fragrances",
    orderSummary: "Order Summary",
    orderSummarySub: "Order details and formatting",
    lvCollection: "Louis Vuitton Collection",
    otherHouses: "Other Houses",
    totalFragrances: "Total Fragrances:",
    articleSingular: "item",
    articlePlural: "items",
    formattedListTitle: "📋 Formatted Order List",
    copyBtn: "Copy",
    copiedBtn: "Copied! ✓",
    detailedFormat: "✨ With Names (Detailed)",
    codeFormat: "🏷️ Codes Only (Warehouse)",
    previewHint: "💡 List ready to copy or send directly via WhatsApp to our advisor.",
    sendWhatsAppBtn: "💬 Send Order via WhatsApp",
    copyListBtn: "📋 Copy Order List",
    clearBtn: "Clear",
    emptyCartTitle: "Your selection list is empty.",
    emptyCartSub: "Add fragrances from the catalog to build your custom order.",
    exploreCollectionsBtn: "Explore Collections",
    listCopiedToast: "Order list copied to clipboard! 📋",
    cartClearedToast: "List cleared 🗑️",
    itemRemovedToast: "Fragrance removed from list 🗑️",
    confirmClear: "Do you want to clear your selection list?",
    emptyListToast: "Your list is empty.",
    openingWhatsAppToast: "Opening WhatsApp... 💬",
    removeItemTitle: "Remove",
    decreaseAria: "Decrease",
    increaseAria: "Increase",
    btnOrderSticky: "📋 Copy List",
    btnWaSticky: "💬 Order WhatsApp",
    cartCopiedBtnFeedback: "✓ List Copied!",
    cartPromptManualCopy: "Copy your list manually:",
    
    // WhatsApp & Formatted order text
    orderHeader: "👑 ER PARFUM — Selection Order",
    orderWarehouse: "📦 Warehouse",
    warehouseLabel: "Warehouse",
    warehouseBoxLabel: "📦 Warehouse",
    totalItemsLabel: "Total Items:",
    totalFragrancesLabel: "Total Fragrances:",
    waGreeting: "Hello ER PARFUM! 👋 I would like to quote / order the following selection list:\n\n",
    unitSuffix: "units",
    
    // Genders
    women: "WOMEN",
    men: "MEN",
    unisex: "UNISEX"
  }
};

function detectInitialLanguage() {
  try {
    const saved = localStorage.getItem("er_parfum_lang");
    if (saved === "en" || saved === "es") return saved;
  } catch (e) {}

  // Auto-detect browser/phone language preference list
  const navLangs = navigator.languages ? Array.from(navigator.languages) : [];
  if (navigator.language) navLangs.push(navigator.language);
  if (navigator.userLanguage) navLangs.push(navigator.userLanguage);
  if (navigator.browserLanguage) navLangs.push(navigator.browserLanguage);

  for (const l of navLangs) {
    if (typeof l === "string") {
      const code = l.toLowerCase();
      if (code.startsWith("en")) return "en";
      if (code.startsWith("es")) return "es";
    }
  }

  return "es";
}

let currentLang = detectInitialLanguage();

function t(key, params = {}) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  let text = dict[key] !== undefined ? dict[key] : (TRANSLATIONS.es[key] !== undefined ? TRANSLATIONS.es[key] : key);
  if (typeof text === "string" && params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), v);
    }
  }
  return text;
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "es") lang = "es";
  currentLang = lang;
  window.currentLang = currentLang;
  try {
    localStorage.setItem("er_parfum_lang", currentLang);
  } catch (e) {}
  applyLanguageToDOM();
}

function toggleLanguage() {
  setLanguage(currentLang === "es" ? "en" : "es");
}

function applyLanguageToDOM() {
  document.documentElement.lang = currentLang;

  // Title tag update
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    document.title = t(titleEl.getAttribute("data-i18n"));
  }

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.tagName.toLowerCase() === "title") {
      document.title = t(el.getAttribute("data-i18n"));
      return;
    }
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = t(key);
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key) {
      el.innerHTML = t(key);
    }
  });

  // Update elements with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) {
      el.placeholder = t(key);
    }
  });

  // Update elements with data-i18n-title
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key) {
      el.title = t(key);
    }
  });

  // Update elements with data-i18n-aria-label
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (key) {
      el.setAttribute("aria-label", t(key));
    }
  });

  // Update language toggle button label across all pages
  const langLabels = document.querySelectorAll(".lang-switch-text, #top-lang-text, #cart-lang-text");
  langLabels.forEach((el) => {
    el.textContent = currentLang === "es" ? "ES" : "EN";
  });
  const langFlags = document.querySelectorAll(".lang-switch-flag, #top-lang-flag, #cart-lang-flag");
  langFlags.forEach((el) => {
    el.textContent = currentLang === "es" ? "🇲🇽" : "🇺🇸";
  });
  const langBtns = document.querySelectorAll("#top-lang-btn, #cart-lang-btn, .lang-switch-btn");
  langBtns.forEach((el) => {
    el.title = currentLang === "es" ? "Cambiar a Inglés (EN)" : "Switch to Spanish (ES)";
  });

  // Dispatch global event for pages to re-render dynamic catalogs or carts
  document.dispatchEvent(new CustomEvent("erLanguageChanged", { detail: { lang: currentLang } }));
}

// Expose globals
window.TRANSLATIONS = TRANSLATIONS;
window.currentLang = currentLang;
window.t = t;
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
window.applyLanguageToDOM = applyLanguageToDOM;

// Run automatically when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyLanguageToDOM);
} else {
  applyLanguageToDOM();
}
