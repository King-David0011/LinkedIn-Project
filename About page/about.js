// Grab the elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the 'active' class when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});