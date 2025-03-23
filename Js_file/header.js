// Note: Update your HTML source tag to: <script src="../Js_file/header.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Add hamburger button dynamically
    const nav = document.querySelector('nav');
    const ul = document.querySelector('nav ul');
    
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    nav.insertBefore(hamburger, ul);

    // Toggle main menu
    hamburger.addEventListener('click', () => {
        ul.classList.toggle('active');
    });

    // Handle dropdown on mobile
    const blogLink = document.querySelector('a[href="blog.html"]');
    const dropdown = document.querySelector('.dropdown');

    blogLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && ul.classList.contains('active')) {
            ul.classList.remove('active');
        }
    });
});