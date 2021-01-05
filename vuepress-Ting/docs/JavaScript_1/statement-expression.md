---
title: 陳述式(Statement)、表達式(Expression)
date: 2020-09-14
tags:
  - JavaScript
---

## 定義

:::tip
<p />
<p style="font-size:'bold';">陳述式(Statement):不會回傳結果</p>
<p>表達式(Expression):會回傳結果</p>
:::

## 陳述式(Statement)

```javascript
var name;//undefined
```

```javascript
for(let i=0 i<10; i++){

}//Uncaught SyntaxError: Unexpected identifier

```

## 表達式(Expression)

```javascript
name = 'John';//"John"
```

```javascript
1+1//2
```

****

## 函式陳述式(Function Statement)、具名函式(Named Functions)

```javascript
function total(){

}
```

## 函式表達式(Function Expression)、匿名函式(Anonymous Functions)

```javascript
var name = function(){

}
```


## 物件實字(Object literal)
```javascript
var animal = {
    name: 'cat',
}
```

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />