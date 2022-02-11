const url = "https://type.fit/api/quotes";
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const quote = document.querySelector(".quote-container");

btn1.addEventListener('click', () => {
  getData();
  changeBg();
});
btn2.addEventListener('click', () => {
  getQuotes();
  changeBg();
});

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data); 
}
async function getQuotes() {
  const quotes = "quotes.json";
  const res = await fetch(quotes);
  const data = await res.json();
  showData(data); 
}

function showData(data) {
  var rand = Math.floor(Math.random() * data.length);
  if (data[rand].author == null) {
    quote.innerHTML = `<p> ${data[rand].text} </p>`;
  } else {
    quote.innerHTML = `<p> ${data[rand].text} </p><p class="author"> ${data[rand].author} </p>`;
  }
}

function changeBg() {
  var rand = Math.floor(Math.random() * 8);
  document.querySelector(".main").style.backgroundImage = `url('./img/${rand}.jpg')`;
}
window.addEventListener('load', getData);