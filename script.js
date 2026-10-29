
// ==========================================
// INGREDIENTES EXCLUSIVOS DE LA PIZZA A MI GUSTO
// ==========================================
const ingredientesPizza = [
    { id: 'p-aceitunas-n', name: 'Aceitunas Negras', img: 'IM/ING/ACEITUNA NEGRA.png' },
    { id: 'p-aceitunas-v', name: 'Aceitunas Verdes', img: 'IM/ING/ACEITUNA VERDE.png' },
    { id: 'p-aji', name: 'Ají', img: 'IM/ING/AJI.png' },
    { id: 'p-albahaca', name: 'Albahaca', img: 'IM/ING/ALBAHACA.png' },
    { id: 'p-cabanossi', name: 'Cabanossi', img: 'IM/ING/CABANOSSI.png' },
    { id: 'p-cebolla', name: 'Cebolla', img: 'IM/ING/CEBOLLA.png' },
    { id: 'p-cecina', name: 'Cecina', img: 'IM/ING/CECINA.png' },
    { id: 'p-champinones', name: 'Champiñones', img: 'IM/ING/CHAMPIGÑONES.png' },
    { id: 'p-chorizo', name: 'Chorizo', img: 'IM/ING/CHORIZO.png' },
    { id: 'p-durazno', name: 'Durazno', img: 'IM/ING/DURAZNO.png' },
    { id: 'p-esparrago', name: 'Espárrago', img: 'IM/ING/ESPARRAGO.png' },
    { id: 'p-hotdog', name: 'Hot Dog', img: 'IM/ING/HOT DOG.png' },
    { id: 'p-jamon', name: 'Jamón', img: 'IM/ING/JAMON.png' },
    { id: 'p-papaya', name: 'Papaya', img: 'IM/ING/PAPAYA.png' },
    { id: 'p-pepperoni', name: 'Pepperoni', img: 'IM/ING/PEPPERONI.png' },
    { id: 'p-pimiento', name: 'Pimiento', img: 'IM/ING/PIMIENTO.png' },
    { id: 'p-pina', name: 'Piña', img: 'IM/ING/PIÑA.png' },
    { id: 'p-platano', name: 'Plátano', img: 'IM/ING/PLATANO.png' },
    { id: 'p-pollo', name: 'Pollo', img: 'IM/ING/POLLO.png' },
    { id: 'p-salame', name: 'Salame', img: 'IM/ING/SALAME.png' },
    { id: 'p-salchicha', name: 'Salchicha', img: 'IM/ING/SALCHICHA.png' },
    { id: 'p-tocino', name: 'Tocino', img: 'IM/ING/TOCINO.png' },
    { id: 'p-tomate', name: 'Tomate en rodajas', img: 'IM/ING/TOMATE.png' }
];

// ==========================================
// INGREDIENTES EXCLUSIVOS DEL CALZONE A MI GUSTO
// ==========================================
const ingredientesCalzone = [
    { id: 'c-aceitunas-n', name: 'Aceitunas Negras', img: 'IM/ING/ACEITUNA NEGRA.png' },
    { id: 'c-aceitunas-v', name: 'Aceitunas Verdes', img: 'IM/ING/ACEITUNA VERDE.png' },
    { id: 'c-aji', name: 'Ají', img: 'IM/ING/AJI.png' },
    { id: 'c-albahaca', name: 'Albahaca', img: 'IM/ING/ALBAHACA.png' },
    { id: 'c-cabanossi', name: 'Cabanossi', img: 'IM/ING/CABANOSSI.png' },
    { id: 'c-cebolla', name: 'Cebolla', img: 'IM/ING/CEBOLLA.png' },
    { id: 'c-cecina', name: 'Cecina', img: 'IM/ING/CECINA.png' },
    { id: 'c-champinones', name: 'Champiñones', img: 'IM/ING/CHAMPIGÑONES.png' },
    { id: 'c-chorizo', name: 'Chorizo', img: 'IM/ING/CHORIZO.png' },
    { id: 'c-durazno', name: 'Durazno', img: 'IM/ING/DURAZNO.png' },
    { id: 'c-esparrago', name: 'Espárrago', img: 'IM/ING/ESPARRAGO.png' },
    { id: 'c-hotdog', name: 'Hot Dog', img: 'IM/ING/HOT DOG.png' },
    { id: 'c-jamon', name: 'Jamón', img: 'IM/ING/JAMON.png' },
    { id: 'c-papaya', name: 'Papaya', img: 'IM/ING/PAPAYA.png' },
    { id: 'c-pepperoni', name: 'Pepperoni', img: 'IM/ING/PEPPERONI.png' },
    { id: 'c-pimiento', name: 'Pimiento', img: 'IM/ING/PIMIENTO.png' },
    { id: 'c-pina', name: 'Piña', img: 'IM/ING/PIÑA.png' },
    { id: 'c-platano', name: 'Plátano', img: 'IM/ING/PLATANO.png' },
    { id: 'c-pollo', name: 'Pollo', img: 'IM/ING/POLLO.png' },
    { id: 'c-salame', name: 'Salame', img: 'IM/ING/SALAME.png' },
    { id: 'c-salchicha', name: 'Salchicha', img: 'IM/ING/SALCHICHA.png' },
    { id: 'c-tocino', name: 'Tocino', img: 'IM/ING/TOCINO.png' },
    { id: 'c-tomate', name: 'Tomate en rodajas', img: 'IM/ING/TOMATE.png' }
];

