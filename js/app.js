'use strict';

var userScore = 0;

var userName = prompt('Welcome to my website; what\'s your name?');
console.log('User\'s name is: ' + userName);

// alert('Hello ' + userName + '; nice to meet you!');

// // Matt - Question 1:
// var userReady = prompt('Are you ready for some questions about me?').toLowerCase();

// if (userReady === 'yes' || userReady === 'y') {
//   // console.log('Great!  Let\'s go!');
//   userScore++;
//   alert('Great!  Let\'s go!');
// }

// // Matt - Question 2:
// var responseSibling = prompt('Do I have any sisters?').toLowerCase();

// if (responseSibling === 'no' || responseSibling === 'n') {
//   // console.log('Correct! I do\'nt have anu sisters');
//   userScore++;
//   alert('Correct! I don\'t have any sisters');
// }

// // Matt - Question 3:
// var responseHome = prompt('Am I originally from Seattle?').toLowerCase();

// if (responseHome === 'no' || responseHome === 'n') {
//   // console.log('Correct! I\'m originally from New York');
//   userScore++;
//   alert('Correct! I\'m originally from New York');
// }

// // Matt - Question 4:
// var responseUsaf = prompt('Did I serve in the USAF?').toLowerCase();

// if (responseUsaf === 'yes' || responseUsaf === 'y') {
//   // console.log('Correct! I was a pilot in the USAF');
//   userScore++;
//   alert('Correct! I was a pilot in the USAF');
// }

// // Matt - Question 5:
// var responseDogs = prompt('Do I have any pets?').toLowerCase();

// if (responseDogs === 'yes' || responseDogs === 'y') {
//   // console.log('Correct! I have 2 dogs a golden retriever and german shepard');
//   userScore++;
//   alert('Correct! I have 2 dogs a golden retriever and german shepard');
// }

alert(`Hey ${userName}, I hear you like guessing numbers. I'll provide feedback to help you zero-in on the number.

Your inputs will establish the lower and upper bound of the range of possible numbers. Please enter only integers.

You have exactly 4 chances to guess the number.`);

var min = prompt('Enter the LOWEST number in the range of possible numbers.');
// console.log('User\'s min number is: ' + min);
min = parseInt(min);

var max = prompt('Enter the HIGHEST number in the range of possible numbers.');
// console.log('User\'s max number is: ' + max);
max = parseInt(max);

function getRandom(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}
// console.log(Math.floor(Math.random()*(max-min+1)+min));

var myNumber = (getRandom(min, max));
console.log(myNumber);

alert(`Ok, I've got my number. Remember, you have 4 guesses.

Let's go!`);

var numberArray = [];
var size = 4;

for (var i = 0; i < size; i++) {
  numberArray[i] = prompt('What\'s guess number ' + (i + 1) + '?');
  numberArray[i] = parseInt(numberArray[i]);
  console.log(numberArray);
  if (parseInt(numberArray[i]) < myNumber) {
    alert('Too low. Try again.');
  } else if (parseInt(numberArray[i]) > myNumber) {
    alert('Too high. Try again.');
  } else if (parseInt(numberArray[i]) === myNumber) {
    alert('Exactly! You should probably go play the lottery. And now for something completely different!');
    userScore++;
    break;
  }
}
if (i + 1 > size){
  alert(`Looks like you're out of guesses. The number was ${myNumber}.
  Thanks for playing!`);
}



var maxAttempts = 6;
var answeredCorrectly = false;
var correctFoods = [];
var myFoods = ['rapini', 'manicotti', 'calamari'];
alert(`${userName} you're probably thinking 'Wow, that number guessing was an incredible web based experience! How could they possibly top that!?' Well, you're in for a real treat...`);
alert(`Buckle up! It's time for the famous 'guess my three favorite foods' challenge!
You'll have have 6 guesses to guess my 3 favorite foods. Buona fortuna!`);

while (maxAttempts > 0 && !answeredCorrectly) {
  // decrement maxAttempts
  maxAttempts--;
  // happy path:
  // prompt user for input
  var answer = prompt('Enter your guess so I can check if it\'s on the list.').toLowerCase();
  // console.log(answer);
  // iterate through myFoods array to see if answer is correct
  // correct answer
  if (myFoods.includes(answer)) {
    correctFoods.push(answer);
    alert('Good show! ' + answer + ' is on the list!');
    // console.log(correctFoods);
    maxAttempts;
    answeredCorrectly;
  } else if (!myFoods.includes(answer)) {
    alert(`Sorry ${answer}, didn't make the list. Try again.`);
    // console.log(maxAttempts);
    // alert user
    maxAttempts;
    !answeredCorrectly;
  } if ((correctFoods.length) === (myFoods.length)) {
    alert(`You win ${userName}! You correctly guessed my favorite foods are ${myFoods[0]}, ${myFoods[1]}, and ${myFoods[2]}. That's too much excitement for one day for me; so, let's go tally your overall score`);
    userScore++;
    // console.log(userScore);
    alert(`${userName}, you answered ${userScore} out of 7 questions correctly. Thanks for stopping by and learning a little about me; I hope to see you again soon. Cheers!`);
    break;
  } if (maxAttempts === 0) {
    alert(`Sorry ${userName}, you didn't guess all three of my favorite foods. They are ${myFoods[0]}, ${myFoods[1]}, and ${myFoods[2]}. Looks like the number guessing took a little more out of you than I had expected. Better luck next time!`);
    alert(`${userName}, you answered ${userScore} out of 7 questions correctly. Thanks for stopping by and learning a little about me; I hope to see you again soon. Cheers!`);
    break;
  }
}
