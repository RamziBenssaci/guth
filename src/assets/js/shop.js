// Shop Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsContainer = document.getElementById('products-container');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (productsContainer) {
                if (view === 'list') {
                    productsContainer.classList.add('list-view');
                } else {
                    productsContainer.classList.remove('list-view');
                }
            }
        });
    });
    
    // Filter links
    const filterLinks = document.querySelectorAll('.filter-list a');
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
