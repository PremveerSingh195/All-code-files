const keyview = document.getElementById("keyshow");

const textarea = document.getElementById("textbox");


textarea.addEventListener("keypress" , function (e) {
    keyview.innerText = "you have pressed " + e.key
})