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
    "revision": "174ce22a6ec73a5dbd5c24dd1e5acc42"
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
    "url": "assets/js/12.d29ae764.js",
    "revision": "602b247fcb3835a44949373f7fe193d6"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.a830b66c.js",
    "revision": "5e950bb00fe770e4cfc7b74e90dc3e1e"
  },
  {
    "url": "assets/js/15.7892036b.js",
    "revision": "7c8f5be54af72f0d2b6d23b48f1c6fb7"
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
    "url": "assets/js/18.e31a365d.js",
    "revision": "5e68460486ee6f7339bfc57945c99355"
  },
  {
    "url": "assets/js/19.e27c7a61.js",
    "revision": "a99039041ac2deb8c0a4f06c3bf7c262"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.e78f3a91.js",
    "revision": "53fdd74e50520e4be6ba097ccf0a2595"
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
    "url": "assets/js/24.f959c9fc.js",
    "revision": "7ba16ff168e147a1e3d0040d4ac781c6"
  },
  {
    "url": "assets/js/25.c6d54d51.js",
    "revision": "56b99c106ea09a78ed5828694dabec3e"
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
    "url": "assets/js/app.824a161f.js",
    "revision": "37aadac9af0c60732606ef3dfb33d73c"
  },
  {
    "url": "index.html",
    "revision": "de41a961250c869d29f3db20357cb206"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "2435b8e05b82d87e35408be5a210e174"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "28ae3dbb9aed3f163d5904fc26d17c5e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "92d17aba1af1a993670dcdccb29ecdf1"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "acf1d3f6125d4358db3ffeac64c5d99d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "89dafefff227a4edf177dda6e86bfef6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e5ff4004f5f3e7214ca8bb636efc5b2b"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b862f9ba5a866d25e86bc2e378524eae"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "eaa9f610c5fbab1ef449799f71aa2a30"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "db5e0ec7f47c6d1f1502a3da6bce6071"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "e9cab53f426898479c1fa858dd1989ef"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "18a21a5d7d5a1ee5b02944b7a1826ae1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c5f1d0a3ac3f7f0912a96dd8ad17d5a9"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "33a6ac7b12907feb6877bdf2fd009b35"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "845aa293543a5f7f99a7c88c2ff0d6d2"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "405ae23e00173ccf97e203faaa2635f9"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3ae61273f7ea4284b368d4b2a405ae29"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9951935a4bae4fdbd1d926b1cdae1f9e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "1af98366dcf5e07aa192e453e26e6d6c"
  },
  {
    "url": "Node/basic.html",
    "revision": "45be736b8353290e3cc3915ab1395ce7"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0beda83a642caf79c2289d955d552caf"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "6edd21775dc6dc093087bd362b1eef9e"
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
