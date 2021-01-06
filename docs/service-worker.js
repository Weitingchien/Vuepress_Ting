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
    "revision": "3556d126194b15fecc4a2b5a98fb9dae"
  },
  {
    "url": "assets/css/0.styles.aba49d79.css",
    "revision": "477a5c669af9654c50cf7bdbc26802b7"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "assets/img/vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
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
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
  },
  {
    "url": "assets/js/17.887b5e8c.js",
    "revision": "26d020b62b8bf8ed2716d744b6f116fd"
  },
  {
    "url": "assets/js/18.d501cdbe.js",
    "revision": "8bf3dda4dc0343b29cbd028dac3074dd"
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
    "url": "assets/js/21.78ac7fec.js",
    "revision": "90a118fae7befa1e65e9d6fd81ef06ce"
  },
  {
    "url": "assets/js/22.6e8492a6.js",
    "revision": "2a50aa80783a8ea616776604122a8260"
  },
  {
    "url": "assets/js/23.1cb78ce1.js",
    "revision": "7ff18c84d7c3a6eb719f8107f8bc963d"
  },
  {
    "url": "assets/js/24.cbb8ca43.js",
    "revision": "f9fe6e66a039d49e34763cc5a4352115"
  },
  {
    "url": "assets/js/25.b0de9949.js",
    "revision": "ad425b6bd0cf04de7f0232f66e0314c8"
  },
  {
    "url": "assets/js/26.a2fbafaa.js",
    "revision": "de079bf198afa8f5e5378fbef414e7a9"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.c41aaef5.js",
    "revision": "2c31ce918adb3074e3f34285d1eb00fc"
  },
  {
    "url": "assets/js/29.b168b5c8.js",
    "revision": "f1e533e4fa76d5919f958e7ab9b337d4"
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
    "url": "assets/js/app.5de740a8.js",
    "revision": "aa642e916dd6219889788420316ae3a8"
  },
  {
    "url": "index.html",
    "revision": "65a6650f41616d5f940b2db2d6f5671b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "10c832dba107eb189578e1c212498b79"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8e56dd6f2c900628ebf7e26b74554227"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "34088365900006ec9165fa095fb52472"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b55c06dba7172a4ec9920628976b5ec6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e3e10ff8df41717961c92e1bb71227aa"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "d0523122e3c3a0f9a67690130b83bb2c"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "68b9ed4729a52f1920829708e628b03e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a6dfd28fda0376a2d0f7a50312445f18"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "6a174fe373c5b3b3b0a907db442569a4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7bcc7ae4ba1697bc758bd25f30fdb40f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f64c9f1e6d4ae0bc505fc3c889e4112a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "3b0abe5ff159f62f79cf43dee21de7fc"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "65ddf56d098d88698bf454807f930cdc"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e471308081fbb45594d40c0e923988f6"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "42ebbd8a88428d4df0b196947169db93"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "cc26f4ada4450545266301576db51127"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "88356bff5729f8bce31087d575511877"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "22269ef4b2c4c6ef5c479c7a2e82f111"
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
