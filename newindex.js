let countEL=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let buttonEl=document.getElementById("button")

console.log(countEL)
console.log(saveEl)
console.log(buttonEl)


let count=0
function increment(){
    count=count+1
    countEL.textContent=count
}
function save(){
    let countStr=count+"-"
    saveEl.textContent+=countStr
    countEL.textContent=0
    count=0
    console.log(count)
}
function buttons(){
    document.getElementById('demo').innerHTML=Date()
    console.log(buttons)
}
