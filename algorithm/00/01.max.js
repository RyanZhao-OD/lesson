const nums = [1, -3, 4, 9, -5];

const max = arr => Math.max(...nums);

const max1 = arr => arr.reduce((prev, cur) => Math.max(prev, cur));

const max2 = arr => {
    let tempMax = arr[0];
    for (let i = 1, length = arr.length; i < length; i++ ) {
        (arr[i] > tempMax) && (tempMax = arr[i]);
    }
    return tempMax;
};

console.log(max(nums));
console.log(max1(nums));
console.log(max2(nums));
