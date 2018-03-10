'use strict';
function parseData(data) {
  const target = document.querySelector('h3');
  if (target.dataset.name) {
    target.innerHTML = `Имя ${data.name}`
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
  target.innerHTML = `Имя ${data.name}`
}
loadData('https://neto-api.herokuapp.com/profile/me')
.then(showData);