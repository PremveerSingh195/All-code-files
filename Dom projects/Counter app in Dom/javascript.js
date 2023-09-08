const decrement = document.querySelector(".minusone");
const increment = document.querySelector(".plusone");
const reset = document.querySelector(".Reset");
const defaultvalue = document.querySelector(".displayvalue");

// for decrement

decrement.addEventListener("click", () => {
    const value = Number(defaultvalue.innerText);
    if (value >  0  ) {
        defaultvalue.innerText = value - 1;
    }else{
        alert("negative value not allowed")
    }
});

// increment value

increment.addEventListener("click" , () => {
    const value = Number(defaultvalue.innerText);
    if (value >= 100){
        alert("100+ values are not allowed")
    } else {
        defaultvalue.innerText = value + 1; 
    }
})

//reset value 

reset.addEventListener("click" , () => {
    defaultvalue.innerText= Number(0);
})

