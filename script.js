
const sizeOptions = [
  { id: "small",  label: "Small",  delta: -0.5 },
  { id: "medium", label: "Medium", delta: 0 },
  { id: "large",  label: "Large",  delta: 0.75 },
];

const milkOptions = [
  { id: "whole",  label: "Whole Milk",  delta: 0 },
  { id: "oat",    label: "Oat Milk",    delta: 0.5 },
  { id: "almond", label: "Almond Milk", delta: 0.5 },
  { id: "none",   label: "No Milk",     delta: 0 },
];

const SHOT_PRICE = 0.75;

const products = [
  // --- Cakes ---
  { id: "chocolate-cake", name: "Chocolate Cake", category: "cake", desc: "Rich layered cake with dark cocoa.", price: 5.5,  icon: "🍫", color: "#C6A483", hasSize: false, hasMilk: false, hasShots: false, fact: "Our chocolate cake uses 70% dark cocoa from a small family-run farm." },
  { id: "cheesecake",      name: "Cheesecake",     category: "cake", desc: "Creamy classic, baked in small batches.", price: 5.75, icon: "🍰", color: "#F1E3C4", hasSize: false, hasMilk: false, hasShots: false, fact: "Each cheesecake rests overnight in the fridge before it's ever served." },
  { id: "carrot-cake",     name: "Carrot Cake",    category: "cake", desc: "Moist cake with a hint of cinnamon.", price: 5.25, icon: "🥕", color: "#E8C79A", hasSize: false, hasMilk: false, hasShots: false, fact: "Made with fresh grated carrots — no canned filling, ever." },
  { id: "tiramisu",        name: "Tiramisu",       category: "cake", desc: "Espresso-soaked layers, mascarpone cream.", price: 6.0, icon: "🍮", color: "#D8C4A0", hasSize: false, hasMilk: false, hasShots: false, fact: "Layered with real espresso-soaked ladyfingers, not syrup." },
  { id: "lemon-cake",      name: "Lemon Cake",     category: "cake", desc: "Light sponge with fresh lemon zest.", price: 5.0, icon: "🍋", color: "#EFE1A8", hasSize: false, hasMilk: false, hasShots: false, fact: "Zested from fresh lemons the same morning it's baked." },

  // --- Hot drinks ---
  { id: "espresso",     name: "Espresso",     category: "hot", desc: "Bold and concentrated, our signature blend.", price: 3.5,  icon: "☕", color: "#E4D3B4", hasSize: true, hasMilk: false, hasShots: true, fact: "A double shot is pulled in under 25 seconds for the best crema." },
  { id: "latte",        name: "Latte",        category: "hot", desc: "Espresso with steamed milk and light foam.", price: 4.5,  icon: "🥛", color: "#EFE1C6", hasSize: true, hasMilk: true, hasShots: true, fact: "New baristas here spend about three months mastering latte art." },
  { id: "cappuccino",   name: "Cappuccino",   category: "hot", desc: "Equal parts espresso, milk, and foam.", price: 4.25, icon: "☕", color: "#DDC49B", hasSize: true, hasMilk: true, hasShots: true, fact: "Traditionally, a cappuccino is never ordered in Italy after 11am." },
  { id: "mocha",        name: "Mocha",        category: "hot", desc: "Espresso, chocolate, and steamed milk.", price: 4.75, icon: "🍫", color: "#C6A483", hasSize: true, hasMilk: true, hasShots: true, fact: "We melt real chocolate for this — not chocolate syrup." },
  { id: "americano",    name: "Americano",    category: "hot", desc: "Espresso lengthened with hot water.", price: 3.75, icon: "☕", color: "#D9C2A0", hasSize: true, hasMilk: false, hasShots: true, fact: "Named after WWII soldiers who diluted espresso to taste like home." },
  { id: "flat-white",   name: "Flat White",   category: "hot", desc: "Espresso with silky microfoam milk.", price: 4.5,  icon: "🥛", color: "#EAD9BC", hasSize: true, hasMilk: true, hasShots: true, fact: "Originated in Australia/New Zealand — it's all about the microfoam." },
  { id: "chai-latte",   name: "Chai Latte",   category: "hot", desc: "Spiced tea with steamed milk.", price: 4.0,  icon: "🍵", color: "#EAD09D", hasSize: true, hasMilk: true, hasShots: false, fact: "Our chai blend is steeped with real cinnamon and cardamom pods." },
  { id: "hot-chocolate", name: "Hot Chocolate", category: "hot", desc: "Steamed milk with melted dark chocolate.", price: 4.25, icon: "🍫", color: "#C9AE86", hasSize: true, hasMilk: true, hasShots: false, fact: "Made with 60% dark chocolate, not cocoa powder." },

  // --- Cold drinks ---
  { id: "iced-coffee", name: "Iced Coffee", category: "cold", desc: "Slow-brewed and served over ice.", price: 4.0, icon: "🧊", color: "#E7EEDF", hasSize: true, hasMilk: false, hasShots: true, fact: "Brewed hot then rapid-chilled to lock in flavor without watering it down." },
  { id: "iced-latte",  name: "Iced Latte",  category: "cold", desc: "Espresso and cold milk over ice.", price: 4.75, icon: "🥛", color: "#EFE1C6", hasSize: true, hasMilk: true, hasShots: true, fact: "Poured in a specific order so the espresso layer stays visible." },
  { id: "cold-brew",   name: "Cold Brew",   category: "cold", desc: "Steeped 18 hours for a smooth taste.", price: 4.25, icon: "🧊", color: "#DCC9A6", hasSize: true, hasMilk: false, hasShots: true, fact: "Steeped in cold water for 18 hours, so it's naturally less acidic." },
  { id: "frappe",      name: "Frappé",      category: "cold", desc: "Blended iced coffee, milkshake-thick.", price: 5.0, icon: "🥤", color: "#D8C4A0", hasSize: true, hasMilk: true, hasShots: true, fact: "Blended with ice until it reaches a milkshake-like texture." },
  { id: "iced-mocha",  name: "Iced Mocha",  category: "cold", desc: "Chocolate, espresso, and cold milk.", price: 5.0, icon: "🍫", color: "#C6A483", hasSize: true, hasMilk: true, hasShots: true, fact: "Chocolate goes in first, so it swirls through the drink as you sip." },
  { id: "lemonade",    name: "Lemonade",   category: "cold", desc: "Fresh-squeezed, lightly sweetened.", price: 3.75, icon: "🍋", color: "#EFE1A8", hasSize: true, hasMilk: false, hasShots: false, fact: "Fresh-squeezed every morning — no concentrate, ever." },
  { id: "iced-chai",   name: "Iced Chai",  category: "cold", desc: "Spiced chai over ice with cold milk.", price: 4.25, icon: "🍵", color: "#EAD09D", hasSize: true, hasMilk: true, hasShots: false, fact: "Same spice blend as our hot chai, just served cold." },
];

