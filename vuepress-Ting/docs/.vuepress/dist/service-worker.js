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
    "revision": "08b71a81b6b57e3e445c4ade75bfcaf2"
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
    "url": "assets/js/10.0ee65dcf.js",
    "revision": "6126bf944f99df86b8d2ed05afce258a"
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
    "url": "assets/js/14.d9210114.js",
    "revision": "abd1c8501b05a884427194dd2d12b8bb"
  },
  {
    "url": "assets/js/15.3d88df5e.js",
    "revision": "635ab050a6e22943c4ae0a3cf36e47d0"
  },
  {
    "url": "assets/js/16.e37d20a1.js",
    "revision": "a11710486004ed4f594b9b18d0f6f243"
  },
  {
    "url": "assets/js/17.642788bf.js",
    "revision": "65bd3dee301b44eb3ae21c46b94de0f2"
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
    "url": "assets/js/22.3a5d9cd7.js",
    "revision": "be0a03a7fd24cd0cebd346fe5d57cbfc"
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
    "url": "assets/js/25.8ba08e9d.js",
    "revision": "66a5bf178faff099a5c527288b6f4c76"
  },
  {
    "url": "assets/js/26.95c0ccb2.js",
    "revision": "a35f107ef9bec8f42db93781ce5203ec"
  },
  {
    "url": "assets/js/27.3057b20a.js",
    "revision": "e222f7b582eedd3a7dd18cfac78a9230"
  },
  {
    "url": "assets/js/28.6d85253c.js",
    "revision": "39f4d4f2c05ee9af05dcf89ff9cd8ea1"
  },
  {
    "url": "assets/js/29.ea5613bf.js",
    "revision": "610e957de1b4acb19488faa8bf401981"
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
    "url": "assets/js/32.25196118.js",
    "revision": "3fbd4782745270fdb610ed7f962040d3"
  },
  {
    "url": "assets/js/33.0b16418c.js",
    "revision": "db5d68ac6f8d2090ac800960edc63aa2"
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
    "url": "assets/js/36.8102fd64.js",
    "revision": "8e8e69f53a9399140b536534dba28130"
  },
  {
    "url": "assets/js/37.8f787f46.js",
    "revision": "2f202d7e9a9c9109cfb9cfdc91e7ff24"
  },
  {
    "url": "assets/js/38.869a3c78.js",
    "revision": "0d5c738d181a85cbe44518c8bdb26736"
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
    "url": "assets/js/40.19e49931.js",
    "revision": "f2314e2af5c2113e32f78bc471f5d43b"
  },
  {
    "url": "assets/js/41.f37d9409.js",
    "revision": "3cbc7dd318d0b4ca2453800190f8bce2"
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
    "url": "assets/js/app.819bd049.js",
    "revision": "e16747b20a89a140caf7bfa76005388b"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "4c21d473d7c74fa0693d7b8750611362"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "d28052e6292e89cacc0e28041dfa5da3"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "6100daa774eb88239981df7ae29765f7"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "4a525020e267ac414f3b1009683f0d7d"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "478e7ef6e32e7d7bbf3875d99712eeab"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "df8414ae2efc8b47ba747a1c3a298cb7"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "682571682566212faa7539d73899aaa9"
  },
  {
    "url": "index.html",
    "revision": "c7913f061e3e9df070712aea0631a01d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "16966db5a4b6f8a9cb61e167ecee58d5"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "741f28f2b3ff52c4f161c1821059f4d0"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "3d831286b6a09f93a22f80725f1ac76a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "651c6d99ab3837b5e778af42662066c4"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "1cf725fc5c690d2ee40ad0a8cf180099"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "009b50955cc0753416c7a02ad2c0405d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4e7b7f77b8014dfc84a3b7622064e44b"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a5ed00f20913908dbc23ebe2184c9674"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "406dc61cc59c74b2aceac392e642df76"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "eceb63790eecad157ce2d71c9be42a4e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "005ca398a8bd2bd86eddff6a26bb36fb"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "411ef09d19f6c69f1428007995408a9a"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "65f1e25bcd29026c8af3304f6eaa982d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "f1e5baad688955949880f902cc9b81a9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "843a752dddb417d28c7924fd83df2b27"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e5a8313ef93196aad972b86a63264298"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5a054b1619155b2fb9c035a2c8227b66"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "a0924068331276da283c51f509cc10c5"
  },
  {
    "url": "Node/basic.html",
    "revision": "9af15c65f7b3e5178e1fbe5b6ff7c4a8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "746d5c253f09eb64e22b16d3349c4ae6"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b7e91f8d14bca90d30bd978a76978de8"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "e790692c620d56abea4067a7d2e24178"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "b11e287733918dc53563b9ab18b6bd74"
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
