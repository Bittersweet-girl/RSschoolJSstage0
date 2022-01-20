const hamburger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
headerNav.addEventListener('click', toggleMenu);

console.log('Оценка 100. \nВёрстка валидная +10, \nВёрстка семантическая +20, \nВёрстка соответствует макету +48, \nТребования к css + 12, \nИнтерактивность, реализуемая через css +20');