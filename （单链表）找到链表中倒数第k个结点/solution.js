/**
 * 找到单链表中倒数第k个结点。
 * 本例子采用的是数字链表，实际上可以是存储任意类型的值。
 */
// 链表的结点类
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
// 创建一个链表
var createLinkList = function (values) {
    var head = new ListNode(null, null);
    var preNode = head;
    for (var i = 0; i < values.length; i++) {
        var currentNode = new ListNode(values[i], null);
        preNode.next = currentNode;
        preNode = currentNode;
    }
    return head;
};
// 获得倒数第k个值
var getKthFromLast = function (k, linkHead) {
    if (k < 1)
        throw new Error("k值必须大于0");
    // 开始时p1和p2都指向head结点
    var p1 = linkHead, p2 = linkHead;
    // 先将p2移动到k-1的位置
    for (var i = 0; i < k - 1; i++) {
        if (p2.next !== null) {
            p2 = p2.next;
        }
        else {
            return null;
        }
    }
    // 同时移动k1和k2,直到p2移动到尾结点
    while (p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1.value;
};
// 测试
var linkList1 = createLinkList([1, 2, 3, 4, 5, 6]);
var linkList2 = createLinkList([-1, -3, -10, 10, -1, 3]);
var linkList3 = createLinkList([]);
console.log(getKthFromLast(1, linkList1));
console.log(getKthFromLast(2, linkList1));
console.log(getKthFromLast(6, linkList1));
console.log(getKthFromLast(7, linkList1));
console.log(getKthFromLast(1, linkList2));
console.log(getKthFromLast(6, linkList2));
console.log(getKthFromLast(8, linkList2));
console.log(getKthFromLast(1, linkList3));
console.log(getKthFromLast(-1, linkList3));
