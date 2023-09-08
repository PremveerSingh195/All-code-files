const btn = document.getElementById("Press");

const  randomcolor = () => {
    let a = "0123456789ABCDE";
    let b = "#";

    for (let i = 0 ; i<6 ; i++){
        b = b + a[ Math.floor( Math.random()*15)];
    }
    return b;

};

// console.log(randomcolor());

function changerandomColor() {
    document.body.style.backgroundColor=randomcolor();
}

btn.addEventListener("click" , changerandomColor )