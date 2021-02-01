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
    "revision": "63a0df9cca1797309a466bff0dc56e5a"
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
    "url": "assets/js/11.ea0c319f.js",
    "revision": "24b0474c768a8e379482d91a12901a79"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
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
    "url": "assets/js/17.8244f9a1.js",
    "revision": "63715881a12122254078af04ea7fe7b0"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
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
    "url": "assets/js/20.d97ae110.js",
    "revision": "91e3d60c1ea4a516506a864bb29ce7f1"
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
    "url": "assets/js/24.63c6bce0.js",
    "revision": "0859ed45fea25c578744c6bd38eb602e"
  },
  {
    "url": "assets/js/25.cca6c446.js",
    "revision": "3124241bb9ac6ecbefed8ca421a32358"
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
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
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
    "url": "assets/js/app.c212c00b.js",
    "revision": "a3fc42bbcf73c6a34c456aada355259a"
  },
  {
    "url": "index.html",
    "revision": "575a6d36f3ee8914a89e22d40cffb2aa"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "39a13bca9484da51b08ee3257861b355"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6ceeef6f93e27466c54f676dd5647efa"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "dca0cc971175667f43c1b133b3402bdf"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3c9f350e8556a7d872585b2e36f09904"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d1da5846b2748044c3a84303d3676abf"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c5092cd5b7fd895272bdf79964783af6"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1bc36aa2462cbc4933bbd1bf21b5f94b"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "675e6a4db8d4cb98e879c49f13ce7ad0"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "226fbe8ca14fcf7f1a733d0f423e9f65"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "67aafe6d716f8333d5a3b75f1eae976e"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b411f575d2a64f84e4968f9009e3adf6"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "f2219998e027fca2e04a6d53a4938680"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "52b4b4c58233ff4a2c4be379acc459df"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "489938d39f0977ca90ee818b1e4e9351"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "203bf98481543943c81e411cbc868aab"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9dae0dcbce1fc6fee882a3ec71c6be1e"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "6ee974571584371420c3f2d53506ab47"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "037d1a1368ab56ca92bbf4139fad5d2c"
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
