//If a given string has either x, replace x by y. if the given string has X, replace it by Y.


let num = 'i am her ex and she also my EX';


let result = num.replace(/x/g, 'y').replace(/X/g, 'Y');

console.log(result);
