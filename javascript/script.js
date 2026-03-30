// Dynamic Sticky Nav & Conditional Social Links
const navbar = document.getElementById('navbar');
const navSocials = document.getElementById('nav-socials');
const stickyNav = document.querySelector('.sticky-nav');
const hamburgerBtn = document.getElementById('hamburger');
const originalSocials = document.querySelector('.social-links');
notClicked = true;

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (originalSocials) {
        const socialBottom = originalSocials.getBoundingClientRect().bottom;

        if (socialBottom < 80) {
            navSocials.classList.add('is-visible');
        } else {
            navSocials.classList.remove('is-visible');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 
    });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

window.addEventListener('scroll', () => {
    // If scrolled more than 20 pixels, add the shadow
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function hamburgerClicked() {
    stickyNav.classList.toggle('is-visible');
}

window.onload = function() {
    hamburgerBtn.addEventListener('click', hamburgerClicked);
};