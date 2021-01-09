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

## 使用建構式(Constructor)自定義原型

::: danger

<p />
<p>使用__proto__是指向一整個原型，並且可以在任何一個原形下使用。</p>
<p>但是使用這個方法容易發生汙染，也不清楚該方法是屬於哪個功能底下，因次開發上通常使用prototype。</p>
<p>(#prototype只存在於function，所以不能對單一物件增加prototype)</p>

:::

```javascript

function Dorayaki(flavors, amount){
   this.flavors = flavors;//this會綁定在新物件上
   this.amount = amount;
 }

Dorayaki.prototype.List = function() {//在Dorayaki新增原型的方法
  console.log(`口味:${this.flavors} 數量:${this.amount}`);
}

const John = new Dorayaki('red bean', 3);//使用new運算子建立一個新的物件(John實體)，並且連結原本的建構物件(Dorayaki)
const Kevin = new Dorayaki('Hokkaido Milk', 5);

John.List();
Kevin.List();

console.log(John, Dorayaki.prototype === John.__proto__);
/*__proto__ 物件
  prototype 函式 */

```

![Prototype02](https://i.imgur.com/JFqIuTd.png)

## 原始型別的包裹物件(Primitive Wrapper)與原型的關聯

```javascript

let name = 'JOHN';
console.log(name.toLowerCase());

```

待更新...

參考文獻:<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>

<Vssue  />