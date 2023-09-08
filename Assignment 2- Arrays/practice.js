// const heros = ["akshy" , "salmankhan" , "shahrukhkhan" , "sunny"]

// const heroscontainkhan = heros.filter((Element) => {
//     return Element.endsWith("khan")
// } )

// console.log(heroscontainkhan);


// const bills = [20, 30 ,40 ,50];

// const totalBill = bills.reduce((prev ,curr) => prev + curr , 0)

// console.log(totalBill);

const gameScore = [200 ,300 ,673 ,20 ,290 ,190]

const checkgameScore = gameScore.every((n) => typeof n === "number")

console.log(checkgameScore);