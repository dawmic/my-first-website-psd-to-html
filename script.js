"use strict";
const menu_mobile = document.querySelector('.menu-mobile');
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

const secTeam = document.querySelector('.sec-team');
const navi = document.querySelector('.navigation');

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(x => {
    x.addEventListener('click', () => {
        console.log('click');
        document.querySelector('.menu').classList.remove('menu-mobile');
        document.querySelector('.icon').classList.remove('open');

    })
})