const CART_STORAGE_KEY = "brewhaven.cart";
const RESERVATION_STORAGE_KEY = "brewhaven.reservation";
const THEME_STORAGE_KEY = "brewhaven.theme";

let cart = loadCart();
let menuFilter = "all";
let menuSort = null;
let reservation = loadReservation();
let selectedTableEl = null;

function loadCart(){
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveCart(){
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}
function loadReservation(){
  try {
    const raw = localStorage.getItem(RESERVATION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveReservation(){
  localStorage.setItem(RESERVATION_STORAGE_KEY, JSON.stringify(reservation));
}
function formatPrice(value){
  return `$${value.toFixed(2)}`;
}

const menuGrid = document.getElementById("menuGrid");
const menuEmpty = document.getElementById("menuEmpty");

function getVisibleProducts(){
  let list = menuFilter === "all" ? products.slice() : products.filter(p => p.category === menuFilter);
  if (menuSort === "asc") list.sort((a, b) => a.price - b.price);
  if (menuSort === "desc") list.sort((a, b) => b.price - a.price);
  return list;
}

function renderMenu(){
  const list = getVisibleProducts();
  menuEmpty.hidden = list.length !== 0;
  menuGrid.innerHTML = list.map(p => `
    <article class="menu-card">
      <div class="menu-card-icon" style="background:${p.color}">${p.icon}</div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="menu-card-foot">
        <span class="price">${formatPrice(p.price)}</span>
        <button class="add-btn" data-id="${p.id}" aria-label="Customize and add ${p.name}">+</button>
      </div>
    </article>
  `).join("");
}
renderMenu();

menuGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addRipple(btn, e);
  openCustomizeModal(btn.dataset.id);
});

document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    menuFilter = btn.dataset.filter;
    renderMenu();
  });
});

