var items = { maggie : 2 , pasta : 3 , parle : 1 , dairymilk : 5};


const indianrupeerate = 80 ;

const changedrates = Object.fromEntries(
    Object.entries(items).map(([item,rates]) => [item,rates*indianrupeerate] )
)

console.log(changedrates);