// --- Pizza A Mi Gusto App Logic ---
const pizzaAmigustoApp = {
    state: {
        isOpen: false,
        limit: 4,
        selected: [],
        currentSizeName: '',
        currentPrice: 18.00,
        currentImg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
    },

    ingredients: ingredientesPizza,

    init() {
        const grid = document.getElementById('pizza-amigusto-ingredients-grid');
        if (!grid) return;

        grid.innerHTML = this.ingredients.map(ing => `
            <div id="pizza-card-${ing.id}" class="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-gray-200 transition-colors flex flex-col">
                <div class="h-24 w-full bg-gray-100 overflow-hidden relative">
                    <img src="${ing.img}" alt="${ing.name}" class="w-full h-full object-cover">
                    <div id="pizza-overlay-${ing.id}" class="absolute inset-0 bg-red-600/20 hidden"></div>
                </div>
                <div class="p-3 flex flex-col flex-grow items-center text-center">
                    <span class="text-[11px] font-bold text-gray-800 leading-tight mb-2 flex-grow line-clamp-2">${ing.name}</span>
                    <button id="pizza-btn-${ing.id}" onclick="pizzaAmigustoApp.toggleIngredient('${ing.id}')" class="w-full py-1.5 rounded-lg border border-gray-200 text-[10px] font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                        <div class="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                        </div>
                        Seleccionar
                    </button>
                </div>
            </div>
        `).join('');
    },

    updateSizeLimit(limit, sizeName, price, img) {
        this.state.limit = limit;
        this.state.currentSizeName = sizeName;
        this.state.currentPrice = price;
        this.state.currentImg = img;

        if (this.state.selected.length > this.state.limit) {
            this.state.selected = this.state.selected.slice(0, this.state.limit);
        }
        this.updateUI();
    },

    openModal() {
        const sizeBtn = document.querySelector(`button[data-pizza-id="4"].selected-size`);
        if (!sizeBtn) {
            alert('Seleccione un tamaño primero (Personal, Mediana o Familiar) para la pizza A Mi Gusto.');
            return;
        }

        const name = sizeBtn.getAttribute('data-name');
        const price = parseFloat(sizeBtn.getAttribute('data-price'));
        const img = sizeBtn.getAttribute('data-img');
        const isPersonal = name.includes('Personal');
        const limit = isPersonal ? 4 : 6;

        this.updateSizeLimit(limit, name, price, img);

        const titleEl = document.getElementById('pizza-amigusto-modal-title');
        const imgEl = document.getElementById('pizza-amigusto-modal-img');
        if (titleEl) titleEl.innerText = `Construye tu pizza (${name.replace('A Mi Gusto ', '')})`;
        if (imgEl) imgEl.src = img;

        const modal = document.getElementById('pizza-amigusto-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    },

    closeModal() {
        const modal = document.getElementById('pizza-amigusto-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    },

    toggleIngredient(id) {
        const idx = this.state.selected.indexOf(id);
        if (idx > -1) {
            this.state.selected.splice(idx, 1);
        } else {
            if (this.state.selected.length < this.state.limit) {
                this.state.selected.push(id);
            } else {
                alert(`Solo puedes escoger hasta ${this.state.limit} ingredientes para la pizza en el tamaño seleccionado.`);
            }
        }
        this.updateUI();
    },

    updateUI() {
        const maxTexts = document.querySelectorAll('#pizza-amigusto-max-text, #pizza-amigusto-limit-text');
        maxTexts.forEach(el => el.innerText = this.state.limit);

        const countText = document.getElementById('pizza-amigusto-count-text');
        if (countText) countText.innerText = this.state.selected.length;

        const priceText = document.getElementById('pizza-amigusto-price-text');
        if (priceText) priceText.innerText = `S/ ${this.state.currentPrice.toFixed(2)}`;

        this.ingredients.forEach(ing => {
            const card = document.getElementById(`pizza-card-${ing.id}`);
            const btn = document.getElementById(`pizza-btn-${ing.id}`);
            const overlay = document.getElementById(`pizza-overlay-${ing.id}`);

            if (!card || !btn || !overlay) return;

            if (this.state.selected.includes(ing.id)) {
                card.classList.add('border-red-500');
                card.classList.remove('border-gray-100');

                btn.classList.add('bg-red-50', 'text-red-700', 'border-red-200');
                btn.classList.remove('text-gray-600', 'border-gray-200', 'hover:bg-gray-50', 'bg-white');
                btn.innerHTML = `
                    <div class="w-3.5 h-3.5 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    </div>
                    Seleccionado
                `;
                overlay.classList.remove('hidden');
            } else {
                card.classList.remove('border-red-500');
                card.classList.add('border-gray-100');

                btn.classList.remove('bg-red-50', 'text-red-700', 'border-red-200');
                btn.classList.add('text-gray-600', 'border-gray-200', 'hover:bg-gray-50', 'bg-white');
                btn.innerHTML = `
                    <div class="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                    </div>
                    Seleccionar
                `;
                overlay.classList.add('hidden');
            }
        });
    },

    addToCart(btn = null) {
        const sizeBtn = document.querySelector(`button[data-pizza-id="4"].selected-size`);
        if (!sizeBtn) {
            alert('Seleccione un tamaño primero (Personal, Mediana o Familiar) para la pizza A Mi Gusto.');
            return;
        }

        this.state.currentSizeName = sizeBtn.getAttribute('data-name');
        this.state.currentPrice = parseFloat(sizeBtn.getAttribute('data-price'));
        this.state.currentImg = sizeBtn.getAttribute('data-img');

        let desc = 'Sin ingredientes adicionales';
        if (this.state.selected.length > 0) {
            const names = this.state.selected.map(id => {
                const item = this.ingredients.find(i => i.id === id);
                return item ? item.name : id;
            });
            desc = "Ingredientes elegidos: " + names.join(', ');
        }

        const targetBtn = btn || document.getElementById('add-btn-4');
        cartApp.addItem(this.state.currentSizeName, this.state.currentPrice, this.state.currentImg, desc, targetBtn);
        this.closeModal();

        this.state.selected = [];
        this.updateUI();
    }
};

// --- Calzone A Mi Gusto App Logic ---
const calzoneAmigustoApp = {
    state: {
        isOpen: false,
        limit: 6,
        selected: [],
        name: 'Calzone A Mi Gusto',
        price: 31.00,
        img: 'IM/CAL.jpg'
    },

    ingredients: ingredientesCalzone,

    init() {
        const grid = document.getElementById('calzone-amigusto-ingredients-grid');
        if (!grid) return;

        grid.innerHTML = this.ingredients.map(ing => `
            <div id="calzone-card-${ing.id}" class="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-gray-200 transition-colors flex flex-col">
                <div class="h-24 w-full bg-gray-100 overflow-hidden relative">
                    <img src="${ing.img}" alt="${ing.name}" class="w-full h-full object-cover">
                    <div id="calzone-overlay-${ing.id}" class="absolute inset-0 bg-red-600/20 hidden"></div>
                </div>
                <div class="p-3 flex flex-col flex-grow items-center text-center">
                    <span class="text-[11px] font-bold text-gray-800 leading-tight mb-2 flex-grow line-clamp-2">${ing.name}</span>
                    <button id="calzone-btn-${ing.id}" onclick="calzoneAmigustoApp.toggleIngredient('${ing.id}')" class="w-full py-1.5 rounded-lg border border-gray-200 text-[10px] font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                        <div class="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                        </div>
                        Seleccionar
                    </button>
                </div>
            </div>
        `).join('');
    },

    openModal() {
        this.updateUI();
        const modal = document.getElementById('calzone-amigusto-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    },

    closeModal() {
        const modal = document.getElementById('calzone-amigusto-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    },

    toggleIngredient(id) {
        const idx = this.state.selected.indexOf(id);
        if (idx > -1) {
            this.state.selected.splice(idx, 1);
        } else {
            if (this.state.selected.length < this.state.limit) {
                this.state.selected.push(id);
            } else {
                alert(`Solo puedes escoger hasta ${this.state.limit} ingredientes para el calzone.`);
            }
        }
        this.updateUI();
    },

    updateUI() {
        const maxTexts = document.querySelectorAll('#calzone-amigusto-max-text, #calzone-amigusto-limit-text');
        maxTexts.forEach(el => el.innerText = this.state.limit);

        const countText = document.getElementById('calzone-amigusto-count-text');
        if (countText) countText.innerText = this.state.selected.length;

        const priceText = document.getElementById('calzone-amigusto-price-text');
        if (priceText) priceText.innerText = `S/ ${this.state.price.toFixed(2)}`;

        this.ingredients.forEach(ing => {
            const card = document.getElementById(`calzone-card-${ing.id}`);
            const btn = document.getElementById(`calzone-btn-${ing.id}`);
            const overlay = document.getElementById(`calzone-overlay-${ing.id}`);

            if (!card || !btn || !overlay) return;

            if (this.state.selected.includes(ing.id)) {
                card.classList.add('border-red-500');
                card.classList.remove('border-gray-100');

                btn.classList.add('bg-red-50', 'text-red-700', 'border-red-200');
                btn.classList.remove('text-gray-600', 'border-gray-200', 'hover:bg-gray-50', 'bg-white');
                btn.innerHTML = `
                    <div class="w-3.5 h-3.5 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    </div>
                    Seleccionado
                `;
                overlay.classList.remove('hidden');
            } else {
                card.classList.remove('border-red-500');
                card.classList.add('border-gray-100');

                btn.classList.remove('bg-red-50', 'text-red-700', 'border-red-200');
                btn.classList.add('text-gray-600', 'border-gray-200', 'hover:bg-gray-50', 'bg-white');
                btn.innerHTML = `
                    <div class="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                    </div>
                    Seleccionar
                `;
                overlay.classList.add('hidden');
            }
        });
    },

    addToCart(btn = null) {
        let desc = 'Sin ingredientes adicionales';
        if (this.state.selected.length > 0) {
            const names = this.state.selected.map(id => {
                const item = this.ingredients.find(i => i.id === id);
                return item ? item.name : id;
            });
            desc = "Ingredientes elegidos: " + names.join(', ');
        }

        cartApp.addItem(this.state.name, this.state.price, this.state.img, desc, btn);
        this.closeModal();

        this.state.selected = [];
        this.updateUI();
    }
};

// Backward-compatibility wrappers
function openAmigustoModal(type) {
    if (type === 'pizza') pizzaAmigustoApp.openModal();
    else if (type === 'calzone') calzoneAmigustoApp.openModal();
}

function closeAmigustoModal() {
    pizzaAmigustoApp.closeModal();
    calzoneAmigustoApp.closeModal();
}

function addAmigustoToCart(type, btn) {
    if (type === 'pizza') pizzaAmigustoApp.addToCart(btn);
    else if (type === 'calzone') calzoneAmigustoApp.addToCart(btn);
}

// Tailwind configuration and other custom JS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#E62117', // Red from the logo/buttons
                dark: '#111111',
                darker: '#0a0a0a',
                light: '#F8F8F8'
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                        serif: ['Montserrat', 'sans-serif']
            }
        }
    }
}

// Dynamic Menu Filtering

// --- Vegetariana App Logic ---
const vegApp = {
    state: {
        isOpen: false,
        limit: 4,
        selected: [],
        currentCall: ""
    },

    // Using the same ingredients as calzoneApp
    ingredients: [
        { id: 'v-aceitunas-n', name: 'Aceitunas Negras', emoji: '🫒' },
        { id: 'v-aceitunas-v', name: 'Aceitunas Verdes', emoji: '🍈' },
        { id: 'v-aji', name: 'Ají', emoji: '🌶️' },
        { id: 'v-albahaca', name: 'Albahaca', emoji: '🌿' },
        { id: 'v-cabanossi', name: 'Cabanossi', emoji: '🌭' },
        { id: 'v-cebolla', name: 'Cebolla', emoji: '🧅' },
        { id: 'v-cecina', name: 'Cecina', emoji: '🥩' },
        { id: 'v-champinones', name: 'Champiñones', emoji: '🍄' },
        { id: 'v-chorizo', name: 'Chorizo', emoji: '🌭' },
        { id: 'v-durazno', name: 'Durazno', emoji: '🍑' },
        { id: 'v-esparrago', name: 'Espárrago', emoji: '🥬' },
        { id: 'v-jamon', name: 'Jamón', emoji: '🍖' },
        { id: 'v-papaya', name: 'Papaya', emoji: '🥭' },
        { id: 'v-pepperoni', name: 'Pepperoni', emoji: '🍕' },
        { id: 'v-pimiento', name: 'Pimiento', emoji: '🫑' },
        { id: 'v-pina', name: 'Piña', emoji: '🍍' },
        { id: 'v-platano', name: 'Plátano', emoji: '🍌' },
        { id: 'v-pollo', name: 'Pollo', emoji: '🍗' },
        { id: 'v-salame', name: 'Salame', emoji: '🍖' },
        { id: 'v-salchicha', name: 'Salchicha', emoji: '🌭' },
        { id: 'v-tocino', name: 'Tocino', emoji: '🥓' },
        { id: 'v-tomate', name: 'Tomate en rodajas', emoji: '🍅' }
    ],

    init() {
        const grid = document.getElementById('veg-ingredients-grid');
        if (!grid) return;

        grid.innerHTML = this.ingredients.map(ing => `
            <button onclick="vegApp.toggleIngredient('${ing.id}')" id="veg-ing-${ing.id}" class="bg-white border border-gray-200 rounded-md p-1.5 flex flex-col items-center justify-center gap-1 hover:border-primary transition relative h-16 w-full">
                <div id="veg-check-${ing.id}" class="hidden absolute top-0.5 right-0.5 text-primary text-[10px]"><i class="fas fa-check-circle"></i></div>
                <div class="text-xl leading-none">${ing.emoji}</div>
                <span class="text-[8px] text-center leading-tight mt-0.5 text-gray-600 line-clamp-2">${ing.name}</span>
            </button>
        `).join('');
    },

    togglePanel() {
        if (!this.state.currentCall) {
            alert("Seleccione un tamaño antes de personalizar los ingredientes");
            return;
        }
        this.state.isOpen = !this.state.isOpen;
        const panel = document.getElementById('veg-panel');
        if (panel) {
            panel.classList.toggle('hidden', !this.state.isOpen);
        }
    },

    updateLimit(limit, callCode) {
        this.state.limit = limit;
        this.state.currentCall = callCode;

        // If they switch size and have more selected than allowed, trim the array
        if (this.state.selected.length > limit) {
            this.state.selected = this.state.selected.slice(0, limit);
        }

        this.updateUI();
    },

    toggleIngredient(id) {
        const idx = this.state.selected.indexOf(id);
        if (idx > -1) {
            this.state.selected.splice(idx, 1);
        } else {
            if (this.state.selected.length < this.state.limit) {
                this.state.selected.push(id);
            } else {
                // Optionally show a toast/alert that limit is reached
                alert(`Solo puedes escoger hasta ${this.state.limit} ingredientes en este tamaño.`);
            }
        }
        this.updateUI();
    },

    updateUI() {
        const limitText = document.getElementById('veg-limit-text');
        const countText = document.getElementById('veg-count');

        if (limitText) limitText.innerText = `Elige hasta ${this.state.limit} ingredientes`;
        if (countText) countText.innerText = this.state.selected.length;

        this.ingredients.forEach(ing => {
            const btn = document.getElementById(`veg-ing-${ing.id}`);
            const check = document.getElementById(`veg-check-${ing.id}`);
            if(!btn || !check) return;

            if (this.state.selected.includes(ing.id)) {
                btn.classList.add('border-primary', 'bg-red-50');
                btn.classList.remove('border-gray-200', 'bg-white');
                check.classList.remove('hidden');
            } else {
                btn.classList.remove('border-primary', 'bg-red-50');
                btn.classList.add('border-gray-200', 'bg-white');
                check.classList.add('hidden');
            }
        });
    },

    addToCart(pizzaIdx = '4', btn = null) {
        const sizeBtn = document.querySelector(`button[data-pizza-id="${pizzaIdx}"].selected-size`);
        if (!sizeBtn) {
            alert("Seleccione un tamaño antes de agregar al carrito");
            return;
        }

        const name = sizeBtn.getAttribute('data-name');
        const price = parseFloat(sizeBtn.getAttribute('data-price'));
        const img = sizeBtn.getAttribute('data-img');

        let desc = 'Ingredientes predeterminados';
        if (this.state.selected.length > 0) {
            const names = this.state.selected.map(id => this.ingredients.find(i => i.id === id).name);
            desc = "Ingredientes elegidos: " + names.join(', ');
        }

        const targetBtn = btn || document.getElementById(`add-btn-${pizzaIdx}`);
        // Use cartApp to add
        cartApp.addItem(name, price, img, desc, targetBtn);

        // Close panel and reset optional
        this.state.isOpen = false;
        const panel = document.getElementById('veg-panel');
        if (panel) panel.classList.add('hidden');

        this.state.selected = [];
        this.updateUI();
    }
};

// Make sure to initialize vegApp
document.addEventListener('DOMContentLoaded', () => {
    const isMenuPage = window.location.pathname.includes('menu.html');
    const menuSections = document.querySelectorAll('.menu-section');
    const categoryLinks = document.querySelectorAll('a[data-category]');

    // Function to filter sections based on category string
    function filterCategory(category) {
        // Remove hash preloader style if present
        const preloaderStyle = document.getElementById('hash-preloader-style');
        if (preloaderStyle) {
            preloaderStyle.remove();
        }

        if (!isMenuPage || !menuSections.length) return;

        let found = false;
        let targetSection = null;

        menuSections.forEach(section => {
            if (section.dataset.category === category || category === 'all') {
                section.classList.remove('hidden');
                found = true;
                if (section.dataset.category === category) {
                    targetSection = section;
                }
            } else {
                section.classList.add('hidden');
            }
        });

        if (!found && category !== 'all') {
            menuSections.forEach(sec => sec.classList.remove('hidden'));
        }

        // Update active nav link styling
        const navLinks = document.querySelectorAll('header nav a[data-category], #mobile-menu a[data-category]');
        navLinks.forEach(link => {
            const cat = link.getAttribute('data-category');
            if (cat === category) {
                link.classList.remove('text-gray-300', 'text-gray-400');
                link.classList.add('text-primary');
            } else {
                link.classList.remove('text-primary');
                if (link.closest('#mobile-menu')) {
                    link.classList.add('text-gray-400');
                } else {
                    link.classList.add('text-gray-300');
                }
            }
        });

        // Scroll to top of the active section considering the sticky header height
        if (targetSection) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const y = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Handle clicks on data-category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = link.getAttribute('data-category');
            const href = link.getAttribute('href');

            // If the link goes to index.html or category is 'inicio', allow default navigation to index.html
            if (category === 'inicio' || (href && href.startsWith('index.html'))) {
                return;
            }

            if (isMenuPage) {
                e.preventDefault();
                // Change hash to naturally trigger hashchange event without reloading
                window.location.hash = category;
                filterCategory(category);
            }
            // If on index.html, let the default behavior navigate to menu.html#category
        });
    });

    // Handle initial load on menu.html
    if (isMenuPage) {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            filterCategory(hash);
        } else {
            // Default to showing all if no hash
            filterCategory('all');
        }

        // Handle browser back/forward buttons
        window.addEventListener('hashchange', () => {
            const newHash = window.location.hash.replace('#', '');
            filterCategory(newHash || 'all');
        });
    }
});

