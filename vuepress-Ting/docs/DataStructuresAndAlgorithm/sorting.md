---
title: 排序(sorting)
date: 2021-07-31
tags:
  - DataStructuresAndAlgorithm
---

## 冒泡排序(sorting)

時間複雜度 O(n²)

第一個大於第二個就互換位置

![bubbleSort](https://i.imgur.com/2lwNOmz.gif)

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/n68cbrdh/59/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
class ArrayList {
  constructor() {
    this.array = [];
  }
  insert(item) {
    this.array.push(item);
  }
  toString() {
    return this.array.join();
  }
  // 第一個比第二個大就交換位置
  swap(A, B) {
    [this.array[A], this.array[B]] = [this.array[B], this.array[A]];
  }
  bubbleSort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

const nonSortedArray = arraySize => {
  const array = new ArrayList();
  for (let i = arraySize; i > 0; i--) {
    array.insert(i);
  }
  console.log(`未使用冒泡排序前: ${array}`);
  array.bubbleSort();
  console.log(`冒泡排序後: ${array}`);
  return array;
};

nonSortedArray(4);
```

## 選擇排序(sorting)

時間複雜度 O(n²)

找到最小值並放在第一位，第二小放在第二位以此類推

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/59s1g6vu/38/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript

	selectionSort(){
	  let length = this.array.length;
	  for(let i=0; i<length - 1; i++){
		  let minIndex = i;
			for(let j=i; j<length; j++){
				console.log(minIndex, j);
			  if(this.array[minIndex] > this.array[j]){
				  minIndex = j; //找到最小值，並且將索引並賦值給minIndex
				}
			}
			if(i !== minIndex){
			  console.log(`swap: ${i}, ${minIndex}`);
			  this.swap(i, minIndex);
			}
		}
	}

```
