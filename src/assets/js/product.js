// Product Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail click
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            if (mainImage) {
                mainImage.src = this.src;
            }
        });
    });
    
    // Quantity controls
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');
    
    if (minusBtn && quantityInput) {
        minusBtn.addEventListener('click', function() {
            let qty = parseInt(quantityInput.value) || 1;
            if (qty > 1) {
                quantityInput.value = qty - 1;
            }
        });
    }
    
    if (plusBtn && quantityInput) {
        plusBtn.addEventListener('click', function() {
            let qty = parseInt(quantityInput.value) || 1;
            quantityInput.value = qty + 1;
        });
    }
    
    // Add to cart
    const addToCartForm = document.querySelector('.product-form');
    if (addToCartForm) {
        addToCartForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const quantity = parseInt(quantityInput.value) || 1;
            const product = {
                id: 1,
                name: document.querySelector('.product-title').textContent,
                price: parseFloat(document.querySelector('.current-price').textContent.replace('$', '')),
                image: mainImage ? mainImage.src : '',
                quantity: quantity
            };
            
            if (typeof addToCart === 'function') {
                addToCart(product);
                alert('Product added to cart!');
            }
        });
    }
    
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });
});
