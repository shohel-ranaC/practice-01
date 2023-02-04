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
