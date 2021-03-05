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
    "revision": "3f0247315b8a5986b931f88a40c88e5f"
  },
  {
    "url": "assets/css/0.styles.e5f03543.css",
    "revision": "cd72f3f0afe035a540306990503a1e5f"
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
    "url": "assets/js/12.0a705c94.js",
    "revision": "03809986cf5f50496cadd24de0d42613"
  },
  {
    "url": "assets/js/13.8b2356f5.js",
    "revision": "27211714fac266a61befe0cc7a800b7a"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.497e2dcc.js",
    "revision": "c82816918646cc076b58671e983c928e"
  },
  {
    "url": "assets/js/16.0541879d.js",
    "revision": "2c1148e734aad5704c9e720468054fb6"
  },
  {
    "url": "assets/js/17.134a1f04.js",
    "revision": "469a38cbf070dd0f7af61ae268430d96"
  },
  {
    "url": "assets/js/18.95a999ce.js",
    "revision": "ff75d86e113f8323661d94e78d93fffa"
  },
  {
    "url": "assets/js/19.5eccabdf.js",
    "revision": "feab260163f194426b8eb0e50349546f"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.55e65f9b.js",
    "revision": "2cbed7faf8f3b00cf914e21f4ad10655"
  },
  {
    "url": "assets/js/21.5c747c51.js",
    "revision": "acb394f1602a8a41da3bc287e0256149"
  },
  {
    "url": "assets/js/22.4bf90203.js",
    "revision": "28b2e3303ed77c86f9adfac46fcf1953"
  },
  {
    "url": "assets/js/23.0802bd11.js",
    "revision": "24c60931fe14c72003dba3a10ed2a2ef"
  },
  {
    "url": "assets/js/24.b3e767ef.js",
    "revision": "f3fad38f0757499a6518c490a516e5ef"
  },
  {
    "url": "assets/js/25.b99e0850.js",
    "revision": "99f64baa7b5894764dd3f6d07ea2684e"
  },
  {
    "url": "assets/js/26.153ae1b4.js",
    "revision": "d571d1fc7a600ca349a5d2e23497b1b3"
  },
  {
    "url": "assets/js/27.80cfebef.js",
    "revision": "a15ac756f512112302486f4ff2c6ce81"
  },
  {
    "url": "assets/js/28.a806015b.js",
    "revision": "3c7951d69edaf660395f8b7b56a878db"
  },
  {
    "url": "assets/js/29.ca4d805f.js",
    "revision": "0085b934ce03fe1ad3658a2bd278950d"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.bb6c011b.js",
    "revision": "064a9455db4e2e898266c1b2f51f1ec5"
  },
  {
    "url": "assets/js/31.df517384.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.90c98143.js",
    "revision": "84c02d9714c7fc90ff4c848214b00bd1"
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
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.f7f630de.js",
    "revision": "24206400b620439a90929b052451451a"
  },
  {
    "url": "index.html",
    "revision": "b38ef96eb6919275fc46c423472956b4"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d32f936fddf151703e432b63ca44eef0"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "eba0049a64396307de457aa624d7f954"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d3033426e8a781114e318af755cbb472"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "94f12d7a85dbcb25448fe564867312fb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "32235eeb844402bb7898f4817b205c4d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2008f6da4647194e09c79f48004b51f3"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ce926e354f7343619ca9354f43455fb0"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1c272246ea238c25a9c9f498d82a7728"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "4b30638da3772d4084b9ff894c330d72"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ab498e8a47759c6f83725ae6b6d6567c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b248e503607ba920110903f7b5ed7f5e"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "55ad7a8262866f81036fa25806dee31c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "69443f98f98cedb5f345a9cc1c850c8b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "807b78b0779ba53809fa454a3adbd6f8"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b160a8afe1ac26326416ff106889b51b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "f75ca7aad770dea17c0a2a7ee81e61d1"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "a083fc9ac44a4df57bcca2df7ee51aea"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "efb5acdd84921b2a345d64a80077cdd4"
  },
  {
    "url": "Node/basic.html",
    "revision": "af98e9168578fbb2086814b5d8f2766d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "df62f40ceb70123354e1d439eb4a6ed3"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "3b1f6573049061288ac9854d1c21f41b"
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
