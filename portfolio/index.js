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

// const portfolioBtns = document.querySelector('.portfolio-buttons');//получить кнопки по классу родителя
const portfolioImg = document.querySelectorAll('.portfolio-photo');

window.onload = function(){
preloadImages();
addSeasonClickHandler();
}

function preloadImages() { 
const seasons = ['summer', 'winter', 'spring', 'autumn'];  
  seasons.forEach((el) => {
      for (let i = 1; i <= 6; i++) {
          const img = new Image();
          img.src = `./assets/img/${el}/${i}.jpg`;
      }
  })
}

const addSeasonClickHandler = () => {
  document.querySelector('.portfolio-buttons').addEventListener('click', (e) => {
if(e.target.classList.contains('button')) {
  let activeBtn = e.target;
   console.log(activeBtn);
  removeActive();
  selectActiveBtn(activeBtn);
    let season = e.target.dataset.season;
   
    portfolioImg.forEach((img, index) => {
    img.src = `./assets/img/${season}/${index + 1}.jpg`;
  });
  };
});
}

const removeActive = () => {
  let btn = document.querySelectorAll('.portfolio-buttons .button');
  btn.forEach(btn => {
    btn.classList.remove('button__colored');
    btn.classList.add('button__blank');
  })
}

const selectActiveBtn = (activeBtn) => {
  activeBtn.classList.add('button__colored');
  activeBtn.classList.remove('button__blank');
}