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
    "revision": "c8869df452bfece95c4fdad1862d13ea"
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
    "url": "assets/js/11.d61bd4d3.js",
    "revision": "97935ab868c6c555a74144c3f9febbed"
  },
  {
    "url": "assets/js/12.3326564c.js",
    "revision": "178ffdf4430c5d95405cd430c02ab931"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.b2ce47a3.js",
    "revision": "cb40afc5ec7e76e47b36f3c071c94a9b"
  },
  {
    "url": "assets/js/16.1dbc3f0a.js",
    "revision": "2427ea0d0da1d6e5035939c9c37d8793"
  },
  {
    "url": "assets/js/17.dd91d216.js",
    "revision": "53ab27761c82fe0af70ecacaede09887"
  },
  {
    "url": "assets/js/18.79f9d0ec.js",
    "revision": "3dbbfde98b0b9518491a60adcb5ca38f"
  },
  {
    "url": "assets/js/19.84555c15.js",
    "revision": "fbc8159361d5ad1f7921e136f7788ee2"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.e78f3a91.js",
    "revision": "53fdd74e50520e4be6ba097ccf0a2595"
  },
  {
    "url": "assets/js/21.009e4c1b.js",
    "revision": "66cf884a2dc9a3449440747a307759b6"
  },
  {
    "url": "assets/js/22.e1cae2f1.js",
    "revision": "55e9ae0390695554b9fdc255912d23a8"
  },
  {
    "url": "assets/js/23.e8a75fce.js",
    "revision": "13386efce4392b7f78c501820bac041b"
  },
  {
    "url": "assets/js/24.b7070ed5.js",
    "revision": "4bdfc83ab760396fc0c1323928085fdd"
  },
  {
    "url": "assets/js/25.c6d54d51.js",
    "revision": "56b99c106ea09a78ed5828694dabec3e"
  },
  {
    "url": "assets/js/26.7593d961.js",
    "revision": "9a68a34ff20f4b6bbdef623c08ba7eb1"
  },
  {
    "url": "assets/js/27.4845d7a3.js",
    "revision": "04efe9737820a857aa20d3b4f8fb1c2a"
  },
  {
    "url": "assets/js/28.69bc5c87.js",
    "revision": "75fd3d7273f24eb0e50d65bd7909bded"
  },
  {
    "url": "assets/js/29.c749ac96.js",
    "revision": "6bb2431601d068484494d89041e2706f"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.19738d23.js",
    "revision": "0572a658b75fea229bc5d62d115de2b2"
  },
  {
    "url": "assets/js/31.601d05a4.js",
    "revision": "0f5dc15a8c3b38c55efba09a18baaafe"
  },
  {
    "url": "assets/js/32.4e1fce81.js",
    "revision": "b4e43d60a5d442b9c9e24120a0212bd5"
  },
  {
    "url": "assets/js/33.c9fe14ee.js",
    "revision": "fd009716aa0d246dee37c8580f618981"
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
    "url": "assets/js/7.e7836e11.js",
    "revision": "3897517ac22cf841cac5d6332859bc67"
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
    "url": "assets/js/app.e94e37b9.js",
    "revision": "afcd1f9e0caac1e3da1287ee5640dfdb"
  },
  {
    "url": "index.html",
    "revision": "4b03014855721b0a160a6bd6ab0acea5"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "26a96d99b00eefccee0618ce802a9913"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "f1c080bd10f297f0f1843af6ea7faaae"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "56f045a9491cb308194e66767b71b79f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "ea8e7b1dc8d432324bfc51e6ef028588"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "cd0f4c4fd67d9088590d95481feeb40b"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "3b1c18343997b8d46d57ffea3443a177"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "fba0e47698c794019513238a395e31a1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "3c3f84baffa8d00030c1775ef073b16a"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "6fd6052462a0235955abd61c6b73141a"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "91c636347a9e0f814464ffa83416cfd4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "a035982ffd33743965a1465c46028827"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9ac7b1b665d7d0825686e9c66d7bc318"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "a2e77013d8c255c25231a5fd49112526"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ea55a005d4b3205ac20e355ddbc5d5f7"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "35fe34a3dcc8926b96e7f468912bf45a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ea6282c6caaacd0197607861d1eb2dff"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9d935e6608de2c638bd9d6ceb5155a83"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "cd96637df9f9b824b2444c2f69d169df"
  },
  {
    "url": "Node/basic.html",
    "revision": "539176a05d219efc7f3b9b8e8be18ac6"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "1c604bf79f8fe4ef17d81a57b74c43a8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "106e79d8183adbb65d52cde598533fad"
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
