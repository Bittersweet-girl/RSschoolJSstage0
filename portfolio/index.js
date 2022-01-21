const hamburger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');


function toggleMenu() {
  hamburger.classList.toggle('open');
  headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
headerNav.addEventListener('click', toggleMenu);

const headerLink = document.querySelectorAll('.header__link');

function closeMenu() {
  if (headerLink.target.classList.contains('header__link')) {
    hamburger.classList.remove('open');
    headerNav.classList.remove('open');
  }
}
headerNav.addEventListener('click', closeMenu);

console.log('Оценка 100. \nВёрстка валидная +10, \nВёрстка семантическая +20, \nВёрстка соответствует макету +48, \nТребования к css + 12, \nИнтерактивность, реализуемая через css +20');