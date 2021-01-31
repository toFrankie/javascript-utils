# Some JavaScript File

记录一些可能会经常使用到的一些文件或者方法。

> 近期将其更新为 ES6 语法，若需要兼容 ES5 语法，请麻烦自行处理。

### 目录结构

文件放置于 `utils` 目录下，目前有以下方法：

##### ConvertToPinyin.js

> 这个是 16 进制中文 Unicode 编码，主要用于**中文转拼音**。
> 关于中文转拼音思路看文章 [JS 中文转换拼音的实现](https://www.jianshu.com/p/eb96eac8a091)，并且 `examples/convertToPinyin.html` 下写了个 Demo。

##### CheckIDNumber.js

> 最全面的身份证号码校验，支持 15 位和 18 位的身份证号码。

##### GetSubdomain.js

> 获取当前 URL 的二级域名（如 baidu.com），兼容 IP 地址。可应用于设置 cookie 的 domain 参数
