---
title: 鏈結串列(linkedlist)
date: 2021-07-18
tags:
  - DataStructuresAndAlgorithm
---

## 鏈結串列(LinkedList)

資料操作成本較傳統陣列低，適合頻繁的新增與移除資料，但不適合用來查詢

鏈結串列中的元素在記憶中不是連續放置的，每一個節點中包含元素並且指向(指位器)下一個節點

要存取第 n 個元素時( 時間複雜度為 O(n) )，Array 則是可以透過索引值直接存取元素( 時間複雜度為 O(1) )

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/4tk3gLu8/416/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 實作 append(element)、toString()方法

像串列尾部添加元素，一開始的 head 為 null，要讓他指向到第一個 節點

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
		  return false;
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

### 實作 indexOf(element)、remove(element)、getHead()方法

```javascript
	indexOf(element){
	  let index = 0;
	  let current = this.head;
		while(current !== null){
		  if(element === current.element){
			  return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	remove(element){
	  let index = this.indexOf(element);
		return this.removeAt(index);
	}
  getHead(){
    return this.head;
  }
```
