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
    "revision": "ebe280c6a6731b98d54c6b6ba6655c53"
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
    "url": "assets/js/10.62278ca5.js",
    "revision": "624f79f39e14c50178da4a2ed3f049f3"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.7a53dc45.js",
    "revision": "2aacf573e328bd0933e5ca757208d28a"
  },
  {
    "url": "assets/js/13.9e384755.js",
    "revision": "de85352019110a5c47944aedee48dee8"
  },
  {
    "url": "assets/js/14.678f18a5.js",
    "revision": "e82157b73f946182c87ccdc1dd3f52e7"
  },
  {
    "url": "assets/js/15.db387224.js",
    "revision": "c91406099c0484225f74005340446ac6"
  },
  {
    "url": "assets/js/16.eb0a3259.js",
    "revision": "7272b83abda55a48e704c82fc7d13cb7"
  },
  {
    "url": "assets/js/17.0a44765b.js",
    "revision": "1e8ad2e8b475a285261cdfcd7fadae81"
  },
  {
    "url": "assets/js/18.81d71f7b.js",
    "revision": "579e190b0c33219a73de426492104bf0"
  },
  {
    "url": "assets/js/19.7a72e4f2.js",
    "revision": "fc8949c59041eb22824dc4657ae40e43"
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
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.1e32cae3.js",
    "revision": "6a7c447348f069d1010aa314d2181847"
  },
  {
    "url": "assets/js/23.59a3eacf.js",
    "revision": "5601403f12d1e9a9b3d7721283cbc5e8"
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
    "url": "assets/js/26.42bd7070.js",
    "revision": "822fa42a4469b9f5435b16a35f3ced32"
  },
  {
    "url": "assets/js/27.29c55c7e.js",
    "revision": "51368e830288d7ac4e2308a806ba3986"
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
    "url": "assets/js/3.21f6bbbc.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.459ece0e.js",
    "revision": "cb32739b2aa1dde7bf600827f2604048"
  },
  {
    "url": "assets/js/31.af2ce900.js",
    "revision": "d07563c53a5bf1253200020b4e25ab54"
  },
  {
    "url": "assets/js/32.70b0e260.js",
    "revision": "71c78b00919ac582d9a5f2077d3e418f"
  },
  {
    "url": "assets/js/33.c7d23566.js",
    "revision": "53a5c6eaf1a74f5badb799fb6013dbe5"
  },
  {
    "url": "assets/js/34.b33f5cca.js",
    "revision": "17eec1405c9d4763c1d56eaa3b13c0d6"
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
    "url": "assets/js/app.bbdf3085.js",
    "revision": "661f8d8bcfdb0facc246d8a8407e2efd"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "dba9fddaf409eb0b5d13c5716d83278b"
  },
  {
    "url": "index.html",
    "revision": "c31d165dedebd96bbfd5b69c062eff71"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4ec277f89b60b1da28009dded2dd921f"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "15862bce70bb17737dd0df6290c82cae"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "7aeb54bf6250a029ee9cb6b3c9ab8a84"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "42f2831ee99f879e042aa3ef28f919fb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "a77dff6c09dfd11a304301db1bef5905"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "6b24d82648b3ca2027ee567482225be4"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "326d65b151a8f3e85c519517f49333ce"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e132a1fda55d4edc5e09e9d226b42c89"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "ddc71824100f51e30f192fb681a009b6"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "8c48f38dc8b9021ca1b48f9b3f025ad9"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b24cc12a1732e5ed4ccf621de583dc06"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "bc599a105273330fd604d07600c2e8cc"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "43233f7034455f480acf2e45d517614c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "13c94a9831cfe9bd794c35b5f21eff44"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b98286d8cde72accd142e11a78a9e92b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "95cbeaf0fbed611fcf490b30b2351ea5"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "099a4b161e85ede551c41cc63fc75c84"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ea9f20968059a2f6ed888f1db0c03cc3"
  },
  {
    "url": "Node/basic.html",
    "revision": "953608b35fefaff9b6fb786dab8c6a40"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b70128f4a398762674eb9a8d21721a94"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "47ba04b6de729147d00e8bd1f16e007e"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "a694b6063eaede7d9a377031831d0731"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "995d51c8e273c37e00afa34c792cf13c"
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
