const quickSort = (function func(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 1, length = arr.length; i < length; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [].concat(func(leftArr), [pivot], func(rightArr));
});

// 4, 9, 7, -4, 10
// -4, 4, 9, 7, 10
console.log(quickSort([4, 9, 7, -4, 10]));
