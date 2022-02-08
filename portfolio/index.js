import i18Obj from './translate.js';

const hamburger = document.querySelector('.header__burger');//получить бургер по классу
const headerNav = document.querySelector('.header__nav');//получить меню по классу

function toggleMenu() {//добавить и убрать класс open бургеру и меню
  hamburger.classList.toggle('open');
  headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);//слушает клик на бургер
headerNav.addEventListener('click', () => {toggleMenu(); closeMenu();});//слушает клик на меню

function closeMenu() { //закрывает меню при нажатии на ссылку
    hamburger.classList.remove('open');
    headerNav.classList.remove('open');
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
  document.querySelectorAll('.skills, .portfolio, .video, .price, body, h2, h3, h4, .section-title, .button__blank, .contacts-title, .header__nav, .header__burger').forEach(el => {
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

const video = document.querySelector('.video__viewer'),
      vidWrapper = document.querySelector('.video-player'),
      videoBtn = document.querySelector('.video__button'),
      playBtn = document.querySelector('.video__icon_play'),
      progress = document.querySelector('.video__progress'),
      progressBar = document.querySelector(".progress__filled"),
      time = document.querySelector('.video__timer'),
      volumeBtn = document.querySelector('.video__icon_volume'),
      volume = document.querySelector('.video__volume');

function toggleVideoStatus(){
  if (video.paused) {
    video.play();
    videoBtn.style.display = "none";
    playBtn.classList.remove('video__icon_play');
    playBtn.classList.add('video__icon_pause');
  } else{
    video.pause();
    videoBtn.style.display = "block";
    playBtn.classList.add('video__icon_play');
    playBtn.classList.remove('video__icon_pause');
  }
}

video.addEventListener('click', toggleVideoStatus);
videoBtn.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);

function updateTimer(){
  progress.value = (progress.currentTime / progress.duration) * 100;
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10){
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10){
    seconds = '0' + String(seconds);
  }
  time.innerHTML = `${minutes}:${seconds}`;
}
video.addEventListener('timeupdate', () => {
  updateTimer();
  updateProgress();
});

function updateProgress(){
  var percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
progress.addEventListener('change', updateProgress);

function muteVolume(){
  if (video.muted = !video.muted) {
    video.muted = video.muted;
    volumeBtn.classList.remove('video__icon_volume');
    volumeBtn.classList.add('video__icon_mute');
  } else {
    video.volume = 1.0;
    volumeBtn.classList.add('video__icon_volume');
    volumeBtn.classList.remove('video__icon_mute');
  }
}
volumeBtn.addEventListener('click', muteVolume);

function handleRangeUpdate() {
  video[this.name] = this.value;
}

volume.addEventListener("change", handleRangeUpdate);
volume.addEventListener("mousemove", handleRangeUpdate);

var drag;
var grap;

progress.addEventListener('mouseover', function(){drag = true});
progress.addEventListener('mouseout', function(){drag = false; grap = false});
progress.addEventListener('mousedown', function(){grap = drag});
progress.addEventListener('mouseup', function(){grap = false});
progress.addEventListener('click', updateCurrentPos);
progress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

function updateCurrentPos(e){
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  video.currentTime = newProgress * video.duration;
}