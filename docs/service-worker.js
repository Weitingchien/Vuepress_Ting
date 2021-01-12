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
    "revision": "f0a002a8c8fac44c64feaf8ba07ffe96"
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
    "url": "assets/js/12.6dec696e.js",
    "revision": "e27180958ea0f79b791dd490a3cfc568"
  },
  {
    "url": "assets/js/13.acff9fcf.js",
    "revision": "7826b431fd2de581111f7fea8eab5722"
  },
  {
    "url": "assets/js/14.ac649243.js",
    "revision": "6e972fd2d08fba9016225c7e8f9ff6da"
  },
  {
    "url": "assets/js/15.b251fb70.js",
    "revision": "5779fc52bb2466056ef565212ade9195"
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
    "url": "assets/js/20.5b316d6d.js",
    "revision": "cd677c4e37e8af4619ccfa2ae993bd98"
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
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.5dd3e63a.js",
    "revision": "c511bb52c6dee177c1e5bb790d5ef82d"
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
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
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
    "url": "assets/js/app.823480e6.js",
    "revision": "73bfa09b5e3fc21bf32dbe2912098b50"
  },
  {
    "url": "index.html",
    "revision": "a3a39db8324a31b217fb2b2cfd56fdd4"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "ab1f4cbe29ba7aea38f1dad7912a55fa"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8c6988e3bec85c4fbea33069b9f8234a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "f93f1be474850479e2b51a965a6d9d6a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "4b78f407946d4587c671dc1d108ef5fb"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "88f116b52cdf90ded9eaf88ae61c8b1d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "2207994b12da297156f00d64e21c2b4e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "eaadaa6d54480860a3e20ba915221919"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "111002267f38b2393fa328ecd4d7b769"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "747b803645e2b60b0425d9eb9e1021ea"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c570a6f5fae83f1643e273c5b79b5bc6"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "e6b82d3dc71141f5df5057511fa35a81"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1c7bd01e94f9f1d7527aaecc1f03bdc8"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c8f51adefa1812081083b9c94563261b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6c381ee3faf7c75a25dc3c11634fb100"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b0e839965b8f57667ba9219e7be90ac7"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ae83313c391a3548d17fae66fbf92934"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "55bb48b79963b95cd6625661b0063ec3"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b0962ca2cc5c434e0f382adf315ac65c"
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
