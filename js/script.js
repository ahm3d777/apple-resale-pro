// ============================================
// APPLE RESALE PRO - COMPREHENSIVE JAVASCRIPT
// ============================================

/* ==================== PRODUCT DATA ==================== */
const products = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        category: "iphone",
        price: 899,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1678652197317-cb4d31c93c16?w=400",
        rating: 4.8,
        reviews: 324,
        badge: "Best Seller",
        description: "256GB, Space Black, Unlocked. Like new condition with 1-year warranty.",
        condition: "Excellent",
        warranty: "1 Year",
        inStock: true,
        features: ["A16 Bionic Chip", "48MP Camera", "6.7-inch Display", "All Day Battery Life"]
    },
    {
        id: 2,
        name: "MacBook Pro M2",
        category: "macbook",
        price: 1599,
        originalPrice: 1999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        rating: 4.9,
        reviews: 256,
        badge: "Premium",
        description: "14-inch, 16GB RAM, 512GB SSD. Professionally refurbished with warranty.",
        condition: "Like New",
        warranty: "1 Year",
        inStock: true,
        features: ["M2 Pro Chip", "16GB RAM", "512GB SSD", "Liquid Retina XDR Display"]
    },
    {
        id: 3,
        name: "iPad Air",
        category: "ipad",
        price: 449,
        originalPrice: 599,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
        rating: 4.7,
        reviews: 189,
        badge: "New",
        description: "64GB, Wi-Fi, Space Gray. Perfect for creativity and productivity.",
        condition: "Excellent",
        warranty: "1 Year",
        inStock: true,
        features: ["M1 Chip", "10.9-inch Display", "12MP Camera", "USB-C"]
    },
    {
        id: 4,
        name: "iPhone 13 Pro",
        category: "iphone",
        price: 699,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1632633173522-c8e6e1e1b8b2?w=400",
        rating: 4.6,
        reviews: 412,
        badge: "Sale",
        description: "128GB, Sierra Blue, Excellent condition with full functionality.",
        condition: "Very Good",
        warranty: "1 Year",
        inStock: true,
        features: ["A15 Bionic", "ProMotion Display", "Triple Camera", "5G Capable"]
    },
    {
        id: 5,
        name: "MacBook Air M1",
        category: "macbook",
        price: 799,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400",
        rating: 4.8,
        reviews: 523,
        badge: "Popular",
        description: "13-inch, 8GB RAM, 256GB SSD. Perfect for everyday computing.",
        condition: "Excellent",
        warranty: "1 Year",
        inStock: true,
        features: ["M1 Chip", "8GB RAM", "256GB SSD", "Retina Display"]
    },
    {
        id: 6,
        name: "iPad Pro 12.9",
        category: "ipad",
        price: 899,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1585790050230-5dd28404f3e4?w=400",
        rating: 4.9,
        reviews: 178,
        badge: "Premium",
        description: "256GB, Wi-Fi + Cellular, Silver. Professional-grade tablet.",
        condition: "Like New",
        warranty: "1 Year",
        inStock: false,
        features: ["M2 Chip", "12.9-inch Liquid Retina XDR", "ProMotion", "Face ID"]
    },
    {
        id: 7,
        name: "iPhone 12",
        category: "iphone",
        price: 499,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400",
        rating: 4.5,
        reviews: 678,
        badge: "Value",
        description: "64GB, Black, Great condition for everyday use.",
        condition: "Good",
        warranty: "1 Year",
        inStock: true,
        features: ["A14 Bionic", "Dual Camera", "5G", "Ceramic Shield"]
    },
    {
        id: 8,
        name: "MacBook Pro M1 Pro",
        category: "macbook",
        price: 1899,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=400",
        rating: 5.0,
        reviews: 94,
        badge: "Premium",
        description: "16-inch, 32GB RAM, 1TB SSD. Power user's dream machine.",
        condition: "Like New",
        warranty: "1 Year",
        inStock: true,
        features: ["M1 Pro Chip", "32GB RAM", "1TB SSD", "16-inch Display"]
    }
];

