/**
 *
 * @param arr 输入的数组 有序
 * @param n 要找的元素
 * @return n所在arr中的位置
 */
const binarySearch = (arr, n) => {
    // 当前要查找的n的起点
    let low = 0;
    // 当前要查找的n的终点
    let high = arr.length - 1;
    let middle;
    while (low <= high) {
        // 向下取整
        middle = Math.floor((low + high) / 2);
        if (arr[middle] > n) {
            high = middle - 1;
        } else if (arr[middle] < n) {
            low = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
};
// [1,2, 3,4,5.....n]


const arr = [1, 3, 4, 5, 7, 9];
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 7));