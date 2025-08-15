

function  onlyCharacter( str )
{ 
         if(typeof str!=='string')
         {  
              return "Invalid" 
         }
         else
         {
             let result = '';
            for(let num of str)
            {
                if(num!==' ')
                {
                    result=result+num.toUpperCase();
                }      
            }

            return result;

         }

}
console.log(onlyCharacter('Sanjid is a student , he is a hacker '))