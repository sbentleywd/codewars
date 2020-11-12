function bowlingScore(frames) {
	const rollsArray = frames.split("").filter((roll) => {
		return roll !== " ";
	});
	const lastFrameLength = frames.split(" ").slice(9)[0].length;

	// create array of scores not including bonus points
	const parseScores = (rolls) => {
		const scores = rolls.map((roll, index) => {
			if (Number(roll) <= 9) return Number(roll);
			if (roll === "X") return 10;
			if ((roll = "/")) return 10 - rolls[index - 1];
		});
		return scores;
	};
	const scoresArray = parseScores(rollsArray);

	// add bonus points to scores
	const addBonusPoints = (rolls) => {
		let bonusPoints = [];
		for (let i = 0; i < rolls.length - lastFrameLength; i++) {
			if (rolls[i] === "X")
				bonusPoints[i] = scoresArray[i + 1] + scoresArray[i + 2];
			if (rolls[i] === "/") bonusPoints[i] = scoresArray[i + 1];
			if (Number(rolls[i]) <= 9) bonusPoints[i] = 0;
		}
		return bonusPoints;
	};

	const bonusPointsArray = addBonusPoints(rollsArray);
	return scoresArray.concat(bonusPointsArray).reduce((a, b) => a + b);
}

// console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); //20

// console.log(bowlingScore("00 00 00 00 00 00 00 00 00 0/X")); // 171

console.log(bowlingScore("X X X X X X X X X XXX")); // 300
