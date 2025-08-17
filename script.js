// Simple filter functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const state = document.getElementById('state-select').value.toLowerCase();
    const type = document.getElementById('type-select').value.toLowerCase();
    const attractions = document.querySelectorAll('.attraction-card');
    
    attractions.forEach(card => {
        const cardState = card.getAttribute('data-state');
        const cardType = card.getAttribute('data-type');
        
        const stateMatch = state === '' || cardState === state;
        const typeMatch = type === '' || cardType === type;
        
        if (stateMatch && typeMatch) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
});

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeInObserver.observe(el);
    });
}); 