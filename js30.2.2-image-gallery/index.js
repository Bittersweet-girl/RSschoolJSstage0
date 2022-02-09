const url ="https://api.unsplash.com/photos/?client_id=-zj52imvTF4NBE0zRB_jUl_xpS0lYelnj2d3UmdY9zQ";
// const btn = document.querySelector(".btn");
const galleryPhoto = document.querySelectorAll(".gallery-photo");
const search = document.querySelector(".search");

// btn.addEventListener("click", () => {
//   getData();
//   changeBg();
// });
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}

function showData(data) {
  // var rand = Math.floor(Math.random() * data.length);
   galleryPhoto.forEach((img, i) => {
     img.src = `${data[i].urls.regular}`;
   });
  // if (data[rand].author == null) {
  //   quote.innerHTML = `<p> ${data[rand].text} </p>`;
  // } else {
  //   quote.innerHTML = `<p> ${data[rand].text} </p><p class="author"> ${data[rand].author} </p>`;
  // }
}


window.addEventListener('load', getData);
