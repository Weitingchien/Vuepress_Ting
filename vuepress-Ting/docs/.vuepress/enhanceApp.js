// 引入 vue
import Vue from 'vue';
// 引入 vssue
import Vssue from 'vssue';
// 引入對應平台的 api 包
import GithubV4 from '@vssue/api-github-v4';
// 引入 vssue 的樣式文件
import 'vssue/dist/vssue.css';
// import bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vssue, {
  // 設置要使用平台的 api
  api: GithubV4,

  // 在这里设置你使用的平台的 OAuth App 配置
  // 在這裡設置你使用的平台的 OAuth App 配置
  owner: 'Weitingchien',
  repo: 'Vuepress_Ting',
  clientId: 'a81389f92909a07e0ff6',
  clientSecret: '834c9d86e5d0f35fecb1535a300d044724c3a4a2', // 只有在使用某些平台時需要(例如:GithubV4)
  autoCreateIssue: true
});

export default ({
  Vue // the version of Vue being used in the VuePress app
  //options, // the options for the root Vue instance
  //router, // the router instance for the app
  //siteData // site metadata
}) => {
  // ...apply enhancements to the app
  try {
    Vue.use(BootstrapVue); //use bootstrap
  } catch (e) {
    console.error(e.message);
  }
};
