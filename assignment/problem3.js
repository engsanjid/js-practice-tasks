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




