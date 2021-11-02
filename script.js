'use strict';

const nav = document.querySelector('.fixed');
const filler = document.querySelector('.nav__filler');
let navTop = nav.offsetTop;

const more = document.querySelector('.nav__item--more');
const navMore = document.querySelector('.nav__more');

// navMore.classList.toggle('hidden');
function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('sticky');
    filler.classList.add('nav__filler--visible');
  } else {
    nav.classList.remove('sticky');
    filler.classList.remove('nav__filler--visible');
  }
}

window.addEventListener('scroll', fixedNav);

function showMore() {
  navMore.classList.contains('hidden')
    ? (more.textContent = 'More -')
    : (more.textContent = 'More +');
  navMore.classList.toggle('hidden');
}

// more.textContent = 'HUE';

// more.addEventListener('click', () => console.log('more button clicked'));

more.addEventListener('click', showMore);
