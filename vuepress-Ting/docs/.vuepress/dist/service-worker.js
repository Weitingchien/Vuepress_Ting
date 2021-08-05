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
    "revision": "d71c0c44eaf416712e64ef91c30070c1"
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
    "url": "assets/js/10.2f6d68de.js",
    "revision": "7f50d53620aaa0bc88a4e927db0a9ecd"
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
    "url": "assets/js/13.8fc00dbc.js",
    "revision": "6519796e4d27bef1f6a658fab19153af"
  },
  {
    "url": "assets/js/14.eba54d88.js",
    "revision": "066911520a7ae6519045f8f1a7716b07"
  },
  {
    "url": "assets/js/15.a93ea14f.js",
    "revision": "cf1892a83da521def47cf9c66e6c9653"
  },
  {
    "url": "assets/js/16.fc2dbbdc.js",
    "revision": "92c2eba001814163a63ebeb920c1ef6c"
  },
  {
    "url": "assets/js/17.fecfee8d.js",
    "revision": "d588a55c25a30343d9da49e4812950ee"
  },
  {
    "url": "assets/js/18.9d2ca9a9.js",
    "revision": "c27748ecd45b86812446f9e0d9440fdf"
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
    "url": "assets/js/20.3ae4ba98.js",
    "revision": "72368850fdadd334f3495c99085fc88f"
  },
  {
    "url": "assets/js/21.188e6207.js",
    "revision": "34a2814c07a1c95c60a5016bde49a52e"
  },
  {
    "url": "assets/js/22.e82fb425.js",
    "revision": "ab1ec23fb95a5cde12238b1a71664c57"
  },
  {
    "url": "assets/js/23.42936b05.js",
    "revision": "55f0532ed643b71e2a562f8f984f7628"
  },
  {
    "url": "assets/js/24.8228014c.js",
    "revision": "1cd9e8e207ee4cf497d71a6cd35eb79d"
  },
  {
    "url": "assets/js/25.8ba08e9d.js",
    "revision": "66a5bf178faff099a5c527288b6f4c76"
  },
  {
    "url": "assets/js/26.692aa6e1.js",
    "revision": "49f15a863390a4592c5d9b2f6833bbdd"
  },
  {
    "url": "assets/js/27.bf0fd0df.js",
    "revision": "ad0bfd31f5172cbb1a86d4797ebff2c8"
  },
  {
    "url": "assets/js/28.d844450d.js",
    "revision": "231a0270ef8c86e99f30a510821902f8"
  },
  {
    "url": "assets/js/29.bb03ff76.js",
    "revision": "9ff777037f1c75e55dc5d9fcf415f369"
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
    "url": "assets/js/31.b79c8f7d.js",
    "revision": "4d85362a64502db291f2ecc8afa5985d"
  },
  {
    "url": "assets/js/32.9b0caf3e.js",
    "revision": "152ded1937478c8ee6076b57aac6bfae"
  },
  {
    "url": "assets/js/33.36174f71.js",
    "revision": "8dce9101ebf98fbc6de6b749ef509a8b"
  },
  {
    "url": "assets/js/34.6d854865.js",
    "revision": "515e5e3e8f013571f83d8462667a7642"
  },
  {
    "url": "assets/js/35.875dee0b.js",
    "revision": "6d057fcf49c2c50804341287f42308ac"
  },
  {
    "url": "assets/js/36.4326853c.js",
    "revision": "b28694025b9175536429d2fe55b54994"
  },
  {
    "url": "assets/js/37.9366b2af.js",
    "revision": "d720c4116c784b5d373d879d89da2fcd"
  },
  {
    "url": "assets/js/38.b33c9d51.js",
    "revision": "370909039e09fc4e65ac0c649bb5703d"
  },
  {
    "url": "assets/js/39.73343c67.js",
    "revision": "ae196c71570d5626272ace1e22c6b4d9"
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
    "url": "assets/js/app.93b1f833.js",
    "revision": "c0b4b490d34a52c364279a12c4f7efb5"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "b2ba3e88dbfb1c1950e165d8e5670e78"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "722894207aee95a38d578b468228fd91"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "1af83798f628d8d432e4572e7399456d"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "22be144f53e500b7b934c8f8c4f6a1b4"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "200fc2cd3fdf24d4a81df58174490cd5"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "3d3fa27e9e46ffa4caee4a307fe5654d"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "8fbc83c168ce2933a0502bfd6b5f226d"
  },
  {
    "url": "index.html",
    "revision": "8684d62eb437501022f5810b3fafbafe"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "909491dfd487b401ca2a9a736ddb2b80"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "fabffe6fe69540f88311d5324892ba2e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8b7bcee807317e81328844e242f40b50"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "5e72bf512b5b8e3c37f606c85ca84f5f"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "82a06afbacbb6285d10b1ebab5f41220"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e0feef4831f2c7940ae9101874001cde"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "812e9816e79f5379cce0b92f889572e7"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f1060485e4669d82e6508ae879cc3d1b"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "2aaaac1da6b38ee14d6a7c8efae53245"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "6a0d15c1abf30b88d1c678762edd0416"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "597296faf33de967fa2ab4c2194f27e9"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "d53be5d26553c70944a493a850424306"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "2e6a968d5ee91b10727106de16a422d6"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6dd6dd53b490e42a4cfab29b3425db71"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "ab15aca7eb04c0e8d2a30bc31ef51d50"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "d1166c7b6f560cddf3c4c11a133fd363"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b0341ed912a76ad555ea450c1c4b3f70"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "57fa2e8d12fa83db5a0051a64e0932e9"
  },
  {
    "url": "Node/basic.html",
    "revision": "6c054b777380874bef5eeef1132b39cc"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a86a8cfded258b18770ea8ba44d67617"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "32fc52d39932de263a14cecdc16684cb"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "e813fb115bc791784da719c6932882fd"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "c974adf3cb118b8bd243cc84d383f98c"
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
