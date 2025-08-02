/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num=81;
sum=0;
while(num<=131)
{
if(num%2!==0)
{
sum=sum+num;
}
num++;
}
console.log('Sum of all the odd numbers from 81 to 131='+sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let num1=206;
sum1=0;
while(num1<=311)
{
if(num1%2==0)
{
sum1=sum1+num1;
}
num1++;
}
console.log('Sum of all the even numbers from 206 to 311='+sum1);