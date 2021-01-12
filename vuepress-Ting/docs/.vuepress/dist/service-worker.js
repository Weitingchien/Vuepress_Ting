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
    "revision": "556cc4e2f853858af9ac1048f836d3b7"
  },
  {
    "url": "assets/css/0.styles.2e7b25ed.css",
    "revision": "15fb2b4dae48ff7c7a12e4e57370f683"
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
    "url": "assets/js/14.d3621ba0.js",
    "revision": "c09cc58a495c2aff91d3ce59c957f7fc"
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
    "url": "assets/js/17.5708cfe7.js",
    "revision": "5a02e0a01633374b0529f42c0cc56ce7"
  },
  {
    "url": "assets/js/18.d3a8c889.js",
    "revision": "c1d69a4b23a3891756db1b5f0372e6a3"
  },
  {
    "url": "assets/js/19.ab85ca15.js",
    "revision": "43937b9b776118d1ad64c37f5d14fd01"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.c1a5a11e.js",
    "revision": "62377bd5e5a1210646209b7dc602f1d9"
  },
  {
    "url": "assets/js/21.80c4b70f.js",
    "revision": "2f02aed9423bb7357551c94c23e0bde0"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.49604a82.js",
    "revision": "0904b56a9362d102f8d34598216b3ae9"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
  },
  {
    "url": "assets/js/26.a2fbafaa.js",
    "revision": "de079bf198afa8f5e5378fbef414e7a9"
  },
  {
    "url": "assets/js/27.49748f6a.js",
    "revision": "500ec43b6d2b1bb64fa47cb74eb00770"
  },
  {
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.b168b5c8.js",
    "revision": "f1e533e4fa76d5919f958e7ab9b337d4"
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
    "url": "assets/js/4.3bead0d7.js",
    "revision": "02ea3b4a851cf9faafed602a1dc4f112"
  },
  {
    "url": "assets/js/5.2b550773.js",
    "revision": "82c79708c25e47fdb9de09cf03d8256b"
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
    "url": "assets/js/8.2c965816.js",
    "revision": "46674ea7110a42652abc9e34596e8166"
  },
  {
    "url": "assets/js/9.77781582.js",
    "revision": "97afbffb7749f203fd1d9e5ae6c9db68"
  },
  {
    "url": "assets/js/app.a2c2e141.js",
    "revision": "662d266303b6912f871b6a2a82df64fe"
  },
  {
    "url": "index.html",
    "revision": "844273c091d920a4c4251452bb7a4d9b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "63298aa93ba3d27c327b58e73e0ddfbc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "747a4b9a3a80ffe97b7a0fa48fadd805"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "426ebe8ff461af61289a4c7437de28ef"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "dbbf2b7fe01155e2a8bd4881fa2182dd"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "985004e76fa1d118d221bf4331c4dc75"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "34ca366238dad43e665144c7136a2112"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e77c3fe5fa642d85a0fd0b1db4711123"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "d06437509a7a4519705500e4371f7d98"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bbad1d8cc76139f6f1e806ce19287911"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "8243f351b486d6ad2794861eefd77d58"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f3e42c0712bef7dfba980cce2119621f"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ae3397e3d0cc70062a6a2c1bf810ab5b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "db6ebf4ae976822326b03e8524ba00cb"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4263a8d8c5a494e608299256be5f00a8"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "bfb392d21fb721af7307e8a270ba042c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c3249c3dddb97e95f3349a7ba7f714d6"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "113c2322ff1a139740d705277715d05d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8f665c88dbb061c28991d500c61a3590"
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
