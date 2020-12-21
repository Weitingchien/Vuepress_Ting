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
    "revision": "b0902c3734c92d1d41bcb2f6303718e1"
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
    "url": "assets/js/12.5cd4b6b3.js",
    "revision": "cdeec5b9baaf16c7a70491552890179f"
  },
  {
    "url": "assets/js/13.98209747.js",
    "revision": "514aa0e71b0682db9c089b2f083401e9"
  },
  {
    "url": "assets/js/14.ca3a3cb5.js",
    "revision": "ba76debaeed69d26bb41e68ca18f87bf"
  },
  {
    "url": "assets/js/15.942be6f4.js",
    "revision": "7960dcbfd5bbd9e39c4af8afecad29ac"
  },
  {
    "url": "assets/js/16.4a7080cd.js",
    "revision": "0bb77639186463e048fd997039585b10"
  },
  {
    "url": "assets/js/17.63b8d2fe.js",
    "revision": "7f9467b98e09b2e74182d7cd9693211a"
  },
  {
    "url": "assets/js/18.cd6be039.js",
    "revision": "b4c4278e9475f0cf9bbb25293456ba4d"
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
    "url": "assets/js/23.ae9b7ef2.js",
    "revision": "bab8e1591a28d95ff6a89f3faa094cc9"
  },
  {
    "url": "assets/js/24.0f63d207.js",
    "revision": "caf897820ff4e86844562861d244522f"
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
    "url": "assets/js/app.546cfb12.js",
    "revision": "84c979be80213c21c7b7421ab8bc5d3e"
  },
  {
    "url": "index.html",
    "revision": "6ef7e1d7b7f811454719f11e95e63a9b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c6ec9ae6a06fbb2a0c1b903eb5fbe101"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c8f9e62e057639281bfc6470db630ace"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "5548ea9f5b7c416e52c581c0d75e1a65"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "0ce2da330f32bb15be1d947a4236df22"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8622af9c8b8b16ef9aa0a2bc1257923d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "3555352058514b6bafd7ed5749105868"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c6771b6235535eff9e1aa9a26b1510c4"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "4619d8fc61cf4ba0a622166634cb45b3"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "11b0f97c630b6a6c4e3a6941a5155ad6"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "2a498b8406aaa832b69ba17fc829c338"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "305df0048d72ec00d20f460f7a219516"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "199514f67b172a6d24bc89b01ca96d0b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "9dd33502664585c06c473977bc32eb97"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "289aaf82deee53e362aede5d47277f0b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "334626042ca8c5320e4f4c7bf29c5f25"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "6b87c65908d57323f1d958e93c9a0c1b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8e1bd2b40b1ec612f8d0e3e82b3721d4"
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