/* ==================== STATE MANAGEMENT ==================== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
let currentFilters = {
    category: 'all',
    priceRange: 'all',
    rating: ''
};

/* ==================== INITIALIZATION ==================== */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all features
    initializeNavigation();
    initializeSearch();
    initializeCart();
    initializeScrollAnimations();
    initializeParallax();
    initializeBackToTop();
    initializeDarkMode();
    initializeForms();
    initializeLazyLoading();

    // Page-specific initialization
    const currentPage = getCurrentPage();

    if (currentPage === 'index.html' || currentPage === '') {
        loadFeaturedProducts();
    } else if (currentPage === 'products.html') {
        initializeProductsPage();
    } else if (currentPage === 'product-detail.html') {
        initializeProductDetail();
    } else if (currentPage === 'cart.html') {
        initializeCartPage();
    } else if (currentPage === 'checkout.html') {
        initializeCheckout();
    } else if (currentPage === 'pre-order.html') {
        initializePreOrder();
    }

    updateCartBadge();
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}

/* ==================== NAVIGATION ==================== */
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            hamburger.setAttribute('aria-expanded',
                hamburger.classList.contains('active'));
        });

        // Close mobile menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    }

    // Sticky header on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ==================== SEARCH FUNCTIONALITY ==================== */
function initializeSearch() {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results-dropdown');

    if (!searchBar || !searchResults) return;

    let searchTimeout;

    searchBar.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query, searchResults);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

function performSearch(query, resultsContainer) {
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    ).slice(0, 5);

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--mid-gray);">No results found</div>';
        resultsContainer.classList.add('active');
        return;
    }

    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="navigateToProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div>
                <div style="font-weight: 600;">${product.name}</div>
                <div style="color: var(--gold); font-weight: 700;">$${product.price}</div>
            </div>
        </div>
    `).join('');

    resultsContainer.classList.add('active');
}

function navigateToProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

/* ==================== CART MANAGEMENT ==================== */
function initializeCart() {
    // Cart icon click
    const cartIcons = document.querySelectorAll('.cart-icon');
    const miniCart = document.getElementById('mini-cart');
    const miniCartOverlay = document.getElementById('mini-cart-overlay');
    const closeMiniCart = document.getElementById('close-mini-cart');

    cartIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            openMiniCart();
        });
    });

    if (closeMiniCart) {
        closeMiniCart.addEventListener('click', closeMiniCartFunc);
    }

    if (miniCartOverlay) {
        miniCartOverlay.addEventListener('click', closeMiniCartFunc);
    }

    renderMiniCart();
}

function openMiniCart() {
    const miniCart = document.getElementById('mini-cart');
    const miniCartOverlay = document.getElementById('mini-cart-overlay');

    if (miniCart && miniCartOverlay) {
        miniCart.classList.add('active');
        miniCartOverlay.classList.add('active');
        renderMiniCart();
    }
}

function closeMiniCartFunc() {
    const miniCart = document.getElementById('mini-cart');
    const miniCartOverlay = document.getElementById('mini-cart-overlay');

    if (miniCart && miniCartOverlay) {
        miniCart.classList.remove('active');
        miniCartOverlay.classList.remove('active');
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    if (!product.inStock) {
        showToast('This product is currently out of stock', 'error');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    renderMiniCart();
    openMiniCart();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderMiniCart();

    // Update cart page if we're on it
    if (getCurrentPage() === 'cart.html') {
        renderCartPage();
    }
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartBadge();
            renderMiniCart();

            if (getCurrentPage() === 'cart.html') {
                renderCartPage();
            }
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    badges.forEach(badge => {
        badge.textContent = totalItems;

        if (totalItems > 0) {
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

function renderMiniCart() {
    const miniCartItems = document.getElementById('mini-cart-items');
    const miniCartTotal = document.getElementById('mini-cart-total');

    if (!miniCartItems || !miniCartTotal) return;

    if (cart.length === 0) {
        miniCartItems.innerHTML = '<p style="text-align: center; color: var(--mid-gray); padding: 2rem;">Your cart is empty</p>';
        miniCartTotal.textContent = '$0.00';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    miniCartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                    <button onclick="removeFromCart(${item.id})" style="margin-left: auto; color: var(--red);" aria-label="Remove from cart">✕</button>
                </div>
            </div>
        </div>
    `).join('');

    miniCartTotal.textContent = `$${total.toFixed(2)}`;
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/* ==================== PRODUCT DISPLAY ==================== */
function loadFeaturedProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const featuredProducts = products.slice(0, 4);
    renderProducts(featuredProducts, productGrid);
}

