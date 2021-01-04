---
title: 原型鍊(Prototype Chain)
date: 2021-01-02
tags:
  - JavaScript
---

# Where is Prototype?

- JavaScript不像其他物件導向程式語言(Java、C++......)有「類別」(class)，
但是可以透過原型(prototype-based)達到差不多的功能

- ES6的class只是個語法糖

```javascript

const num = [1,2,3];

num.forEach((item, index) => {//forEach屬於陣列原型的屬性
  console.log(`item:${item}, index: ${index}`);
});

```

![Prototype01](https://i.imgur.com/4WcM0ji.png)

## 使用建構式自定義原型

```javascript

function Dorayaki(flavors, amount){
   this.flavors = flavors;//this會綁定在新物件上
   this.amount = amount;
 }

Dorayaki.prototype.List = function() {//在Dorayaki新增原型的方法
  console.log(`口味:${this.flavors} 數量:${this.amount}`);
}

const John = new Dorayaki('red bean', 3);//使用new運算子建立一個新的物件，並且連結原本的建構物件(Dorayaki)
const Kevin = new Dorayaki('Hokkaido Milk', 5);

John.List();
Kevin.List();

console.log(John, Dorayaki.prototype === John.__proto__);
/*__proto__ 物件
  prototype 函式 */

```

![Prototype02](https://i.imgur.com/JFqIuTd.png)

待更新...

參考文獻:<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>

<Vssue  />