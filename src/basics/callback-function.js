// Any function that is passed as an argument

// let fn = (arr => arr[0]) => {
// 	return arr *
// }

// delay this function for 1000ms
let before = num => {
	setTimeout(function() {
		console.log('before: ', num);
	}, 100)
}

let after = num => {
	console.log('after: ', num);
}

before(5);
after(10)

// writing callback
function improveCodingStandards(programmingLanguage, callback) {
  console.log(`Started my ${programmingLanguage} coding practice.`);
  callback();
}
function taskAccomplished(){
  console.log('Done with my coding practice');
}

// making a callback as a function argument
improveCodingStandards('JavaScript', taskAccomplished);