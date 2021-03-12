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
    "revision": "881b71fb6eb8ed70b4b28f2d47b61346"
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
    "url": "assets/js/12.f0780bd1.js",
    "revision": "f7f80747bdf1b95cc108c13c84221438"
  },
  {
    "url": "assets/js/13.f476e157.js",
    "revision": "940c641f89a94787971e9e4066e1d2c0"
  },
  {
    "url": "assets/js/14.ab3c15ef.js",
    "revision": "cef70a24f56712a6a5f78390eec39436"
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
    "url": "assets/js/18.d97d59af.js",
    "revision": "4c98f75ae42173cd88a1882d824d6175"
  },
  {
    "url": "assets/js/19.09134cd9.js",
    "revision": "8903be5af0fb50fc096c57f7960d0175"
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
    "url": "assets/js/27.4845d7a3.js",
    "revision": "04efe9737820a857aa20d3b4f8fb1c2a"
  },
  {
    "url": "assets/js/28.a806015b.js",
    "revision": "3c7951d69edaf660395f8b7b56a878db"
  },
  {
    "url": "assets/js/29.68b78e4c.js",
    "revision": "87b8b470136163a7e01b92f051a4d134"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.bb6c011b.js",
    "revision": "064a9455db4e2e898266c1b2f51f1ec5"
  },
  {
    "url": "assets/js/31.0ee66a92.js",
    "revision": "d15404ce5151b22bd8b4a51738bad9dc"
  },
  {
    "url": "assets/js/32.340996d2.js",
    "revision": "29ac245b568dabcf7f34d5eea630a884"
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
    "url": "assets/js/app.32906bbb.js",
    "revision": "7e9e4a33b3a85e55603e73d5ed3ee8ba"
  },
  {
    "url": "index.html",
    "revision": "ce67de9583a96739ba8e86d0150e2d42"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4ca5b34e371c287c3acb815add410677"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "0c05c14d5cdc7ea5a7aad3ec31b37588"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "91ea94c99e7585df324e9ae21cb80916"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1aa960ec0bbd229c7fc6c868387588d9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "783e792e4c2a906b6f474d28a85300f3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "beee95d30bcfb3fcdafebaf7f07c1d6a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a114772200fa3f2e5cb4157a5697d3c2"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "cdc67653c8efe5208dc1b1b8f61ea049"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "0f8f17874e9e85c4afdc3c11a484081f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "874e62c3db10f56e91a43da1a5ef4e2e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "6653bad488d16719a99abde3dab10466"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "4b191be136e006991ada5dc5d9ca1536"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b9adf8a6bd22e543555d206cda42a419"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "07e35451aeac2de00c93a1093850498a"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6052502e43244d614fef820cc5f6376d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "a9044f379beedfa9e1de3ebd1a3bf86b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "3ecf9652306a756f95694c9969797054"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "fa77ae65b3c063175afafb03a88e18e1"
  },
  {
    "url": "Node/basic.html",
    "revision": "766ef1ee8137e6e52ba51c0136d695a9"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "6275e5f0a1f1b42eac0cd551514c69d5"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "024210eb562f76a5f15c8ab972e82663"
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
