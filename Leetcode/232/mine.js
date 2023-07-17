var MyQueue = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	const pop = this.stack[0];
	this.stack = this.stack.slice(1);

	return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	if (this.stack.length === 0) return true;

	return false;
};
