---
title: 型別(Type)
date: 2020-09-15
tags:
  - JavaScript
---

## 原始型別(Primitive Data Type)

1. Number 數值
2. String 字串
3. Undefined 未定義
4. Boolean 布林
5. Null 空
6. BigInt(new) 整數數值 (new)
7. Symbol(new) Synbol (new)

## BigInt範例

![Symbol()](https://i.imgur.com/87ucdib.png)

在數字後面+n，提供表示大於2的53次方整數

## Symbol範例

```javascript
const people = {
  [Symbol('Kevin')]: {Number:01},
  [Symbol('Kevin')]: {Number:27},
}
console.log(people);
```

![Symbol()](https://i.imgur.com/WRIye8A.png)

有2個一樣的名子但座號不一樣，可使用Symbol()解決屬性衝突

## 原始型別包裹物件

```javascript
let name = 'John  ';
console.log(name.length);//6
```

包裹物件包含了原始型別可以使用的方法，而Null、Undefined沒有包裹物件
John後面+了兩個空白，所以字串總長度是6



```javascript
let name = 'Tony';
console.log(name.substr(0,2));//To
```

substr( , )第一個參數表示從哪個位置開始擷取，第二個參數是擷取長度

## 物件型別(Object Type)

```javascript
let t = 'Tony';
let name = new String(t);
console.log(name, t);
```

__proto__是這個包裹物件的原型，可用的方法都在這個__proto__裡面

![Symbol()](https://i.imgur.com/u2H2U43.png)

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />