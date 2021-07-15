---
title: 陣列(Array)
date: 2021-07-02
tags:
  - DataStructuresAndAlgorithm
---

## Array

陣列是用來儲存我們的資料，每一個就像是學校的置物櫃，人把各自的東西(元素)放到置物櫃裡，然後寫上我們的座號(索引值)

連續的記憶體空間

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

## 堆疊(Stack)

一種遵從後進先出(LIFO)原則的有序集合，使用 push()新增元素或是 pop()移除元素，不管是新增或是刪除都是在堆疊頂部
拿現實中的例子來比喻的話就像是一疊

### 進制轉換

使用堆疊的原理實作十進位轉任何進位(ex:10 進位轉 8 進位、2 進位、16 進位)

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

function converter(decimalNumber, base) {
  let digits = '0123456789ABCDEF';
  let remStack = new Stack();
  let str = '';
  while (decimalNumber > 0) {
    remStack.push(Math.floor(decimalNumber % base)); //把餘數push到Stack裡的arr陣列，最後this.arr = [0,1,0,1]
    decimalNumber = Math.floor(decimalNumber / base);
  }
  while (!remStack.isEmpty()) {
    str += digits[remStack.pop()]; //使用pop()取堆疊頂部的值並累加字串
  }
  return str;
}

console.log(converter(10, 2));
```

![Stack](https://i.imgur.com/EuHOiEA.png)

## 佇列(Queue)

與堆疊不太一樣，是先進先出(FIFO)的原則，在佇列尾部新增元素，頂部移除元素

前面在堆疊移除元素時是使用 pop()移除推疊頂部，在佇列則是使用 shift()移除佇列的第一個元素

日常中有許多符合佇列的例子，像是看電影排隊時，會優先讓早到的人入場

```javascript
class QueueItems {
  constructor(priority, element) {
    this.priority = priority;
    this.element = element;
  }
}

class PriorityQueue {
  constructor() {
    this.cache = [];
  }
  isEmpty() {
    return this.cache.length === 0;
  }
  enqueue(priority, element) {
    let queueItems = new QueueItems(priority, element);
    if (this.isEmpty()) {
      this.cache.push(queueItems);
    } else {
      let added = false;
      /*如果當前的priority值小於cache裡的priority使用splice()方法插入=>當執行時i=0; i<2;i++
          i=0時，cache = [{element: 'Alan", priority:2},{element: 'Sandy", priority:3}]
          i=1時，cache = [{element: 'Alan", priority:2},{element: 'Sandy", priority:3}.{element: 'Tony", priority:2}]
      */
      for (let i = 0; i < this.cache.length; i++) {
        if (queueItems.priority < this.cache[i].priority) {
          this.cache.splice(i, 0, queueItems);
          added = true;
          break;
        }
      }
      //如果當前的priority值大於cache裡面的priority直接新增到佇列末尾
      if (!added) {
        this.cache.push(queueItems);
      }
    }
    return this.cache;
  }
  dequeue() {
    return this.cache.shift();
  }
  front() {
    return this.cache[0];
  }
  size() {
    return this.cache.length;
  }
}

let priorityQueueInstance = new PriorityQueue();
console.log(priorityQueueInstance.enqueue(2, 'Alan'));
console.log(priorityQueueInstance.enqueue(3, 'Sandy'));
console.log(priorityQueueInstance.enqueue(2, 'Tony'));
```

![Queue](https://i.imgur.com/FgOCBCn.png)

## 鏈結串列(LinkedList)

資料操作成本較傳統陣列低

鏈結串列中的元素在記憶中不是連續放置的，每一個節點中包含元素並且指向(指位器)下一個節點

要存取第 n 個元素時( 時間複雜度為 O(n) )，Array 則是可以透過索引值直接存取元素( 時間複雜度為 O(1) )

### 實作 append(element)、toString()方法

像 LinkedList 尾部添加元素，一開始的 head 為 null，要讓他指向到第一個 節點

![LinkedList01](https://i.imgur.com/dsU9BM4.png)

```javascript
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  size() {
    return this.length;
  }
  append(element) {
    let node = new Node(element);
    let result = 'head >';
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  toString() {
    let current = this.head;
    console.log(current);
    let str = 'head-';
    while (current !== null) {
      str += `${current.element}-`;
      current = current.next;
    }
    return `${str}null`;
  }
}

let n1 = new LinkedList();
n1.append(1);
n1.append(2);
n1.append(3);
console.log(n1.toString());
```

呼叫 toString()

![LinkedList03](https://i.imgur.com/RYBqGmE.png)

添加節點後:

![LinkedList02](https://i.imgur.com/IHscmfu.png)

### 實作 removeAt(position)方法

移除任一位置的元素

```javascript
	removeAt(position){
	  if(position > -1 && position < this.size()){
		  let current = this.head;
			//移除首項
			if(position === 0){
			  this.head = current.next;
			} else{
			  let index = 0;
			  let previous;
				//移除中間項或是最後一項要使用迴圈迭代串列
			  while(position !== index){
				  index++;
				  previous = current;
				  current = current.next;
				}
				//跳過current
				previous.next = current.next;
			}
			this.length--;
			return current.element;
		} else{
		  return null;
		}
	}
```

移除首項(position = 0):

![LinkedList04](https://i.imgur.com/ybYcETn.png)

移除第二項(position = 1):

![LinkedList05](https://i.imgur.com/gsgGKSO.png)

### 實作 insert(position, element)方法

在任一位置插入元素

```javascript
	insert(position, element){
		 if(position > -1 && position <= this.size()){
		   	   let node = new Node(element);
					 let current = this.head;
		   if(position === 0){
			   this.head = node;
				 node.next = current;
			 } else {
			   let index = 0;
				 let previous;
				 while(position !== index){
				   index++
				   previous = current;
					 current = current.next;
				 }
				 previous.next = node;
				 node.next = current;
			 }
			 this.length ++;
			 return true;
		 } else {
		   return false;
		 }
	}
```

假設 insert(2, 2.5):

![LinkedList06](https://i.imgur.com/KSb9kxb.png)

假設 insert(0, 2.5):

![LinkedList07](https://i.imgur.com/JM9Vfvl.png)