function initializeProductsPage() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // Load all products
    renderProducts(products, productGrid);

    // Initialize filters
    initializeFilters();
}

function initializeFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilters = document.querySelectorAll('input[name="rating-filter"]');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');

    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }

    // Apply filters on change
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            currentFilters.category = categoryFilter.value;
        });
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', () => {
            currentFilters.priceRange = priceFilter.value;
        });
    }

    ratingFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            currentFilters.rating = filter.value;
        });
    });
}

function applyFilters() {
    let filteredProducts = [...products];

    // Category filter
    if (currentFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilters.category);
    }

    // Price filter
    if (currentFilters.priceRange !== 'all') {
        const [min, max] = currentFilters.priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }

    // Rating filter
    if (currentFilters.rating) {
        const minRating = Number(currentFilters.rating);
        filteredProducts = filteredProducts.filter(p => p.rating >= minRating);
    }

    const productGrid = document.getElementById('product-grid');
    renderProducts(filteredProducts, productGrid);

    showToast(`Found ${filteredProducts.length} products`, 'info');
}

function renderProducts(productsToRender, container) {
    if (!container) return;

    if (productsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--mid-gray); padding: 2rem; grid-column: 1 / -1;">No products found</p>';
        return;
    }

    container.innerHTML = productsToRender.map(product => `
        <article class="product-card scroll-reveal" role="listitem">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="quick-view-btn" onclick="openQuickView(${product.id})" aria-label="Quick view ${product.name}">
                    Quick View
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    // Re-initialize scroll animations for new elements
    observeScrollAnimations();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (hasHalfStar) {
        stars += '☆';
    }

    while (stars.length < 5) {
        stars += '☆';
    }

    return stars;
}

/* ==================== QUICK VIEW MODAL ==================== */
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const modalContent = document.getElementById('quick-view-content');

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--border-radius-lg);" loading="lazy">
            </div>
            <div>
                <div style="font-size: var(--font-size-sm); color: var(--mid-gray); text-transform: uppercase; margin-bottom: 0.5rem;">${product.category}</div>
                <h2 id="quick-view-title" style="font-size: var(--font-size-3xl); margin-bottom: 1rem;">${product.name}</h2>
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <span class="stars" style="color: var(--gold);">${generateStars(product.rating)}</span>
                    <span style="color: var(--mid-gray);">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div style="font-size: var(--font-size-3xl); color: var(--gold); font-weight: 700; margin-bottom: 1rem;">$${product.price}</div>
                ${product.originalPrice ? `<div style="color: var(--mid-gray); text-decoration: line-through; margin-bottom: 1rem;">$${product.originalPrice}</div>` : ''}
                <p style="color: var(--mid-gray); margin-bottom: 2rem;">${product.description}</p>
                <div style="margin-bottom: 2rem;">
                    <h4 style="margin-bottom: 1rem;">Key Features:</h4>
                    <ul style="list-style: disc; padding-left: 1.5rem; color: var(--mid-gray);">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn" onclick="addToCart(${product.id}); closeQuickView();" ${!product.inStock ? 'disabled' : ''} style="flex: 1;">
                        <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                    <button class="btn-secondary" onclick="navigateToProduct(${product.id})" style="flex: 1; color: var(--black); border-color: var(--black);">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close modal when clicking close button
    const closeBtn = modal.querySelector('.close-modal-btn');
    if (closeBtn) {
        closeBtn.onclick = closeQuickView;
    }

    // Close modal when clicking outside
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeQuickView();
        }
    };
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ==================== PRODUCT DETAIL PAGE ==================== */
function initializeProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        showProductNotFound();
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        showProductNotFound();
        return;
    }

    renderProductDetail(product);
}

function showProductNotFound() {
    const container = document.getElementById('product-detail-content');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem;">
                <h2>Product Not Found</h2>
                <p style="color: var(--mid-gray); margin: 2rem 0;">The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn"><span>Browse All Products</span></a>
            </div>
        `;
    }
}

