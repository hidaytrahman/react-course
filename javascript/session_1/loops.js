// loops

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// for (let i = 0; i < days.length; i++) {
// 	console.log('Today is ' + days[i]);
// }

// days.forEach((elm) => {
// 	console.log('Hello ', elm);
// });

// map()
days.map((elm) => {
	console.log(` Day is ${elm}`);
});

// live example

// want this transformation for days array
// [
//     {
//         id: 1,
//         title: "Sunday"
//     }
// ]

// lets transform it
const modifiedDays = days.map((item, index) => {
	return {
		id: index + 1,
		title: item,
	};
});

console.log({ modifiedDays });
