'use strict';
//const xhr = new XMLHttpRequest();
//xhr.open("GET", "https://neto-api.herokuapp.com/twitter/json");
//xhr.send();
//function onOpen() {
//  console.log('cjtlbytybt jnrhsnj');
//}
//function onLoad() {
//  console.log(xhr.responseText);
//}
//
//
//function parseBook(book) {
//const target = document.querySelector('.book');
//target.innerHTML = `Книга ${book.title}, автор ${book.author
//}
//
//xhr.addEventListener("open", onOpen);
//xhr.addEventListener("load", onLoad);


function parseData(data) {
  const target = document.querySelector('h3');
  if (target.dataset.username) {
    target.innerHTML = `Имя пользователя ${data.username}`
  }
}

function loadData(url) {
  return new Promise((done, fail) => {
    window.parseData = done;
    const script = document.scripts[0].cloneNode();
    script.src = url;
    document.body.appendChild(script);
  });
}

function showData(data) {
  const target = document.querySelector('h3');
  target.innerHTML = `Книга ${data.username}`
}
loadData('https://neto-api.herokuapp.com/twitter/jsonp')
.then(showData);