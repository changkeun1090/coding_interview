/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var diameterOfBinaryTree = function (root) {
	// When the root is null
	if (!root) return 0;

	// Max diameter
	let max = 0;

	// Get A Max diameter from each node.
	const dfs = (node) => {
		// When the node is empty
		if (!node) return 0;

		const left = dfs(node.left);
		const right = dfs(node.right);

		const diameter = left + right;
		max = Math.max(diameter, max);

		return Math.max(left, right) + 1;
	};

	dfs(root);

	return max;
};
