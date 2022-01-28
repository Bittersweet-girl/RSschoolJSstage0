import i18Obj from './translate.js';

const hamburger = document.querySelector('.header__burger');//получить бургер по классу
const headerNav = document.querySelector('.header__nav');//получить меню по классу

function toggleMenu() {//добавить и убрать класс open бургеру и меню
  hamburger.classList.toggle('open');
  headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);//слушает клик на бургер
headerNav.addEventListener('click', toggleMenu);//слушает клик на меню

const headerLink = document.querySelectorAll('.header__link');//получить ссылку по классу

function closeMenu() { //закрывает меню при нажатии на ссылку
  if (headerLink.target.classList.contains('header__link')) {
    hamburger.classList.remove('open');
    headerNav.classList.remove('open');
  }
}
headerNav.addEventListener('click', closeMenu);//слушает клик на ссылку

function preloadImages() { 
const seasons = ['summer', 'winter', 'spring', 'autumn'];  
  seasons.forEach((el) => {
      for (let i = 1; i <= 6; i++) {
          const img = new Image();
          img.src = `./assets/img/${el}/${i}.jpg`;
      }
  })
}
preloadImages();

function addSeasonClickHandler() {
  document.querySelector('.portfolio-buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      let activeBtn = e.target;
      removeActiveBtn();
      selectActiveBtn(activeBtn);
      let season = e.target.dataset.season;
      changePhoto(season);
    };
  });
}
addSeasonClickHandler();

function changePhoto(season){
 document.querySelectorAll('.portfolio-photo').forEach((img, index) => {
        img.src = `./assets/img/${season}/${index + 1}.jpg`;
      });
}

function removeActiveBtn() {
  let btn = document.querySelectorAll('.portfolio-buttons .button');
  btn.forEach(btn => {
    btn.classList.remove('button__colored');
    btn.classList.add('button__blank');
  });
}

function selectActiveBtn(activeBtn) {
  activeBtn.classList.add('button__colored');
  activeBtn.classList.remove('button__blank');
}

function addLangClickHandler(){
  document.querySelector('.header__lang').addEventListener('click', (e) => {
    if (e.target.classList.contains("lang")){
      let activeLang = e.target;
      removeActiveLang();
      selectActiveLang(activeLang);
      let lang = e.target.dataset.lang;
      getTranslate(lang);
      localStorage.setItem('lang', lang);
    }
  });
}
addLangClickHandler();

function removeActiveLang() {
  let btn = document.querySelectorAll('.header__lang .lang');
  btn.forEach(btn => {
    btn.classList.remove('header__lang_active');
  });
}

function selectActiveLang(activeLang) {
  activeLang.classList.add('header__lang_active');
}

function getTranslate(lang) {
  document.querySelectorAll('[data-i18]').forEach(el => {
      el.textContent = i18Obj[lang][el.dataset.i18];
  })
}

function addSwitchClickHandler(){
  document.querySelector('.header__switch_ico').addEventListener('click', (e) => {
    if (localStorage.getItem('theme') == 'light') {
      localStorage.removeItem('theme') == 'light'
    } else {
      localStorage.setItem('theme', 'light')
    }
    addLightTheme();
  });
}
addSwitchClickHandler();

function addLightTheme(){
  document.querySelector('.header__switch_ico').classList.toggle('light');
  document.querySelectorAll('.skills, .portfolio, .video, .price, body, h2, h3, h4, .section-title, .button__blank, .contacts-title').forEach(el => {
    el.classList.toggle('light');
  });
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    addLightTheme(theme);
  }
}
window.addEventListener('load', getLocalStorage);