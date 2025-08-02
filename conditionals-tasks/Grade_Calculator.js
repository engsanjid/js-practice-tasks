const readline = require('readline'); // ইনপুট নেওয়ার লাইব্রেরি

// ইন্টারফেস তৈরি
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Input: Marks
rl.question("Enter your marks: ", function(marks) {
    
  marks = parseFloat(marks); // ইনপুট কে সংখ্যা বানানো

  if (marks >= 90 && marks <= 100) {
    console.log('A');
  } 
  else if (marks >= 80 && marks <= 89) {
    console.log('B');
  } 
  else if (marks >= 70 && marks <= 79) {
    console.log('C');
  } 
  else if (marks >= 60 && marks <= 69) {
    console.log('D');
  } 
  else if (marks >= 0 && marks < 60) {
    console.log('F');
  } 
  else {
    console.log('Invalid marks! Please enter between 0 and 100.');
  }

  rl.close(); // ইনপুট বন্ধ
});
