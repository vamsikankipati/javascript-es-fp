// let keyword along with Arrow functions
let a = () => {
  console.log("let keyword and Arrow Functions");
}

// let keyword
let message = name => `Hello ${name}`;

// This is run using atom runner package for easier testing. (Alt + R)
console.log(message('Vamsi'));

// let is blockscoped
// var is function scoped

/* At first all the declarations are processed by the
   Javascript engine before executing the code
*/

/* Declaration is pocessed during compilation phase and initialization is
   processed during execution
*/
  var b = 5; // declaration and initialization of variable b


/* Hoisting - variable and function declarations are moved from its
   actual position to the top of the code. Only declarations are hosted always
*/
