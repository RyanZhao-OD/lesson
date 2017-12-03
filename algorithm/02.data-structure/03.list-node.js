class SingleListNode {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }

    printList() {
        let cur = this.next;
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
