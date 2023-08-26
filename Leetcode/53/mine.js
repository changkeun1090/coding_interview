/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/
// [-2, 1, -3, 4, -1, 2, 1, -5, 4];

/* ----- THIRD TRY ------ */

const maxSubArray = (nums) => {
	// max 변수를 생성하고 최저 정수값을 할당한다.
	let max = Number.MIN_SAFE_INTEGER;

	// nums 배열을 index 0부터 마지막까지 순환시킨다.
	for (let i = 0; i < nums.length; i++) {
		// i 의 index를 제일 첫번재 요소로 포함시켜 만들 수 있는 모든 sub array 구한다.

		// 이전까지의 합을 저장해 둘 변수 prev를 만들고 nums[i]를 할당한다.
		let prev = nums[i];
		max = Math.max(prev, max);
		// prev에 하나 씩 값을 더해 주도록 j를 i+1부터 순환시킨다.
		for (let j = i + 1; j < nums.length; j++) {
			prev += nums[j];
			max = Math.max(prev, max);
		}
	}

	return max;
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