function renderProductDetail(product) {
    const container = document.getElementById('product-detail-content');
    if (!container) return;

    container.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}" class="main-image" loading="lazy">
        </div>
        <div>
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="index.html">Home</a>
                <span class="breadcrumb-separator">/</span>
                <a href="products.html">Products</a>
                <span class="breadcrumb-separator">/</span>
                <span>${product.name}</span>
            </nav>

            <div style="font-size: var(--font-size-sm); color: var(--mid-gray); text-transform: uppercase; margin-bottom: 0.5rem;">${product.category}</div>
            <h1 style="font-size: var(--font-size-4xl); margin-bottom: 1rem;">${product.name}</h1>

            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <span class="stars" style="color: var(--gold); font-size: var(--font-size-lg);">${generateStars(product.rating)}</span>
                <span style="color: var(--mid-gray);">${product.rating} (${product.reviews} reviews)</span>
            </div>

            <div style="font-size: var(--font-size-4xl); color: var(--gold); font-weight: 700; margin-bottom: 1rem;">$${product.price}</div>
            ${product.originalPrice ? `<div style="color: var(--mid-gray); text-decoration: line-through; font-size: var(--font-size-xl); margin-bottom: 2rem;">$${product.originalPrice}</div>` : ''}

            <p style="color: var(--mid-gray); font-size: var(--font-size-lg); margin-bottom: 2rem; line-height: 1.8;">${product.description}</p>

            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: var(--border-radius-md); margin-bottom: 2rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <strong>Condition:</strong> ${product.condition}
                    </div>
                    <div>
                        <strong>Warranty:</strong> ${product.warranty}
                    </div>
                    <div>
                        <strong>Stock:</strong> ${product.inStock ? '<span style="color: var(--green);">In Stock</span>' : '<span style="color: var(--red);">Out of Stock</span>'}
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Key Features:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${product.features.map(feature => `
                        <li style="padding: 0.75rem; background: var(--light-gray); border-radius: var(--border-radius-sm); margin-bottom: 0.5rem;">
                            ✓ ${feature}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''} style="flex: 1; min-width: 200px;">
                    <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                <button class="btn-secondary" onclick="saveForLater(${product.id})" style="flex: 1; min-width: 200px; color: var(--black); border-color: var(--black);">
                    Save for Later
                </button>
            </div>
        </div>
    `;
}

/* ==================== CART PAGE ==================== */
function initializeCartPage() {
    renderCartPage();
    renderSavedItems();
}

function renderCartPage() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 4rem;">
                <h2>Your cart is empty</h2>
                <p style="color: var(--mid-gray); margin: 2rem 0;">Add some products to get started!</p>
                <a href="products.html" class="btn"><span>Browse Products</span></a>
            </div>
        `;
        cartTotal.textContent = '0.00';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        return;
    }

    const total = getCartTotal();

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" style="margin-bottom: 1rem; background: var(--light-gray); padding: 1.5rem; border-radius: var(--border-radius-md);">
            <div style="display: grid; grid-template-columns: 100px 1fr auto; gap: 1.5rem; align-items: center;">
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: var(--border-radius-sm);" loading="lazy">
                <div>
                    <h3 style="margin-bottom: 0.5rem;">${item.name}</h3>
                    <p style="color: var(--mid-gray); margin-bottom: 0.5rem;">${item.description}</p>
                    <div style="font-size: var(--font-size-xl); color: var(--gold); font-weight: 700;">$${item.price}</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-end;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                        <span style="min-width: 40px; text-align: center; font-weight: 600;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                    </div>
                    <div style="font-size: var(--font-size-lg); font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button onclick="removeFromCart(${item.id})" style="color: var(--red); font-size: var(--font-size-sm); text-decoration: underline;" aria-label="Remove ${item.name} from cart">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    cartTotal.textContent = total.toFixed(2);
    if (checkoutBtn) checkoutBtn.style.display = 'inline-flex';
}

function saveForLater(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existingItem = savedItems.find(item => item.id === productId);

    if (existingItem) {
        showToast('Item already in saved list', 'info');
        return;
    }

    savedItems.push(product);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));

    showToast(`${product.name} saved for later!`, 'success');

    if (getCurrentPage() === 'cart.html') {
        renderSavedItems();
    }
}

function renderSavedItems() {
    const savedItemsGrid = document.getElementById('saved-items-grid');
    if (!savedItemsGrid) return;

    if (savedItems.length === 0) {
        savedItemsGrid.innerHTML = '<p style="text-align: center; color: var(--mid-gray); padding: 2rem;">No saved items</p>';
        return;
    }

    savedItemsGrid.innerHTML = savedItems.map(item => `
        <div style="background: var(--white); padding: 1rem; border-radius: var(--border-radius-md); box-shadow: var(--shadow-sm);">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--border-radius-sm); margin-bottom: 0.5rem;" loading="lazy">
            <h4 style="font-size: var(--font-size-base); margin-bottom: 0.5rem;">${item.name}</h4>
            <div style="color: var(--gold); font-weight: 700; margin-bottom: 0.5rem;">$${item.price}</div>
            <button class="btn" onclick="addToCart(${item.id}); removeSavedItem(${item.id});" style="width: 100%; padding: 0.5rem;">
                <span>Move to Cart</span>
            </button>
        </div>
    `).join('');
}

function removeSavedItem(productId) {
    savedItems = savedItems.filter(item => item.id !== productId);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    renderSavedItems();
}

/* ==================== CHECKOUT ==================== */
function initializeCheckout() {
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    const checkoutForm = document.getElementById('checkout-form');
    const btnToPayment = document.getElementById('btn-to-payment');
    const btnBackToShipping = document.getElementById('btn-back-to-shipping');
    const btnToReview = document.getElementById('btn-to-review');
    const btnBackToPayment = document.getElementById('btn-back-to-payment');

    // Render order summary
    renderOrderSummary();

    // Step navigation
    if (btnToPayment) {
        btnToPayment.addEventListener('click', () => {
            if (validateShippingForm()) {
                goToStep(2);
            }
        });
    }

    if (btnBackToShipping) {
        btnBackToShipping.addEventListener('click', () => goToStep(1));
    }

    if (btnToReview) {
        btnToReview.addEventListener('click', () => {
            if (validatePaymentForm()) {
                renderReviewStep();
                goToStep(3);
            }
        });
    }

    if (btnBackToPayment) {
        btnBackToPayment.addEventListener('click', () => goToStep(2));
    }

    // Form submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
}

function goToStep(step) {
    // Update progress indicators
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        if (index < step) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Show correct step
    document.querySelectorAll('.checkout-step').forEach(el => {
        el.classList.remove('active');
    });

    const currentStep = document.querySelector(`.checkout-step[data-step="${step}"]`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}

function validateShippingForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();

    if (!name || !email || !address || !city) {
        showToast('Please fill in all required fields', 'error');
        return false;
    }

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return false;
    }

    return true;
}

function validatePaymentForm() {
    // In a real app, you'd validate card details here
    // For this demo, we'll just return true
    return true;
}

function renderOrderSummary() {
    const summaryItems = document.getElementById('summary-items');
    const summaryTotal = document.getElementById('summary-total');

    if (!summaryItems || !summaryTotal) return;

    const total = getCartTotal();

    summaryItems.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--mid-gray);">
            <div>
                <div style="font-weight: 600;">${item.name}</div>
                <div style="color: var(--mid-gray); font-size: var(--font-size-sm);">Qty: ${item.quantity}</div>
            </div>
            <div style="font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');

    summaryTotal.textContent = `$${total.toFixed(2)}`;
}

function renderReviewStep() {
    const reviewDetails = document.getElementById('review-details');
    if (!reviewDetails) return;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    reviewDetails.innerHTML = `
        <div style="background: var(--light-gray); padding: 1.5rem; border-radius: var(--border-radius-md); margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">Shipping Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
        </div>

        <div style="background: var(--light-gray); padding: 1.5rem; border-radius: var(--border-radius-md);">
            <h3 style="margin-bottom: 1rem;">Order Items</h3>
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')}
            <div style="border-top: 2px solid var(--black); margin-top: 1rem; padding-top: 1rem; display: flex; justify-content: space-between; font-size: var(--font-size-xl); font-weight: 700;">
                <span>Total:</span>
                <span>$${getCartTotal().toFixed(2)}</span>
            </div>
        </div>
    `;
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    // Generate order number
    const orderNumber = '#' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Clear cart
    cart = [];
    saveCart();
    updateCartBadge();

    // Store order number and redirect
    localStorage.setItem('lastOrderNumber', orderNumber);
    window.location.href = 'confirmation.html';
}

/* ==================== PRE-ORDER FORM ==================== */
function initializePreOrder() {
    const preOrderForm = document.getElementById('pre-order-form');

    if (preOrderForm) {
        preOrderForm.addEventListener('submit', handlePreOrderSubmit);
    }
}

function handlePreOrderSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const product = document.getElementById('product-select').value;

    if (!name || !email || !product) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    showToast('Pre-order submitted successfully! We\'ll contact you soon.', 'success');

    // Reset form
    e.target.reset();
}

/* ==================== FORMS & VALIDATION ==================== */
function initializeForms() {
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });

    // Add real-time validation to all forms
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
        });
    });
}

function handleNewsletterSubmit(e) {
    e.preventDefault();

    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    showToast('Thank you for subscribing to our newsletter!', 'success');
    emailInput.value = '';
}

function validateInput(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;

    const errorMessage = formGroup.querySelector('.error-message');

    if (!input.value.trim()) {
        formGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = 'This field is required';
        }
        return false;
    }

    if (input.type === 'email' && !isValidEmail(input.value)) {
        formGroup.classList.add('error');
        if (errorMessage) {
            errorMessage.textContent = 'Please enter a valid email';
        }
        return false;
    }

    formGroup.classList.remove('error');
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ==================== TOAST NOTIFICATIONS ==================== */
function showToast(message, type = 'info') {
    let toastContainer = document.querySelector('.toast-container');

    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-message">${message}</div>
        <button class="toast-close" aria-label="Close notification">✕</button>
    `;

    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);

    // Close on click
    const closeBtn = toast.querySelector('.toast-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100px)';
            setTimeout(() => toast.remove(), 300);
        });
    }
}

