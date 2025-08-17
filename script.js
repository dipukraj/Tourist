// Filter attractions by state
function filterState(state) {
    // Hide all state sections first
    document.querySelectorAll('.state-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected state
    if(state) {
        const stateSection = document.getElementById(state);
        if(stateSection) {
            stateSection.style.display = 'block';
            stateSection.scrollIntoView({behavior: 'smooth'});
        }
    } else {
        // Show all if no state selected
        document.querySelectorAll('.state-section').forEach(section => {
            section.style.display = 'block';
        });
    }
}

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
