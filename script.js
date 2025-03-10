document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    document.body.classList.add('english');
    
    // Language toggle
    const enBtn = document.getElementById('en-btn');
    const amBtn = document.getElementById('am-btn');
    
    // Function to update text content based on language
    function updateLanguage(language) {
        const elements = document.querySelectorAll('[data-en], [data-am]');
        
        elements.forEach(element => {
            if (language === 'english' && element.hasAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            } else if (language === 'amharic' && element.hasAttribute('data-am')) {
                element.textContent = element.getAttribute('data-am');
            }
        });
    }
    
    enBtn.addEventListener('click', function() {
        document.body.classList.remove('amharic');
        document.body.classList.add('english');
        enBtn.classList.add('active');
        amBtn.classList.remove('active');
        updateLanguage('english');
    });
    
    amBtn.addEventListener('click', function() {
        document.body.classList.remove('english');
        document.body.classList.add('amharic');
        amBtn.classList.add('active');
        enBtn.classList.remove('active');
        updateLanguage('amharic');
    });
    
    // Initialize with English
    updateLanguage('english');
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! This is a demo, so no actual submission occurs.');
            contactForm.reset();
        });
    }
});