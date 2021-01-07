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
    "revision": "090d249388a4e514a7ec5ed6f4adb82e"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.6dec696e.js",
    "revision": "e27180958ea0f79b791dd490a3cfc568"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.c32fd334.js",
    "revision": "bc8fdea1f9a4d543393031dddc328068"
  },
  {
    "url": "assets/js/17.48171330.js",
    "revision": "082a894ce87d1be4fba47b1fdc2869cc"
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
    "url": "assets/js/20.5917b928.js",
    "revision": "bd7bd20425b24db3fcf76d739067222e"
  },
  {
    "url": "assets/js/21.80c4b70f.js",
    "revision": "2f02aed9423bb7357551c94c23e0bde0"
  },
  {
    "url": "assets/js/22.1fcd1d00.js",
    "revision": "de554e49a75aaee691bce7e0fecea010"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.0a4cb037.js",
    "revision": "e0c26037c4f61657346f3aea6477f25a"
  },
  {
    "url": "assets/js/25.2a1debb4.js",
    "revision": "e058528727f5dcf0c3bbef76d1a419b1"
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
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.b168b5c8.js",
    "revision": "f1e533e4fa76d5919f958e7ab9b337d4"
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
    "url": "assets/js/app.2f2eae00.js",
    "revision": "230b038e6eca384ef9361ac773b2fb2f"
  },
  {
    "url": "index.html",
    "revision": "4e254237ef0878d2528e818a90c811b9"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7a0bef44672e5cbe0a0756d7e9c6ab39"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "53cc9282d0be44c2d85969d943e9c328"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "6f80e5b3b8a63f5b1f6125a3f7819f37"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "250771775c1a30345ea473e028d7f5b6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "3d16851e9e8bd5bf7622725fba873076"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7f32a0081a3177901cee94a39febb37f"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "af412d62cea5b178c7aae1ff173d7518"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "80708fe8a8ba856d279612ee6f059958"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b85d23b6efe0ab6eec6127285dce8b4e"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "730730ccf15b37382c8d915f54830d3f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ba13974500f75d1393eb30cf7bcdbd09"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b04333c404328c9453e2ce445331667d"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a41a3fb6fd14e5d2f177709e1b08a76e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8e14f5fee4b8f82a61580009ba81bd39"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5443d9d55c8d16d9971d5141def34006"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "3840863be0855acafb0e17e44f0cd250"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "8068c41345bbe8cd7ff6fa59d940cc32"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "60a1793090cfed616dfd60873f173c70"
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
