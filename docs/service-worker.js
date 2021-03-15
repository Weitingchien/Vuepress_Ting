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
    "revision": "b8f42f56b35d5b32bb6a32a4ec272dd1"
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
    "url": "assets/js/12.b3b90cea.js",
    "revision": "9466023e57130d13d95079fc76e60683"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.1fb6baca.js",
    "revision": "876d8b45a84164259edf6edfa6e919b5"
  },
  {
    "url": "assets/js/15.50f2ac71.js",
    "revision": "88eceefaf7a82ff84272fe3018778791"
  },
  {
    "url": "assets/js/16.35b44e55.js",
    "revision": "cf7b9288e10bc6122e2c7861e04b8ff9"
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
    "url": "assets/js/19.12fda8aa.js",
    "revision": "077508ce401b505f1e0ddae8e0ccf2a9"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.d3fe10fa.js",
    "revision": "af08364caf2e6e87d548d47e52e68692"
  },
  {
    "url": "assets/js/21.6d87c089.js",
    "revision": "13719775a0797cbec3bb38c4cedc9901"
  },
  {
    "url": "assets/js/22.e1cae2f1.js",
    "revision": "55e9ae0390695554b9fdc255912d23a8"
  },
  {
    "url": "assets/js/23.48cab938.js",
    "revision": "ab51ff8f7792f213bf7deaef3a9e7fa7"
  },
  {
    "url": "assets/js/24.343526d6.js",
    "revision": "af59b38b366584784e17b3fd66b37cc1"
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
    "url": "assets/js/app.bde2233c.js",
    "revision": "63493c67346ce7dbe12ec9421445e65a"
  },
  {
    "url": "index.html",
    "revision": "9299eb73b84dbbc3dadc2e8a76c578fe"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "ecbd9e18cb60343f6fcb99e76e0f24bd"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "e7181898e2f2ec0f20acc71b8a7725cc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "332e13404a16903f1f7b60cda05c8e53"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "56d8203c644949ce6e5dfcc7fdde7cc4"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "deb4bee577ce28565ad094d2086be171"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "0473705a76ee6bda3e7b152158c5e735"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "158b4efc4d20e728d80a57c597222f51"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1d9aadfc94130ee7c5e634912206a78c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "35911f0730c963f485273f37c95e0781"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b8012e8184f5ac76af2fb795736f0eea"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d006058689587960960b4e7f39339bd5"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "133cb7fb4cc3cf4f5d78f734b5f3188c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "164b55d37cd792a4a246d565675af892"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c57aaf66c1f6808c9c37f67b17b5963e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "0320a1d3e186b505bcbdfea641b82c1f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "be3d2aa038fb72856e4f81a6428d19cd"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7a3be9a92af64119fb9d19d5ac989e46"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7d204c025e19b1df9133d8282b92f33f"
  },
  {
    "url": "Node/basic.html",
    "revision": "1ff04472be665ea63d6ebde10289bd8e"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "72a6842e52652dc1ac701aad531c202c"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f58b5f762c1573b43fddd798a56e5289"
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
