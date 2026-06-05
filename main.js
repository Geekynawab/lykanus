// Lykanus — main.js

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Demo form submit
const demoForm = document.getElementById('demoForm');
demoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formFields').style.display = 'none';
  const success = document.getElementById('formSuccess');
  success.style.display = 'flex';
});

// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));
