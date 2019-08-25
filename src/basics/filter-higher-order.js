// define an array list
let a = [1, 2, 4, 6, 8, 10, 20, 11];

// An higher order function that filters the elements in arrays
// based on the logic and returns boolean predicate
let arr = a.filter(e => e >= 8);

console.log(arr);