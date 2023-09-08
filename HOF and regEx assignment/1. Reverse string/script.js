var input = "how are you";

function reversingstr(str) {
    return str.split("").reverse().join("");
}

setTimeout(function reversed() {
   var reversedstr = reversingstr(input);
   console.log(reversedstr); 
} , 2000)