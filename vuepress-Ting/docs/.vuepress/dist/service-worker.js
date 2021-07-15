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
    "revision": "f6e87f968448ec84c7cd19a42b07216b"
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
    "url": "assets/js/12.d120ed3d.js",
    "revision": "f737c79a318d85a55a50852a1ac4d91c"
  },
  {
    "url": "assets/js/13.05e0b4a7.js",
    "revision": "7f12a42dd137a9649650e10f9395e792"
  },
  {
    "url": "assets/js/14.db443f2c.js",
    "revision": "c0f1f75efffbbfd70d607fe8dd54113f"
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
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.df418696.js",
    "revision": "44713ae217a4f3f119ae0ab48814baed"
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
    "url": "assets/js/30.0b2c5c1d.js",
    "revision": "55ca8cd1b670b7fe66c890fa21e057e7"
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
    "url": "assets/js/app.412b45ba.js",
    "revision": "61a95e66674ef6bc1c66e556c2d07d5d"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "1d819b9b3be2c37c0bf9d9bbfe49edce"
  },
  {
    "url": "index.html",
    "revision": "1c06e9360ca30e3c2d0f87ba98bc44e2"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "df1e78dbf3391b7405226376d999e72d"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "884e594f8a33a73bbab6e77045ca7a61"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "209097a3b15a72e41b57fe1119e0c6fd"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "6b19147e682c1cec9b18859bfa63e34d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3e6f0a2b2365d92f87711725ec90dd91"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "0bbf201c4e7e19dcfe2fe2902a2a63c1"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "fa59f311f0a2b5216fc348cc68a0a9f9"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "89ebe8e310606b76763464e9e9865ab7"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "21d0e35a1aa62fa7828a893814c53323"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ce147a5b103c262d4745a1ab13c34303"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "4b23f5cc4c41118448e02ed0f56df5e3"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c6008e0c9e7d12637b80f100fa729635"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "26066f59f8c8add6c00831e3c7f87b18"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5f5f75fa7669840ca364e53b4557da75"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "05e581fdcb4c609f0084c2c28bdd018f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "32db37bc3fdb65474cc1433416eeffe9"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "c46b08b7f592431bcf4224e9d8b18a8c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f6b5fb9f9fa77fb87c84f1e963960027"
  },
  {
    "url": "Node/basic.html",
    "revision": "3382a08c16c032c63606504b88253d05"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ee92e8258b25348f3fd736db9e1f522e"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "94cfd0fd217286a1809c4b86136b8e84"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "d3fe5209983d496dd0d2cbc607e0f611"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "5e25de235505b1e475fc1a7d21e73f2c"
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
