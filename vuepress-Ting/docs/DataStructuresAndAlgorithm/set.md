---
title: 集合(Set)
date: 2021-07-18
tags:
  - DataStructuresAndAlgorithm
---

```javascript
class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length; //只能在現代瀏覽器中運行
  }
  sizeLegacy() {
    let count = 0;
    //可在任何瀏覽器中運行
    for (let num in this.items) {
      if (this.has(num)) {
        count++;
      }
      return count;
    }
  }
}

let n1 = new Set();
n1.add('Alan');
console.log(n1);
n1.remove('Alan');
console.log(n1);
console.log(n1.size());
n1.add('John');
console.log(`size: ${n1.size()}`);
console.log(`sizeLegacy: ${n1.sizeLegacy()}`);
```
