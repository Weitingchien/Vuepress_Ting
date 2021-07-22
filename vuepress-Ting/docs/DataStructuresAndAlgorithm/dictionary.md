---
title: 字典(dictionary)
date: 2021-07-21
tags:
  - DataStructuresAndAlgorithm
---

## 字典(dictionary)

字典與集合不同的地方在於它是鍵值對，以下是基於 JavaScript Map 類別的實作

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/ca5xb9h2/97/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
//實作Map類別
class Dictionary {
  constructor() {
    this.items = {};
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  set(key, value) {
    this.items[key] = value;
  }
  get(key) {
    //回傳單個屬性的值
    return this.has(key) ? this.items[key] : undefined;
  }
  keys() {
    //回傳所有鍵的陣列
    return Object.keys(this.items);
  }
  values() {
    //回傳所有值的陣列
    const values = [];
    for (let val in this.items) {
      if (this.has(val)) {
        values.push(this.items[val]);
      }
    }
    return values;
  }
  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }
  clear() {
    //清空物件
    this.items = {};
  }
  size() {
    //把物件轉成陣列並使用陣列的length方法元素的數量
    return Object.keys(this.items).length;
  }
  getItems() {
    //返回一個物件包含所有鍵與值
    return this.items;
  }
}

let d1 = new Dictionary();
d1.set('Book', 'JavaScript');
d1.set('Food', 'pizza');
console.log(d1.values());
console.log(d1.size());
console.log(d1.keys());
console.log(d1.getItems());
```
