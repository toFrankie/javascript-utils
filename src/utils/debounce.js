/* eslint-disable no-invalid-this */

/**
 * 函数防抖
 * @param {Function} func 要防抖的函数
 * @param {number} wait 需要延迟的毫秒数
 * @param {boolean} immediate 是否立即执行
 * @returns {Function} 返回新的 debounced（防抖动）函数
 */
export const debounce = (func, wait = 0, immediate = false) => {
  let timerId
  return function (...args) {
    if (timerId) clearTimeout(timerId)

    if (immediate && !timerId) {
      func.apply(this, args)
    }

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
