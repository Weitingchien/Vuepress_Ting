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

- <strong>beforeCreate:</strong> 在 Vue 實體初始化後，數據觀測(Data Observer)和 event、watcher 事件配置之前呼叫
- <strong>created:</strong> 在實體創建完成後呼叫(Vue 實體尚未掛載到 DOM 上、$el也沒被創建)，並且已經可以取得資料，另外call api會在此階段，並檢查el是否存在，不存在就執行$mount()，如果掛載的位置有存在的話，才會繼續 template 編譯，而不論如何都會執行 render()，使用它來渲染出 Virtual DOM
- <strong>beforeMount:</strong> 在 DOM 掛載之前呼叫
- <strong>mounted:</strong> \$el 創建完，DOM 掛載之後呼叫
- <strong>beforeUpdate:</strong> 在資料更新之前呼叫
- <strong>updated:</strong> DOM 重新渲染並且更新
- <strong>activated:</strong> 與下面的 deactivated 一樣，只有在使用 keep-alive 時才會觸發，當 deactivated 執行完再次點擊 Show 按鈕，就會直接執行 activated，並且保留上次所輸入的內容
- <strong>deactivated:</strong> 與上面的 activated 一樣，只有在使用 keep-alive 時才會觸發，例如在上面的範例之中，當我再次點擊 Hide 按鈕前先在輸入框輸入一些內容，輸入完之後按下 Hide 按鈕，保留之前所輸入的內容，而且不會執行 beforeDestory 與 destoryed
- <strong>beforeDestory:</strong> 在實體被銷毀前，並且沒有使用 keep-alive 時呼叫，這時實體還保有完整功能，在上面的範例中當 message 這個元件上綁 v-if，如果 v-if="false"就會觸發 beforeDestory 與 destoryed，另外還有頁面切換(Vue Router)時也會觸發
- <strong>destoryed:</strong> 實體銷毀，並且沒有使用 keep-alive 時呼叫，所有事件監聽器與綁定移除

## 生命週期 Vue 2 與 Vue 3 差異

![lifeCycle02](https://i.imgur.com/jn0cBel.png)
