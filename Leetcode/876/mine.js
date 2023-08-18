/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	if (!head) return null;

	let num = 0;

	// The number of nodes

	const howManyNodes = (head) => {
		if (!head) return;
		num += 1;
		howManyNodes(head.next);
	};

	howManyNodes(head);

	// Location of middle node

	let middle = Math.floor(num / 2);

	// Return the middle node

	let node = head;
	let count = 0;

	while (count < middle) {
		node = node.next;
		count++;
	}
	return node;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

middleNode(node1);
