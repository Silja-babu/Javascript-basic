console.log(1)

//console.log() simply displays information in your hs console-in this case the value 1
//we will use console.log() as a tool to test our code.

       //variables
//variables are containers that store informationn for later use.


let test;
// let keyword to declare a variable with name test. Declaring a variable is js slang for creating a variable.
console.log(test);//=> undefined
//this is because we have not initilaised our variable.initializing a variable is the process of assigning a value to it.

let tests;
tests=1
console.log(tests)//=>1
// also 
let teste=1
console.log(teste)//=>1

let num;
console.log(num);//find output
//undefined
let nume=0
console.log(nume)
nume=2;
console.log(nume)//find
//0 2
           
         //objects
 


let user={
    name:"John",
    age:24
};
console.log(user.name)
console.log(user.age)         

user.isAdmin=true
delete user.age

console.log(user.isAdmin)
console.log(user.age)
 user["likes birds"]=true

user.age=true==1
console.log(user.age)
 let key ="name"
 console.log(user.key)
let fruit = "apple"
let bag={
    [fruit]:5,
}
console.log(bag.apple);

function makeUser(name,age){
    return{
        name:name,
        age:age,
    }
}
let users=makeUser("john",30);
console.log(users.name)


let ne={
    name:"JOhn",
    age:30,
    isAdmin:true
}
for(let key in ne){
    console.log(key)
    console.log(ne[key]);
}


let sil={
    name:"JOhn",
    surname:"Smith"
}
sil.age=25;
for(let prop in sil){
    console.log(prop)
}

let codes={
    "+49":"Germany",
    "+41":"Switzerland",
    "+44":"Great Britain",
    "+1":"USA"
}
for(let code in codes){
    console.log(+code);
}

let ued={}
ued["likes birds"]=true
console.log(ued["likes birds"])
delete ued["likes birds"]


let meto={
    name:"johniman",
    age:30
}
let keys=("name")
console.log(meto[keys]);

let fruits='apple';
let ebag={
    [fruits+"copmputers"]:5
}
console.log(ebag)


                 //object reference and coping

let ue={
    name:"JOhn stepen mathayi"
}
let admin=ue
console.log(ue.admin)



let username={
    name:"john",
    surname:"Babu"
}
let adm=user;
adm.name="Silja"
console.log(username.name)












































































































































































































































































































































































 
                      