// --- Cart Logic ---
const cartApp = {
    state: {
        items: [],
        isOpen: false
    },

    init() {
        this.loadCart();
        this.updateBadge();
        this.renderCart();
    },

    loadCart() {
        try {
            // Use pathname + search to avoid false matches, but EXCLUDE hash to not mistake hash changes for navigation.
            const currentUrl = window.location.pathname + window.location.search;
            const lastUrl = sessionStorage.getItem('chezMaggyLastUrl');
            let isManualReload = false;

            if (lastUrl === currentUrl) {
                const navType = window.performance && window.performance.navigation ? window.performance.navigation.type : 0;
                const navEntry = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : '';
                if (navType === 1 || navEntry === "reload") {
                    isManualReload = true;
                }
            }
            sessionStorage.setItem('chezMaggyLastUrl', currentUrl);

            if (isManualReload) {
                // Clear cart on manual reload
                sessionStorage.removeItem('chezMaggyCart');
                this.state.items = [];
            } else {
                const savedItems = sessionStorage.getItem('chezMaggyCart');
                if (savedItems) {
                    this.state.items = JSON.parse(savedItems);
                }
            }
        } catch (e) {
            console.error('Error loading cart from sessionStorage', e);
        }
    },

    saveCart() {
        try {
            sessionStorage.setItem('chezMaggyCart', JSON.stringify(this.state.items));
        } catch (e) {
            console.error('Error saving cart to sessionStorage', e);
        }
    },

    toggleModal() {
        const modal = document.getElementById('cart-modal');
        if (!modal) return;
        this.state.isOpen = !this.state.isOpen;
        modal.classList.toggle('hidden', !this.state.isOpen);
    },

    removeItem(id) {
        const itemIndex = this.state.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            // Remove completely
            this.state.items.splice(itemIndex, 1);
            this.saveCart();
            this.updateBadge();
            this.renderCart();
        }
    },

    updateItemQty(id, change) {
        const item = this.state.items.find(i => i.id === id);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) {
                this.removeItem(id);
            } else {
                this.saveCart();
                this.updateBadge();
                this.renderCart();
            }
        }
    },

    addItem(name, price, imageSrc, desc = '', btn = null) {
        // Check if item exists (match by both name and exact description)
        const existing = this.state.items.find(i => i.name === name && i.desc === desc);
        if (existing) {
            existing.qty += 1;
        } else {
            this.state.items.push({
                id: Date.now().toString(),
                name,
                price: parseFloat(price),
                imageSrc,
                desc,
                qty: 1
            });
        }
        this.saveCart();
        this.updateBadge();
        this.renderCart();

        if (btn) {
            triggerButtonFeedback(btn);
        }
    },

    updateBadge() {
        const badge = document.getElementById('cart-badge');
        if (!badge) return;

        const totalItems = this.state.items.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalItems;

        if (totalItems > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    },

    renderCart() {
        const container = document.getElementById('cart-items-container');
        const emptyState = document.getElementById('cart-empty-state');
        const totalEl = document.getElementById('cart-total-price');

        if (!container || !emptyState || !totalEl) return;

        if (this.state.items.length === 0) {
            container.innerHTML = '';
            container.classList.add('hidden');
            emptyState.classList.remove('hidden');
            totalEl.innerText = 'S/ 0.00';
            return;
        }

        container.classList.remove('hidden');
        emptyState.classList.add('hidden');

        let html = '';
        let total = 0;

        this.state.items.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            const descHtml = item.desc ? `<div class="text-xs text-gray-500 mt-1 leading-tight">${item.desc}</div>` : '';
            const imgHtml = item.imageSrc ? `<div class="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50"><img src="${item.imageSrc}" class="w-full h-full object-cover"></div>` : '';

            html += `
                <div class="bg-white rounded-2xl p-4 flex gap-4 border border-gray-100 shadow-sm relative">
                    ${imgHtml}
                    <div class="flex-grow min-w-0 flex flex-col justify-between">
                        <div>
                            <h4 class="font-bold text-gray-800 text-sm md:text-base leading-tight pr-6">${item.name}</h4>
                            ${descHtml}
                        </div>
                        <div class="mt-3 flex items-center justify-between">
                            <div class="flex items-center bg-gray-50 border border-gray-200 rounded-full px-1 py-1">
                                <button onclick="cartApp.updateItemQty('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-primary transition font-bold">
                                    <i class="fas fa-minus text-xs"></i>
                                </button>
                                <span class="text-gray-800 font-bold px-3 text-sm">${item.qty}</span>
                                <button onclick="cartApp.updateItemQty('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-primary transition font-bold">
                                    <i class="fas fa-plus text-xs"></i>
                                </button>
                            </div>
                            <div class="font-bold text-gray-800 text-base">S/ ${itemTotal.toFixed(2)}</div>
                        </div>
                    </div>
                    <button onclick="cartApp.removeItem('${item.id}')" class="absolute top-4 right-4 text-red-500 hover:text-red-700 transition" title="Eliminar del carrito">
                        <i class="fas fa-trash-alt text-base"></i>
                    </button>
                </div>
            `;
        });

        container.innerHTML = html;
        totalEl.innerText = `S/ ${total.toFixed(2)}`;
    },

    checkout() {
        if (this.state.items.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        let message = "Hola Chez Maggy, me gustaría hacer el siguiente pedido:\n\n";
        let total = 0;

        this.state.items.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            message += `• ${item.qty}x ${item.name} - S/ ${itemTotal.toFixed(2)}\n`;
            if (item.desc) {
                message += `  Detalles: ${item.desc}\n`;
            }
        });

        message += `\n*TOTAL GENERAL: S/ ${total.toFixed(2)}*`;

        const phoneNumber = "51970923423";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    }
};

