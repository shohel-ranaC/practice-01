var nums = 5;
var elements = Math.random(5).toFixed(2);
var roundNum = Math.round(elements);
console.log(roundNum);

var nums = -5;
console.log(Math.abs(nums));

// slice & Splice use
var numbers = ["rakib", "shohel", "shohan", "rishad", "moyna", "tiya", "pakhi"];
// var removeElement = numbers.slice(1, 5);
var removeElement = numbers.splice(1, 5);
console.log(removeElement);
console.log(numbers);

// function two variable addition
function Addition(a, b) {
  var c = a + b;
  var d = c * 10;
  return d;
}
var result = Addition(100, 50);
console.log(result);

// object practice problem

var students = {
  name: "Shohel Rana",
  age: 32,
  gender: "Male",
  address: "Gaibandha",
  phone: 0177777777,
};
// var getElement = students.name; => see value
// var getElement = (students.name = "Akash Chowdhury");     => update Value
// console.log(getElement);
var newElement = (students.desicnation = "Web Developer"); // new value added
console.log(students);

// factorial problem solving

var factorial = 1;
for (var i = 1; i <= 5; i++) {
  var factorial = factorial * i;
  console.log(i, factorial);
}

// same problem using function
function Factorial(number) {
  var factorial = 1;
  for (var i = 1; i <= number; i++) {
    var factorial = factorial * i;
  }
  return factorial;
}

var result = Factorial(5);
console.log(result);
