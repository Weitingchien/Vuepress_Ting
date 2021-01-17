---
title: JSON(JavaScript Object Notation) & AJAX(Asynchronous JavaScript + XML)
date: 2020-11-20
tags: ['JavaScript', 'JSON', 'AJAX']
---

## JSON

> 根據維基百科的敘述它是一個輕量的資料交換語言，且是獨立於語言的文字格式。

## AJAX

Ajax(非同步傳輸)，只更新網頁的一部份，畫面不會整個刷新，傳統的方法是建立 XMLHttpRequest 物件

```javascript
const xhr = new XMLHttpRequest(); //建立XMLHttpRequest物件，藉由此物件控制跟伺服器通訊的部分

//get表示讀取資料，後面的url是要讀取的網址，這邊的API使用opendata的展覽資訊作示範
//true(非同步):不會等資料回傳就往下繼續執行，false(同步):等資料回傳才繼續執行
xhr.open(
  'get',
  'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6',
  true
);

xhr.send(null); //因為我們只要get資料，所以傳送空值(null)

xhr.onload = function () {
  //onload為資料載入完成時，才執行function
  const str = JSON.parse(xhr.responseText); //把JSON變為物件，另外JSON.stringify()是把物件變為JSON
  const main = document.querySelector('.culture');
  let str2 = ''; //建一個空字串
  for (let i = 0; i < 100; i++) {
    //跑for迴圈，塞入組好的字串，把100筆主題顯示出來
    str2 += `<li>主題: ${str[i].title}</li>`;
  }
  main.innerHTML = str2; //寫入
};
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="content">
      <ul class="culture"></ul>
    </div>
    <script src="/test18.js"></script>
  </body>
</html>
```

結果(100 筆)

