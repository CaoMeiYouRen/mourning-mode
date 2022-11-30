# 哀悼模式

哀悼模式，在指定日期自动使网页变黑白

## 安装

```sh
npm i mourning-mode
```
## 使用

```typescript
// 模块化工程
// cjs 版本
require('mourning-mode') // index.js
// esm 版本
import 'mourning-mode' // index.esm.js

```

```html
<!-- 浏览器端 非 esm 版本 index.browser.js -->
<script src="./index.browser.js">
```

```html
<!-- 浏览器端 使用 CDN -->
<script src="https://cdn.jsdelivr.net/npm/mourning-mode@latest/dist/index.browser.min.js"></script>
```

使用后会在以下日期自动启用哀悼模式

```ts
const dateList = [
    '7/7', // 七七事变
    '9/18', // 九一八事变
    '11/30', // 长者祭日
    '12/13', // 国家公祭日
]
```

## 原理

```tsx
document.body.style.filter = 'grayscale(1)'
```

## 配置

```ts
// 修改全局变量 MOURNING_MODEDATE_LIST 即可
 window.MOURNING_MODEDATE_LIST = [
     '11/30'
]
```





