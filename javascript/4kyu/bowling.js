function bowlingScore(frames) {
	let score = 0;
	const rollsArray = frames.split("").filter((roll) => {
		return roll !== " ";
	});

	// split up frames array into first 9 and last frame
	const framesArray = frames.split(" ");
	const lastFrame = framesArray.slice(9);
	const firstNineFrames = framesArray.slice(0, 9);

	// work out scores for last frame - no bonus points
	const lastFrameScores = lastFrame[0].split("").map((roll, index) => {
		if (Number(roll) || Number(roll) === 0) return Number(roll);
		if (roll === "X") return 10;
		if ((roll = "/")) return 10 - lastFrame[0].split("")[index - 1];
	});
	console.log(lastFrameScores);

	let firstNineByRolls = [];
	// split first nine into individual rolls
	firstNineFrames.forEach((frame) => {
		firstNineByRolls.push(frame.split("")[0]);
		if (frame.split("")[1]) firstNineByRolls.push(frame.split("")[1]);
	});

	// parse sscores for first nine frames, not including bonus points
	const firstNineScores = firstNineByRolls.map((string, index) => {
		if (string === "X") return 10;
		if (string === "/") return 10 - Number(firstNineByRolls[index - 1]);
		if (Number(string) || string === "0") return Number(string);
	});
	console.log(firstNineScores);

	const allRollScores = firstNineScores.concat(lastFrameScores);
	console.log(allRollScores);

	const bonuspoints = [];

	for (let i = 0; i < firstNineByRolls.length; i++) {
		if (firstNineByRolls[i] === "X") {
			bonuspoints[i] = allRollScores[i + 1] + allRollScores[i + 2];
		}
		if (firstNineByRolls[i] === "/") {
			bonuspoints[i] = allRollScores[i + 1];
		}
		if (Number(firstNineByRolls[i]) || Number(firstNineByRolls[i]) === 0)
			bonuspoints[i] = 0;
	}
	console.log(bonuspoints);

	const allScores = bonuspoints
		.concat(firstNineScores)
		.concat(lastFrameScores)
		.reduce((a, b) => {
			return a + b;
		});
	return allScores;
}

// console.log(bowlingScore("11 11 11 11 11 11 1/ 11 11 11")); //20

console.log(bowlingScore("00 00 00 00 00 00 00 00 00 0/X")); // 171

// console.log(bowlingScore("X X X X X X X X X XXX")); // 300
