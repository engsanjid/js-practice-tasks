/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99,department: "eee"  };
//write your code here
var roll=student.roll;
var fastPart=student.name.concat(roll);
var lastPart=student.department.concat('@ph.ac.bd');
var Email=fastPart.concat('.').concat(lastPart);
console.log(Email);