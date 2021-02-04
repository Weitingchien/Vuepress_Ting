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
    "revision": "31f492c7e166c7d98f1548e27564ab5c"
  },
  {
    "url": "assets/css/0.styles.c6707bb5.css",
    "revision": "44b11f49b6d2b23fd01bd446a39b247d"
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
    "url": "assets/js/12.dd9ba49d.js",
    "revision": "a822deb8202f02a77ae087f0f33c63a2"
  },
  {
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.83df74d0.js",
    "revision": "787a9d56e53a7258bb0a7dcc70fcb960"
  },
  {
    "url": "assets/js/17.a1efdc2c.js",
    "revision": "a85243c234608006d2161d4b8c6f53c6"
  },
  {
    "url": "assets/js/18.e747b6ba.js",
    "revision": "fdc372054bf9928dacc5150c2e558382"
  },
  {
    "url": "assets/js/19.1e2fc0b5.js",
    "revision": "18f7cbcced210975f5cb64112aa445e2"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.5e305e6c.js",
    "revision": "9d3ecab9f8ba4e6b62f53c433058f843"
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
    "url": "assets/js/24.49604a82.js",
    "revision": "0904b56a9362d102f8d34598216b3ae9"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.52ad3678.js",
    "revision": "770f795052d56375acffebc874cc3452"
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
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.16988b13.js",
    "revision": "eb3f2f3109643568534bdcca6712260f"
  },
  {
    "url": "index.html",
    "revision": "b71e7109d702fb60d81c40e091bd751f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "76e41bc7cb8825e15e9ab7578817afd1"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "a39cef2a41984823cd7e972afc41d6be"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "b33e436d4cd66b3f254f0518bcd16f7c"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "0176203b8e339382a9b583e7ced17fd3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2f4a930284afc415875e30fa009ddb18"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "cead59755c678d56be89b56cecc4c200"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ac83c47e2d92341f131701f58a8816e1"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "90bc9bb04114b100ea7a56e1b91c0744"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "69aed4544993b269b145638676a356b8"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "414d4c46336e984f63384e709349c8ff"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c3a5d199f67050844979ea7cae39c6b0"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b4b240c7c0a2b3d81457441e459b46ed"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "00dd6ff1eb9dbf17bf265fdea8e670df"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "341a7df4b7453e27b733e92da657dcdb"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e927d7b173453dae350843aaf293de59"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f8133fbb16c828ad51c5fd4d8c8920e8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5f5e11434665334906c91dc417b0160e"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "edd3484cf2a0cf86f58f328be6483748"
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
