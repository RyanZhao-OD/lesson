const arr = [-1, 1, 3, 5, 6, 8];

const binarySearch = (arr, val) => {
    let low = 0;
    let high = arr.length - 1;
    let middle = Math.floor((low + high) / 2);
    while (low < high) {
        if (arr[middle] > val) {
            high = middle - 1;
        } else if (arr[middle] < val) {
            low = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
};

console.log(binarySearch(arr, 1));
