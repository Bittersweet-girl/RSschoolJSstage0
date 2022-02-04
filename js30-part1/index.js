let isPlay = false;

function togglePauseBtn(){
  document.querySelector('.button__play').classList.toggle('pause');
}
function addBtnClickHandler(){
  document.querySelector('.button__play').addEventListener('click', (e) => {
    togglePauseBtn();
    playAudio();
  });
}
addBtnClickHandler();

const audio = new Audio();

function playAudio(bird) {
  if (!isPlay){
    audio.src = `./assets/audio/${bird}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } 
  else{
    audio.pause();
    isPlay = false;
  }
}
// const birds = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];

function addLogoClickHandler() {
  document.querySelector('.header-logo').addEventListener('click', (e) => {
    let activeBird = e.target;
    removeActiveBird();
    selectActiveBird(activeBird);
    let bird = e.target.dataset.bird;
    changePhoto(bird);
    playAudio(bird);
    togglePauseBtn();
    localStorage.setItem('bird', bird);
  });
}
addLogoClickHandler();

function addBirdClickHandler() {
    document.querySelector('.header-nav-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('header-nav__item')) {
        let activeBird = e.target;
        removeActiveBird();
        selectActiveBird(activeBird);
        let bird = e.target.dataset.bird;
        changePhoto(bird);
        playAudio(bird);
        togglePauseBtn();
        localStorage.setItem('bird', bird);
      };
    });
  }
addBirdClickHandler();

function removeActiveBird() {
    let btn = document.querySelectorAll('.header-nav-list .header-nav__item');
    btn.forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector('.header-logo').classList.remove('active');
}
  
function selectActiveBird(activeBird) {
    activeBird.classList.add('active');
}
  
function changePhoto(bird){
   document.querySelector('.main').style.backgroundImage = `url('./assets/img/${bird}.jpg')`;
}

function setLocalStorage() {
  localStorage.setItem('bird', bird);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('bird')) {
    const bird = localStorage.getItem('bird');
    changePhoto(bird);
  }
}
window.addEventListener('load', getLocalStorage);