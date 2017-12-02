// 归并排序
// 和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，
// 因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。

const _merge = (left, right) => {
   const result = [];
   while (left.length && right.length) {
       if (left[0] <= right[0]) {
           //shift()删除第一个元素
           result.push(left.shift());
       } else {
           result.push(right.shift());
       }
   }

   while (left.length) {
       result.push(left.shift());
   }

   while (right.length) {
       result.push(right.shift());
   }

   return result;
}

//采用自上而下的递归方法
const mergeSort = arr => {
   const len = arr.length;
   if (len < 2) {
       return arr;
   }
   const middle = Math.floor(len / 2);
   const left = arr.slice(0, middle);
   const right = arr.slice(middle);
   return _merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4,3,2,1]));
