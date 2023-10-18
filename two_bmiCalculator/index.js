const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please enter valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    function res(bmi) {
      // console.log(bmi);
      var ans = '';
      if (bmi < 18.6) {
        ans = 'hwa';
      } else if (18.6 < bmi && bmi < 24.9) {
        ans = 'fit';
      } else {
        ans = 'mota ';
      }
      return ans;
    }
    result.innerHTML = `<span>${bmi} <br>you are  ${res(bmi)}</span>`;
  }
});
