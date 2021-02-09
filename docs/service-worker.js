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
    "revision": "b4525128b029770ba5aa5fe650be64c6"
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
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.b32ca792.js",
    "revision": "5fc79c89b53b776d52d0386653949f74"
  },
  {
    "url": "assets/js/16.6508dc52.js",
    "revision": "b2f3c18abd936d41e6aa56fcf88a84f5"
  },
  {
    "url": "assets/js/17.5bcb05c3.js",
    "revision": "b37239189cdb7fabba92a6e44006b673"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.b3b22f15.js",
    "revision": "689745007366f28a2070e823b49c2f8c"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.00b32853.js",
    "revision": "cd2ff549c41e2c665ff073d1bda29444"
  },
  {
    "url": "assets/js/21.8f8952d5.js",
    "revision": "1c3d8ec04986625e2162e57a602b565c"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.ac74a65a.js",
    "revision": "ff1fb464ea78da7c1700089b036da1ee"
  },
  {
    "url": "assets/js/24.ae9911e1.js",
    "revision": "6b68638a64cd8e310a1fe4b00bbb909a"
  },
  {
    "url": "assets/js/25.e439a81c.js",
    "revision": "08f8295e98446c7cc8dff092eadf21c5"
  },
  {
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.bfc31279.js",
    "revision": "d0afe5b46917c9d1e9b0adde8797c722"
  },
  {
    "url": "assets/js/28.7c3b4461.js",
    "revision": "130154be4085c65d301788d73779fc87"
  },
  {
    "url": "assets/js/29.651b58d6.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.949071bd.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
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
    "url": "assets/js/7.311dd1de.js",
    "revision": "723543769febdc94589aa1d21a3dab91"
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
    "url": "assets/js/app.d5835ada.js",
    "revision": "f3dba88c14a0c49cfb2dde560f935f5a"
  },
  {
    "url": "index.html",
    "revision": "231703b3cd251513de76439faaf11818"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "8bff2e4bb6fe66af6c52cd6acd76032e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "2ef5f78db681474577798579a7cc7dc3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "4a1ef32f3ad5d6dde8d80a15daf235e3"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b54343c2aa7f16fc580aff09bdccb41d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "9c644bafbc659f6d10570e7ba8807168"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "f4c2dc4526b4ea08cb87c050e7f3cbe5"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "9636d758e5c7a1a0d1a9ce2e5b918bd0"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "eba0d57fbb4b8c3abbb719798d890221"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "fe0d6d91f96f18f2ab584314e3b1f359"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "0a9c374b86737af9425bca5db549fc33"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "02d1a608bfe2d1817ac223aba4c63cd7"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "d69c3a3952632a000f8d38228b9aa651"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "48706c0655c8e72ee88344aa62fb078b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c6517678b0c9406ddca8333aa25f560f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "883c67d9093273cf41cdfe1b3e66b45b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b988b771446a996bbcf37f6dc82ad976"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "531f8549f5ff899eb43e190bbae71603"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "167d2562bf690b93e925f475c2c6cef0"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "073e760123fe41e93f740a0a13bb955e"
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
