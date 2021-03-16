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
    "revision": "26ce09e83462ee7a029810afcc0a360c"
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
    "url": "assets/js/12.e3152b09.js",
    "revision": "d2431709bead1fab6b5c1fe6773bf137"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.324e7010.js",
    "revision": "6db45d7061816007ee993402f46e0f6d"
  },
  {
    "url": "assets/js/15.497e2dcc.js",
    "revision": "c82816918646cc076b58671e983c928e"
  },
  {
    "url": "assets/js/16.35b44e55.js",
    "revision": "cf7b9288e10bc6122e2c7861e04b8ff9"
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
    "url": "assets/js/19.09134cd9.js",
    "revision": "8903be5af0fb50fc096c57f7960d0175"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.ed066239.js",
    "revision": "103ec7f8c469cf3a016566d85d58c283"
  },
  {
    "url": "assets/js/21.c0b03832.js",
    "revision": "37921e3e05d4d2cc6c5ba508980ae0fc"
  },
  {
    "url": "assets/js/22.30c78224.js",
    "revision": "b90cf586a424545179d793805adceb5d"
  },
  {
    "url": "assets/js/23.48cab938.js",
    "revision": "ab51ff8f7792f213bf7deaef3a9e7fa7"
  },
  {
    "url": "assets/js/24.c6d204cb.js",
    "revision": "b39b26de0c130208448549882e060cd6"
  },
  {
    "url": "assets/js/25.b99e0850.js",
    "revision": "99f64baa7b5894764dd3f6d07ea2684e"
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
    "url": "assets/js/29.60957a3e.js",
    "revision": "852fc33320861507d04f088bb889bc14"
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
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.d2112ecf.js",
    "revision": "5bb30d9be85f093f6c2e515a54eab187"
  },
  {
    "url": "index.html",
    "revision": "d08dc65e5dcaafecbca68a5be0b0e067"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "e102fbab0adebf579324f58686ebcf43"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1eb8f4043564cd13b495ae46fb80b2d3"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "2e9681585cfe4be5026dcef28d493a2a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2f922fccc2cd7e257aa31a0d548248b8"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "84e7e872240934ed29f7eab7ed28f7e0"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "ddf732fbdb37b455816d6fa853892f02"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c4fedb4b54c16564c2481ce1545d15df"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "65b9b1483962a499b43886a95382e9bd"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "4c6fdf62c8429914314e9e37aaa97c48"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "caa3aeffe1e75306ea72e89e45fb5985"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "55e652f64c5b7fcc8887abbef780ffd9"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "632fe530fcb53fb658d064dae9c606f1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ca10c64a03ef1bb0fab0c32e9ae2d1b2"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c29e6e0684a4aded220bac05c1800008"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "811adfc878c61434fe4282427518fe57"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "df543b7646bd5eeef2df2b803ec80d74"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d1790915cd95c682a6a7d269fbb6e1e3"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "a6ec68ca563b3b357b38481baa4b8bd8"
  },
  {
    "url": "Node/basic.html",
    "revision": "feb537cbb6e49c7ecf9e557b92486903"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "8b44cb9994f7364f12ca3d18b1df41b7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "cc215bbc251ef3da0da06a2f439eb1d4"
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
