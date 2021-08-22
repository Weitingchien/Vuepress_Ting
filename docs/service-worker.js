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
    "revision": "cc0297f94a3911fb86a0b59c61bd2890"
  },
  {
    "url": "assets/css/0.styles.5f90c0e8.css",
    "revision": "f741ab6ea056ca9dc76c1bd575026268"
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
    "url": "assets/js/13.0bc8e782.js",
    "revision": "4f9633c4e80ea2bfaf9c43fd99f418b9"
  },
  {
    "url": "assets/js/14.287aa94a.js",
    "revision": "5580b2c43d741df4c71619c02a9f846f"
  },
  {
    "url": "assets/js/15.3112a4dd.js",
    "revision": "e55940e5b9747d13f4da3137475457fe"
  },
  {
    "url": "assets/js/16.43b8d9db.js",
    "revision": "896d70eb283b927cf2b51728c14e6c64"
  },
  {
    "url": "assets/js/17.e91ebd62.js",
    "revision": "61e1a88044ec0b3b3d6e354257a16264"
  },
  {
    "url": "assets/js/18.ea5a2812.js",
    "revision": "2bd8122de66512fc4e7fdd549022273d"
  },
  {
    "url": "assets/js/19.c1502f40.js",
    "revision": "cb7832bdcfce903c585bf7ba24fe706f"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.3ef738f5.js",
    "revision": "d0d65b27ebcd2d0c5a99cb4893e39b0a"
  },
  {
    "url": "assets/js/21.826ca9ad.js",
    "revision": "8d849f831e6950812bf5719d7a05bbb6"
  },
  {
    "url": "assets/js/22.72f61fb7.js",
    "revision": "fc545d39c24ba2badda47335127fb804"
  },
  {
    "url": "assets/js/23.765e003b.js",
    "revision": "8561b13e854a29103a03f417cfe65524"
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
    "url": "assets/js/26.692aa6e1.js",
    "revision": "49f15a863390a4592c5d9b2f6833bbdd"
  },
  {
    "url": "assets/js/27.3057b20a.js",
    "revision": "e222f7b582eedd3a7dd18cfac78a9230"
  },
  {
    "url": "assets/js/28.87a6b3d0.js",
    "revision": "91d34d01f58ad2c500e09615947c647c"
  },
  {
    "url": "assets/js/29.6e8a25bb.js",
    "revision": "8888d6a8fa93fa73116ad46af5b48a17"
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
    "url": "assets/js/31.bb33f1db.js",
    "revision": "1c8f8d2a401d71a6d0b8df7036e9c4ed"
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
    "url": "assets/js/35.21473335.js",
    "revision": "1d70cff1493fe1bc8bac72b4ce705f01"
  },
  {
    "url": "assets/js/36.7aed0d2f.js",
    "revision": "8affdbc616465bedee11d107563ff95f"
  },
  {
    "url": "assets/js/37.b99f9f14.js",
    "revision": "428170952af08fe961a4839ea70d916a"
  },
  {
    "url": "assets/js/38.869a3c78.js",
    "revision": "0d5c738d181a85cbe44518c8bdb26736"
  },
  {
    "url": "assets/js/39.3d6b0194.js",
    "revision": "68fd4beeb204162ba64d7bfda306e761"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.7c2ee8cf.js",
    "revision": "641a5bb287ffe87759eb0a78ba1c9d36"
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
    "url": "assets/js/7.d23ebf99.js",
    "revision": "e09605e8ec4ec72fecc8692d226da1bc"
  },
  {
    "url": "assets/js/8.b1744ffd.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.26117c4d.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.5536875e.js",
    "revision": "e090351b1e07133abf990bbd7f06f7fa"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "a634c798f9576571f54aabbcd0876372"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "a1aba26ef44dcc22a6ca092a902482f3"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "748cef86817c945b26c3c09efdbfd060"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "aa063ac854e3f4d3106eb73d98e13c16"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "9e88037f75cbf9f116491ff2c545a071"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "b3488abba5bec978a36f777addc2bb78"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "6b575ca9116a18b6d98b6c41a35e4a99"
  },
  {
    "url": "index.html",
    "revision": "010aba7a2706354473f0736951469241"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "af36115324c1d822a650a18a40ee692d"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "d6973fb336e6e2a8570ae63a06501333"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "aaba36a73be498afa7fde168863c79ea"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "19d56e0f294bf647a9d27296371d9ef9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "663c1472796c179cbe11f1e9a91dff1a"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "455938e5da0d4b710802abb518f2a2b2"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "2a3ff55a8a74005d80615222eceb91c4"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2d181a276095a742e690b676e1c3f95f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "9ed5f03dee6e54491f77789ccec0cd4c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "47598ddd6b642472dddd03e0cc6e8664"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "e034d2d3e1f80257ccb67102fd89b227"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "68441ee6c4eb27d2f5fece40956c34e9"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "433feb60542ddb2e7b3cdc1c2b4ca070"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "18fe52f5af7c450c147839654eb2f42b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "4d346977c28c62e845c714574a7828c0"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "576be0e4ca16baf81d3ea521a84f984a"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "61b3efe3744d06d8984df01b8cbac0b7"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "100b28bb7ecb8ae0fb9bad6669b30d6f"
  },
  {
    "url": "Node/basic.html",
    "revision": "a6cea10165b30cf3b3dc7391aab9fc36"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "30b6715b9f1d92c83e9b30f1fe876ba8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "a3467c64823f8655a160188309a61e1f"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "c2c5dd3e32c9b200156a11ad4958e8f3"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "c3ba1cdc4d48e18a4203cf1778fee420"
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
