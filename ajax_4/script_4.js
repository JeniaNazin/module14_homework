const btnNode = document.querySelector('.btn-click');

btnNode.addEventListener('click', () => {
  const value1 = +document.querySelector('#number1').value;
  const value2 = +document.querySelector('#number2').value;
  if ((value1 < 100 || value1 > 300 || value1 === NaN) || (value2 < 100 || value2 > 300 || value2 === NaN)) {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "<p>одно из чисел вне диапазона от 100 до 300</p>";
    const parent = document.querySelector(".btn-click");
    document.body.appendChild(resultDiv);
  } 
  else {
    fetch(`https://dummyimage.com/${value1}x${value2}/`) 
    .then((response) => {
      console.log('response', response);
      const result = response.json();
      console.log('result', result);
      return result;
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => { 
      console.log('error') });
    const resultImg = new Image();
    resultImg.src = `https://dummyimage.com/${value1}x${value2}/`;
    document.body.appendChild(resultImg);
  }
})
