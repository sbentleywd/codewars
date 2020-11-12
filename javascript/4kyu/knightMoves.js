const assert = require("assert").strict;

function knight(start, finish) {
	if (start === finish) {
		return 0;
	}
	// convert column letters to numbers
	const cols = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
	};
	// convert start and end into arrays of numbers

	const startPos = [cols[start[0]], Number(start[1])];
	const endPos = [cols[finish[0]], Number(finish[1])];

	const mapMoves = (position) => {
		// returns an array of all possible positions that can be moved to from a given starting square
		const row = position[1];
		const col = position[0];

		// filter out impossible moves
		return [
			[col + 2, row + 1],
			[col + 2, row - 1],
			[col - 2, row + 1],
			[col - 2, row - 1],
			[col + 1, row + 2],
			[col + 1, row - 2],
			[col - 1, row + 2],
			[col - 1, row - 2],
		].filter((move) => {
			return move[0] < 9 && move[1] < 9 && move[0] > 0 && move[1] > 0;
		});
	};

	let minMoves = Infinity;

	const move = (positions, moves) => {
		let movesTaken = moves + 1;
		if (moves > 5 || movesTaken >= minMoves) return;
		if (minMoves === 1) return 1;

		for (position of positions) {
			// for each position map out the next set of possible positions
			// if they include the finish position then set minimum moves to lower of minMoves or movesTaken
			const successfulMoves = mapMoves(position).filter((pos) => {
				return pos[0] === endPos[0] && pos[1] === endPos[1];
			});
			if (successfulMoves.length === 1) {
				minMoves = Math.min(minMoves, movesTaken);
			}
			// call move recursivley on all possible next positions
			move(mapMoves(position), movesTaken);
		}
	};

	move([startPos], 0);

	return minMoves;
}

let arr = [
	["a1", "c2", 1],
	["a1", "c1", 2],
	["a1", "f1", 3],
	["a1", "f3", 3],
	["a1", "f4", 4],
	["a1", "f7", 5],
];

for (let i of arr) console.log(knight(i[0], i[1]), `should equal ${i[2]}`);
