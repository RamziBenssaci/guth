// Checkout Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadCheckoutItems();
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const orderData = {
                billing: Object.fromEntries(formData),
                items: JSON.parse(localStorage.getItem('cart')) || [],
                total: getCartTotal()
            };
            
            // Simulate order placement
            alert('Order placed successfully! Order #' + Math.floor(Math.random() * 10000));
            
            // Clear cart
            localStorage.setItem('cart', JSON.stringify([]));
            window.location.href = 'my-account.html#orders';
        });
    }
});

function loadCheckoutItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const subtotalEl = document.querySelector('.subtotal');
    const totalEl = document.querySelector('.total-amount');
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="order-item">
                <div class="order-item-info">
                    <h4>${item.name}</h4>
                    <span>Qty: ${item.quantity}</span>
                </div>
                <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
    });
    
    checkoutItemsContainer.innerHTML = html;
    if (subtotalEl) subtotalEl.textContent = '$' + total.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
