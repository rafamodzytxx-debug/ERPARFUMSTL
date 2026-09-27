// Customer-facing catalog. Prices are intentionally not mapped into products.
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRFWYImNbJ0ao5z0VDk_VZwhOP1pnY2UZdFuwxtYOvKaNfEX4sInJh7uk-MlRSH9kffdZ5TjzhudLao/pub?gid=1967485424&single=true&output=csv";
const PRODUCT_CACHE_KEY = "bestProducts1FastCatalogProductsV1";
const PRODUCT_TIME_KEY = "bestProducts1FastCatalogTimeV1";
const CART_STORAGE_KEY = "bestProducts1FastCatalogCartV1";
const CACHE_DURATION = 5 * 60 * 1000;
const MIN_STOCK = 19;

// In-memory safe storage fallback for iOS / Private Browsing / WhatsApp Webview
const safeStorage = {
  _mem: {},
  getItem(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {}
    return this._mem[key] || null;
  },
  setItem(key, val) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, val);
        return;
      }
    } catch (e) {}
    this._mem[key] = String(val);
  },
  removeItem(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
        return;
      }
    } catch (e) {}
    delete this._mem[key];
  }
};
window.safeStorage = safeStorage;

window.perfumeDB = (Array.isArray(window.perfumeDB) && window.perfumeDB.length > 0) 
  ? window.perfumeDB 
  : ((typeof window.PERFUMES_DATA !== "undefined" && Array.isArray(window.PERFUMES_DATA)) ? window.PERFUMES_DATA : []);

function parseCsvRows(csvText) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  const text = String(csvText || "").replace(/^\uFEFF/, "");
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"') {
      if (quoted && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[index + 1] === "\n") index += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }
  if (quoted) throw new Error("Incomplete quoted product data");
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function parseCSV(csvText) {
  const rows = parseCsvRows(csvText);
  if (rows.length < 2) return [];
  const headers = rows.shift().map((header) => header.toLowerCase());
  return rows.map((values) => {
    const record = Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
    const id = String(record.sku || "").trim().toUpperCase();
    const warehouse = id.match(/^(IL|TX)-/);
    const stock = Number(record.stock);
    if (!warehouse || !record.name || !Number.isFinite(stock) || stock < MIN_STOCK || !(Number(record.price) > 0)) return null;
    const rawImg = record.image_url || "";
    const fn = rawImg.split("/").pop();
    const localImg = fn ? `images/${fn}` : rawImg;
    return {
      id,
      name: record.name,
      brand: record.brand || "",
      gender: record.target || "",
      ml: record.ml || "",
      img: localImg,
      remoteImg: rawImg,
      stock,
      inventory: stock,
      warehouse: warehouse[1],
      top: Number(record.hot_selling_weight) || 0,
      new: Number(record.new_arrival_weight) || 0,
      notes: record.notes || "",
    };
  }).filter(Boolean);
}

function readFastCart() {
  try {
    const cart = JSON.parse(safeStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function writeFastCart(cart) {
  try {
    safeStorage.setItem(CART_STORAGE_KEY, JSON.stringify(Array.isArray(cart) ? cart : []));
  } catch (e) {}
}

function clearFastCart() {
  try {
    safeStorage.removeItem(CART_STORAGE_KEY);
  } catch (e) {}
}

function getBrandCategories(products) {
  const categories = new Map();
  for (const product of products) {
    const name = String(product.brand || "").trim();
    if (!name) continue;
    const key = name.toLocaleLowerCase();
    const current = categories.get(key);
    if (current) current.count += 1;
    else categories.set(key, { name, count: 1 });
  }
  return [...categories.values()].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

function runPageLogic() {
  try {
    if (typeof renderHome === "function") renderHome();
    if (typeof renderGridPage === "function") renderGridPage();
    if (typeof renderCart === "function") renderCart();
    if (typeof renderMainCatalog === "function") {
      if (typeof renderBrandChips === "function") renderBrandChips();
      if (typeof renderDrawerList === "function") renderDrawerList();
      renderMainCatalog();
    }
  } catch (err) {
    console.error("Error running page logic:", err);
  }
}

async function initProductData() {
  if (Array.isArray(window.perfumeDB) && window.perfumeDB.length > 0) {
    runPageLogic();
    return;
  }
  if (Array.isArray(window.PERFUMES_DATA) && window.PERFUMES_DATA.length > 0) {
    window.perfumeDB = window.PERFUMES_DATA;
    runPageLogic();
    return;
  }

  let cachedProducts = [];
  try {
    const cachedAt = Number(safeStorage.getItem(PRODUCT_TIME_KEY));
    const parsed = JSON.parse(safeStorage.getItem(PRODUCT_CACHE_KEY) || "[]");
    if (Array.isArray(parsed) && parsed.length) cachedProducts = parsed;
    if (cachedProducts.length && Date.now() - cachedAt < CACHE_DURATION) {
      window.perfumeDB = cachedProducts;
      runPageLogic();
      return;
    }
  } catch (e) {
    // Ignore storage restrictions
  }

  try {
    const response = await fetch(`${SHEET_URL}&_=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Product sheet returned ${response.status}`);
    const products = parseCSV(await response.text());
    if (products && products.length) {
      window.perfumeDB = products;
      try {
        safeStorage.setItem(PRODUCT_CACHE_KEY, JSON.stringify(products));
        safeStorage.setItem(PRODUCT_TIME_KEY, String(Date.now()));
      } catch (e) {}
      runPageLogic();
    }
  } catch (error) {
    console.warn("Could not refresh products from Google Sheets (using local data):", error);
    if (!window.perfumeDB || !window.perfumeDB.length) {
      if (Array.isArray(window.PERFUMES_DATA) && window.PERFUMES_DATA.length) {
        window.perfumeDB = window.PERFUMES_DATA;
      } else if (cachedProducts.length) {
        window.perfumeDB = cachedProducts;
      }
      runPageLogic();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initProductData();
  } catch (e) {
    console.error("Error in initProductData:", e);
  }
});
