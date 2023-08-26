/* --------- DP Solution (Kadane’s Algorithm) ---------  */

const maxSubArray = (nums) => {
	let max = Number.MIN_SAFE_INTEGER;

	let prev = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < nums.length; i++) {
		prev = Math.max(nums[i], prev + nums[i]);

		max = Math.max(prev, max);
	}

	return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums1 = [];
console.log(maxSubArray(nums));
