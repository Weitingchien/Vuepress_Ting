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
    "revision": "061c9ab0a8010a18543da2ab8693dfd8"
  },
  {
    "url": "assets/css/0.styles.64dc47d0.css",
    "revision": "f163c8bafee3c5b68a5e5f64e452a53d"
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
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.41993b1a.js",
    "revision": "477f656ed6622362f347048e4785fb67"
  },
  {
    "url": "assets/js/14.e1132ad9.js",
    "revision": "460becf877b03a716a950e549822ee2a"
  },
  {
    "url": "assets/js/15.2d1eb95e.js",
    "revision": "dcade61238ddc794dbd599458f056eb3"
  },
  {
    "url": "assets/js/16.028c46b9.js",
    "revision": "05719e4a2243d811f3f6e8cfc8ea9f77"
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
    "url": "assets/js/19.be66a3c1.js",
    "revision": "441fa86b78d4c4f1f7678cf19e4bb66c"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.b272054b.js",
    "revision": "0f06eccc6b7bd96e1f4ff7741663f575"
  },
  {
    "url": "assets/js/21.0e1e84a5.js",
    "revision": "b20fa70f336081b9c22a6831557860cc"
  },
  {
    "url": "assets/js/22.56fcb4ac.js",
    "revision": "f6f22ed23f680b2f31d3437a51eaaa7d"
  },
  {
    "url": "assets/js/23.f4cf3f74.js",
    "revision": "d7b6560479d4e9b044b43e70b9c9a17b"
  },
  {
    "url": "assets/js/24.862e7289.js",
    "revision": "c0c49919a38dae2c4daced8154b526a7"
  },
  {
    "url": "assets/js/25.db77b850.js",
    "revision": "c1772a598ac39068fcf090f595eecbf8"
  },
  {
    "url": "assets/js/26.86bf2207.js",
    "revision": "713697b4182af5c73f951253cb586735"
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
    "url": "assets/js/9.b1730dff.js",
    "revision": "d68ec6a5c77e2964583a1cdd07a4beb5"
  },
  {
    "url": "assets/js/app.bd58ed31.js",
    "revision": "7aee2ce07e51f078a90bc19cc49593f1"
  },
  {
    "url": "index.html",
    "revision": "e9da6dc0a790d81aa180688a5ae513a8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "6e1d135701a9f85bbdb98530740445da"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e801c400e0862d29bb5fbec794ff2491"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "22f940b419543f11aa4cf819fb443073"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d1dde24584c7d3a5af10fea1e68c5cfc"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8b4b72703f54880e57a6b914c20d4415"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "0b9a9e7b3ab63a585348d6dc61b86c7e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "188e5a34438af57bbb268b915cd91580"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a4520355096e181803b4260a1adf9117"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "fdbb15c89617d2487e47d86de8cbd4cf"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e47579b23976e9c22b78f78141ad0f7a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7428bc70fd516e6aa35e87c0ad14c82f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "18ed2090e300d240f96e9b89bbe7a82e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "137e4b50290349a85a2afc195d165843"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "32787f58c9c916ab383a9cb0bb0e602b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "a416cc2f828fc74c67e175b09e0ac7cf"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "7e71aba50f43be54c1a122b5f62d3e5a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "79b521d2223a4cb69915af6d8ee2a737"
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
