// My solution
function solution(list) {
	let outputStr = "";

	let i = 0;
	let j = 1;
	let tempArray = [];

	const addToString = (arr) => {
		// add temp array content to string
		console.log(arr);
		if (arr.length === 1) outputStr = outputStr.concat(arr[0], ",");
		if (arr.length === 2)
			outputStr = outputStr.concat(arr[0], ",", arr[1], ",");
		if (arr.length > 2)
			outputStr = outputStr.concat(arr[0], "-", arr[arr.length - 1], ",");
	};

	while (j <= list.length) {
		if (j === list.length) {
			if (tempArray.length === 0) tempArray.push(list[j - 1]);
			addToString(tempArray);
			j++;
		}

		let first = list[i];
		let next = list[j];
		tempArray[0] = first;

		if (next === tempArray[tempArray.length - 1] + 1) {
			tempArray.push(next);
			j++;
		} else {
			addToString(tempArray);
			i += tempArray.length;
			j++;
			tempArray = [];
		}
	}

	return outputStr[outputStr.length - 1] === ","
		? outputStr.slice(0, outputStr.length - 1)
		: outputStr;
}

// Best practice solution

function solution2(list) {
	for (var i = 0; i < list.length; i++) {
		var j = i;
		while (list[j] - list[j + 1] == -1) j++;
		if (j != i && j - i > 1)
			list.splice(i, j - i + 1, list[i] + "-" + list[j]);
	}
	return list.join();
}

const test = [
	-6,
	-3,
	-2,
	-1,
	0,
	1,
	3,
	4,
	5,
	7,
	8,
	9,
	10,
	11,
	14,
	15,
	17,
	18,
	19,
	20,
];

const test2 = [-83, -82, -79, -78, -76, -73, -72, -70, -69, -68, -67, -64];

console.log(solution2(test)); // "-6,-3-1,3-5,7-11,14,15,17-20"
