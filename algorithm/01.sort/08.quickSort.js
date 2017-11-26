// http://math.hws.edu/eck/jsdemo/sortlab.html 排序演示

/**
 * 平均情况O(nlog2n) 最好情况O(nlog2n) 最坏情况O(n^2) 不稳定
 * @param arr
 * @returns {*}
 */
const quickSort = (function func(arr){
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for(let i = 1, length = arr.length; i < length; i++){
        if(arr[i] > pivot){
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [].concat(func(leftArr), [pivot], func(rightArr));
});

console.log(quickSort([4, 9, 7, -4, 10]));