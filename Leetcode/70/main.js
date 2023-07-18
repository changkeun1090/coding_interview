/**
 * @param {number} n
 * @return {number}
 */

// mine - recursive

/*

n=5 의 값을 구하려면 `n=3일 때 경우의 수 + n=4일 때 경의 수` 임을 알아차리고 풀이를 시작했다. 
처음 시도는 시간초과로 실패했다. 그리고 매번 새롭게 계산하기 보다 한번 계산한 값을 저장해야 함을 알고 
Map을 사용해 결과값을 저장하고 중복 계산을 방지했다. 다른 사람들의 풀이를 보니 대부분 Array를 사용해 cache를 구현했다. 

*/

var climbStairs = function (n) {
	const map = new Map();
	map.set(1, 1);
	map.set(2, 2);

	const recur = (n) => {
		if (map.has(n)) return map.get(n);

		const newVal = recur(n - 2) + recur(n - 1);

		map.set(n, newVal);

		return newVal;
	};

	return recur(n);
};

// best - recursive

const cache = [];

function climbStairs(n) {
	if (n <= 2) return n;
	if (!cache[n]) {
		cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
	}
	return cache[n];
}

// best - DP

var climbStairs = function (n) {
	let arr = new Array(n + 1);

	arr[1] = 1;
	arr[2] = 2;

	for (let i = 3; i <= n; i++) {
		arr[i] = arr[i - 2] + arr[i - 1];
	}

	return arr[n];
};
