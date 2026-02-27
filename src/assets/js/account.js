// My Account Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Menu navigation
    const menuItems = document.querySelectorAll('.account-menu-item');
    const accountTabs = document.querySelectorAll('.account-tab');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.href.includes('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                
                // Update menu
                menuItems.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                
                // Update tabs
                accountTabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.id === targetId) {
                        tab.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Handle hash on load
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetTab = document.getElementById(targetId);
        const targetMenuItem = document.querySelector(`[href="#${targetId}"]`);
        
        if (targetTab && targetMenuItem) {
            accountTabs.forEach(tab => tab.classList.remove('active'));
            menuItems.forEach(item => item.classList.remove('active'));
            
            targetTab.classList.add('active');
            targetMenuItem.classList.add('active');
        }
    }
});
