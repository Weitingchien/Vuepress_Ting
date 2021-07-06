---
title: 陣列(Array)
date: 2021-07-02
tags:
  - DataStructuresAndAlgorithm
---

## Array

陣列是用來儲存我們的資料，每一個就像是學校的置物櫃，人把各自的東西(元素)放到置物櫃裡，然後寫上我們的座號(索引值)

![array01](https://i.imgur.com/8tRmfhL.png)

## 斐波那契數列

從第三個元素開始每一個元素是前兩個元素的和

```javascript
function fibonacciBuild() {
  let fibonacci = [];
  fibonacci[0] = 1;
  fibonacci[1] = 1;
  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  console.log(fibonacci);
}

fibonacciBuild();
```

![fibonacci](https://i.imgur.com/zbvQCEO.png)

## 堆疊

一種遵從後進先出(LIFO)原則的有序集合，使用 push()新增元素或是 pop()移除元素，不管是新增或是刪除都是在堆疊頂部。

### 十進位轉二進位

```javascript
class Stack {
  constructor() {
    this.arr = [];
  }
  push(element) {
    this.arr.push(element);
  }
  pop() {
    return this.arr.pop();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  size() {
    return this.arr.length;
  }
}

function divideBy2(decimalNumber) {
  let remStack = new Stack();
  let binaryString = '';
  while (decimalNumber > 0) {
    remStack.push(Math.floor(decimalNumber % 2));
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(10));
```
