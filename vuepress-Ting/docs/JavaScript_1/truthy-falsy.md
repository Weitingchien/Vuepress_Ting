---
title: 真值(Truthy)與假值(Falsy)
date: 2020-09-19
tags:
  - JavaScript
---

```javascript
if (1){
    console.log('真值');//真值
}
else{
    console.log('假值');
}

if (0){
    console.log('真值');
}
else{
    console.log('假值');//假值
}

```

```javascript
//空陣列
if ([]){
    console.log('真值');//真值
}
else{
    console.log('假值');
}
//空物件
if ({}){
    console.log('真值');//真值
}
else{
    console.log('假值');
}
```
```javascript
//null
if (null){
    console.log('真值');
}
else{
    console.log('假值');//假值
}
//undefined
if (undefined){
    console.log('真值');
}
else{
    console.log('假值');//假值
}
```

參考文獻:<br/>
[JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)<br/>
[JavaScript 核心篇](http://markdown.tw/ "Title")

<Vssue  />