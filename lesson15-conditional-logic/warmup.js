// Prompt the user for their age
let age = prompt('Please enter your age:');

// Check if the user is eligible to vote. If the user is 18 or older, display "You are eligible to vote!". Otherwise, display "You are not eligible to vote yet."

function checkVotingEligibility(age) {
  if (age >= 18) {
    return 'You are eligible to vote!';
  } else {
    return 'You are not eligible to vote yet.';
  }
}

// Prompt the user for a number

// Check if the number is positive, negative, or zero. If the number is positive, display "The number is positive.". If the number is negative, display "The number is negative.". If the number is zero, display "The number is zero."

let number = Math.floor(Math.random() * 100);
function checkNumberType(number) {
  if (number > 0) {
    return 'The number is positive.';
  } else if (number < 0) {
    return 'The number is negative.';
  } else {
    return 'The number is zero.';
  }
}

// Prompt the user to guess a number between 1 and 100. If the user's guess is correct, display "Congratulations! You guessed the correct number!". If the user's guess is too high, display "Your guess is too high. Please try again.". If the user's guess is too low, display "Your guess is too low. Please try again."
function checkGuess(number) {
  let guess = prompt('Guess a number between 1 and 100:');
  console.log('Target:', number);
  console.log('Guess:', guess);
  if (guess == number) {
    return 'Congratulations! You guessed the correct number!';
  } else if (guess > number) {
    return 'Your guess is too high. Please try again.';
  } else {
    return 'Your guess is too low. Please try again.';
  }
}

// Test checkGuess function
let targetNumber = 50; // Set a known target
console.log(checkGuess(targetNumber)); // This will show the prompt and log the result
