(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{393:function(e,t,r){},425:function(e,t,r){"use strict";r(393)},462:function(e,t,r){"use strict";r.r(t);r(425);var a=r(29),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"生命週期圖與範例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命週期圖與範例"}},[e._v("#")]),e._v(" 生命週期圖與範例")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/vEy4iy7.png",alt:"lifeCycle01"}})]),e._v(" "),r("iframe",{attrs:{width:"100%",height:"150",src:"//jsfiddle.net/Chris_Walter/pw803ujr/175/embedded/result,js,html/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),e._v("- Vue版本:v2.6.12\n"),r("ul",[r("li",[r("strong",[e._v("beforeCreate:")]),e._v(" 在Vue實體初始化後，數據觀測(Data Observer)和event、watcher事件配置之前呼叫")]),e._v(" "),r("li",[r("strong",[e._v("created:")]),e._v(" 在實體創建完成後呼叫(Vue實體尚未掛載到DOM上、$el也沒被創建)，並且已經可以取得資料，另外all api會在此階段，並檢查el是否存在，不存在就執行$mount()，如果掛載的位置有存在的話，才會繼續template編譯，而不論如何都會執行render()，使用它來渲染出Virtual DOM")]),e._v(" "),r("li",[r("strong",[e._v("beforeMount:")]),e._v(" 在DOM掛載之前呼叫")]),e._v(" "),r("li",[r("strong",[e._v("mounted:")]),e._v(" $el創建完，DOM掛載之後呼叫")]),e._v(" "),r("li",[r("strong",[e._v("beforeUpdate:")]),e._v(" 在資料更新之前呼叫")]),e._v(" "),r("li",[r("strong",[e._v("updated:")]),e._v(" DOM重新渲染並且更新")]),e._v(" "),r("li",[r("strong",[e._v("activated:")]),e._v(" 與下面的deactivated一樣，只有在使用keep-alive時才會觸發，當deactivated執行完再次點擊Show按鈕，就會直接執行activated，並且保留上次所輸入的內容")]),e._v(" "),r("li",[r("strong",[e._v("deactivated:")]),e._v(" 與上面的activated一樣，只有在使用keep-alive時才會觸發，例如在上面的範例之中，當我再次點擊Hide按鈕前先在輸入框輸入一些內容，輸入完之後按下Hide按鈕，保留之前所輸入的內容，而且不會執行beforeDestory與destoryed")]),e._v(" "),r("li",[r("strong",[e._v("beforeDestory:")]),e._v(' 在實體被銷毀前，並且沒有使用keep-alive時呼叫，這時實體還保有完整功能，在上面的範例中當message這個元件上綁v-if，如果v-if="false"就會觸發beforeDestory與destoryed，另外還有頁面切換(Vue Router)時也會觸發')]),e._v(" "),r("li",[r("strong",[e._v("destoryed:")]),e._v(" 實體銷毀，並且沒有使用keep-alive時呼叫，所有事件監聽器與綁定移除")])]),e._v(" "),r("p",[e._v("參考文獻:"),r("br")])])}),[],!1,null,null,null);t.default=v.exports}}]);