document.querySelectorAll("[data-sort]").forEach(btn => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("active");
    document.querySelectorAll("[data-sort]").forEach(b => b.classList.remove("active"));
    if (isActive) {
      menuSort = null;
    } else {
      btn.classList.add("active");
      menuSort = btn.dataset.sort;
    }
    renderMenu();
  });
});

const customizeModal = document.getElementById("customizeModal");
const customizeOverlay = document.getElementById("customizeOverlay");
const customizeTitle = document.getElementById("customizeTitle");
const customizeFact = document.getElementById("customizeFact");
const sizeGroup = document.getElementById("sizeGroup");
const milkGroup = document.getElementById("milkGroup");
const shotGroup = document.getElementById("shotGroup");
const sizeChoices = document.getElementById("sizeChoices");
const milkChoices = document.getElementById("milkChoices");
const shotCount = document.getElementById("shotCount");
const customizeTotal = document.getElementById("customizeTotal");
const customizeAddBtn = document.getElementById("customizeAddBtn");
const closeCustomizeBtn = document.getElementById("closeCustomize");

let activeProduct = null;
let activeSelection = { size: "medium", milk: "whole", shots: 0 };

function openCustomizeModal(productId){
  activeProduct = products.find(p => p.id === productId);
  activeSelection = { size: "medium", milk: "whole", shots: 0 };

  customizeTitle.textContent = activeProduct.name;
  customizeFact.textContent = activeProduct.fact;

  sizeGroup.hidden = !activeProduct.hasSize;
  milkGroup.hidden = !activeProduct.hasMilk;
  shotGroup.hidden = !activeProduct.hasShots;

  sizeChoices.innerHTML = sizeOptions.map(o => `
    <button type="button" data-size="${o.id}" class="${o.id === activeSelection.size ? "selected" : ""}">${o.label}</button>
  `).join("");

  milkChoices.innerHTML = milkOptions.map(o => `
    <button type="button" data-milk="${o.id}" class="${o.id === activeSelection.milk ? "selected" : ""}">${o.label}</button>
  `).join("");

  shotCount.textContent = activeSelection.shots;

  updateCustomizeTotal();

  customizeModal.hidden = false;
  customizeOverlay.hidden = false;
  requestAnimationFrame(() => {
    customizeModal.classList.add("open");
    customizeOverlay.classList.add("open");
  });
}

function closeCustomizeModal(){
  customizeModal.classList.remove("open");
  customizeOverlay.classList.remove("open");
  setTimeout(() => {
    customizeModal.hidden = true;
    customizeOverlay.hidden = true;
  }, 250);
}

sizeChoices.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-size]");
  if (!btn) return;
  activeSelection.size = btn.dataset.size;
  sizeChoices.querySelectorAll("button").forEach(b => b.classList.toggle("selected", b === btn));
  updateCustomizeTotal();
});

milkChoices.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-milk]");
  if (!btn) return;
  activeSelection.milk = btn.dataset.milk;
  milkChoices.querySelectorAll("button").forEach(b => b.classList.toggle("selected", b === btn));
  updateCustomizeTotal();
});

document.getElementById("shotIncrease").addEventListener("click", () => {
  activeSelection.shots += 1;
  shotCount.textContent = activeSelection.shots;
  updateCustomizeTotal();
});
document.getElementById("shotDecrease").addEventListener("click", () => {
  activeSelection.shots = Math.max(0, activeSelection.shots - 1);
  shotCount.textContent = activeSelection.shots;
  updateCustomizeTotal();
});

function computePrice(product, selection){
  let total = product.price;
  if (product.hasSize) total += sizeOptions.find(o => o.id === selection.size).delta;
  if (product.hasMilk) total += milkOptions.find(o => o.id === selection.milk).delta;
  if (product.hasShots) total += selection.shots * SHOT_PRICE;
  return total;
}

