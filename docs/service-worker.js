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
    "revision": "411cd1e02870455e129cf75e278f77ab"
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
    "url": "assets/js/10.5abad7c5.js",
    "revision": "fe44c8b881c9184fb2bbdf9bb9b308a7"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.f2d28eec.js",
    "revision": "e45468ee276777e17a32ea7370d842f2"
  },
  {
    "url": "assets/js/13.090616b9.js",
    "revision": "e39cb1613d143b6ace92e860ec9e6e0c"
  },
  {
    "url": "assets/js/14.678f18a5.js",
    "revision": "e82157b73f946182c87ccdc1dd3f52e7"
  },
  {
    "url": "assets/js/15.a7f4881f.js",
    "revision": "84f6de8a1200400d6628bf03fd3c39ab"
  },
  {
    "url": "assets/js/16.8ee6d5a5.js",
    "revision": "ee3edf9f6d6a21433236bb04e54214ef"
  },
  {
    "url": "assets/js/17.d393735a.js",
    "revision": "54164866ed6f9cde5a2b05ee050895f7"
  },
  {
    "url": "assets/js/18.44394166.js",
    "revision": "0fa42f1ea69ddef2862fa49be1f25ae5"
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
    "url": "assets/js/21.fbc26941.js",
    "revision": "c9bf759d68921c47134e2b5c7ed3e12a"
  },
  {
    "url": "assets/js/22.d0b5c8e3.js",
    "revision": "c54eb37bf52b33501b813412f6d9f4a7"
  },
  {
    "url": "assets/js/23.de7a1abc.js",
    "revision": "497354be1b58b59e012163c89b4a0bac"
  },
  {
    "url": "assets/js/24.030acaf8.js",
    "revision": "4df1f79a60e6c26afde28770d9ad23cc"
  },
  {
    "url": "assets/js/25.51ecfd44.js",
    "revision": "125da6a08adfa37e0bd47c5f718bb94f"
  },
  {
    "url": "assets/js/26.26199eb5.js",
    "revision": "a114649c5ce2778b1f2ba67a5875a57c"
  },
  {
    "url": "assets/js/27.c81fb0e2.js",
    "revision": "aca329c87f605af30bfc8c95910ee106"
  },
  {
    "url": "assets/js/28.462acdcb.js",
    "revision": "49f30c2c7ea7cbfc75cd31ca76c3df9b"
  },
  {
    "url": "assets/js/29.905db022.js",
    "revision": "5e2d4ceade8dcfa210be4bb6388b1d2a"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.459ece0e.js",
    "revision": "cb32739b2aa1dde7bf600827f2604048"
  },
  {
    "url": "assets/js/31.d1c3c553.js",
    "revision": "0f5dc15a8c3b38c55efba09a18baaafe"
  },
  {
    "url": "assets/js/32.c05c2ac6.js",
    "revision": "90f8a19bed40e926f38377e9eb8e8e1b"
  },
  {
    "url": "assets/js/33.60dfeb82.js",
    "revision": "171110218606184a4855a44e9f8ceab3"
  },
  {
    "url": "assets/js/34.d1a95d5b.js",
    "revision": "5fbea8187d447a698378c244d03a5d19"
  },
  {
    "url": "assets/js/35.6f1bc7fc.js",
    "revision": "0db7f6d272393ff2d1f428be998c2f68"
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
    "url": "assets/js/app.9663bbe2.js",
    "revision": "0ac13c9976efceb9a695c091f3e96bf9"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "5081d1426c31c847e74c4cda8c5d14f8"
  },
  {
    "url": "index.html",
    "revision": "a98536aced6778343c4c819266c932f7"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7a09020471ce595b14e4cdc16d9a1cb8"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "8f71f93b499e946a598a98ede2fc33e3"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "862ac6fb253d631ce0edea33cbf1c846"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d1247208711f0f8ad4cc0b770125227d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "81fd3ed36a8da633d8a9e30b0aa469b5"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "aae6e7cbdbcef29f8fecd8d861399825"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "5f9c107fc2456fc5589acbb8450f959a"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "68d7f97a6e428841ff1a00272d25f0cd"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "4d8ba2cf9b3b44c404b5938b4dc997f0"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "41fb448422128f20c74adb05a31742c8"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "20f488d5160672d3c26895854785163b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7a7a9ed54cfd24bb2fdd6f3a55f499e6"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "52015ffe2af11ff78a0f410ab473544d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "db02650801f2eb9fbd42efaea23cd5a2"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "867a77d092c4b56320682f0d973fe2d9"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4176a3121a6b842b296493df5f1f7401"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "82975f92c012bd29376561471ec4a702"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "29fd2e983f05b1b46f70b68257c75651"
  },
  {
    "url": "Node/basic.html",
    "revision": "0b37fc23ae79f46b576350118a9ec067"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ab2d5cfc3a00660380172c61f50c4700"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b2e8154ee078fe4eeb5108abf0eae513"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "c67226867c2a600bf2dbc37976506342"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "a0a2287996d32fa2e11454940273159a"
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
