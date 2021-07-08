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
    "revision": "985825d0389db0501ff2277b6ccd6c12"
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
    "url": "assets/js/12.4de373aa.js",
    "revision": "9a8c901be989a717a8b387bdd2dfe87f"
  },
  {
    "url": "assets/js/13.9e384755.js",
    "revision": "de85352019110a5c47944aedee48dee8"
  },
  {
    "url": "assets/js/14.f42f6590.js",
    "revision": "b65997dbed2cab5c89fc5892f1c4d3b0"
  },
  {
    "url": "assets/js/15.6ca293c6.js",
    "revision": "f937bc81bbc170ce1f4d9a4caa5b4ac5"
  },
  {
    "url": "assets/js/16.8ee6d5a5.js",
    "revision": "ee3edf9f6d6a21433236bb04e54214ef"
  },
  {
    "url": "assets/js/17.819cffc9.js",
    "revision": "e449f834a2979808fa04d9f0006dd312"
  },
  {
    "url": "assets/js/18.81d71f7b.js",
    "revision": "579e190b0c33219a73de426492104bf0"
  },
  {
    "url": "assets/js/19.724e7727.js",
    "revision": "5e7e83730a8da5d407a752d6f2e9d1bd"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.c3e5ef39.js",
    "revision": "1b664a6990651539099393f67985085b"
  },
  {
    "url": "assets/js/21.c323dbaf.js",
    "revision": "28931030084735fec0152eb8c7caf790"
  },
  {
    "url": "assets/js/22.1e32cae3.js",
    "revision": "6a7c447348f069d1010aa314d2181847"
  },
  {
    "url": "assets/js/23.ff09caec.js",
    "revision": "c27264f49e3ac7fbc94ce5fb36be311e"
  },
  {
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.bc669358.js",
    "revision": "c593fbddb131911a219ac9f92ea320be"
  },
  {
    "url": "assets/js/26.b1e3ea7c.js",
    "revision": "0a01054169ddc941d44499f765a6641b"
  },
  {
    "url": "assets/js/27.40e596e3.js",
    "revision": "7b7e7d31d21c6750e641e4ba0128d067"
  },
  {
    "url": "assets/js/28.462acdcb.js",
    "revision": "49f30c2c7ea7cbfc75cd31ca76c3df9b"
  },
  {
    "url": "assets/js/29.3e807cab.js",
    "revision": "7860fba89318bdba9ce1ba2e71f3ed48"
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
    "url": "assets/js/31.5dcc1e32.js",
    "revision": "035bd14593912bd2ef31020df8515810"
  },
  {
    "url": "assets/js/32.1678b80c.js",
    "revision": "271b600a9eb3b669a6ac4ea47353bf9c"
  },
  {
    "url": "assets/js/33.e6da0290.js",
    "revision": "ca7a43eb3289fc99704f1921ca6b73f9"
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
    "url": "assets/js/app.75961e4b.js",
    "revision": "1da9bf98aff3c5d8a3a03c777010df8c"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "06a6cdc11d2da3957dd2517f3ce30cc4"
  },
  {
    "url": "index.html",
    "revision": "716b7874a454d92c824256f06ea98901"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3243b1f0fc70762fb4daae37cfe796f9"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "ec6035418e7032990f05f11a81fd80b9"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "9df685597041d41473a2b6956728cc8e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "942cfab43f44b5e67b4b35732c8b79cc"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2bb4d993f4abb4053d50e0a104f883be"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "3d5deaa3254c075e7c3e1509a7c532d9"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e860dc2fc40707644c9d1c8c5caa8fea"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1f5d00b94a4f6df2e6c466d6cc7d7f8b"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "0ccbcdf7dfa14e283b4fe5d6e3df8198"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0365faf00fa1e134fa28f0c07ae84be1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "7c5e93ce17969449f3b5076b93c345d6"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "47b8610ab691cde371a02283c7fa032c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "335d30b1ac00615e572bf02c0545dacf"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "08f945e79ac613c21929e10db64f362d"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b597bf96d66ff6e644b2fe82464bfabe"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "943d99d9eafe94a3ed8fbe8d144cf3c6"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d907e26bcc8dbea275d5f8f2b563119e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "dd74e42a87e56b4087499b8102d3253e"
  },
  {
    "url": "Node/basic.html",
    "revision": "40a96a5079fc9b5aa356746f03a07b14"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "7f7fef654e183d7e67beb0998112fe0f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f6d6105230b22b450d18e1066438765b"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "662c8435dcc7347425070ee9c528b262"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "1a4b07c84b92b2edd5efc4aa6d6a704d"
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
