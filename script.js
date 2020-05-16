"use strict";

const button = document.querySelector('.menu-btn');
button.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu-mobile');
});