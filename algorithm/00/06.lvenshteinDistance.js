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
  动态规划常见类型： 矩阵型、序列型、双序列型、划分型、区间型、背包型、状态压缩型、树型
aac c
 *             ''    'a'     'a'     'c'     'd'
 *    ''       0      1       2       3       4
 *    'a'      1      0       1       2       3
 *    'b'      2      1       1       2       3
 *    'c'      3      2       2       1       2
 *    'e'      4      3       3       2       2
 */

function lvenshteinDistance(str1, str2) {
    const str1Length = str1.length;
    const str2Length = str2.length;
    const edit = new Array(str1Length + 1);
    for (let i = 0; i < edit.length; i++) {
        edit[i] = new Array(str2Length + 1);
    }
    for (let i = 0; i < edit[0].length; i++) {
        edit[0][i] = i;
    }
    for (let i = 0; i < edit.length; i++) {
        edit[i][0] = i;
    }

    for (let i = 1; i < edit.length; i++) {
        for (let j = 1; j < edit[i].length; j++) {
            const flag = str1.charAt(i) === str2.charAt(j) ? 0 : 1;
            edit[i][j] = Math.min(
                edit[i][j - 1] + 1,
                edit[i - 1][j] + 1,
                edit[i - 1][j - 1] + flag
            );
        }
    }
    return edit[str1Length][str2Length];
};

console.log(lvenshteinDistance('aacd', 'abce'));
console.log(lvenshteinDistance('aacdeee', 'abce'));