// Helper function to trigger green visual feedback on add-to-cart buttons
function triggerButtonFeedback(btn) {
    if (!btn || !(btn instanceof HTMLElement)) return;
    if (btn.dataset.isAnimating === 'true') return;

    btn.dataset.isAnimating = 'true';
    var originalHTML = btn.innerHTML;
    var originalClasses = btn.className;

    btn.innerHTML = '<span>✓ Agregado al carrito</span>';

    var greenClass = originalClasses
        .replace(/bg-gradient-to-[a-z]+/g, '')
        .replace(/from-[a-z0-9-/]+/g, '')
        .replace(/to-[a-z0-9-/]+/g, '')
        .replace(/hover:[^\s]+/g, '')
        .replace(/bg-[a-z0-9-/]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    btn.className = greenClass + ' bg-green-600 text-white';

    setTimeout(function() {
        btn.innerHTML = originalHTML;
        btn.className = originalClasses;
        delete btn.dataset.isAnimating;
    }, 1500);
}

// Bind existing menu '+' buttons
function bindGridAddButtons() {
    const gridItems = document.querySelectorAll('.grid > div');
    gridItems.forEach(item => {
        // Find all buttons in the grid item that don't have an onclick handler
        const btns = item.querySelectorAll('button:not([onclick])');
        btns.forEach(addBtn => {
            addBtn.addEventListener('click', () => {
                const name = item.querySelector('h4').innerText;
                const priceStr = item.querySelector('.text-primary.font-bold').innerText;
                const price = priceStr.replace('S/ ', '').trim();
                const img = item.querySelector('img').src;

                cartApp.addItem(name, price, img, '', addBtn);
            });
        });
    });
}


// --- Calzone App Logic ---
// Modified to work with the new layout, binding directly to cartApp instead of the custom UI.
const calzoneApp = {
    init() {
        // We do not need to bind buttons here anymore because bindGridAddButtons() handles all grid items
        // but we keep the object to prevent errors if something tries to call calzoneApp.init()
    }
};

// Initialize apps when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    pizzaAmigustoApp.init();
    calzoneAmigustoApp.init();
    cartApp.init();
    calzoneApp.init();
    vegApp.init();
    bebidasApp.init();
    bindGridAddButtons();

    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenuBtn && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            // Slight delay to allow display:flex to apply before animating transform
            setTimeout(() => {
                mobileMenu.classList.remove('-translate-x-full');
            }, 10);

            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('hidden');
            }
            document.body.classList.add('overflow-hidden'); // Prevent scrolling
        };

        const closeMenu = () => {
            mobileMenu.classList.add('-translate-x-full');
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.add('hidden');
            }
            document.body.classList.remove('overflow-hidden');

            // Wait for animation to finish before hiding completely
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }, 300); // 300ms matches Tailwind's transition duration
        };

        mobileMenuBtn.addEventListener('click', openMenu);

        if (mobileMenuCloseBtn) {
            mobileMenuCloseBtn.addEventListener('click', closeMenu);
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMenu);
        }

        // Close menu when a link inside it is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

