const button = document.querySelector('.button__play');
function togglePauseBtn(){
  button.classList.toggle('pause');
}
button.addEventListener('click', togglePauseBtn);

const birds = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];
// function preloadImages(birds) { 
//   birds.forEach((el) => {
//         for (let i = 1; i <= 6; i++) {
//             const img = new Image();
//             img.src = `./assets/img/${i}.jpg`;//??????
//         }
//     })
//   }
//   preloadImages();
function addLogoClickHandler() {
  document.querySelector('.header-logo').addEventListener('click', (e) => {
      let bird = e.target.dataset.bird;
      changePhoto(bird);
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