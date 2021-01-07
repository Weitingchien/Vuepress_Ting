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
    "revision": "6d8a165072ca494f4a87472f77fbc419"
  },
  {
    "url": "assets/css/0.styles.c6707bb5.css",
    "revision": "44b11f49b6d2b23fd01bd446a39b247d"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.b13687e9.js",
    "revision": "0d4fb54da0de9eb07e557146a5b0dcf8"
  },
  {
    "url": "assets/js/14.ecdd90b3.js",
    "revision": "71ced8f8e9d2470a3db2a9bc2331cb2e"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.a6dd5f0f.js",
    "revision": "0791e6db7683b1ecb4cdc17a1d028537"
  },
  {
    "url": "assets/js/17.5b891347.js",
    "revision": "5262d220656a8665e4d681b997bea23b"
  },
  {
    "url": "assets/js/18.4fd5f62a.js",
    "revision": "bd6e3ed1b89d9efc68db630f2ca1fcb7"
  },
  {
    "url": "assets/js/19.53588efe.js",
    "revision": "e3cedcce8507a8624497cf44a9516e23"
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
    "url": "assets/js/21.78ac7fec.js",
    "revision": "90a118fae7befa1e65e9d6fd81ef06ce"
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
    "url": "assets/js/27.7bad2d32.js",
    "revision": "b6554754ed83df2ee1b00ab67ba0f47a"
  },
  {
    "url": "assets/js/28.1c81415f.js",
    "revision": "8aebc1830575a3fd43717596b1059473"
  },
  {
    "url": "assets/js/29.c76ba6a9.js",
    "revision": "7cc110ee670ce836ebebffb8a8b4bf59"
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
    "url": "assets/js/app.d69a44a2.js",
    "revision": "b259ba2586b213b8c2be49b847a2e9bd"
  },
  {
    "url": "index.html",
    "revision": "7253c9654e55b3e8b393a337cd7852ac"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0b4ad3e9782276ed54c128d28c3f51c0"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e2d26865597055508d1a65873ea9e468"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2a424cb7c29fbf40350a9e78580eaeb0"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "4e1a4e1a1334ca96a7be1956519404ae"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e9876af363d550de6a61f3dbbe9a3703"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ca6116063d52b6fb21bf1c29e14eabf1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "df3d0b9b7152cc96159994c42238d14f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "29033f01d2830fbfaec8fbce3c930eee"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a3ef9b6c74b6f664eb3bd869c66fd64c"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ac1829d68c6799e90ef14779c8dc8886"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "13a38ddc4ef8d659dcf39c8df971bb2b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6fc1c864db3dddf0ba8819adbc7dd615"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6f8c38627fc1b605b3e841a5ae423c88"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "944417cfcc1657f7482974cd783fc957"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "f1c9a4c5d9a6553ae8310dae77a63a8f"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ff739ed2a332e7278dde669e580362a2"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "aa247f1128c1678e1bbfec5169abb9a8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "199090f880838fdeb8edb5593c8fe952"
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
