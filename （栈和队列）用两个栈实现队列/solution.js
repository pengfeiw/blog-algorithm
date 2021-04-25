/**
 * 栈：后进先出的数据结构
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.value = [];
    }
    /**
     * 在尾部增加值
     */
    Stack.prototype.add = function (value) {
        this.value.push(value);
    };
    /**
     * 删除尾部的值
     */
    Stack.prototype["delete"] = function () {
        return this.value.pop();
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        console.log("constructor execute.");
    }
    /**
     * 在尾部添加值
     */
    Queue.prototype.add = function () {
        var _this = this;
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        value.forEach(function (item) {
            _this.stack1.add(item);
        });
    };
    /**
     * 移除头部的值
     */
    Queue.prototype["delete"] = function () {
        if (this.stack2.value.length === 0) {
            // 将stack1中的值移入到stack2
            while (this.stack1.value.length > 0) {
                this.stack2.add(this.stack1["delete"]());
            }
        }
        return this.stack2["delete"]();
    };
    return Queue;
}());
// 测试
var queue = new Queue();
queue.add(1, 2, 3, 4, 5, 6);
var i = queue["delete"]();
while (i) {
    console.log(i);
    i = queue["delete"]();
}
