const Calculator = function () {
	this.evaluate = (string) => {
		let array = string.split(" ").map((str) => {
			return parseInt(str) ? parseInt(str) : str;
		});

		if (array.length === 1) return array[0];

		const process = (operator, array) => {
			while (array.includes(operator)) {
				const pos = array.indexOf(operator);
				if (operator === "+")
					array.splice(pos - 1, 3, array[pos - 1] + array[pos + 1]);
				if (operator === "-")
					array.splice(pos - 1, 3, array[pos - 1] - array[pos + 1]);
				if (operator === "/")
					array.splice(pos - 1, 3, array[pos - 1] / array[pos + 1]);
				if (operator === "*")
					array.splice(pos - 1, 3, array[pos - 1] * array[pos + 1]);
			}
			return array;
		};

		const operators = ["/", "*", "-", "+"];

		operators.forEach((operator) => {
			array = process(operator, array);
		});

		return array[0];
	};
};

const calculate = new Calculator();

// console.log(calculate.evaluate("2 + 3")); // 5
console.log(calculate.evaluate("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8")); // 8

// console.log(parseInt("+"));
