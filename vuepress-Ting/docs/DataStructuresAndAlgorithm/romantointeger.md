---
title: 羅馬數字轉整數
date: 2021-12-26
tags:
  - DataStructuresAndAlgorithm
---

一開始想到是建立 map ，新增 num 跑迴圈去累加 value，但是題目還有其他條件像是 CM = 900, XC = 90 就需要再做別的處理

```javascript
function romanToInteger(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let num = 0;
  for (let char of s) {
    num += map[char];
  }
  return num;
}
//console.log(romanToInteger('LVIII'));

...待新增
```
