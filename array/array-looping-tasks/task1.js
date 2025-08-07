/*Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let num=[]

for(let i=0;i<=colors.length-1;i++)
{
    console.log(colors[i])
    num.unshift(colors[i])
   
}
 console.log(num);