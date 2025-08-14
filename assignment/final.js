function totalFine( fare )
{
       if(typeof fare === 'number' && fare>0)
       {
            let fine=fare + fare*0.2 + 30 ;
             return fine ;
       } 
       else 
       {
         return "Invalid" ;
        
       }
}


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


function  bestTeam( player1, player2 ) 

{
    if(typeof player1!=='object'||player1===null||Array.isArray(player1)||typeof player2!=='object'||player2===null||Array.isArray(player2)) 
        {
            return "Invalid";
        
        }   
        else
        {
            let totalNumber1=player1.foul+player1.cardY+player1.cardR;
            let totalNumber2=player2.foul+player2.cardY+player2.cardR;
            if(totalNumber1>totalNumber2)
            {
                return player2.name;
            }
            else if(totalNumber1<totalNumber2)
            {
                return player1.name;
            }
            else
            {
                return "Tie"
            }

        } 
}


function  isSame(arr1 , arr2 ) 
{
       if(!Array.isArray(arr1)||!Array.isArray(arr2))
       {
         return "Invalid";
       }
       else
       {
        if(arr1.length!==arr2.length)
        {
            return false;
         
        }
        else
        {
            for(let i=0;i<arr1.length;i++)
            {
                if(arr1[i]!==arr2[i])
                {
                       return false;
                }
                
            }
            return true;
        }       
       }      
}


function  resultReport( marks ) 

{
    
          if(!Array.isArray(marks))
          {
            return "Invalid";
          }
          else
          { 
             if (marks.length === 0) 
                {
                    return {finalScore: 0,pass: 0,fail: 0};
                }

            let totalmarks=0;
            let pass=0;
            let fail=0;
             for(let num of marks)
             {
                 totalmarks=totalmarks+num;
                 if(num>=40)
                 {
                    pass++;
                 }
                 else
                 {
                    fail++
                 }
             }
            let finalScore=Math.round(totalmarks/marks.length);
            
            return {finalScore,pass,fail}
            
          }
}



