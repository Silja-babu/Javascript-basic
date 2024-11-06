let user ={name:"john",
    surname:"Mathew"
}
let admin=user;
admin.name="pete"
console.log(user.name)

//

let username={
    name:"John",
    age:30
};
let clone={};
for(let key in user){
    clone[key]==user[key];
}
clone.name="Pete"
console.log(username.name)
                     //i can imagine
let usename={
    name:"John"
}
Object.assign(usename,{name:"Peter parker"})
console.log(usename.name)



let useit={
    name:"Jogn",
    sizes:{
        height:182,
        width:50
    }
}
console.log(useit.sizes.height)


                   //Garbage collection



function marry(man,woman){
    woman.husband=man;
    man.wife=woman;
    return{
        father:man,
        mother:woman
    }
}
let family=marry({
    name:"John"

},{
    name:"ann"
});
console.log(family)
                    //object-this
                    
let used={
    name:"JOhn",
    age:30,
    sayHi(){
        console.log(this.name)
    }
}   
used.sayHi();                 





let useme={
    name:"John"

}
let admin1={
    name:"Admin"
}
function sayHi1(){
    console.log(this.name)
}
useme.f=sayHi1
admin1.f=sayHi1;
useme.f();
admin1.f();
admin1['f']();




function User(name){

    this.name=name;
    this.isAdmin=false;
}
let usar=new User("Jack")
console.log(usar.name)
console.log(usar.isAdmin)

function BigUser(){
    this.name="John"
    return{
        name:"Godzilla"
    }
}
console.log(new BigUser().name)


   