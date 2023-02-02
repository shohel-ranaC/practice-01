// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

function countZeros(binary_num) {
  //   console.log(binary_num.length);
  let sumZeros = 0;
  for (let i = 0; i < binary_num.length; i++) {
    let num = Number(binary_num[i]);
    if (num === 0) {
      sumZeros++;
    }
  }
  //   console.log(sumZeros);
  return sumZeros;
}
let BinaryNumber = countZeros("10101");
console.log(BinaryNumber);

// You will have a function which takes the length and width of a rectangle as parameters. Find out the area of that rectangle and return the result.

// Input : 10, 5
// Output: 50

function findArea(length, width) {
  let area = length * width;
  return area;
}
let givenArea = findArea(10, 5);
console.log(givenArea);

// Find the second largest.
// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

// Sample Input: [10,33,5,99,6]
// Sample output: 33

function secondLargest(numbers) {
  let sort = numbers.sort(function (a, b) {
    return b - a;
  });
  let largest = numbers[1];
  return largest;
}
let givenArray = secondLargest([10, 33, 5, 99, 6]);
console.log(givenArray);

// Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

// Sample Input: [5, 7, 8, 10, 45, 30]
// Sample Output: 57

function findOddSum(arrOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let array = arrOfNumbers[i];
    if (array % 2 !== 0) {
      sum += array;
    }
  }
  return sum;
}
let givenInput = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(givenInput);

// Can you find the leap years??
// Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.

// Sample Input: [2023,2024,2025,2028,2030]
// Sample Output: [2024, 2028]

function findLeapYear(arrOfYears) {
  let leapYearArray = [];
  for (let i = 0; i < arrOfYears.length; i++) {
    let year = arrOfYears[i];
    if (year % 4 === 0) {
      leapYearArray.push(year);
    }
  }
  return leapYearArray;
}
let leapYear = findLeapYear([2023, 2024, 2025, 2028]);
console.log(leapYear);

// Write a code to find the smallest element of the array
// Suppose, you have an array with 5 elements. Find the smallest element of tha

// Sample Input: [10,33,5,99,6]
// Sample output: 5

// function findingSmallest(numbers) {
//   let sorted = numbers.sort(function (a, b) {
//     return a - b;
//   });
//   let smallest = numbers[0];
//   return smallest;
// }
// let inputArray = findingSmallest([10, 33, 5, 99, 6]);
// console.log(inputArray);

// same answer another way solved

function findingSmallest(numbers) {
  let smallestArray = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let smallest = numbers[i];
    if (smallest < smallestArray) {
      smallestArray = smallest;
    }
  }
  return smallestArray;
}
let inputArray = findingSmallest([10, 33, 5, 99, 6]);
console.log(inputArray);

// Convert Hour to Minute
// Write a function hourToMin that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

// Sample Input: 2
// Sample Output: 120

function hourToMin(hour) {
  let minutes = hour * 60;
  return minutes;
}
let givenHour = hourToMin(2);
console.log(givenHour);

// Who is the tallest?
// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// Sample Input: 157  134  188
// Sample Output: 188

function tallestFriend(height) {
  let heightArray = height[0];
  for (let i = 0; i < height.length; i++) {
    let heightCount = height[i];
    if (heightCount > heightArray) {
      heightArray = heightCount;
    }
  }
  return heightArray;
}
let givenHeight = tallestFriend([157, 134, 188]);
console.log(givenHeight);

// Is it Isosceles??
// You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not using if-else.

// Isosceles means two sides are equal

// Sample Input-1: 9,8,9
// Sample output: Yes
// Sample Input-2: 8,8,8
// Sample output: No

function checkTriangle(side1, side2, side3) {
  if (side1 === side2 && side2 === side3 && side1 === side3) {
    console.log("No");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Yes");
  }
}
checkTriangle(9, 8, 9);
checkTriangle(8, 8, 8);

// Find the largest number

function findMax(arr) {
  let maxArray = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let arrCount = arr[i];
    if (arrCount > maxArray) {
      maxArray = arrCount;
    }
  }
  return maxArray;
}
let givenNumber = findMax([55, 10, 95]);
console.log(givenNumber);

// Sample Input: 20  13  37
// Sample Output: 70

function finalScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    let number = scores[i];
    sum += number;
  }
  return sum;
}
let inputNumber = finalScore([20, 13, 37]);
console.log(inputNumber);

// You received your final exam results. Write a function find to find your grades using if-else.
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Sample Input: 95
// Output: A

function findGrade(marks) {
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else if (marks <= 39) {
    grade = "F";
  } else {
    grade = "please valid grade number";
  }
  return grade;
}
let inputGarde = findGrade(95);
console.log(inputGarde);

// This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

// Input:
// The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got) .

