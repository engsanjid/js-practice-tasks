//Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(name)
{
    let smallestName=name[0]
    for(let num of name)
    {
        if(smallestName.length>num.length)
        {
            smallestName=num;
        }
    }
    return smallestName;

}
let result=smallestName(heights2);
console.log(result);