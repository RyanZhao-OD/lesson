// http://math.hws.edu/eck/jsdemo/sortlab.html 排序演示

/**
 * 平均情况O(nlog2n) 最好情况O(nlog2n) 最坏情况O(n^2) 不稳定
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {
    if (!arr.length) {
        return [];
    }
    const [pivot, ...rest] = arr;
    return [
        ...quickSort(rest.filter(x => x < pivot)),
        pivot,
        ...quickSort(rest.filter(x => x >= pivot))
    ];
}

console.log(quickSort([4, 9, 7, -4, 10]));