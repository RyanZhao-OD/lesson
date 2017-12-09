const shellSort = arr => {
    var i,
        k,
        j,
        len = arr.length,
        gap = Math.ceil(len / 2),
        temp;

    while (gap > 0) {
        for (var k = 0; k < gap; k++) {
            var tagArr = [];
            tagArr.push(arr[k]);
            for (i = k + gap; i < len; i = i + gap) {
                temp = arr[i];
                tagArr.push(temp);
                // 插入排序
                for (j = i - gap; j > -1; j = j - gap) {
                    if (arr[j] > temp) {
                        arr[j + gap] = arr[j];
                    } else {
                        break;
                    }
                }
                arr[j + gap] = temp;
            }
        }
        gap = parseInt(gap / 2);
    }
    return arr;
};

console.log(shellSort([4, 9, 7, -4, 10]));
