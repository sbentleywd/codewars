const { test } = require("@jest/globals");
const {
	encodeRailFenceCipher,
	decodeRailFenceCipher,
} = require("./rail-fence");

test("encode", () => {
	expect(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)).toBe(
		"WECRLTEERDSOEEFEAOCAIVDEN"
	);
});

test("decode", () => {
	expect(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)).toBe(
		"WEAREDISCOVEREDFLEEATONCE"
	);
});
