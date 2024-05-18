function myFunction() {
  const value = +document.querySelector('#number').value;
  if (value < 1 || value > 10) {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>число вне диапазона от 1 до 10</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
  }
  else if (value >= 1 && value <= 10) {
    console.log(value);
    let xhr = new XMLHttpRequest();
xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${value}`);
xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Статус ответа: ', xhr.status);
  } else {
    console.log('Результат: ', JSON.parse(xhr.response));
  }
};
xhr.onprogress = function(event) {
  console.log(`Загружено ${event.loaded} из ${event.total}`)
};
xhr.onerror = function() {
  console.log('Ошибка! Статус ответа: ', xhr.status);
};
xhr.send();
  }
}
