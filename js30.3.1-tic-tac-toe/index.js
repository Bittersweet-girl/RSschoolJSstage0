document.querySelector(".header-buttons").addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const ceil = document.querySelectorAll(".field__item"),
  text = document.querySelector(".main__title"),
  reset = document.querySelector(".main__btn_reset"),
  resetRes = document.querySelector(".main__btn_reset-res"),
  timeText = document.querySelector(".main__timer"),
  tableX = document.querySelector(".main__table_x"),
  tableO = document.querySelector(".main__table_o");

var player = "X",
  step = 0,
  countX = 0,
  countO = 0,
  sec = 0,
  min = 0,
  time,
  t;


  tableX.innerHTML = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead></table>";
  tableO.innerHTML = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead></table>";

for (var i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", addStep);
}

function addStep() {
  if (!this.textContent) {
    this.innerHTML = player;
    step++;
    changePlayer();
    clearInterval(t);
    t = setInterval(timer, 1000);
    checkWin();
    step === 9 ? (text.innerHTML = "No winner", clearInterval(t)) : (text.innerHTML = "Now play " + player);
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
  time = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
  timeText.textContent = time;
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
  
  setLocalStorage();
  getLocalStorage();
  clearInterval(t);
}

function winnerO() {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].removeEventListener("click", addStep);
  }
  text.innerHTML = "O is win!";
  countO++;
  player = "O";
  
  setLocalStorage();
  getLocalStorage();
  clearInterval(t);
}

function resetGame() {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].innerText = "";
    ceil[i].style.color = "#000";
  }
  step = 0;
  text.innerText = "Now play " + player;
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", addStep);
  }
  timeText.textContent = "00:00";
  sec = 0;
  min = 0;
  clearInterval(t);
}
reset.addEventListener("click", resetGame);

resetRes.addEventListener("click", () => {
  var lscount = localStorage.length;
  if (lscount > 0) {
    for (i = 0; i < lscount; i++) {
      localStorage.clear();
    }
  }
  tableX.innerHTML = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead></table>";
  tableO.innerHTML = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead></table>";
  resetGame();
  text.innerHTML = "X always first";
  player = "X";
  countO = 0;
  countX = 0;
});

var winner = {
  player: "",
  winsCount: "",
  time: "",
  steps: ""
}

function setLocalStorage() {
  var lscount = localStorage.length;
  winner.player = player;
  winner.winsCount = (player == "X" ? countX : countO );
  winner.time = time;
  winner.steps = step;
  localStorage.setItem("Winner" + lscount, JSON.stringify(winner));
}

function getLocalStorage() {
  var datacount = localStorage.length;
  if (datacount > 0) {
var tabX = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead>",
  tabO = "<table class='main__table'><thead><tr><th>Wins</th><th>Time</th><th>Steps</th></tr></thead>";
    for (var i = 0; i < datacount; i++) {
      var key = localStorage.key(i);
      var person = localStorage.getItem(key);
      var data = JSON.parse(person);
      if (data.player == "X") {
        tabX += "<tr><td>" + data.winsCount + "<td>" + data.time + "</td>" + "<td>" + data.steps + "</td>" + "</td></tr>";
        countX = data.winsCount;
      } else {
        tabO += "<tr><td>" + data.winsCount + "<td>" + data.time + "</td>" + "<td>" + data.steps + "</td>" + "</td></tr>";
        countO = data.winsCount;
      }
      tableX.innerHTML = tabX + "</table>";
      tableO.innerHTML = tabO + "</table>";
    }
  }
}
// window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

