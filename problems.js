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

// problem-4
function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no pair is found, return an empty array
  return [];
}

const result = findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);
console.log(result); // Output: [1, 2]

// Problem: 5
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      // Check for division by zero
      if (num2 === 0) {
        return "Error: Cannot divide by zero!";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator!";
  }
}

// Test the calculator function
const num1 = 5;
const num2 = 2;
const operator = "*";

const result1 = calculator(num1, num2, operator);
console.log(result1);

// 6
function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[{]};:,<.>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Test the function
const passwordLength = 12; // Change this value to adjust password length
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// 7
function romanToInteger(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral since it was already accounted for
    } else {
      result += currentNumeral;
    }
  }

  return result;
}
console.log(romanToInteger("IX")); // Output: 9
console.log(romanToInteger("XXI")); // Output: 21
console.log(romanToInteger("MCMXCIV")); // Output: 1994

// 8
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array should have at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("All elements in the array are the same.");
  }

  return secondSmallest;
}

const inputArray = [3, 1, 8, 4, 7, 2, 5, 6];
const secondSmallest = findSecondSmallest(inputArray);
console.log(secondSmallest); // Output: 2
