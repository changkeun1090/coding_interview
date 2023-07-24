// ChatGTP's Review version of mine

var majorityElement = function (nums) {
	const elementCounts = new Map();

	let maxCount = 0;
	let majorityElement = -1;

	for (const num of nums) {
		const count = (elementCounts.get(num) || 0) + 1;
		elementCounts.set(num, count);

		if (count > maxCount) {
			maxCount = count;
			majorityElement = num;
		}
	}

	if (maxCount > nums.length / 2) {
		return majorityElement;
	} else {
		return -1;
	}
};

/// Boyer–Moore majority vote  ///

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let [candidate, count] = [, 0];

	for (let n of nums) {
		if (count === 0) {
			candidate = n;
		}

		count += candidate === n ? 1 : -1;
	}

	return candidate;
};
