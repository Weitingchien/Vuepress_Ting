---
title: 樹(tree)
date: 2021-07-24
tags:
  - DataStructuresAndAlgorithm
---

## 樹(tree)

![tree01](https://i.imgur.com/blmV1dL.png)

![tree](https://i.imgur.com/KUH1IzR.png)

## 二元搜尋樹(BinarySearchTree)

二元樹: 允許樹的子節點最多只能 2 個 (二元搜尋樹是二元樹的一種)

二元搜尋樹左邊節點的值必須 < 父節點的值，而右邊節點的值必須 >= 父節點

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

當前示意圖
![Tree02](https://i.imgur.com/GVib0lK.png)
