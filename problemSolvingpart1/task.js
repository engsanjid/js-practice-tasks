/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
function coundNumber(array,find)
{
    let cound=0;
    
    for(let number of array)
    {
        
        if(number===find)
        {
            cound++;

        }
    }
    return cound;
    
}
let numbers = [5,6,11,12,98, 5]
let find=5;
let result=coundNumber(numbers,find);
console.log(result);
let number = [5,6,11,12,98, 5]
let find1=25;
let result1=coundNumber(number,find1);
console.log(result1);