// Handle Back-Forward Cache (bfcache) navigation
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // The page was restored from the bfcache (e.g., user swiped back).
        // The DOMContentLoaded event is NOT fired in this case, so we need to
        // explicitly sync the UI with the latest state from sessionStorage.
        console.log('Page restored from bfcache, syncing cart...');
        cartApp.loadCart();
        cartApp.updateBadge();
        cartApp.renderCart();
    }
});

const bebidasApp = {
    state: {
        marca: null, // Inca Kola, Coca-Cola, Fanta
        tamano: null, // 1 1/2 Litros, 1/2 Litro
        temperatura: null, // Helada, Sin helar
        qty: 1
    },

    prices: {
        '1 1/2 Litros': 12.00,
        '1/2 Litro': 5.00
    },

    images: {
        'Inca Kola': 'IM/BEBIDAS/INKA.png',
        'Coca-Cola': 'IM/BEBIDAS/COCA.png',
        'Fanta': 'IM/BEBIDAS/FANTA.png'
    },

    init() {
        this.updateUI();
    },

    selectMarca(marca) {
        this.state.marca = marca;
        this.updateUI();
    },

    selectTamano(tamano) {
        this.state.tamano = tamano;
        this.updateUI();
    },

    selectTemperatura(temperatura) {
        this.state.temperatura = temperatura;
        this.updateUI();
    },

    updateUI() {
        const pPrice = document.getElementById('bebidas-price');
        const pTitle = document.getElementById('bebidas-title');

        if (pPrice && pTitle) {
            if (this.state.tamano) {
                pPrice.innerText = 'S/ ' + this.prices[this.state.tamano].toFixed(2);
            } else {
                pPrice.innerText = 'S/ 0.00';
            }

            const m = this.state.marca || 'Seleccione Marca';
            const t = this.state.tamano || 'Seleccione Tamaño';
            const temp = this.state.temperatura || 'Seleccione Temp';

            pTitle.innerText = `${m} (${t}) - ${temp}`;

            if (!this.state.marca && !this.state.tamano && !this.state.temperatura) {
                 pTitle.innerText = 'Selecciona tus opciones';
            }
        }

        // Update selected states of buttons
        ['Inca Kola', 'Coca-Cola', 'Fanta'].forEach(m => {
            const btn = document.getElementById(`bebidas-marca-${m.replace(/ /g, '-')}`);
            if (btn) {
                if (m === this.state.marca) {
                    btn.classList.add('border-primary', 'bg-primary/5');
                    btn.classList.remove('border-gray-200');
                } else {
                    btn.classList.remove('border-primary', 'bg-primary/5');
                    btn.classList.add('border-gray-200');
                }
            }
        });

        ['1 1/2 Litros', '1/2 Litro'].forEach(t => {
            const btn = document.getElementById(`bebidas-tamano-${t.replace(/[\/ ]/g, '-')}`);
            if (btn) {
                if (t === this.state.tamano) {
                    btn.classList.add('border-primary', 'bg-primary/5');
                    btn.classList.remove('border-gray-200');
                } else {
                    btn.classList.remove('border-primary', 'bg-primary/5');
                    btn.classList.add('border-gray-200');
                }
            }
        });

        ['Helada', 'Sin helar'].forEach(temp => {
            const btn = document.getElementById(`bebidas-temp-${temp.replace(/ /g, '-')}`);
            if (btn) {
                if (temp === this.state.temperatura) {
                    btn.classList.add('border-primary', 'bg-primary/5');
                    btn.classList.remove('border-gray-200');
                } else {
                    btn.classList.remove('border-primary', 'bg-primary/5');
                    btn.classList.add('border-gray-200');
                }
            }
        });
    },

    addToCart() {
        if (!this.state.marca || !this.state.tamano || !this.state.temperatura) {
            alert('Por favor selecciona marca, tamaño y temperatura.');
            return;
        }
        const name = `${this.state.marca} ${this.state.tamano}`;
        const price = this.prices[this.state.tamano];
        const img = this.images[this.state.marca] || 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80';
        const desc = `Temp: ${this.state.temperatura}`;

        cartApp.addItem(name, price, img, desc, document.getElementById('add-bebida-btn'));
    }
};

