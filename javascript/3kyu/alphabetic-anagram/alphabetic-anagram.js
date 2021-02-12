function listPosition(word) {
	//Return the anagram list position of the word

	// create a table tracking each letter's occourance in a string
	const createTable = (word) => {
		const table = {};
		for (let letter of word) {
			if (table[letter]) table[letter] += 1;
			else table[letter] = 1;
		}

		return table;
	};

	// return factorial of a number
	const factorial = (n) => {
		return n != 1 ? n * factorial(n - 1) : 1;
	};

	// return possible combinations of letters in a string
	const possibleCombinations = (str) => {
		const table = createTable(str);
		const duplicates = Object.values(table)
			.map((duplicate) => factorial(duplicate))
			.reduce((a, b) => a * b);

		return factorial(str.length) / duplicates;
	};

	const table = createTable(word);
	const uniqueLetters = Object.keys(table).sort();
	const availableLetters = word.split("");
	const sortedLetters = word.split("").sort();
	let position = 1;
	console.log(table);
	console.log(uniqueLetters);
	console.log(availableLetters);
	console.log(sortedLetters);

	for (let i = 0; i < word.length; i++) {
		for (let j = 0; j < uniqueLetters.length; j++) {
			if (word[i] > uniqueLetters[j]) {
				position += possibleCombinations(
					sortedLetters.slice(1).join("")
				);
			}
		}
	}

	console.log(position);
	return position;
}

listPosition("BABA"); // 5

var testValues = {
	A: 1,
	ABAB: 2,
	AAAB: 1,
	BAAA: 4,
	QUESTION: 24572,
	BOOKKEEPER: 10743,
};
