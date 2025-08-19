var lengthOfLastWord = function(s) 
{
    let num=s.trim().split(' ')
    console.log(num) 
    let lastword=num[num.length-1]
    return lastword.length
}    
let result=lengthOfLastWord('i am sanjid')
console.log(result)