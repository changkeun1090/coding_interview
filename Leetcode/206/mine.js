/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
	if (!head) return head;

	let arr = [];

	let pointer = head;

	while (pointer) {
		arr.push(pointer);
		pointer = pointer.next;
	}

	arr.forEach((el) => (el.next = null));
	arr = arr.reverse();

	for (let i = 0; i < arr.length - 1; i++) {
		arr[i].next = arr[i + 1];
	}

	return arr[0];
};
