// 1-masala
// function countOddArr(arg){
//     let res = 0
//     for (const i of arg) {
//         if(i % 2 == 1){
//             res++
//         }
//     }
//     return res
// }
// console.log(countOddArr([11, 12, 4, 5, 7, 16]));

// 2-masala
// function findNumArr(arg){
//     let res = []
//     for (const element of arg) {
//         if(element > 0){
//             res.push(element)
//         }
//     }
//     return res
// }
// console.log(findNumArr('sa1l0om4'));

// 3-masala
// function countStr(str){
//     let res = 0
//     let resArr = str.split(' ')
//     for (const element of resArr) {
//         res++
//     }
//     return res
// }
// console.log(countStr('salom bolalar yaxshimisizlar'));

// 4-masala
// function findMinArr(arg){
//     let min = arg[0]
//     return arg.findLast(val => arg[0] > val)
// }
// console.log(findMinArr([12, 4, 15, 3, 56]));

// 5-masala
// function reverseStr(str){
//     let res = ''
//     for(let i = str.length - 1; i >= 0; i--){
//         res += str[i]
//     }
//     return res
// }
// console.log(reverseStr('salom'));

// 6-masala
// function findNumIncrease(str){
//     let r = 1
//     for (const element of str) {
//         r *= element
//     }
//     return r
// }
// console.log(findNumIncrease('12345'));

// 7-masala
// function sortArr(arg){
//     return arg.sort(function(a, b){
//         return b - a
//     })
// }
// console.log(sortArr([4, 1, 2, 7, 3, 8]));

// 8-masala
// function deletStr(str, word){
//     return str.split(word).join('')
// }
// console.log(deletStr('salom bolalar', 'bolalar'));

// 9-masala
// function toUpperCaseArr(arg){
//     let res = arg.join(' ')
//     let r = ''
//     for (const element of res) {
//         r += (element.toUpperCase())
//     }
//     return r.split(' ')
// }
// console.log(toUpperCaseArr(['salom', 'olma', 'bola', 'nok']));

// 10-masala
// function filterArr(arg){
//     return arg.filter(val => val % 2 == 1)
// }
// console.log(filterArr([1, 2, 3, 4, 5, 6]));

// 11-masala
// function findMaxLengthArr(arg){
//     let max = arg[0]
//     for (const element of arg) {
//         if(max.length < element.length){
//             max = element
//         }
//     }
//     return max
// }
// console.log(findMaxLengthArr(['salom', 'bolalar', 'yaxshimisizlar', 'kamalak']));

// 12-masala
// function sumArr(arg){
//     return arg.reduce((sum, val) => sum + val, 0)
// }
// console.log(sumArr([1, 2, 3, 4, 5]));

// 13-masala
// function deletManfiy(arg){
//     return arg.filter(val => val > 0)
// }
// console.log(deletManfiy([-12, 4, -5, 23, -87]));

// 14-masala
// function findElementLength(arg){
//     let res = []
//     for (const element of arg) {
//         res.push(element.length)
//     }
//     return res
// }
// console.log(findElementLength(['salom', 'bola', 'yaxshi']));

// 15-masala
// function findKvadratArr(arg){
//     return arg.map(val => val ** 2)
// }
// console.log(findKvadratArr([2, 3, 4, 5]));

// 16-masala
// function reverseArr(arg){
//     return arg.reverse()
// }
// console.log(reverseArr(['salom', 2, 5, 'bola']));

// 17-masala
// function tartiblashArr(arg){
//     return arg.sort()
// }
// console.log(tartiblashArr(['salom', 'bola', 'Xayr', 'Anor']));

// 18-masala
// function tartiblaStr(str){
//     let resArr = str.split(' ')
//     return resArr.sort().join(' ')
// }
// console.log(tartiblaStr('Salom bola Yaxshimi anor Banana'));

// 19-masala
// function toCapitalizeStr(str){
//     return str.split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' ')
// }
// console.log(toCapitalizeStr('salom bolalar yaxshimi'));

// 20-masala
// function filterProbelStr(str){
//     return str.split(' ').join('')
// }
// console.log(filterProbelStr('salom bolalar ishlar yaxshimi'));

// 21-masala
// function teskariQilishStr(str){
//     let res = ''
//     for(let i = str.length - 1; i >= 0; i--){
//         res += str[i]
//     }
//     return res
// }
// console.log(teskariQilishStr('salom bolalar'));

// 22-masala
// function findStrLength(str){
//     let res = []
//     let r = str.split(' ')
//     for (const element of r) {
//         res.push(element.length)
//     }
//     return res.join(', ')
// }
// console.log(findStrLength('salom bola olma anor'));
