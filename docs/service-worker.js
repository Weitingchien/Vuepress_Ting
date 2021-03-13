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
    "revision": "c498c1551a757ed5f3c49275779d9456"
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
    "url": "assets/js/12.5a673803.js",
    "revision": "4776fd5a1bd56e63ae3c2f77e310a6e2"
  },
  {
    "url": "assets/js/13.0c1e3d69.js",
    "revision": "43671ae79038cfb84ff153e919ea8af7"
  },
  {
    "url": "assets/js/14.ab3c15ef.js",
    "revision": "cef70a24f56712a6a5f78390eec39436"
  },
  {
    "url": "assets/js/15.55ec40f1.js",
    "revision": "334fee4192647c829544734e391ecab9"
  },
  {
    "url": "assets/js/16.4bcb45db.js",
    "revision": "695ab0833dcf5b1458a33be4ccb6ac92"
  },
  {
    "url": "assets/js/17.4056a1b1.js",
    "revision": "de8036b3c10fd83f78dd398a38f2cf2e"
  },
  {
    "url": "assets/js/18.d97d59af.js",
    "revision": "4c98f75ae42173cd88a1882d824d6175"
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
    "url": "assets/js/20.e78f3a91.js",
    "revision": "53fdd74e50520e4be6ba097ccf0a2595"
  },
  {
    "url": "assets/js/21.c450ccab.js",
    "revision": "1a93a9b6eb81ab579509dbe9251622e9"
  },
  {
    "url": "assets/js/22.e91ce85f.js",
    "revision": "96d2f80a2af965011bf59bba9bc4891e"
  },
  {
    "url": "assets/js/23.0668c1d6.js",
    "revision": "da37a0ce25d483dbdfb3f56462460912"
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
    "url": "assets/js/27.608a2432.js",
    "revision": "65c316a8f2d1cee7ed37971e6955e359"
  },
  {
    "url": "assets/js/28.69bc5c87.js",
    "revision": "75fd3d7273f24eb0e50d65bd7909bded"
  },
  {
    "url": "assets/js/29.464e2626.js",
    "revision": "cb04ed019d9326703c335daf0c813926"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.4f5bd044.js",
    "revision": "3314ae146e27c2efb3ac9a279341ee36"
  },
  {
    "url": "assets/js/31.3acf76ba.js",
    "revision": "0f8241008c43dddf8c99897656cf00bf"
  },
  {
    "url": "assets/js/32.4e65a18b.js",
    "revision": "2abf23abe3278a0caccddd83d8ddf0c4"
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
    "url": "assets/js/app.dece0bd4.js",
    "revision": "85b3d8365a4f223c3ad5da6268ec5e33"
  },
  {
    "url": "index.html",
    "revision": "3201fbbdfb409213f2fad6731456216e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "5192ef585636ce5fa909adec95b3c34e"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "7a7feb1c9814ec8937cf976c2d4d435b"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d559d3ba545a5ab2962a9923852884cf"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "4f6949680c0e76ec20d39e3067246863"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "ca560e34e278eb011a08865cca74e163"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "a4bb1f887de2578cbfbe44fea92b5f56"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "30023d519f616725a0b5ca532fe55f72"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "7d149171d4634b18b6eaaf3b8b7347a1"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "6d8eac3dca2f2b32e0419f8541d44a1f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "f4f33f4f88a582286871522c6c03a6c5"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8b156d04d5c25b94a97b24ec3cc0b59c"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "67c8735b1f94ea7e60efd44ad86a0430"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "9b0a863b43bd07e0f3d573208a5b50ac"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5ba1bdf04dfcc14fe988280402884b91"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "bd3112fd47932f9d7c0f9400d325fc15"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "17383cf6eaee937906678f086c7aba95"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "968620d75041c1c8c1d9dd954043496a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "d7cd959f0b925db8aba320e47599d6e7"
  },
  {
    "url": "Node/basic.html",
    "revision": "4d26c04c96f340d4dbbe126ce5d24ee1"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "24fc556bc76e3be7b83d5abd1f244561"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7f97dc0882f6ef16efd921167e3a9cb9"
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
