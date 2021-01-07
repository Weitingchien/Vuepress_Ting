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
    "revision": "62e081b565a66d2e994cd1131e6af246"
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
    "url": "assets/js/12.2df5fd80.js",
    "revision": "74e5ea9bdb5c2c7d841b4c37474aef71"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
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
    "url": "assets/js/20.c7076490.js",
    "revision": "e53cf1238811fe871c68d892297333ce"
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
    "url": "assets/js/app.3276353b.js",
    "revision": "6bb0193a752778d91bb8bf5370619be1"
  },
  {
    "url": "index.html",
    "revision": "2c4e248a65c2b18700a6b7011d962c5f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "bedc0ed8d45185993987d5be5c1ad6de"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c048a1117445d5574e8f37ff7ea4bcf1"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2a470bfc7f8638f9c2cdb9c5d8f99453"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "59a749e18a9cb90e52d854271d96aaec"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8ca5d6d8921422cf71480b25cfabdcd3"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "5e4ed90b460cb7323fa9f266ac99ffea"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "3dbe058bf14e12943253ff9c2e02a774"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "3d74a9526d5680b376aed80135d9eb87"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bedc17d3b3d910dedc0cc0bf206b5d79"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ff0c414991a42907860bc34ee15bd3e0"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "d441d14cf9c4f4ea96d0591f040b9a2e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "e18f301dd0c60cc46a3e311cdd14b602"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7a53a904b7da212b38491ba5115978d5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "9629a4d5192d946a8181b819f8ac516f"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5a50528083d7e13e7ec1ed2229a05054"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "b48602ae363eb9b27ffaabd2eb7a7912"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e320d7c48deceadcf71cb6e7070547f5"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "4444ea07708c501f281cbdae28cbd668"
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
