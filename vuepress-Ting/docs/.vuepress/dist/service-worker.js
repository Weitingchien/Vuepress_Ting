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
    "revision": "78e8a45af3c2a12f66249de132aa1e96"
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
    "url": "assets/js/12.afa59b50.js",
    "revision": "c2eb6e119fb57de050e0a261412cd3db"
  },
  {
    "url": "assets/js/13.9e384755.js",
    "revision": "de85352019110a5c47944aedee48dee8"
  },
  {
    "url": "assets/js/14.debe50f0.js",
    "revision": "62d580ed551565f5c6509ac52371db72"
  },
  {
    "url": "assets/js/15.6ca293c6.js",
    "revision": "f937bc81bbc170ce1f4d9a4caa5b4ac5"
  },
  {
    "url": "assets/js/16.944576c4.js",
    "revision": "a2417b810bf42d05d9a312e647689195"
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
    "url": "assets/js/19.d775b93b.js",
    "revision": "1f6d4ebaf5fa566654017642e7579ad0"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.42b559d2.js",
    "revision": "be6e5003e1fd7576d5bdbccc11d4f969"
  },
  {
    "url": "assets/js/21.f1d95672.js",
    "revision": "39cf5845647df631c417e158cf6565bc"
  },
  {
    "url": "assets/js/22.d0b5c8e3.js",
    "revision": "c54eb37bf52b33501b813412f6d9f4a7"
  },
  {
    "url": "assets/js/23.e22cfe14.js",
    "revision": "3f046b732a5fd942d9082a7f68a627a7"
  },
  {
    "url": "assets/js/24.01f635b0.js",
    "revision": "5fead89ca84dbbf32483e634c466e87f"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.9f4bf2e5.js",
    "revision": "13be57567e1d9eebb49c881d3bb68669"
  },
  {
    "url": "assets/js/27.29c55c7e.js",
    "revision": "51368e830288d7ac4e2308a806ba3986"
  },
  {
    "url": "assets/js/28.411594a2.js",
    "revision": "bdf27cf56981a1145350211af4a7fd97"
  },
  {
    "url": "assets/js/29.5c172f88.js",
    "revision": "28db94bd488143d19f5977fd55c205dd"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.25f10e47.js",
    "revision": "723833be16b6fdba113f200e6a94c0de"
  },
  {
    "url": "assets/js/31.6a54328d.js",
    "revision": "d15404ce5151b22bd8b4a51738bad9dc"
  },
  {
    "url": "assets/js/32.2d7fcd9c.js",
    "revision": "bd5ddccf0870a6a9fdd15c9569410539"
  },
  {
    "url": "assets/js/33.b599cbee.js",
    "revision": "f2ba3e0cb3d5c1b9f3a25edb95f07c44"
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
    "url": "assets/js/app.049dfbf1.js",
    "revision": "38014d5037315a3b5b4be4d6414ef8f5"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "078a6e74b16f7d61fee311b8c63e125b"
  },
  {
    "url": "index.html",
    "revision": "375ea4ffb013bcbe4ee1b43fdfe4596d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "6131cdaf663705e54c0565bc5b8583e3"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "599605b54cd2f30c7c72ea32b6e0e2c8"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "91a606ee6c0ead12eb7f6a877e434bf3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "7f8b5e4a9424bad9706f3c4fa9a27eb3"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "311626b1585761f4a7414af1843790db"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "5617096272351aee71b10c73cd746d33"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "edfec4b15ce8f4b6727a057f48e5b5a2"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "d0b421d662400f7d91699e0e7cc4e85f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "813c1c2b2baa33c8b15a2e8f17b04523"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "36af7bdfbf8bf92913ce1760f5c6b540"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a593de4987f07fe49cbbb13f7c36de35"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e0e4e7477f4b901fcd2037ce7aea32d1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c731cf0271fc780570f4fdd113585080"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ccf5f9cb63cc31d8156b0b2b36bbeef7"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c67fc37366061af188bcadb4a2cb7c8c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8bf75a62fe801eff8a3f23fbba3c4c61"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e34fd0395c8b743ff6087eba42df90a5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "195d89a9c6e0bc54d66946bbbe8ca2af"
  },
  {
    "url": "Node/basic.html",
    "revision": "a94b7eabec3a80633cc72a78f9fe16a0"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "97f57408dcbebe279d83243b83db42f9"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d184ee976f6decab5f3f12ab105e8f91"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "f384448226aad8c47ec050e7eab21906"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "88dc27a97f7f9ad07574601c1f3cc11f"
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
