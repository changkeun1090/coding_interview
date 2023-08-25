/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/
// [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
	// Initialize the max sum...
	let maxSum = nums[0];
	// Traverse all the element through the loop...
	for (let i = 1; i < nums.length; i++) {
		// nums[i] represents the largest sum of all subarrays ending with index i...
		// then its value should be the larger one between nums[i]...
		// nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
		// calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
		let max = Math.max(0, nums[i - 1]);
		nums[i] = max + nums[i];
		// if nums[i] > maxSum then maxSum = nums[i]...
		if (nums[i] > maxSum) maxSum = nums[i];
	}
	return maxSum; // return the contiguous subarray which has the largest sum...
};

/* ----- SECOND TRY ------ */

const maxSubArray2 = (nums) => {
	let max = Number.MIN_SAFE_INTEGER;
	let prev;

	for (let i = 0; i < nums.length; i++) {
		prev = nums[i];

		for (let j = i; j < nums.length; j++) {
			if (i !== j) {
				prev = prev + nums[j];
				max = Math.max(max, prev);
			} else {
				max = Math.max(max, nums[i]);
			}
		}
	}

	return max;
};

/* ----- FIRST TRY ------ */

//  Time limit exceed!!!
var maxSubArray1 = function (nums) {
	if (nums.length === 0) return 0;

	// 변수 max를 생성하고 최소 정수 값을 할당한다.
	let max = Number.MIN_SAFE_INTEGER;

	// 변수 leng을 생성한 뒤 매개변수 nums의 길이를 할당한다.
	let leng = nums.length;

	// i의 값을 "1" 씩 더하면서 "leng"이 될 때까지 순환을 시킨다.
	for (let i = 1; i <= leng; i++) {
		// i의 값만큼 chunk으로 나누어 각 chunk의 합을 구한다.

		for (let j = 0; j + i <= leng; j++) {
			const sum = nums.slice(j, j + i).reduce((a, b) => a + b, 0);
			max = Math.max(sum, max);
		}
	}

	// max를 반환한다.

	return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums1 = [];
console.log(maxSubArray(nums));
