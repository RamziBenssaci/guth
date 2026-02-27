// Login/Register Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Update tabs
            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update forms
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === targetTab + '-form') {
                    form.classList.add('active');
                }
            });
        });
    });
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('[name="username"]').value;
            const password = this.querySelector('[name="password"]').value;
            
            // Simulate login
            if (username && password) {
                localStorage.setItem('user', JSON.stringify({username, loggedIn: true}));
                alert('Login successful!');
                window.location.href = 'my-account.html';
            }
        });
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = this.querySelector('[name="password"]').value;
            const confirmPassword = this.querySelector('[name="confirm_password"]').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Simulate registration
            alert('Registration successful! Please login.');
            document.querySelector('[data-tab="login"]').click();
        });
    }
});
