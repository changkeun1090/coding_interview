var addBinary = function (a, b) {
	a = a.split("").reverse().join("");
	b = b.split("").reverse().join("");
	len = a.length > b.length ? a.length : b.length;
	result = [];
	for (let i = 0; i < len; i += 1) {
		num1 = Number(a[i] || 0);
		num2 = Number(b[i]) || 0;
		curr = Number(result[i] || 0) + num1 + num2;
		if (curr >= 2) {
			result[i] = curr % 2;
			result.push(1);
		} else {
			result[i] = curr;
		}
	}
	return result.reverse().join("");
};
