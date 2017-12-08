class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    reverseMirror(node = this) {
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            if (node.left) {
                this.reverseMirror(node.left);
            }
            if (node.right) {
                this.reverseMirror(node.right);
            }
        }
    }
}
/**
 *            1
 *          2    3
 *      4      5
 **/
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
console.log(root);

root.reverseMirror();
console.log(root);

// 二叉搜索树
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    height(node = this.root) {
        if (null === node) {
			return 0;
		} else {
			let leftHeight = this.height(node.left);
			let rightHeight = this.height(node.right);
			return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
		}
	}

    insert(val) {
		const node = new TreeNode(val);
		if (this.root == null) {
			this.root = node;
		} else {
			let current = this.root;
			let parent;
			while (true) {
				parent = current;
				if (val < current.val) {
					current = current.left;
					if (current == null) {
						parent.left = node;
						break;
					}
				} else {
					current = current.right;
					if (current == null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

    //调用两次递归遍历二叉树
    preOrder(node = this.root) {
        if (node) {
            console.log(node.val);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    //调用两次递归遍历二叉树
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.val);
            this.inOrder(node.right);
        }
    }

    //调用两次递归遍历二叉树
    postOrder (node = this.root) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.val);
        }
    }

    bfsOrder() {
        const queue = [this.root];
        while (queue.length !== 0) {
            let curNode = queue.shift();
            console.log(curNode.val);
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
    }
}

/**
 *                23
 *             16   45
 *           3 22  37 99
 */
 /*
const tree = new BinarySearchTree();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);
console.log(tree.height());
console.log(tree.root);
console.log('------');
tree.preOrder();
console.log('------');
tree.inOrder();
console.log('------');
tree.postOrder();
console.log('------');
tree.bfsOrder();

*/
