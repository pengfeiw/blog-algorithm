/**
 * 栈：后进先出的数据结构
 */
class Stack {
    value: number[] = [];

    /**
     * 在尾部增加值
     */
    public add(value): void {
        this.value.push(value);
    }

    /**
     * 删除尾部的值
     */
    public delete(): number {
        return this.value.pop();
    }
}

class Queue {
    public stack1: Stack; // 进栈
    public stack2: Stack; // 出栈

    public constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        console.log("constructor execute.");
    }

    /**
     * 在尾部添加值
     */
    public add(...value) {
        value.forEach((item) => {
            this.stack1.add(item);
        });
    }

    /**
     * 移除头部的值
     */
    public delete() {
        if (this.stack2.value.length === 0) {
            // 将stack1中的值移入到stack2
            while(this.stack1.value.length > 0) {
                this.stack2.add(this.stack1.delete());
            }
        }

        return this.stack2.delete();
    }
}

// 测试
const queue = new Queue();
queue.add(1, 2, 3, 4, 5, 6);

let i = queue.delete();
while(i) {
    console.log(i);
    i = queue.delete();
}
