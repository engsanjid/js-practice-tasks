//Capitalize Every first Letter of each word in a String
let str = "i am fine";
let result = str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(result);  
