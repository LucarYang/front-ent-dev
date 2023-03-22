// 搜索
let number=[1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(number.indexOf(10))
number.push(10)
// console.log(number.lastIndexOf(10))
// find
// 在JavaScript中，数组的find()方法用于查找符合条件的第一个数组元素，并返回该元素。
// find()方法接受一个回调函数作为参数，该回调函数接受三个参数：当前元素、当前元素索引和数组本身。
// 回调函数必须返回一个布尔值，以指示当前元素是否符合条件。
// 如果找到符合条件的元素，则find()方法返回该元素，否则返回undefined。
function multipleof3(element,index,array){
    return (element%3==0)
}
console.log(number.find(multipleof3))
console.log(number.findIndex(multipleof3))
//下面是一个使用find()方法查找数组中第一个大于10的元素的示例：
console.log(number.find((e)=>e>10))
// 在上面的示例中，find()方法遍历数组，对于每个元素，回调函数判断该元素是否大于10。当遇到第一个符合条件的元素12时，find()方法返回该元素。

console.log(number.includes(5))
console.log(number.includes(1,5))// 查找索引5之后是否包含1 false


console.log(number.toString())
console.log(number.join('-'))