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
    "revision": "6f8dd6a5ac9b8e432c62f213d890f380"
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
    "url": "assets/js/12.3134ab22.js",
    "revision": "b497450051c487dd2daed8b54ec5dcac"
  },
  {
    "url": "assets/js/13.219701b4.js",
    "revision": "4aeb8139ee0daf57a6f4c0513373f7e3"
  },
  {
    "url": "assets/js/14.52a0f5be.js",
    "revision": "5d75e07da112342bfa9768c87cf5a0c1"
  },
  {
    "url": "assets/js/15.b4bae9d0.js",
    "revision": "53fbcce13f5fa44be51bc4e5d795da01"
  },
  {
    "url": "assets/js/16.944576c4.js",
    "revision": "a2417b810bf42d05d9a312e647689195"
  },
  {
    "url": "assets/js/17.7d3fe513.js",
    "revision": "123ef7000c266cf1018c6663f013b4b5"
  },
  {
    "url": "assets/js/18.d7e1195f.js",
    "revision": "3a858e087a921f2b12d0cf8522c90a25"
  },
  {
    "url": "assets/js/19.c284d493.js",
    "revision": "31a857faa6e74194da8a332715febb0f"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.fcc880c4.js",
    "revision": "e166f7b6b2d4ff06a37c95106943088b"
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
    "url": "assets/js/30.c4712235.js",
    "revision": "06a30aca7db81f1ada9c0109f00e638c"
  },
  {
    "url": "assets/js/31.762315f6.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.70b0e260.js",
    "revision": "71c78b00919ac582d9a5f2077d3e418f"
  },
  {
    "url": "assets/js/33.e6da0290.js",
    "revision": "ca7a43eb3289fc99704f1921ca6b73f9"
  },
  {
    "url": "assets/js/34.45991275.js",
    "revision": "1390a711ea9cdcbf7108121a4d81b359"
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
    "url": "assets/js/app.ac5b414a.js",
    "revision": "dfa6d8da98801f61685f9dbc173ba7b7"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "5dbc1c5e4aa08f7bafdb881fb1b234d1"
  },
  {
    "url": "index.html",
    "revision": "5b54d0f40594d98904dff4cb85337fef"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b7214c1cbec85b7790c17287aac8fdd9"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "b69649ac6a8a37f6cf3578499fc0193c"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4bd38ef6160c64c58cff45cce13d89f8"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "18561600d58bcdb29751b012a71f98ec"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2256910d37aa9dc6c6e78a945a095f53"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "1464cc41c64a119f25c104d89c5268fd"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "774cee2159390d6be12d055ecb771e48"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "746b2381d8583dd2fdbc8cdfa967529e"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "b5cb6e533c5c66a854158ed0fa2abafe"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "4b33672966a49ccb0101387055d9271f"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bae4e136068dc3427f1564dae8af71d6"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "d3377f77065621353e91cce51939ea86"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "286d1dfe48143d5e0b7096319671593c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "aef37191c76bd2f09b48edd6ffa0e1f4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6e972ce8b6df9330d79f14238c65937d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "54e08602f55f2d4fc6777c52b3fccb9d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b46437ba38acf31213acbe20fafba1df"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7cdef00d52cb9708d94a15874a77a23b"
  },
  {
    "url": "Node/basic.html",
    "revision": "1ef2a941cc8b6b272c584dac2902b545"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b866cea43fafe07072cb4b22d3ab4121"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "64bb0a48c68b318badc73b361488b1be"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "e1bf29ffa1ea059e1d3e6bdc4e65759e"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "22ef2d0a68a80735f3eadaa917536b0f"
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
