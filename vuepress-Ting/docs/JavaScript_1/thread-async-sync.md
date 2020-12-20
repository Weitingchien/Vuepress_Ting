---
title: 執行緒(Thread)&同步(Synchronus)、非同步(Asynchronus)
date: 2020-09-12
tags:
  - JavaScript
---

## JavaScript是單執行緒的程式

單執行緒(Single Thread):一次只能做一件事<br/>
多執行緒(Multi Thread):可以同時做很多件事 

![Scope Chain](https://i.imgur.com/GyWft82.png)


## 同步(Synchronus)

```javascript
function all(){
    let washingmachine = '洗衣機';
    let sink = '水槽';
    repair(washingmachine, sink);
    badminton();
    computer();
}

function repair(appliances1, appliances2){
    console.log('修'+appliances2);
    console.log('修'+appliances1);
}
function badminton(){
    console.log('打羽毛球');
}

function computer(){
    console.log('看電腦');
}

all();
```

![Scope Chain](https://i.imgur.com/cSl8Hck.png)

依序執行

## 非同步(Asynchronus)
```javascript
function all(){
    let washingmachine = '洗衣機';
    let sink = '水槽';
    repair(washingmachine, sink);
    badminton();
    computer();
}

function repair(appliances1, appliances2){
    console.log('修'+appliances2);
    setTimeout (function(){
        console.log('修'+appliances1);
    },0)
}
function badminton(){
    console.log('打羽毛球');
}

function computer(){
    console.log('看電腦');
}

all();
```

![Scope Chain](https://i.imgur.com/NGkZhLs.png)


非同步的行為會被放到事件佇列(Event queue)裡面，等待all();同步執行完成後才會執行事件佇列裡面的修洗衣機這個行為，而這邊的非同步行為是setTimeout這個函式，雖然設了0秒，但因為放在事件佇列裡面，所以是整個程式執行完才會執行事件佇列裡面的函式

參考文獻:<br/>
[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")

<Vssue  />