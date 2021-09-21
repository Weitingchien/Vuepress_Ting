---
title: v-basic
date: 2021-05-26
tags: ['Vue']
---

## Vue 2 與 Vue 3 建立實體與掛載

第一個圖是 Vue CLI 建立的 Vue 2 專案其中的 main.js 檔 <a href ="https://cli.vuejs.org/guide/creating-a-project.html" target=_blank>(詳細運行指令可參考 Vue CLI 官網)</a>

第二個圖則是使用 Vite 建立的 Vue 3 專案其中的 main.js 檔 <a href ="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target=_blank>(詳細運行指令可參考 Vite 官網)</a>

![Instance](https://i.imgur.com/VXSWN4h.png)

## 表單綁定(v-model)

### 輸入框

<p>

Vue 2.6.12: 使用 Options API 時，先把資料定義在 data 裡面，而 v-model 跟我們的輸入框作綁定，並且搭配模板語法{ { } }即可把我們在 data 內的資料給渲染到畫面上

Vue 3.0.0: 這邊使用 Composition API ，setup()函式會在元件建立之前執行，並且 this 不再指向元件實體，取而代之的是我們可以使用 ref 或是 reactive 來定義我們的資料，而 ref 可接受任何型別，reactive 只接受物件或是陣列

(Vue 2.6.12 - Options API)

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/13qrL4w8/11/embedded/result,js,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

(Vue 3.0.0 - Composition API)

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/jkpc31we/11/embedded/result,js,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### Form

(Vue 2.6.12 - Options API)

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/6dpk5fq4/44/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

(Vue 3.0.0 - Composition API)

<iframe width="100%" height="300" src="//jsfiddle.net/Chris_Walter/pemfgro2/99/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### Drop-down menu

...待新增

### Checkbox

...待新增

## 屬性綁定(v-bind)

...待新增

參考文獻:<br/>
