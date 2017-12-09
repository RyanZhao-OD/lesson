/**
 *  1 -> 7 -> 3 -> null
 * insert O(1)  O(n)
 * get    O(n)  O(1)
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
    
    printList(node = this) {
        while (node) {
            console.log(node.val);
            node = node.next;
        }
    }
}
//
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node1.printList();

/**
 * newHead = null
 * next null
 * node 1节点
 *
 * 循环1中：
 * next  2节点
 * node.next =  null   1节点 -> null
 * newHead = 1节点
 *
 *
 * node 2节点
 * 循环2中
 * next 3节点
 *  2节点 -> 1节点 -> null
 *  newHead 2节点
 *
 *  node 3节点
 *  1    2 -> 3 -> 4 -> 5 -> null
 *  5 -> 4 -> 3 -> 2 -> 1 -> null
 *  newHead
 *  next
 *
 *
 *  newHead
 *  1 -> null
 * @param node
 * O(n)
 */
const reverseList = node => {
    // 要返回的节点
    let newHead = null;
    // 每次循环的节点的下一个节点
    let next = null;
    while (node) {
        next = node.next;
        node.next = newHead;
        newHead = node;
        node = next;
    }
    return newHead;
};

const reverseNode = reverseList(node1);
reverseNode.printList();

// 有环
/**
 *  1 -> 2 -> 3 -> 5
 * @param node
 * @returns {boolean}
 */
const hasCycle = node => {
    let fast = node;
    let slow = node;
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        if (!fast) {
            return false;
        }
        fast = fast.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
// node5.next = node2;
// console.log(hasCycle(node1));