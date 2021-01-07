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
    "revision": "6b81741d0a7e4eb331dcac1bd2d94e99"
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
    "url": "assets/js/13.acff9fcf.js",
    "revision": "7826b431fd2de581111f7fea8eab5722"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.0bef3f13.js",
    "revision": "991abc627b0a17834b009d234fd9efdd"
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
    "url": "assets/js/19.ab85ca15.js",
    "revision": "43937b9b776118d1ad64c37f5d14fd01"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.c7076490.js",
    "revision": "e53cf1238811fe871c68d892297333ce"
  },
  {
    "url": "assets/js/21.57b7a7b5.js",
    "revision": "59565d8c63216ee8ded39d8e4195976c"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
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
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
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
    "url": "assets/js/app.a79c7e74.js",
    "revision": "d9500633cc4254c6c385c485270ad8a3"
  },
  {
    "url": "index.html",
    "revision": "8dda0c2a177e2a3f0e5918fee7c3162e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "8c392b5f6b2e63b130c7cf373c565956"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "91d05874a59d41fca3d4ee892e4e5e1d"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bdbc16ffad266e7224f40b94f98262bc"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "dcbace0446d53fcabda65045a58020ff"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "43b5eef4409691f19144522bbbb138c1"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "2e60df83ba7777caf21a213ac67d7256"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "99c75e9f00c1b6823ddb77b97d568147"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "442e28655cbeb54d211e407a3e188ce6"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "315d112b5ceb9c22862ca0013d6b5800"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "b04aa1b20046a4518293103324aa8b3d"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "6a3cdd7b12c2f8a456683679ed8d9f74"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "a28b3a6221925026b975fe03133bf6ff"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "72c1da888d53794ce80e07ad7b371c14"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6f783335402479bce9379109bcf129e3"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d144ef899567d68b1573d955606eddef"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "be4123c30fcb1b5f15a200c9e797125a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "42d2d07e02b16195241fb39700a3a98b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "0cc514d6002b0c116eb6b158e30e9514"
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
