function moveZeros(arr) {
	const newArr = arr.filter((element) => {
		return element !== 0;
	});
	const zeroArr = new Array(arr.length - newArr.length).fill(0);

	return newArr.concat(zeroArr);
}

console.log(
	moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
);

// [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0
