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

