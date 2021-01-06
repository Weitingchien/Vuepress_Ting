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
    "revision": "5c42866af591815ef5e3926aa30f8104"
  },
  {
    "url": "assets/css/0.styles.aba49d79.css",
    "revision": "477a5c669af9654c50cf7bdbc26802b7"
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
    "url": "assets/js/13.b13687e9.js",
    "revision": "0d4fb54da0de9eb07e557146a5b0dcf8"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.feadc359.js",
    "revision": "569225f5a8d15ec26d1438fcfc2ae221"
  },
  {
    "url": "assets/js/16.90d2cb7e.js",
    "revision": "5c5e9db5da060a69eb5cb1cf5502b8fb"
  },
  {
    "url": "assets/js/17.5708cfe7.js",
    "revision": "5a02e0a01633374b0529f42c0cc56ce7"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
  },
  {
    "url": "assets/js/19.53588efe.js",
    "revision": "e3cedcce8507a8624497cf44a9516e23"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.ac641cfc.js",
    "revision": "1f52737d1173066cb6b16be53b647004"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.6e8492a6.js",
    "revision": "2a50aa80783a8ea616776604122a8260"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.b0de9949.js",
    "revision": "ad425b6bd0cf04de7f0232f66e0314c8"
  },
  {
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.09fd1d5e.js",
    "revision": "987501b46e64884fb93ff6ad14575c4b"
  },
  {
    "url": "assets/js/3.afb81690.js",
    "revision": "8d60d2b772a58a6432e8910191272907"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
  },
  {
    "url": "assets/js/4.3bead0d7.js",
    "revision": "02ea3b4a851cf9faafed602a1dc4f112"
  },
  {
    "url": "assets/js/5.5c4830ef.js",
    "revision": "d5a58e822b4e169f68fdc0b7019adcc4"
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
    "url": "assets/js/app.e642f896.js",
    "revision": "66110774413659a14def5c02e8570a14"
  },
  {
    "url": "index.html",
    "revision": "e021025824a42a9c3ca95ab1ecba10cf"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "38d51565f2866313536ad36fc14fddb4"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b4f75bb0fa8b0c6198ce07e4f0084602"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e001be1ec5ee504b2daf4f7d79754308"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "05b6616eac8fc1df7af33d1501620195"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "bb83b0ab7b15669ed943e4d77e67d534"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "dd52d881480c3686464c1f13b562b40b"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "cbe5dbef02c8831c6f2fdd2038e94f12"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0b1c71d451e275e3f2ac2705cced5571"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8669ccec18e95ad3333b22a75187f779"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "fdfb45a46c3d75a316a4420089d01e57"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "569c05ed58e9d4800fdb5298dce40bc8"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "2f35c81c8e93657c3051f78ceb2a9675"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "9dea692f904db22b0f91e5de19ab8367"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4726d09dafea6360fd320d47630042e1"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b38026cea5cf94de4efb1deb5aac52f3"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "61bfe9a1a3c874c860574a96158bf3c7"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5897446cf31fcfcc16d4734bb48ec063"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "829443a42c249e427809d67be3be4de4"
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
