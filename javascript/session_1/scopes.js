// Scopes
const GlobalContext = {
	personName: 'Global',
	i: 23,
	isAdmin: false,
};

// global scope

const personName = 'Global';

// functional / local scope
function sayHiToPerson() {
	const localContext = {
		personName: undefined,
	};
	let personName = 'Local';
	console.log(personName);
}

//  example of var
for (var i = 0; i < 23; i++) {
	// do nothing
}
console.log('i:', i);

// temporal deadzone
for (let j = 0; j < 23; j++) {
	// nothing
	// block scope
}
// console.log('j:', j);

// try to access
if (true) {
	let isAdmin = false;
}

// What do you think ?
console.log(isAdmin);

sayHiToPerson();
// console.log(personName);

// override the global variable
// personName = 'XYZ';

function sayBye() {
	console.log(personName);
}

sayBye();

// console.log(personAge);

// block scope
