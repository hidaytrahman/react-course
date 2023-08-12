/*
  Write a function `analyzeNumbers` that takes an array of numbers as a 
  parameter and returns an object containing various statistical 
  information.
*/

function analyzeNumbers(numbers) {
    // Your code here
}

const numbersArray = [12, 7, 18, 5, 24, 9, 3, 21];
const analysis = analyzeNumbers(numbersArray);

console.log(analysis.totalCount);   // Expected output: 8
console.log(analysis.sum);          // Expected output: 99
console.log(analysis.average);      // Expected output: 12.375
console.log(analysis.highest);      // Expected output: 24
console.log(analysis.lowest);       // Expected output: 3
