// PRODUCTS DATA
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    img: "https://picsum.photos/400?random=1",
    desc: "Premium noise-cancelling wireless headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    img: "https://picsum.photos/400?random=2",
    desc: "Track fitness, heart rate & sleep"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    img: "https://picsum.photos/400?random=3",
    desc: "Crystal clear sound with deep bass"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1299,
    img: "https://picsum.photos/400?random=4",
    desc: "High precision RGB gaming mouse"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3499,
    img: "https://picsum.photos/400?random=5",
    desc: "RGB mechanical keyboard for gamers"
  },
  {
    id: 6,
    name: "Laptop Backpack",
    price: 1799,
    img: "https://picsum.photos/400?random=6",
    desc: "Water-resistant backpack with laptop sleeve"
  },
  {
    id: 7,
    name: "Power Bank",
    price: 2499,
    img: "https://picsum.photos/400?random=7",
    desc: "20000mAh fast charging power bank"
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 899,
    img: "https://picsum.photos/400?random=8",
    desc: "Ergonomic wireless mouse"
  },
  {
    id: 9,
    name: "USB-C Hub",
    price: 1599,
    img: "https://picsum.photos/400?random=9",
    desc: "Multi-port USB-C hub"
  },
  {
    id: 10,
    name: "True Wireless Earbuds",
    price: 2199,
    img: "https://picsum.photos/400?random=10",
    desc: "Low latency earbuds with mic"
  }
];

// ================= LOAD PRODUCTS =================
function loadProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <strong>₹${product.price}</strong>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

// ================= ADD TO CART =================
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const selectedProduct = products.find(p => p.id === productId);
  cart.push(selectedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart ✅");
}


// CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}

// LOAD PRODUCTS
function loadProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// LOAD CART
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  if (!container) return;

  cart.forEach(item => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// LOGIN
function login() {
  localStorage.setItem("loggedIn", true);
  window.location.href = "checkout.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out");
}
