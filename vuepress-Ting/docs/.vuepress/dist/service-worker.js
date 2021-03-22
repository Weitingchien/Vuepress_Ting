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
    "revision": "794237693e2bc678079c417f3481d84d"
  },
  {
    "url": "assets/css/0.styles.83631992.css",
    "revision": "9a46a9d9c346c0edeaa7d2bb07a71e92"
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
    "url": "assets/js/12.3a47160d.js",
    "revision": "f12c2cdf17a8e48d5ab7351350ed1803"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.e075846e.js",
    "revision": "a474c6cc958701e8d3317b7ec5ebb874"
  },
  {
    "url": "assets/js/15.497e2dcc.js",
    "revision": "c82816918646cc076b58671e983c928e"
  },
  {
    "url": "assets/js/16.35b44e55.js",
    "revision": "cf7b9288e10bc6122e2c7861e04b8ff9"
  },
  {
    "url": "assets/js/17.fa2fe178.js",
    "revision": "c449eaab4016b7336230885e3750c9ed"
  },
  {
    "url": "assets/js/18.9e33843a.js",
    "revision": "ebcaf87d540d04ed70eceb9914586e26"
  },
  {
    "url": "assets/js/19.a43bad3e.js",
    "revision": "b174f6334f8107824daf3f0b4c2cd412"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.fd2b685e.js",
    "revision": "7d094432d23eba963648a9ec6a5b8652"
  },
  {
    "url": "assets/js/21.c0b03832.js",
    "revision": "37921e3e05d4d2cc6c5ba508980ae0fc"
  },
  {
    "url": "assets/js/22.3374e689.js",
    "revision": "5bb9d677bb45d44a18af0301aa7b8f4b"
  },
  {
    "url": "assets/js/23.48cab938.js",
    "revision": "ab51ff8f7792f213bf7deaef3a9e7fa7"
  },
  {
    "url": "assets/js/24.b3e767ef.js",
    "revision": "f3fad38f0757499a6518c490a516e5ef"
  },
  {
    "url": "assets/js/25.b99e0850.js",
    "revision": "99f64baa7b5894764dd3f6d07ea2684e"
  },
  {
    "url": "assets/js/26.7593d961.js",
    "revision": "9a68a34ff20f4b6bbdef623c08ba7eb1"
  },
  {
    "url": "assets/js/27.430a407e.js",
    "revision": "07afeefb7e93086b15bcc2f544414317"
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
    "url": "assets/js/3.afb81690.js",
    "revision": "8d60d2b772a58a6432e8910191272907"
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
    "url": "assets/js/5.9749b1e0.js",
    "revision": "a5c31530fa69a649493899a0e771bf0d"
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
    "url": "assets/js/app.bf0ecfa9.js",
    "revision": "18e73f330eae4454fbd751eb07794df6"
  },
  {
    "url": "index.html",
    "revision": "6119a54aed0bd8b06b69028da000f187"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "782d0e0828fc00173a9ddafc57f3fa86"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "7322b8b705f7ea3b5084066a6c76ce81"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "78d219410f17d54fb1eac26c7fae8ac7"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "13ee49eb9ca33ef408622cdac579cf81"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b957f78efa64a827922e7ae0f30c2d1f"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "c906d46b212be1c14966946d4b5b09d9"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "2e1757e0b0377900beddee50ba272476"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "bf83d221ade534b25a3954b8bc373974"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "cc01217a394b45d2459d23a4c9452aec"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "1b0bd2aa5e71a1777d9fd91256434564"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a0eca9022f148fa878f9118054a4c096"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7f8dca8df3ff25955cb1c4aad21d40e6"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "86e5bcee38017a773139d66c49c66a6e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c3bc3a686b6ce0ec2d613e3f8dc27270"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "8a0e7f8a452ef825bb7f2fc6ad7357f4"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b89a011410f4989d662300b7efd4e6f5"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ac46ab6a60f33a879b1b86366e421a01"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "03a45e5f55b0f2d40b0bf5354d307e01"
  },
  {
    "url": "Node/basic.html",
    "revision": "9549aee67bb7882b99ef04b4b6394631"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3a52669c1141ee6ff7610fb9f7212bd3"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c149afea4c6fb1aa54fa3e3e04e09a2e"
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
