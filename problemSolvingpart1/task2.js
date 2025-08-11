//Write a function to find the longest word in a given string.

//sample-input: I am learning Programming to become a programmer

//sample-output: Programming
function longestwd(string)
{
    let num=string.split(' ');
    let max=num[0];
    for(let num1 of num)
    {
        let max1=num1;
        if(max.length<max1.length)
        {
            max=max1;

        }
    }
    return max;
    
    
}
let st='I am learning Programming to become a programmer';
let result=longestwd(st);
console.log(result);