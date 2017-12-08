class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    printList() {
        let cur = this;
        while (cur) {
            console.log(cur);
            cur = cur.next;
        }
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node2.printList();
console.log('----');
/**
 *
 *        2 -> 4 -> 1 -> 5 -> 8 -> 6
 *  next
 *
 *
 */
const reverseList = head => {
    let newHead = null;
    let next = null;
    // 只要不是空
    while (head) {
        next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};

const reverseNode = reverseList(node2);
reverseNode.printList();
