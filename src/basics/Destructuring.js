
let employee = {
	name: 'Vamsi',
	employeeId: 11001,
	department: 'IT'
};

//Destructuring an object by using object literal to the left side 
//of the assignment operator
const {name, department} = employee;

console.log(name, department);  // Vamsi, IT
