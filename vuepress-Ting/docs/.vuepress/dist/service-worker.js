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
    "revision": "631b2fa8ba80e85f277a2273f97c04fc"
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
    "url": "assets/js/13.bb6b4212.js",
    "revision": "0238ea92ce4775d6b830898b2cb7e176"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.ec6de913.js",
    "revision": "d6eccc49a8dcc356bf0b98a7d7204821"
  },
  {
    "url": "assets/js/16.0bef3f13.js",
    "revision": "991abc627b0a17834b009d234fd9efdd"
  },
  {
    "url": "assets/js/17.48171330.js",
    "revision": "082a894ce87d1be4fba47b1fdc2869cc"
  },
  {
    "url": "assets/js/18.d3a8c889.js",
    "revision": "c1d69a4b23a3891756db1b5f0372e6a3"
  },
  {
    "url": "assets/js/19.ab85ca15.js",
    "revision": "43937b9b776118d1ad64c37f5d14fd01"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.c7076490.js",
    "revision": "e53cf1238811fe871c68d892297333ce"
  },
  {
    "url": "assets/js/21.57b7a7b5.js",
    "revision": "59565d8c63216ee8ded39d8e4195976c"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
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
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.1c81415f.js",
    "revision": "8aebc1830575a3fd43717596b1059473"
  },
  {
    "url": "assets/js/29.d226f03d.js",
    "revision": "5d0fb9b487bd8c67704aa38ffc0551f6"
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
    "url": "assets/js/app.e48dd90f.js",
    "revision": "d1ce67d1e6aa04114162a66f60b19377"
  },
  {
    "url": "index.html",
    "revision": "e83541b399dc8a4c0bd265fb80695fd2"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "f9159e01003528e8e8fd91f3f2c93f89"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "78a193a5b4e0d66b4a0bacfc3d20f2d6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1c4bdba8cf70392bd91851e828d65490"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d3b4ba6321f9e8d1213e60ede9764d29"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "06abe91b7acc762bbfc4ddbc61d4bbde"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "f66e598e68a789ed50b7cc1e56bfa5bc"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "818119e7909799d4592691f1e6fd3a9f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a16340e0155b0aa0061d29cf378c97e3"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bb27b3497d7f19d161a84867c8098e7f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "5dff69eb16ce8fdc4bdac1efb05acac9"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "a9771c065d0b733803c0e4f137889bd2"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "0c5f475130230a8fac8f032a404129ad"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "310505e06dde3106a2c214717052b7ac"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "bdd9dc2066405d6cca714a159d6a723e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "18c9aee3170be621549da2e5004e95d4"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "a93d264974fcefb77d22e1261c4de962"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "fd8ad8a3a15ce8f36cd9aa0b9e1de1f8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "eecdd687857abb2b703ef0d23f37a71b"
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
