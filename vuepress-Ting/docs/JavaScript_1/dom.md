---
title: 文件物件模型 DOM (Document Object Model) 、BOM (Browser Object Model)
date: 2021-03-02
tags: ['JavaScript', 'DOM','BOM']
---

# DOM?
HTML的各個標籤，都定義成物件，且最終會形成一個樹狀結構。
待更新...

## querySelector

- 選取id(#)或class元素(.)

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
待更新...

## innerText、textContent

待更新...
