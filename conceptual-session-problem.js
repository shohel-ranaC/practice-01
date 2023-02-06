// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function bigName(name1, name2) {
  if (name1.length > name2.length) {
    return name1.split("").reverse().join("");
  }
  return name2.split("").reverse().join("");
}
const givenName = bigName("Rony", "Muhammad");
console.log(givenName);

// Problem 5:  isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// Sample Data:
// Input

// { name: "abul", friend: "babul" },

// { name: "babul", friend: "abul" }

// { name: "abul", friend: "kabul" },

// { name: "kabul", friend: "sabul" }

// { name: "doe", friend: "alex" },

// { name: "john", friend: "doe" }

// output:
// true
// false

function isBestFriend(friend1, friend2) {
  if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
    return true;
  }
  return false;
}
const givenObj = isBestFriend(
  { name: "abul", friend: "babul" },
  { name: "babul", friend: "abul" }

  // { name: "abul", friend: "kabul" },
  // { name: "kabul", friend: "sabul" }

  // { name: "doe", friend: "alex" },
  // { name: "john", friend: "doe" }
);
console.log(givenObj);

// Problem 4:  publicBusFare
// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

// উদাহরণ১ঃ
//  যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// উদাহরণ২ঃ
//  যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// Output

// 50
// 55
// 112
// 235
// 365

// 0
// 1250
// 250
// 500
// 1000

function publicBusFare(noOfPerson) {
  if (typeof noOfPerson !== "number" || noOfPerson < 50) {
    return "Please enter a valid number";
  }
  let remaining = 0;
  remaining = noOfPerson % 50; //protek ti bus 50, 50 kore niye nibe and baki jaa thakbe seta o dibe and baki na thakle 0 dibe
  remaining = remaining % 11;
  let costOfPublicBus = remaining * 250;
  return costOfPublicBus;
}
let givenNoOfPerson = publicBusFare(55);
console.log(givenNoOfPerson);

// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। অব্জজেক্টটি/Input দেখতে এমনঃ
// [
//     {name:'sakib', age:30},

//     {name:'samiul', age:20},

//     {name:'sahid', age:50},

//     {name:'samin', age:10}
// ]

function smallestPerson(persons) {
  let personObject = persons[0];
  //console.log(personObject);
  for (let i = 0; i < persons.length; i++) {
    let person = persons[i];
    if (person.age < personObject.age) {
      personObject = person;
    }
  }
  return personObject;
}
const givenPerson = smallestPerson([
  { name: "sakib", age: 20 },
  { name: "samiul", age: 30 },
  { name: "sahid", age: 50 },
  { name: "samin", age: 10 },
]);
console.log(givenPerson);

// array duplication
function nameDuplication(array) {
  let avoidDuplication = [];
  for (let i = 0; i < array.length; i++) {
    let names = array[i];
    if (avoidDuplication.includes(names) === false) {
      avoidDuplication.push(names);
    }
  }
  return avoidDuplication;
}
const givenArray = nameDuplication([
  "Abul",
  "Babul",
  "Abul",
  "Babul",
  "Kabul",
  "Sabul",
  "Abul",
]);
console.log(givenArray);
