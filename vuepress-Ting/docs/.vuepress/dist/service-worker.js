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
    "revision": "a1bc7daf85083f1b8902bb1e9a4a1b6f"
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
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.c84294b1.js",
    "revision": "f01f645c67ac0efdb7e878261e656db3"
  },
  {
    "url": "assets/js/14.a0620633.js",
    "revision": "2dd5712ce9e1d8e795abacb8e2d24002"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
  },
  {
    "url": "assets/js/16.f240a6f0.js",
    "revision": "45d59aebe10c698919e0c141280afc01"
  },
  {
    "url": "assets/js/17.3642f86b.js",
    "revision": "3a2641620d015e91c8f7ce5b5570a9ed"
  },
  {
    "url": "assets/js/18.4a3450ee.js",
    "revision": "41ab455ff428583955b7af5be9e0510a"
  },
  {
    "url": "assets/js/19.62acc159.js",
    "revision": "9cb2ff4d10a6c11c4fd869c0c4cfcb70"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.0a478a02.js",
    "revision": "08c4df1573b7ac4bbd0bf5d597d9c4ac"
  },
  {
    "url": "assets/js/21.e7db6832.js",
    "revision": "ff2c69ffad76a7a3d8da0b712b33dad0"
  },
  {
    "url": "assets/js/22.e76e13ff.js",
    "revision": "bd9975880f1dcf83712ef97d1b33a5f7"
  },
  {
    "url": "assets/js/23.f4ab85b2.js",
    "revision": "3615a1d9f0d3d081057dfd38de06dbc2"
  },
  {
    "url": "assets/js/24.ec522b95.js",
    "revision": "0e1868192dc7cf2f4a062d7530e419fe"
  },
  {
    "url": "assets/js/25.8d49075b.js",
    "revision": "71217dac3a0e9bc174a0331290dac5fe"
  },
  {
    "url": "assets/js/26.ae28bd6a.js",
    "revision": "294e9b7ae05304c8a6b5dbcdf93a5b39"
  },
  {
    "url": "assets/js/27.08077e3a.js",
    "revision": "0e7ccb276d59fd004e33a60a31490746"
  },
  {
    "url": "assets/js/28.02ce1b9a.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.2cb45c32.js",
    "revision": "8ac029a24c50a6bda1a27c3be5a67040"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.6efda52c.js",
    "revision": "dff618c4c489e5e6b36d56dfc611f6ae"
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
    "url": "assets/js/app.83f09438.js",
    "revision": "7e22d89d59c8f80b18279c637b042365"
  },
  {
    "url": "index.html",
    "revision": "ec64101f4559b10b3bc6007afd6af753"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c38fe6be8bcedf60233c51663ad802a0"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "39a848f3d796d20d73a1844c530ec756"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "dd2a0b5cb1dc1cb49e94372a1c9b63bc"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6cf7c6def38f32ed41046393b6d27b1a"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "35c154bf6dea5d145eb187ee585c1594"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "88eac2baad5866e1e663f97293554312"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "dfe3668aa523079282dfad4b1813ccf5"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "192283900ebc55c27de11492a36c8cbf"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "2352b2fab12fb936f6efb20989a450cd"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b1211c7e11f4ba57b05c297bf442a12a"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9bf03f34dc4c3d35188bc2c71fe473de"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c4ba09db3efec0d0f48c9e2994d66d1e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "64d4f7575da2c292f0629693c378e0fa"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "f01aaf8e33efa22e604f69f48f448783"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3a70a74626089b6949f6a54c641845aa"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1046d2fbc89071855b559a9c0187f15c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c00de9cb9601aeb533da07ead1fd7efa"
  },
  {
    "url": "Node/basic.html",
    "revision": "fda99cf9d6e04b19e9aecc2f84267e3b"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ea218f4f76ddc1a58ba04e7955202ebc"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "27999b5b2896793098a4c8caf3c885f9"
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
