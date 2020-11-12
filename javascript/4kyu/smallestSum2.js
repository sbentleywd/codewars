function solution(numbers) {
	return numbers.length * numbers.reduce((p, c) => gcd(p, c));
}

function gcd(a, b) {
	if (b === 0) return a;
	else return gcd(b, a % b);
}

console.log(solution([6, 9, 21]));
