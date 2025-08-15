
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
console.log(totalFine(22))
