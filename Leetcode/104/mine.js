var maxDepth = function (root) {
	if (!root) return 0;

	let max = 1;

	const getDepth = (node) => {
		if (!node) return 0;

		let left = getDepth(node.left);
		let right = getDepth(node.right);

		max = Math.max(left, right) + 1;

		return max;
	};

	getDepth(root);

	return max;
};

var maxDepth = function (root) {
	let max = 0;

	const dfs = (node, level) => {
		if (!node) return;
		max = Math.max(level, max);
		dfs(node.left, level + 1);
		dfs(node.right, level + 1);
	};

	dfs(root, 1);

	return max;
};