// Function to handle olive selection logic
function selectOliveType(btn, pizzaIdx, type) {
    const container = document.querySelector(`.olive-selector-container[data-pizza-id="${pizzaIdx}"]`);
    if (!container) return;

    // Remove selected state from all chips in this container
    const chips = container.querySelectorAll('.olive-chip');
    chips.forEach(chip => {
        chip.classList.remove('selected', 'bg-red-50', 'border-red-500', 'text-red-700');
        chip.classList.add('bg-gray-50', 'border-gray-200', 'text-gray-600');
    });

    // Add selected state to the clicked chip
    btn.classList.add('selected', 'bg-red-50', 'border-red-500', 'text-red-700');
    btn.classList.remove('bg-gray-50', 'border-gray-200', 'text-gray-600');

    // Hide error message if it was shown
    const errorMsg = document.getElementById(`olive-error-${pizzaIdx}`);
    if (errorMsg) {
        errorMsg.classList.add('hidden');
    }
}


function selectPizzaSize(btn, pizzaIdx) {
    const buttons = document.querySelectorAll(`button[data-pizza-id="${pizzaIdx}"]`);
    buttons.forEach(b => {
        b.className = "size-btn flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 relative border-2 border-transparent w-full bg-gray-50 text-gray-500 hover:bg-gray-100";
        b.classList.remove('selected-size');
    });

    btn.className = "size-btn flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 relative border-2 border-transparent w-full bg-gradient-to-br from-primary to-red-700 shadow-[0_4px_12px_rgba(230,33,23,0.3)] text-white scale-[1.02] selected-size";

    const addBtn = document.getElementById(`add-btn-${pizzaIdx}`);
    if (addBtn) {
        if (pizzaIdx === '4') {
            const isPersonal = btn.innerText.includes('PERSONAL');
            if (typeof vegApp !== 'undefined') {
                vegApp.updateLimit(isPersonal ? 4 : 6, btn);
                addBtn.setAttribute("onclick", `vegApp.addToCart('${pizzaIdx}', this)`);
            }
        } else {
            addBtn.setAttribute("onclick", `addPizzaToCart('${pizzaIdx}', this)`);
        }
    }
}

function addPizzaToCart(pizzaIdx, btn) {
    const sizeBtn = document.querySelector(`button[data-pizza-id="${pizzaIdx}"].selected-size`);
    if (!sizeBtn) {
        alert('Seleccione un tamaño antes de agregar al carrito');
        return;
    }

    const name = sizeBtn.getAttribute('data-name');
    const price = parseFloat(sizeBtn.getAttribute('data-price'));
    const img = sizeBtn.getAttribute('data-img');
    let finalName = name;

    const oliveContainer = document.querySelector(`.olive-selector-container[data-pizza-id="${pizzaIdx}"]`);
    if (oliveContainer) {
        const selectedOlive = oliveContainer.querySelector('.olive-chip.selected');
        if (!selectedOlive) {
            document.getElementById(`olive-error-${pizzaIdx}`).classList.remove('hidden');
            return;
        }
        document.getElementById(`olive-error-${pizzaIdx}`).classList.add('hidden');
        const oliveType = selectedOlive.getAttribute('data-type');
        finalName += ` (Aceitunas ${oliveType})`;
    }

    const targetBtn = btn || document.getElementById(`add-btn-${pizzaIdx}`);
    cartApp.addItem(finalName, price, img, '', targetBtn);
}

