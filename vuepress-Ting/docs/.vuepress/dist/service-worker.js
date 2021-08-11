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
    "revision": "4c79d21bf592f4fb834001b90dce2ddf"
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
    "url": "assets/js/10.83dc0a4c.js",
    "revision": "074407ba42a5f1510dcde77ff319af41"
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
    "url": "assets/js/13.66bb442c.js",
    "revision": "3cb5265e54fbdcf1ad564970bfdae059"
  },
  {
    "url": "assets/js/14.e356be83.js",
    "revision": "144af324c6b33952a5f10b90aec2f1e1"
  },
  {
    "url": "assets/js/15.3112a4dd.js",
    "revision": "e55940e5b9747d13f4da3137475457fe"
  },
  {
    "url": "assets/js/16.10c49961.js",
    "revision": "0ef8b50ae8472df371e4600abe311d3b"
  },
  {
    "url": "assets/js/17.41ba8d1c.js",
    "revision": "79b1bcb30f41cb7936ed067333ccd7d3"
  },
  {
    "url": "assets/js/18.9f51839f.js",
    "revision": "6f0bf2e447903ab179393cc4c7761f70"
  },
  {
    "url": "assets/js/19.988e49d3.js",
    "revision": "5d99f0593381becd9be385a069a8b9d7"
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
    "url": "assets/js/26.40ab824a.js",
    "revision": "d181a197e2f0398ace5f536d57fa8b83"
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
    "url": "assets/js/29.d1314057.js",
    "revision": "7514d93d226be3c50168925c5a3fe8ec"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.b4ddae6e.js",
    "revision": "292809f09b2fe44b93e25b9b5232b509"
  },
  {
    "url": "assets/js/31.28a003ec.js",
    "revision": "a46fba9bcd483e2a61500446f7b3bad2"
  },
  {
    "url": "assets/js/32.d4bf4d7b.js",
    "revision": "957cc81328385d28645637f396581d91"
  },
  {
    "url": "assets/js/33.17a38fb2.js",
    "revision": "8e27519b3bd538b36d79b174f1270920"
  },
  {
    "url": "assets/js/34.caebc05f.js",
    "revision": "b76b0dd193c10c7707bc8c701e819e31"
  },
  {
    "url": "assets/js/35.90da97b0.js",
    "revision": "db65f6ac232bf0d41b6e700d5e5da501"
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
    "url": "assets/js/38.f3bed007.js",
    "revision": "24fb2c2ad5043d8f3771c6a34ff9bd2a"
  },
  {
    "url": "assets/js/39.ff7859fe.js",
    "revision": "3ec5371a01e89234c6713265b7c1face"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.3a0fa1a3.js",
    "revision": "b74a530aa22b9753fc96cd5e9f8a9a38"
  },
  {
    "url": "assets/js/41.da014ce2.js",
    "revision": "052c1a482b126991642316a4a9f3f352"
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
    "url": "assets/js/app.6242742d.js",
    "revision": "1a2d08803abde6593bf29139ef2910ab"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "a3451e62791978ed495742443828a067"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "7059c3dc30893843d2be074e16fb13fc"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "5203fa642bc46a71d956ef99e9a15088"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "922254363d3b042b181d0df241f736c5"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "e6fadb141721ca8f92f0b88e62ef1f06"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "b8158b55b7c65e3132e74fda221d05c9"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "f93a40e824f1bbdd0a6000c45d3d87c6"
  },
  {
    "url": "index.html",
    "revision": "a4bb3032640ed37e2666d0b91d2265b0"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "232b4bd9c55ac02147471d43c1e10e5f"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "dd442c9d8b9bd26d511d29619d281310"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4526ec1462c078d76b0df2388b038fbc"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "92d677bd76d4e623801fe33d6cdfdeeb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2c366a79b1003bc625e39c4009dc44e3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e27769912a9ba7428591230cf8fa05bb"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c6f1122052a0c0065b09b1b73464f9bd"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "9f50fc3c3fd0ed79b5ba516088ec31ff"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "cd98cc68b4618a8e5a609f438e8b7ef2"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "26fb8b106315a1d3ab6f3789e694ca08"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "fb097298a131c1cfb0f297f6f3831f26"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c9033b1c018b07c46562b54812319c35"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7d9781657dd312f5a9e95b6a0e750f13"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b1acea47afe3b03cb1cc6771be8efec7"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "09af0539d4220919b7b8cc4ec0da40a3"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4853007c76b055d5a9d5f19b5925f1cc"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "f333dc2699613fbd3bd2727c04a1f372"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "35af79b674ffd5b4bd078177a55aa13b"
  },
  {
    "url": "Node/basic.html",
    "revision": "7d0c7ac912dbb42b535b5908913eac43"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3b7bce5e9f647f54da0e0f94f46de4ae"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "af60cf3fc93bc6ed699caccf24763bc6"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "374c8136edbd6bd828b9a763dbf37d65"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "9174d885f1f8c91f942a560f7dbef5de"
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
