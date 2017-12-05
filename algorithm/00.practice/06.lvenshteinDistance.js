/**
 *  0  1  2  3  4  5  6  7  8
 *  a  b  c  d  e  f  g  h  i
 *  a  b  d  d  e  f  g  g  i
 * 把edit(i, j)记作：字符串str1从位置0到i的子字符串，
   和字符串str2从位置0到j的子字符串的编辑距离  edit(8, 8)
 *
 *               i                   (i = 0, j != 0)   // 'aaa'  ''
 *               j                   (i != 0, j = 0)   // ''  'aaa'
 *  edit(i, j) = min(
 *                     edit(i, j - 1) + 1,       // 'aacd' 'abce' 删除str2最后一个字符  'aacd' 'abc'
 *                     edit(i - 1, j) + 1,       // 'aacd' 'abce' 新增str2最后一个字符  'aacd' 'abced'
 *                     edit(i - 1, j - 1),       // 'aacd' 'aacd' str1.chatAt(i) str2.chatAt(j)相同
 *                     edit(i - 1, j - 1) + 1    // 'aacd' 'aacd' 替换str2最后一个字符  'aacd' 'aac'
 *               )
 */

let counter = 0;
const lvenshteinDistance = (function _recur(str1, str2) {
    counter++;
    const str1Length = str1.length;
    const str2Length = str2.length;
    if (str2Length === 0) {
        return str1Length;
    } else if (str1Length === 0) {
        return str2Length;
    } else if (str1.charAt(str1Length - 1) === str2.charAt(str2Length - 1)) {
        return _recur(str1.substr(0, str1Length - 1), str2.substr(0, str2Length - 1))
    } else {
        const flag = str1.charAt(str1Length - 1) === str2.charAt(str2Length - 1) ? 0 : 1;
        return Math.min(
            _recur(str1.substr(0, str1Length - 1), str2) + 1,
            _recur(str1, str2.substr(0, str2Length - 1)) + 1,
            _recur(str1.substr(0, str1Length - 1), str2.substr(0, str2Length - 1)) + flag
        );
    }
});

console.log(lvenshteinDistance('aacd', 'abce'));
console.log(counter);
