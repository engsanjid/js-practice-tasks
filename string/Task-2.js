//Count how many times a string has the letter a or A
let num='I am student.I have a friend.His name Ashik';
count =0;
count1=0;
for(const num1 of num)
{
    if(num1==='a')
    {
        count++;
    }
}
console.log(count);
for(const num1 of num)
{
    if(num1==='A')
    {
        count1++;
    }
}
console.log(count1);