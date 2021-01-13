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
    "revision": "d63ac0328f8ea9196a1325bd7ad9769f"
  },
  {
    "url": "assets/css/0.styles.74a4d2ed.css",
    "revision": "40bec2c5fd4ea6e98960d88c6ec33b27"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.777b22bf.js",
    "revision": "dff06ba20661110d823b9333e0c3a2b8"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
  },
  {
    "url": "assets/js/17.3a48664e.js",
    "revision": "e3e1d64887722feb73df72ec2430e896"
  },
  {
    "url": "assets/js/18.d3a8c889.js",
    "revision": "c1d69a4b23a3891756db1b5f0372e6a3"
  },
  {
    "url": "assets/js/19.e7cbdbf3.js",
    "revision": "608e12746abcfd40b8e4cb7ad5532ba7"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.ff58937c.js",
    "revision": "e38fbdb68b862c3c7e7458df3e260298"
  },
  {
    "url": "assets/js/21.05817c15.js",
    "revision": "7437380e39207f2d383a2e5872977a5e"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.bc34a4a7.js",
    "revision": "b155eebd0d327b31668423c08a14232c"
  },
  {
    "url": "assets/js/24.63c6bce0.js",
    "revision": "0859ed45fea25c578744c6bd38eb602e"
  },
  {
    "url": "assets/js/25.2a1debb4.js",
    "revision": "e058528727f5dcf0c3bbef76d1a419b1"
  },
  {
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.379377d3.js",
    "revision": "1a97352fd16ab94f68cb4516efc5abe9"
  },
  {
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
  },
  {
    "url": "assets/js/29.c76ba6a9.js",
    "revision": "7cc110ee670ce836ebebffb8a8b4bf59"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
  },
  {
    "url": "assets/js/4.92051216.js",
    "revision": "51baa684f4ab90af77880df5eae3792b"
  },
  {
    "url": "assets/js/5.d1850850.js",
    "revision": "5d2e2008d48691fad115c18c45541325"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.7025208d.js",
    "revision": "04b78f3f1da0c6bfd922f8170ad5ba30"
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
    "url": "assets/js/app.655f41da.js",
    "revision": "417b5fb0a6da0045b03ced7f5ceee369"
  },
  {
    "url": "index.html",
    "revision": "d30970cbf62389efb0707264fecafbca"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "eea17d533dfddcf94e728f76e9266d72"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "5df286f8cf775885deedfef5ea4b0f07"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d6e640e83bcbf8e5b7fc45f5a9031820"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7d7f69389deaf07830c6033046707023"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fe62c546ce6fa6a4c78b86e1f8f908de"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4461d6ca465724e1a37414bf1cc30f3e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2bb73b9cbf8b67b36f65d2feb2ed641e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "c637ccbece1e7686b7611f865b654b0e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "5f82139b23f4b036a7fbeb7d6e29563f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "68bc03b7de93cb5e9b4e76a29ad13524"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "4ee999a940088a2858798965033bc60a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7cf200696f83ba3b3a9b8f18dc471028"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "eaa7e6d647c768256a315af72c611b0d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "72799d6c2b062e39437650123477a6b4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "438bae4b529e3f7c7e60ae543f13048a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ba50244e00b2a3e5b7c1925eedabfd37"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3a15dfebe3c540fe3b9510e41e71d17b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "21fbcab1c196303cee5ca81d36919ab6"
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
