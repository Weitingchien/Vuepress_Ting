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
    "revision": "4dc16cc6c66754ae4cea2a1550247b31"
  },
  {
    "url": "assets/css/0.styles.b567a112.css",
    "revision": "57102918567faa1f1f665ae8bb6594a1"
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
    "url": "assets/js/12.ca130193.js",
    "revision": "ff4acf6d6139c5c5953e7184ff24a678"
  },
  {
    "url": "assets/js/13.6eef5801.js",
    "revision": "2ca541f39801276e3541fcb994a63b57"
  },
  {
    "url": "assets/js/14.db443f2c.js",
    "revision": "c0f1f75efffbbfd70d607fe8dd54113f"
  },
  {
    "url": "assets/js/15.a7f4881f.js",
    "revision": "84f6de8a1200400d6628bf03fd3c39ab"
  },
  {
    "url": "assets/js/16.cbc1bf8e.js",
    "revision": "888b8643c1707bb360ad1e3a45c3bebe"
  },
  {
    "url": "assets/js/17.3a7f93c3.js",
    "revision": "3b48d1107ef3810257f9fefe021f9757"
  },
  {
    "url": "assets/js/18.d3fb94bb.js",
    "revision": "c34f4946819c0f3eaba94aeab4ec26dd"
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
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.0a89be72.js",
    "revision": "6442b3db63f581243a5b76c4d6631421"
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
    "url": "assets/js/28.6e72a63a.js",
    "revision": "61394f39007570302d508e0289f1a396"
  },
  {
    "url": "assets/js/29.0e591a9c.js",
    "revision": "d83ba7c7e28e1eadcab211795e51c8ee"
  },
  {
    "url": "assets/js/3.21f6bbbc.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
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
    "url": "assets/js/32.1678b80c.js",
    "revision": "271b600a9eb3b669a6ac4ea47353bf9c"
  },
  {
    "url": "assets/js/33.e6da0290.js",
    "revision": "ca7a43eb3289fc99704f1921ca6b73f9"
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
    "url": "assets/js/5.65d02bc3.js",
    "revision": "60a53394e2a6bc58ff79ae155ff457a4"
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
    "url": "assets/js/app.25748b6a.js",
    "revision": "e3c0dfb18654ae8e94e36d4e0a20e90a"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "143328c32ec517822cb2db1ef08ce9b1"
  },
  {
    "url": "index.html",
    "revision": "176c9f2b7c8a42ff3966fe2016b926df"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0d3238b5fe05fa6755072443d4d4498a"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1adbeaf9d597c6e3e3ff072fd97466b5"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "ace160405b61d0d03608012d35c7c35d"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "52f5eba23659fdf572a16bf1385f4883"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7aecd86e1a501eb0dc236630d50168e8"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "398ca1353d63dd77df8cef77e2bd2baa"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "63e16c7a0b89f2193ec0ee407cd495ed"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4584b8d282e15ab24745f85b8b33260b"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "17e42e7ffc31202ae8e874459ea5c104"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "56e7feb1aea474a505777f2fe8109bd1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "3d92112283e1370ed803717b8cc7c7fc"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9b98a115bc1d0aba285d8d14a09f265c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "31b22cbc9e420b31c050379fb521c078"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "faab220ad61d2335f33bfcc0ab2ba124"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "f9e75baf6931ccce60a3a17b1338cbf0"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "18abe984721287ea0641391abedd77c2"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "25efd86204bd17d0ada1e2bdc7b37628"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7bc5a580f7e25246cf7e6d81f4da4e10"
  },
  {
    "url": "Node/basic.html",
    "revision": "b721d4b3af80cdb603be2458d717fd80"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a6e0bf8322e2f102ada7c28be43c68df"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "0598e369659ec394331a93bc6d5e1c86"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "28a4dc2a08c507bba099ba2d41b1e937"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "adeef5ec01fb059943501ca6c2d676cb"
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
