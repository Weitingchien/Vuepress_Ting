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
    "revision": "9fc7e5408b959b61453fa48a34a45ede"
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
    "url": "assets/js/10.ea5f2bd1.js",
    "revision": "00a2e1b01a1eeb74625921ac1d978100"
  },
  {
    "url": "assets/js/11.96631b17.js",
    "revision": "08f290776dfe3b228a002f3e15c2447a"
  },
  {
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.540b39d4.js",
    "revision": "14329623dae0fc55f07d33fda1f7e0bc"
  },
  {
    "url": "assets/js/14.d16535c4.js",
    "revision": "43332cfde7845cb8c9c419c769dce508"
  },
  {
    "url": "assets/js/15.e655e7af.js",
    "revision": "241d3357c1305605e10e362d7f34e532"
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
    "url": "assets/js/18.2bd6cbb7.js",
    "revision": "add117d43b05c3ea9bf5f114d5317972"
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
    "url": "assets/js/20.33189989.js",
    "revision": "27c0d1df8320f4a8380119cb445e9408"
  },
  {
    "url": "assets/js/21.9a62fe99.js",
    "revision": "2726bfa7e951d4b6d59d4091c85a1326"
  },
  {
    "url": "assets/js/22.86cfa6a4.js",
    "revision": "8d0adca1c0270dae7003f08c2f4b5a34"
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
    "url": "assets/js/25.9fa8969a.js",
    "revision": "8c63d234a7516ef1cbc01c69f6dfc850"
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
    "url": "assets/js/app.4ed7c4a9.js",
    "revision": "871248fd7fac7209d5863b926d021d70"
  },
  {
    "url": "index.html",
    "revision": "27442119cbf776ff9ac6ac92efc74e07"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0827dc8eef5e7f1b9065f003f0a72ada"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d924fb2ae9ebea5e50b28a2892641c21"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "38bd2544605ce5e64c5c954e3387b802"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d7170b16536318843645665c63937a0b"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2004976dfd5c4614cc5dcc29e0f99b18"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "1285e06882a526390c29b2cadcfe5357"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "0da1e028e0e5ded50e1c0e1443a00bb6"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "cddf55aeac853bc5c4fbd767105a2abc"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "17a3b9494583034a243b164bfcae30fb"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "288e3dab35235dd5ae2d0c9be93918e1"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "3e68ff5bbc2c419e5e29d6ea25e33f1e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "381a85378156612af5f402b8455b8cee"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6b0e98c15b547bc4ca1e76c59cda4f5b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "4367fc267b959a2bdeac804f55b18512"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "e1a294c1fbd2889cdf7091659307cb08"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ff9563899bcdc4e87d6e9e1b106f3442"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "ec31adcaa00a7e9ac5afe8bb229869a9"
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