![XMLHttpRequest_innerHTML](https://i.imgur.com/cRFcVdL.png)

在瀏覽器的 console 輸入 xhr，可看到一些資訊
![XMLHttpRequest](https://i.imgur.com/5gd9UQO.png)

- readyState

  - 0- 還沒連接你所撈的資料
  - 1- open()被呼叫，但還沒有把資料傳送過去
  - 2- send()被呼叫
  - 3- 資料下載中，此時 responseText 有部分資料
  - 4- 已完全接收到資料

- status

  - 200-資料正確回傳
  - 404-資料讀取錯誤
    - 其他狀態碼可至[MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)查看

::: danger
<p />
<p>缺點:寫法複雜，會有回呼地獄(Callback Hell)的問題</p>
:::

## 使用其他框架來非同步傳輸

### jQuery 的 ajax()

```javascript
//記得HTML要引入jQuery
// 例如:<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$(document).ready(() => {
  $.ajax({
    url:
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6',
    type: 'GET', //請求的方式，這邊使用GET來拿資料
    dataType: 'json', //返回的資料類型

    //成功時呼叫這個callback
    success: res => {
      console.log(res);
    },
    //失敗時呼叫這個callback
    error: err => {
      console.log(err);
    }
  });
});

```

其他參數可到[W3Schools](https://www.w3schools.com/jquery/jquery_ref_ajax.asp)查看

缺點:單純使用ajax卻要引入整個jQuery

### Fetch

```javascript

const url = `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`;

fetch(url, {method:'GET'})//預設已經為GET
.then((res) => {
  console.log(res.json());//輸出成 json
}).catch((err) =>{
  console.log(err);
});

```

缺點:瀏覽器支援度低、不會帶cookie、404、500都會當作成功的請求

### Axios

```javascript

//Axios-CDN:https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js

axios({
  method: 'get',
  url: 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6',
})
.then((res) => {
   console.log(res)
})
.catch((err) => {
   console.log(err) 
});

```

目前最為推薦的方法，防[XSRF(CSRF)](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)、輕量、支持Promise API

## Promise

它是一個語法，用來處理非同步行為，並使用Async、Await讓結構看起來像同步語言，基本的結構如下圖

![Promise_base01](https://i.imgur.com/26Rw3Lt.png)

### Promise基礎概念

```javascript

  function prFn(num) {//沒有回傳結果時，會是pending的狀態
    //要傳入function作為參數，且此function參數分別代表成功與失敗時所回傳的結果
    return new Promise((resolve, reject) => {
      num ? resolve('成功') : reject('失敗')
    });
  }

  prFn(1)//執行prFn並把參數代入
  .then((res) => {//接收成功時所回傳的結果(但它其實也可以傳入失敗的結果 但必須再塞入一個callback function)
    console.log(res);
    console.dir(Promise);//Promise原型方法有catch、finally、then
  })
  .catch((err) => {//接收失敗時所回傳的結果
    console.log(err);
  });

```

![Promise_base02](https://i.imgur.com/DhubLHn.png)


### Promise鏈接技巧

```javascript

  function prFn(num) {
    return new Promise((resolve, reject) => {
      num ? resolve('成功') : reject('失敗')
    });
  }

  prFn(0)
  .then((res) =>{
    console.log(` 1: ${res} `);    
  }, (rej) => {
    console.log(` 1(err): ${rej} `);//前面所提到的，then也可以拿來接收失敗時回傳的結果
    return prFn(2);//return的結果，透過下一個then接收，就可以一直串接
  }).then((res) => {
    console.log(` 2: ${res} `);
  })
  .catch((err) => {
    console.log(err);
  });

```

![Promise_base03](https://i.imgur.com/5Z5dSl1.png)

### Promise.all() & Promise.race()

```javascript
//Promise.all()
  function prFn(num, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(num){
          resolve(`成功 ${num}`)
        }else{
          reject('失敗');
        }
      }, time);
    });
  }

Promise.all([//同時發出請求，不管誰先誰後，其中一個為reject狀態就會進catch
  prFn(1),
  prFn(2),
  prFn(3),
  prFn(4),
  prFn(5),
])
.then((res) => {
  console.log(res);
})
.catch((res) => {
  console.log(res);
});

```
![Promise_base04](https://i.imgur.com/DN3BkSB.png)

```javascript
//Promise.race()
  function prFn(num, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(num){
          resolve(`成功 ${num}`)
        }else{
          reject('失敗');
        }
      }, time);
    });
  }

Promise.race([//只會回傳第一個完成的結果，且在第一個被拒絕的情況下才會進入catch
  prFn(1, 500),
  prFn(0,1000),
  prFn(3,1500),
  prFn(4,3000),
  prFn(5,3500),
])
.then((res) => {
  console.log(res);
})
.catch((res) => {
  console.log(res);
});

```

![Promise_base05](https://i.imgur.com/CSOHwUf.png)

### Async & Await

- 基於Promise實現
- 避免鏈式調用Promise

```javascript

  function prFn(num,time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(num){
          resolve(`成功 ${num}`)
        }else{
          reject('失敗');
        }
      }, time);
    });
  }
  
//使用async await簡化.then() & .catch()取得回傳結果的過程
async function getOpendata() {
  const result = await Promise.all([prFn(1, 500),prFn(2, 1000),prFn(3, 2000)]);
  console.log(result);
}

getOpendata();

```

![Promise_base06](https://i.imgur.com/VhU8J7I.png)

```javascript

(async () => {//使用IIFE & try catch捕捉error
  try{
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6');
    console.log(data);
  }catch (err) {
    throw new Error(err);
  }
})();

```

![Promise_base07](https://i.imgur.com/TGFC5Ph.png)

參考文獻:<br/>

![JavaScript](https://i.imgur.com/9ENGyf9.jpg)<br/>

[JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html 'Title')<br/>

[RocMark-axios 介紹](https://ithelp.ithome.com.tw/articles/10212120)<br/>

[程式前沿-通過一些例子深入瞭解JavaScript的Async和Await](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/746064/)<br/>

[Wang Casper 鐵人賽：JavaScript Await 與 Async](https://wcc723.github.io/javascript/2017/12/30/javascript-async-await/)<br/>

[Noob's Space-我要學會 JS(三)：callback、Promise 和 async/await 那些事兒](https://noob.tw/js-async/)<br/>

<Vssue  />