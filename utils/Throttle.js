/* eslint-disable no-invalid-this */

/**
 * 函数节流
 * @param {Function} func 要节流的函数
 * @param {number} wait 需要节流的毫秒数
 * @returns {Function} 返回节流的函数
 */
export const throttle = (func, wait) => {
  let prev = 0
  let timerId

  return function (...args) {
    const now = Number(new Date()) // +new Date()

    // 保证每次触发都清除定时器，避免一些边界 Case 也会执行两遍
    if (timerId) clearTimeout(timerId)

    if (now >= prev + wait) {
      prev = now
      func.apply(this, args)
    } else {
      timerId = setTimeout(() => {
        prev = now
        func.apply(this, args)
      }, wait)
    }
  }
}
