var majorityElement = function (nums) {
	const hash = new Map();
	let [max, answer] = [Number.MIN_SAFE_INTEGER];

	for (let el of nums) {
		if (hash.has(el)) {
			hash.set(el, hash.get(el) + 1);
		} else {
			hash.set(el, 1);
		}

		if (hash.get(el) > max) {
			max = hash.get(el);
			answer = el;
		}
	}

	return answer;
};
