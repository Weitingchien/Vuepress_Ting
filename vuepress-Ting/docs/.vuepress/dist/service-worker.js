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
    "revision": "f67fc58ef1b862a7fc7086bd2ee4ea7a"
  },
  {
    "url": "assets/css/0.styles.1bdfa3e0.css",
    "revision": "7ae6ffc66f3eae6d6bd11b3750fe6fe1"
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
    "url": "assets/js/13.d29c71bf.js",
    "revision": "e72a8d7aefe8a3052a46bf622c147fdd"
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
    "url": "assets/js/16.4a7080cd.js",
    "revision": "0bb77639186463e048fd997039585b10"
  },
  {
    "url": "assets/js/17.91e0466f.js",
    "revision": "7d6dc189ff47c064b49a71762340bbc9"
  },
  {
    "url": "assets/js/18.2bd6cbb7.js",
    "revision": "add117d43b05c3ea9bf5f114d5317972"
  },
  {
    "url": "assets/js/19.60c7d3bc.js",
    "revision": "891207cc25f51511a97f81ebaaee90b9"
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
    "url": "assets/js/21.9a62fe99.js",
    "revision": "2726bfa7e951d4b6d59d4091c85a1326"
  },
  {
    "url": "assets/js/22.56fcb4ac.js",
    "revision": "f6f22ed23f680b2f31d3437a51eaaa7d"
  },
  {
    "url": "assets/js/23.8d8ffe1b.js",
    "revision": "173241129a1c2a7fdc4291618979408c"
  },
  {
    "url": "assets/js/24.4c7790bd.js",
    "revision": "cf5367c6b127d5d085ad7ca86ba80aad"
  },
  {
    "url": "assets/js/25.db77b850.js",
    "revision": "c1772a598ac39068fcf090f595eecbf8"
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
    "url": "assets/js/3.628e0ea7.js",
    "revision": "37f3336f178619ba6958d1661eba7a7e"
  },
  {
    "url": "assets/js/4.fd9388ea.js",
    "revision": "4696b0cdfa39b8bafbee26cc49b42a40"
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
    "url": "assets/js/app.4df67ea0.js",
    "revision": "41f49987dd682eeb9cde5bfeff3369b0"
  },
  {
    "url": "index.html",
    "revision": "280f72c04d18404c34521cabf2b2e5e6"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b034e01639f3e438e88ea148b503d944"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "adb5c6bf674405fee1cdd94630bcb29f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e07e9e5f4f4d538c5aa3f909aa5b4e92"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "10fa67cdae2406dc96b19c59c443a572"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "0dedd041107fdfc6e142c56cbafc0ec1"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "733ca8cd660c40b50d16aea4a4585400"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "60fdfb74ebaa675ee1bce84f774e4421"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0fe20eddecc41e4f768c4cee22e8b203"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "ffd2510f0a0f8575b2527aa4f14877fa"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "04659e09d67922bdd98ff2193df26ac1"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "89fb330552bd211b178e3d88854d6f3f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "bf81d3c30ef350936afddd2fb3ec235e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6c5ce52c80664f0f14685680003f4519"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d91b1dbfd008f20eb3c1a77b1ce3836a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "55eaf8c8bceae3e1eef368b301f39e97"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "dbba90af6003ca1ffb27e7dbfa915dc2"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "58cdf06921e354c6a335a7474abdf549"
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
