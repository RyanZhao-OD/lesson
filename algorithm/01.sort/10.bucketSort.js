const insertSort = arr => {
	// i不从0开始，从1开始
	// 初始情况：0位置为已经排好序，1以后的还没排好序
	for(let i = 1; i < arr.length; i++) {
		for(let j = i; j > 0; j--) {
			if(arr[j] < arr[j - 1]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}
	}
	return arr;
};

// 分治
/**
 * arr要排序的数组
 * bucketSize每个桶可放的大小
 * 每个桶内部的数用什么方法排序
 */
const bucketSort = (arr, bucketSize = 5, sortBy = insertSort) => {
    if (arr.length === 0) {
        return arr;
    }

    var minValue = arr[0];
    var maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; //输入数据的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]; //输入数据的最大值
        }
    }

    //桶的初始化

    // 桶的个数
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // 利用映射函数将数据分配到各个桶中
    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        sortBy(buckets[i]); //对每个桶进行排序，这里使用了插入排序
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
};


console.log(bucketSort([9, 3, 7, 2, 2, 4]));
