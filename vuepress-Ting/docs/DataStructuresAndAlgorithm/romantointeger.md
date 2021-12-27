---
title: Roman to Integer(羅馬數字轉整數)
date: 2021-12-26
tags:
  - DataStructuresAndAlgorithm
---

## Roman to Integer(羅馬數字轉整數)

一開始想到是建立 map ，新增 num 跑迴圈去累加 value，但是題目還有其他條件像是 CM = 900, XC = 90 就需要再做別的處理，
也就是說必須是 CM 的情況下值為 900，不能是 C:100 + M:1000 = 1100，而是要由大-小，另外我們可以知道 M - 2 \* C = M - C

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
  let preChar = '';
  for (let char of s) {
    num += map[char];
    if (map[char] > map[preChar] && preChar !== '') {
      num -= 2 * map[preChar];
    }
    preChar = char;
  }
  return num;
}
console.log(romanToInteger('MCMXCIV'));
```
