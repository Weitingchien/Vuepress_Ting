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
    "revision": "f3ca2dbd0484557568b5e324719259ee"
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
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
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
    "url": "assets/js/19.ab85ca15.js",
    "revision": "43937b9b776118d1ad64c37f5d14fd01"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.650d46f8.js",
    "revision": "aa882817310c4ffacdd77e1ab5fc7c3b"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.909960d1.js",
    "revision": "8f725098e54e9c2f93c5b753dfded6fb"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.de2b6549.js",
    "revision": "46bb4ec1888d4ca1ba724cd5ebb54525"
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
    "url": "assets/js/app.dcd446df.js",
    "revision": "765405c310bece5c79f14b51ccb82907"
  },
  {
    "url": "index.html",
    "revision": "6a8f110ee77c3df5974e3cef57f59824"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c12f3a9d02633fa7813023cdaa0b403f"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "7e15eb9c51c60223103a81e76f4be3e2"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "3bea1e59df3c15416f5eae25a7cb2e06"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "0f9c6001728988913816366b584aca70"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "b2503c50111acd5cf168d2d8b8809b80"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "da313ce94b6b168bfb97d89954c8abef"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2155fe98fe13c7dd59c6db7635a748a9"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "eac87c01e54c9464f208a7266d893f38"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "7bfccfdc8b434ece716c5f818dcec8a8"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "322fcedc7100a7c3d6130120399dfcf3"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "174117a21152e24a5d6e12ac6a302561"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b3aa18e7066e80a373fe510ed39ed5b5"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e03065056da0a93a77ad677ec3509b88"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "00750ce491ab96253a096a7f7dba5af6"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "6e8689dc2100fc4b3d3e2fc6bfbe516c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "d2f30e157673c054205022650445fed6"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b70568f04eecdfe527ebef02ee186461"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c9beea2e2491cdd903e4d131f6f6a4df"
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
