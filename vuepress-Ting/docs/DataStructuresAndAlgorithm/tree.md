---
title: 樹(tree)
date: 2021-07-24
tags:
  - DataStructuresAndAlgorithm
---

## 樹(tree)

![tree01](https://i.imgur.com/blmV1dL.png)

![tree](https://i.imgur.com/39LTN9O.png)

## 二元搜尋樹(BinarySearchTree)

二元樹: 允許樹的子節點最多只能 2 個 (二元搜尋樹是二元樹的一種)

二元搜尋樹左邊節點的值必須 < 父節點的值，而右邊節點的值必須 >= 父節點

### Result:

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/w18dm7jh/292/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 實作 insert(key)、insertNode(root, newNode)方法

一開始根節點為 null -> ![tree02](https://i.imgur.com/xPqeqc7.png) 所以當新增節點時要在根節點為 null 時把節點插入在根節點上(插入鍵為 20) -> ![tree01](https://i.imgur.com/kmHClnj.png) 如果不為 null 代表已經有節點了就呼叫 insetNode 方法，第一個參數為 node 代表根節點，第二個參數 newNode 代表我們要插入的節點

我們再連續插入 10 和 8 ，插入 10 時呼叫 insertNode(根節點, 欲新增的新節點)方法，如果新節點的鍵小於父節點的鍵，並且父節點的 left 為 null，就直接把新節點插入進去， 插入 8 時，8 < 20 且 node.left 有節點存在進入到 else{ insertNode(node.left, newNode }(遞迴:函式呼叫自己本身)，8 < 10 且 node.left 為 null 直接把新節點插入在 node.left 上(也就是插入在鍵為 10 的左邊)

```javascript
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  insert(key) {
    let newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

let tree1 = new BinarySearchTree();

tree1.insert(20);
tree1.insert(10);
tree1.insert(8);
console.log(tree1);
```

![BinarySearchTree](https://i.imgur.com/BUZKkOH.png)

當前示意圖:

![Tree02](https://i.imgur.com/GVib0lK.png)

### 實作 中序、先序、後序

要遍歷樹有三種方式:

中序: 由小到大

先序: 根節點->左子節點->右子節點->父節點

後序: 左子節點->右子節點->父節點，最後回到根節點

```javascript
//中序遍歷(In-Order Traversal)
	printNode(value){
	  console.log(value);
	}
	inOrderTraverseNode(node, callback){
	  if(node !== null){
	    this.inOrderTraverseNode(node.left, callback);
		callback(node.key);
		this.inOrderTraverseNode(node.right, callback);
	  }
	}
	inOrderTraverse(callback){
	  this.inOrderTraverseNode(this.root, callback);
	}
```

tree1.inOrderTraverse(tree1.printNode);

以最前面畫的二元搜尋樹來使用中序方式遍歷，並搭配 printNode 方法印出我們節點的值

順序:

![inOrderTraverse](https://i.imgur.com/ZmHHFaf.png)

```javascript
	preOrderTraverseNode(node, callback){
	  if(node !== null){
		  callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}
	preOrderTraverse(callback){
	  this.preOrderTraverseNode(this.root, callback);
	}
```

tree1.preOrderTraverse(tree1.printNode);

順序:

![preOrderTraverse](https://i.imgur.com/jEgcTH1.png)

```javascript
	postOrderTraverseNode(node, callback){
	  if(node !== null){
		  this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}
	postOrderTraverse(callback){
	  this.postOrderTraverseNode(this.root, callback);
	}
```

tree1.postOrderTraverse(tree1.printNode);

順序:

![postOrderTraverse](https://i.imgur.com/pCZrDYK.png)

### 實作 尋找最小、最大的節點

```javascript
	minNode(node){
	  while(node && node.left !== null){
		  node = node.left;
		}
		return node;
	}
	min(){
	  return this.minNode(this.root);
	}
	maxNode(node){
	  while(node && node.right !== null){
		  node = node.right;
		}
		return node;
	}
	max(){
	  return this.maxNode(this.root);
	}
```

### 實作 尋找特定的鍵

```javascript
	searchNode(node, key){
	  if(node === null){
		  return false;
		}
		if(node.key > key){
		  return this.searchNode(node.left, key);
		} else if(node.key < key){
		  return this.searchNode(node.right, key);
		} else {
		  return true;
		}
	}
	search(key){
	  return this.searchNode(this.root, key);
	}
```

### 實作 刪除節點

要刪除節點總共可以分成以下這些情況:

1. 如果要刪除的節點為 null，則直接回傳 null

2. 如果當前節點的鍵大於要找的節點的鍵則繼續往左側的下一個節點、當前節點的鍵小於要找的節點的鍵往右側的下一個節點

3. 當前節點的鍵等於要找的節點的鍵: 找到我們要找的節點還必須分成 3 種情況: 1. 此節點是葉節點 2. 此節點的左側節點是 null 3.此節點的右側節點是 null

4. 最後的情況是此節點有 2 個子節點

```javascript
	removeNode(node, key){
	  if(node === null){
		  return null;
		}
        // return node是為了要返回更新後的節點
        // 如果當前節點的鍵比要找的鍵大，就繼續往下一個左側節點
		if(node.key > key){
		    node.left = this.removeNode(node.left, key);
			return node;
          // 如果當前節點的鍵比要找的鍵小，就繼續往下一個右側節點
		} else if(node.key < key){
		    node.right = this.removeNode(node.right, key);
			return node;
          // 當前節點的鍵等於要找的鍵
		} else{
            // 如果當前節點左側與右側都為null代表這是葉節點，要刪除這個節點只需要把null賦值給這個節點，並回傳更新後的節點
		    if(node.left === null && node.right === null){
		       node = null;
			   return node;
			}
            // 如果當前節點左側為null，但當前節點右側有節點時，就讓當前節點等於當前節點的右側節點，並回傳更新後的節點
		    if(node.left === null){
			   node = node.right;
			   return node;
              // 如果當前節點右側為null，但當前節點左側有節點時，就讓當前節點等於當前節點的左側節點，並回傳更新後的節點
			} else if(node.right === null){
			   node = node.left;
			   return node;
			}
            // 最後的一種情況是這個節點有2個子節點
            // 使用之前的minNode方法找到右側子樹中最小的節點
			const aux = this.minNode(node.right);
            // 把找到最小節點的鍵賦值給要刪除節點的鍵
			node.key = aux.key;
			// 因為前面我們把最小節點的鍵賦值給了要刪除節點的鍵，所以會產生2個相同的鍵，要把舊的鍵移除，並且一樣回傳更新後的節點
			node.right = this.removeNode(node.right, aux.key);
			return node;
		}
	}
	remove(key){
	  this.root = this.removeNode(this.root, key);
	}
```

待新增...
