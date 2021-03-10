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
    "revision": "75d17c12620887c897a1127602c6ed32"
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
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.3b1c42b1.js",
    "revision": "139ca6e7a416f790851f83eb8f699bdf"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.18ab9721.js",
    "revision": "e9ac04b292228da86ad5adc9bbe36816"
  },
  {
    "url": "assets/js/16.507d8b7d.js",
    "revision": "b3c95e1f9331f8dc6d7c95e4a4b81733"
  },
  {
    "url": "assets/js/17.dd91d216.js",
    "revision": "53ab27761c82fe0af70ecacaede09887"
  },
  {
    "url": "assets/js/18.8fc5caa6.js",
    "revision": "0281ba4dc1643a07b9e3242e00e4bc86"
  },
  {
    "url": "assets/js/19.b0390f2d.js",
    "revision": "9dd4d51033f919d36320726760a78186"
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
    "url": "assets/js/21.c0b03832.js",
    "revision": "37921e3e05d4d2cc6c5ba508980ae0fc"
  },
  {
    "url": "assets/js/22.398a014b.js",
    "revision": "0bdc63dac1ae873ad2eac406a4f3be34"
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
    "url": "assets/js/28.75b2c5d7.js",
    "revision": "a221897f9ab8fff313bb86981dba2bee"
  },
  {
    "url": "assets/js/29.c749ac96.js",
    "revision": "6bb2431601d068484494d89041e2706f"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.19738d23.js",
    "revision": "0572a658b75fea229bc5d62d115de2b2"
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
    "url": "assets/js/app.18e5e450.js",
    "revision": "86fb834fdaa9094dadcde07bab582aff"
  },
  {
    "url": "index.html",
    "revision": "bab8982f02b28c664b73842fc758011e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "1be856c97d92b7e3387b3e8c09844fc3"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "7f086d849cb3b79af1cbde5402d0fe17"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8ee3cc2f781cc34cb07e296adadf3614"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "55c059851481669910aae0f0b1f706d6"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "630e64c6dbc2e074c695b432701c3d67"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8230b6ad22918a917bb71ad662754c0d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "3e302ed8e5cf5a67b9b13887ecff59ee"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ae546bbe04f15db3ada9c8c915420647"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "239df951b90da2974651c1d9303f4167"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "cac3c64d03f36c0f1856e7742cc20b06"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "5bee7a5edbbb794f45096e4a1a040e68"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ab01f1979e0ee1c69715811f90a894b6"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "73f98401c8601402950fc829ac985269"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7bc274707d8e2cc801b40e774a0cd7b7"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "1d097bb105e21bb9ee7fd08321dfc14b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "2cb2be1f2fc0ced2d964b9b77e400314"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "6f2bcee709685ecee24618fefe018dac"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9d0625a3dd69c783de73eacf8ba4c106"
  },
  {
    "url": "Node/basic.html",
    "revision": "3d39e08a36e40445a0289b6e68576ca2"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "04b523e0d3eb5280d00105ff4255a8be"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "32214a069c5e34e82b5cbd8dcbb9b854"
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
