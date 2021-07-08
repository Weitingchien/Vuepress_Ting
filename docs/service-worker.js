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
    "revision": "1a3ce1d07e2037a20678c3a764452443"
  },
  {
    "url": "assets/css/0.styles.a52d4a0b.css",
    "revision": "b4f0aab51afa7f3e7d0ef2d13b2e0e8f"
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
    "url": "assets/js/10.62278ca5.js",
    "revision": "624f79f39e14c50178da4a2ed3f049f3"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.507066fa.js",
    "revision": "b003cb84a76b6c474d1902d920ae8690"
  },
  {
    "url": "assets/js/13.2502baa0.js",
    "revision": "d166b1aa58a9ddfb58d73208c022bb2a"
  },
  {
    "url": "assets/js/14.52a0f5be.js",
    "revision": "5d75e07da112342bfa9768c87cf5a0c1"
  },
  {
    "url": "assets/js/15.bed19c5f.js",
    "revision": "1bae66f7238d2b4a0e038afcc5b927fc"
  },
  {
    "url": "assets/js/16.cbc1bf8e.js",
    "revision": "888b8643c1707bb360ad1e3a45c3bebe"
  },
  {
    "url": "assets/js/17.819cffc9.js",
    "revision": "e449f834a2979808fa04d9f0006dd312"
  },
  {
    "url": "assets/js/18.d7e1195f.js",
    "revision": "3a858e087a921f2b12d0cf8522c90a25"
  },
  {
    "url": "assets/js/19.b030a3cc.js",
    "revision": "c8191b7ef80ba139f907f6c36cc6aba0"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.4c49bd58.js",
    "revision": "5f27b1314801596370bb1faca895a1a8"
  },
  {
    "url": "assets/js/21.91bb13b7.js",
    "revision": "591417b0477f26f7c341e6bb1a397eb5"
  },
  {
    "url": "assets/js/22.df418696.js",
    "revision": "44713ae217a4f3f119ae0ab48814baed"
  },
  {
    "url": "assets/js/23.9928187f.js",
    "revision": "fbe42a01ea70ca091944009782ef69c0"
  },
  {
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.42bd7070.js",
    "revision": "822fa42a4469b9f5435b16a35f3ced32"
  },
  {
    "url": "assets/js/27.29c55c7e.js",
    "revision": "51368e830288d7ac4e2308a806ba3986"
  },
  {
    "url": "assets/js/28.32e0d93f.js",
    "revision": "bb8f1de0db2a6d9533256a4524c46f9b"
  },
  {
    "url": "assets/js/29.0e591a9c.js",
    "revision": "d83ba7c7e28e1eadcab211795e51c8ee"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.2f62d3bb.js",
    "revision": "39351a8d355f2d7d6f4e869fab66f648"
  },
  {
    "url": "assets/js/31.762315f6.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.ecc5d6c6.js",
    "revision": "b30ca78d4ad91f7ca8d436799a8a78b8"
  },
  {
    "url": "assets/js/33.60dfeb82.js",
    "revision": "171110218606184a4855a44e9f8ceab3"
  },
  {
    "url": "assets/js/34.8276203c.js",
    "revision": "4f3b555322fdb25170151f68e7824898"
  },
  {
    "url": "assets/js/35.a612ee96.js",
    "revision": "f805da073f7989f0d339bc581ab7303f"
  },
  {
    "url": "assets/js/36.05948a05.js",
    "revision": "005e7dcf9e1a5afceb0f9c5e0c05df4e"
  },
  {
    "url": "assets/js/4.fe7d941f.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/5.2ecd2552.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.8c0fdf81.js",
    "revision": "74467b20cf062a5a529e46072eaa5783"
  },
  {
    "url": "assets/js/8.d2b563d5.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.1ac85436.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.4df2b0a2.js",
    "revision": "5c59b4d5b9b8e38f5a8517a9da601db2"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "3a31bd05540f1d30b4b89268d827499e"
  },
  {
    "url": "index.html",
    "revision": "b58a08f53493a966f115241cc609b55c"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "51cd8b70b7b82765c4a677ff9c6325d3"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "f0e0389bdd367563306b949f82179635"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e3a56c81ee2e1367acf203713b9d9d03"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "b5e9b6fbe0c585b90e05357744f348d1"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d5cd117b09676bc84b8ac747b42926bc"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "605a13e8b42c733a10927353672c6b3e"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "159e6b72027693072eaeac1c8683e5d2"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a229571f45eec0af205c53b4bb8009b9"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "fe18da3a630111e16da5d09b277a2d0a"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "9485836271c4f8e6db8682ee8de729e8"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d3580f4088568234a68d413990a268b3"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "6ec3bcceb62dd64383d2150e70552a47"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "1eb749269992b6412f1d43cd41a4a390"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "aeeee12e6a0949251779c9094571da2c"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "79fdf850754824a3319e641fba8c2b78"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "1c1da4eb4398c06f87f6480521779bcb"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "680002118d4f3cc8f79d0e0141e6a98f"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "125c13e0ec1fae034a51d976a50d001c"
  },
  {
    "url": "Node/basic.html",
    "revision": "3cba7d3dc45d7de7141c433a3c332a31"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "23a1738e9838a92efb76aaa4b633dc0b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "17e70292c9fbeac3570eb0ce2bb25fc1"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "e8384d3ef486d81e87ba71a8bdaab03c"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "796b4f7ebbee967f9110432aa2a62364"
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
