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
    "revision": "048beac01b0b1dae2091da798fabc249"
  },
  {
    "url": "assets/css/0.styles.e5f03543.css",
    "revision": "cd72f3f0afe035a540306990503a1e5f"
  },
  {
    "url": "assets/img/apple-icon-144x144.png",
    "revision": "76d1af81cfc3f92205ef1ed854da2b6e"
  },
  {
    "url": "assets/img/apple-icon-152x152.png",
    "revision": "d9b9544ea74d1ec59ad793db521cd2f1"
  },
  {
    "url": "assets/img/apple-icon.png",
    "revision": "51f9f887c739eeba9cc7b2285ba07708"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "assets/img/ms-icon-144x144.png",
    "revision": "76d1af81cfc3f92205ef1ed854da2b6e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/VueJSIcon.svg",
    "revision": "9a45fc7689867939804c469bfcd17784"
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
    "url": "assets/js/11.960c11a9.js",
    "revision": "364ebbb802643f5862bc0a3a8c6181f4"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.d664cc88.js",
    "revision": "4716f08096e4a5d5ac099a67dbaba556"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.97c4c86e.js",
    "revision": "5fc6eb64b74d77ed90bcb7e0314946f3"
  },
  {
    "url": "assets/js/16.d0e9dc9c.js",
    "revision": "d5141c45b682256e844f4ba6cd7b7022"
  },
  {
    "url": "assets/js/17.1e1de1a7.js",
    "revision": "d5d804695aaa2318043c65c64066e12c"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.637f8fcf.js",
    "revision": "b1a3e94f7fefc5591ecaa9b7116c7a29"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.0a478a02.js",
    "revision": "08c4df1573b7ac4bbd0bf5d597d9c4ac"
  },
  {
    "url": "assets/js/21.eda8ae30.js",
    "revision": "26a6a5d352d2d0b2818b967b135adcdc"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.613a3014.js",
    "revision": "3e4cb0dc0a9d2cfd369becb918ddea31"
  },
  {
    "url": "assets/js/24.ae9911e1.js",
    "revision": "6b68638a64cd8e310a1fe4b00bbb909a"
  },
  {
    "url": "assets/js/25.1feb5c4d.js",
    "revision": "41d8c863ed929d12f47193ea6beb9ce2"
  },
  {
    "url": "assets/js/26.ae28bd6a.js",
    "revision": "294e9b7ae05304c8a6b5dbcdf93a5b39"
  },
  {
    "url": "assets/js/27.af32fe42.js",
    "revision": "4d7befb8ecb9c223ed543f10fef42b70"
  },
  {
    "url": "assets/js/28.005277e4.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
  },
  {
    "url": "assets/js/29.30523d37.js",
    "revision": "a7ad3ce4a4dc624912fd37a081e75867"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.d8979072.js",
    "revision": "fc8827510a6e4326769234ac6a53175a"
  },
  {
    "url": "assets/js/31.beded4c7.js",
    "revision": "493b4546bd42871a9de6898a5f9f5eee"
  },
  {
    "url": "assets/js/32.a4d236f6.js",
    "revision": "4687bb5e5eba680d997e4fded03ee439"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.67ce5218.js",
    "revision": "10538b3425d3e28fd2ea61c4c274cf5f"
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
    "url": "assets/js/app.17c9130e.js",
    "revision": "8d77ee538d5c56ce2c791196a94c5c39"
  },
  {
    "url": "index.html",
    "revision": "5977562f12be248c29f62507e1c0da06"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "06beccaeed067c0819105d45a61b2217"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b8d4af83016fc3f49a8a9a925f6f3cc9"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "68925bbe870159506e9119c154f34a58"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5aefc49cc437a66bbde8f5b5a429bd46"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e3056a80b9c9d7707643e2bdcfb31663"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8b978e8d373020082021877173fffcc4"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "72e2acc25c28cf3d94e7a128bb215747"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "18736bd1e7ac1a37308034c77b421b70"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "554fa752abbbbda743176dbc290aa68d"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b8d9429f1f2908f3b3b80a903e3ef2b0"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "98b40069fca568f3c5ceb019e658b52c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "a0430648b78342e8c073360025c4d309"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b664f1a9fa233de6f6d7cc98c52cdb59"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a5f17b75b7165b09949686c8abfae6b6"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "2904988648c59899fbc439239ae03989"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ec914ae743f01278ccacb6dc5073c6ba"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "16c2a563944af21119eda09f53e33829"
  },
  {
    "url": "Node/basic.html",
    "revision": "a2b41dc394a2c43cc954d108b11ac0a1"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "66ac7b6c95b38789fb8d9d3fa32104d0"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d46e8c4813674aee10bf2a869e038737"
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
