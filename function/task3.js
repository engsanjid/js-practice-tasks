//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array,size)
{
    let total=0;
    for(let i=0;i<size;i++)
    {
        total=total+array[i];

    }
    let avg=total/size;
    return avg;

}
const a=[2,4,4,6,5];
const b=4;
const result=make_avg(a,b);
console.log('result=',result);

