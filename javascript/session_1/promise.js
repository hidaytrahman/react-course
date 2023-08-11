// Promise

// create a function that returns promise resolve
function getUsers() {}

// create promise that returns both based on the conditions
// mock the login process
function doLogin(auth) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (auth) {
				resolve('User is allowed to login');
			} else {
				reject('Sorry, You are unauthorized');
			}
		}, 3000);
	});
}

// access the promises
doLogin(true)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		// do something if the promise got fullfilled (rejected or resolved)
	});
