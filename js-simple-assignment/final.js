/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var areaGot=area/2;
console.log(areaGot);



/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here

if(money>=25000)
{
    console.log('Laptop');
}
else if(money>=10000)
{
    console.log('Cycle');
}
else
{
    console.log('Chocolate');
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here

for(var i=1; i<=lastDay; i++)
{
   if(i%3==0)
   {
    console.log(i+' - medicine');
   }
else
{
    console.log(i+' - rest')
}
}


/** Problem 04 - (Delete / Store) */
var fileName= "docx.xpdf";
//write your code here

if(fileName.slice(0,1)==='#'||fileName.slice(-4)==='.pdf'||fileName.slice(-5)==='.docx')
{
    console.log('Store');
}
else
{
    console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99,department: "eee"  };
//write your code here
var roll=student.roll;
var fastPart=student.name.concat(roll);
var lastPart=student.department.concat('@ph.ac.bd');
var Email=fastPart.concat('.').concat(lastPart);
console.log(Email);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for(var i=1; i<=experience; i++)
{
  startingSalary=startingSalary+startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));