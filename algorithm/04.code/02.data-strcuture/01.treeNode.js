class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    reverseMirror(node = this) {
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            node.left && node.left.reverseMirror();
            node.right && node.right.reverseMirror();
        }
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
// console.log(root);

root.reverseMirror();
console.log(root);

/**
 * 左子树任何节点 一定比父节点小
 * 右子树任何节点 一定比父节点大
 * 平衡二叉搜索树
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
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
}

const tree = new BinarySearchTree();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);