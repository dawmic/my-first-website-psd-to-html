"use strict";

const button = document.querySelector('.menu-btn');
button.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu-mobile');
});

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});