/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// https://www.designcise.com/web/tutorial/what-is-the-math-pow-alternative-for-bigint-values-in-javascript

function toBinary(num) {
	num = Number(num);

	if (num === 0) return 0;

	let arr = [];
	let answer = "";
	let quotient = num;

	while (quotient > 0) {
		arr.push(quotient % 2);
		quotient = Math.floor(quotient / 2);
	}

	if (arr[0] === 0) arr[0] = 1;

	for (let el of arr) {
		answer += el;
	}

	return answer;
}

// Math.pow는 큰 숫자와 사용할 때  Error가 발생할 수 있다.

function toDecimal(str) {
	const leng = str.length;
	let sum = 0;

	for (let i = 0; i < leng; i++) {
		sum += Math.pow(2, i) * str[leng - i - 1];
	}

	return sum;
}

var addBinary = function (a, b) {
	const decimalA = toDecimal(a);
	const decimalB = toDecimal(b);

	const sum = decimalA + decimalB;

	return toBinary(sum).toString();
};

let a =
	"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let b =
	"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(a, b));
