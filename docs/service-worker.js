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
    "revision": "c46a5d24f1e484ac112422b431dbc1b6"
  },
  {
    "url": "assets/css/0.styles.2597105d.css",
    "revision": "205d671f2f45e11a739c48ffdf1e5cc2"
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
    "url": "assets/js/10.61525b01.js",
    "revision": "88e938c2b23444725742be6800b39985"
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
    "url": "assets/js/16.43b8d9db.js",
    "revision": "896d70eb283b927cf2b51728c14e6c64"
  },
  {
    "url": "assets/js/17.0ccee414.js",
    "revision": "bc95c8890b323d3476bf43e2e674ccc6"
  },
  {
    "url": "assets/js/18.ea5a2812.js",
    "revision": "2bd8122de66512fc4e7fdd549022273d"
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
    "url": "assets/js/20.08f8d378.js",
    "revision": "8a1aff9bac1ee2c25601a959d37f6246"
  },
  {
    "url": "assets/js/21.0dbbf05f.js",
    "revision": "10cc6062b48d7fa9dfcb2cf82bef4f64"
  },
  {
    "url": "assets/js/22.00cd83d1.js",
    "revision": "a318c916fbcf078f291b30ee85d36a26"
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
    "url": "assets/js/25.494309d2.js",
    "revision": "b1670e697eed212cb71ab119f6c5266a"
  },
  {
    "url": "assets/js/26.f112aa97.js",
    "revision": "17a0211649f19e5989831a950fab66ae"
  },
  {
    "url": "assets/js/27.178604b4.js",
    "revision": "1b1203b5c3f8350abb06e397f31a9a10"
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
    "url": "assets/js/31.efd7e0b5.js",
    "revision": "c25fa77bd1511a0c9ac4e7dd0b1e3f33"
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
    "url": "assets/js/36.4326853c.js",
    "revision": "b28694025b9175536429d2fe55b54994"
  },
  {
    "url": "assets/js/37.b99f9f14.js",
    "revision": "428170952af08fe961a4839ea70d916a"
  },
  {
    "url": "assets/js/38.e7033770.js",
    "revision": "bcce7bca9fe92aeba3d2a67c052af4b6"
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
    "url": "assets/js/40.79732585.js",
    "revision": "91fb2d13a392e23b365ff5c4a82e23f7"
  },
  {
    "url": "assets/js/41.1528a941.js",
    "revision": "4045c8e7ff21695193814b8d93f800b6"
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
    "url": "assets/js/8.6d5c1c6d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.1c72589f.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.cd1764d7.js",
    "revision": "fd34c07e1318e0304c5599bd0ba41b41"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "1b2353cd033fcf4ecc3ebebb3af27dbe"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "99401a7abab92b4d1e57ec4d40a82f97"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "32bd15340710eae7d2b5b1cef88335b6"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "857e92bd200cab5dd0aeedf6f4a44efd"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "b7c7f120310577225c02e81b632e66d7"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "1e8bd19d9cd57375d6ae0300d7140ce6"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "d8d8b137c4cf291d7855ce65c4668c78"
  },
  {
    "url": "index.html",
    "revision": "c5d99f09fb57df2fe589bca564c4625f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7aa3346cc32b41bcc9f1733d405795a1"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "e54973c57b10eb5b5a27d57df3ba647c"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e5ca389fa44131166ad24665b62d59a0"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "0e9ebe7e495ad38e374a2830a7f97a1b"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6f771fbc8a09793c4a695880a6e9f52f"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "b149836cec192390e7ded6d0cd07909a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e20f034cecafe162f6bbbace099506bd"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "65960df255c82d53a6e4d0103bb5a7bd"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "9c2b4d0f513c1f2bf4429f9ef74ad8f5"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "501037a3697838bf586bd74cd62c1b62"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "aade2ee6d5ed2b692ba06bcbf8dc2fbf"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "86d9f9d6580165519e421b2a645059c1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "31a73f6ca9545f5a79707b5685496032"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "465b06cc2e9b9946ec352dd9b9a78da4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "1ba19cfe1ef60bc596ff690287a1e2b9"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "a9647df0c91de72e7b983ae5dd221550"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "98255b7c0db42b559faaf96f0c03afb3"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "88a0715cd01b0a2543c012cd0ec03bf1"
  },
  {
    "url": "Node/basic.html",
    "revision": "e74074939cda0c359e5772fc2d827497"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e883fb633cf96b420b378fc4da6bed3a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7ac8238044aeaacdfd5de7ae4bc2f560"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "06860340385c645f3f697dcc9da73488"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "40f46d9667a945547ca89818d81d8105"
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
