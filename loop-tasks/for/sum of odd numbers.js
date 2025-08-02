/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let num;
sum=0;
for(num=91;num<=129;num++)
{
if(num%2==1)
{
    sum=sum+num;
}
}
console.log('sum of all the odd numbers from 91 to 129='+sum);



/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
sum1=0;
let num2;
for(num2=51;num2<=85;num2++)
{
    if(num2%2==0)
    {
         sum1=sum1+num; 
    }
}
console.log('all the even numbers from 51 to 85='+sum1);