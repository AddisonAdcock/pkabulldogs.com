var ENDPOINT = "https://api.printful.com/";
var API_KEY = "2Ho90ETmgWy3Ira9C9FS1giOA3rrGcyHhcdazeqt";

document.addEventListener("DOMContentLoaded", function() {
    const switchButtons = document.querySelectorAll(".switch");
    const switchImage = document.querySelectorAll(".switch-image");
    const menuIcon = document.querySelector('.menu-icon');
    const responsiveNav = document.querySelector('.responsive-nav');

    switchButtons.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.closest('.card');
            card.classList.toggle("flipped");
        });
    });

    switchImage.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.closest('.card');
            card.classList.toggle("flipped");
        });
    });

    menuIcon.addEventListener('click', function() {
        responsiveNav.classList.toggle('active');
    });
});