# javascript-utils

> 仅供参考学习，实际中应使用如 `lodash-es`、`licia` 等工具库。

存放于 `src/utils` 目录下。

#### 1. convert2Pinyin.js

> 中文转拼音，Demo 在 `examples/convert2Pinyin.html`，思路看[文章](https://github.com/toFrankie/blog/issues/189)。

#### 2. checkIdNumber.js

> 最全面的身份证号码校验，支持 15 位和 18 位的身份证号码（[文章](https://github.com/toFrankie/blog/issues/216)）。

#### 3. getSubdomain.js

> 获取当前 URL 的二级域名（如 baidu.com），兼容 IP 地址。可应用于设置 cookie 的 domain 参数

#### 4. isArray.js

> 判断一个值是否为数组的方法。请注意，利用 `typeof`、`instanceof` 或者原型来判断是太严谨的，具体原因看下这篇[文章](https://github.com/toFrankie/blog/issues/230)。

#### 5. getClass.js

> 判断一个值的类型，可区分“对象”（包括基于 Object 派生的其他类型，如 Object、Array、Function、Date、RegExp 等）。关于 JavaScript 的数据类型分类，看下这篇[文章](https://github.com/toFrankie/blog/issues/239)。

#### 6. deepCopy.js

> 自实现的深拷贝方法，主要面向学习与面试，详细的实现思路请看[文章](https://github.com/toFrankie/blog/issues/246)。
>
> **请注意，如果生产环境使用 `JSON.stringify()` 无法解决你的需求，请使用 [Lodash](https://www.lodashjs.com/) 库的 [`_.cloneDeep()`](https://www.lodashjs.com/docs/lodash.cloneDeep) 方法，那个才叫面面俱到。千万别用我这方法，切记！**

#### 7. debounce.js

> 函数防抖，思路请看[文章](https://github.com/toFrankie/blog/issues/248)。

#### 8. throttle.js

> 函数节流，思路请看[文章](https://github.com/toFrankie/blog/issues/248)。

#### 9. queryUrlValue.js

关于 JavaScript 获取 URL 上的参数值，思路请看[文章](https://github.com/toFrankie/blog/issues/262)。

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├─────────────┬─────────────────────┬────────────────────────┬──────────┬────────────────┬───────┤
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├──────────┬──┼─────────────────────┼────────────────────────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
│          │  │          │          ├─────────────────┬──────│          │                │       │
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          │                 │      │          │                │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h    ?query=string   #hash "
│          │  │          │          │                 │      │          │                │       │
└──────────┴──┴──────────┴──────────┴─────────────────┴──────┴──────────┴────────────────┴───────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
```

#### 10. cookie.js

> 对 Cookie 的增删改查，可以更简便地操作。

持续更新中...
