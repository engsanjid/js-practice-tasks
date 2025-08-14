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
