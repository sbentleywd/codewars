function parseInt(string) {
	if (string.toLowerCase() === "one million") {
		return 1000000;
	}

	const arr = string.split(/-| /).filter((word) => {
		return word !== "and";
	});

	const dict = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		ten: 10,
		eleven: 11,
		twelve: 12,
		thirteen: 13,
		fourteen: 14,
		fifteen: 15,
		sixteen: 16,
		seventeen: 17,
		eighteen: 18,
		nineteen: 19,
		twenty: 20,
		thirty: 30,
		forty: 40,
		fifty: 50,
		sixty: 60,
		seventy: 70,
		eighty: 80,
		ninety: 90,
	};

	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] === "hundred" || arr[i] === "thousand") {
			continue;
		}

		const remainder = arr.slice(i + 1);
		if (remainder.indexOf("thousand") !== -1) {
			if (
				remainder.indexOf("hundred") !== -1 &&
				remainder.indexOf("thousand") > remainder.indexOf("hundred")
			) {
				sum += dict[arr[i]] * 100000;
				continue;
			} else {
				sum += dict[arr[i]] * 1000;
				continue;
			}
		}
		if (remainder.indexOf("hundred") !== -1) {
			sum += dict[arr[i]] * 100;
		} else {
			sum += dict[arr[i]];
		}
	}

	return sum;
}
