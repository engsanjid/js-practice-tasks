//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function num(number)
{
    if(number%2===0)
    {
        sum=number*2;
        return sum;
    }
    else 
    {
        sum=number/2;
        return sum;
    }
}
const result=num(2);
console.log(result);