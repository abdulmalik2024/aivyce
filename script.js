// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .benefit-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Phone number click tracking
document.querySelectorAll('.phone-link').forEach(link => {
    link.addEventListener('click', () => {
        // Track phone clicks (you can integrate with analytics here)
        console.log('Phone number clicked:', link.textContent);
    });
});

// Button click tracking
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Track button clicks (you can integrate with analytics here)
        console.log('Button clicked:', button.textContent);
        
        // Special tracking for Dashboard button
        if (button.textContent.trim() === 'Dashboard') {
            console.log('Dashboard button clicked - redirecting to AIVYCE dashboard');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Call log animation
function animateCallLogs() {
    const callLogs = document.querySelectorAll('.call-log');
    callLogs.forEach((log, index) => {
        setTimeout(() => {
            log.style.opacity = '1';
            log.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Initialize call log animation when in view
const callLogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const callLogs = entry.target.querySelectorAll('.call-log');
            callLogs.forEach(log => {
                log.style.opacity = '0';
                log.style.transform = 'translateX(-20px)';
                log.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            animateCallLogs();
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.call-logs').forEach(container => {
    callLogObserver.observe(container);
});

// Lead qualification animation
function animateLeads() {
    const leadCards = document.querySelectorAll('.lead-card');
    leadCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, index * 150);
    });
}

// Initialize lead animation when in view
const leadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const leadCards = entry.target.querySelectorAll('.lead-card');
            leadCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            animateLeads();
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.leads-grid').forEach(container => {
    leadObserver.observe(container);
});

// Metrics counter animation
function animateCounters() {
    const metrics = document.querySelectorAll('.metric p');
    metrics.forEach(metric => {
        const text = metric.textContent;
        const number = text.match(/\d+/);
        if (number) {
            const target = parseInt(number[0]);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                metric.textContent = text.replace(/\d+/, Math.floor(current));
            }, 30);
        }
    });
}

// Initialize counter animation when in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metrics-grid').forEach(container => {
    counterObserver.observe(container);
});

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Console welcome message
console.log('%c🚀 AIVYCE Website Clone', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #666; font-size: 14px;');
console.log('%cReady for deployment!', 'color: #4caf50; font-size: 14px; font-weight: bold;');
