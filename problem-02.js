// practice problem-01

var fruits = ["apple", "banana", "orange"];

// find the index of banana
indexOfBanana = fruits.indexOf("banana");

console.log(indexOfBanana);

// replace banana with mango
// fruits[1] = "mango";
replace = fruits[1] = "mango";

console.log(replace);

// add watermelon
fruits.push("watermelon");
fruits.unshift("jackfruits");
fruits.pop();
fruits.shift();
fruits[2] = "tomato";
console.log(fruits);

// ====================================================
// practice problem-02

var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if (tom || jane || peter || john >= 80) {
  console.log("your grade is: A");
} else if (tom >= 60) {
  console.log("your grade is: B");
} else if (tom >= 50) {
  console.log("your grade is: C");
} else if (tom >= 40) {
  console.log("your grade is: D");
} else if (tom >= 39) {
  console.log("your grade is: F");
}

// practice problem-03

//  var numbers = [13, 79, 45];
var a = 90;
var b = 105;
var c = 100;

if (a > b) {
  if (a > c) {
    console.log("A is big than others");
  } else {
    console.log("C is big");
  }
} else if (b > c) {
  console.log("B is big");
} else {
  console.log("C is big");
}

// Isosceles
var lomvo = 9;
var vumi = 8;
var otivug = 9;

if (lomvo === vumi || vumi === otivug || otivug === lomvo) {
  console.log("Isosceles two side are equal");
} else {
  console.log("Isosceles two side are not equal");
}
