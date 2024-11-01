let firstCard=6
let secondCard=34
let sum=firstCard+secondCard


if(sum<21){
    console.log("Do you want to draw a new card?")
}
else if(sum===21){
    console.log("Wohoo! You've got Blackjack")
}
else{
    console.log("You are loss your game")
}



let age=22
if(age<21){
    console.log("You can not enter the club!")
}
else{
    console.log("Welcome!")
}



let year=20
if(year<21){
    console.log("you can not enter the club")
}
else if(year>=21){
    console.log("Welcome!")
}


let personage=100
if(personage<100){
    console.log("Not eligiblle")
}
else if(personage==100){
    console.log("Here is your birthaday card from the King")
}
else{
    console.log("Not eligible, you have allready gotten one")
}



let card1=10
let card2=7
let summation =card1+card2
if(summation<=20){
    console.log("do you want to draw a card")
}
else if(summation===21){
    console.log("wohoo you've got vlackjet")
}
else{
    console.log("You' out of the game")
}








console.log(4===3)
console.log(5>2)
console.log(12>12)
console.log(3<0)
console.log(11<=11)
console.log(3<=2)


let mycard=10
let mycard2=11
let add=mycard+mycard2
let alive=true
let hasblackbash=false
let message=""

if (add<=20){
    message="do you want to draw a new card"
}
else if(add===21){
    message="Wohoo you win the match"
    hasblackbash=true
}
else{
    message="you,re out of game"
    alive=false
}
console.log(message)