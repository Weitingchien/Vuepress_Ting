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
    "revision": "057c98f69011dd72634a7a7a353a0cd3"
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
    "url": "assets/js/11.17514c33.js",
    "revision": "e638f4e99f7ea96968bcdf443bde6aa2"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.9eb4f552.js",
    "revision": "6416e038941e122255d2723637022e9c"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
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
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.0dffe415.js",
    "revision": "ac3591b443a7a5db579f8e71711bbd79"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
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
    "url": "assets/js/app.4f375a34.js",
    "revision": "64f39c6efbc38aec232ae6368e3b3d3c"
  },
  {
    "url": "index.html",
    "revision": "acf5d28278a28af55c66142e48629b9e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "947d8fcc4c7f35a746cfd63c7af46174"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "58b7638d1015a13fc602002dad288d5f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "7e65a5e147c0cca795a6aefe783d8ab5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "841b812bc4a8fef2a749d1d7fb0e7218"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "22e6060c37d7edee00a19bc1c2fd695a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8ac5beee01b35c934a69181d25e05b83"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "3cc6f432443d39197a585fa8fa225970"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "d941a35b4121ce63b67d6276efdaa33c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a8351eeebe223c52e2d8ea4b2ebdc8af"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "39785354cf4f13646b7489b9f3159bfb"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "fadc5d75cfbca4a72769bf0361939f1a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ecc36b404da61df509c1a41bf145dfd9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5dd290428dbbd616e8d986d3f3334033"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "36158f5a896e1af19d98020ebe4413be"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "979502ea91892258d543d2f22ff2e452"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "02040520652e8b3bd11bd2e262a8b2cf"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "63c63a843f8a8c52795aea8455400f2d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "bfd52d056edcce318e23c4bcbc7aacdf"
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
