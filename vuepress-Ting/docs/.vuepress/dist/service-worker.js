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
    "revision": "9f41d787b1c781685c22aae0d45ea61d"
  },
  {
    "url": "assets/css/0.styles.850267be.css",
    "revision": "c4f0ec86ecca760b433eea114fd05980"
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
    "url": "assets/js/14.e356be83.js",
    "revision": "144af324c6b33952a5f10b90aec2f1e1"
  },
  {
    "url": "assets/js/15.a93ea14f.js",
    "revision": "cf1892a83da521def47cf9c66e6c9653"
  },
  {
    "url": "assets/js/16.1c420206.js",
    "revision": "f2b7ec365db8e5efabdd520da6e8089b"
  },
  {
    "url": "assets/js/17.c456059a.js",
    "revision": "53d253546abed035cd25dda44361a4ca"
  },
  {
    "url": "assets/js/18.ea5a2812.js",
    "revision": "2bd8122de66512fc4e7fdd549022273d"
  },
  {
    "url": "assets/js/19.e8628348.js",
    "revision": "4a50d997347e9c2d6253e36bb9559871"
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
    "url": "assets/js/21.274b9afc.js",
    "revision": "85a53486bb070012d02e40e61e3c2756"
  },
  {
    "url": "assets/js/22.4dfa3e4b.js",
    "revision": "4f689b3040bdf71f1693975d1d3d0598"
  },
  {
    "url": "assets/js/23.d1219b9d.js",
    "revision": "ca0b2368cb4666a1c095b76354468a88"
  },
  {
    "url": "assets/js/24.de0f74d1.js",
    "revision": "5714b0cdf6960845a03b79810074a3bd"
  },
  {
    "url": "assets/js/25.ec97c5f9.js",
    "revision": "43417b70ddaf6b88d0ac526b2f73300e"
  },
  {
    "url": "assets/js/26.6d925cde.js",
    "revision": "de548d5ca9767f32fbad70aeb724eb1d"
  },
  {
    "url": "assets/js/27.31f1b80c.js",
    "revision": "98eaf14d26f60efc176e175c6c0d4819"
  },
  {
    "url": "assets/js/28.6d85253c.js",
    "revision": "39f4d4f2c05ee9af05dcf89ff9cd8ea1"
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
    "url": "assets/js/30.1f93df19.js",
    "revision": "d90034dc8f6771805e118436fa5e5347"
  },
  {
    "url": "assets/js/31.9e9a95c0.js",
    "revision": "48c3bf6458268d44da62650e01afcee6"
  },
  {
    "url": "assets/js/32.27132d97.js",
    "revision": "ae850871d7d97540f14dc968772355f6"
  },
  {
    "url": "assets/js/33.17a38fb2.js",
    "revision": "8e27519b3bd538b36d79b174f1270920"
  },
  {
    "url": "assets/js/34.8bff4448.js",
    "revision": "f3e5789af22839f3d1f5de856719a158"
  },
  {
    "url": "assets/js/35.038c9d96.js",
    "revision": "27e846e40392a50a2641df85f1fa813f"
  },
  {
    "url": "assets/js/36.b374a792.js",
    "revision": "8feaebfa4d2cd4d1e1a50d493af9c279"
  },
  {
    "url": "assets/js/37.da564c15.js",
    "revision": "f79606bc3fe08bfce1c0a4d1ca8879f0"
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
    "url": "assets/js/41.42c9df0d.js",
    "revision": "8c0aeebb03cc61b8eda003baab9e55a8"
  },
  {
    "url": "assets/js/42.11bc2f97.js",
    "revision": "323d3704aa15d3f63e51949ea046c7eb"
  },
  {
    "url": "assets/js/5.7d668cfe.js",
    "revision": "d3b208808b5c81936631f132c137cdf5"
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
    "url": "assets/js/8.6d5c1c6d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.7368994c.js",
    "revision": "254a0f42d58837d5a47df3725c545a68"
  },
  {
    "url": "assets/js/app.3e965f1a.js",
    "revision": "7dc84a75592b951fb56473ef00b4eb08"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "327c26118972163899c7fcaa7fe747f2"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "6831456214ccef1f6d2c1f85f4253884"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "2371ccfb6f447b126289f17bdff1724f"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "b8d35c4ecfa6c52a8eb2f720096899c7"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "8f777d6ba500c367d0b85a4be0d405c8"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "b7d517d43ca0da984de012bddbba0489"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "4acea4da9ec262e4723b5424ce4d8307"
  },
  {
    "url": "index.html",
    "revision": "390f810a453f867ce1b265513872401e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "14cb285f0aa40e06692fa2c2e5f8682f"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "8a15e3b93457473fb70ed5e30ecf57cc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "2bdcb9df68b0842ddf455185f37017bb"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8c74167347696ffc5b91479c0cd81bc8"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "0571e504ff3da76a6d035cbc601a3414"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "bc8b89de896bd042e93834b4b1ab47a6"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "aa1d1bfd2e97a51ff2db86fd9c851955"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "24f2e8730f8a6abb3dffb20575ab3e2d"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "90aa567d1f8ceac8eabcaf4afb3c7f9c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "8e9c22ff76b10407d3b3da219d841cb1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "25c8da47405fed0d929e8df99e80a285"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "38c0a94912439ccbddf828e4dee44c8a"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "cbc9ca03f614faa9278103bf865ed64e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5a7b4e1beb38f755de71daa6a9d449ef"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "960a263c0186b07f145d470f671bf27a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b7020b4c67e7966cde9adc3d8a00fe94"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "dd048e61791d7d2aad76e3d011be8194"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "b212d99e1c5ff25b5d3e0bd3c9b57326"
  },
  {
    "url": "Node/basic.html",
    "revision": "11266eea9472ed8fe62a835025085b0a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3f259063abb2fd8a1d530c3471211c02"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c18da8806ca2f2349066868241cb1c90"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "50333f7301e7142d539bc3a6232ba97b"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "9c1a9b7f87a29ac9144002498081684d"
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
