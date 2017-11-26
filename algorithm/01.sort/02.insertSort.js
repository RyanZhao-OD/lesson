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
}

console.log(insertSort([4, 9, 7, -4, 10]));
