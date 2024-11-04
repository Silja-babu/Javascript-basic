const playerOneName="tim"
const playerTwoName="jenn"
const playerOneMarker="x"
const playerTwoMarker="0"


const playerOne={
    name:"tim",
    marker:"x"
}

const playerTwo={
    name:"jenn",
    marker:"o"
}


function printName(player){
    console.log(player.name);
    console.log(player.marker)
}
printName(playerTwo);


function showlength(array){
    if(array.length>5){
        var greater='greater than 5';
        console.log(greater)
    }
    else{
        var lessThan='less than 5';
        console.log(lessThan)
        console.log(greater)
    }
}
showlength([1,2,3])