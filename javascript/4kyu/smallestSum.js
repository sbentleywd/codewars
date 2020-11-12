// Description
// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

// X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
// X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
// X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
// X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
// X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
// The returning output is the sum of the final transformation (here 9).

// Example
// solution([6, 9, 21]) #-> 9
// Solution steps:
// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3
// Additional notes:
// There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.

function solution(numbers) {
	const checkEqual = (arr) => {
		return (
			arr.filter((item) => {
				return item !== arr[0];
			}).length === 0
		);
	};

	const operate = (arr) => {
		// test if all items in array are the same, if so return sum of array
		if (checkEqual(arr)) {
			return arr[0] * arr.length;
		}

		for (let i = arr.length - 1; i >= 0; i--) {
			let j = i - 1;
			if (arr[i] > arr[j]) {
				arr[i] = arr[i] - arr[j];
				operate(arr);
			}
		}
		return operate(arr.reverse());
	};

	return operate(numbers.sort());
}

const numbers1 = [
	399675,
	25947,
	136107,
	123627,
	531723,
	654267,
	31212,
	247107,
	623808,
	147852,
	410700,
	557283,
	77763,
	412923,
	346800,
	204363,
	43200,
	202800,
	702768,
	255792,
	554700,
	708588,
	361227,
	11163,
	19200,
	198147,
	8112,
	7803,
	82668,
	174243,
	24300,
	531723,
	82668,
	668352,
	145200,
	35643,
	158700,
	24300,
	33708,
	708588,
	384492,
	13068,
	259308,
	34347,
	610203,
	659883,
	250563,
	685452,
	168507,
	266412,
	141267,
	297675,
	16428,
	738048,
	284592,
	32448,
	610203,
	67500,
	711507,
	330672,
	63075,
	694083,
	433200,
	747003,
	241968,
	108300,
	332667,
	175692,
	696972,
	615627,
	357075,
	536787,
	15123,
	519168,
	388800,
	25947,
	120000,
	93987,
	408483,
	186003,
	198147,
	526683,
	747003,
	487227,
	446988,
	393132,
	408483,
	80688,
	410700,
	158700,
	257547,
	238572,
	36963,
	189003,
	750000,
	215472,
	91875,
	71148,
];
console.log(solution(numbers1));

// console.log(solution([6, 9, 21]));
