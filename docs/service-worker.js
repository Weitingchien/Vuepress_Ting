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
    "revision": "4210d6a8f279c2564854ca7e62ec25c8"
  },
  {
    "url": "assets/css/0.styles.46e4303d.css",
    "revision": "3fe96e7636f4c071216e6aac8f6f64b1"
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
    "url": "assets/js/10.a806c7f0.js",
    "revision": "a825487080eb5e68419bdbf3817f0157"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.ca320ef7.js",
    "revision": "0ef14c81a156820075e23874b73c78d9"
  },
  {
    "url": "assets/js/13.e328e07b.js",
    "revision": "c0f7fcb8a4633eea13382cc571923e39"
  },
  {
    "url": "assets/js/14.3f594550.js",
    "revision": "1ec4c08c01b75a6154d84928bf6f5591"
  },
  {
    "url": "assets/js/15.04bf9086.js",
    "revision": "ea756d73e037a6bc94ac582d05769274"
  },
  {
    "url": "assets/js/16.adb5fad4.js",
    "revision": "2b3df8a68e60c2516b93bfb60fd6840f"
  },
  {
    "url": "assets/js/17.b994cea2.js",
    "revision": "766b9ac4479af61020d611987295eaac"
  },
  {
    "url": "assets/js/18.5f1256be.js",
    "revision": "2d453267fdbfe1906f5ecb08b96833a8"
  },
  {
    "url": "assets/js/19.5d5d1e68.js",
    "revision": "893bef4dc817f570bc64b6054c7126ac"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.6c8b0911.js",
    "revision": "c76e491f7576a0ed62edc67ee78bd335"
  },
  {
    "url": "assets/js/21.1084e478.js",
    "revision": "01b506f090ad4a8091d321bcfe345d6b"
  },
  {
    "url": "assets/js/22.f4b24b00.js",
    "revision": "863589207a26f7fd22976d8936e50cf8"
  },
  {
    "url": "assets/js/23.46dbb0d4.js",
    "revision": "71a7600edcb2ca28036e939d98b1ad0c"
  },
  {
    "url": "assets/js/24.b91b29b2.js",
    "revision": "696e2d59370f7dd2d90dbd8634724b9e"
  },
  {
    "url": "assets/js/25.b48dc379.js",
    "revision": "82b5e125c4e9116f6f43d8aec5bf22ea"
  },
  {
    "url": "assets/js/26.f2ebed70.js",
    "revision": "aa92d2fae4e35950a364dc6b8a8fdbf1"
  },
  {
    "url": "assets/js/27.2e6644d0.js",
    "revision": "5af4f00d24e895e5c64359ef65d00349"
  },
  {
    "url": "assets/js/28.b646f375.js",
    "revision": "57ab25a08ac7ca33bd3e6619f5c6be8d"
  },
  {
    "url": "assets/js/29.b515204a.js",
    "revision": "987cfe634f30b9f4f953cf43c672887c"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.0df019ab.js",
    "revision": "46aceaa9e2d6629c7dbbb692346f12ad"
  },
  {
    "url": "assets/js/31.2c23dcc3.js",
    "revision": "7ac29171a16ae6d12b4c2d7ce4992bef"
  },
  {
    "url": "assets/js/32.20929214.js",
    "revision": "d7e37bd31a246b09fdcaab88fdb9dff2"
  },
  {
    "url": "assets/js/33.46e092f1.js",
    "revision": "a0b405da0972be64a91f6c8936bc3328"
  },
  {
    "url": "assets/js/34.c56c3b18.js",
    "revision": "ebe4cd40c441099a50c577cd81896088"
  },
  {
    "url": "assets/js/35.34d6ec69.js",
    "revision": "95bd2bd9c401ee49edb4fcb7545de9a0"
  },
  {
    "url": "assets/js/4.fe7d941f.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/5.2ecd2552.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.a1267de7.js",
    "revision": "a9e040b02d5aec91c06ad379240938b8"
  },
  {
    "url": "assets/js/8.d2b563d5.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.1ac85436.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.005e6c3a.js",
    "revision": "62b34746fe0c4beac15164435dc465e4"
  },
  {
    "url": "index.html",
    "revision": "83150a5cccb1635df6d470f69994146e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "02a73de1aa919f3334fb2d9c94252df2"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "16c5a605a07ac6b6858178d1bd2287cc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b76e3ab1da53987ec5731097fe4ba010"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "6a37eb7b56783bf63a02d61ee73ff91f"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d9471333ea8725e23ce3babca7c8daff"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "c531657d87d7f4843e9aa4f2bf462bc6"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "fd54f969562361987c8b7ead0e0bee96"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "9c8b7430732b0b4b8b0cf47c6c813a50"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "fabe3fdd0abdc3248a3a09009c80c34c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "2b2ca3dca4f7ea783a5a5c7417887197"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cd6ab0b21c9cc639a59b8a64325b7ab1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "04cf4e49df1c7366a62303d5d0a64e7f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "211c06c08e848763eda3bd30894d7096"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6c8b307446faedf6483510c4ea5c7d9d"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "0dcb8bcb18624e1be1e93db6852ad59c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "629bd0e47dda6ec6395e9722488a6676"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "4c88584d965c4a3d039a425e2c6b6315"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "b89ad07997479199b89778e84218200f"
  },
  {
    "url": "Node/basic.html",
    "revision": "fbd62867c4875d692cbca2cb1029a0fe"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5f2bed47290a9963e3dc134031e515a8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e7ea08c3207afc7ba262c19309b382f6"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "bbdb985d7ee85a64645270e8b81e3d61"
  },
  {
    "url": "Vue_2/v-model.html",
    "revision": "af05b2e0d8e9bb6684bfd03f0554a6a1"
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
