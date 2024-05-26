const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.btn-click');


btnNode.addEventListener('click', () => {
 const pageNom = +document.querySelector('#number1').value;
  const pageLimit = +document.querySelector('#number2').value; useRequest(`https://jsonplaceholder.typicode.com/photos?_page=${pageNom}&_limit=${pageLimit}/`, displayResult);
});

function useRequest(url, callback) {
  const pageNom = +document.querySelector('#number1').value;
  const pageLimit = +document.querySelector('#number2').value; 
  if ((pageNom < 1 || pageNom > 10 || pageNom === NaN) && (pageLimit < 1 || pageLimit > 10 || pageLimit === NaN)) {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
  }
else if (pageNom < 1 || pageNom > 10 || pageNom === NaN) {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
  } 
  else if (pageLimit < 1 || pageLimit > 10 || pageLimit === NaN) {
  const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
}
  else {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
}
  };

function displayResult(apiData) {
  let cards = '';  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.thumbnailUrl}"
          class="card-image"
        />
        <p>${item.title}</p>
      </div>
    `;
    cards = cards + cardBlock;
  }); 
  resultNode.innerHTML = cards;
}