let player1Time=102
let player2Time=107

function getfasterRacetime(){
    if (player1Time<player2Time){
        return player1Time
    }
    else if(player2Time<player1Time){
        return player2Time
    }
    else{
        return player1Time
    }
}
let fasterRace=getfasterRacetime()
















