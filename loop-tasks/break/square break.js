/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let num = 2;

while (num <= 100) {
  let squareRoot = Math.sqrt(num);

  if (Number.isInteger(squareRoot)) {
    console.log("First square number found:", num);
    break;
  }

  console.log(num);
  num++;
}
