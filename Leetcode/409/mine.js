/**
 
처음 각 문자를 Hash로 만들어 Key와 Value를 구하는것 까지는 쉽게 생각할 수 있었다. 

만약 Value가 짝수라면 모두 회문을 만들 수 있을 것이고 ‘5’ 같은 홀수여도 하나를 덜어내면 4개의 문자열로 

회문을 만들 수 있다. 

다만 “aabb”와 “aacbb”와 같이 가운데 홀수 문자 존재 여부에 따라서 두 종류의 회문이 있기 때문에 두 가지 

경우를 모두 생각해야 한다. 

결국 hash에서 값이 홀수인 key의 존재 여부에 따라서 값을 return 할 때 +1을 해주었다.

 */
var longestPalindrome = function (s) {
	let answer = 0;
	let isOdd = false;

	// make a hash

	const hash = new Map();

	for (let el of s) {
		if (hash.has(el)) {
			hash.set(el, hash.get(el) + 1);
		} else {
			hash.set(el, 1);
		}
	}

	// Loop the hash

	hash.forEach((val, key) => {
		if (val % 2 === 1) {
			isOdd = true;
		}

		answer += Math.floor(val / 2);
	});

	// Check 's' is even or odd

	if (isOdd) return answer * 2 + 1;
	return answer * 2;
};
