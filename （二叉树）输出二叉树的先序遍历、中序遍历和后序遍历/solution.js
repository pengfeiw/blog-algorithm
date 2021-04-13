/**
 * 二叉树结构
 */
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    /**
     * 先序遍历：根节点->左子节点->右子节点
     */
    BinaryTree.prototype.preorderIterate = function () {
        console.log(this.value);
        if (this.left) {
            this.left.preorderIterate();
        }
        if (this.right) {
            this.right.preorderIterate();
        }
    };
    /**
     * 中序遍历：左子节点->根节点->右子节点
     */
    BinaryTree.prototype.inorderIterate = function () {
        if (this.left) {
            this.left.inorderIterate();
        }
        console.log(this.value);
        if (this.right) {
            this.right.inorderIterate();
        }
    };
    /**
     * 后序遍历：左子节点->右子节点->根节点
     */
    BinaryTree.prototype.postorderIterate = function () {
        if (this.left) {
            this.left.postorderIterate();
        }
        if (this.right) {
            this.right.postorderIterate();
        }
        console.log(this.value);
    };
    return BinaryTree;
}());
// 测试
var leaf1 = new BinaryTree(4, null, null);
var leaf2 = new BinaryTree(8, null, null);
var leaf3 = new BinaryTree(12, null, null);
var leaf4 = new BinaryTree(16, null, null);
var treeL = new BinaryTree(6, leaf1, leaf2);
var treeR = new BinaryTree(14, leaf3, leaf4);
var treeRoot = new BinaryTree(10, treeL, treeR);
console.log("先序遍历");
treeRoot.preorderIterate();
console.log("中序遍历");
treeRoot.inorderIterate();
console.log("后序遍历");
treeRoot.postorderIterate();
