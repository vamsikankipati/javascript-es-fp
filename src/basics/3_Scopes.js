// This is global scoped variable
let a = 3;

// This is a block scoped function
function scope() {
  // This variable 'a' is declared inside a function block
  let a = 4;
  console.log(a);
}

scope(); // 4

console.log(a); // 3

// Immediately Invoked Function Expressions
(function() {
  let a = 10;
  console.log(a);
})(); // 10
