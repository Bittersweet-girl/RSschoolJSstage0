const url = "https://type.fit/api/quotes";
const btn = document.querySelector('.btn');
const quote = document.querySelector(".quote-container");

btn.addEventListener('click', () => {
  getData();
  changeBg();
});
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data); 
}
// getData();

function showData(data) {
  var rand = Math.floor(Math.random() * data.length);
  if (data[rand].author == "null") {
    quote.innerHTML = `<p> ${data[rand].text} </p>`;
  } else {
    quote.innerHTML = `<p> ${data[rand].text} </p><p class="author"> ${data[rand].author} </p>`;
  }
}

function changeBg() {
  var rand = Math.floor(Math.random() * 8);
  document.querySelector(".main").style.backgroundImage = `url('./img/${rand}.jpg')`;
}