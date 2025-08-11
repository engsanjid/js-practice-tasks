//Generate a random number between 10 to 20.

function randomn(max,min)
{

let result=Math.round(Math.random(1)*(max - min + 1) + min);
return result;


}
let result=randomn(10,20);
console.log(result);
for(let i=0;i<=9;i++)
{
    console.log(`${randomn(10, 20)}`);
}