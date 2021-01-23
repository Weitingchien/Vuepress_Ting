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
<p>但是使用這個方法容易發生汙染，也不清楚該方法是屬於哪個功能底下，因此開發上通常使用prototype。</p>
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

![Prototype03](https://i.imgur.com/1c6txaY.png)

- 透過物件建構器把name包成String的物件，如此便可有屬性及方法呼叫，主要是因為讀取name.toLowerCase()時會自動轉型，
回傳後才銷毀物件建構器

```javascript
//執行時會像這樣用建構器把字串包起來，所以才可使用String原型裡面的方法toLowerCase()轉成小寫
let name = new String('JOHN');
console.log(name.toLowerCase());
console.dir(String);//dir可查看物件的屬性

```

![Prototype04](https://i.imgur.com/viVykVY.png)

```javascript

let date = new Date();//他是一個建構式也是一個函式
console.dir(date);//裡面有各種方法用來取得各式各樣的日期格式

```

![Prototype05](https://i.imgur.com/cDsssQW.png)

## 使用Object.create()建立物件

```javascript

const library = {
  t01: 'JavaScript',
  t02: 'CSS',
  t03: 'Node.js',
  displayAll: function(){
    console.log(this.t03);
  }
}
let book = Object.create(library);
console.log(ting);

```

![Prototype06](https://i.imgur.com/2ZelKYk.png)
待更新...

參考文獻:<br/>

![JavaScript](https://i.imgur.com/SyxELUw.jpg)<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>

<Vssue  />