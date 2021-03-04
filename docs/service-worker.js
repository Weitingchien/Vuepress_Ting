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
    "revision": "bd905beea3ad085819123b17db99d19d"
  },
  {
    "url": "assets/css/0.styles.fe09863e.css",
    "revision": "9beaba5fdfc27687c6d1eb33385245dc"
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
    "url": "assets/js/11.8c5f3f64.js",
    "revision": "8f6c5c4c2298ea2a30c3422e97cffce2"
  },
  {
    "url": "assets/js/12.4c6423be.js",
    "revision": "3a6a9de3b1447a9751365dee44233396"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.ab3c15ef.js",
    "revision": "cef70a24f56712a6a5f78390eec39436"
  },
  {
    "url": "assets/js/15.55ec40f1.js",
    "revision": "334fee4192647c829544734e391ecab9"
  },
  {
    "url": "assets/js/16.b90ed5f3.js",
    "revision": "956d8e74fdb79c9ccd7e24262beb75d5"
  },
  {
    "url": "assets/js/17.dd91d216.js",
    "revision": "53ab27761c82fe0af70ecacaede09887"
  },
  {
    "url": "assets/js/18.98ff6b90.js",
    "revision": "efb1b8678e684b447778f7492e0a4002"
  },
  {
    "url": "assets/js/19.e27c7a61.js",
    "revision": "a99039041ac2deb8c0a4f06c3bf7c262"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.4ff191b8.js",
    "revision": "1dc8530ba443d35edb1f16f011c6d83a"
  },
  {
    "url": "assets/js/21.c450ccab.js",
    "revision": "1a93a9b6eb81ab579509dbe9251622e9"
  },
  {
    "url": "assets/js/22.f092b542.js",
    "revision": "b59a5f071d4fbdf53332821d73457daa"
  },
  {
    "url": "assets/js/23.351dd5cc.js",
    "revision": "8d879c55a07cf90ca5c9e6e8020ee433"
  },
  {
    "url": "assets/js/24.f959c9fc.js",
    "revision": "7ba16ff168e147a1e3d0040d4ac781c6"
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
    "url": "assets/js/27.4363302b.js",
    "revision": "8e614fc186b15fa171fa18ef857b8e9a"
  },
  {
    "url": "assets/js/28.75b2c5d7.js",
    "revision": "a221897f9ab8fff313bb86981dba2bee"
  },
  {
    "url": "assets/js/29.d3f952f1.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.4f5bd044.js",
    "revision": "3314ae146e27c2efb3ac9a279341ee36"
  },
  {
    "url": "assets/js/31.df517384.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.4e65a18b.js",
    "revision": "2abf23abe3278a0caccddd83d8ddf0c4"
  },
  {
    "url": "assets/js/33.c9fe14ee.js",
    "revision": "fd009716aa0d246dee37c8580f618981"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
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
    "url": "assets/js/8.2c965816.js",
    "revision": "46674ea7110a42652abc9e34596e8166"
  },
  {
    "url": "assets/js/9.77781582.js",
    "revision": "97afbffb7749f203fd1d9e5ae6c9db68"
  },
  {
    "url": "assets/js/app.7df8c36f.js",
    "revision": "e340125246e4c2a5376eaa943296810a"
  },
  {
    "url": "index.html",
    "revision": "aa636fe8f16cbd88cbba58afab06a2f2"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d586500848f76c571e56a1d84d0fa882"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1dd8106d4ae7092e61e67083fcfa75c6"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e98f41e0c771a83a66b5f09fd459f17a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "9e7ebed9916c7aed12450f33bc711f59"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "12518481d78e03e58b1d1903220f78e1"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "74e61c76fbca2d599ccaf214fb1ba074"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e539b4e6c2595f97104ae5268cae5f34"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a1b2564caf605898fef7baa8c731ab28"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "6f32394083a62bca95cfafb4f079e6a8"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "95bb676ed58b663b21c982b7db686715"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b1847a75a8458daa7906bd7b49e5e750"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "401dcd6adece73c0f988f6fa157dd1b3"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "e9fdabaaff0c6111b9cf3b8ade10ae09"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "42116d1b27f5f14fca993e82f8250593"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a57774dada0d904ddcd6047c67cf06d8"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "fbe383fad50d4d8137b4aba03ff77475"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "6fade57287c410c0f3919c4e40d5bd1a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ad43b2350136f6bc17ec86b0522156b6"
  },
  {
    "url": "Node/basic.html",
    "revision": "67a58a4278e09c789b34fa9cc4c60083"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "c73f3977c238d8e464f083783eebf9f1"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "a9863c07fd8da3dd871a16fb1ee1da58"
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
