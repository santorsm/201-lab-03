'use strict'

var userName = prompt('Welcome to my website; what\'s your name?');
console.log('User\'s name is: ' + userName);

alert('Hello ' + userName + '; nice to meet you!');

// Matt - Question 1:
var userReady = prompt('Are you ready for some questions about me?').toLowerCase();

if(userReady === 'yes' || userReady === 'y' ){
  // console.log('Great!  Let\'s go!');
  alert('Great!  Let\'s go!');
}

// Matt - Question 2:
var responseSibling = prompt('Do I have any sisters?').toLowerCase();

if(responseSibling === 'no' || responseSibling === 'n' ){
  // console.log('Correct! I do\'nt have anu sisters');
  alert('Correct! I don\'t have any sisters');
}

  // Matt - Question 3:
var responseHome = prompt('Am I originally from Seattle?').toLowerCase();

if(responseHome === 'no' || responseHome === 'n' ){
  // console.log('Correct! I\'m originally from New York');
  alert('Correct! I\'m originally from New York');
}

// Matt - Question 4:
var responseUsaf = prompt('Did I serve in the USAF?').toLowerCase();

if(responseUsaf === 'yes' || responseUsaf === 'y' ){
  // console.log('Correct! I was a pilot in the USAF');
  alert('Correct! I was a pilot in the USAF');
}
 
// Matt - Question 5:
var responseDogs = prompt('Do I have any pets?').toLowerCase();

if(responseDogs === 'yes' || responseDogs === 'y' ){
  // console.log('Correct! I have 2 dogs a golden retriever and german shepard');
  alert('Correct! I have 2 dogs a golden retriever and german shepard');
}

alert('Thanks ' + userName + ' for stopping by and learning a little about me; I hope to see you again soon. Cheers!');