/* ==================== SCROLL ANIMATIONS ==================== */
function initializeScrollAnimations() {
    observeScrollAnimations();
}

function observeScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* ==================== PARALLAX EFFECT ==================== */
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* ==================== BACK TO TOP BUTTON ==================== */
function initializeBackToTop() {
    let backToTopBtn = document.querySelector('.back-to-top');

    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== DARK MODE TOGGLE ==================== */
function initializeDarkMode() {
    let themeToggle = document.querySelector('.theme-toggle');

    if (!themeToggle) {
        themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = `
            <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
        `;
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        document.body.appendChild(themeToggle);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode enabled`, 'info');
    });
}

/* ==================== LAZY LOADING ==================== */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

/* ==================== ACCORDION ==================== */
function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains('active');

    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
        accordionItem.classList.add('active');
    }
}

/* ==================== CONTACT FORM ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

function handleContactFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    showToast('Thank you for contacting us! We\'ll get back to you soon.', 'success');

    // Reset form
    e.target.reset();
}

/* ==================== KEYBOARD NAVIGATION ==================== */
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        closeQuickView();
        closeMiniCartFunc();
    }
});

/* ==================== ORDER CONFIRMATION ==================== */
if (getCurrentPage() === 'confirmation.html') {
    const orderNumber = localStorage.getItem('lastOrderNumber');
    const orderNumberEl = document.getElementById('order-number');

    if (orderNumberEl && orderNumber) {
        orderNumberEl.textContent = orderNumber;
    }
}

// Export functions for use in HTML onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.navigateToProduct = navigateToProduct;
window.saveForLater = saveForLater;
window.removeSavedItem = removeSavedItem;
window.toggleAccordion = toggleAccordion;
