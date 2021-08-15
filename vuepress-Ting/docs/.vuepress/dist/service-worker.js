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
    "revision": "a41c8b4a33ab9904a15481b50d5f3e05"
  },
  {
    "url": "assets/css/0.styles.a955cdd4.css",
    "revision": "e06c44bb4975545247556a387cfae182"
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
    "url": "assets/js/10.c5eb8a75.js",
    "revision": "1384704d554c1dbff29f9930a314e2aa"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.1718e057.js",
    "revision": "163864f89a31bed9abf6384fc9be90aa"
  },
  {
    "url": "assets/js/13.7ba80adf.js",
    "revision": "3a69427efc33dfacfee94094d8cc3104"
  },
  {
    "url": "assets/js/14.b5d446ba.js",
    "revision": "1d5eddcf384a7969968a100039214dd9"
  },
  {
    "url": "assets/js/15.3112a4dd.js",
    "revision": "e55940e5b9747d13f4da3137475457fe"
  },
  {
    "url": "assets/js/16.b9d3e2c5.js",
    "revision": "12723b3702f95260904a6c6d0a9b1e9d"
  },
  {
    "url": "assets/js/17.603b5bb4.js",
    "revision": "7ab9bf3f3001f7b2ee6714d8d3501fb0"
  },
  {
    "url": "assets/js/18.9f51839f.js",
    "revision": "6f0bf2e447903ab179393cc4c7761f70"
  },
  {
    "url": "assets/js/19.0d84f59e.js",
    "revision": "455bc4c984ef2bf1aa87899851bdb978"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.d56828b8.js",
    "revision": "a0aa3f96f6502c5808312b47efd054a9"
  },
  {
    "url": "assets/js/21.826ca9ad.js",
    "revision": "8d849f831e6950812bf5719d7a05bbb6"
  },
  {
    "url": "assets/js/22.4dfa3e4b.js",
    "revision": "4f689b3040bdf71f1693975d1d3d0598"
  },
  {
    "url": "assets/js/23.4d880c50.js",
    "revision": "1650b384977093662ecd4c8d067f797f"
  },
  {
    "url": "assets/js/24.1c7acd0d.js",
    "revision": "52fbe5ae0b399440a67c9bdd76201d7f"
  },
  {
    "url": "assets/js/25.d64a1f12.js",
    "revision": "bc770e07ac73fd83d4ea3a7750cef013"
  },
  {
    "url": "assets/js/26.95c0ccb2.js",
    "revision": "a35f107ef9bec8f42db93781ce5203ec"
  },
  {
    "url": "assets/js/27.083041c2.js",
    "revision": "cb002d0576c79d0f7a712d48ee4871f2"
  },
  {
    "url": "assets/js/28.d844450d.js",
    "revision": "231a0270ef8c86e99f30a510821902f8"
  },
  {
    "url": "assets/js/29.9a72a475.js",
    "revision": "f8d21ee73ade72f7f9fb3afa73ba0d81"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.79c2ae38.js",
    "revision": "b18caea7dc8c957feae2a55a107cadf3"
  },
  {
    "url": "assets/js/31.28a003ec.js",
    "revision": "a46fba9bcd483e2a61500446f7b3bad2"
  },
  {
    "url": "assets/js/32.25196118.js",
    "revision": "3fbd4782745270fdb610ed7f962040d3"
  },
  {
    "url": "assets/js/33.17a38fb2.js",
    "revision": "8e27519b3bd538b36d79b174f1270920"
  },
  {
    "url": "assets/js/34.c9f2554f.js",
    "revision": "b14ff2cf08355e379d0cf7ae005bf019"
  },
  {
    "url": "assets/js/35.875dee0b.js",
    "revision": "6d057fcf49c2c50804341287f42308ac"
  },
  {
    "url": "assets/js/36.629686e6.js",
    "revision": "22e598563bc9891bdc494c8155bfb084"
  },
  {
    "url": "assets/js/37.8f787f46.js",
    "revision": "2f202d7e9a9c9109cfb9cfdc91e7ff24"
  },
  {
    "url": "assets/js/38.20b8a3b2.js",
    "revision": "6cbe96901c96e68dcd428e525da190d4"
  },
  {
    "url": "assets/js/39.0efd9108.js",
    "revision": "b6fe2839f4b8f222a148441de6c35139"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.8e78699b.js",
    "revision": "e1925758754d31171f91723ef2647f58"
  },
  {
    "url": "assets/js/41.b1e03a19.js",
    "revision": "e13f7db64f6bfd3611b1aaef1ceaadbb"
  },
  {
    "url": "assets/js/42.11bc2f97.js",
    "revision": "323d3704aa15d3f63e51949ea046c7eb"
  },
  {
    "url": "assets/js/5.a0e6fb5f.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.19bf9b44.js",
    "revision": "7486b57bbc85a1af61f77fde952a4550"
  },
  {
    "url": "assets/js/8.947cdf14.js",
    "revision": "030c63e9fb4b301437be71f321008ea3"
  },
  {
    "url": "assets/js/9.26117c4d.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.157febe5.js",
    "revision": "010959d4de92387be985514d9e1d8eac"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "b14ae45ec88ea261a18bfd9b7492b029"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "7c850906bd526d7fd01a063cf7a2ee4b"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "558965a7a7ca2eaac5e683674651efca"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "b51929df7180cfb624e650c61ad05ded"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "975b74beae7f5477361b3620af929e25"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "af817a9439f3ec54b540386f1a94c545"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "5250c1326e3d24d4fac0eb9891c45af3"
  },
  {
    "url": "index.html",
    "revision": "79c9e4da1d51ebcf99d7353651d7c300"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "469caa5123e8bd40d803a71e299c81e8"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "2c7a41b4825f1fee8f00c35d346cc0ff"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6c9c8d939f4b49f2f75e6581a689a33f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "fe7f1eca73d6e316ffe02758383cb2b8"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "174a2a15c648633d5b8d75b6739953c7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "c9c46cb73e42a1cf4ea9ed2388956778"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "f2e47def01ebde74b9742251ecfc5f62"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "483a3587f76b2c466d2d92d78039dc80"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "43697a5feb8f2cb12185905e4d4f3779"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b0a0e7542a3dabe116d86c00482c540c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "017f273b2c210d681d11cd797c53972b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "a0b7e22c354680ac6969f4e478c962e1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "36412d3b51b3488dd919600b4a158adf"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7c2da9d0e930cacd23fe24600abb4609"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "695d07d2cada119197e67da0228f9042"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6457d4667e27656db46692f0e6c2d99d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9c1b6d8fff977b24f1520be328cb6912"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "871c659ab608f125d545bf412c5a28a1"
  },
  {
    "url": "Node/basic.html",
    "revision": "8540c1b46c9b8077afc27bb3c5fabf25"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "300cefb373b49189d40722bd85a73d67"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "36fecf6060b4fbc395728a68d6579a55"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "229f6744b8e92ca244bfb894630094c0"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "76bcb3abdc5f39bec820b6549ce43efd"
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
