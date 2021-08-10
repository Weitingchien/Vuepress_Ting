---
title: 排序(sorting)
date: 2021-07-31
tags:
  - DataStructuresAndAlgorithm
---

## 氣泡排序(bubbleSort)

時間複雜度 O(n²)

第一個大於第二個就互換位置

最佳情況只要跑 n 次

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
    let length = this.array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
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

## 選擇排序(selectionSort)

時間複雜度 O(n²)

找到最小值並放在第一位，第二小放在第二位以此類推

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/59s1g6vu/38/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
	selectionSort(){
	  const length = this.array.length;
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

## 插入排序(insertionSort)

時間複雜度 O(n²)

從第二項往前比，是要插入到第一項前面還是保持原本位置，接著比較第三項以此類推

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/qngrLox4/43/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
	insertionSort(){
	  const length = this.array.length;
		for(let i=0; i<length; i++){
		  for(let j=i-1; j>=0; j--){
			  if(this.array[j]>this.array[j+1]){
				  this.swap(j, j+1);
				}
			}
		}
	}
```

## 合併排序(mergeSort)

時間複雜度 O(n log n)

使用分治法(Divide and Conquer): 把問題分成多個子問題，藉由解決每一個子問題來解決整個問題

把陣列對半分割直到剩下一個元素，接下來開始排序，完成排序後把小陣列合併成一個大陣列

![mergeSort](https://i.imgur.com/L2JN5fl.png)

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/8jtcvsz2/117/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

```javascript
	merge(left, right){
	  const result = [];
		let al=0;
		let ar=0;
		while(al < left.length && ar < right.length){
		  if(left[al] < right[ar]){
			  result.push(left[al]);
				al++
			} else{
			  result.push(right[ar]);
				ar++
			}
		}
		return [...result, ...left.slice(al), ...right.slice(ar)];
	}
	mergeSortRecursion(array){
	  const length = array.length;
	  if(length === 1){
		  return array;
		}
		const mid = Math.floor(length / 2);
		const left = array.slice(0, mid);
		const right = array.slice(mid, length);
		return this.merge(this.mergeSortRecursion(left), this.mergeSortRecursion(right));
	}
	mergeSort(){
	  this.array = this.mergeSortRecursion(this.array);
	}
```

## 快速排序(quickSort)

時間複雜度 O(n log n)

陣列中建立一個基準(選中間的元素)，並且建立 2 個指位器
