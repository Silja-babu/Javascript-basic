let feacturepost=["check my profile","here's the codw for my project", "do you know me"]
console.log(feacturepost[2])




let experience=["ceo of scrimba","frontend","peopele","we are ","this are my way"]
console.log(experience[3])
let per=["silja babu", 35, true]
let cards=[7,4,6]
cards.push(6)
console.log(cards)
console.log(experience.length)




let array=["silja babu",35,true]

let list=[3,7,9]
list.push(8)
console.log(list)




let message=["hey, how are you",
    "Iam finr thankyou , how about you?",
    "all good. been working on my office lately",
    "no it is ",
    "how your salary"

]
let newMessage="it is about 3lpa"
message.push(newMessage)
console.log(message)
message.pop(newMessage);
console.log(message)


let arr=["apple","banana","orange","mango"]
console.log("original array",arr)
while (arr.length){
    arr.pop();
}
console.log("array length",arr.length)

let shifted=arr.shift(1);
console.log("removed element:",shifted)
console.log("remaining element:",arr)
// JavaScript Array shift() Method
// to Remove Elements from Array

let arrs = ["Apple", "Banana", "Orange", "Mango"];

// Removing the first element from array 
let shifteds = arrs.shift();

console.log("Removed Element: ", shifteds);
console.log("Remaining Array Elements: ", arrs);

let arre = ["Apple", "Banana", "Orange", "Mango"];

let spliced=arre.splice(3,1)
console.log("removed element:" ,spliced)
console.log("remaining element:",arre)


for (let count=10;count<=20;count+=1){
    console.log(count)
}
for(let counts=10;counts<=100;counts+=10){
    console.log(counts)
}

let messages=["hey,how is going your work","its going well","did you complete your study","of-cousrse",
    "what about your future"]
  //  console.log(messages[0])
   // console.log(messages[1])
  //  console.log(messages[2])
    //console.log(messages[3])
   // console.log(messages[4])
//for(let i=0;i<5;i+=1){
 //   console.log(messages[i])
//}

for (let i=0;i<messages.length;i+=1){
    console.log(messages[i])
}
let number=[1,2,3,3,4,48,9]
for(let i=0;i<number.length;i+=1){
    console.log(number[i])
}





let randonNumber=Math.floor(Math.random()*1)
console.log(randonNumber)

let cousrse={
    title:"Phython for beginners",
    lesson:10,
    creatoe:"silja babu",
    length:63,
    levevl:0,
    isfree:true,
    tags:["computer","time"]
}
console.log(cousrse.creatoe)




let airbnb={
    castle:"live like a king",
    rate:194,
    duration:"one night",
    foodisfree:false,
    more:["wifi","swiming pools"]
}
console.log(airbnb.castle)
console.log(airbnb.more)



let person={
    name:"Silja",
    age:24,
    country:"india"
}
function logData(){
 title=person.name+" is "+person.age+" yeras old and lives in "+person.country
 console.log(title)
}
logData()


let age=67
if (age<6){
    console.log("free")
}
else if(age<18){
    console.log("child discount")
}
else if(age<27){
    console.log("student discount")
}
else if(age<67){
    console.log("full price")
}
else{
    console.log("senior citizen discount")
}


let largecountries=["China","India","USA","Indonesia","Pakistan"]
for(let i=0;i<largecountries.length;i++){
    large="- "+(largecountries[i])
    console.log(large)
}
let changingcountries=["Tuvalu","India","USA","Indonesia","Monaco"]
changingcountries.pop("Monaco")
changingcountries.push("Pakstian")

changingcountries.shift("Tuvalu")
changingcountries.unshift("China")
console.log(changingcountries)

let dayofmonth=13
let weekday="friday"
if(weekday==="friday"&&dayofmonth==13){
    console.log("log out this spooky face")
}
else{
    console.log("noo")
}

let hands=["rocks","paper","scissor"]
    function gethand(){
        let index=Math.floor(Math.random()*3)
        return hands[index]
    }
console.log(gethand())



let sisters=["silja","silbi","bilcy"]
function bestone(){
    let lucky=Math.floor(Math.random()*3)
    return sisters[lucky]
}
console.log(bestone())

const playername="Silja"
let credits=45

const basePrice=520
const discount=120
let shippingCost=12
let shippingtime="5-12 days"
shippingCost=15
shippingtime="7-14 days"
const fullPrice=basePrice-discount+shippingCost
console.log("total cost: "+ fullPrice+". it willl arrive in" +shippingtime)


if(true){
    var name="silja"
}
console.log(name)

const recipient="James"
const email='hey ${recipient} ! how is it going? Cheers Per'
console.log(email)

 const recipients="per"
 const emails="hey "+recipients+ "! how is it going? cheers silja"
 console.log(emails)