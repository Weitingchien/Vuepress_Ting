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
    "revision": "c9b4cecd39544edc14dd4bdcd339e72d"
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
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.ce1e88dd.js",
    "revision": "35c42d8c21d6d6ad4af1cd84d879a518"
  },
  {
    "url": "assets/js/13.f476e157.js",
    "revision": "940c641f89a94787971e9e4066e1d2c0"
  },
  {
    "url": "assets/js/14.da5606ab.js",
    "revision": "e498b959c81aa9653a94816aec188093"
  },
  {
    "url": "assets/js/15.7892036b.js",
    "revision": "7c8f5be54af72f0d2b6d23b48f1c6fb7"
  },
  {
    "url": "assets/js/16.4bcb45db.js",
    "revision": "695ab0833dcf5b1458a33be4ccb6ac92"
  },
  {
    "url": "assets/js/17.97b292f3.js",
    "revision": "a9cf6dc7e8cc6f695c0f86f97c8bcfac"
  },
  {
    "url": "assets/js/18.8fc5caa6.js",
    "revision": "0281ba4dc1643a07b9e3242e00e4bc86"
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
    "url": "assets/js/20.912b3433.js",
    "revision": "c4b1b240696620360c0fe33d537c5126"
  },
  {
    "url": "assets/js/21.c0b03832.js",
    "revision": "37921e3e05d4d2cc6c5ba508980ae0fc"
  },
  {
    "url": "assets/js/22.f092b542.js",
    "revision": "b59a5f071d4fbdf53332821d73457daa"
  },
  {
    "url": "assets/js/23.0802bd11.js",
    "revision": "24c60931fe14c72003dba3a10ed2a2ef"
  },
  {
    "url": "assets/js/24.f0615cc1.js",
    "revision": "393282dde2f2ac1e4f921e043d441d31"
  },
  {
    "url": "assets/js/25.708a88ba.js",
    "revision": "d28a888b7989178bd5e2a86899719443"
  },
  {
    "url": "assets/js/26.55c4afcc.js",
    "revision": "e127800b9b66be0cc339070be5b608e2"
  },
  {
    "url": "assets/js/27.8038922b.js",
    "revision": "2e4ee89019d38baf081bc04229628c12"
  },
  {
    "url": "assets/js/28.8baf0fe2.js",
    "revision": "b99febea8281338c3bcf330822042ee3"
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
    "url": "assets/js/31.601d05a4.js",
    "revision": "0f5dc15a8c3b38c55efba09a18baaafe"
  },
  {
    "url": "assets/js/32.b398e1a7.js",
    "revision": "25271ce9c9194fdc04ab0cfd92f97299"
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
    "url": "assets/js/app.18cc7adb.js",
    "revision": "4424a67c565ddf8d71bfbcd5f7794c87"
  },
  {
    "url": "index.html",
    "revision": "728cdf9e54f33096895c7f6e0a96d592"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d2c8d4cfe5e402db7e93a66c3d8be1be"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "93190454a4aee776cc196a93317e4efd"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "388d093f9b90e0dcfd708d2bc5b9e977"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e520b77ef26ed760f07744b8ef9afcbb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b424924a41d2cd51e833ea4d8a779ad9"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "498933fe932dff0a92df83ace2843061"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "341714f972518bb29cd79c50902a5f15"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f29e6efa582a2b2709f1a218118ae828"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "4bf2d09d8e1486bdaa47a8ebe33c9ebc"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a845aeaa6a48d2ccb1ad8470a64e2a06"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "5e99e3763d7bc9dcec06d2ce8eb9b74f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0ff89124bdc686638e3ceb253a817b99"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "78e3f0b66e91ea1142d66f42d3779bb0"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "9113cb94732cc813eaaef0d3c45619f3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "44720acf0a9f4ef0655d3ceefdd70214"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6c04231c2360c3fc444f69a3725710ad"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "696bd14035cd236b6417655a3cd1ad34"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7db649396775a7ce98dc2758f900d491"
  },
  {
    "url": "Node/basic.html",
    "revision": "ddaa4db12a65c7a219f4a276f763fd18"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "98a47315b017d9875fe9c692f62bc5dc"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "42996f2e508ab7030bb3a95e0f5665f1"
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
