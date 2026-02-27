// Countdown Timer
function updateCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const millisecondsEl = document.getElementById('milliseconds');
    
    if (hoursEl && minutesEl && secondsEl && millisecondsEl) {
        let hours = parseInt(hoursEl.textContent) || 0;
        let minutes = parseInt(minutesEl.textContent) || 0;
        let seconds = parseInt(secondsEl.textContent) || 0;
        let milliseconds = parseInt(millisecondsEl.textContent) || 0;
        
        setInterval(() => {
            milliseconds--;
            if (milliseconds < 0) {
                milliseconds = 99;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) {
                            hours = 23;
                        }
                    }
                }
            }
            
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
            millisecondsEl.textContent = String(milliseconds).padStart(2, '0');
        }, 10);
    }
}

// Close Top Banner
document.addEventListener('DOMContentLoaded', function() {
    const closeBanner = document.querySelector('.close-banner');
    const topBanner = document.querySelector('.top-banner');
    
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }
    
    updateCountdown();
    
    // Deals Countdown
    const dealsTimerBoxes = document.querySelectorAll('.deals-countdown .timer-box');
    if (dealsTimerBoxes.length > 0) {
        let dealsHours = 9;
        let dealsMinutes = 20;
        let dealsSeconds = 54;
        let dealsMilliseconds = 27;
        
        setInterval(() => {
            dealsMilliseconds--;
            if (dealsMilliseconds < 0) {
                dealsMilliseconds = 99;
                dealsSeconds--;
                if (dealsSeconds < 0) {
                    dealsSeconds = 59;
                    dealsMinutes--;
                    if (dealsMinutes < 0) {
                        dealsMinutes = 59;
                        dealsHours--;
                        if (dealsHours < 0) {
                            dealsHours = 23;
                        }
                    }
                }
            }
            
            if (dealsTimerBoxes[0]) dealsTimerBoxes[0].textContent = String(dealsHours).padStart(2, '0');
            if (dealsTimerBoxes[1]) dealsTimerBoxes[1].textContent = String(dealsMinutes).padStart(2, '0');
            if (dealsTimerBoxes[2]) dealsTimerBoxes[2].textContent = String(dealsSeconds).padStart(2, '0');
            if (dealsTimerBoxes[3]) dealsTimerBoxes[3].textContent = String(dealsMilliseconds).padStart(2, '0');
        }, 10);
    }
});

// Category Tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Product Carousel Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navArrows = document.querySelectorAll('.nav-arrow');
    
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const isLeft = this.querySelector('.fa-chevron-left');
            const productsGrid = this.closest('.container').querySelector('.products-grid, .manufacturers-grid');
            
            if (productsGrid) {
                if (isLeft) {
                    productsGrid.scrollBy({ left: -300, behavior: 'smooth' });
                } else {
                    productsGrid.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        });
    });
});

// Add to Cart Functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let itemCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            itemCount++;
            if (cartCount) {
                cartCount.textContent = itemCount + ' items';
            }
            
            // Visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.backgroundColor = '#4caf50';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value;
            if (searchTerm) {
                alert('Searching for: ' + searchTerm);
                // Add actual search functionality here
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});

// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            currentSlide = index;
        });
    });
    
    // Auto-slide (optional)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }, 5000);
});

// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Newsletter Form
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We will send updates to: ' + email);
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }
});

// Presale Chat Button
document.addEventListener('DOMContentLoaded', function() {
    const presaleChatButtons = document.querySelectorAll('.presale-chat-btn, .presale-chat-float');
    
    presaleChatButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Opening chat...');
            // Add actual chat functionality here
        });
    });
});

// Mobile Menu Toggle (for responsive design)
document.addEventListener('DOMContentLoaded', function() {
    const categoriesBtn = document.querySelector('.categories-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (categoriesBtn && navMenu && window.innerWidth <= 768) {
        categoriesBtn.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-open');
        });
    }
});

// Product Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
});

// Lazy Loading Images (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Vehicle Filter Sidebar Toggle
document.addEventListener('DOMContentLoaded', function() {
    const vehicleFilterCard = document.querySelector('.vehicle-filter-card');
    const vehicleFilterSidebar = document.querySelector('.vehicle-filter-sidebar');
    
    if (vehicleFilterCard && vehicleFilterSidebar) {
        let isVisible = true;
        
        // Hide by default on mobile
        if (window.innerWidth <= 768) {
            vehicleFilterSidebar.style.display = 'none';
            isVisible = false;
        }
        
        // Toggle on click
        vehicleFilterCard.addEventListener('click', function(e) {
            if (e.target === this || e.target.closest('select, input, button')) {
                return;
            }
            if (window.innerWidth <= 768) {
                isVisible = !isVisible;
                vehicleFilterSidebar.style.display = isVisible ? 'block' : 'none';
            }
        });
    }
});

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('MOBEX Auto Parts - Frontend Loaded');
    
    // Add any additional initialization code here
});
