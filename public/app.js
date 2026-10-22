const productList = document.getElementById('product-list');
const cartButton = document.querySelector('.nav-button');

const state = {
  cartCount: 0,
  products: []
};

async function fetchProducts() {
  try {
    const response = await fetch('/api/products');
    const data = await response.json();
    state.products = data.products;
    renderProducts();
  } catch (error) {
    productList.innerHTML = '<p class="error">Unable to load products right now.</p>';
    console.error(error);
  }
}

function renderProducts() {
  productList.innerHTML = state.products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>★ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              <strong>$${product.price.toFixed(2)}</strong>
              <button class="add-btn" data-id="${product.id}">Add to cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.cartCount += 1;
      cartButton.textContent = `Cart (${state.cartCount})`;
    });
  });
}

fetchProducts();
