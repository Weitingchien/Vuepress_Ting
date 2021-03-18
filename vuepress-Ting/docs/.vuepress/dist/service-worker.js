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
    "revision": "e4dd5d785dabc0dc2f117cd67f14ad9c"
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
    "url": "assets/js/12.2511bb9a.js",
    "revision": "1c573c1a3ac71d6870a01cf96c109e29"
  },
  {
    "url": "assets/js/13.67424a72.js",
    "revision": "d09534ff510048ed8d791d73addea7e5"
  },
  {
    "url": "assets/js/14.a830b66c.js",
    "revision": "5e950bb00fe770e4cfc7b74e90dc3e1e"
  },
  {
    "url": "assets/js/15.55ec40f1.js",
    "revision": "334fee4192647c829544734e391ecab9"
  },
  {
    "url": "assets/js/16.507d8b7d.js",
    "revision": "b3c95e1f9331f8dc6d7c95e4a4b81733"
  },
  {
    "url": "assets/js/17.134a1f04.js",
    "revision": "469a38cbf070dd0f7af61ae268430d96"
  },
  {
    "url": "assets/js/18.54ab755f.js",
    "revision": "95c1ad45fe50b81878db445d9a91b8a1"
  },
  {
    "url": "assets/js/19.e1af303f.js",
    "revision": "e8c99494b74f2b8dd571cb70d4252bd8"
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
    "url": "assets/js/21.6d87c089.js",
    "revision": "13719775a0797cbec3bb38c4cedc9901"
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
    "url": "assets/js/24.f959c9fc.js",
    "revision": "7ba16ff168e147a1e3d0040d4ac781c6"
  },
  {
    "url": "assets/js/25.6d5283b0.js",
    "revision": "58171d5a4a7d616edfc89faad1a047cb"
  },
  {
    "url": "assets/js/26.7593d961.js",
    "revision": "9a68a34ff20f4b6bbdef623c08ba7eb1"
  },
  {
    "url": "assets/js/27.608a2432.js",
    "revision": "65c316a8f2d1cee7ed37971e6955e359"
  },
  {
    "url": "assets/js/28.18d3fe39.js",
    "revision": "fdda2bb43fe4a0edaa2e740176746fc5"
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
    "url": "assets/js/30.7c7db51e.js",
    "revision": "aab06965cf753f438a169747d169a11a"
  },
  {
    "url": "assets/js/31.5652a6fe.js",
    "revision": "359e1569f1df193ea90705e9b60984a4"
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
    "url": "assets/js/app.06e3f843.js",
    "revision": "19e637b48abb567a1c55097d456ce856"
  },
  {
    "url": "index.html",
    "revision": "97c026c5cb15b1ea4a17b064fce164c1"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3de8f4d38ef75787072374dc5b5dff97"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1287c14bbfaf2c2b2623d64617b514b9"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "878d639afe242f5e2384db71132114de"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "21e402a47aa1fe7b319a09d2e9a692cb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c18a78ff01b6d715bc76d1e5b61645d2"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "c35f3aef09eaf86e9147512e1cd4bd60"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e72b6f7da6d7c1ecb422c075a5af6875"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "6a072f1afcdee7ab1a58208f7f7765f3"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "8b7b99f501652110f3d2500ff2f394cd"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "1535d7cf28d31c6af7d1456475503458"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "72495fcd11c95669ddb6a5a728ef6688"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0bd50e25fd36efb1368288d6a4c35e87"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "282924785448681dd60b8f1dfdfa273b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b74bb201fa2cdb8cd2c14ad3a96ee865"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3fea8082e162a3da88aecccf3f130724"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "0aabca12d762aa3dbc01ede89da67bb4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "feae05031e201c757eb444fb64a1a338"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "2aaceb8b024504c28f7be85be5c5c187"
  },
  {
    "url": "Node/basic.html",
    "revision": "69859e539b914eecdd28c490f9ebf746"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "9be3d2774dbcb902965ca97d1b5754e1"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b7579cb6a2b5191e36f24ad906618ab7"
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
