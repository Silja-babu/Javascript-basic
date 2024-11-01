
let player={
    name:"Silja",
    chips:145

}

let card=[]
let sum=0
let Blackjack=false
let isALive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+": $"+player.chips

console.log(card)
function randomNumber(){
      let random= Math.floor(Math.random()*13)+1
      if (random>10){
        return 10
      }
      else if(random===1){
        return 11
      }
      else{
        return random
      }
}


function startgame(){
    isALive=true
    let firstCard=randomNumber()
    let secondCard=randomNumber()
    let card=[firstCard, secondCard]
    let sum=firstCard+secondCard
    rentergame()
}
function rentergame(){
    cardEl.textContent="Cards:"
    for(let i=0;i<card.length;i++){
        cardEl.textContent+=card[i]+" "
    }
    sumEl.textContent="Sum:"+" "+ sum 
    if (sum<=20){
        message="do you want to draw a new card"
    }
    else if(sum===21){
        message="Wohoo! you win the game"
        Blackjack=true
    }
    else{
        message="you loose the game"
        isALive=false
    }
    messageEl.textContent=message
    console.log(message)
}

function newcard(){
    if (isALive===true && Blackjack===false){
    console.log("Drawing a new card")
    let thirdcard=randomNumber()
    sum+=thirdcard
    card.push(thirdcard)
    console.log(card)
    rentergame()}
}




