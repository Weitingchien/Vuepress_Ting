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
    "revision": "56851e92a1f32dcbd0a0b8fde2587fea"
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
    "url": "assets/js/12.803d93df.js",
    "revision": "782d6916e75f61af919d49929458ed3b"
  },
  {
    "url": "assets/js/13.67424a72.js",
    "revision": "d09534ff510048ed8d791d73addea7e5"
  },
  {
    "url": "assets/js/14.b7a65deb.js",
    "revision": "444180c5d1803b0e0cffac2154d2b0d3"
  },
  {
    "url": "assets/js/15.497e2dcc.js",
    "revision": "c82816918646cc076b58671e983c928e"
  },
  {
    "url": "assets/js/16.35b44e55.js",
    "revision": "cf7b9288e10bc6122e2c7861e04b8ff9"
  },
  {
    "url": "assets/js/17.4056a1b1.js",
    "revision": "de8036b3c10fd83f78dd398a38f2cf2e"
  },
  {
    "url": "assets/js/18.d97d59af.js",
    "revision": "4c98f75ae42173cd88a1882d824d6175"
  },
  {
    "url": "assets/js/19.b51c90c8.js",
    "revision": "25182cbde91322948600c2493374df81"
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
    "url": "assets/js/23.351dd5cc.js",
    "revision": "8d879c55a07cf90ca5c9e6e8020ee433"
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
    "url": "assets/js/26.ada69788.js",
    "revision": "71053b348d0f688f6abcf8f054572f50"
  },
  {
    "url": "assets/js/27.7872fd85.js",
    "revision": "c691b374f47103105826dbd7bd2cecec"
  },
  {
    "url": "assets/js/28.8baf0fe2.js",
    "revision": "b99febea8281338c3bcf330822042ee3"
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
    "url": "assets/js/30.19738d23.js",
    "revision": "0572a658b75fea229bc5d62d115de2b2"
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
    "url": "assets/js/app.324a95d6.js",
    "revision": "790b5319938e8b2aaf2ef4d4ff47716f"
  },
  {
    "url": "index.html",
    "revision": "012257adc0f50fc53045d57990620a57"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "f75f2bf6fd4ef6e7ae312a46adc3d88c"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "a79b32172bacea7010035e995410cc29"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d2b3b5e2db7da6c4863694f1b427155a"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "12013b6f8f2daaea039747c976f42c61"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "36bce177c3f978716f990db1cbbd6b02"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d2d65cad1a30a050ae283a61f956826b"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7169546f5ec602f86d05d1a5b928f1d9"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2dcec056c39e3ffbadcae593e843b7f5"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "1ce7d6f89faa2dec80d554c8d5528e39"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "956a7b15f26285cbee9dea57c492e1e0"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "2177c94e30c87975d7a3668ee30bb534"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "fe097d5b5c2dc47bef00d60d0b87b819"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "0b18a600931fa431505c8f14f281033e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "231925d5f92b066cb447a6d44a2225b4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "4c482925ccdccc1ad7d28cd25fea17e2"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e523fb619d9c6964f2182cacf38ad4f3"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "2071ad32b4e79bca830ae88a647a3108"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "40901710cd50414687d3646c7ab61e19"
  },
  {
    "url": "Node/basic.html",
    "revision": "d849146d72448243ba1454a17280efb8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "857db66b6d0939c22597c9d6bf5edd90"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d73cf606f3647a5e9cd64b46c0d961c2"
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
