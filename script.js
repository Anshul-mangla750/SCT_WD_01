// JavaScript to add scroll event listener for navigation menu style change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for contacting us. We will reach to you as soon as possible.');
      contactForm.reset();
    });
  }

  const applyForm = document.getElementById('apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for applying. This feature will be added soon.');
      applyForm.reset();
    });
  }
});
