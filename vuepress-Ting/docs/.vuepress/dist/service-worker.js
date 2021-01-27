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
    "revision": "be4818a6fbbbe33e1266480a5add601e"
  },
  {
    "url": "assets/css/0.styles.aba49d79.css",
    "revision": "477a5c669af9654c50cf7bdbc26802b7"
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
    "url": "assets/js/11.17514c33.js",
    "revision": "e638f4e99f7ea96968bcdf443bde6aa2"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
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
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.c68dfbeb.js",
    "revision": "4050899fd2997a8455d89c45f183a0ed"
  },
  {
    "url": "assets/js/21.78ac7fec.js",
    "revision": "90a118fae7befa1e65e9d6fd81ef06ce"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.cbb8ca43.js",
    "revision": "f9fe6e66a039d49e34763cc5a4352115"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
  },
  {
    "url": "assets/js/26.a2fbafaa.js",
    "revision": "de079bf198afa8f5e5378fbef414e7a9"
  },
  {
    "url": "assets/js/27.49748f6a.js",
    "revision": "500ec43b6d2b1bb64fa47cb74eb00770"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.c76ba6a9.js",
    "revision": "7cc110ee670ce836ebebffb8a8b4bf59"
  },
  {
    "url": "assets/js/3.afb81690.js",
    "revision": "8d60d2b772a58a6432e8910191272907"
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
    "url": "assets/js/5.5c4830ef.js",
    "revision": "d5a58e822b4e169f68fdc0b7019adcc4"
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
    "url": "assets/js/app.8b741f51.js",
    "revision": "6170f63d53fe6c1301d47a232a4e6d11"
  },
  {
    "url": "index.html",
    "revision": "f3eb53f668a0bf10b8bcd255d106d0d6"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3a3e44cd251ae3b52062db73c3e9d025"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "789c851f48b133bc36a9d710c0334d2f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "cf1b128f9d134d4a6928a29b2f717123"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5b8572c5e974705c2c08d8143fdbcd92"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "cabc015d1a0d2e309e479e93fd1df88d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "f55d82e060328d19ac9760ffe313371e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4a2b38d80122a85591b9e56ffb736009"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "e662fbf0bf45e40e070f094e99ea349c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cd5e86628eae82e9f4794016e96ea061"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "848c23274805bb70c2f8f4cb0545eda8"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "94393ababd6e4849ad43f7bc8f6bd259"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "d5b3a66efe3238f35d29dc2b751144f8"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e424843787b66fb995ff0ceaec0813db"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "405558fbbb957a621dc48c1f785f51dc"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "038db548eda7e221dc20c70cd53775cf"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "6fbef13892759013559f9fe3d0b47e83"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e234fb8b91a8e626ed0201571a694226"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c0641005cf21356600cdb6d938d2c933"
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
