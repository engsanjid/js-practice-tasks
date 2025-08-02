const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight (kg): ", function(weightInput) {
  rl.question("Enter your height (ft): ", function(heightFeet) {

    var weight = parseFloat(weightInput);
    var height = parseFloat(heightFeet) * 0.3048;

    var BMI = weight / (height ** 2);
    console.log('YOUR BMI = ' + BMI.toFixed(2));

    if (BMI < 18.5) {
      console.log('You are underweight.');
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      console.log('You are normal.');
    } else if (BMI >= 25 && BMI <= 29.9) {
      console.log('You are overweight.');
    } else {
      console.log('You are obese.');
    }

    rl.close();
  });
});
