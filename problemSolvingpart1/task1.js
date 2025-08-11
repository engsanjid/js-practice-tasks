//Write a function to count the number of vowels in a string.


function coundNumber(string)
{ 
    const lowercasedString = string.toLowerCase();
    let count=0;
    for(let num of lowercasedString)
    {
        
        if(num==='a'||num==='e'||num==='u'||num==='i'||num==='o')
        {
            count++;

        }
    }
    return count;
}
let st='sAnjid';
let name1=coundNumber(st);
console.log(name1);