function buildOptionLabel(product, selection){
  const parts = [];
  if (product.hasSize) parts.push(sizeOptions.find(o => o.id === selection.size).label);
  if (product.hasMilk) parts.push(milkOptions.find(o => o.id === selection.milk).label);
  if (product.hasShots && selection.shots > 0) parts.push(`+${selection.shots} shot${selection.shots > 1 ? "s" : ""}`);
  return parts.join(", ");
}

function updateCustomizeTotal(){
  customizeTotal.textContent = formatPrice(computePrice(activeProduct, activeSelection));
}

customizeAddBtn.addEventListener("click", () => {
  const price = computePrice(activeProduct, activeSelection);
  const optionLabel = buildOptionLabel(activeProduct, activeSelection);
  const lineId = [
    activeProduct.id,
    activeProduct.hasSize ? activeSelection.size : "",
    activeProduct.hasMilk ? activeSelection.milk : "",
    activeProduct.hasShots ? activeSelection.shots : "",
  ].join("::");

  const existing = cart.find(item => item.lineId === lineId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      lineId,
      id: activeProduct.id,
      name: activeProduct.name,
      optionLabel,
      price,
      qty: 1,
    });
  }
  saveCart();
  renderCart();
  bumpBadge();
  closeCustomizeModal();
});

closeCustomizeBtn.addEventListener("click", closeCustomizeModal);
customizeOverlay.addEventListener("click", closeCustomizeModal);

function changeQty(lineId, delta){
  const item = cart.find(i => i.lineId === lineId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.lineId !== lineId);
  }
  saveCart();
  renderCart();
}

function removeItem(lineId){
  cart = cart.filter(i => i.lineId !== lineId);
  saveCart();
  renderCart();
}

const drawerItems = document.getElementById("drawerItems");
const cartBadge = document.getElementById("cartBadge");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartBtn = document.getElementById("cartBtn");

