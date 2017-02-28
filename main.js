let sonnets = require('./sonnets.js');
// let sonnetArraySplit = indivualSonnet.split('\n\n');

function wordFrequency(text){
  // splits array into indivual words
  let words = text.split( ' ' );
  console.log(words);
  let wordCounter = {};
  // let timesWordAppears = 1;

  words.forEach( function countEmUp(word) {
    console.log(word);
    //This adds new words and counts to 1 only
    console.log(wordCounter[word]); // undefined

    if (wordCounter[word] === undefined) {
      wordCounter[word] = 1;
    } else{
    wordCounter[word] = wordCounter[word] + 1;
    console.log(wordCounter[word]);
  }


  });




  return wordCounter;
}

console.log(wordFrequency(sonnets));



let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);



// Learning Objectives
//
// We need to get more practice with iteration (looping) and conditionals. Let's work on creating some programmatic solutions to puzzles and problems! By the end of this exercise you should be able to create a loop and check for specific values using conditional statements as well as how to add data to objects.
//
// Word Frequency
//
// Create a function called wordFrequency which receives a string and returns the frequency of each word in it as an object. The result will be an object with each word being a property name and the frequency count (number) being the value for that property. For example, if the function was given "A cat in a hat is a silly cat indeed." as the argument, then it should return: {a: 3, cat: 2, in: 1, hat: 1, is: 1, silly: 1, indeed: 1}
//
// You will need to use the split() method of strings to break up the string into an array first. Then you will likely want to remove any whitespace using the trim() method.
//
// To test out your function, you can use a simple string to start, and then maybe use Shakespeare's Sonnets for a more complete test. You can download this file of all the Sonnets and then require it in your own code like so:
//
// let sonnets = require('./sonnets.js');
//
// (If you changed the filename, be sure to update it above!)
//
// Tests
// You MUST require this file at the very end of your JS and then execute the tests. Be sure you name the file word-frequency-tests.js and put it in the same directory as your code!
//
// let testRunner = require('./word-frequency-tests.js');
// testRunner(wordFrequency);
// EPIC Mode (Word Frequency)
// Don't include non-words (like numbers)
// Make the result case-insensitive
// Do not include any punctuation in your returned object
// FizzBuzz
//
// Create a function called fizzBuzz that will count from 1 to a numeric limit passed in as an argument (for example, fizzBuzz(18)) and return an array of the numbers... However, any time the number is a multiple of 3 (divides evenly) you must use "fizz" instead of the number; and any time the number is a multiple of 5 you must use "buzz" instead of the number. If the number is a multiple of both, use "fizzbuzz" instead of the number.
//
// For example, if the limit passed in was 16, you should return: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
//
// Tests
// You MUST require this file at the very end of your JS and then execute the tests. Be sure you name the file fizzbuzz-tests.js and put it in the same directory as your code!
//
// let testRunner = require('./fizzbuzz-tests.js');
// testRunner(fizzBuzz);
// EPIC Mode (FizzBuzz)
// Recreate your FizzBuzz solution without using any explicit loops (i.e. for, forEach, while, etc).
