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
    "revision": "9f138263850c0d4d4a344d19f6d9392c"
  },
  {
    "url": "assets/css/0.styles.7f133768.css",
    "revision": "8c09f52944c2031184dc7a72b4af1245"
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
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.b32ca792.js",
    "revision": "5fc79c89b53b776d52d0386653949f74"
  },
  {
    "url": "assets/js/16.308209d5.js",
    "revision": "1cd5ebc99f853d323d9eab3e2bc18ca3"
  },
  {
    "url": "assets/js/17.038528c8.js",
    "revision": "4c9bad74a3c017a0de34a383db67af37"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.b3b22f15.js",
    "revision": "689745007366f28a2070e823b49c2f8c"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.00b32853.js",
    "revision": "cd2ff549c41e2c665ff073d1bda29444"
  },
  {
    "url": "assets/js/21.38e9d6e3.js",
    "revision": "a5cfa5a620de3189a594887fdc9f5e4d"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.2fbb3c67.js",
    "revision": "4e788262829d9c7026fa3f0e5ddb4832"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.9fe39335.js",
    "revision": "28a7387e19c029eb23bf917c8ab3981f"
  },
  {
    "url": "assets/js/26.ae28bd6a.js",
    "revision": "294e9b7ae05304c8a6b5dbcdf93a5b39"
  },
  {
    "url": "assets/js/27.c0eb8084.js",
    "revision": "98f73e3735b4070a879c409b942517b9"
  },
  {
    "url": "assets/js/28.a254c5c2.js",
    "revision": "215dd99735029c51e7e12d5643588b44"
  },
  {
    "url": "assets/js/29.c99606f7.js",
    "revision": "6bb2431601d068484494d89041e2706f"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.949071bd.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
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
    "url": "assets/js/7.a3ad9c33.js",
    "revision": "fbc890034f685aa8b0ea65b808878137"
  },
  {
    "url": "assets/js/8.8d2fb1c1.js",
    "revision": "548d521502a8eb6c184d9a11599b4e8f"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.e6cf1aea.js",
    "revision": "5389f77c5e1bc0209eeede3a32f52350"
  },
  {
    "url": "index.html",
    "revision": "f218e25a50de8521db0cc7b311c7b6ee"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "327432fe34be04677e7010f4206505b6"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "722c00f9b58f1e0591772128fd1408e8"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "a3dcab19a10bd6cf85d96541d4e3c30d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "514699f230f9039d50152f73fbb2ac71"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8010500a8ac525626409d61bb32eec81"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "77ce130abdb7779f10b5e73101782918"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "16cd521ac55c0880f11cb78e1a43d5de"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "ba7b2369d373a343785c4f3cc4b0bdc0"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a379f738f07b147f7e694afbfeff3e89"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "48e1cd1d157a4878840b16aec93903ad"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ce7beec575f581263c1e32eee5e0c47f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f352dd75efd79da7c7d2c75c80caa705"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "01cf28de1c30f93a146a1da0d932a100"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6525b4e80b6f7d1081c4eb5366051dfa"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "d1fbe9413341a3f0f5fb973899224c05"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "8972dc3c1ef61b43df84c94df1085070"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "cde4de064c6be581468440fef1f007c4"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "59574593c45fe9bf5e9b37e68be52b0c"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b89ca0528a0363610775565176b01a33"
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
