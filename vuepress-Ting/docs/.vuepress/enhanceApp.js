// 引入 vue
import Vue from 'vue'
// 引入 vssue
import Vssue from 'vssue'
// 引入对应平台的 api 包
import GithubV4 from '@vssue/api-github-v4'
// 引入 vssue 的样式文件
import 'vssue/dist/vssue.css'

Vue.use(Vssue, {
  // 设置要使用的平台 api
  api: GithubV4,

  // 在这里设置你使用的平台的 OAuth App 配置
  owner: 'Weitingchien',
  repo: 'Vuepress_Ting',
  clientId: 'a81389f92909a07e0ff6',
  clientSecret: '834c9d86e5d0f35fecb1535a300d044724c3a4a2', // 只有在使用某些平台时需要
})