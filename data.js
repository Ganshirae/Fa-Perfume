// FA Perfume - Shared Data & Utilities
const FA = {
  products: [
    {
      id: 1,
      name: "Black Opium",
      inspired: "Yves Saint Laurent",
      category: "women",
      categoryLabel: "Women's Collection",
      price: 89000,
      originalPrice: 120000,
      stock: 45,
      rating: 4.9,
      reviews: 234,
      badge: "Best Seller",
      heroImage: "assets/product1.jpg",
      detailImage: "assets/product2.jpg",
      description: "Parfum inspired dari Black Opium YSL yang ikonik. Aroma yang bold, sensual, dan adiktif dengan harmoni buah-buahan segar bertemu dengan kedalaman kopi dan vanila.",
      topNotes: ["Pear", "Pink Pepper", "Orange"],
      middleNotes: ["Coffee", "Jasmine", "Almond"],
      baseNotes: ["Vanilla", "Patchouli", "Cedar"],
      sizes: ["30ml", "100ml"],
      featured: true,
      bestseller: true
    },
    {
      id: 2,
      name: "ZR Red Vanilla",
      inspired: "Zara Red Vanilla",
      category: "women",
      categoryLabel: "Women's Collection",
      price: 79000,
      originalPrice: 110000,
      stock: 32,
      rating: 4.8,
      reviews: 187,
      badge: "New",
      heroImage: "assets/product3.jpg",
      detailImage: "assets/product3.jpg",
      description: "Aroma manis dan hangat yang terinspirasi dari Zara Red Vanilla. Perpaduan blackcurrant dan vanila memberikan kesan elegan dan feminin yang tak terlupakan.",
      topNotes: ["Blackcurrant", "Vanilla"],
      middleNotes: ["Praline", "Patchouli"],
      baseNotes: ["Pear", "Tonka Bean", "Iris"],
      sizes: ["30ml", "100ml"],
      featured: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Coch Platinum",
      inspired: "Coach Platinum",
      category: "men",
      categoryLabel: "Men's Collection",
      price: 89000,
      originalPrice: 120000,
      stock: 28,
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      heroImage: "assets/product4.jpg",
      detailImage: "assets/product5.jpg",
      description: "Inspired dari Coach Platinum, aroma maskulin yang segar dan modern. Kombinasi nanas, blackberry dengan base vanilla dan leather menciptakan karakter pria yang percaya diri.",
      topNotes: ["Pineapple", "Black Pepper", "Berries"],
      middleNotes: ["Geranium", "Sage", "Cashmeran"],
      baseNotes: ["Vanilla", "Sandalwood", "Patchouli", "Leather"],
      sizes: ["30ml", "100ml"],
      featured: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Red Vanilla",
      inspired: "Zara Red Vanilla 100ml",
      category: "women",
      categoryLabel: "Women's Collection",
      price: 149000,
      originalPrice: 180000,
      stock: 20,
      rating: 4.8,
      reviews: 98,
      badge: "Luxury",
      heroImage: "assets/product6.jpg",
      detailImage: "assets/product6.jpg",
      description: "Versi 100ml premium dari Red Vanilla. Botol eksklusif dengan aroma yang lebih pekat dan tahan lama. Hadiah sempurna untuk orang-orang istimewa.",
      topNotes: ["Blackcurrant", "Vanilla", "Pear"],
      middleNotes: ["Praline", "Chocolate"],
      baseNotes: ["Tonka Bean", "Iris", "Musk"],
      sizes: ["100ml"],
      featured: false,
      bestseller: false
    },
    {
      id: 5,
      name: "Savage",
      inspired: "Dior Sauvage",
      category: "men",
      categoryLabel: "Men's Collection",
      price: 89000,
      originalPrice: 125000,
      stock: 55,
      rating: 4.9,
      reviews: 312,
      badge: "Best Seller",
      heroImage: "assets/product7.jpg",
      detailImage: "assets/product8.jpg",
      description: "Inspired dari Dior Sauvage yang legendaris. Aroma maskulin wild dan segar yang terinspirasi dari alam bebas. Bergamot dan lavender bertemu dengan base vanilla dan ambroxan yang kuat.",
      topNotes: ["Bergamot", "Lavender"],
      middleNotes: ["Lavender", "Nutmeg", "Star Anise"],
      baseNotes: ["Vanilla", "Ambroxan"],
      sizes: ["30ml", "100ml"],
      featured: true,
      bestseller: true
    },
    {
      id: 6,
      name: "1 M Lucky",
      inspired: "Paco Rabanne 1 Million Lucky",
      category: "men",
      categoryLabel: "Men's Collection",
      price: 89000,
      originalPrice: 120000,
      stock: 38,
      rating: 4.7,
      reviews: 143,
      badge: "Popular",
      heroImage: "assets/product9.jpg",
      detailImage: "assets/product10.jpg",
      description: "Inspired dari Paco Rabanne 1 Million Lucky. Aroma fruity-woody yang fresh dan maskulin. Perpaduan plum, grapefruit dengan hazelnut menciptakan kesan pria modern yang beruntung.",
      topNotes: ["Plum", "Onozonic", "Grapefruit", "Bergamot"],
      middleNotes: ["Hazelnut", "Honey", "Cedar", "Jasmine"],
      baseNotes: ["Amberwood", "Patchouli", "Oakmoss", "Vetiver"],
      sizes: ["30ml", "100ml"],
      featured: false,
      bestseller: true
    },
    {
      id: 7,
      name: "Coch Platinum Mini",
      inspired: "Coach Platinum",
      category: "men",
      categoryLabel: "Men's Collection",
      price: 45000,
      originalPrice: 65000,
      stock: 60,
      rating: 4.6,
      reviews: 89,
      badge: null,
      heroImage: "assets/product5.jpg",
      detailImage: "assets/product5.jpg",
      description: "Versi 30ml dari Coch Platinum. Praktis untuk dibawa bepergian, sempurna sebagai travel size atau hadiah spesial.",
      topNotes: ["Pineapple", "Black Pepper", "Berries"],
      middleNotes: ["Geranium", "Sage", "Cashmeran"],
      baseNotes: ["Vanilla", "Sandalwood", "Leather"],
      sizes: ["30ml"],
      featured: false,
      bestseller: false
    },
    {
      id: 8,
      name: "Savage Mini",
      inspired: "Dior Sauvage",
      category: "men",
      categoryLabel: "Men's Collection",
      price: 45000,
      originalPrice: 65000,
      stock: 70,
      rating: 4.8,
      reviews: 201,
      badge: null,
      heroImage: "assets/product8.jpg",
      detailImage: "assets/product8.jpg",
      description: "Versi 30ml dari Savage yang legendaris. Ideal untuk daily carry atau hadiah. Semua keunggulan Savage dalam botol yang lebih kecil dan terjangkau.",
      topNotes: ["Bergamot", "Lavender"],
      middleNotes: ["Lavender", "Nutmeg", "Star Anise"],
      baseNotes: ["Vanilla", "Ambroxan"],
      sizes: ["30ml"],
      featured: false,
      bestseller: false
    }
  ],

  categories: [
    { id: "men", label: "Men's Collection", icon: "👔", desc: "Bold & Masculine" },
    { id: "women", label: "Women's Collection", icon: "🌸", desc: "Elegant & Feminine" },
    { id: "unisex", label: "Unisex Collection", icon: "✨", desc: "For Everyone" },
    { id: "luxury", label: "Luxury Collection", icon: "💎", desc: "Premium Experience" }
  ],

  cart: JSON.parse(localStorage.getItem('fa_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('fa_wishlist') || '[]'),

  saveCart() {
    localStorage.setItem('fa_cart', JSON.stringify(this.cart));
    this.updateCartBadge();
  },

  saveWishlist() {
    localStorage.setItem('fa_wishlist', JSON.stringify(this.wishlist));
    this.updateWishlistBadge();
  },

  addToCart(productId, quantity = 1, size = '30ml') {
    const existing = this.cart.find(item => item.id === productId && item.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        this.cart.push({ id: productId, quantity, size, name: product.name, price: product.price, image: product.heroImage });
      }
    }
    this.saveCart();
    this.showToast('Produk ditambahkan ke keranjang!', 'success');
  },

  addToWishlist(productId) {
    const exists = this.wishlist.find(id => id === productId);
    if (!exists) {
      this.wishlist.push(productId);
      this.saveWishlist();
      this.showToast('Ditambahkan ke wishlist!', 'success');
    } else {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      this.saveWishlist();
      this.showToast('Dihapus dari wishlist', 'info');
    }
  },

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  },

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCartCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-badge');
    const count = this.wishlist.length;
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
  },

  showToast(message, type = 'success') {
    const existing = document.querySelector('.fa-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'fa-toast';
    const colors = { success: '#5B4DBA', info: '#8B7CF6', error: '#ef4444' };
    toast.style.cssText = `position:fixed;bottom:24px;right:24px;background:${colors[type]};color:white;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:9999;box-shadow:0 8px 32px rgba(91,77,186,0.3);transform:translateY(100px);transition:transform 0.3s ease;max-width:300px;`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translateY(0)'; });
    setTimeout(() => { toast.style.transform = 'translateY(100px)'; setTimeout(() => toast.remove(), 300); }, 3000);
  },

  renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '☆';
    while (stars.length < 5) stars += '☆';
    return `<span class="text-yellow-400">${stars}</span>`;
  },

  renderProductCard(product, basePath = '..') {
    const wishActive = this.isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400';
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    return `
      <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100">
        <div class="relative overflow-hidden bg-gray-50 aspect-square">
          <img src="${product.heroImage}" alt="${product.name}" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><rect fill=%22%23f3f4f6%22 width=%22400%22 height=%22400%22/><text x=%22200%22 y=%22200%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-size=%2240%22>FA</text></svg>'"/>
          ${product.badge ? `<span class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">${product.badge}</span>` : ''}
          <span class="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">-${discount}%</span>
          <button onclick="FA.addToWishlist(${product.id}); this.classList.toggle('text-red-500'); this.classList.toggle('text-gray-400')" 
                  class="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center ${wishActive} hover:scale-110 transition-transform">
            ♥
          </button>
        </div>
        <div class="p-4">
          <p class="text-xs text-purple-500 font-medium mb-1">${product.categoryLabel}</p>
          <h3 class="font-semibold text-gray-900 text-base mb-1 truncate">${product.name}</h3>
          <p class="text-xs text-gray-500 mb-2">Inspired by ${product.inspired}</p>
          <div class="flex items-center gap-1 mb-3">
            ${this.renderStars(product.rating)}
            <span class="text-xs text-gray-500 ml-1">(${product.reviews})</span>
          </div>
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-purple-700 font-bold text-lg">${this.formatPrice(product.price)}</span>
              <span class="text-gray-400 text-xs line-through ml-2">${this.formatPrice(product.originalPrice)}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <a href="product-detail.html?id=${product.id}" 
               class="flex-1 text-center border border-purple-600 text-purple-600 text-sm font-medium py-2 rounded-xl hover:bg-purple-50 transition-colors">
              Detail
            </a>
            <button onclick="FA.addToCart(${product.id})" 
                    class="flex-1 bg-purple-600 text-white text-sm font-medium py-2 rounded-xl hover:bg-purple-700 transition-colors">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    `;
  }
};

// Initialize badges on load
document.addEventListener('DOMContentLoaded', () => {
  FA.updateCartBadge();
  FA.updateWishlistBadge();
});