---
title: 邏輯運算子(Logical operators)、函式預設值(Default value)
date: 2020-09-20
tags:
  - JavaScript
---

### JavaScript-邏輯運算子(Logical operators)
```javascript
console.log( 0 && 1);//0
console.log( 1 && 0);//0
console.log( 0 || 1);//1
console.log( 1 || 0);//1
console.log(![]);//false
console.log( !1 );//false
```

### 函式預設值(Default value)
```javascript
let product = 20000;
function store(money){
  money = parseInt(money);//預防傳入的是字串類型的數字
  money = (money || money === 0)?money : 20000;//三元運算子
  console.log('購買後剩餘' + (product-money) + '元');
}
store(2000);//購買後剩餘18000元
```

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />