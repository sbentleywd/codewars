function encodeRailFenceCipher(string, numberRails) {
	if (string === "") return "";
	// set up nested array
	let resultsArray = [];
	for (let j = 0; j < numberRails; j++) {
		resultsArray.push([]);
	}

	let railNo = 0;
	let ascending = true;
	for (let i = 0; i < string.length; i++) {
		// push char to array
		resultsArray[railNo].push(string[i]);

		// set ascending
		if (railNo === numberRails - 1) ascending = false;
		if (railNo === 0) ascending = true;

		// increment railNo
		if (ascending) railNo++;
		else railNo--;
	}
	return resultsArray.map((array) => array.join("")).join("");
}

function decodeRailFenceCipher(string, numberRails) {
	if (string === "") return "";

	// set up variables
	const strLen = string.length;
	const blockLength = 2 + (numberRails - 2) * 2;
	const fullBlocks = Math.floor(strLen / blockLength);
	const remainderLength = strLen - fullBlocks * blockLength;

	// calculate lengths of each rail
	let railLengths = new Array(numberRails);

	for (let i = 0; i < numberRails; i++) {
		if (i === 0 || i === numberRails - 1) {
			railLengths[i] = fullBlocks;
		} else {
			railLengths[i] = 2 * fullBlocks;
		}
	}

	// assign remainder
	let ascending = true;
	let railNo = 0;
	for (let j = 0; j < remainderLength; j++) {
		// increment rail
		railLengths[railNo] += 1;
		// set ascending
		if (railNo === numberRails - 1) ascending = !ascending;

		// increment railNo
		if (ascending) railNo++;
		else railNo--;
	}

	// split string based on railLengths array
	let splitArray = [];
	let start = 0;
	for (let k = 0; k < railLengths.length; k++) {
		splitArray.push(string.slice(start, start + railLengths[k]));
		start += railLengths[k];
	}

	// join arrays
	let ascending2 = true;
	let railNo2 = 0;
	let resultString = "";
	for (let l = 0; l < string.length; l++) {
		// add char to resultString
		resultString = resultString.concat(splitArray[railNo2][0]);
		// remove char from splitArray
		splitArray[railNo2] = splitArray[railNo2].slice(1);

		// set ascending2
		if (railNo2 === numberRails - 1) ascending2 = false;
		if (railNo2 === 0) ascending2 = true;
		// increment railNo2
		if (ascending2) railNo2++;
		else railNo2--;
	}
	return resultString;
}

console.log(
	decodeRailFenceCipher(
		"su in  n  o taour r!Ditaei!aaiefvecia  tlxp d oieosevnri nraau ai er cl,otiqudeaa met!ut ape etoii nmintntP seesmr  pusiitgmoeiraisusaoium  c u is reeVr s.nacerd ubrdou  tivntuAtto neoeru ipf seiij kifitctdfe ,qes eimpeaes msm isia et rmiexlerp",
		19
	)
);
// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));

module.exports = {
	encodeRailFenceCipher,
	decodeRailFenceCipher,
};

/* 

encoding
String: snDeoao! se suni,misqje .cimnutaici u tieuitmrr n o eme sketaua i q oaao  e sauan i ciri ixsefuveisptpdie itia!tv eenuusrn iiilamtitd sst aenlaonuaxrraePiar upcp eeetfAueoi t  ipir  e  cmostiebt datr efstrVugeielndfr !v r,tiemmrdoeesrpm  i o  o
Number: 19

decoding
String: su in  n  o taour r!Ditaei!aaiefvecia  tlxp d oieosevnri nraau ai er cl,otiqudeaa met!ut ape etoii nmintntP seesmr  pusiitgmoeiraisusaoium  c u is reeVr s.nacerd ubrdou  tivntuAtto neoeru ipf seiij kifitctdfe ,qes eimpeaes msm isia et rmiexlerp
Number: 19

Result

Expected: 'snDeoao! se suni,misqje .cimnutaici u tieuitmrr n o eme sketaua i q oaao  e sauan i ciri ixsefuveisptpdie itia!tv eenuusrn iiilamtitd sst aenlaonuaxrraePiar upcp eeetfAueoi t  ipir  e  cmostiebt datr efstrVugeielndfr !v r,tiemmrdoeesrpm  i o  o'
instead got: 'snDeoao! somVbAptismcftrr emnutaici u tieuitmri  dt tpiedsooscr i q oaao  e sauan a .u efaaeein nuiptpdie itia!tv eenus a ei s  ,jotciust aenlaonuaxrraePisseie qmesekrvr ai t  ipir  e  cmostordnuismt  f t eigeielndfr !v r,tiemueuuiiei undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined'


*/
