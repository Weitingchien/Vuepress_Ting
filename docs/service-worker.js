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
    "revision": "770049bdbaf7cd664327a22e90416256"
  },
  {
    "url": "assets/css/0.styles.e5f03543.css",
    "revision": "cd72f3f0afe035a540306990503a1e5f"
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
    "url": "assets/js/10.9999eac0.js",
    "revision": "48426918e816c490c522bfe025e18696"
  },
  {
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.f84c5f6d.js",
    "revision": "8c91c76d7c2a9976ae854e7ecc80da02"
  },
  {
    "url": "assets/js/13.638d109f.js",
    "revision": "1153e966fe9c199d2f485114ac835f48"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.62f2f50e.js",
    "revision": "6dacd84d0c64ae65719c021447a41db8"
  },
  {
    "url": "assets/js/16.507d8b7d.js",
    "revision": "b3c95e1f9331f8dc6d7c95e4a4b81733"
  },
  {
    "url": "assets/js/17.dd91d216.js",
    "revision": "53ab27761c82fe0af70ecacaede09887"
  },
  {
    "url": "assets/js/18.8fc5caa6.js",
    "revision": "0281ba4dc1643a07b9e3242e00e4bc86"
  },
  {
    "url": "assets/js/19.e27c7a61.js",
    "revision": "a99039041ac2deb8c0a4f06c3bf7c262"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.e78f3a91.js",
    "revision": "53fdd74e50520e4be6ba097ccf0a2595"
  },
  {
    "url": "assets/js/21.6d87c089.js",
    "revision": "13719775a0797cbec3bb38c4cedc9901"
  },
  {
    "url": "assets/js/22.e1cae2f1.js",
    "revision": "55e9ae0390695554b9fdc255912d23a8"
  },
  {
    "url": "assets/js/23.aec9c115.js",
    "revision": "04161ebeecef1233bb7610096ee28b05"
  },
  {
    "url": "assets/js/24.f959c9fc.js",
    "revision": "7ba16ff168e147a1e3d0040d4ac781c6"
  },
  {
    "url": "assets/js/25.1d48eca0.js",
    "revision": "f3981091725cd2c4af44f77b6f1d314a"
  },
  {
    "url": "assets/js/26.268290aa.js",
    "revision": "f00e3bd31a9335eac573975725c1fb0e"
  },
  {
    "url": "assets/js/27.80cfebef.js",
    "revision": "a15ac756f512112302486f4ff2c6ce81"
  },
  {
    "url": "assets/js/28.75b2c5d7.js",
    "revision": "a221897f9ab8fff313bb86981dba2bee"
  },
  {
    "url": "assets/js/29.c749ac96.js",
    "revision": "6bb2431601d068484494d89041e2706f"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.7c7db51e.js",
    "revision": "aab06965cf753f438a169747d169a11a"
  },
  {
    "url": "assets/js/31.0ee66a92.js",
    "revision": "d15404ce5151b22bd8b4a51738bad9dc"
  },
  {
    "url": "assets/js/32.90c98143.js",
    "revision": "84c02d9714c7fc90ff4c848214b00bd1"
  },
  {
    "url": "assets/js/33.c9fe14ee.js",
    "revision": "fd009716aa0d246dee37c8580f618981"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.e7836e11.js",
    "revision": "3897517ac22cf841cac5d6332859bc67"
  },
  {
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.494b3c9d.js",
    "revision": "9b28bef453d146bf6694be7ed4180c97"
  },
  {
    "url": "index.html",
    "revision": "6a3b8d4b97f6aa23916a65a97bcb9c1d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0cc0453ad7d6c517e197a074376a06aa"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1adef153837783e3c9a1ee1adc583186"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6d0aa92ae562671f5282079413331150"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d50c70ef94ac609c31e43d79823b2699"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e15c5889636374f93a67bbef1e732cf8"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "ec6c5ab344b9fda0c464c391b0a0726d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a06de7c3081aa7d589b133569e0b28f8"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a25a4c8a0b1ccc2fa5595fd21b1009a9"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "1ebd63341b4c35165038ce1491c8363b"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ace4c66469f08e8fd77aa8041f5890a4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a97a2bbf94822187179fb65971594f80"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0dbc157b0806d2ad38bac166421639ae"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "4781089e6f794f1fa870a8c7b648858d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "81bbdca6938b48991e853c4fccb218dd"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b2300db2a304952ccae2545cd3352180"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "55e4fc194f5767857ccc73f0a8703e9b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "4c1c6299fe0fd0ca141526c7a96a38a8"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "251e666f38a3e55b4a8d412ad7035c92"
  },
  {
    "url": "Node/basic.html",
    "revision": "275d9ce6439b0d174ab93606f5b59d3b"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "129a6cf7599e8c0c04bcc3ae1c2492a9"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "87a7ac7a078f622956b028a63b4066fb"
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
