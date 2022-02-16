document.querySelector(".header-buttons").addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const ceil = document.querySelectorAll(".field__item"),
  text = document.querySelector(".main__title"),
  resetGame = document.querySelector(".main__btn_reset"),
  resetRes = document.querySelector(".main__btn_reset-res");

var player = "X",
    step = 0,
  count = 0;


for (var i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", addStep);
}

function addStep() {
  if (!this.textContent) {
    step % 2 == 0 ? this.innerHTML = "x": this.innerHTML = "o";
    step++;
    changePlayer();
    step === 9 ? (text.innerHTML = "No winner") : (text.innerHTML = "Now play " + player);
    checkWin();
  }
  
}

function changePlayer() {
  player === "X" ? (player = "O") : (player = "X");
}


function checkWin() {
  if (ceil[0].innerHTML == "x" && ceil[1].innerHTML == "x" && ceil[2].innerHTML == "x") { winnerX();}
  if (ceil[3].innerHTML == "x" && ceil[4].innerHTML == "x" && ceil[5].innerHTML == "x"){ winnerX();}
  if (ceil[6].innerHTML == "x" && ceil[7].innerHTML == "x" && ceil[8].innerHTML == "x"){ winnerX();}
  if (ceil[0].innerHTML == "x" && ceil[4].innerHTML == "x" && ceil[8].innerHTML == "x"){ winnerX();}
  if (ceil[2].innerHTML == "x" && ceil[4].innerHTML == "x" && ceil[6].innerHTML == "x") { winnerX(); }
  
  if (ceil[0].innerHTML == "o" && ceil[1].innerHTML == "o" && ceil[2].innerHTML == "o") { winnerO();}
  if (ceil[3].innerHTML == "o" && ceil[4].innerHTML == "o" && ceil[5].innerHTML == "o"){ winnerO();}
  if (ceil[6].innerHTML == "o" && ceil[7].innerHTML == "o" && ceil[8].innerHTML == "o"){ winnerO();}
  if (ceil[0].innerHTML == "o" && ceil[4].innerHTML == "o" && ceil[8].innerHTML == "o"){ winnerO();}
  if (ceil[2].innerHTML == "o" && ceil[4].innerHTML == "o" && ceil[6].innerHTML == "o"){ winnerO();}
}

function winnerX() {
  for (var i = 0; i < ceil.length; i++) {
      ceil[i].removeEventListener("click", addStep);
    }
    text.innerHTML = "X is win!";
}

function winnerO() {
   for (var i = 0; i < ceil.length; i++) {
      ceil[i].removeEventListener("click", addStep);
    }
    text.innerHTML = "O is win!";
}