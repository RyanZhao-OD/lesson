const shellSort = a => {

    // gap为步长，每次减为原来的一半。
    for (let gap = a.length / 2; gap > 0; gap /= 2) {
        // 共gap个组，对每一组都执行直接插入排序
        for (let i = 0 ; i < gap; i++) {
            for (let j = i + gap; j < a.length; j += gap)  {
                // 如果a[j] < a[j-gap]，则寻找a[j]位置，并将后面数据的位置都后移。
                if (a[j] < a[j - gap]) {
                    let tmp = a[j];
                    let k = j - gap;
                    while (k >= 0 && a[k] > tmp) {
                        a[k + gap] = a[k];
                        k -= gap;
                    }
                    a[k + gap] = tmp;
                }
            }
        }

    }
    return a;
};

console.log(shellSort([4, 9, 7, -4, 10]));
