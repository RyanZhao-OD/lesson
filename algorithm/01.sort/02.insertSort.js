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

// 插入排序(折半插入)
const insertSort2 = arr => {
	// 把数组分成两部分，以排好序和未排好序。
	let low;	// 已排好序的头
	let high;	// 以排好序的尾
	let middle;

	for(let i = 1; i < arr.length; i++) {
		low = 0;
		high = i - 1;
		// 当前待排序，要插入数
		const curInsertItem = arr[i];
		while (low <= high) {
			middle = Math.floor((low + high) / 2);
			// arr[i]就是当前循环待排序的元素
			if (arr[middle] > curInsertItem) {
				high = middle - 1;
			} else {
				low = middle + 1;
			}
		}
		// while循环结束后 arr[i]的值应该插在middle处

		for(let j = i - 1; j >= low; j--) {
			arr[j + 1] = arr[j];
		}
		arr[low] = curInsertItem;
		console.log(arr);
	}
	return arr;
}

console.log(insertSort2([4, 9, 7, -4, 10]));
