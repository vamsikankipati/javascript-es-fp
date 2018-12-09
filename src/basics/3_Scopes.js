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


// Function Declaration and Function Expression are different

// Function Expressions can be invoked immediately by using IIFE

// type IIFE in atom editor and click enter to generate IIFE syntax
(function() {
  'use strict';
  //This way, strict mode can be enabled inside a functions
}());
