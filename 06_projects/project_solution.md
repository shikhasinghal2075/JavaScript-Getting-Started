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

## Project 3 Solution
```javascript
// Two methods to get clock
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');

// Runs every second
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution

```javascript
// console.log(parseInt(Math.random() * 100 + 1));
let randomNumber = parseInt(Math.random() * 100 + 1);

// Read values from HTML page
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guess_slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// To insert values
const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Validate whether user entered valid input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number within range!');
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Check whether value is equal, low OR High to random number
  if (guess === randomNumber) {
    displayMessage('You guessed right!');
  } else if (guess < randomNumber) {
    displayMessage('Number is too low!');
  } else {
    displayMessage('Number is too high!');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guess_slot.innerHTML += `${guess}; `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Interact with DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    playGame = true;
    guess_slot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}

```