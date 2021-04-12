/**
 * 题目：从尾到头打印单链表。
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

/**
 * 利用栈的后进先出的特点，从尾到头打印链表
 */
const printLinkReverse = (head: ListNode) => {
    const values: number[] = [];
    let curNode = head.next;
    while(curNode) {
        values.push(curNode.value);
        curNode = curNode.next;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        console.log(values[i]);
    }
};

// 测试
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [-1, -3, -10, 10, -1, 3];
const arr3 = [];

console.log(arr1);
printLinkReverse(createLinkList(arr1));
console.log(arr2);
printLinkReverse(createLinkList(arr2));
console.log(arr3);
printLinkReverse(createLinkList(arr3));
