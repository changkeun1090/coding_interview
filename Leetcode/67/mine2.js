var addBinary = function (a, b) {
	const lengA = a.length;
	const lengB = b.length;
	const max = Math.max(lengA, lengB);

	const arrA = a.split("");
	const arrB = b.split("");

	let isOverflow = false;
	const answer = [];

	for (let i = 0; i <= max; i++) {
		const popA = arrA.pop() || 0;
		const popB = arrB.pop() || 0;

		let popSum = Number(popA) + Number(popB);
		if (isOverflow) popSum += 1;

		isOverflow = popSum > 1 ? true : false;

		const el = popSum % 2;
		answer.unshift(el);
	}

	if (answer[0] === 0) answer.shift();

	return answer.join("");
};

const a = "11010";
const b = "1011";

console.log(addBinary(a, b));
