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
    "revision": "46852528b398bd99bad376fb726ab5c7"
  },
  {
    "url": "assets/css/0.styles.e6633141.css",
    "revision": "1f32aba50148da57c07fd403fd8b221e"
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
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.b4d14af6.js",
    "revision": "4659e29c79b705dc02bb5b8c981c1879"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
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
    "url": "assets/js/17.5b891347.js",
    "revision": "5262d220656a8665e4d681b997bea23b"
  },
  {
    "url": "assets/js/18.8b1a7037.js",
    "revision": "daff5912b34622f754e32223f8db10ea"
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
    "url": "assets/js/20.8ac4e8bb.js",
    "revision": "1de1de405bdf4abf38834b63f4eaafbd"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.6af61cdb.js",
    "revision": "afbdd44478886e0cc34614d8049b7e69"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.313f4b79.js",
    "revision": "20b10722175bfb9d45189042ecac94ee"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
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
    "url": "assets/js/3.c0007ece.js",
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
    "url": "assets/js/app.08d74bf5.js",
    "revision": "1f8e2e707bfe00f3fc9d91c243e530e5"
  },
  {
    "url": "index.html",
    "revision": "7c3d81562893d9c8d3986c82df19c121"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "bbe92d2169fae594fa9e931b6b3edbbf"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "05bfa745f79b6ff100835bb3726b17e4"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "0a4f8b2fb9149979fbe52e1bab4c0862"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "1e4c5fae380f68a1c9559b66858b3b2f"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d86f46f26befcb1f40c88e04479d7734"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "1fc8123726f0040dbadca2782498e726"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "df3e9250e6e2ecdeca0b0acaf39c5ff2"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "248c5c5f2a99829b79a9d09ed84e98c6"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "2d3ce40c3a87dd8f699f596c2227cb91"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "a7d94b3d8dc57ccde1b2596eb605aa90"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "e4853f193bb1cd0ce2a6a021b0c78109"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5b1212a0043939f0f735b842a38c7a2c"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "d711bca225eb00050800d379acb0191c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "1bb930089bb69537105538de0699063c"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "69c4148389608efcc7d2acd6b60e04c2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "31eb1e07e2e0fa123fbd66603986eb26"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "7136fd83e425245837977513c24b9df1"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f83f31dde0ae37cd2a8c72864e773dc2"
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
