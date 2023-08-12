sayNoTo();

// functions

// function declarations / regular function
// Hoisting

function sayNoTo() {
	console.log('War');
}

sayYesTo();

// function expressions
let sayYesTo = function () {
	console.log('Peace');
};
