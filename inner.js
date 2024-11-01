const container=document.getElementById("container")
container.innerHTML="<button onclick='buy()'>Buy!</button>"

container.addEventListener("click", function(){
    console.log("Thank you for buying!")
   container.innerHTML="<button onclick='buy()'>Thank you for buying!</button>"

})
//function buy(){
//    container.innerHTML+="<p>Search what you want!</p>"
//}
