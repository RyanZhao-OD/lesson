//LSD Radix Sort
var counter = [];
// https://segmentfault.com/a/1190000003054515?_ea=289827
// 从数值每一位进行比较 个位、十位、百位...
const radixSort = (arr, maxDigit) => {
   var mod = 10;
   var dev = 1;
   for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
       for(var j = 0; j < arr.length; j++) {
           var bucket = parseInt((arr[j] % mod) / dev);
           if(counter[bucket]==null) {
               counter[bucket] = [];
           }
           counter[bucket].push(arr[j]);
       }
       var pos = 0;
       for(var j = 0; j < counter.length; j++) {
           var value = null;
           if(counter[j]!=null) {
               while ((value = counter[j].shift()) != null) {
                     arr[pos++] = value;
               }
         }
       }
   }
   return arr;
}

console.log(radixSort([505, 8, 109, 930, 63, 269, 278, 83, 184, 589]));
