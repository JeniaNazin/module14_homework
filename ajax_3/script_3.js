const btnNode = document.querySelector('.btn-click');
const resultNode = document.querySelector('.result');

btnNode.addEventListener('click', () => {
  const value = +document.querySelector('#number').value;
  if (value < 1 || value > 10) {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>число вне диапазона от 1 до 10</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
  }
  else if (value >= 1 && value <= 10) {
  useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${value}`, displayResult);}
})

function useRequest(url, callback) {
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