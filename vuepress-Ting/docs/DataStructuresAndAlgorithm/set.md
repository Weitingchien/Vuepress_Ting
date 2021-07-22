---
title: 集合(Set)
date: 2021-07-18
tags:
  - DataStructuresAndAlgorithm
---

## 集合(Set)

集合為無順序性且值不重複

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/xjp2s97c/163/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    //如果這個值不存在才新增至物件，存在則直接回傳false
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
  values() {
    return Object.keys(this.items);
  }

  //聯集
  union(otherSet) {
    let unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }
  //交集
  intersection(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }
  //差集
  difference(otherSet) {
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }
  //子集
  subSet(otherSet) {
    let values = this.values();
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
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
//console.log(`sizeLegacy: ${n1.sizeLegacy()}`);

let nA = new Set();
nA.add(1);
nA.add(2);
nA.add(3);
let nB = new Set();
nB.add(2);
nB.add(3);
nB.add(4);
nB.add(5);

console.log('nA: ' + nA.values());
console.log('nB: ' + nB.values());

let unionAB = nA.union(nB);
console.log(unionAB.values());

let intersectionAB = nA.intersection(nB);
console.log(intersectionAB.values());

let differenceAB = nA.difference(nB);
console.log(differenceAB.values());

let subSetAB = nA.subSet(nB);
console.log(subSetAB);
```
