---
title: 動態型別(Dynamic Type)
date: 2020-09-14
tags: ['JavaScript', 'Dynamic Type', '動態型別']
description: 動態型別(Dynamic Type)
---

## 定義
執行階段才進行型別檢查，相反的在撰寫時就可明確定義變數的型別稱為靜態型別

```javascript
var num = 1;
console.log(typeof num);//number
```

```javascript
var name = 'Tony';
console.log(typeof name);//string
```

```javascript
var total = function(){
}

console.log(typeof total);//function
```

```javascript
var num = null;
console.log(typeof num);//object
```

## 顯性轉換(Explicit conversion)

```javascript
var item = 1;
console.log(typeof item);//number
item = 'phone';
console.log(typeof item);//string
```

## 隱性轉換(Implicit conversion)

```javascript
var brand = 1;
console.log(typeof brand);//number
brand = brand + '';
console.log(typeof brand);//string
```

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />