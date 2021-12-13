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

//浏览器端
// 非 esm 版本 index.browser.js
```

```html
<script src="./index.browser.js">
```

使用后会在以下日期自动启用哀悼模式

```ts
const dateList = [
    '7/7', // 七七事变
    '9/18', // 九一八事变
    '12/13', // 国家公祭日
]
```

## 原理

```tsx
document.body.style.filter = 'grayscale(1)'
```





