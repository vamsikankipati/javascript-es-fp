/*
--The first phase of any standard language would always be tokenizing or lexing.
--Shadowing - Inner identifier shadows the outer identifier
--'window' is a global object in browser
--cheating lexical scope leads to poor performance
--
*/

//Shadowing and Cheating Lexical Scope
function shadowing(str, a) {
  //this can modify existing lexical scope at runtime and hence will throw an error in SonarLint
  //eval(str); // cheating lexical scope  ---- Commented out to avoid SonarLint error
  console.log(a, b);
}

var b = 2;
//this runs successfully without any errors
shadowing("var b = 4", 1); //output: 1 4
