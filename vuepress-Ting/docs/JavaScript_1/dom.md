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

## createElement

```javascript
const link = document.createElement('h1');
link.textContent = 'Hello';

document.querySelector('.wrap').appendChild(link);
```

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
</div>
    <script src="/test18.js"></script>
</body>
</html>
```

:::warning
</p>
innerHTML:當組完字串後，傳進語法進行渲染。優點:效能快。缺點:資安風險。
createElement:以DOM節點處理。優點:安全性高。缺點:效能差。
</p>
:::

![DOM05](https://i.imgur.com/ylhs8wJ.png)
![DOM06](https://i.imgur.com/6N7kgj1.png)

## 資安議題

- XSS(Cross-site scripting):
一旦頁面中有用innerHTML等語法，就有被注入JS程式碼的機會，需要對使用者所輸入的字串驗證，否則惡意人士可以透過它自己寫的script，來做一些動作(例如取得後端使用者的資料等等...)。
### 1. Stored XSS (儲存型):
攻擊者將惡意的程式碼傳送到Server的database中，常見的就是留言板等使用者所輸入的內容，如果沒有確實的檢查就會被當成正常的JavaScript程式碼執行。

### 2. Reflected XSS(反射型)
攻擊者值入惡意程式碼到網站，並誘使被害人點擊該URL，需要使用者點擊該URL才會執行這個惡意程式碼。

待更新...

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")<br/>
[MDN-什麼是DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom "Title")<br/>
