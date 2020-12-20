---
title: let、const、var不同的地方
date: 2020-09-11
tags:
  - JavaScript
---
## 暫時性死區(Temporal Dead Zone(TDZ))

```javascript
console.log(num);//Uncaught ReferenceError: Cannot access 'num' before initialization
let num = 1;
```

```javascript
console.log(num);//Uncaught ReferenceError: Cannot access 'num' before initialization
const num = 1;
```

```javascript
console.log(num);//undefined
var num = 1;
```

<br/>

## 程式碼運行時(let、const與var)

```javascript
//創造階段
let num; //(這裡是暫時性死區(TDZ)，與var不同)
console.log(num);//undefined
//執行
num = 1;
```

```javascript
//創造階段
const num;//( 與let一樣有(TDZ) )
//執行
console.log(num);//Uncaught SyntaxError: Missing initializer in const declaration
num = 1;
```

```javascript
//創造階段
var num;
//執行
console.log(num);//undefined
num = 1;
```
let、const也有hoisting的概念(文件不會表明與var的hoisting相同)，在賦值給num變數之前取值會出現錯誤，而如果過了TDZ只有宣告沒有賦值就會是undefined，但const是在宣告時就要同時賦值，否則會出現錯誤

## 驗證有無提升

```javascript
let num = 2;

function total(){
 console.log(num);
 let num = 1;
}

total();//Uncaught ReferenceError: Cannot access 'num' before initialization
```
結果是顯示錯誤訊息，如果沒有提升的話這邊num的值會是2

****

# const、let、var的特性

```javascript
const name = 'Tony';
name = 'John';

console.log(name);//Uncaught TypeError: Assignment to constant variable.
```

```javascript
let name = 'Tony';
name = 'John';
console.log(name);//John
```

```javascript
var name = 'Tony';
name = 'John';
console.log(name);//John
```

const無法對一個常數賦予新的值，例外的部分在後面會提到

<br/>

```javascript
const name = 'Tony';
const name = 'John';
console.log(name);//Uncaught SyntaxError: Identifier 'name' has already been declared
```

```javascript
let name = 'Tony';
let name = 'John';
console.log(name);//Uncaught SyntaxError: Identifier 'name' has already been declared

```

```javascript
var name = 'Tony';
var name = 'John';
console.log(name);//John
```
const、let不能重複宣告、var可以

## const特性的例外

```javascript
const member = {
    name: 'Tony',
}
member.name = 'John';
console.log(member.name);//John
```

const可以修改物件屬性的值

****

## 為何let幾乎可以取代var

```javascript
for(var i=0; i<5; i++){
   console.log(i);//0 1 2 3 4 
}
console.log(i);//5
```

![Scope Chain](https://i.imgur.com/kNJY8ni.png)

```javascript
for(let i=0; i<5; i++){
    console.log(i);//0 1 2 3 4 
}
console.log(i);//Uncaught ReferenceError: i is not defined
```
![Scope Chain](https://i.imgur.com/5eXtiKP.png)

let的有效作用域範圍是在{}裡，且所宣告的i變數不會變成全域變數，所以在外面是無法取到i的值，另外用window查會顯示i is not defined，但是使用var所宣告的i變數，在{}外面還是取得到值，這表示var會汙染i變數，且因為for不是函式，所以這邊使用var所宣告的i是全域變數，用window查會顯示i的值為5

## 使用立即函式(IIFE)可讓var宣告的變數限制在函式裡
```javascript
(function ex (){
    for(var i=0; i<5; i++){
        console.log(i);//0 1 2 3 4 
     }
})();
console.log(i);//Uncaught ReferenceError: i is not defined
```

因為var是函式作用域(function scope)，let、const是區塊作用域(block scope)

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />