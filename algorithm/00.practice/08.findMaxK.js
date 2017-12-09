/**
 * 找出数组arr中第n大的元素
 * 几种方法
 * 1.排序一遍数组，取第n个
 * 2.排序前n个 遍历剩下的 如果比第n个小 就忽略 否则 插入 并挤出一个元素
 * 3.快速的思想(缺点：需要多次操作不需要用到的元素，如果数组很大，需要排序很多)
 * 4.构建一个最小堆,大小为n 遍历这个数组(O(N))，如果比堆顶部小，重新维护堆结构(O(logn)),辅助存储空间为n(辅助存储空间n)
 */

const _getPivotIndex = (arr, low, high) => {
    let pivot = arr[low]; //这里每次的枢纽元素都取了待排数组的第一个元素，记住是a[low],而不是a[0]
    if (low < high) { 
        while(arr[high] >= pivot && low < high) {
            high--;
        }
        arr[low] = arr[high];

        while(arr[low] <= pivot && low <high) {
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
};

const _quickSortKMax = (arr, low, high, kIndex) => {
    if (low >= high) {
        return arr[low];
    } else {
        //划分子递归数组
        let mid = _getPivotIndex(arr, low, high);
        if(mid > kIndex) {
            //左递归
            return _quickSortKMax(arr, low, mid - 1, kIndex);
        } else if (mid < kIndex) {
            //右递归
            return _quickSortKMax(arr, mid + 1, high, kIndex);
        } else {
            return arr[mid];
        }
    }
};

const findMaxK = (arr, k) => {
    const tempArr = Array.from(arr);
    return _quickSortKMax(tempArr, 0, tempArr.length - 1, tempArr.length - k);
};

//  9, 7, 4 , 1, -3
console.log(findMaxK([1, 4, -3, 9, 7], 5));
