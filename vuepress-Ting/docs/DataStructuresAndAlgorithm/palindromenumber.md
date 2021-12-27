---
title: Palindrome Number(迴文數)
date: 2021-12-25
tags:
  - DataStructuresAndAlgorithm
---

## Palindrome Number(迴文數)

```javascript
function isPalindrome(num) {
  const numToStr = String(num);
  const strToArr = numToStr.split('');
  const fromLeftToRight = numToStr;
  const fromRightToLeft = strToArr.reverse().join('');
  console.log(strToArr, fromLeftToRight, fromRightToLeft);
  if (fromLeftToRight === fromRightToLeft) {
    return true;
  }
  return false;
}

console.log(isPalindrome(10));
```

![9.Palindrome Number](https://i.imgur.com/WLhv3sQ.png)
