// script.js

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Smooth scrolling for navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form handling for the contact form
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Here you can handle the form data
    console.log(data);
    // For example, send it to a server:
    // fetch('/submit', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }});
});
