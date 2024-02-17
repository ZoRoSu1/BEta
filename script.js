document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle alignment of nav links based on active class
        if (navLinks.classList.contains('active')) {
            navLinks.style.right = '0';
        } else {
            navLinks.style.right = '-100%';
        }
    });
});
