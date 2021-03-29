/**
 * 找到单链表中倒数第k个结点。
 * 本例子采用的是数字链表，实际上可以是存储任意类型的值。
 */

// 链表的结点类
class ListNode {
    public value: number | null;
    public next: ListNode | null;
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// 创建一个链表
const createLinkList = (values: number[]) => {
    const head = new ListNode(null, null);
    let preNode = head;
    for (let i = 0; i < values.length; i++) {
        const currentNode = new ListNode(values[i], null);
        preNode.next = currentNode;
        preNode = currentNode;
    }
    return head;
};

// 获得倒数第k个值
const getKthFromLast = (k: number, linkHead: ListNode) => {
    if (k < 1) throw new Error("k值必须大于0");

    // 开始时p1和p2都指向head结点
    let p1 = linkHead, p2 = linkHead;

    // 先将p2移动到k-1的位置
    for (let i = 0; i < k - 1; i++) {
        if (p2.next !== null) {
            p2 = p2.next;     
        } else {
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
const linkList1 = createLinkList([1, 2, 3, 4, 5, 6]);
const linkList2 = createLinkList([-1, -3, -10, 10, -1, 3]);
const linkList3 = createLinkList([]);

console.log(getKthFromLast(1, linkList1));
console.log(getKthFromLast(2, linkList1));
console.log(getKthFromLast(6, linkList1));
console.log(getKthFromLast(7, linkList1));

console.log(getKthFromLast(1, linkList2));
console.log(getKthFromLast(6, linkList2));
console.log(getKthFromLast(8, linkList2));

console.log(getKthFromLast(1, linkList3));
console.log(getKthFromLast(-1, linkList3));
