/**
 * 平均情况O(n^2) 最好情况O(n) 最坏情况O(n^2) 稳定
 * @param arr
 * @returns {*}
 */

// 大的往后冒
const bubbleSort = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

// 小的往前冒
const bubbleSort2 = arr => {
    for (let i = 0, length = arr.length; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}


const bubbleSort3 = arr => {
    let swapped = false;
    for (let i = arr.length - 1; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
};

console.log(bubbleSort([4, 9, 7, -4, 10]));
console.log(bubbleSort2([4, 9, 7, -4, 10]));
console.log(bubbleSort3([4, 9, 7, -4, 10]));
