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
    "revision": "cc040f46df51f14c3c9ad265f0422d43"
  },
  {
    "url": "assets/css/0.styles.148f250a.css",
    "revision": "7db0941b4aa0ceb11713fbf1b01af576"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5b09b6b.js",
    "revision": "b6e359efd5ec92252989ced6dbb8c9b4"
  },
  {
    "url": "assets/js/11.b86fa2c6.js",
    "revision": "4bf61f328765c91abe041c86e49f53c9"
  },
  {
    "url": "assets/js/12.5cd4b6b3.js",
    "revision": "cdeec5b9baaf16c7a70491552890179f"
  },
  {
    "url": "assets/js/13.540b39d4.js",
    "revision": "14329623dae0fc55f07d33fda1f7e0bc"
  },
  {
    "url": "assets/js/14.628d7417.js",
    "revision": "3da23a4a7618ebed403e99a61bc2df1f"
  },
  {
    "url": "assets/js/15.4fb5966a.js",
    "revision": "6e2f2770b88d159d7ccea2ff4c080a56"
  },
  {
    "url": "assets/js/16.b124e2c0.js",
    "revision": "c96962672c41d60ec9b8a118f6030bd6"
  },
  {
    "url": "assets/js/17.91e0466f.js",
    "revision": "7d6dc189ff47c064b49a71762340bbc9"
  },
  {
    "url": "assets/js/18.407928c8.js",
    "revision": "268d9c376d31dc35d64bf11e689dcf6e"
  },
  {
    "url": "assets/js/19.db49b9b1.js",
    "revision": "7730543a6317cb8803cd47cfb31c1aa2"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.32e44c9d.js",
    "revision": "f2656868474d8ca2d9e299497c167a69"
  },
  {
    "url": "assets/js/21.0e1e84a5.js",
    "revision": "b20fa70f336081b9c22a6831557860cc"
  },
  {
    "url": "assets/js/22.86cfa6a4.js",
    "revision": "8d0adca1c0270dae7003f08c2f4b5a34"
  },
  {
    "url": "assets/js/23.a6b43a67.js",
    "revision": "b9f23de22d75aabbc3426c837948833a"
  },
  {
    "url": "assets/js/24.01a01738.js",
    "revision": "6ea0d5749eae7b553a5acef53cd19edd"
  },
  {
    "url": "assets/js/25.1fae29c4.js",
    "revision": "e9727cfea28d4f618dd7194b46ac16a0"
  },
  {
    "url": "assets/js/26.b576705f.js",
    "revision": "9b7ae8172a0c14adce0cd3953ef0a11a"
  },
  {
    "url": "assets/js/27.aeec6b72.js",
    "revision": "16173beed26fa981eeed3002ecb64299"
  },
  {
    "url": "assets/js/3.4e979fe2.js",
    "revision": "6f183a1484e4f3e95f48fa31ed69e3ab"
  },
  {
    "url": "assets/js/4.b088725e.js",
    "revision": "53c5036e16fe6bafa247c196f7ae7b83"
  },
  {
    "url": "assets/js/5.5b20e35d.js",
    "revision": "91cfd4a83e8cbf9145dde2b1be69d7fb"
  },
  {
    "url": "assets/js/6.a9a4beac.js",
    "revision": "beb7285711e7c5d3ac51033eb7f21cf8"
  },
  {
    "url": "assets/js/7.357a5e7b.js",
    "revision": "8ba30408a0b87747fa064583e4015720"
  },
  {
    "url": "assets/js/8.3f3c386a.js",
    "revision": "7c08ae7dc722cf61603374b5f709f646"
  },
  {
    "url": "assets/js/9.b1730dff.js",
    "revision": "d68ec6a5c77e2964583a1cdd07a4beb5"
  },
  {
    "url": "assets/js/app.439d61f0.js",
    "revision": "915bb34585aead73d3249d1251911a3d"
  },
  {
    "url": "index.html",
    "revision": "42a65d2f8e8116b9995f58138eea638a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "a104c859b863e66a1015feaaacea85b6"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "3099d59b662f86a677ce41bd5ee4d1b3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "54f7678c3b266327abc54d0d2a903b16"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2ec6d9f7f7bb6a641f52ae15414efb8a"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "df814f2f2c705ad11fae1e9e4b557900"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "225de38c3448c32f1db0a3be0c9bb6b0"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "661855f149c17ea79ba7f94948efb737"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "4e1d1761d5eca9ec267466548917e735"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b559b52a9b0de7c0f8fd3cfb673e3e1d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "2193db22f00b46fee81bd5f35dd2b4e7"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "67a84a240e1b979ebbfa911d3f4c012d"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5857ad295cbe61960d849e95cc3cd366"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "33982314964eadbe8579e209834d340b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "61648c26c4816ef87782c9a7deb930c6"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c5a358a9d3396b7ad2222e8c122c8e8c"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ae768eb242da278207e03e0a809efd9d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "22b6c83db79bc2cad033881915569a81"
  },
  {
    "url": "vuejs-logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
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
