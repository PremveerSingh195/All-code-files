var delay = 10000;

var countdown = delay/1000;
console.log("total time to generate random number is" ,  countdown , "seconds");


var countdownInterval = setInterval(function timeintervals() {
    countdown-- ;
    console.log("time remaining" , countdown , "seconds" );
} ,  1000
   
)


setTimeout(function randomnumbergenerator() {
    clearInterval(countdownInterval)
    var randomnumber = Math.floor(Math.random()*100);
    console.log(randomnumber);
} , delay)