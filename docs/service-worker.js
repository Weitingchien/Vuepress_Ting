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
    "revision": "bc709cef78428a949472dde59989aec8"
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
    "url": "assets/js/12.2df5fd80.js",
    "revision": "74e5ea9bdb5c2c7d841b4c37474aef71"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.b32ca792.js",
    "revision": "5fc79c89b53b776d52d0386653949f74"
  },
  {
    "url": "assets/js/16.a6dd5f0f.js",
    "revision": "0791e6db7683b1ecb4cdc17a1d028537"
  },
  {
    "url": "assets/js/17.3a48664e.js",
    "revision": "e3e1d64887722feb73df72ec2430e896"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
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
    "url": "assets/js/20.a206ad65.js",
    "revision": "6735932163a8687e6fd5639fa233ae45"
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
    "url": "assets/js/24.313f4b79.js",
    "revision": "20b10722175bfb9d45189042ecac94ee"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
  },
  {
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
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
    "url": "assets/js/app.9bb94fb8.js",
    "revision": "f34efa0697744bd809660ccf208ad4b0"
  },
  {
    "url": "index.html",
    "revision": "2cdbe023ea7b7eaeb4e31f36eb59237f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "860b74b2d16fb007e4a18456c009dbe5"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c822989058116b859e8a1fdaadf26789"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "0de8783697bc014da6689d86e32a02a6"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "a4c0fbdddceac0d1c1a35b982d5b38d3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f2a486d850d86ff2a3a7e2fc9d18bd5a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "eb4ef512e46fa1a4d8417914d26d38dd"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "623eb98233a9f944cd5369193472d55c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "fa0c9f9c97b2565189addd016eee1b79"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d470b9c9429db652d356cbcb446aff7e"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "28975c1063acfba374926e2bc45c0f27"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ae40667b7c94c9eb0a595d3a4d273f0a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b5e059eb39492be067c96f621866bf4c"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e514b3288b819f072f62ee5aecaa5407"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "461e7e4af3487ce616211d7929eb3580"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7f952083958cb728822b04ca459a652b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "6d3be6f57d59802a7e8cc3fff327f997"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "1aa64bd7368d5034cf5ad5f0ee7d7734"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "2047061e8306755140bcd5cd431b2ae6"
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
