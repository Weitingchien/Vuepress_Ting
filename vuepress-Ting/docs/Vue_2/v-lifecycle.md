---
title: v-lifecycle
date: 2021-05-25
tags: ['Vue']
---

<style>

.theme-default-content ul li{
    padding: 8.4px 0px 8.4px 0px;
}
.theme-default-content > p > [alt="lifeCycle01"] {
    vertical-align : middle;
}
</style>

## 生命週期圖與範例

![lifeCycle01](https://i.imgur.com/vEy4iy7.png)

<iframe width="100%" height="150" src="//jsfiddle.net/Chris_Walter/pw803ujr/175/embedded/result,js,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>- Vue版本:v2.6.12

* <strong>beforeCreate:</strong> 在Vue實體初始化後，數據觀測(Data Observer)和event、watcher事件配置之前呼叫
* <strong>created:</strong> 在實體創建完成後呼叫(Vue實體尚未掛載到DOM上、$el也沒被創建)，並且已經可以取得資料，另外all api會在此階段，並檢查el是否存在，不存在就執行$mount()，如果掛載的位置有存在的話，才會繼續template編譯，而不論如何都會執行render()，使用它來渲染出Virtual DOM
* <strong>beforeMount:</strong> 在DOM掛載之前呼叫
* <strong>mounted:</strong> $el創建完，DOM掛載之後呼叫
* <strong>beforeUpdate:</strong> 在資料更新之前呼叫
* <strong>updated:</strong> DOM重新渲染並且更新
* <strong>activated:</strong> 與下面的deactivated一樣，只有在使用keep-alive時才會觸發，當deactivated執行完再次點擊Show按鈕，就會直接執行activated，並且保留上次所輸入的內容
* <strong>deactivated:</strong> 與上面的activated一樣，只有在使用keep-alive時才會觸發，例如在上面的範例之中，當我再次點擊Hide按鈕前先在輸入框輸入一些內容，輸入完之後按下Hide按鈕，保留之前所輸入的內容，而且不會執行beforeDestory與destoryed
* <strong>beforeDestory:</strong> 在實體被銷毀前，並且沒有使用keep-alive時呼叫，這時實體還保有完整功能，在上面的範例中當message這個元件上綁v-if，如果v-if="false"就會觸發beforeDestory與destoryed，另外還有頁面切換(Vue Router)時也會觸發
* <strong>destoryed:</strong> 實體銷毀，並且沒有使用keep-alive時呼叫，所有事件監聽器與綁定移除

參考文獻:<br/>
