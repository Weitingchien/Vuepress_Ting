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
    "revision": "ca6192c518331901887a60fac814ddf8"
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
    "url": "assets/js/13.bb6b4212.js",
    "revision": "0238ea92ce4775d6b830898b2cb7e176"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
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
    "url": "assets/js/18.8b1a7037.js",
    "revision": "daff5912b34622f754e32223f8db10ea"
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
    "url": "assets/js/20.ec40c6eb.js",
    "revision": "09bfb279c564c4a4fc5b2125b42a0b74"
  },
  {
    "url": "assets/js/21.80c4b70f.js",
    "revision": "2f02aed9423bb7357551c94c23e0bde0"
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
    "url": "assets/js/app.07ad68ba.js",
    "revision": "ff7842c2aa1325eb28b3ccefa93c8ebb"
  },
  {
    "url": "index.html",
    "revision": "aa08c9a321106efef93c6df816771180"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "dfea75ec4ed9afb9a7843405331bb5ca"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "74b544cdcce6c95b3e0425985cfb607b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "6f08ee1d12ce0af3764adb668c50ec46"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5bfb27328956e9b7827c3eebc5bd4883"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "4ab09e0ef80962c8e01ff0a087f829de"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b5f78f09c020f430cc9fd6202a1244d8"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "818436080be548a185eaa26f3031258c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "828334669811b72f96093276e22e0a2e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b44422b3a29c7df1a3c229e1c7f2c5bf"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "b72eaea68e940dca182beca98c47f9d3"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b8b27ae220101937a345c507a344ab3b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "87a2637c74fa597514cbc27e77f0c7e9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "81c740ba7e0ebb99fc7f0bcb631c5b76"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "5b1d02a93548a09f240012e43a182380"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "21936595354c993dbb3cf6d4b81a8adf"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "11d67003893aafb4a5ecfbacdb3c9aeb"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ea7962580cdbf9b8673821c9f520b5d5"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e403f3e3bee934192a654f2b1ecb85f3"
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
