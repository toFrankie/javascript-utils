/**
 * 判断是否为数组，
 * 有 Babel 的话，请用 Array.isArray() 方法吧。
 */
export const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'
