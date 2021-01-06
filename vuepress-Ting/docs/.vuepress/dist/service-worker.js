/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "245bc2aae120d467d91513a6e6aa1d83"
  },
  {
    "url": "assets/css/0.styles.c6707bb5.css",
    "revision": "44b11f49b6d2b23fd01bd446a39b247d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vuejs-logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "assets/img/vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "assets/img/vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
  },
  {
    "url": "assets/img/vuemanifestlogo.png",
    "revision": "edaf9fe23ba15554d5494cf66d9cbf7b"
  },
  {
    "url": "assets/img/vuemanifestlogosecond.png",
    "revision": "4ff6570e7333d0b78c2b79ffd7a32933"
  },
  {
    "url": "assets/js/10.9999eac0.js",
    "revision": "48426918e816c490c522bfe025e18696"
  },
  {
    "url": "assets/js/11.2fe0bc09.js",
    "revision": "68cf0ab66ab0994e0eed78c5a4a5e83a"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.b4d14af6.js",
    "revision": "4659e29c79b705dc02bb5b8c981c1879"
  },
  {
    "url": "assets/js/14.c765d5a2.js",
    "revision": "28aed968fa05413389ed6fd3f6342274"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.a6dd5f0f.js",
    "revision": "0791e6db7683b1ecb4cdc17a1d028537"
  },
  {
    "url": "assets/js/17.5708cfe7.js",
    "revision": "5a02e0a01633374b0529f42c0cc56ce7"
  },
  {
    "url": "assets/js/18.d3a8c889.js",
    "revision": "c1d69a4b23a3891756db1b5f0372e6a3"
  },
  {
    "url": "assets/js/19.53588efe.js",
    "revision": "e3cedcce8507a8624497cf44a9516e23"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.ec40c6eb.js",
    "revision": "09bfb279c564c4a4fc5b2125b42a0b74"
  },
  {
    "url": "assets/js/21.78ac7fec.js",
    "revision": "90a118fae7befa1e65e9d6fd81ef06ce"
  },
  {
    "url": "assets/js/22.909960d1.js",
    "revision": "8f725098e54e9c2f93c5b753dfded6fb"
  },
  {
    "url": "assets/js/23.4948e43a.js",
    "revision": "5e90b301174007ba0ed5f82d962c7da2"
  },
  {
    "url": "assets/js/24.cbb8ca43.js",
    "revision": "f9fe6e66a039d49e34763cc5a4352115"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
  },
  {
    "url": "assets/js/26.a2fbafaa.js",
    "revision": "de079bf198afa8f5e5378fbef414e7a9"
  },
  {
    "url": "assets/js/27.7bad2d32.js",
    "revision": "b6554754ed83df2ee1b00ab67ba0f47a"
  },
  {
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.09fd1d5e.js",
    "revision": "987501b46e64884fb93ff6ad14575c4b"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
  },
  {
    "url": "assets/js/4.3bead0d7.js",
    "revision": "02ea3b4a851cf9faafed602a1dc4f112"
  },
  {
    "url": "assets/js/5.2b550773.js",
    "revision": "82c79708c25e47fdb9de09cf03d8256b"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.7025208d.js",
    "revision": "04b78f3f1da0c6bfd922f8170ad5ba30"
  },
  {
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.beccb6c3.js",
    "revision": "7d240303fdecad9e74ffcb0f59c0159d"
  },
  {
    "url": "index.html",
    "revision": "a91fff56e5eaaf3d03f84511a3677f98"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "1f21717acf8b8e132b6ee5a3a5b6bc1d"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "563ea1aee7f6e36f16ab13c927cf186e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1eb777aee5f391c60984cab1325bf2a8"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "f489901b8ad6e4fb96424c8f1a1dbbc1"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "02747243a14fba214c29b4bdddef6bfc"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8692a1c7d1a9c822ad478d0fae0c5c8c"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1ec0769c514ccf854cdce1f2a1c15f65"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "c7ef28c2fcdc428ad470d22d8710d6a1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "e6c546b13babbb38c3a999fbd0c40446"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "73c8d9b24d1148eeaeadeec7a97cd1be"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "8587019e8d24e7c6a12254ce5b982392"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1b46ced42a871c3279aeb98c7453a894"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3418a455af4357e7a9b179e2afe18e60"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "5120ad6fb0dc508a966902d5b50f36be"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "91e26a22fb4979d49ec3b9ee3c97f78b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "91d071bd35060cf4cf9a7ee9347bd597"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "013b360017eccf7b85b119a15d45d0b2"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7b238ddcb0b9f59c65729d7672abb4e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
