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
    "revision": "9f57f37b25663a5e7f6d053f0d189ba5"
  },
  {
    "url": "assets/css/0.styles.e5f03543.css",
    "revision": "cd72f3f0afe035a540306990503a1e5f"
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
    "url": "assets/js/11.7ddabcca.js",
    "revision": "e60dc5d18b972bcb8f49e1854526a518"
  },
  {
    "url": "assets/js/12.3326564c.js",
    "revision": "178ffdf4430c5d95405cd430c02ab931"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.b34a98be.js",
    "revision": "ae8619623a3135844fe194a41c5874b2"
  },
  {
    "url": "assets/js/15.497e2dcc.js",
    "revision": "c82816918646cc076b58671e983c928e"
  },
  {
    "url": "assets/js/16.35b44e55.js",
    "revision": "cf7b9288e10bc6122e2c7861e04b8ff9"
  },
  {
    "url": "assets/js/17.02ba3247.js",
    "revision": "f75b6dbc559c3b9497e57f0be57bc6a6"
  },
  {
    "url": "assets/js/18.8fc5caa6.js",
    "revision": "0281ba4dc1643a07b9e3242e00e4bc86"
  },
  {
    "url": "assets/js/19.12fda8aa.js",
    "revision": "077508ce401b505f1e0ddae8e0ccf2a9"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.902358a1.js",
    "revision": "8e31716ca792edd1706f0137a822cc0c"
  },
  {
    "url": "assets/js/21.1a2935b6.js",
    "revision": "9183babcf41e38aa048cc2b2075d59a7"
  },
  {
    "url": "assets/js/22.398a014b.js",
    "revision": "0bdc63dac1ae873ad2eac406a4f3be34"
  },
  {
    "url": "assets/js/23.9b122b28.js",
    "revision": "ffc7bb2bb29de589ca3f074c07020588"
  },
  {
    "url": "assets/js/24.b3e767ef.js",
    "revision": "f3fad38f0757499a6518c490a516e5ef"
  },
  {
    "url": "assets/js/25.c4112e0f.js",
    "revision": "9ab3c5a7a6d25e1eae894072939c88ac"
  },
  {
    "url": "assets/js/26.153ae1b4.js",
    "revision": "d571d1fc7a600ca349a5d2e23497b1b3"
  },
  {
    "url": "assets/js/27.7872fd85.js",
    "revision": "c691b374f47103105826dbd7bd2cecec"
  },
  {
    "url": "assets/js/28.8baf0fe2.js",
    "revision": "b99febea8281338c3bcf330822042ee3"
  },
  {
    "url": "assets/js/29.ca4d805f.js",
    "revision": "0085b934ce03fe1ad3658a2bd278950d"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.f2a95d54.js",
    "revision": "4f5288d4b6e43184cf0f3f6628279011"
  },
  {
    "url": "assets/js/31.5652a6fe.js",
    "revision": "359e1569f1df193ea90705e9b60984a4"
  },
  {
    "url": "assets/js/32.340996d2.js",
    "revision": "29ac245b568dabcf7f34d5eea630a884"
  },
  {
    "url": "assets/js/33.2eea2dd6.js",
    "revision": "2d4db90df24a14e4bda5bb971a718058"
  },
  {
    "url": "assets/js/34.223e56ec.js",
    "revision": "2a350788683d9cbdf07b075230189308"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.822a691a.js",
    "revision": "c49faf1a142b55e76bd72c7b26f0e926"
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
    "url": "assets/js/app.8648666d.js",
    "revision": "dc09c6adde07ed41c4732a91690cea6a"
  },
  {
    "url": "index.html",
    "revision": "2a98fefc408671e446f5a7795f0054e1"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "772966daea7b097f7192b3794e12f4f2"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "972c9a2597a47c38c393439ecc437393"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "7d49f40a5786c8876d82aed33b55428a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8ce78ae573de66b4f3a29d8b78a7b1e2"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "ad64ee927e6250f34c3db7e57f81d0bf"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "88a1b8881dce28dd1a471e2378b67c9b"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "3d92d16230b701add56c3c67c5be419d"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "0cccee6da23707847f048fd6e3e88772"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "c9731993ab78827e7e81fd0e42bc69a8"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "cb729daedf7ce0adab89d3addec42fe5"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "389faeb7911812c944a2cbe0654a3eba"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "52a98306ff51b4c2a4f3e7ff8dc4bf24"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "422dbd776a9182063dfc1edaa0d22a82"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "395c85153761bda9ddcea023329c093e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e8de352ad25638298bbf61536aec494e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "139da5cde2c467c1d42d2663733a0955"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "08831e1e1ae4933f37f8b085ed84af7e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "67d60f4cb95a2af9432d11e5c22cf90c"
  },
  {
    "url": "Node/basic.html",
    "revision": "d8deb58190d2fe6a540e82b05ba9a17d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "6088cd592db1e0caff728b4dfa4d0998"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "ae56d805c9b01347053fe97debd8840f"
  },
  {
    "url": "Vue_2/v-model.html",
    "revision": "56f9528a087ff5a1f883c4267719ce3a"
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
