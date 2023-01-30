// function practice extra challenge

// challenge -01

// namta using function

function multiplication(number) {
  for (var i = 1; i <= 10; i++) {
    var result = number * i;
    console.log(`${number} X ${i} = ${result}`);
  }
}

multiplication(13);

// challenge -02
// write a function that take input normal case string and return lowercase string

function caseString(str) {
  var str = str.toLowerCase();
  console.log(`Your String Is: ${str}`);
}
caseString("Amar Sonar Bangla AMI TOMAY VALObasi ok");

// Challenge -03
// take two parameter fastName & lastNAme which is output give fastName LastName

function fullName(fastName, lastName) {
  //   var result = fastName + " " + lastName;
  var result = fastName.concat(" " + lastName);
  console.log(result);
}
fullName("Hablu", "Santa");

// challenge -04
// if you input 5 and then give squire your input

function squire(input) {
  var result = input * input;
  console.log(`Your Input Value is ${input} and Squire: ${result}`);
}
squire(5);

// challenge -04

const pizza = {
  toppings: ["cheese", "sauce", "peperoni"],
  crust: "deep dish",
  serves: 2,
};
var result = pizza.toppings;
console.log(result);
