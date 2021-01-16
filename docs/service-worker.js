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
    "revision": "ee06ee8f5365b3b419ae4bb87edab101"
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
    "url": "assets/js/11.cd4ecdec.js",
    "revision": "25fd6f2600ee1a48a07ff739c5bfafdf"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.b13687e9.js",
    "revision": "0d4fb54da0de9eb07e557146a5b0dcf8"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.c32fd334.js",
    "revision": "bc8fdea1f9a4d543393031dddc328068"
  },
  {
    "url": "assets/js/17.14042ac5.js",
    "revision": "b16c55908aeb0901944ca48315629242"
  },
  {
    "url": "assets/js/18.4fd5f62a.js",
    "revision": "bd6e3ed1b89d9efc68db630f2ca1fcb7"
  },
  {
    "url": "assets/js/19.802299b5.js",
    "revision": "8c0c112b5409f5e478a98c075ec554af"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.0ab955fd.js",
    "revision": "cd60062f05af422f14b02a180b070925"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
  },
  {
    "url": "assets/js/22.6e8492a6.js",
    "revision": "2a50aa80783a8ea616776604122a8260"
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
    "url": "assets/js/25.5dd3e63a.js",
    "revision": "c511bb52c6dee177c1e5bb790d5ef82d"
  },
  {
    "url": "assets/js/26.780152f1.js",
    "revision": "468364e89ee200815c51f6232588b701"
  },
  {
    "url": "assets/js/27.232e1570.js",
    "revision": "af26fc05088d8d7d53a4a0e846e6caf8"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.d226f03d.js",
    "revision": "5d0fb9b487bd8c67704aa38ffc0551f6"
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
    "url": "assets/js/app.8e524159.js",
    "revision": "ef5d1490f5ac36a50b38c2d4f6c4e0f5"
  },
  {
    "url": "index.html",
    "revision": "0aebdeca0c63aa69857b13d7b1db0bfa"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4abf7b1b84ed91c3bb3e79c6d87d40f2"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "5b53040c48705aa652b0556afbd653bd"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "a5f7f20520ce54b201040924a829c9e8"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7bf4fdf0c9d81b7a6c2ef086644f8a42"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "1163a401b35a08241ae2cea00e1fe2e0"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7026425b0be8bbadf0514cd46a80dd06"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "538389d9fa69a7516028476045e6c7ab"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0a0cc54f311a834ffaa56d3371acd52f"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "fed69549230f27a5ab4259cfac91d725"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "1b5bc7a5c646bb6beaace25673b11302"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c11a2aa16098073d5752b061a4964164"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "e1609ffe325428069ef645d1c0290568"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "03f0d4fca3ec8cd50da3d4efb6b635e0"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "05264afe656c2207e0a3b3e625261989"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "8a4bde617c2d7fab70685ab2ce4615ca"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "85eaa129a08fe55e2880176f2e705174"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "18ba35781653c17225909d573cacb2cc"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b51c8be9323adaea09f6f57274aad55c"
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