function renderCart(){
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  cartBadge.textContent = totalQty;
  cartSubtotal.textContent = formatPrice(subtotal);
  checkoutBtn.disabled = cart.length === 0;
  cartBtn.setAttribute("aria-label", `Open cart, ${totalQty} item${totalQty === 1 ? "" : "s"}`);

  if (cart.length === 0) {
    drawerItems.innerHTML = `
      <div class="empty-cart">
        <span aria-hidden="true">🛒</span>
        <p>Your cart is empty.</p>
      </div>`;
    return;
  }

  drawerItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${item.name}</div>
        ${item.optionLabel ? `<div class="cart-item-price">${item.optionLabel}</div>` : ""}
        <div class="cart-item-price">${formatPrice(item.price)} each</div>
        <button class="remove-btn" data-line-id="${item.lineId}">Remove</button>
      </div>
      <div class="qty-control">
        <button class="qty-decrease" data-line-id="${item.lineId}" aria-label="Decrease quantity of ${item.name}">&minus;</button>
        <span>${item.qty}</span>
        <button class="qty-increase" data-line-id="${item.lineId}" aria-label="Increase quantity of ${item.name}">+</button>
      </div>
    </div>
  `).join("");
}

drawerItems.addEventListener("click", (e) => {
  const lineId = e.target.dataset.lineId;
  if (!lineId) return;
  if (e.target.classList.contains("qty-increase")) changeQty(lineId, 1);
  if (e.target.classList.contains("qty-decrease")) changeQty(lineId, -1);
  if (e.target.classList.contains("remove-btn")) removeItem(lineId);
});

function bumpBadge(){
  cartBadge.classList.remove("bump");
  void cartBadge.offsetWidth;
  cartBadge.classList.add("bump");
}

checkoutBtn.addEventListener("click", () => {
  if (checkoutBtn.disabled) return;

  const lines = cart.map(item => {
    const optionPart = item.optionLabel ? ` (${item.optionLabel})` : "";
    return `${item.qty} x ${item.name}${optionPart} — ${formatPrice(item.price * item.qty)}`;
  });
  const subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  let receipt = "Brew Haven — Order Confirmed ✓\n\n" + lines.join("\n");
  receipt += `\n\nTotal paid: ${formatPrice(subtotal)}`;

  if (reservation) {
    receipt += `\n\nTable ${reservation.table} reserved for ${formatTime(reservation.time)}.`;
  }

  receipt += "\n\nThank you — your order was placed successfully!";
  alert(receipt);

  cart = [];
  saveCart();
  renderCart();
  closeDrawer();
});

const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const closeDrawerBtn = document.getElementById("closeDrawer");

function openDrawer(){
  drawer.hidden = false;
  overlay.hidden = false;
  requestAnimationFrame(() => {
    drawer.classList.add("open");
    overlay.classList.add("open");
  });
  closeDrawerBtn.focus();
}
function closeDrawer(){
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  setTimeout(() => {
    drawer.hidden = true;
    overlay.hidden = true;
  }, 350);
}

cartBtn.addEventListener("click", openDrawer);
closeDrawerBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (drawer.classList.contains("open")) closeDrawer();
  if (customizeModal.classList.contains("open")) closeCustomizeModal();
});

const menuToggle = document.getElementById("menuToggle");
const navLinksEl = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinksEl.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinksEl.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinksEl.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const tableMap = document.getElementById("tableMap");
const reserveStatus = document.getElementById("reserveStatus");
const reserveForm = document.getElementById("reserveForm");
const reserveTimeSelect = document.getElementById("reserveTime");
const confirmReserveBtn = document.getElementById("confirmReserveBtn");
const cancelReserveBtn = document.getElementById("cancelReserveBtn");

const tablePositions = [
  { table: 1, cx: 110, cy: 110 },
  { table: 2, cx: 210, cy: 110 },
  { table: 3, cx: 90,  cy: 180 },
  { table: 4, cx: 230, cy: 180 },
  { table: 5, cx: 130, cy: 235 },
  { table: 6, cx: 190, cy: 235 },
];

tablePositions.forEach(pos => {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("class", "table-seat");
  g.setAttribute("data-table", pos.table);
  g.setAttribute("tabindex", "0");
  g.setAttribute("role", "button");
  g.setAttribute("aria-label", `Table ${pos.table}`);
  g.innerHTML = `
    <circle cx="${pos.cx}" cy="${pos.cy}" r="24"></circle>
    <text x="${pos.cx}" y="${pos.cy}">${pos.table}</text>
  `;
  tableMap.appendChild(g);
});
if (reservation) {
  const savedSeat = document.querySelector(`[data-table="${reservation.table}"]`);
  if (savedSeat) savedSeat.classList.add("reserved");
  reserveStatus.textContent = `Table ${reservation.table} is reserved for ${formatTime(reservation.time)}.`;
}

function formatTime(value){
  const [h, m] = value.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

tableMap.addEventListener("click", (e) => {
  const seat = e.target.closest(".table-seat");
  if (!seat || seat.classList.contains("reserved")) return;

  if (selectedTableEl) selectedTableEl.classList.remove("selected");
  seat.classList.add("selected");
  selectedTableEl = seat;

  reserveStatus.textContent = `Table ${seat.dataset.table} selected — choose a time and confirm.`;
  reserveForm.hidden = false;
});

confirmReserveBtn.addEventListener("click", () => {
  if (!selectedTableEl) return;
  const table = selectedTableEl.dataset.table;
  const time = reserveTimeSelect.value;

  reservation = { table, time };
  saveReservation();
  selectedTableEl.classList.remove("selected");
  selectedTableEl.classList.add("reserved");
  reserveForm.hidden = true;
  reserveStatus.textContent = `Table ${table} is reserved for ${formatTime(time)}. It will be included on your receipt at checkout.`;
  selectedTableEl = null;
});

cancelReserveBtn.addEventListener("click", () => {
  if (selectedTableEl) selectedTableEl.classList.remove("selected");
  selectedTableEl = null;
  reserveForm.hidden = true;
  reserveStatus.textContent = reservation
    ? `Table ${reservation.table} is reserved for ${formatTime(reservation.time)}.`
    : "Select a table on the map to begin.";
});

const htmlEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme){
  htmlEl.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-pressed", theme === "dark");
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

function addRipple(button, event){
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${(event.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2}px`;
  ripple.style.top = `${(event.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => addRipple(btn, e));
});

const navLinks = document.querySelectorAll("[data-nav-link]");
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(section => spyObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  if (!email) return;
  newsletterMessage.textContent = `Thanks — we'll send new roasts to ${email}.`;
  newsletterForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

renderCart();