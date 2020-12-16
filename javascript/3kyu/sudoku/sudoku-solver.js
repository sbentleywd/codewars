// https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

// Write a function that will solve a 9x9 Sudoku puzzle.
// The function will take one argument consisting of the 2D puzzle array,
// with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy"
// (i.e. determinable; there will be no need to assume and test
// possibilities on unknowns) and can be solved with a brute-force approach.

const sudoku = (arr) => {
	// for a given cell return all possible digits
	const checkAvailable = (row, col) => {
		const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const takenDigits = checkRow(row)
			.concat(checkCol(col))
			.concat(checkSquare(row, col));
		const possibleDigits = allDigits.filter((digit) => {
			return !takenDigits.includes(digit);
		});
		return possibleDigits;
	};

	// check all existing digits in a given row
	const checkRow = (row) => {
		const numbers = [];
		for (let i = 0; i < 9; i++) {
			if (arr[row][i] !== 0) numbers.push(arr[row][i]);
		}
		return numbers;
	};

	// check all existing digits in a given column
	const checkCol = (col) => {
		const numbers = [];
		for (let i = 0; i < 9; i++) {
			if (arr[i][col] !== 0) numbers.push(arr[i][col]);
		}
		return numbers;
	};

	// check all existing digits in a given 3 * 3 square
	const checkSquare = (row, col) => {
		const numbers = [];
		const rowLower = Math.floor(row / 3) * 3;
		const rowUpper = rowLower + 2;
		const colLower = Math.floor(col / 3) * 3;
		const colUpper = colLower + 2;

		for (let i = rowLower; i <= rowUpper; i++) {
			for (let j = colLower; j <= colUpper; j++) {
				if (arr[i][j] !== 0) numbers.push(arr[i][j]);
			}
		}
		return numbers;
	};

	// loop through all cells, check possible digits. If only one digit possible assign digit and call
	// sudoku recursively with updated array
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (arr[i][j] === 0) {
				const availableDigits = checkAvailable(i, j);
				if (availableDigits.length === 1) {
					arr[i][j] = availableDigits[0];
					return sudoku(arr);
				}
			}
		}
	}
	// if loop ends (no digits left to be updated) return updated array
	return arr;
};

console.log(
	sudoku([
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9],
	])
);

module.exports = {
	sudoku,
};
