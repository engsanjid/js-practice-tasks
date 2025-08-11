//Write a function to convert temperature from Celsius to Fahrenheit.


function temperatureConvert(C)
{
    let F = (C * 9/5) + 32;
    return F;

}
let Fahrenheit=temperatureConvert(37);
console.log(Fahrenheit);