document.querySelector('.buttons').addEventListener('click', (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const ceil = document.querySelectorAll(".field__item"),
  text = document.querySelector(".main__title"),
  resetGame = document.querySelector(".main__btn_reset"),
  resetRes = document.querySelector(".main__btn_reset-res");

var player = "X",
  count = 0;
