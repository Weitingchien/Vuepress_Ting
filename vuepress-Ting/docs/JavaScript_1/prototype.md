---
title: 原型鍊(Prototype Chain)
date: 2021-01-02
tags:
  - JavaScript
---

# Where is Prototype?

- JavaScript 不像其他物件導向程式語言(Java、C++......)有「類別」(class)，
  但是可以透過原型(prototype-based)達到差不多的功能

- ES6 的 class 只是個語法糖

```javascript
const num = [1, 2, 3];

num.forEach((item, index) => {
  //forEach屬於陣列原型的屬性
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
function Dorayaki(flavors, amount) {
  this.flavors = flavors; //this會綁定在新物件上
  this.amount = amount;
}

Dorayaki.prototype.List = function() {
  //在Dorayaki新增原型的方法
  console.log(`口味:${this.flavors} 數量:${this.amount}`);
};

const John = new Dorayaki('red bean', 3); //使用new運算子建立一個新的物件(John實體)，並且連結原本的建構物件(Dorayaki)
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

- 透過物件建構器把 name 包成 String 的物件，如此便可有屬性及方法呼叫，主要是因為讀取 name.toLowerCase()時會自動轉型，
  回傳後才銷毀物件建構器

```javascript
//執行時會像這樣用建構器把字串包起來，所以才可使用String原型裡面的方法toLowerCase()轉成小寫
let name = new String('JOHN');
console.log(name.toLowerCase());
console.dir(String); //dir可查看物件的屬性
```

![Prototype04](https://i.imgur.com/viVykVY.png)

```javascript
let date = new Date(); //他是一個建構式也是一個函式
console.dir(date); //裡面有各種方法用來取得各式各樣的日期格式
```

![Prototype05](https://i.imgur.com/cDsssQW.png)

## 使用 Object.create()建立物件

```javascript
const library = {
  t01: 'JavaScript',
  t02: 'CSS',
  t03: 'Node.js',
  displayAll: function() {
    return library.t03;
  }
};
let book = Object.create(library);
console.log(book, book.displayAll());
console.log(Object.getOwnPropertyDescriptor(library, 't01'));
```

- 此 book 會繼承原型物件 library 的物件特性，所以可以使用 displayAll 的方法

- 另外 object.create()的第二個參數是屬性描述器(Property descriptor)，透過 Object 的 getOwnPropertyDescriptor 方法可以看到以下內容

- value 為屬性的值、writable:屬性是否可以被更改、enumerable:是否可列舉、configurable:是否可刪除屬性、如果為 false，更改 writable、enumerable、configurable、set、get 的值會出現錯誤。

::: danger

- 關於是否可列舉受影響的語法:for...in、Object.keys()、JSON.stringify()

- Object.create(null, {...})建立的物件，不會有 Object 原生的屬性與方法

:::

![Prototype06](https://i.imgur.com/2z1gon0.png)

## 原型鏈(Prototype Chain)

```javascript
function herbivore(type) {
  this.type = type;
}
herbivore.prototype.introduce = function() {
  console.log(`我叫 ${this.name}`);
};

function horse(name, color) {
  herbivore.call(this, '草食性');
  this.name = name;
  this.color = color;
}
horse.prototype = Object.create(herbivore.prototype);
horse.prototype.constructor = horse; //因為horse的原型繼承於herbivore的原型，會把原本的constructor也覆蓋掉，所以要把本來自己的原型加回來

const Kevin = new horse('Kevin', '棕色');
Kevin.introduce();

console.log(Kevin);
```

![Prototype07](https://i.imgur.com/s35nfVr.png)

## class(ES6)

- 使用class這個語法糖來簡化原來的建構函式。

- 使用extends讓子類別(horse)繼承父類別(herbivore)定義的屬性與方法。

- 使用super()把子類別在constructor的屬性傳給父類別，如果子類別只有定義方法就不需要使用super()。


```javascript

class herbivore{
  constructor(type){
    this.type = type;
  }
  introduce(){
    console.log(`我叫${this.name}`);
  }
}

class horse extends herbivore{
  constructor(name, color){
    const type = '草食性';
    super(type);
    this.name = name;
    this.color = color;
  }
}

const Kevin = new horse('Kevin' , '棕色');
Kevin.introduce();

console.log(Kevin);

```

![Prototype08](https://i.imgur.com/Ildon1K.png)

## class的靜態方法(static)

- 使用static，建立新的物件(Kevin)就不能繼承到此方法。

```javascript
class herbivore{
  constructor(type){
    this.type = type;
  }
  static introduce(){
    console.log(`我叫${this.name}`);
  }
}

class horse extends herbivore{
  constructor(name, color){
    const type = '草食性';
    super(type);//用super呼叫指定的class
    this.name = name;
    this.color = color;
  }
}

const Kevin = new horse('Kevin' , '棕色');
Kevin.introduce();

console.log(Kevin);

```

![Prototype09](https://i.imgur.com/mUxGwms.png)

待更新...

參考文獻:<br/>

![JavaScript](https://i.imgur.com/SyxELUw.jpg)<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html 'Title')<br/>

<Vssue  />
