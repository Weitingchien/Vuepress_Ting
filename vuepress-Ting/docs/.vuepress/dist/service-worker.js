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
    "revision": "cf55fd5fd715c76eb3dcbdcd9bb8486e"
  },
  {
    "url": "assets/css/0.styles.8579df09.css",
    "revision": "43aed8c9704c247baec3555e3e4cb2f7"
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
    "url": "assets/js/10.3d25c7fa.js",
    "revision": "78f372b8a96dc2b001684e8d8e3dbfbf"
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
    "url": "assets/js/13.e496d170.js",
    "revision": "f986b6e0d861e30651435e69f6f45f9a"
  },
  {
    "url": "assets/js/14.b551bb7b.js",
    "revision": "729c18ce6786928fd0487e6cefb12519"
  },
  {
    "url": "assets/js/15.a93ea14f.js",
    "revision": "cf1892a83da521def47cf9c66e6c9653"
  },
  {
    "url": "assets/js/16.5c03463d.js",
    "revision": "34499aa45640c576c6abc64897dbb6b5"
  },
  {
    "url": "assets/js/17.603b5bb4.js",
    "revision": "7ab9bf3f3001f7b2ee6714d8d3501fb0"
  },
  {
    "url": "assets/js/18.c6716f7e.js",
    "revision": "0d0b081821c276bc5753b7f8c275efd6"
  },
  {
    "url": "assets/js/19.0ad3ef2f.js",
    "revision": "8507fb49338985e7c71adf59d03a8668"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.31524337.js",
    "revision": "17c53aae744d443ecce518bb445603c5"
  },
  {
    "url": "assets/js/21.0dbbf05f.js",
    "revision": "10cc6062b48d7fa9dfcb2cf82bef4f64"
  },
  {
    "url": "assets/js/22.4dfa3e4b.js",
    "revision": "4f689b3040bdf71f1693975d1d3d0598"
  },
  {
    "url": "assets/js/23.765e003b.js",
    "revision": "8561b13e854a29103a03f417cfe65524"
  },
  {
    "url": "assets/js/24.24519040.js",
    "revision": "731c5fcba308b2ed7a70efae9e4a8534"
  },
  {
    "url": "assets/js/25.82c59bef.js",
    "revision": "3cb7ba067c30d7d2ebb37a23dbcdcdd0"
  },
  {
    "url": "assets/js/26.95c0ccb2.js",
    "revision": "a35f107ef9bec8f42db93781ce5203ec"
  },
  {
    "url": "assets/js/27.1ff73340.js",
    "revision": "809d699ff9ed8b3b859bb632996491b2"
  },
  {
    "url": "assets/js/28.87a6b3d0.js",
    "revision": "91d34d01f58ad2c500e09615947c647c"
  },
  {
    "url": "assets/js/29.ce45615b.js",
    "revision": "45b42c0501656f343c4a7de9f120c374"
  },
  {
    "url": "assets/js/3.349b0dbd.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.b4ddae6e.js",
    "revision": "292809f09b2fe44b93e25b9b5232b509"
  },
  {
    "url": "assets/js/31.9e9a95c0.js",
    "revision": "48c3bf6458268d44da62650e01afcee6"
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
    "url": "assets/js/34.37b0af32.js",
    "revision": "66e023f323e3d7e2a67fca0da7fd3a25"
  },
  {
    "url": "assets/js/35.7b04ee33.js",
    "revision": "27e5a3e13091f8efb1131b7e35681a2c"
  },
  {
    "url": "assets/js/36.b374a792.js",
    "revision": "8feaebfa4d2cd4d1e1a50d493af9c279"
  },
  {
    "url": "assets/js/37.270ee88d.js",
    "revision": "2f1b02cb698566e270b3ac1da4e6e753"
  },
  {
    "url": "assets/js/38.f3bed007.js",
    "revision": "24fb2c2ad5043d8f3771c6a34ff9bd2a"
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
    "url": "assets/js/40.44595c9b.js",
    "revision": "ef1e93941ab67cfce1739159f5da0323"
  },
  {
    "url": "assets/js/41.d917b18d.js",
    "revision": "3eba8dc93c68ff785bec2aafcdc2d476"
  },
  {
    "url": "assets/js/42.11bc2f97.js",
    "revision": "323d3704aa15d3f63e51949ea046c7eb"
  },
  {
    "url": "assets/js/5.9fef5e85.js",
    "revision": "60a53394e2a6bc58ff79ae155ff457a4"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.94ecf3d0.js",
    "revision": "b05ad03199eff34ed8e4c5b93e42773f"
  },
  {
    "url": "assets/js/8.947cdf14.js",
    "revision": "030c63e9fb4b301437be71f321008ea3"
  },
  {
    "url": "assets/js/9.f1559197.js",
    "revision": "08406fa668c0b757fa46bd396d12dc00"
  },
  {
    "url": "assets/js/app.2fe6c01f.js",
    "revision": "a8296b26468f7915991a44422738086f"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "3d537bc57743fd69997f1b12034f291c"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "2e4c4e0958a7a4be3528d22693c6b2aa"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "480d32e4d19fc0d9e528488b89200efa"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "cfc6f28a9e50560b8ebcfd376add26fc"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "444089bb7b2d50307bea5be13cd29b0e"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "f6373117388c674a455a13f70708102e"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "019f8066b05be2e400b0625996ce5671"
  },
  {
    "url": "index.html",
    "revision": "cb95672f018db5616aef5a24e9e7b1c7"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7fcf606e82e3f25ad5a7940a2f669339"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "c824ec275b7cb353f49b802b512a5608"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "bff5b5be0c2270dae13ecebaae29075a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c573791da7f008f668370da3fb15b62e"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e9a57c6f269d9af2212a36e8713b5c88"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "ea637972a2e16a507f10e8808903d040"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6ef1e307e2ca5cdf0cfc4f9de28b33c1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f8f0ac0f3e3b844fb3463e1971e3557d"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "3af0eb21d6f7daab593805f08647c44a"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "e17c042b9f18d65288e8b93b56794f25"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "519cd59a5a8efb1255e59756e2fc95b0"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9b4cc0f168e15b0fbb689d7d1756709f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7935d074b98e2ab59092d5054ea41117"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "f0beda765f4dc2b5a60d0f5c46f45b60"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "d6d8d5abb8c76668e520b6d7eba11309"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8229b84f67a1efce1728b6fd27373b7f"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "4d307cb33d9dde5992bfdd183a8e225c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "668b41758b30d9fac584294270986876"
  },
  {
    "url": "Node/basic.html",
    "revision": "45b0d03f0271cf623d7a0516f5eb640f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5552bad04c1b2ea6885d0c7a204079ba"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8fe1b5787ab2870f2383558f3e4cbf62"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "ae74c35914062258b93a423add58ce79"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "e20be41ae3dce184325bea5b657a3be3"
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
