---
title: 提升(Hoisting)
date: 2020-09-10
tags:
  - JavaScript
---

先來看下面2行的程式碼，先後順序調換會產生甚麼結果

```javascript
var animal = 'cat';
console.log(animal);
```

```javascript
console.log(animal);
var animal = 'cat';
```

第一個的console.log結果會是cat，而第二個的console.log結果卻是undefined，
這是因為執行環境建立時會有2個步驟，在創造階段時(Creation Phase)(第1個步驟)會把記憶體空間準備好給變數，他的值會是在執行階段(Execution Phase)(第二個步驟)時才會賦予給變數

## 程式碼運行時(變數宣告與賦值)

```javascript
//創造階段
var animal;
//執行
animal = 'cat';
console.log(animal);//cat
```

```javascript
//創造階段
var animal;
//執行
console.log(animal);//undefined
animal= 'cat';
```
這樣拆解我們可以發現第二個部分的程式碼宣告animal這個變數，下行就馬上執行console.log，但此時我們還沒有賦值給他，所以就會是undefined

****

那如果換成函式陳述式會變成怎樣呢?

```javascript
people();
function people(){
    var name = 'Tony';
    console.log('我的名字是'+ name);
}
```

## 程式碼運行時(函式陳述式)

```javascript
//創造階段
function people(){
    var name = 'Tony';
    console.log('我的名字是'+ name);
}
//執行
people();//我的名字是Tony

```
函式陳述式在創造階段時，記憶體空間就已經包含函式的完整內容

****

函式表達式

```javascript
console.log(house);
var house = function(){
    console.log('Owner:kevin');
}
```

## 程式碼運行時(函式表達式)

```javascript
//創造階段
var house;
console.log(house);//undefined
//執行
house = function(){
    console.log('Owner:kevin');
}
```

console.log執行完才賦值至house變數，所以結果是undefined，那如果要執行這個函式表達式要在哪邊呼叫函式呢?

```javascript
var house;

house = function(){
    console.log('Owner:kevin');//Owner:kevin
}
house();
```

當賦值完成之後再呼叫函式就可以了，結果就會是Owner:kevin

****

## 練習01
```javascript
function book(){
    console.log('jQuery');
}
book();

function book(){
    console.log('RWD');
}
book();
```

此時輸出結果會是jQuery、RWD嗎?

```javascript
//創造階段
function book(){
    console.log('jQuery');
}
function book(){
    console.log('RWD');
}
//執行
book();//RWD
book();//RWD
```
結果會都是RWD，因為函式優先且函式名稱一樣時後者會蓋掉前者

## 練習02

```javascript
function fruit() {
	console.log('apple');
}
var fruit; 
fruit() 
fruit = function () {
	console.log('orange');
}
```

```javascript
//創造階段
function fruit() {
	console.log('apple');
}
var fruit; 
//執行
fruit();//apple 
fruit = function () {
	console.log('orange');
}
```

函式會提升至變數前面，且只有重複宣告不會覆蓋前面的函式，結果為apple

## 練習03

```javascript
whospen()
function whospen() {
  if (name) {
    name = 'Tony';
  }
}
var name = 'Kevin';
console.log(name);
```

```javascript
//創造階段
function whospen() {
  if (name) {
    name = 'Tony';
  }
}
var name;
//執行
whospen()
name = 'Kevin';
console.log(name);//Kevin
```

函式優先，且會提升至變數前，此時只有宣告name變數沒有賦予值(undefined)便執行whospen函式，所以if條件式判斷會是false，不會執行name = 'Tony'，最後賦予值的是'Kevin'

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />