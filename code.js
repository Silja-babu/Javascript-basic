//let clickEl=document.getElementById("click")
//clickEl.textContent="hlooo"


//function button(){
    
  //  card="its me"
  //  clickEl.textContent=card
  //  console.log(card)

//}
//function button(val){
//    console.log("Heloo world",val);

//}

//const value=[1,2,3,4,5,5,5,9]
//value.forEach(button)

//arrow function


const fn=function(val){
  console.log("hello world=",val);
  return 19;
}
const fn2=val =>{
  console.log("hello njan", val);
  return 19;
}
fn(1);
fn2(2);


//addition and multipication of 2 numbers

const f2n=function(a,b){
  return a*b;
}
const fn1=(a,b)=>{
  return a+b
}
const add=f2n(3,2)
const mult=fn1(3,2)
console.log(add,mult)

let name="Ilya";
console.log('hello '+ 1);
console.log('hello '+ "name");
console.log('hello '+ name);



console.log("6"-"3")


let a=1;
let b=2;
let c=3-(a=b+1);
console.log(a);
console.log(c);

let           n=2
n+=5
n*=2
console.log(n)


let counter=2
counter---
console.log(counter)

let d=1,e=1
let f=++d;
let g=e++
console.log(f,g)


let i=2
let j=1+(i*=2)
console.log(j)


console.log(2>1)
console.log(2==1)
console.log(2!=1)

console.log(5>4)
console.log("apple">"pineapple")
console.log("2">"12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")


  //    let message = (login == 'Employee') ? 'Hello' :
  //    (login == 'Director') ? 'Greetings' :
    //  (login == '') ? 'No login' :
     // '';

console.log(null||2||undefined)


let is=3;
while(i){
  console.log(i);
  i--;
}


let y=0;
do{
  alert(i);
  i++;

}while(i<3)


