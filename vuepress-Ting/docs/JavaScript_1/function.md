---
title: 立即函式(IIFE) & 閉包(Closure) & this的運作
date: 2020-12-07
tags:
  - JavaScript
---

## 立即函式-IIFE(Immediately Invoked Functions Expressions)

- 立即執行
- 限制變數的作用域來避免汙染全域環境

```javascript
(function count() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(`第${i}次`);
    }, 1000);
  }
})();

const name = (function(who) {
  return who;
})('Ting');

console.log(name);
```

![Function_IIFE01](https://i.imgur.com/fmrE3q3.png)

## 參數傳遞

```javascript
const a = {};

(function getMoney(b) {
  b.num = 1000;
})(a);
(function show(c) {
  console.log(c);
})(a);
```

![Function_IIFE02](https://i.imgur.com/WV0hXR6.png)

```javascript
function getArg(person, money) {
  //arguments為函式內建的參數，是個類陣列(Array-like)(一樣有length屬性以及index，但無法使用array相關的方法)
  console.log(person, money, arguments);
}
getArg('Ting', 1000, 2000);
```

![Function_IIFE03](https://i.imgur.com/79uN3Af.png)

```javascript
//建立一個物件，並且把此物件傳入changeBookVal
const lib = {
  bookTitle01: 'JavaScript',
  bookTitle02: 'jQuery',
  bookTitle03: 'python'
};

function changeBookVal(obj) {
  obj.bookTitle01 = 'Nodejs';
  console.log(lib);
}
changeBookVal(lib);
```

![Function_IIFE04](https://i.imgur.com/cGw5k7Y.png)

```javascript
//把函式當成一個參數傳入另一個函式，並且由另一個函式所執行稱為callback function
function supermarket(a) {
  console.log(`What do you feel like? ${a}`);
}

function handFoodFn(test) {
  test(`I feel like eating a sandwich`);
}

handFoodFn(supermarket);
```

![Function_IIFE05](https://i.imgur.com/Cm7HVFt.png)

```javascript
function score(num) {
  console.log(num);
  num = 80; //直接覆蓋num的值，才能改變參數原本所定義的值
  console.log(num);
  //函式提升時，不會影響到參數的值，也就是在創造階段時函式提升不會在最前面
  function num() {}
}

score(70);
```

![Function_IIFE06](https://i.imgur.com/HhSCqd3.png)

## 閉包(Closure)

- 存取外層 function 的變數，讓內層 function 的變數不會被釋放，也就是說外層的 function 執行完，外層 function 中的變數並沒有消失，而是留給內層 function 參照使用。

- 如果每 2 秒就印 0~9，需改成 let 或是 IIFE 的方式去存取 i 的值，這邊因為 var 宣告是 function scope，但迴圈不是 function，所以在 setTimeout(()=>{},i\*2000);取 i 的值是取全域下的 i，也就是 for 迴圈跑完時的 i。所以這邊才會是 10，而不是 0、1、2、3......10。

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 2000);
}
```

![Function_closure01](https://i.imgur.com/9xR7TZk.png)

- let 是 block scope，它會在每次迭代時重新宣告變數 i。

```javascript
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 2000);
}
```

![Function_closure02](https://i.imgur.com/FhgoTww.png)

### 函式工廠(Function Factories)s

```javascript
function store(num) {
  let money = num || 5000;
  console.log(money);
  return function product(price) {
    money = money - price; //因範圍鍊所以會向外查找money這個變數，
    console.log(money);
  };
}

let bookCost = store(
  1000
); /*執行一次store，並且宣告bookCost變數參照store函式裡宣告的money變數，導致money記憶體不會被釋放*/
bookCost(100); //100這個參數值是傳進內層的函式，也就是對應至price

let furnitureCost = store(20000);
furnitureCost(15000);
console.log(bookCost === furnitureCost); //參考路徑不同
```

![Function_IIFE07](https://i.imgur.com/iqJMi0e.png)

### 私有方法(Private methods)

```javascript
function store(num) {
  let money = num || 5000;
  console.log(money);
  return {
    increase: function(price) {
      money += price;
    },
    decrease: function(price) {
      money -= price;
    },
    value: function() {
      return money;
    }
  };
}

let bookCost = store(1000);
bookCost.increase(100);
console.log(bookCost.value());

let furnitureCost = store(20000);
furnitureCost.decrease(100);
console.log(furnitureCost.value());
```

![Function_IIFE08](https://i.imgur.com/jT1LSBK.png)

## this:物件的方法調用

- 執行函式時 this 就會產生
- 函式中的 this 不指向該函式
- this 僅與呼叫方法有關

```javascript
function drinks() {
  console.log(this, this.dessert);
}

const food = {
  dessert: 'chocolate',
  drinks: drinks,
  restaurant: {
    drinks: drinks
  }
};

food.drinks();
food.restaurant.drinks();
```

![Function_this-01](https://i.imgur.com/H7MQko4.png)

### this:簡易呼叫(Simple call)

- Simple call 的 this 指向 window

- 直接呼叫的方式屬於 Simple call

```javascript
var cookie = 200;

//callback
function store(sellingPrice) {
  var cookie = 100;
  return sellingPrice(cookie);
}

store(function(cookie) {
  console.log(this.cookie, `售價:${cookie}元`); /*簡易呼叫的this指向window，
  而在函式外層宣告cookie這個變數，會變成全域變數*/
});

var jacket = 2000;

var apparelStore = {
  jacket: 2500,
  discount: function() {
    //var vm = this;//使用一個變數指向this，便可指向apparelStore內的jacket
    setTimeout(function() {
      console.log(this.jacket); //記得上面的var vm = this;註解打開時，這邊不要忘記改成vm.jacket
    }, 1000);
  }
};

apparelStore.discount();
```

![Function_this-03](https://i.imgur.com/6isG2WC.png)

### this: call、apply、bind

```javascript
var pencilbox = 'pen';

var table = {
  book: 3,
  pencilbox: 1
};

function tableAdd() {
  table.eraser = 1;
}

function getAll(id, owner) {
  tableAdd();
  console.log(this, id, owner);
}

getAll.call(table, 01, 'Tony'); //第一個參數是this，替換原本的this
getAll.apply(table, [02, 'John']); //使用陣列把參數代入

var getbind = getAll.bind(table, 03); //bind已經決定this調用方式，所以不是Simple call

getbind('Kevin');
```

![Function_this-04](https://i.imgur.com/tt2KTe5.png)

### this: 練習 01

```javascript
var chocolate = 3;

var cookie = {
  chocolate: 1,
  strawberry: 2,
  butter: 3,
  taste: function(a, b, c) {
    return `${this.chocolate}  ${a}, ${b}, ${c}`;
  }
};

var getCookieRone = cookie.taste;
var getCookieRtwo = getCookieRone.bind(null, 'redBean'); //傳入null或undefined會指向全域
console.log(getCookieRtwo('Matcha', 'peanut'));
```

![Function_this-06](https://i.imgur.com/EMFBxj1.png)

### this: 練習 02

```javascript
var name = 'Kevin';

var person = {
  name: 'John',
  fn: () => {
    console.log(this.name); //箭頭函式的this會指向全域
  }
};

person.fn();
```

![Function_this-07](https://i.imgur.com/dsR5yUe.png)

### this: DOM

```javascript
init();

function init() {
  const main = document.querySelectorAll('li');
  addAllListener(main);
}

function addAllListener(main) {
  for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', changeSize);
  }
}

function changeSize() {
  console.log(this);
  this.style.fontSize = '25px'; //this綁定所點擊的元素
}
```

![img](https://i.imgur.com/Ak1fqYZ.gif)

## Currying(柯理化)

> 柯里化（英語：Currying），又譯為卡瑞化或加里化，是把接受多個參數的函數變換成接受一個單一參數（最初函數的第一個參數）的函數，並且返回接受餘下的參數而且返回結果的新函數的技術。這個技術由克里斯多福·斯特雷奇以邏輯學家哈斯凱爾·加里命名的，儘管它是 Moses Schönfinkel 和戈特洛布·弗雷格發明的。

```javascript
const curry = function multiplication(x) {
  return function(y) {
    return console.log(x * y);
  };
};

let num = curry(2);
num(4);
```

![Function_currying-01](https://i.imgur.com/lUjKjQ8.png)

參考文獻:<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html 'Title')<br/>

[MDN_The arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)<br/>

[MDN_Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)<br/>

[Yakim shu-第十七週 JavaScript 進階：什麼是閉包 Closure 與實際應用](https://yakimhsu.com/project/project_w17_advancedJS_03_Clousure.html)<br/>

[wiki 柯里化](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)

<Vssue  />
