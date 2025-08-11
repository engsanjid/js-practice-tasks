/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000
    tablet = 15000
    mobile = 20000
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/
function calculateElectronicsBudget(a,b,c)
{
   let laptop = 35000 
   let tablet = 15000
   let mobile = 20000
   let laptopPrice=laptop*a;
   let tabletPrice=tablet*b;
   let mobilePrice=mobile*c;
   let total=laptopPrice+tabletPrice+mobilePrice;
   return total;

}
let result=calculateElectronicsBudget(0,0,1);
console.log(result);