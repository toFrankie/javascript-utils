/**
 * 判断是否为数组
 */
const isArray = arr => {
  // ES6 可使用 Array.isArray() 方法
  return Object.prototype.toString.call(arr) === '[object Array]'
}
