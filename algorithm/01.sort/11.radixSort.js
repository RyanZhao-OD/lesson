// 从数值每一位进行比较 个位、十位、百位...
const radixSort = (arr, maxDigit) => {
    let counter = [];
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        console.log('---');
        for (let j = 0; j < arr.length; j++) {
            // 当前位上的数
            let bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }

        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            var value = null;
            if (counter[j] != null) {
                // 清空counter数组
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
        console.log(arr);
    }
    return arr;
}

console.log(radixSort([
    505,
    8,
    109,
    930,
    63,
    269,
    278,
    83,
    184,
    589
], 3));
