---
title: 文件物件模型 DOM (Document Object Model) 、BOM (Browser Object Model)
date: 2021-03-02
tags: ['JavaScript', 'DOM','BOM']
---

# DOM?
HTML的各個標籤，都定義成物件，且最終會形成一個樹狀結構。

## querySelector

- 選取id(#)或class元素(.)，只針對第一筆的元素

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="test18.css">
    <title>querySelector</title>
</head>
<body>
<div class="wrap">
    <button id="btn">One</button>
</div>
    <script src="/test18.js"></script>
</body>
</html>
```
``` javascript
//點擊網頁上的One按鈕，在console印出Hello。
const btnOne = document.querySelector('#btn');

btnOne.addEventListener('click', message);

function message(){
  console.log('Hello');
}
```
顯示:
![DOM02](https://i.imgur.com/5Jsnk8w.png)

## querySelectorAll

- 選取所有id為btn的按鈕

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="test18.css">
    <title>querySelector</title>
</head>
<body>
<div class="wrap">
    <button id="btn"></button>
    <button id="btn"></button>
    <button id="btn"></button>
    <button id="btn"></button>
    <button id="btn"></button>
</div>
    <script src="/test18.js"></script>
</body>
</html>
```
```javascript
const btnOne = document.querySelectorAll('#btn');

for(let i=0; i<btnOne.length; i++) {
  btnOne[i].innerText=`第${i}個按鈕`;
}

``` 
顯示:
![DOM01](https://i.imgur.com/vbVH1hU.png)

## innerText、textContent

> As innerText is aware of CSS styling, it will trigger a reflow, whereas textContent will not.
- 根據上面MDN提到，可以知道innerText所回傳的是經過CSS渲染的文字，而textContent則不是，它僅僅只有文字內容。

待更新...

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>
[MDN-什麼是DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom "Title")<br/>
[MDN-textContent與innertext的差異](https://developer.mozilla.org/zh-TW/docs/Web/API/Node/textContent "Title")
