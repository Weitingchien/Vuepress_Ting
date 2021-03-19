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
    "revision": "773247d729e5dd96f6feace4a0f8dc6f"
  },
  {
    "url": "assets/css/0.styles.9eaa8a4d.css",
    "revision": "57cc11acaa916dd7ba29d801b3538e72"
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
    "url": "assets/js/12.2080c2d6.js",
    "revision": "2b9cad76dfac4797eb76d4c03e2e85d4"
  },
  {
    "url": "assets/js/13.f476e157.js",
    "revision": "940c641f89a94787971e9e4066e1d2c0"
  },
  {
    "url": "assets/js/14.03cf80bc.js",
    "revision": "320af5ab805ad4f9056f153a52b609b3"
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
    "url": "assets/js/17.fa2fe178.js",
    "revision": "c449eaab4016b7336230885e3750c9ed"
  },
  {
    "url": "assets/js/18.8fc5caa6.js",
    "revision": "0281ba4dc1643a07b9e3242e00e4bc86"
  },
  {
    "url": "assets/js/19.a43bad3e.js",
    "revision": "b174f6334f8107824daf3f0b4c2cd412"
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
    "url": "assets/js/21.618c4235.js",
    "revision": "6a9d2b14d731bbc770decc3317b8b42b"
  },
  {
    "url": "assets/js/22.d4fb920b.js",
    "revision": "2d910da659b95b6d121b49712de60e18"
  },
  {
    "url": "assets/js/23.351dd5cc.js",
    "revision": "8d879c55a07cf90ca5c9e6e8020ee433"
  },
  {
    "url": "assets/js/24.c6d204cb.js",
    "revision": "b39b26de0c130208448549882e060cd6"
  },
  {
    "url": "assets/js/25.7f045a70.js",
    "revision": "2856de723b541113e8295f2972b38309"
  },
  {
    "url": "assets/js/26.6915f50e.js",
    "revision": "7d175ef218768f85dbe57a3f78fb7c24"
  },
  {
    "url": "assets/js/27.70795c9e.js",
    "revision": "6b492a9ad554c30ff67a1fee3ddc34b5"
  },
  {
    "url": "assets/js/28.18d3fe39.js",
    "revision": "fdda2bb43fe4a0edaa2e740176746fc5"
  },
  {
    "url": "assets/js/29.c16d6396.js",
    "revision": "ae896e44e54712e09054d827b7b47b5a"
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
    "url": "assets/js/31.3acf76ba.js",
    "revision": "0f8241008c43dddf8c99897656cf00bf"
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
    "url": "assets/js/8.2c965816.js",
    "revision": "46674ea7110a42652abc9e34596e8166"
  },
  {
    "url": "assets/js/9.77781582.js",
    "revision": "97afbffb7749f203fd1d9e5ae6c9db68"
  },
  {
    "url": "assets/js/app.f9c4bd10.js",
    "revision": "a3f094716000a45cee564b4b818a3f94"
  },
  {
    "url": "index.html",
    "revision": "095c3cb82958ca348dc98b529ec6c84a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "2f1988498b0d6d70a911a52b1a0c8693"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "20e3c9bf6bc016b31ec9c2201be70462"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "617ffe42879fe4ea5f5215dfac575adb"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d21dc64883c83842d4022c26628b2835"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c23a5d6a19f2256b4704992dc6b4a412"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "549ec65b6d80ce8a210e304f3ecefcea"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4b133787f6683ac0688da0be1d8cb612"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c78bf6a1dff68f9e294300ad706dce68"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "79e500f71f144e515ea7beed44d0774f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "cbc5c26e820f0c34289ad37ab6500271"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "2664f9bf890ee5ddd0ae301242ad0545"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "580fa8ecbfda56fe420e054c8a26049f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f457ff81b16e8ab9c4e3bfacdff5b0dc"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "a7041714e466ef2026e45e7fb96fc57b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a2f9468b41b57634fe27ee94ce284e82"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "d358e667063c9d828c107da6e7ae77af"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ff802a04900ae760d5aaf5d695ea0e74"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "255b4771edcf35031f99c83b7909c9d1"
  },
  {
    "url": "Node/basic.html",
    "revision": "00d7a1aab90dfd66bd6d4c9006256fe8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "987f6681221fdf819db0587c3a440966"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c7ff45eedf59d74d16e3a2367ace02ef"
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