// Sample Input-1: 84  99  77
// Sample Output-1: Dela

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
    topper = "The Marks Jim has got";
  } else if (marksOfDela > marksOfChinku) {
    topper = "The Marks Dela has got";
  } else {
    topper = "The Marks Chinku has got";
  }
  return topper;
}
let inputMark = JimOrDelaOrChinku(84, 99, 77);
console.log(inputMark);

// same problem just you can take two input and will tooper

function JimOrDela(marksOfJim, marksOfDela) {
  if (marksOfJim > marksOfDela) {
    mark = "Jim";
  } else {
    mark = "Dela";
  }
  return mark;
}
let givenMark = JimOrDela(84, 75);
console.log(givenMark);

// Remainder Operation

function findRemainder(mod) {
  let remainder = mod % 5;
  return remainder;
}
let givenReminder = findRemainder(119);
console.log(givenReminder);

// Input:
// The first and the second lines of the input contain the strings.

// Output:
// Print the result in one line.

// Sample Input:
// I am going to be
// an awesome web developer

// Output: I am going to be an awesome web developer

function stringCombine(str1, str2) {
  let oneLineString = str1.concat(" ", str2);
  return oneLineString;
}
let givenString = stringCombine("I am going to be", "an awesome web developer");
console.log(givenString);

// Find the average

// Sample Input: [75.25, 65, 80, 35.45, 99.50]
// Output: 71.04
// Sample Input: [100, 100, 100, 100, 100]
// Output: 100

function average(arrOfMarks) {
  let arraySum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    let array = arrOfMarks[i];
    arraySum += array;
  }
  let averageArray = arraySum / 5;
  let toFixedArray = Number(averageArray.toFixed(2));
  return toFixedArray;
}
let inputArrayNumber = average([75.25, 65, 80, 35.45, 99.5]);
console.log(inputArrayNumber);
let inputArrayNumber2 = average([100, 100, 100, 100, 100]);
console.log(inputArrayNumber2);

// The first line of the input is the taka Harry’s mom gave him.

// The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Sample Input:
// 1000
// 700
// Output: 300

function subtraction(num1, num2) {
  let getBackMoney = num1 - num2;
  return getBackMoney;
}
let givenMomMoney = subtraction(1000, 700);
console.log(givenMomMoney);

// Convert temperature
// The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:

// ℃=(℉-32)/1.8

// Case 1:
// Input: temperatureConverter(50)
// Output: 10

// Case 2:
// Input: temperatureConverter(103)
// Output: 39.44

function temperatureConverter(valNum) {
  let celsius = (valNum - 32) / 1.8;
  let celsiusToFixed = Number(celsius.toFixed(2));
  return celsiusToFixed;
}
let inputTemperature = temperatureConverter(50);
console.log(inputTemperature);
let inputTemperature2 = temperatureConverter(103);
console.log(inputTemperature2);

// Delete a property from an object

// Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop. If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.

// Reverse The String

// Write a function solution that takes a string parameter and returns the word in reverse order.
// In this task, you are given an input string and the task is to reverse the input string.

const reverseMaker = (word) => {
  let reverseSum = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let string = word[i];
    reverseSum += string;
  }
  return reverseSum;
};
let inputStr = reverseMaker("GeeksforGeeks");
console.log(inputStr);
let inputStr2 = reverseMaker("Hello");
console.log(inputStr2);

// same problem will solved another way
const reverseMaker2 = (word) => {
  let wordSplit = word.split("");
  let wordReverse = wordSplit.reverse();
  let reverseJoin = wordReverse.join("");
  return reverseJoin;
};
let inputString = reverseMaker2("GeeksforGeeks");
console.log(inputString);

// Detect vowel and consonent

const solution = (letter) => {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    letterIs = "VOWEL";
  } else {
    letterIs = "CONSONANT";
  }
  return letterIs;
};
let inputLetter = solution("a");
console.log(inputLetter);
let inputLetter2 = solution("u");
console.log(inputLetter2);
let inputLetter3 = solution("k");
console.log(inputLetter3);

// Suppose you want to create a shopping cart where it will calculate the total price of the products added. Implement a function totalCost that will take an array of objects where each object will have two properties: name and price. The function totalCost will take the array of objects as a parameter and return the total price of the products added to the shopping cart.

const totalCost = (products) => {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let objectProp = products[i];
    let price = objectProp["price"];
    sum += price;
  }
  return sum;
};
let inputObject = totalCost([
  { name: "Dano Milk", price: 500 },
  { name: "Taaza Tea", price: 200 },
  { name: "Fresh Sugar", price: 300 },
]);
console.log(inputObject);
let inputObject2 = totalCost([
  { name: "Samsung M33", price: 10000 },
  { name: "Samsung Charger", price: 500 },
  { name: "Haveit Speakers", price: 2500 },
]);
console.log(inputObject2);
