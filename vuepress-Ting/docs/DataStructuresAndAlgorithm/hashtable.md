---
title: 雜湊表(hashtable)
date: 2021-07-21
tags:
  - DataStructuresAndAlgorithm
---

## 雜湊表(HashTable)

使用雜湊函式可以快速檢索值

使用 String 類別中的 charCodeAt 方法返回 hash 值

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/pzymb3gf/51/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
class HashTable {
  constructor() {
    this.table = [];
  }
  //雙輸雜湊函式
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % 37;
  }
  put(key, value) {
    let position = this.hash(key);
    console.log(`雜湊值: ${position}`);
    this.table[position] = value;
  }
  get(key) {
    return this.table[this.hash(key)];
  }
  remove(key) {
    let position = this.hash(key);
    this.table[position] = undefined;
  }
}

let hashtable1 = new HashTable();
hashtable1.put('Chocolate', 100);
console.log(hashtable1.get('Chocolate'));
```

## 線性探測(Linear probing)

鍵有時候會有一樣的雜湊值，所以會使用線性探測法來避免衝突

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/2mrq65oy/63/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTableLinearProbing {
  constructor() {
    this.table = [];
  }
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % 37;
  }
  //如果位置為undefined表示這位置還沒有元素，但如果這位置被佔走就index++，直到這位置沒有任何元素才會把
  put(key, value) {
    let position = this.hash(key);
    if (this.table[position] === undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (this.table[index] !== undefined) {
        index++;
      }
      this.table[index] = new ValuePair(key, value);
    }
  }
  get(key) {
    let position = this.hash(key);
    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
    return undefined;
  }
  remove(key) {
    let position = this.hash(key);
    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[position] = undefined;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          this.table[index] = undefined;
        }
      }
    }
    return undefined;
  }
}

let hashtable1 = new HashTableLinearProbing();
hashtable1.put('Strawberry', 45);
console.log(hashtable1.get('Strawberry'));
console.log(hashtable1.remove('Strawberry', 45));
```
