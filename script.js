/* ??????????????
let btn = document.querySelector('.btn');
let lista = document.querySelector('ul');

btn.addEventListener('click', ja);

function ja() {
    if (lista.className == 'ukryj')
        lista.classList.remove('ukryj');
    else
        lista.classList.add('ukryj');
}
*/
"use strict";

const button = document.querySelector('.menu-btn');
button.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu-mobile');
});