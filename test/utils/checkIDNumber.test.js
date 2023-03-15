import { checkIDNumber } from '../../src/utils/checkIDNumber'

// 以下身份证号码源自网络，无意冒犯！（侵权删）
const validIDNumber = '330602193306179353'
const validIDNumber2 = '53230119481024002X'
const invalidIDNumber = '220102197407184211' // 220102197407184210
const invalidIDNumber2 = '630102196809160118' // 630102196809160117

describe('checkIDNumber.js 模块', () => {
  test(`正确的二代身份证号码（${validIDNumber}）`, () => {
    expect(checkIDNumber(validIDNumber)).toEqual(true)
  })
  test(`正确的二代身份证号码（${validIDNumber2}）`, () => {
    expect(checkIDNumber(validIDNumber2)).toEqual(true)
  })
  test(`错误的二代身份证号码（${invalidIDNumber}）`, () => {
    expect(checkIDNumber(invalidIDNumber)).toEqual(false)
  })
  test(`错误的二代身份证号码（${invalidIDNumber2}）`, () => {
    expect(checkIDNumber(invalidIDNumber2)).toEqual(false)
  })
})
