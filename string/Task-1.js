//Count how many times a string has the letter a

let text = 'i am a student';
let count = 0;

for (const char of text) {
  if (char === 'a') {
    count++;
  }
}

console.log("Total 'a' found:", count);
