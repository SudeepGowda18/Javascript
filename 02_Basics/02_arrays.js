const marvel_heros = ["captainamerica","iron man", "spiderman"]
const dc_heros = ["batman","superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const newHeros = marvel_heros.concat(dc_heros)
console.log(newHeros);

const anotherarray = [1,2,3,[4,5,6,[7,8,9]]]
const realanotherarray = anotherarray.flat(Infinity)

console.log(realanotherarray);

console.log(Array.isArray("Sudeep"))
console.log(Array.from('Sudeep'));

let one = 1
let two = 2
let three = 3
console.log(Array.of(one,two,three));
