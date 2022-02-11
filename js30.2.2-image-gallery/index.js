let text = 'winter';
const search = document.querySelector(".search"),
      btn = document.querySelector(".header-search_box__item"),
      galleryPhoto = document.querySelectorAll(".gallery-photo");


btn.addEventListener("click", () => {
  text = search.value;
  getData(text);
});
search.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    text = search.value;
    getData(text);
  }
});

async function getData() {
  const url =
  `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b2bf1e0e89e74b09193da3a3e9cf4d2&text=${text}&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  galleryPhoto.forEach((img, i) => {
     img.src = `https://farm${data.photos.photo[i].farm}.staticflickr.com/${data.photos.photo[i].server}/${data.photos.photo[i].id}_${data.photos.photo[i].secret}_w.jpg`;
   });
}
// function showRandom(data) {
//   var rand = Math.floor(Math.random() * data.length);
//   galleryPhoto.src = `https://farm${data.photos.photo[rand].farm}.staticflickr.com/${data.photos.photo[rand].server}/${data.photos.photo[rand].id}_${data.photos.photo[rand].secret}_w.jpg`;
  
// }


  window.addEventListener('load', getData);
