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
    "revision": "57e69fdc1337e66720c13f38f765ea05"
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
    "url": "assets/js/12.cd65cef4.js",
    "revision": "90513196893841877676789805f69188"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.867ce0c6.js",
    "revision": "f8155f584fb67e13fd6517f47d485297"
  },
  {
    "url": "assets/js/15.7892036b.js",
    "revision": "7c8f5be54af72f0d2b6d23b48f1c6fb7"
  },
  {
    "url": "assets/js/16.a0c40ee9.js",
    "revision": "2383f640342e6efa279b62bb94166391"
  },
  {
    "url": "assets/js/17.4056a1b1.js",
    "revision": "de8036b3c10fd83f78dd398a38f2cf2e"
  },
  {
    "url": "assets/js/18.e31a365d.js",
    "revision": "5e68460486ee6f7339bfc57945c99355"
  },
  {
    "url": "assets/js/19.a43bad3e.js",
    "revision": "b174f6334f8107824daf3f0b4c2cd412"
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
    "url": "assets/js/22.e1cae2f1.js",
    "revision": "55e9ae0390695554b9fdc255912d23a8"
  },
  {
    "url": "assets/js/23.9b122b28.js",
    "revision": "ffc7bb2bb29de589ca3f074c07020588"
  },
  {
    "url": "assets/js/24.b7070ed5.js",
    "revision": "4bdfc83ab760396fc0c1323928085fdd"
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
    "url": "assets/js/28.70bdafed.js",
    "revision": "5cc9138f196cdcea130228138e85a123"
  },
  {
    "url": "assets/js/29.60957a3e.js",
    "revision": "852fc33320861507d04f088bb889bc14"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.4f5bd044.js",
    "revision": "3314ae146e27c2efb3ac9a279341ee36"
  },
  {
    "url": "assets/js/31.de91244f.js",
    "revision": "f65de9f29b8ebbc4e13d2b2deae07469"
  },
  {
    "url": "assets/js/32.a8f7b559.js",
    "revision": "7c8a70f2df0d888b8969a0634ed7e089"
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
    "url": "assets/js/app.8c1c46f2.js",
    "revision": "e8136c84e8d0003292699e3c65f64107"
  },
  {
    "url": "index.html",
    "revision": "d46c9bc21c37c33c162d1fbc1556e4a7"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "57050453bd1c0f4902692620e62a120b"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "1d33a06192615947aaaf5cf4f4fc2918"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8f74842c43acefc90822b79f618648ce"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "47078ddda370e075cf44fbbef89b679d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "cdc6c8fe00f7428f9b0c69e39190ca79"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "292059a07c7b726c0ded7e1f3f72f4b8"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "3bfb5cd0db3c2b36644506ebc26df810"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "7e3814015b26a6ab9fcb437c4d16f9f0"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "aa723f782ad267ae080f4da2b04127ef"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "94ea14e05fc2e074f6eb73fd8b0566e2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "9c2493beceb76ea482b721d8e783521f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c7c034197030cca69933169f417fb628"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "eefdd61720fbec55f5bd937582ec86db"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7ee9cbfba41d3d8aa9e9350dcbc40162"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "f862ef2c269664615fd10287f313fe03"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "887bd9469b595fedb53e79d4e1dbd60e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1f6eca79547d6f38da881484bc191dc8"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "997f3a6233b08112152f7b9e30667616"
  },
  {
    "url": "Node/basic.html",
    "revision": "ea966815ea1a3345efbfe69b7c10d925"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3753b053b54d6a58a5df264fff33463f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f927527ebade92884fbbbc85d8eed197"
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
