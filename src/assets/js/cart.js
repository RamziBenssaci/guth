// Cart Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
    
    // Update cart button
    const updateCartBtn = document.querySelector('.update-cart-btn');
    if (updateCartBtn) {
        updateCartBtn.addEventListener('click', function() {
            loadCartItems();
            alert('Cart updated!');
        });
    }
    
    // Clear cart button
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                localStorage.setItem('cart', JSON.stringify([]));
                loadCartItems();
            }
        });
    }
});

function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.querySelector('.subtotal');
    const totalEl = document.querySelector('.total-amount');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <tr class="cart-empty">
                <td colspan="5">
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                        <a href="shop.html" class="continue-shopping-btn">Continue Shopping</a>
                    </div>
                </td>
            </tr>
        `;
        if (subtotalEl) subtotalEl.textContent = '$0.00';
        if (totalEl) totalEl.textContent = '$0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <tr>
                <td>
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-info">
                            <h4><a href="product.html">${item.name}</a></h4>
                        </div>
                    </div>
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="remove-item-btn" onclick="removeItem(${item.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    if (subtotalEl) subtotalEl.textContent = '$' + total.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function updateQuantity(id, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        if (typeof updateCartCount === 'function') updateCartCount();
    }
}

function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    loadCartItems();
    if (typeof updateCartCount === 'function') updateCartCount();
}
