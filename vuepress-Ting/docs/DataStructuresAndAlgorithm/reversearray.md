---
title: 字串轉陣列並反轉
date: 2021-12-24
tags:
  - DataStructuresAndAlgorithm
---

## 字串轉陣列並反轉

這邊會遇到的問題是我們把陣列中的第一個元素與陣列最後一個元素互換位置時，最後面的元素會因為我們已經在 strToArr[i] = strToArr[strToArr.length - i - 1];時交換過，在後續跑到最後一個元素時而導致尾端的元素是錯的，
所以我們會需要宣告一個 temp 變數來暫存先前還沒交換時的元素

最後透過 JavaScript 內建的 reverse 方法並轉成字串比對，來驗證我們實作是否正確

```javascript
function check(str) {
  const strToArr = str.split('');
  return strToArr.reverse().join();
}

function reverseString(str) {
  const strToArr = str.split('');
  for (let i = 0; i < strToArr.length / 2; i++) {
    let temp = strToArr[i]; //暫存
    strToArr[i] = strToArr[strToArr.length - i - 1];
    strToArr[strToArr.length - i - 1] = temp;
  }
  return strToArr.join();
}

console.log(reverseString('hello'));

console.log(
  reverseString('Learningstringchangetoarrayandreverse') ===
    check('Learningstringchangetoarrayandreverse')
);
```
