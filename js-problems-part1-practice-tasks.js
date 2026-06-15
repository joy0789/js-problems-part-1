// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiustoFahrenheit(celsius){
//     let fahrenheit = celsius * 9/5 +32
//     return fahrenheit
// }

// console.log(celsiustoFahrenheit(32))

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


// function findNumber(number , target){
//     let find =[]
//     for(i of number){
//         if(i === target){
//             find.push(i)
//         }
//     }
//     return find.length
// }
// let numbers = [5,6,11,12,98,5]
// console.log(findNumber(numbers , 5))
// console.log(findNumber(numbers , 25))

// Task-3:
// Write a function to count the number of vowels in a string.
// function countVowels(str){
//     str = str.toLowerCase();
//     let count = 0;

//     for(let letter of str){
//         if(letter === 'a' || 
//             letter === 'e' ||
//             letter === 'i' ||
//             letter === 'o' ||
//             letter === 'u'
//         ){
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countVowels("I Am A Programer"))

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// function longestWord(str) {
//     let words = str.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord("I am learning Programming to become a programmer"));

// Task-5:
// Generate a random number between 10 to 20.

// Generates a random integer between 10 and 20 (both inclusive)
const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);