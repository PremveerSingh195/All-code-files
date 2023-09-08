const key = document.getElementById("keyone");

document.addEventListener("keydown" , function(e) {
    key.innerText = "you pressed " + e.key 
})

document.addEventListener("keyup" , function(e){
    key.innerText = "last key up is " + e.key
})