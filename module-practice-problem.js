// string type variable
let name = "shoheol rana"; // string
console.log(typeof name);
let name2 = true; // or false boolean
console.log(typeof name2);

// 7 to 19 print odd number using while loop
let i = 7;
while (i <= 19) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

let students = ["Shohel", "Rasel", "Rakib", "Asha", "sesha", "Prity"];

students.push("Urboshi", "Mitali");
students.splice(1, 1, "Mina");
console.log(students);

let players = { Name: "Neymar", Age: 20, Position: "Font-Desk" };

players.Name = "Shohel";
console.log(players);

// practice problem -01
// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(firstCopyOfBook, secondCopyOfBook, thirdCopyOfBook) {
  let firstPagesOfBook = firstCopyOfBook * 100;
  let secondPagesOfBook = secondCopyOfBook * 200;
  let thirdPagesOfBook = thirdCopyOfBook * 300;
  let totalPages = firstPagesOfBook + secondPagesOfBook + thirdPagesOfBook;
  return totalPages;
}
let givenCopyOfBook = paperRequirements(3, 2, 3);
console.log(givenCopyOfBook);

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

function positiveValue(array) {
  let positive = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value < 0) {
      break;
    } else if (value >= 0) {
      positive.push(value);
    }
  }
  return positive;
}
let givenValue = positiveValue([10, 2, 23, 6, 0, -1, 8, 30]);
console.log(givenValue);

//practice problem -02
// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(friend) {
  let bigName = friend[0].length;
  for (let i = 0; i < friend.length; i++) {
    let name = friend[i];
    let nameLength = name.length;
    if (nameLength > bigName) {
      bigName = name;
    }
  }
  return bigName;
}
let givenFriendsArray = bestFriend([
  "shohel",
  "SakibAlHasanKhan",
  "GolamMoulaKhan",
  "shihabul",
  "rizwana",
  "nurmuhammad",
]);
console.log(givenFriendsArray);

// array in smallest number
function smallestNumber(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < smallest) {
      smallest = number;
    }
  }
  return smallest;
}
const givenNumber = smallestNumber([20, 12, 50, 2, 90, 100]);
console.log(givenNumber);

// same as but three number smallest
function smallNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}
const givenDigit = smallNumber(20, 12, 50);
console.log(givenDigit);

// take an array and will be return average of array number

function averageArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    sum += value;
  }
  const averageOfArray = sum / 7;
  const averageRound = Math.round(averageOfArray);
  return averageRound;
}
const givenArray = averageArray([50, 33, 26, 40, 23, 10, 90]);
console.log(givenArray);

// Second Largest of an array

// function secondLargest(arrays) {
//   let sortedNumber = arrays.sort(function (a, b) {
//     return b - a;
//   });
//   let secondHighest = sortedNumber[1];
//   return secondHighest;
// }
// const secondLargestArray = secondLargest([20, 19, 33, 60, 26, 40, 75]);
// console.log(secondLargestArray);

// -----------------------------------------------------------
// secondLargest number solved another way
function secondLargest(arrays) {
  let firstLargestNumber = arrays[0];
  let secondLargestNumber = arrays[0];
  for (let i = 0; i < arrays.length; i++) {
    let array = arrays[i];
    if (array > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = array;
    } else if (array > secondLargestNumber) {
      secondLargestNumber = array;
    }
  }
  return secondLargestNumber;
}
const secondLargestArray2 = secondLargest([20, 19, 33, 26, 40]);
console.log(secondLargestArray2);

// Tricky problem: ধরো  তুমি  থাইল্যান্ড  বা  অন্য  কোথাও  একটা  হোটেল এ থাকতে  গেলা এখন  হোটেল  কর্তৃপক্ষ  কে  ভাড়া
//  জানতে  চাইলে  সে  বললো

// => যদি  আমাদের  হোটেল এ আপনি ১-১০ দিন  থাকেন  তাহলে  ভাড়া ৫০০ টাকা/ডে
// =>যদি ২০ দিন  থাকেন তাহলে ১০ দিনের পরে দিন  থেকে ২০ দিন  পর্যন্ত ৩০০ টাকা/ডে
// =>আপনি  যদি  এক  মাস  থাকেন  তাহলে  ২০ দিনের  পরের যত দিন  থাকবেন  ভাড়া ১০০টাকা /ডে

// এখন  তুমি  যদি ২৫ দিন  থাকো  তাহলে  ভাড়া  কত  টাকা  আসবে ?

function hotelCharges(days) {
  const firstTenDays = 500;
  const secondTenDays = 300;
  const thirdTenToMoreDays = 100;
  if (days <= 0) {
    return "please valid booking date";
  } else if (days <= 10) {
    const firstTenDaysCharge = days * firstTenDays;
    return firstTenDaysCharge;
  } else if (days > 10 && days <= 20) {
    const firstTenDaysCharge = firstTenDays * 10;
    const remainingDays = days - 10;
    const secondTenDaysCharge = remainingDays * secondTenDays;
    const totalCost = secondTenDaysCharge + firstTenDaysCharge;
    return totalCost;
  } else if (days > 20) {
    const firstTenDaysCharge = firstTenDays * 10;
    const secondTenDaysCharge = secondTenDays * 10;
    const remainingDays = days - 20;
    const thirdTenDaysCharge = remainingDays * thirdTenToMoreDays;
    const totalCost =
      thirdTenDaysCharge + secondTenDaysCharge + firstTenDaysCharge;
    return totalCost;
  }
}
let givenHotelBookingDays = hotelCharges(25);
console.log(givenHotelBookingDays);
