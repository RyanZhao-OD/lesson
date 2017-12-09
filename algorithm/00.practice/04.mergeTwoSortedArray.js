
const merge = (arr1, arr2) => {
    let arr1Index = 0;
    let arr2Index = 0;

    const result = [];

    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            result.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            result.push(arr2[arr2Index]);
            arr2Index++;
        }
    }
    while (arr1Index < arr1.length) {
        result.push(arr1[arr1Index]);
        arr1Index++;
    }
    while (arr2Index < arr2.length) {
        result.push(arr2[arr2Index]);
        arr2Index++;
    }
    return result;
};

const arr1 = [1, 2, 4, 5];
const arr2 = [-1, 3, 6, 8, 9];
// O(n + m)
console.log(merge(arr1, arr2));