// --- Pizza Search Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('pizza-search-input');
    const suggestionsContainer = document.getElementById('pizza-search-suggestions');
    const searchBtn = document.getElementById('pizza-search-btn');
    const pizzaGrid = document.getElementById('pizza-grid');

    if (!searchInput || !pizzaGrid) return;

    // Build pizza data array
    const pizzaCards = Array.from(pizzaGrid.children);
    const pizzas = pizzaCards.map((card, index) => {
        const titleEl = card.querySelector('h4');
        return {
            title: titleEl ? titleEl.textContent.trim() : '',
            element: card,
            index: index
        };
    });

    const renderSuggestions = (query) => {
        if (!query) {
            suggestionsContainer.classList.add('hidden');
            suggestionsContainer.innerHTML = '';
            // Restore original order and make sure all cards are visible
            pizzas.slice().sort((a, b) => a.index - b.index).forEach(p => {
                p.element.style.display = '';
                p.element.classList.remove('hidden');
                pizzaGrid.appendChild(p.element);
            });
            return;
        }

        const lowerQuery = query.toLowerCase();
        const matchingPizzas = pizzas.filter(p => p.title.toLowerCase().includes(lowerQuery));
        matchingPizzas.sort((a, b) => {
            const aStarts = a.title.toLowerCase().startsWith(lowerQuery);
            const bStarts = b.title.toLowerCase().startsWith(lowerQuery);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.index - b.index;
        });

        const nonMatchingPizzas = pizzas.filter(p => !p.title.toLowerCase().includes(lowerQuery));
        nonMatchingPizzas.sort((a, b) => a.index - b.index);

        // Reorder DOM elements: matches first, followed by non-matches (all remaining visible)
        [...matchingPizzas, ...nonMatchingPizzas].forEach(p => {
            p.element.style.display = '';
            p.element.classList.remove('hidden');
            pizzaGrid.appendChild(p.element);
        });

        // Show suggestions
        if (matchingPizzas.length > 0) {
            suggestionsContainer.innerHTML = matchingPizzas.map(match => `
                <button class="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors flex items-center justify-between group" data-index="${match.index}">
                    <span class="font-medium text-gray-700 group-hover:text-primary transition-colors">${match.title}</span>
                    <i class="fas fa-chevron-right text-gray-300 group-hover:text-primary text-xs transition-colors"></i>
                </button>
            `).join('');
            suggestionsContainer.classList.remove('hidden');
            suggestionsContainer.classList.add('flex');
        } else {
            suggestionsContainer.innerHTML = `
                <div class="px-4 py-4 text-center text-gray-500 text-sm">
                    No se encontraron pizzas con "${query}"
                </div>
            `;
            suggestionsContainer.classList.remove('hidden');
            suggestionsContainer.classList.add('flex');
        }
    };

    searchInput.addEventListener('input', (e) => {
        renderSuggestions(e.target.value.trim());
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target) && !searchBtn.contains(e.target)) {
            suggestionsContainer.classList.add('hidden');
            suggestionsContainer.classList.remove('flex');
        }
    });

    // Handle suggestion click
    suggestionsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (btn) {
            const index = btn.getAttribute('data-index');
            const match = pizzas.find(p => p.index == index);
            if (match) {
                searchInput.value = match.title;
                renderSuggestions(match.title);
                suggestionsContainer.classList.add('hidden');
                suggestionsContainer.classList.remove('flex');

                // Scroll to it
                const y = match.element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    });

    // Handle Search Button Click
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        renderSuggestions(query);
        suggestionsContainer.classList.add('hidden');
        suggestionsContainer.classList.remove('flex');
        if (query) {
             const lowerQuery = query.toLowerCase();
             const firstMatch = pizzas.find(p => p.title.toLowerCase().includes(lowerQuery));
             if (firstMatch) {
                 const y = firstMatch.element.getBoundingClientRect().top + window.scrollY - 100;
                 window.scrollTo({ top: y, behavior: 'smooth' });
             }
        }
    });
});

// Function specifically for adding Calzone Vegetariano with olive validation
function addCalzoneVegToCart(btn) {
    const container = document.querySelector('.olive-selector-container[data-pizza-id="calzone-veg"]');
    if (!container) return;

    const selectedOlive = container.querySelector('.olive-chip.selected');
    const errorMsg = document.getElementById('olive-error-calzone-veg');

    if (!selectedOlive) {
        if (errorMsg) errorMsg.classList.remove('hidden');
        return;
    }

    if (errorMsg) errorMsg.classList.add('hidden');

    const oliveType = selectedOlive.getAttribute('data-type');
    const name = `Calzone Vegetariano (Aceitunas ${oliveType})`;
    const price = 26.90;
    const img = 'IM/CAL.jpg';

    cartApp.addItem(name, price, img, '', btn);
}

// Generic function for Calzones without olive selection
function addCalzoneToCart(name, price, btn) {
    const img = 'IM/CAL.jpg';
    cartApp.addItem(name, price, img, '', btn);
}

