function search(nums,terget)
{
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===terget)
        {
            return i
        }
        
    }
    return -1
}
let num=[2,3,4,1,4]
let terget=4
let result=search(num,terget)
console.log(result)