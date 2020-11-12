snail = function (array) {
	let nested = array;
	let resultsArray = [];

	while (nested.length > 0) {
		// add first array to results
		array[0].forEach((num) => resultsArray.push(num));
		nested.shift();

		if (nested.length > 0) {
			// add last elements to results
			for (let i = 0; i < nested.length; i++) {
				const array = nested[i];
				resultsArray.push(array[array.length - 1]);
				array.pop();
			}

			// add last array
			nested[nested.length - 1].reverse().forEach((num) => {
				resultsArray.push(num);
			});
			// resultsArray.push(nested[nested.length - 1].reverse());
			nested.pop();

			// add first element of each array
			for (let i = nested.length - 1; i >= 0; i--) {
				const array = nested[i];
				resultsArray.push(array[0]);
				array.shift();
			}
		}
	}

	return resultsArray;
};

// const array = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// snail(array); // [1,2,3,6,9,8,7,4,5]

snail([
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
]);

/*
	[
		1,
		2,
		3,
		4,
		5,
		10,
		15,
		20,
		25,
		24,
		23,
		22,
		21,
		16,
		11,
		6,
		7,
		8,
		9,
		14,
		19,
		18,
		17,
		12,
		13,
	]
	*/
