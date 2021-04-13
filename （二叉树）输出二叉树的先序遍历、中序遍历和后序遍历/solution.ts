/**
 * 二叉树结构
 */
class BinaryTree {
    public value: string;
    /**
     * 左子树
     */
    public left: BinaryTree;
    /**
     * 右子树
     */
    public right: BinaryTree;

    public constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    /**
     * 先序遍历：根节点->左子节点->右子节点
     */
    public preorderIterate() {
        console.log(this.value);
        if (this.left) {
            this.left.preorderIterate();
        }
        if (this.right) {
            this.right.preorderIterate();
        }
    }

    /**
     * 中序遍历：左子节点->根节点->右子节点
     */
    public inorderIterate() {
        if (this.left) {
            this.left.inorderIterate();
        }
        console.log(this.value);
        if (this.right) {
            this.right.inorderIterate();
        }
    }

    /**
     * 后序遍历：左子节点->右子节点->根节点
     */
    public postorderIterate() {
        if (this.left) {
            this.left.postorderIterate();
        }
        if (this.right) {
            this.right.postorderIterate();
        }
        console.log(this.value);
    }
}

// 测试
const leaf1 = new BinaryTree(4, null, null);
const leaf2 = new BinaryTree(8, null, null);
const leaf3 = new BinaryTree(12, null, null);
const leaf4 = new BinaryTree(16, null, null);
const treeL = new BinaryTree(6, leaf1, leaf2);
const treeR = new BinaryTree(14, leaf3, leaf4);
const treeRoot = new BinaryTree(10, treeL, treeR);

console.log("先序遍历");
treeRoot.preorderIterate();
console.log("中序遍历");
treeRoot.inorderIterate();
console.log("后序遍历");
treeRoot.postorderIterate();
