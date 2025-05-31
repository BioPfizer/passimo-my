// assets/js/navbar.js
document.addEventListener('DOMContentLoaded', function () {
    // Load navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Set active page
            setActivePage();

            // Initialize mobile menu
            initMobileMenu();
        })
        .catch(error => console.error('Error loading navbar:', error));
});

function setActivePage() {
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    // Find and set active link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}