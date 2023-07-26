// problem-1: reverse a string.
function reverseString(str) {
  var myString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    myString += str[i];
  }
  return myString;
}
const output = reverseString("hello world");
console.log(output); //dlrow olleh

// problem-2: sum of positive numbers
function SumOfPositives(numbers) {
  let negatives = [];
  let sumPositive = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negatives.push(numbers[i]);
    } else {
      sumPositive += numbers[i];
    }
  }
  return sumPositive;
}
let summation = SumOfPositives([2, -5, 10, -3, 7]);

console.log(summation); //19

// problem-3: most frequent element of the array.

