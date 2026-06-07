// Lykan — main.js

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Demo form submit
const demoForm = document.getElementById('demoForm');
const submitBtn = demoForm.querySelector('.form-submit');

demoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch('https://formspree.io/f/mpqeprrn', {
      method: 'POST',
      body: new FormData(demoForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'flex';
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Book a Demo';
      alert('Something went wrong. Please try again.');
    }
  } catch {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Book a Demo';
    alert('Something went wrong. Please check your connection and try again.');
  }
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
