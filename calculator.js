let num=8
let num1=2

document.getElementById("num-el").textContent=num
document.getElementById("num1-el").textContent=num1
let sumEl =document.getElementById("sum-el")


function add(){
    sumEl.textContent=num+num1

}
function substract(){
    sumEl.textContent=num-num1

}

function divide(){
    sumEl.textContent=num/num1

}
function multiply(){
    sumEl.textContent=num*num1

}