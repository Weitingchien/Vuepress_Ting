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
    "revision": "34ec5257e7a566b6013427b51e3f3d74"
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
    "url": "assets/js/10.4101b572.js",
    "revision": "a42b20f95d32e55f9f4097869ce6e387"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.6a636434.js",
    "revision": "cd5aeec925c651698a6395d5a40d25ee"
  },
  {
    "url": "assets/js/13.2502baa0.js",
    "revision": "d166b1aa58a9ddfb58d73208c022bb2a"
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
    "url": "assets/js/17.3a7f93c3.js",
    "revision": "3b48d1107ef3810257f9fefe021f9757"
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
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.1e32cae3.js",
    "revision": "6a7c447348f069d1010aa314d2181847"
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
    "url": "assets/js/25.572853f4.js",
    "revision": "5271892037a44cf3f246203d0332680c"
  },
  {
    "url": "assets/js/26.b1e3ea7c.js",
    "revision": "0a01054169ddc941d44499f765a6641b"
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
    "url": "assets/js/31.2f6a4cb5.js",
    "revision": "ca1bf0bccb57223e15d1f64187f32f55"
  },
  {
    "url": "assets/js/32.70b0e260.js",
    "revision": "71c78b00919ac582d9a5f2077d3e418f"
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
    "url": "assets/js/app.4b626593.js",
    "revision": "84ab711213a5192ed1e28934c1e05092"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "8ae46cd2eae86c7752e503ccf04d4142"
  },
  {
    "url": "index.html",
    "revision": "2d4c5df03b1d4ed7a5fce597741dd1e8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "1d2aab700ada1249e9c79c1547ff64f0"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "3ffcabc327ff0fb2aa6e388a5d2fd185"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "03d246ebd46facf99d8b93647bebbdb8"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "32a6a3c5c547291f90c1d017235fba05"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "974d0ccf35baa242df8a18224fef94b1"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "dbac5f7945904b8d1d3fe96a59879437"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ec7a64ea1b8ead16ebff27dd27e898e8"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "22a081e1fa7d0e2299f99bcb0c294deb"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "02ec1c4d24ef894a4a27242aee208e09"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "5b248bf398d5b7de8f080e9970c0996a"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "1ef0f7ad3830c7f199829da5fd4a770e"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "a28df732342d2b0d3c6069484f6399d0"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "260bd64b9ef9683fb4f927d12639a5e3"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "0baf71635fc5ebdb4fd3a75495f579bd"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "dcbc32cc508c45c87cb1f73cf06fa3c0"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "2fdca8c6014d1ad425d7b3cfd4b02a75"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "19d0fd27423f00d4c71f7fca40eb77ab"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ca4da15143861fdbc2f4a8b0460b8732"
  },
  {
    "url": "Node/basic.html",
    "revision": "bfe75db48c6afaf93f6cf062590b83ca"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "4e640bbfaaf9c893ab19d9aab7dab23a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "92eb1d51c0e29c979b0726354878c3f3"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "878a93a6a90a80751216395d7b1d629c"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "e94313978ecb1e5683380348913ad9a8"
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
