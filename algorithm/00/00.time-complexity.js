const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const printArray = arr => {
    for (let i = 0, length = arr.length; i < length; i++) {
        for (let j = 0, lengthIn = arr[i].length; j < lengthIn; j++ ) {
            console.log(arr[i][j]);
        }
    }
};
printArray(arr);
