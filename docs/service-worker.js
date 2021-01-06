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
    "revision": "eda74bc2d927ea0ca6ae4c17f7b34c57"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.6dec696e.js",
    "revision": "e27180958ea0f79b791dd490a3cfc568"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.ac649243.js",
    "revision": "6e972fd2d08fba9016225c7e8f9ff6da"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
  },
  {
    "url": "assets/js/16.34e49f69.js",
    "revision": "6706cb8f9d89d9c4c5ae68cb0893e49d"
  },
  {
    "url": "assets/js/17.48171330.js",
    "revision": "082a894ce87d1be4fba47b1fdc2869cc"
  },
  {
    "url": "assets/js/18.e747b6ba.js",
    "revision": "fdc372054bf9928dacc5150c2e558382"
  },
  {
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.d1e45bb9.js",
    "revision": "8f16a6e071e5367521f0de907824e5a7"
  },
  {
    "url": "assets/js/21.f1d766b2.js",
    "revision": "f754303e5d120763d6c9d0ca731dd34b"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
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
    "url": "assets/js/app.f4801926.js",
    "revision": "498f436b07fe2ceae05e3c6e910a27b4"
  },
  {
    "url": "index.html",
    "revision": "5aafe47739b5fec14c585350e01ba17f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "1e2b0f059d882e8e21f625237d14801c"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d79beb7e0b98fce63b5ea71375faa2ec"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e0b3b81bb1d9dcb796be841d8954cc8a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2adf18c4b6dc8a93041f998804b92ed9"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "41e67336047464c55384d1c52c6d1452"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "018937d3550028f6f1d386bd03aa3ca2"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5c56be1beff188c1c0cb0ea74d30cf97"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "7961ba0c8cee28cdd7ddca630fdcaa2f"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "043b9aacf6e9abf1444ef4a4fe1fd175"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "3e69c8985026d8f28bc8650d95a63e19"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "4780da22a7ecae57fd88f5609ba1a20a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c1883bfacab2fc252fd1747d62a5126f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "2c4ad6f64a517dd6e4b23691453eb854"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b65509123508238a90922c65a00a0c29"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "a56db00a6bdc57602cd36d9299f7a96b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "fbe9fb0c692e08a4552b4a08e115f346"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "94482f527ca12767ad67552af64e005f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "16483f4b71e3f16894aaf97a212f7003"
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
