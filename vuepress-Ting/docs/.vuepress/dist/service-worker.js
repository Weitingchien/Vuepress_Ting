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
    "revision": "f3857ebd430aad9e266fde2caf48b650"
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
    "url": "assets/js/12.dd9ba49d.js",
    "revision": "a822deb8202f02a77ae087f0f33c63a2"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.0bef3f13.js",
    "revision": "991abc627b0a17834b009d234fd9efdd"
  },
  {
    "url": "assets/js/17.3a48664e.js",
    "revision": "e3e1d64887722feb73df72ec2430e896"
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
    "url": "assets/js/20.d0457c7a.js",
    "revision": "00a9de46dccc28d3df777db52abbb8bb"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.6af61cdb.js",
    "revision": "afbdd44478886e0cc34614d8049b7e69"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.7bad2d32.js",
    "revision": "b6554754ed83df2ee1b00ab67ba0f47a"
  },
  {
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
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
    "url": "assets/js/app.793a3424.js",
    "revision": "8494feeca0be4931cde123cb325575c2"
  },
  {
    "url": "index.html",
    "revision": "8d27be41e00bf3034c5b236ce3c1d67d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4e6cd438efc0a7f8c8b72ee52e836baa"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "5207c1d1537a13775481424dd0ebc8aa"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bc35dbaf665da35a7965d419d4c0ae13"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "304afda23607257e5fff5e9d0307205e"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "87fc54a9be1d893eb4aa1aa107b2f77e"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ce829bda97a37dbaf33c467dbd9136e7"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e4ea0d739ae347cf5e4fad3865fce9a8"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0f4744e43c084bb51df3e5b075893490"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "460c07cca14874963def0372398cf188"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "525174e9204ea510f9818d280ece60b4"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "13cad84b1bf4b5761bc857edd4058a0c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "47571fbec3d032685733664725ba3926"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "48d90ccf7960e3e6644e971fde0c66fb"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e00b8c8c4b25ada8321baec650faee3e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7d779e5a4a330864fa37dc24a2bfd6a1"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "097859f2f89ef6d9c4f5cf76cb0e32da"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "7602fe281161327601b5a6745ec0595c"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "ab5fe0f63bac25b4593ce3d39cd0e72a"
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
