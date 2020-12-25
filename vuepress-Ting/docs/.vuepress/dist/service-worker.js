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
    "revision": "c399201e1f87773579a912f36ff26355"
  },
  {
    "url": "assets/css/0.styles.716e2279.css",
    "revision": "b45e464f90fe6a08d3d14e45e47f05e9"
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
    "url": "assets/js/11.209086e1.js",
    "revision": "ffb78cf0f2142def92231677d1c12b24"
  },
  {
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.96ddde0c.js",
    "revision": "4bf9a086a834493bf863a3b7b9575665"
  },
  {
    "url": "assets/js/14.e1132ad9.js",
    "revision": "460becf877b03a716a950e549822ee2a"
  },
  {
    "url": "assets/js/15.78d4de2c.js",
    "revision": "7e3664477cd2d17ece9c1c39b6639a7d"
  },
  {
    "url": "assets/js/16.cc8d7413.js",
    "revision": "277aee276fd6abd6c4cef6a44db03ecb"
  },
  {
    "url": "assets/js/17.63b8d2fe.js",
    "revision": "7f9467b98e09b2e74182d7cd9693211a"
  },
  {
    "url": "assets/js/18.3d4c95a3.js",
    "revision": "85c005801edec174cc67bb9d6a211414"
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
    "url": "assets/js/21.b7229cc6.js",
    "revision": "fec98cbff41977c5aef32ffc95acf4f2"
  },
  {
    "url": "assets/js/22.201250ed.js",
    "revision": "d2160d98a115cee524c5477ab4ba833d"
  },
  {
    "url": "assets/js/23.ae9b7ef2.js",
    "revision": "bab8e1591a28d95ff6a89f3faa094cc9"
  },
  {
    "url": "assets/js/24.4c7790bd.js",
    "revision": "cf5367c6b127d5d085ad7ca86ba80aad"
  },
  {
    "url": "assets/js/25.cd03520f.js",
    "revision": "ab0bdb43876b2ec00368c50aac9e6ac8"
  },
  {
    "url": "assets/js/26.ea270cc8.js",
    "revision": "7b59c6f43affeac871bfa8395157049c"
  },
  {
    "url": "assets/js/27.aeec6b72.js",
    "revision": "16173beed26fa981eeed3002ecb64299"
  },
  {
    "url": "assets/js/3.02bb17f7.js",
    "revision": "067fef848a1c5f16c59662064bed8714"
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
    "url": "assets/js/6.65910c0a.js",
    "revision": "76f1bb90e660c4a8f9f9dec03aad8241"
  },
  {
    "url": "assets/js/7.8cac0113.js",
    "revision": "5a6dc05de39fd2900e37b51d03038380"
  },
  {
    "url": "assets/js/8.3f3c386a.js",
    "revision": "7c08ae7dc722cf61603374b5f709f646"
  },
  {
    "url": "assets/js/9.0e9052cd.js",
    "revision": "69b8a925ba3e5fca5325e29032aa9b2d"
  },
  {
    "url": "assets/js/app.8b2f0a06.js",
    "revision": "edd5c19eb5fa8c22ace3eb129356ea1b"
  },
  {
    "url": "index.html",
    "revision": "df41c30cfffac0ecb6acbd1f1b52ee87"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "59966ff3b9991cc69ecd10e8984ba4a3"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "fba25f4da5db12cb49adb86b245a0e44"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c2645341561463b648a92f6887b37805"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "8a3c9790ca2641e7119117107f4b5d72"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "da0370dc59a296614ba7f849ec325b0d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "73040858db23a42a8f51a9fe9c9357da"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4496ed44dade2193a58442c474f836ac"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "1bc505d4400d33dfe00e138ff829e3d9"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "024a4463669ed64eefdfe48462debe44"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "30468cafc719130ac41a782e7db1b87e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "40cba0d7b205ed35949f4397c688ab28"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a1b2ecd8e1b198966fdc164639720f04"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6c775f12ff2044088a865bd3f0ba10f9"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7e9fc772e0675613e20d467e7daaa0ca"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "93bd540d65cc1a2ded8f4239c6fbb9c9"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "8583fb3c15863c00b13b76446d0264d9"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "75e310ede85fee8adba5184c4d89f25d"
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
