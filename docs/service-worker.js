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
    "revision": "a1145505575c2c1619d091c30785f2ed"
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
    "url": "assets/js/13.2e1f8919.js",
    "revision": "7798b56c0a56110c3b138a07dedf504d"
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
    "url": "assets/js/16.d0e9dc9c.js",
    "revision": "d5141c45b682256e844f4ba6cd7b7022"
  },
  {
    "url": "assets/js/17.4bf3536c.js",
    "revision": "d88b7782fc10fdd5cc280bc0a7365e25"
  },
  {
    "url": "assets/js/18.ca61ccf6.js",
    "revision": "a24e51941442f58ef4b44af452e4d531"
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
    "url": "assets/js/20.00b32853.js",
    "revision": "cd2ff549c41e2c665ff073d1bda29444"
  },
  {
    "url": "assets/js/21.551c9d81.js",
    "revision": "3b9f3f4ae6db0b9cd8200b27932b5467"
  },
  {
    "url": "assets/js/22.fa006d9b.js",
    "revision": "bfe7e10c16f4a3306202bb8404b85fc4"
  },
  {
    "url": "assets/js/23.613a3014.js",
    "revision": "3e4cb0dc0a9d2cfd369becb918ddea31"
  },
  {
    "url": "assets/js/24.ae9911e1.js",
    "revision": "6b68638a64cd8e310a1fe4b00bbb909a"
  },
  {
    "url": "assets/js/25.f3b5ae93.js",
    "revision": "96ac6bb7e99f2cf41427440b265b4aaa"
  },
  {
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.bfc31279.js",
    "revision": "d0afe5b46917c9d1e9b0adde8797c722"
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
    "url": "assets/js/30.d8979072.js",
    "revision": "fc8827510a6e4326769234ac6a53175a"
  },
  {
    "url": "assets/js/31.100722cd.js",
    "revision": "76229be42448d0a1d0355fb47300c210"
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
    "url": "assets/js/app.d0af4433.js",
    "revision": "2561280299b4020be22397819a2ab04c"
  },
  {
    "url": "index.html",
    "revision": "509593c0bdfe6be381f261bc3eb2a50d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d68eede3b86ac0f0ad0ab834d66a8b82"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "9f841ab5a290c31bb64effa0eafa0b13"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "b185cf269eadb8986a2eb1567b7bc99d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b0709a9dea4e2c6ea11266cf6e2ecff9"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "7f747dc9bb87bcd728f10874b48ac161"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "27bd0fbd49a13bd375c29dd41b802fc5"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ed68c8324feadc3ee3ec3536edad6c4c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "d3e5f1354176788d07ece9a5a776abeb"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "acab602900d4bd9135ab1cce9af6bcf2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cd328f22efea2dafc7ba4785b2d4dd0f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9b6c7ca0c7293e34cabd4a4c95b52d52"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f77506fb8182e686189ab1c3c5477061"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6bd8682b2b74868bc1920436edf53432"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "9b40ce54653528b888eda73fedc3a076"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "bb213e1c2d8075fbc05ca4b20f3004ef"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "3cc02bf8efa0e31e3ec938e2cc7c188e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "3982699c321207bf638ab5747118c581"
  },
  {
    "url": "Node/basic.html",
    "revision": "3001a37e1fa27e25d7c181c4af77cb0d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b59b0d9ef6f55e9300b0a98d4e085fbb"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f7c0535d64535a15746eb4e04c732dfb"
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
