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
    "revision": "c394a0f392fd7c6696dc356d6edc0149"
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
    "url": "assets/js/10.83dc0a4c.js",
    "revision": "074407ba42a5f1510dcde77ff319af41"
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
    "url": "assets/js/13.0bc8e782.js",
    "revision": "4f9633c4e80ea2bfaf9c43fd99f418b9"
  },
  {
    "url": "assets/js/14.b551bb7b.js",
    "revision": "729c18ce6786928fd0487e6cefb12519"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.0ec5631d.js",
    "revision": "d26b3ddfc665dd46d3f0eff6bf8a0e92"
  },
  {
    "url": "assets/js/17.b996b7d3.js",
    "revision": "4aad4b8595f8db6304557c9732e992f5"
  },
  {
    "url": "assets/js/18.8f0758c4.js",
    "revision": "8de89d757024075e029e12ec8c9b8016"
  },
  {
    "url": "assets/js/19.2b444ea9.js",
    "revision": "9a26b7ed3aefa588a989d5f344ef542f"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.2dfb97e2.js",
    "revision": "42600154e936e27be2439e9e0fe7a099"
  },
  {
    "url": "assets/js/21.a9d2b5eb.js",
    "revision": "069f166041fdbe07a6932605de522255"
  },
  {
    "url": "assets/js/22.1f6c43f3.js",
    "revision": "10c105c6ef84be8102b39edc5cb0d149"
  },
  {
    "url": "assets/js/23.8766baa8.js",
    "revision": "b51acbfaf65c7b516689991c08d193e4"
  },
  {
    "url": "assets/js/24.23cf0630.js",
    "revision": "27ad97e0cfdaf4711c00f53fceb977fe"
  },
  {
    "url": "assets/js/25.2bd6822c.js",
    "revision": "814b13763bcf188fdfd3da6f40a11901"
  },
  {
    "url": "assets/js/26.999527d0.js",
    "revision": "82c702a962fd8401ab11fc8f11d21e61"
  },
  {
    "url": "assets/js/27.ed59a030.js",
    "revision": "f903ea51aca68d72f0c9a3c4d45a93dd"
  },
  {
    "url": "assets/js/28.9f1ccef9.js",
    "revision": "e435b2d527e7bcc7b0ba205342456e34"
  },
  {
    "url": "assets/js/29.a2fbd1a4.js",
    "revision": "0769d3bdec8dbf196f3dbdd25febfde9"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.b1757485.js",
    "revision": "ea48a3ef087f175e74548b95fb4e3576"
  },
  {
    "url": "assets/js/31.87692e1e.js",
    "revision": "4cefa28b5c127ac8a03b9bcd26c8d014"
  },
  {
    "url": "assets/js/32.5ae86e36.js",
    "revision": "8b55f4e369f22b5a086b1c97eeb74914"
  },
  {
    "url": "assets/js/33.b0b6d2d8.js",
    "revision": "01c19d81d2000130b34affaa73ad2a3d"
  },
  {
    "url": "assets/js/34.4a965bab.js",
    "revision": "8f23d500e5d972a0ec0c0ac58717d632"
  },
  {
    "url": "assets/js/35.46b64556.js",
    "revision": "b281fc5297e4f20dd0933eb6f517e69b"
  },
  {
    "url": "assets/js/36.ea1c94be.js",
    "revision": "eaab7ecf5783d75a0664c274b08e7d70"
  },
  {
    "url": "assets/js/37.b8ed2f83.js",
    "revision": "395f7a6beacf5f49a3d8f1f7a56078f0"
  },
  {
    "url": "assets/js/38.4e621635.js",
    "revision": "61ad49617711489b2799d4d544a1031d"
  },
  {
    "url": "assets/js/39.f7d095b8.js",
    "revision": "a2c33bd16d3fe236221c3d289c2c6f75"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.04c45a41.js",
    "revision": "8fd67da60645692d0618c8278a1da46f"
  },
  {
    "url": "assets/js/41.d5e869ba.js",
    "revision": "d08f51274cc0f07384cf5de897c5b128"
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
    "url": "assets/js/7.00149598.js",
    "revision": "d37218136addeca1eba48189041db6cd"
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
    "url": "assets/js/app.42c5628a.js",
    "revision": "0cb69228c582cc1696d0895107c96a99"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "87d7fb7d62c61d0c209e6eab7dfe8c18"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "c704ee8c0f6439f145b6ae9795bcb955"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "5d70fdbdb6a3bec7ed36a2ac13889ee5"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "7b1f5ca1c4aa1234fd7a957c6a656c5c"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "3855c3544a6032747d39bfefb515bcfa"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "7e94f6b8c49dcf065376f15a1f693394"
  },
  {
    "url": "index.html",
    "revision": "47e8e005a1ffcd35bacaac3bfc61b7d4"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "5e10c2dd6025adbdb2dd7f817d501a97"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "775f08e2a296416e80323a48f5154193"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "72ebb556e57f13593061a643cc5be969"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "0e37cdacdbba010567368a1f4fa4028a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5e846af38cfa1ffe5a049b556c16c028"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d7ad2cc746eaafb20a420882507c8829"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "cb268ab4d656ba730a7f8c119b3b677d"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e933324e59f604a67b1bf082913b26dc"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "c2c5f9d5da3dd95da51351f8c784eb08"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "53c13872a804c702dd71971c74d09163"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "27f3f3691aae8fdc9e75e877a9f62442"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "bb8055ad4fb71f028053163d58b6d101"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f303113dd97fb72e2eee6d82e1ea7b16"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c6e876be86765ac882ea364eb0f0d41e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "f279a237bd94d6a360171aeb63206c13"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "2299f233e2537fa7ab402551dd815d61"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b5e7f71ce5c5ba33d3d28105759b8338"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c28a6a3021eb7aab3d55fd312ff295a6"
  },
  {
    "url": "Node/basic.html",
    "revision": "0b3718a4047d086a1a61169fb1c99302"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f53ad7a3123efeedaf89020a11a6fbe0"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c04ca2ad7a188d7acc95ad7be0657c13"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "d23d066358a25c37196b257ccc2a4fa3"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "117de925230b1aa4ebe661d043724a3c"
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
