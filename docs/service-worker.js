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
    "revision": "0cecbdf1089b7f0efe3f38f6da3b9f28"
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
    "url": "assets/js/10.83dc0a4c.js",
    "revision": "074407ba42a5f1510dcde77ff319af41"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.49011c38.js",
    "revision": "592f24186667753827c3599cbed84c1e"
  },
  {
    "url": "assets/js/13.8b5170d4.js",
    "revision": "99a561eb9716db105a7dafa6584ef9ae"
  },
  {
    "url": "assets/js/14.1a267087.js",
    "revision": "b85beff513b1e543040cc8c690db9162"
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
    "url": "assets/js/17.6df468f7.js",
    "revision": "9a842b995ea5f2d07e62778072a1b66c"
  },
  {
    "url": "assets/js/18.7c78b3dd.js",
    "revision": "eda1e7f4a8d41560fe553be1c532949f"
  },
  {
    "url": "assets/js/19.6b13286c.js",
    "revision": "0f31afa7aaed65b9d365c1a48d46b379"
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
    "url": "assets/js/26.032f706d.js",
    "revision": "98b7eea01f3a4e6b3c342e9658638b0a"
  },
  {
    "url": "assets/js/27.444a93d6.js",
    "revision": "debc56ba4208862ea9fee1c606a9a570"
  },
  {
    "url": "assets/js/28.3e1f4bcd.js",
    "revision": "f3f0b2895d04e1b86c1c0459b7b19dd4"
  },
  {
    "url": "assets/js/29.883273d5.js",
    "revision": "6ebe909428e041f650029afa9b81e435"
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
    "url": "assets/js/34.6d854865.js",
    "revision": "515e5e3e8f013571f83d8462667a7642"
  },
  {
    "url": "assets/js/35.90da97b0.js",
    "revision": "db65f6ac232bf0d41b6e700d5e5da501"
  },
  {
    "url": "assets/js/36.faddf535.js",
    "revision": "3ce76fe40393c2a878a3dc92e1379aee"
  },
  {
    "url": "assets/js/37.8f787f46.js",
    "revision": "2f202d7e9a9c9109cfb9cfdc91e7ff24"
  },
  {
    "url": "assets/js/38.e7033770.js",
    "revision": "bcce7bca9fe92aeba3d2a67c052af4b6"
  },
  {
    "url": "assets/js/39.a8f82e01.js",
    "revision": "7f07c3a22ad5804e1e067e49eb61b4d8"
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
    "url": "assets/js/app.04dd7669.js",
    "revision": "8b73089fdb84f670eb008000b91cf51d"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "39bf1e0c7f6d3558c6d9cae33e698813"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "ae130763cc4cbee71e8382ccf8450e5b"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "a2969530695240e059b57488327bc1eb"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "59ea899dd8f1ef74dff3f2ea30dcfb7c"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "e9de6bbdbb0eefd29f52b7ea79d02919"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "47c9bcd494de11fd95cc8946fea771f2"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "70ae90f579c8469d07eee001848cd2b3"
  },
  {
    "url": "index.html",
    "revision": "13085e5ba083baf4097f9b0f33cc8df2"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c00c2e8f3b5fd01617cd8a70084496a3"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "650e9a801fa132ff5b9fb7bd2bde681f"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "2dd392808577870d4022fb3dc2fd374e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "3b4bc73da1b900623141478ba8793555"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "46729e2c1ef8e9ebdb885aa8f6a0c2df"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e935fc008bfc0e6f3ff4c4bc2de9e59c"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "119cbfba179f9cf22ee7e67dbb7cd960"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f1bf1ae28f675a135f3fef8d8c698518"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "dad129a0c12b100ce87c66c7217e1dc4"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "94142c1626c5937bfba2072035747628"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "5c8ba0182b5d64750ec45474a3249ba7"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ddb85232bf2804a9ca51d5dac6aab55d"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "0b5a66f883a1e1e048e7f117e9d53228"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "086a296ee70f6d73b1e335a40d839762"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "d9eefec0cb44ea406e527a8b03fe2367"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ae2e26a8da9017203f8e8738eab4223e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "3046e119462ad0a2d912f315656bf376"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "b10f56ba1bd3f2f9096717d91cba1a52"
  },
  {
    "url": "Node/basic.html",
    "revision": "1f6abf82b654efc8faba104175b737f8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "9de29eda4a5418b7eb7a2dfc64e23ee2"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "5636a8e4bb25db7091a8dcd6000fc707"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "2db6333cac5ce24dd3d1bc2323076ef9"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "1d70e64b1363150e90d61ab75487d756"
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
