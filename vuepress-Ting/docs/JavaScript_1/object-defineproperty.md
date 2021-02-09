---
title: 物件屬性(Object.defineProperty)
date: 2020-02-05
tags:
  - JavaScript
---

# 屬性描述器(Property Descriptor)

## enumerable

```javascript
const grade = {
  John: 'Freshman',
  Kevin: 'Sophomore',
  Jay: 'Junior',
  Leo: 'Senior'
};

Object.defineProperty(grade, 'John', {
  enumerable: false//不可列舉
});

for(let key in grade){//遍歷(traversal)
  console.log(grade[key]);
}

```
![Object.defineProperty01](https://i.imgur.com/Jmr7nYR.png)

##  value、writable

```javascript
const grade = {
  John: 'Freshman',
  Kevin: 'Sophomore',
  Jay: 'Junior',
  Leo: 'Senior'
};

Object.defineProperty(grade, 'John', {
  value: {},
  writable: false
});

grade.John = 'First year';

console.log(grade);

```
![Object.defineProperty02](https://i.imgur.com/vBAbOK2.png)

```javascript
const grade = {
  John: 'Freshman',
  Kevin: 'Sophomore',
  Jay: 'Junior',
  Leo: 'Senior'
};

Object.defineProperty(grade, 'John', {
  value: {},
  writable: false
});

grade.John.a = 'First year';//只能做到淺層保護

console.log(grade);

```

![Object.defineProperty03](https://i.imgur.com/dYi66P4.png)

##  configurable

```javascript

const grade = {
  John: 'Freshman',
  Kevin: 'Sophomore',
  Jay: 'Junior',
  Leo: 'Senior'
};

Object.defineProperty(grade, 'John', {
  configurable: false
});

delete grade.John;// configurable為false時，無法刪除屬性

console.log(grade);

```

![Object.defineProperty04](https://i.imgur.com/b3GZiXt.png)


##  Getter與Setter

getter是讀取屬性時的行為，setter是對屬性重新賦值的行為。

```javascript

const color = {
  one: 'blue',
  two: 'green',
  three: 'red',
  set changeColor(c){
    console.log(`setter`);
    this.one = c;
  },
  get changeColor(){
    console.log(`getter`);
    return `${this.one} + ${this.two}`;
  }
};

color.changeColor = 'purple';

console.log(color, color.changeColor);

```

![Object.defineProperty05](https://i.imgur.com/pkM2bFo.png)

參考文獻:<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html 'Title')<br/>