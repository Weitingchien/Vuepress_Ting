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
    "revision": "c3f4872771c810b30cc8ff63528475dc"
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
    "url": "assets/js/11.17514c33.js",
    "revision": "e638f4e99f7ea96968bcdf443bde6aa2"
  },
  {
    "url": "assets/js/12.db528b29.js",
    "revision": "33fdd1f44a66f77a0d91940930a4d416"
  },
  {
    "url": "assets/js/13.8b2356f5.js",
    "revision": "27211714fac266a61befe0cc7a800b7a"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.18ab9721.js",
    "revision": "e9ac04b292228da86ad5adc9bbe36816"
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
    "url": "assets/js/18.d97d59af.js",
    "revision": "4c98f75ae42173cd88a1882d824d6175"
  },
  {
    "url": "assets/js/19.09134cd9.js",
    "revision": "8903be5af0fb50fc096c57f7960d0175"
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
    "url": "assets/js/22.d4fb920b.js",
    "revision": "2d910da659b95b6d121b49712de60e18"
  },
  {
    "url": "assets/js/23.0802bd11.js",
    "revision": "24c60931fe14c72003dba3a10ed2a2ef"
  },
  {
    "url": "assets/js/24.b7070ed5.js",
    "revision": "4bdfc83ab760396fc0c1323928085fdd"
  },
  {
    "url": "assets/js/25.7f045a70.js",
    "revision": "2856de723b541113e8295f2972b38309"
  },
  {
    "url": "assets/js/26.153ae1b4.js",
    "revision": "d571d1fc7a600ca349a5d2e23497b1b3"
  },
  {
    "url": "assets/js/27.295664c6.js",
    "revision": "748766e17e9d7b443c6167937be1a30b"
  },
  {
    "url": "assets/js/28.75b2c5d7.js",
    "revision": "a221897f9ab8fff313bb86981dba2bee"
  },
  {
    "url": "assets/js/29.c16d6396.js",
    "revision": "ae896e44e54712e09054d827b7b47b5a"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.19738d23.js",
    "revision": "0572a658b75fea229bc5d62d115de2b2"
  },
  {
    "url": "assets/js/31.df517384.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
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
    "url": "assets/js/app.0a9548ec.js",
    "revision": "b40fc288e48c828715c968e631206952"
  },
  {
    "url": "index.html",
    "revision": "3ff5d6bd99edf1d45330061a6cc7f23f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b8f5366acf4974edc6b073075904e528"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "3636509ea5ee21bb13c3eb784eb0eaf3"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b4856b4cb76e641c7485b54b63abe5a2"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "6a2481ea46cacba541a09a62398adba9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "37b1ff805523f641cf427ae76bf86a6d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "6d1c1dae3a77b0c0b698471a61e18a42"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "1811725b6bc6d7aab0f550228af0bb25"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "242f2179c0cc0ef97bf7f404c2a30d56"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "738f438098286e96d59b609531435af1"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "6c00d5434c2033a149e686359e5c201c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8b61fe208fbd0d32fbd1fe98097ef6fa"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "a5c22f3af21617764dfa96f3ab8e954b"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7de3f4028f4a0817a386cda28bd41454"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5cd7bc71d96a59b866a562ef9456b786"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "cedd60b625467ad0e47478b63834601f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e05982378321ecf0b53b6269be62fa46"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ec7641836ca0b2f5adec51c174809ff4"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "74651bad7ff3c351649c47fb5b02b552"
  },
  {
    "url": "Node/basic.html",
    "revision": "9db21ab8dc98d83703021db54c223213"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "86678b9b7462639f4dc46c5bd3629726"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "5225ebfc588aeeb62f83cadd051b9a4f"
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
