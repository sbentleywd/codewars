// 3KYU Battleship field validator updated

function validateBattlefield(field) {
	// table to check against
	const shipPattern = {
		4: 1,
		3: 2,
		2: 3,
		1: 4,
	};
	// table to which ship lengths & quantities will be added
	let table = {};

	// checks value of all cells 1 away diagonally
	const checkDiagonals = (row, col) => {
		const diagonals = [
			[row - 1, col - 1],
			[row - 1, col + 1],
			[row + 1, col - 1],
			[row + 1, col + 1],
		].filter(([a, b]) => {
			// check for valid cell references
			if (a >= 0 && b >= 0) return true;
		});

		for (cell of diagonals) {
			// if a diagonal = 1 then ships are touching and battlefield is not valid
			if (field[cell[0]][cell[1]] === 1) return false;
		}
		return true;
	};

	// determine length of ship and add to table
	const addShip = (row, col) => {
		// check diagonals dont equal 1 (ships are touching)
		if (!checkDiagonals(row, col)) return false;

		let length = 1;
		field[row][col] = "A";

		// determine length
		// check horizontal
		for (let i = 1; i < 4; i++) {
			if (field[row][col + i] === 1) {
				length++;
				field[row][col + i] = "A";
			} else break;
		}
		// check vertical
		for (let j = 1; j < 4; j++) {
			if (field[row + j][col] === 1) {
				length++;
				field[row + j][col] = "A";
			} else break;
		}

		// check length against table, add if doesn't exceed valid quantity
		if (table[length]) {
			if (table[length] === shipPattern[length]) {
				return false;
			} else table[length] += 1;
		} else table[length] = 1;

		// return true if not already returned false
		return true;
	};

	// iterate through each cell in field & call add ship if equal to 1
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (field[i][j] === "A") continue;
			if (field[i][j] === 1) {
				if (!addShip(i, j)) return false;
			}
		}
	}

	// check table against pattern, return true if they match false otherwise
	if (JSON.stringify(table) === JSON.stringify(shipPattern)) return true;
	return false;
}

module.exports = {
	validateBattlefield,
};
