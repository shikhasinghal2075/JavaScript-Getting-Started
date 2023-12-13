# Projects Related to DOM
## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1 Link
```javascript
const buttons = document.querySelectorAll('.button'); // Returns Node List

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  // Don't submit form anywhere using any HTTP method as we need to just calculate BMI and return
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height!';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight!';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiVariable = '';
    if (bmi < 18.6) {
      bmiVariable = 'underweight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      bmiVariable = 'normal';
    } else {
      bmiVariable = 'overweight';
    }
    // Show results
    results.innerHTML = `<span>BMI: ${bmi}, ${bmiVariable}</span>`;
  }
});

```