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

## textContent

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

```javascript
//textContent
const btnOne = document.querySelector('#btn');

btnOne.addEventListener('click', message);

function message(){
  btnOne.textContent = '<h1 class="title">Two</h1>';
}
```

顯示:

點擊時按鈕由原本的One變為 ```<h1 class="title">Two</h1>```
![DOM03](https://i.imgur.com/BKdehq1.png)

## innerHTML

```javascript
//innerHTML
const btnOne = document.querySelector('#btn');

btnOne.addEventListener('click', message);

function message(){
  btnOne.innerHTML = `<h1 class="title">Two</h1>`;
}
```

```css
.title{
	color: blue;
}
```

顯示:

點擊時按鈕由原本的One變為藍色的Two
![DOM04](https://i.imgur.com/3jJWvPw.png)

:::tip
</p>
innerHTML:當組完字串後，傳進語法進行渲染。優點:效能快。缺點:資安風險。
</p>
:::

待更新...

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>
[MDN-什麼是DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom "Title")<br/>
