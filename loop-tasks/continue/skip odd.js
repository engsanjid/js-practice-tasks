/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
let num=1;
while(num<=40)
{
    if(num%2==1)
    {
        num++;
        continue ;
    }
    console.log(num);
    num++;
}