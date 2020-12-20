---
title: 寬鬆相等(loose equals)、嚴格相等(strict equals)
date: 2020-09-17
tags:
  - JavaScript
---

### 嚴格相等(strict equals)

```javascript
console.log(01 === '01');//false
console.log(01 !== '01');//true
console.log(NaN === NaN);//false
console.log(+0 === -0);//true
console.log(null === undefined);//false
```

比對原本的字也會比對型別

### 寬鬆相等(loose equals)

```javascript
//boolean、字串轉為數值
console.log(01 == '01');//true
console.log(17 == '0x11');//true
console.log(true == '1');//true
console.log('1' == !0);//true
```

```javascript
// Null、Undefined:不會轉為數字型別
console.log(null == 0);//false
console.log(null == undefined);//true
```

```javascript
// 物件與非物件、使用包裹物件轉換
console.log(10 == [10]);//true
```

```javascript
// 物件與物件
let cat = [];
let dog = cat;
console.log(cat == dog);//true
console.log(cat === dog);//true

console.log({} == {});//false
console.log([] == []);//false
```
參考位置不一樣為false

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />