let a = () => {
  console.log("let keyword and Arrow Functions");
}

let message = name => `Hello ${name}`;

//This is run using atom runner package for easier testing. (Alt + R)
console.log(message('Vamsi'));
