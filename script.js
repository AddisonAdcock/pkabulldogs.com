document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const responsiveNav = document.querySelector('.responsive-nav')


    menuIcon.addEventListener('click', function() {
        responsiveNav.classList.toggle('active');
    });
});