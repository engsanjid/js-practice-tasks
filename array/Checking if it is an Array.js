/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
let num = 21;
let num1 = [];
let num2 = ['sanjid'];

if (Array.isArray(num)) {
    console.log('num is an array');
} else {
    console.log('num is NOT an array');
}

if (Array.isArray(num1)) {
    console.log('num1 is an array');
} else {
    console.log('num1 is NOT an array');
}

if (Array.isArray(num2)) {
    console.log('num2 is an array');
} else {
    console.log('num2 is NOT an array');
}
