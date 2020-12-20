---
title: 優先性(Precedence)及相依性(Associativity)
date: 2020-09-16
tags:
  - JavaScript
---

### 優先性(Precedence)

優先序較高的運算子會成為優先序較低運算子的運算元

### 相依性(Associativity)

決定運算方向

```javascript
let name = {};

Object.defineProperty(name, 'Tony', {//定義name物件裡的Tony這個屬性
  value: 5,
  writable: false//不可改變其值
});


let a = 5;
a = name.Tony = 3;
console.log(a, name.Tony);//3 5
```

a接受的是表達式回傳的結果，所以會是3，而a和name.Tony沒有任何關連性

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />