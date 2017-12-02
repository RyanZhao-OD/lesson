//  0  1  2  3  4  5  6  7, 8, 9
// [9, 3, 7, 1, 2, 4]
// [0, 1, 1, 1, 1, 0, 0, 1, 0, 1]
// [1, 2, 3, 4, 7, 9]

//  0  1  2  3  4  5  6  7, 8, 9
// [9, 3, 7, 2, 2, 4]
// [0, 0, 2, 1, 1, 0, 0, 1, 0, 1]
// [2, 2, 3, 4, 7, 9]


const countingSort = (arr, maxValue) => {
    const maxValue = arr.reduce((prev, cur) => {
        return Math.max(prev, cur);
    });
    let bucket = new Array(maxValue + 1);
    let sortedIndex = 0;
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i]]++;
    }

    for (let j = 0; i < bucket.length; i++) {
        while(bucket[i] > 0) {
            arr[sortedIndex] = i;
            sortedIndex++;
            bucket[i]--;
        }
    }

    return arr;
};



console.log(countingSort([9, 3, 7, 2, 2, 4], 9));
