//  4, 1, 3, -1, 5, 6,9


// 1, 3, -1, 4,  5, 6,9
const _getPivotIndex = (arr, start, end) => {
	const pivot = arr[start];
	while (start < end) {
		while (start < end && pivot <= arr[end]) {
			end--;
		}
		arr[start] = arr[end];
		while (start < end && pivot >= arr[start]) {
			start++;
		}
		arr[end] = arr[start];
	}
	arr[start] = pivot;
	return start;
};

const _quickSort = (arr, start, end) => {
	if (start < end) {
		let pivotIndex = _getPivotIndex(arr, start, end);
		_quickSort(arr, start, pivotIndex - 1);
		_quickSort(arr, pivotIndex + 1, end);
	}
	return arr;
};

const quickSort = arr => _quickSort(arr, 0, arr.length - 1);

console.log(quickSort([4, 9, 7, -4, 10]));
