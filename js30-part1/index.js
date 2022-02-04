let isPlay = false;
const audio = new Audio();

function addPauseBtn(){
  document.querySelector('.button__play').classList.add('pause');
}
function removePauseBtn(){
  document.querySelector('.button__play').classList.remove('pause');
}

function addPlayClickHandler(){
  document.querySelector('.button__play').addEventListener('click', () => {
    if (!isPlay) {
      addPauseBtn();
      audio.play();
      isPlay = true;
    } else {
      removePauseBtn();
      audio.pause();
      isPlay = false;
    }
  });
}
addPlayClickHandler();

const birds = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];

function addPrevClickHandler(){
  document.querySelector('.button__prev').addEventListener('click', () => {
      let i = birds.indexOf(localStorage.getItem('bird'));
      let bird1;
      if (i == 0){
        bird1 = birds[birds.length - 1]
        } else{
          bird1 = birds[i - 1];
        }
      changePhoto(bird1);
      playAudio(bird1);
      localStorage.setItem('bird', bird1);
      addPauseBtn();
      removeActiveBird();
    selectActiveBird(bird1);
  });
}
addPrevClickHandler();

function addNextClickHandler(){
  document.querySelector('.button__next').addEventListener('click', () => {
      let i = birds.indexOf(localStorage.getItem('bird'));
      let bird1;
      if (i == birds.length - 1){
        bird1 = birds[0]
        } else{
          bird1 = birds[i + 1];
        }
      changePhoto(bird1);
      playAudio(bird1);
      localStorage.setItem('bird', bird1);
      addPauseBtn();
      removeActiveBird();
    selectActiveBird(bird1);
  });
}
addNextClickHandler();

function defaultAudio(){
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  audio.pause();
  isPlay = false;
}

function playAudio(bird) {
    audio.src = `./assets/audio/${bird}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
}

function addLogoClickHandler() {
  document.querySelector('.header-logo').addEventListener('click', (e) => {
    let bird = e.target.dataset.bird;
    removeActiveBird();
    selectActiveBird(bird);
    changePhoto(bird);
    playAudio(bird);
    localStorage.setItem('bird', bird);
    addPauseBtn();
  });
}
addLogoClickHandler();

function addBirdClickHandler() {
    document.querySelector('.header-nav-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('header-nav__item')) {
        let bird = e.target.dataset.bird;
        removeActiveBird();
        selectActiveBird(bird);
        changePhoto(bird);
        playAudio(bird);
        localStorage.setItem('bird', bird);
        addPauseBtn();
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
  
function selectActiveBird(bird) {
  let actBird = document.querySelectorAll('.header-nav__item');
  actBird.forEach(actBird => {
  if (actBird.dataset.bird == bird){
    actBird.classList.add('active');
  }
  });
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
window.addEventListener('load', () => {
  getLocalStorage();
  defaultAudio();
});