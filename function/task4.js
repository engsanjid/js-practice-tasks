//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(a)
{
    count=0;
    for(let num of a)
    {
        if(num=='0')
        {
            count++;
        }
    }
    return count;


}
const result=count_zero('0101010');
console.log(result);

