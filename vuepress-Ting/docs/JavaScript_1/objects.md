# 2020/09-21/-物件(Objects)

```javascript
let library = {

  id: 01,//左邊為屬性(property)，右邊為值(value)
  books:{
      name: 'JavaScript',
  }, 

  Sellingprice: function(){
      console.log('售價:450 元');
  }
}; //物件實字Object Literals
console.log(library);

//物件的建構式(另一種宣告物件的方式)
let library2 = new Object('JavaScript');
let library3 = new Object(1);
let library4 = new Object(library);
console.log(library2);
console.log(library3);
console.log(library4);

```

<!-- more -->
![Objects](https://i.imgur.com/TO86pdE.png)

## 物件取值、新增、刪除

```javascript
let library = {

  id: 1,
  books:{
      name: 'JavaScript',
  }, 

  Sellingprice: function(){
      console.log('售價:450 元');
  },
  '01': '00',

}; 
//取值
console.log(library.id);
console.log(library.books.name);
console.log(library['01']);

//新增
library.page = 100;
library['@'] = '特殊符號';

console.log(library);

//刪除
delete library.id;
delete library['01'];
delete library.page;

console.log(library);

//執行函式
library.Sellingprice();
library['Sellingprice']();
```

![Objects](https://i.imgur.com/YrfLtRA.png)

## 物件型別與純值(純值又可稱為原始型別)

```javascript
//純值不能新增屬性
 let city = '桃園市';
 city.person = 'Kevin';
 console.log(city);


let library = {};//使用物件實字的語法新增一個空物件
library.book = 'JavaScript';
console.log(library);

let fruit = [orange,];
fruit.name = 'Apple';
console.log(fruit);

function say(){//函式也是物件型別(物件型別下的子型別)
  console.log('Hello');
}
say.person = 'John';
console.dir(say);//console.dir()用於顯示物件中所有屬性和屬性值
```

![Objects](https://i.imgur.com/00hbAIJ.png)

## undefined屬性預設值

```javascript
let products = {
  phone: 'apxxx',
}
console.log(products.id);//在物件下查找不存在的屬性，會回傳undefined

//與宣告變數比較
let a 
console.log(a);//宣告a變數時，會準備一個記憶體空間給它，但是因為沒有任何值，所以出現undefined
console.log(b);//不存在b這個變數所以它會是is not defined而不是undefined
```

![Objects](https://i.imgur.com/DqbHK7a.png)

## 物件參考(參照)觀念

```javascript
let a = { x:1 }; //新增一個物件就會產生一個新的記憶體空間，(此時a變數的參考路徑假設為:0x01)
let b = a; //(物件賦值是傳參考的特性，它會把參考路徑0x01賦予給b變數)
a.y = a = { x: 2 }; //新增一個物件(參考路徑假設為:0x02)，因為是同時執行，所以這邊的a.y是在原本參考路徑為0x01物件底下新增y屬性，其值是參考路徑0x02

console.log(a.y);
console.log(b);
console.log( a === b.y);
```

![Objects](https://i.imgur.com/kI9HAO2.png)
![Objects](https://i.imgur.com/3Zrtixq.png)

## 傳值(Call by value)

```javascript
//純值修改值的時候不會有傳參考的特性
let name = 'Jay';
let name2 = name;
name2 = 'Kevin';
console.log(name, name2);
```
## 傳參照(Call by reference)
```javascript
let library = {
  book1: 'JavaScript',
  book3: 'HTML',
  book4: 'CSS',
}

let library2 = library;//library的參考路徑(假設為0x01)指向library2，所以當修改library2時，library物件也會被修改，因為兩者參考路徑(0x01)是一樣的
library2.book1 = 'jQuery';

console.log(library, library2);
console.log( library === library2);//參考路徑一樣所以為true
```
![Objects](https://i.imgur.com/goe3yfx.png)

```javascript
let library = {
  book1: 'JavaScript',
  book3: 'HTML',
  book4: 'CSS',
}

let library2 = library;

library2 = {
  book1: 'JavaScript',
  book3: 'HTML',
  book4: 'CSS',
} //library2它的參考路徑與原本會不一樣，假設library參考路徑是(0x01)，則library2是(0x02)

console.log(library, library2);
console.log( library === library2);//縱使內容一樣，但兩者參考路徑不一樣所以為false
```
![Objects](https://i.imgur.com/wUJZSib.png)

## 傳共享物件呼叫(Call by sharing) 

```javascript
let library = {
  book1: 'JavaScript',
  book3: 'HTML',
  book4: 'CSS',
}

let library2 = library;

library2 = {//重新賦值會指向新的物件
  book1: 'Vue.js',
  book3: 'HTML5',
  book4: 'SASS',
}

console.log(library, library2);
```

![Objects](https://i.imgur.com/KcLUGC9.png)

## 淺層複製(Shallow Copy)

```javascript
//因(call by reference)所以修改第二層，原本的物件也會一同被修改
const person = {
  p1: 
   {
    name: 'Tony',
    money: 200,
   },
  p2: 'Kevin',
  p3: 'John',
}

const newperson = {};

for (let key in person) {
  newperson[key] = person[key];
}

newperson.p2 = 'Jay';
newperson.p1.money = 100;
console.log(person === newperson);
console.log(person, newperson);
```
![Objects](https://i.imgur.com/9MjlTDb.png)

```javascript
//ES6 Object.assign()
const person = {
    p1: 
    {
     name: 'Tony',
     money: 200,
    },
    p2: 'Kevin',
    p3: 'John',  
  }

let newperson = Object.assign({}, person);

newperson.p2 = 'charly';
newperson.p1.money = 50;
console.log(person, newperson);
```

![Objects](https://i.imgur.com/lwS0i41.png)

```javascript
//ES6 spread operator
const person = {
  p1: 
  {
   name: 'Tony',
   money: 200,
  },
  p2: 'Kevin',
  p3: 'John',  
}

let newperson = {...person};
 newperson.p2 = 'charly';
 newperson.p1.money = 50;
 console.log(person, newperson);
```

![Objects](https://i.imgur.com/gjHnTFn.png)


## 深層複製(Deep copy) 

```javascript
const person = {
  p1: 
  {
   name: 'Tony',
   money: 200,
  },
  p2: 'Kevin',
  p3: 'John',  
}

let newperson = JSON.parse(JSON.stringify(person));
 newperson.p2 = 'charly';
 newperson.p1.money = 50;
 console.log(person, newperson);
```

![Objects](https://i.imgur.com/8RAIbVv.png)

## 陣列(Array)

## push
```javascript

const book = [

  {
    b1: 'JavaScript',
  },

  {
    b2: 'Python',
  },

  {
    b3: 'Node.js',
  },

]

book.push('JAVA');
console.log(book);

```

![Objects](https://i.imgur.com/QpEWeed.png)

## pop

```javascript

const book = [

  {
    b1: 'JavaScript',
  },

  {
    b2: 'Python',
  },

  {
    b3: 'Node.js',
  },

]

book.pop();
console.log(book);

```

![Objects](https://i.imgur.com/vttO3ra.png)

## unshift

```javascript
const book = [

  {
    b1: 'JavaScript',
  },

  {
    b2: 'Python',
  },

  {
    b3: 'Node.js',
  },

]

book.unshift('jQuery');
console.log(book);
```

![Objects](https://i.imgur.com/42QRyUI.png)

## shift

```javascript
const book = [

  {
    b1: 'JavaScript',
  },

  {
    b2: 'Python',
  },

  {
    b3: 'Node.js',
  },

]

book.shift();
console.log(book);
```

![Objects](https://i.imgur.com/KoyNZoL.png)

### 陣列length須注意的小地方

```javascript
const book = [

  {
    b1: 'JavaScript',
  },

  {
    b2: 'Python',
  },

  {
    b3: 'Node.js',
  },

]

book.b0 = 1;//新增一個屬性b0其值為1，可以看到輸出結果並不會增加陣列的長度
console.log(book.length);//3

book[4] = {b4:'jQuery'};
console.log(book);
console.log(book[3]);//使用中括號新增值的時候，中間略過的會補上空值(undefined)
```

![Objects](https://i.imgur.com/TmJcgV7.png)

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")