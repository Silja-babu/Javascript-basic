//function showAlert(){
  //  var myText="This can be whatever text you like!";
  //  alert(myText);
//}

//function showAlert(){
 //   alert("hello");[1,2].forEach(alert);
//}

 //     function showAlert(){
 //       let helllo='hello world!';
 //       let message;
 //       message=helllo;
 //       alert(helllo);
 //       alert(message);

   //   }
      //  function showAlert(){
     //   let age =prompt('How old are you?', 100);
     //     let test= prompt("test");
     //     let isBoss=confirm("are you boss of this project")
       //   let isSleepy=confirm("Are you feel sleepy")
     //     alert('you are ' +age+ ' years old!')
       //  alert(isBoss)
         // alert(isSleepy)
        //}



  //     function showAlert(){
  //      let name =prompt('What is your name');
  //      alert('My name is '+name)
    //   }

  //      function showAlert(){
  //        let value=true;
    //      alert(typeof value)
      //    value =String(value)
        //  alert(typeof value)

          
        //}

//          function showAlert(){
//            let a1=prompt("First number?",1)
//            let b1=prompt("second number?",2)
//            alert(a1+b1)
//          }

//          function showAlert(){
 //           let year=prompt('In which year was ECMAScript-2015 specification published?')
  //          if(year==2015) {alert('you are right!')}
   //         else{
    //          alert('you are wrong.it is 2015')
     //       }
      //    }

function showAlert(){
      let begin=prompt('Whats the "official" name of javaScript?' )
      if(begin==="ECMAScript"||begin==="ecmascript" ||begin==="ecmaScript"){
        alert('Right!')
      }
      else{
        alert('You dont know? "ECMAScript"')
      }
}

function showAlert(){
  let number=prompt('Write a integer',0)
  if(number>0){
    alert('1')
  }
  else if(number<0){
    alert('-1')
  }
  else {
    alert('0')
  }
  
}


function showAlert(){
  let begin=prompt("who's there?")
  if (begin==='admin'){
    let password=prompt('Password')
      if(password==='TheMaster'){
        alert('Welcome!')
      }
      else if('cancel'){
        alert('Canceled')
      }
      else{
        alert('Wrong password')
      }
    }
    else if(begin==='cancel'){
      alert('canceled')
    }
    else{
      alert('I dont know you')
    }
  }

  //result=(a!==null&&a!==undefined)?a:b;
  //          let user;
            
    //        let users="JOhn"
      //      alert(user ?? "anaonmous")
        //    let firstName=null;
          //  let lastName=null;
            //let nickName="supercoder";
           // alert(firstName||lastName||nickName||"anonymous")


  let height=0;
  alert(height||100);
  

  let heights=null
  let width=null;
  
  alert(area)