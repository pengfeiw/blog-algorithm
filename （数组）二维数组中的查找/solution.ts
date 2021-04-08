/**
 * 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递
 * 增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * 例如在如下数组中查找9
 *      1 3 5 7
 *      3 6 8 10
 *      5 9 10 12
 *      7 12 14 20
 * 思考：可以从数组右上角进行搜索比较，首先7比9小，所以踢出7所在行。然后在将5与10进行比较，10大于9，所以踢出10所在列，依次类推缩小查找范围，直到找到目标数。（也可以从左下角进行查找）
 */

/**
 * 在二维数组中查找指定值
 * @param arr 二维数组
 * @param value 需要查找的值
 * @returns 如果存在返回索引值, 不存在返回{i: -1, j: -1}
 */
const includes = (arr: number[][], value: number): boolean => {
    // 检查数组长度
    if (arr.length === 0) {
        return false;
    }
    if (arr[0].length === 0) {
        return false;
    }

    // 从数组右上角进行比较
    let i = 0, j = arr[0].length - 1;
    while(i < arr.length && j > 0) {
        if (arr[i][j] === value) {
            return true;
        }
        if (arr[i][j] < value) {
            i++;
        }
        if (arr[i][j] > value) {
            j--;
        }
    }

    return false;
};

// 测试
const arr1: number[][] = [[]];
const arr2: number[][] = [[1, 3, 5, 7], [3, 6, 8, 10], [5, 9, 10, 12], [7, 12, 14, 20]];
const arr3: number[][] = [[1, 3, 5, 7], [3, 6, 8, 10]];

console.log(includes(arr1, 0)); // false
console.log(includes(arr2, -1)); // false
console.log(includes(arr2, 7)); // true
console.log(includes(arr2, 5)); // true
console.log(includes(arr2, 4)); // false
console.log(includes(arr3, -1)); // false
console.log(includes(arr3, 7)); // true
console.log(includes(arr3, 5)); // true
console.log(includes(arr3, 4)); // false
