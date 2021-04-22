# Some JavaScript File

记录一些可能会经常使用到的一些文件或者方法。

> 近期将其更新为 ES6 语法，若需要兼容 ES5 语法，请麻烦自行处理。

### 目录结构

文件放置于 `utils` 目录下，目前有以下方法：

##### ConvertToPinyin.js

> **中文转拼音**，Demo 在 `examples/convertToPinyin.html`，思路看[文章](https://www.jianshu.com/p/eb96eac8a091)。

##### CheckIDNumber.js

> 最全面的身份证号码校验，支持 15 位和 18 位的身份证号码。

##### GetSubdomain.js

> 获取当前 URL 的二级域名（如 baidu.com），兼容 IP 地址。可应用于设置 cookie 的 domain 参数

##### IsArray.js

> 判断一个值是否为数组的方法。请注意，利用 `typeof`、`instanceof` 或者原型来判断是太严谨的，具体原因看下这篇[文章](https://www.jianshu.com/p/1dc2af3b56c3)。
