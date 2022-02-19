document.querySelector(".header-buttons").addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const ceil = document.querySelectorAll(".field__item"),
  text = document.querySelector(".main__title"),
  resetGame = document.querySelector(".main__btn_reset"),
  resetRes = document.querySelector(".main__btn_reset-res"),
  time = document.querySelector(".main__timer"),
  tableX = document.querySelector(".main__table_x"),
  tableO = document.querySelector(".main__table_o");

var player = "X",
  step = 0,
  countX = 0,
  countO = 0,
  sec = 0,
  min = 0,
  t;


for (var i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", addStep);
}

function addStep() {
  if (!this.textContent) {
    this.innerHTML = player;
    step++;
    changePlayer();
    step === 9 ? (text.innerHTML = "No winner", clearInterval(t)) : (text.innerHTML = "Now play " + player);
    checkWin();
    clearInterval(t);
    t = setInterval(timer, 1000);
  }
 
}

function changePlayer() {
  player === "X" ? (player = "O") : (player = "X");
}

function timer() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  time.textContent = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
}


function checkWin() {
  if (ceil[0].innerHTML == "X" && ceil[1].innerHTML == "X" && ceil[2].innerHTML == "X") {
    winnerX();
    ceil[0].style.color = 'red';
    ceil[1].style.color = "red";
    ceil[2].style.color = "red";
  }
  if (ceil[3].innerHTML == "X" && ceil[4].innerHTML == "X" && ceil[5].innerHTML == "X") {
    winnerX();
    ceil[3].style.color = "red";
    ceil[4].style.color = "red";
    ceil[5].style.color = "red";
  }
  if (ceil[6].innerHTML == "X" && ceil[7].innerHTML == "X" && ceil[8].innerHTML == "X") {
    winnerX();
    ceil[6].style.color = "red";
    ceil[7].style.color = "red";
    ceil[8].style.color = "red";
  }
  if (ceil[0].innerHTML == "X" && ceil[4].innerHTML == "X" && ceil[8].innerHTML == "X") {
    winnerX();
    ceil[0].style.color = "red";
    ceil[4].style.color = "red";
    ceil[8].style.color = "red";
  }
  if (ceil[2].innerHTML == "X" && ceil[4].innerHTML == "X" && ceil[6].innerHTML == "X") {
    winnerX();
    ceil[2].style.color = "red";
    ceil[4].style.color = "red";
    ceil[6].style.color = "red";
  }
  if (ceil[0].innerHTML == "X" && ceil[3].innerHTML == "X" && ceil[6].innerHTML == "X") {
    winnerX();
    ceil[0].style.color = "red";
    ceil[3].style.color = "red";
    ceil[6].style.color = "red";
  }
  if (ceil[1].innerHTML == "X" && ceil[4].innerHTML == "X" && ceil[7].innerHTML == "X") {
    winnerX();
    ceil[1].style.color = "red";
    ceil[4].style.color = "red";
    ceil[7].style.color = "red";
  }
  if (ceil[2].innerHTML == "X" && ceil[5].innerHTML == "X" && ceil[8].innerHTML == "X") {
    winnerX();
    ceil[2].style.color = "red";
    ceil[5].style.color = "red";
    ceil[8].style.color = "red";
  }
  
  if (ceil[0].innerHTML == "O" && ceil[1].innerHTML == "O" && ceil[2].innerHTML == "O") {
    winnerO();
    ceil[0].style.color = "red";
    ceil[1].style.color = "red";
    ceil[2].style.color = "red";
  }
  if (ceil[3].innerHTML == "O" && ceil[4].innerHTML == "O" && ceil[5].innerHTML == "O") {
    winnerO();
    ceil[3].style.color = "red";
    ceil[4].style.color = "red";
    ceil[5].style.color = "red";
  }
  if (ceil[6].innerHTML == "O" && ceil[7].innerHTML == "O" && ceil[8].innerHTML == "O") {
    winnerO();
    ceil[6].style.color = "red";
    ceil[7].style.color = "red";
    ceil[8].style.color = "red";
  }
  if (ceil[0].innerHTML == "O" && ceil[4].innerHTML == "O" && ceil[8].innerHTML == "O") {
    winnerO();
    ceil[0].style.color = "red";
    ceil[4].style.color = "red";
    ceil[8].style.color = "red";
  }
  if (ceil[2].innerHTML == "O" && ceil[4].innerHTML == "O" && ceil[6].innerHTML == "O") {
    winnerO();
    ceil[2].style.color = "red";
    ceil[4].style.color = "red";
    ceil[6].style.color = "red";
  }
  if (ceil[0].innerHTML == "O" && ceil[3].innerHTML == "O" && ceil[6].innerHTML == "O") {
    winnerO();
    ceil[0].style.color = "red";
    ceil[3].style.color = "red";
    ceil[6].style.color = "red";
  }
  if (ceil[1].innerHTML == "O" && ceil[4].innerHTML == "O" && ceil[7].innerHTML == "O") {
    winnerO();
    ceil[1].style.color = "red";
    ceil[4].style.color = "red";
    ceil[7].style.color = "red";
  }
  if (ceil[2].innerHTML == "O" && ceil[5].innerHTML == "O" && ceil[8].innerHTML == "O") {
    winnerO();
    ceil[2].style.color = "red";
    ceil[5].style.color = "red";
    ceil[8].style.color = "red";
  }
}

function winnerX() {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].removeEventListener("click", addStep);
    }
  text.innerHTML = "X is win!";
  countX++;
  player = "X";
  clearInterval(t);
  addTableX();
}

function winnerO() {
   for (var i = 0; i < ceil.length; i++) {
     ceil[i].removeEventListener("click", addStep);
    }
  text.innerHTML = "O is win!";
  countO++;
  player = "O";
  clearInterval(t);
  addTableO();
}

resetGame.addEventListener("click", function () {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].innerText = "";
    ceil[i].style.color = "#000";
  }
  step = 0;
  text.innerText = "Now play " + player;
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", addStep);
  }
  time.textContent = "00:00";
  sec = 0;
  min = 0;
  clearInterval(t);
});

function addTableX() {
  var tabX = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead>";
  for (var i = 0; i < countX; i++) {
    tabX += "<tr><td>" + countX + "<td>" + "time" + "</td>" + "<td>" + step + "</td>" + "</td></tr>" ;
  }  
  tableX.innerHTML = tabX + "</table>";
}
function addTableO() {
  var tabO = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead>";
  for (var i = 0; i < countO; i++) {
    tabO += "<tr><td>" + countO + "<td>" + "time" + "</td>" + "<td>" + step + "</td>" + "</td></tr>";
  }
  tableO.innerHTML = tabO + "</table>";
}