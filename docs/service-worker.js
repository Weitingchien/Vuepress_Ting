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
    "revision": "d52c8fe2e53e5dfbc1af7565efd86bc1"
  },
  {
    "url": "assets/css/0.styles.f0ccb3a9.css",
    "revision": "95a43d4271036df336c28cb4dcd69eef"
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
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.8b0ba9f4.js",
    "revision": "7c0a5c254f652d21a887878a510be943"
  },
  {
    "url": "assets/js/17.afa80799.js",
    "revision": "9fa4a6fca196407624d17b75ede4a3cc"
  },
  {
    "url": "assets/js/18.4a3450ee.js",
    "revision": "41ab455ff428583955b7af5be9e0510a"
  },
  {
    "url": "assets/js/19.9f982ce1.js",
    "revision": "58689c693026f4ee4880bf93d65eb195"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.6f0a9733.js",
    "revision": "4f0f95219b3355789686c67bd71732c2"
  },
  {
    "url": "assets/js/21.d3e8b49b.js",
    "revision": "8bf92571a83607fc9b7481e6e7aa7fa2"
  },
  {
    "url": "assets/js/22.e76e13ff.js",
    "revision": "bd9975880f1dcf83712ef97d1b33a5f7"
  },
  {
    "url": "assets/js/23.5af4f184.js",
    "revision": "e29c0b402283d7f406bffe717f7d3e87"
  },
  {
    "url": "assets/js/24.ae9911e1.js",
    "revision": "6b68638a64cd8e310a1fe4b00bbb909a"
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
    "url": "assets/js/27.fc1c43af.js",
    "revision": "72d83ff42ce23e2293a360c0fbf6bd6c"
  },
  {
    "url": "assets/js/28.b1c7ba9d.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.30523d37.js",
    "revision": "a7ad3ce4a4dc624912fd37a081e75867"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.59eae8c4.js",
    "revision": "f11e02265625ae1b867b1021af72e6e5"
  },
  {
    "url": "assets/js/31.de6d88ab.js",
    "revision": "a46fba9bcd483e2a61500446f7b3bad2"
  },
  {
    "url": "assets/js/32.a4d236f6.js",
    "revision": "4687bb5e5eba680d997e4fded03ee439"
  },
  {
    "url": "assets/js/4.4b0aea17.js",
    "revision": "cb8e1526f8fac3a8214b1d6a7a9cd836"
  },
  {
    "url": "assets/js/5.10eb9c00.js",
    "revision": "efa2aa35d05a30bb2ebf896eecbbe99c"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.67ce5218.js",
    "revision": "10538b3425d3e28fd2ea61c4c274cf5f"
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
    "url": "assets/js/app.b85d351c.js",
    "revision": "87aa02b833c6f2eabe5d994aff6cad61"
  },
  {
    "url": "index.html",
    "revision": "447aac26a65a70ddbbebaf0641e60abd"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d4cf45c5e5e7dd0cc96908b78a61cdd7"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d78a7f7e5c81a528dca5d239b9c446c6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8e385b5c08f684c1f8de229cb63d8449"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "50fe4ad88bcd4fc7bbdd4cd643f070c7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "ecade6984ebabacd754754fd230f2168"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7817e8ca2021731949577c7223374021"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "3dc93c65f5430067acda57aa92a513dc"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "33463b4b4940fd25f8ab476bf548dd42"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "03e5a5150ec265fe582da3bad59cc09b"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bb19b85bb64bbb8496f639937802755f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "4ae0113730724ac35edf8e1caa720f6b"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "261e10c1ebaccce327f9b7499788c703"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1bb51242be4b8d4cec37ab4f80933eeb"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "39197f97260e62a650c880c4f47259ba"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "7e4479ae2d5ba0191fb784820bf784dd"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5535764f7dbc5d6af653b9656c9a7ba1"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "99d7ad4ea1c4f7237f6d0f3f19ebaf52"
  },
  {
    "url": "Node/basic.html",
    "revision": "0789bc726d30a657479d09ced883a9be"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "af19f3088cbbf5140a1811b130799c47"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e12e3282a62e2cbb9be29df242eb55a2"
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
