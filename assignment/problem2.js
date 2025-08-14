

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
                    result=result+num.toLocaleUpperCase();
                }      
            }

            return result;

         }

}