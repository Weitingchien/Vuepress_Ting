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
    "revision": "cb3ea57a3833e0e8bab991d4b661bf23"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.b4d14af6.js",
    "revision": "4659e29c79b705dc02bb5b8c981c1879"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
  },
  {
    "url": "assets/js/16.34e49f69.js",
    "revision": "6706cb8f9d89d9c4c5ae68cb0893e49d"
  },
  {
    "url": "assets/js/17.5b891347.js",
    "revision": "5262d220656a8665e4d681b997bea23b"
  },
  {
    "url": "assets/js/18.8b1a7037.js",
    "revision": "daff5912b34622f754e32223f8db10ea"
  },
  {
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.8ac4e8bb.js",
    "revision": "1de1de405bdf4abf38834b63f4eaafbd"
  },
  {
    "url": "assets/js/21.f1d766b2.js",
    "revision": "f754303e5d120763d6c9d0ca731dd34b"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.81e19d30.js",
    "revision": "330677d7005feba05f33a675d32d4e86"
  },
  {
    "url": "assets/js/24.49604a82.js",
    "revision": "0904b56a9362d102f8d34598216b3ae9"
  },
  {
    "url": "assets/js/25.cca6c446.js",
    "revision": "3124241bb9ac6ecbefed8ca421a32358"
  },
  {
    "url": "assets/js/26.6eecde5d.js",
    "revision": "a501f06334c9544cc335e62614c12cb6"
  },
  {
    "url": "assets/js/27.49748f6a.js",
    "revision": "500ec43b6d2b1bb64fa47cb74eb00770"
  },
  {
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
  },
  {
    "url": "assets/js/29.09fd1d5e.js",
    "revision": "987501b46e64884fb93ff6ad14575c4b"
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
    "url": "assets/js/app.647b8d6a.js",
    "revision": "86b91c0e62ba83091dfa7861c0d5159c"
  },
  {
    "url": "index.html",
    "revision": "ba01060199df1d5465b870852ed367d2"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3305e8c07aca49de2c4fa727e8d65b79"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "36a830dc3a6f8bb2f390682822ffc02e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1ca9d9b123452e3197d8ea29dda57a69"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "8c52df0a0aa58e805f20aa5e43109434"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2e908155f0a687db4e17b21eaed5b651"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e74ca2caab14690c4dcee4610cc47e5d"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "28523aa410c9ef29aa712c9d0035058c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a1d237e961b84a3f297dcfd72676d543"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b036bf6476c09357e29112811e3a53b4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0636ef877a60d5b7d0cca4203b413813"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ad392590928991c736f2039198709598"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "01f10b4263435a71b0fa9a2c94a408b3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "08add74d57f126e4d2b9610d3377dda5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "a53bc6b126a24ca48f2c4b199d36e4c4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5d25a3b835244c35298a72db2c01fc53"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "86b3806a3d17d8ca6aa5aae2e0c79771"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ae58047a203ac37deb3d9abeedfde99f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7d6497b231d139f9cea1e69034d49fc4"
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
