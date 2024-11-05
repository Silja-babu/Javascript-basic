const myObj={
    a:1,
    b:2,
    c:function(){
        console.log('hello')
    }
  
  }
  myObj.c()
  

  //while


  let i=0;
  while(i<10){
    console.log(i)
    i++;
  }
  let u=10;
  while(u>=0){
    console.log(u);
    u--
  }
  let y=10;
  while(y>=0) console.log(y--)

    let t=0;
    do{
        console.log(t)
        t++;
    }
    while(t<=5)

        for(let r=11;r<=15;r++){
            console.log(r)
        }



for(let e=0;e<=10;e++){
  if(e%2==0)continue;
  console.log(e)
}

for(let w=0;w<10;w++){
  if(w%2==1)continue
  console.log(w)

}
for(let q=0;q<10;q++){
  if(p=q%2==1) continue
  
  console.log(p)
}

for(let s=2;s<=10;s++){
  if(s%2==1)continue;
  console.log(s)
}


let l=2+2;
switch(l){
  case 3:
    console.log('too small')
    break;
  case 4:
    console.log('exactly')
    break;
  case 5:
    console.log('too big')
    break;
  default:
    console.log('i dont know')       
}


function showMessage(){
  console.log('hello all are u depressed')
}
showMessage()
showMessage()


let use='john';
function showMessag(){
  use='bob';
  let message="hello "+use;
  console.log(message)
}
console.log(use);
showMessag()
console.log(use)

function showMessa(from,text){
  console.log(from+':'+text);

}
showMessa('ann','hello!')
showMessa('ann','what up?!')



function f(te,tex){
  te='*'+te+'*';
  console.log(te+':'+tex);
}
let te='Ann';
f(te,"hello")
console.log(te);


//edabit.com

"strings can be put in single or double quotation marks"

function showMess(to,para){
  if(para===undefined){
    para='no text given'
  }
  console.log(to+':'+para)
}
showMess()


//closure

function add(a,b){
  const c=a+b;
  return c;
} 
function main(){
  const res=add(3,4);
  console.log(res);
}
main();
//above is normal closure which means that a function is set inside another
//function

function sub(a1,b1){
  function mysub(){
    const c1=a1-b1;
    return c1;
  }
  return mysub;
}
function main1(){
  const res1= sub(3,4);
  const val=res1();
  console.log(val)
}
main();



function init(){
  var name="Mozilla"
  function displayName(){
    console.log(name)

  }
  displayName();
}
init();


if(Math.random()>0.5){
  var x=1
}else{
  var x=2;
}
console.log(x)

if(Math.random()>0.5){
  const y=1;

}else{
   const y=2
}
console.log(y)



function main(a){
  [1,2,3,4,5].forEach(function(i){
    console.log(i,a);
  });

}
main(10);


var object={
  a:1,
  b:9,
  c:'hiiii, its me'
}
var object1={
  ...object
}
console.log(object)
console.log(object1)




var a=[1,2,3,4]
var b=[...a]
console.log(a)
console.log(b)



var obj1={
  a:1,
  b:1,
  c:'Hai all is it okey'

}
var obj2={
  a1:1,
  b1:2,
  c:'hi'
}
var obj={
  ...obj1,
  ...obj2

}
console.log(obj)

var a=[1,2,3,4];
var b=[6,7,8,9];
var c=[...a, ...b]
console.log(c);


//i am become to much of tried reason is infinite, can you please find that and ake me happy. i don't know what i love. whats my carrier...only i can i belive what do you love more that is your carrier..they dept is make me like this


//lets begin with a beautiful carrier,
//lets love  this... every job have different difficulty, i need to make sure that my family become the most presious thing and everyone need to repect them...
//when i get the rank that moment i will remember always...because that is the most unexpected moment in my life......



///

//      function showAlert(text){
//        text=text||'empty'
        
//      }


//      showAlert()


function checkage(age){
  if (age>=18){
    return true
  }else{
    return confirm('Do you have permission from your parents?');

  }
}
let age=('how old are you',18);
if(checkage(age)){
  console.log('Acess granted')
}else{
  console.log('access denied')
}


      function showprimes(){
        nextprime:for(let i=2; i<10; i++){
          for(let j=2; j<i; j++){
            if(i%j==0)continue nextprime
          }
          console.log(i)
        }
      }



      function checkage(ag){
        if (ag>18){
          return true;
        }
          return ('did parents allow you')
        
      }
      let ag=17;
      if(ag>=18){
        console.log('allow')
      }
        console.log('nooo')
function min(a,b){
  if (a<b){
      return a
  }else{
      return b
  }
  

  }
function main(){
  let mins=min(2,5)
  
  console.log(mins)
}  
main()
        
function pow(x,n){
  let result=x
  for (let i=1; i<n; i++){
    result*=x;
  }
  return result;

}
function mains(){
  let letsing=pow(3,3)
  console.log(letsing)
}
mains();

