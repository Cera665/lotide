const head = require('./head');
const assertEqual = require('./assertEqual');

console.log(head([1, 2, 3]));  // should return 1 (not an array with 1 in it)
console.log(head([1])); //should return the first element even if it's lonely
console.log(head([])); // should return undefined because it's empty

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));