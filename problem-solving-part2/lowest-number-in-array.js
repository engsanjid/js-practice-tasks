//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
function lowestnm(array)
{
    let lowestNumber=array[0];
    for(let num of array)
    {
        if(lowestNumber>num)
        {
            lowestNumber=num;
        }

    }
    return lowestNumber;

}
let result=lowestnm(heights2);
console.log(result);