// Ravioles Modal Logic
function openRaviolesModal() {
    const modal = document.getElementById('ravioles-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeRaviolesModal() {
    const modal = document.getElementById('ravioles-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function confirmRavioles(btn) {
    const selectedSauce = document.querySelector('input[name="ravioles-sauce"]:checked');
    if (!selectedSauce) return;

    const sauceName = selectedSauce.value;
    const name = `Ravioles (Salsa ${sauceName})`;
    const price = 24.00;
    const img = 'IM/PASTAS/RAVIOLES.png'; // Assuming pasta.png as it was used before in menu.html
    const category = 'Pasta';

    const cardBtn = document.querySelector('button[onclick="openRaviolesModal()"]');
    cartApp.addItem(name, price, img, category, cardBtn || btn);
    closeRaviolesModal();
}


// Fetuccini Modal Logic
function openFetucciniModal() {
    const modal = document.getElementById('fetuccini-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeFetucciniModal() {
    const modal = document.getElementById('fetuccini-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function confirmFetuccini(btn) {
    const selectedSauce = document.querySelector('input[name="fetuccini-sauce"]:checked');
    if (!selectedSauce) return;

    const sauceName = selectedSauce.value;
    const name = `Fetuccini (Salsa ${sauceName})`;
    const price = 23.00;
    const img = 'IM/pasta.png';
    const category = 'Pasta';

    const cardBtn = document.querySelector('button[onclick="openFetucciniModal()"]');
    cartApp.addItem(name, price, img, category, cardBtn || btn);
    closeFetucciniModal();
}

// Espaguetis Modal Logic
function openEspaguetisModal() {
    const modal = document.getElementById('espaguetis-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeEspaguetisModal() {
    const modal = document.getElementById('espaguetis-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function confirmEspaguetis(btn) {
    const selectedSauce = document.querySelector('input[name="espaguetis-sauce"]:checked');
    if (!selectedSauce) return;

    const sauceName = selectedSauce.value;
    const name = `Espaguetis (Salsa ${sauceName})`;
    const price = 22.00;
    const img = 'IM/pasta.png';
    const category = 'Pasta';

    const cardBtn = document.querySelector('button[onclick="openEspaguetisModal()"]');
    cartApp.addItem(name, price, img, category, cardBtn || btn);
    closeEspaguetisModal();
}

// --- Sedes & Ubicaciones App Logic ---
const sedesApp = {
    selectedCity: 'Chiclayo',
    cities: [
        { name: 'Chiclayo', count: 2 },
        { name: 'Iquitos', count: 2 },
        { name: 'Tarapoto', count: 1 },
        { name: 'Pucallpa', count: 2 },
        { name: 'Cusco', count: 3 },
        { name: 'Tacna', count: 1 }
    ],
    sedes: {
        'Chiclayo': [
            {
                title: 'Chiclayo - Av. Balta',
                address: 'Av. Balta #417 - Chiclayo',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                phone: '(074) 205 839',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Balta+417,+Chiclayo',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Chiclayo - Sta. Victoria',
                address: 'Chiclayo, Lambayeque',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                phone: '(074) 205 839',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Chiclayo',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        'Iquitos': [
            {
                title: 'Iquitos - Centro',
                address: 'Iquitos, Loreto',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Iquitos',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Iquitos - Sede 2',
                address: 'Iquitos, Loreto',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Iquitos',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        'Tarapoto': [
            {
                title: 'Tarapoto - Centro',
                address: 'Tarapoto, San Martín',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Tarapoto',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        'Pucallpa': [
            {
                title: 'Pucallpa - Sede Principal',
                address: 'Pucallpa, Ucayali',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Pucallpa',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Pucallpa - Sede 2',
                address: 'Pucallpa, Ucayali',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Pucallpa',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        'Cusco': [
            {
                title: 'Cusco - Centro Histórico',
                address: 'Cusco, Perú',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Cusco',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Cusco - Plateros',
                address: 'Cusco, Perú',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Cusco',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Cusco - Tecsecocha',
                address: 'Cusco, Perú',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Cusco',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ],
        'Tacna': [
            {
                title: 'Tacna - Centro',
                address: 'Tacna, Perú',
                schedule: 'Lun - Dom: 05:00 p.m. - 12:00 a.m.',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+Maggy+Tacna',
                whatsappUrl: 'https://wa.me/c/51970923423',
                img: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ]
    },

    init() {
        const nav = document.getElementById('city-selector-nav');
        if (!nav) return;

        this.renderCitySelector();
        this.renderSedesCards(this.selectedCity);
        this.setupHorizontalDragScroll(nav);
    },

    selectCity(cityName) {
        let isDragging = false;
        if (window.__isDraggingCityNav) return;
        this.selectedCity = cityName;
        this.renderCitySelector();
        this.renderSedesCards(cityName);
    },

    renderCitySelector() {
        const nav = document.getElementById('city-selector-nav');
        if (!nav) return;

        nav.innerHTML = this.cities.map(city => {
            const isSelected = city.name === this.selectedCity;
            const btnClass = isSelected
                ? 'bg-gradient-to-r from-primary to-red-700 text-white border-primary shadow-lg shadow-red-900/30 font-bold scale-[1.03]'
                : 'bg-[#1c130d] text-gray-300 border-amber-900/40 hover:border-amber-500 hover:text-white font-medium';
            const badgeClass = isSelected
                ? 'bg-white text-primary font-extrabold'
                : 'bg-amber-950/80 text-amber-300 border border-amber-600/40 font-bold';

            return `
                <button type="button" onclick="sedesApp.selectCity('${city.name}')" class="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${btnClass}">
                    <span>${city.name}</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${badgeClass}">${city.count}</span>
                </button>
            `;
        }).join('');
    },

    renderSedesCards(cityName) {
        const container = document.getElementById('sedes-cards-container');
        if (!container) return;

        const sedesList = this.sedes[cityName] || [];

        container.innerHTML = sedesList.map(sede => `
            <div class="bg-[#1a120b] rounded-2xl overflow-hidden shadow-xl border border-amber-600/30 flex flex-col hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1 group">
                <div class="h-48 sm:h-56 overflow-hidden relative bg-neutral-900">
                    <img src="${sede.img}" alt="${sede.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent"></div>
                    <div class="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/40 text-amber-300 font-bold text-[11px] uppercase tracking-wider">
                        <i class="fas fa-store mr-1 text-primary"></i> ${cityName}
                    </div>
                </div>
                <div class="p-5 sm:p-6 flex flex-col flex-grow text-gray-200">
                    <h3 class="text-xl font-bold text-white mb-4 tracking-wide">${sede.title}</h3>
                    <div class="space-y-3 mb-6 text-xs sm:text-sm text-gray-300 flex-grow">
                        <div class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-primary text-base mt-0.5 w-4 text-center"></i>
                            <span class="font-medium">${sede.address}</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <i class="far fa-clock text-amber-400 text-base mt-0.5 w-4 text-center"></i>
                            <span class="font-medium">${sede.schedule}</span>
                        </div>
                        ${sede.phone ? `
                        <div class="flex items-start gap-3">
                            <i class="fas fa-phone-alt text-green-400 text-base mt-0.5 w-4 text-center"></i>
                            <span class="font-medium">${sede.phone}</span>
                        </div>
                        ` : ''}
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-amber-950/80 mt-auto">
                        <a href="${sede.mapUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-amber-500/40 text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 hover:text-white text-xs font-bold transition uppercase tracking-wider text-center">
                            Cómo Llegar <i class="fas fa-location-arrow ml-1.5 text-xs"></i>
                        </a>
                        <a href="${sede.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition uppercase tracking-wider text-center shadow-md hover:shadow-green-600/30">
                            <i class="fab fa-whatsapp text-sm mr-1.5"></i> Consultar
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    },

    setupHorizontalDragScroll(nav) {
        if (!nav) return;

        nav.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                nav.scrollLeft += e.deltaY;
            }
        }, { passive: false });

        let isDown = false;
        let startX, scrollLeft;

        nav.addEventListener('mousedown', (e) => {
            isDown = true;
            window.__isDraggingCityNav = false;
            startX = e.pageX - nav.offsetLeft;
            scrollLeft = nav.scrollLeft;
        });

        nav.addEventListener('mouseleave', () => { isDown = false; });
        nav.addEventListener('mouseup', () => {
            setTimeout(() => { window.__isDraggingCityNav = false; }, 50);
            isDown = false;
        });

        nav.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - nav.offsetLeft;
            const walk = (x - startX) * 1.5;
            if (Math.abs(walk) > 5) {
                window.__isDraggingCityNav = true;
            }
            nav.scrollLeft = scrollLeft - walk;
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    sedesApp.init();
});
