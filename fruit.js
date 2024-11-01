let fruits=["Apple","Orange","Apple","Apple","Orange"]
let appleShelf=document.getElementById("apple-shelf")
let orangeSelf=document.getElementById("orange-shelf")

function sortFruit(){
    for(let i=0;i<fruits.length;i++){
        if(fruits[i]==="Apple"){
            appleShelf.textContent+="\u{1F34E}"
        }
        else if(fruits[i]=="Orange"){
            orangeSelf.textContent+="\u{1F34A}"
        }
    }
}
sortFruit()