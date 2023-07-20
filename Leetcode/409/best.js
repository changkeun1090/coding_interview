/*

Hash를 만들고 answer 변수를 만드는것 까지는 동일하다. 다만 answer에 값을 더하는 방식이 다르다.

내 코드에서는 모든 Hash를 만든 뒤 다시 Hash를 순환하면서 

answer에 값을 더해주었다면 아래 코드에서는 Hash를 만드는 과정에서 answer에 값을 더해준다. 

또한 아래 코드에서는 홀수 값의 존재여부는 answer의 값과 s의 길이를 비교한다.

*/

var longestPalindrome = function (s) {
	let answer = 0;
	let hashTable = {};
	for (let char of s) {
		hashTable[char] = (hashTable[char] || 0) + 1;
		if (hashTable[char] % 2 === 0) {
			answer += 2;
		}
	}
	return s.length > answer ? answer + 1 : answer;
};
