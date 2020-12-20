# 2020/09-10/-範圍鍊(Scope Chain)

![全域與區域變數作用範圍](https://i.imgur.com/0Hoe3i8.png)

```javascript
var man = 'Tony';

function family1(){
    family2();
    console.log('你好' + man);//Tony
    function family2(){
        var man = 'John';
        console.log('你好' + man);//John
    }
}
family1();
```
一開始執行family1函式、再執行family2，當family2裡面需告一個man變數，其值為John且輸出結果會是John，但是family1本身沒有宣告任何man變數，所以結果會是去尋找外層的Tony

![Scope Chain](https://i.imgur.com/mxFPcfv.png)

參考文獻:<br/>
- [JavaScript 核心篇](https://www.hexschool.com/courses/js-core.html "Title")