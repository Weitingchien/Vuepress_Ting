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
    "revision": "bd9951650174ee1661090766ce3eaab8"
  },
  {
    "url": "assets/css/0.styles.99302805.css",
    "revision": "4ff9496746b75cdddd0eafbc0d163e36"
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
    "url": "assets/js/10.5abad7c5.js",
    "revision": "fe44c8b881c9184fb2bbdf9bb9b308a7"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.204bff87.js",
    "revision": "bd68bd2f82e6d55da3f82871be94ed60"
  },
  {
    "url": "assets/js/13.2502baa0.js",
    "revision": "d166b1aa58a9ddfb58d73208c022bb2a"
  },
  {
    "url": "assets/js/14.fc3ce7dd.js",
    "revision": "2ecb1fc6046315100a41d28647298a02"
  },
  {
    "url": "assets/js/15.6ca293c6.js",
    "revision": "f937bc81bbc170ce1f4d9a4caa5b4ac5"
  },
  {
    "url": "assets/js/16.a2d7cb4c.js",
    "revision": "0bcdc04381a4d6deb3edd9bc9a4ce214"
  },
  {
    "url": "assets/js/17.819cffc9.js",
    "revision": "e449f834a2979808fa04d9f0006dd312"
  },
  {
    "url": "assets/js/18.8d4bc5e6.js",
    "revision": "748d38f3eb26bb03984cc11141391ba2"
  },
  {
    "url": "assets/js/19.b030a3cc.js",
    "revision": "c8191b7ef80ba139f907f6c36cc6aba0"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.fcc880c4.js",
    "revision": "e166f7b6b2d4ff06a37c95106943088b"
  },
  {
    "url": "assets/js/21.68fe7e90.js",
    "revision": "4f40fe9e66c71ade070c421fb1531aa1"
  },
  {
    "url": "assets/js/22.d0b5c8e3.js",
    "revision": "c54eb37bf52b33501b813412f6d9f4a7"
  },
  {
    "url": "assets/js/23.de7a1abc.js",
    "revision": "497354be1b58b59e012163c89b4a0bac"
  },
  {
    "url": "assets/js/24.030acaf8.js",
    "revision": "4df1f79a60e6c26afde28770d9ad23cc"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.b1e3ea7c.js",
    "revision": "0a01054169ddc941d44499f765a6641b"
  },
  {
    "url": "assets/js/27.d5afdaa8.js",
    "revision": "8abaad864321fb69452bde7f86119dd7"
  },
  {
    "url": "assets/js/28.6e72a63a.js",
    "revision": "61394f39007570302d508e0289f1a396"
  },
  {
    "url": "assets/js/29.3e807cab.js",
    "revision": "7860fba89318bdba9ce1ba2e71f3ed48"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.923cb2b7.js",
    "revision": "7ebaf2a56d9c6c688773c3485d6c87c7"
  },
  {
    "url": "assets/js/31.af2ce900.js",
    "revision": "d07563c53a5bf1253200020b4e25ab54"
  },
  {
    "url": "assets/js/32.c05c2ac6.js",
    "revision": "90f8a19bed40e926f38377e9eb8e8e1b"
  },
  {
    "url": "assets/js/33.c7d23566.js",
    "revision": "53a5c6eaf1a74f5badb799fb6013dbe5"
  },
  {
    "url": "assets/js/34.a63447f2.js",
    "revision": "df3680b9817ccee1b7c48fb975505f5a"
  },
  {
    "url": "assets/js/35.69489b73.js",
    "revision": "176ec85f0cdc0e9a4aeca98474c73399"
  },
  {
    "url": "assets/js/36.05948a05.js",
    "revision": "005e7dcf9e1a5afceb0f9c5e0c05df4e"
  },
  {
    "url": "assets/js/4.4fbbb95f.js",
    "revision": "2c2f8db0bbd61480f31116f68dfe33f4"
  },
  {
    "url": "assets/js/5.ea6759b2.js",
    "revision": "9d4f677c2b636d1b3c2009fbbc9e42e6"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.8c0fdf81.js",
    "revision": "74467b20cf062a5a529e46072eaa5783"
  },
  {
    "url": "assets/js/8.254c524d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.ca386020.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.9aa5e2ab.js",
    "revision": "12845dab49945cdd93953d734f68ab30"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "5fe06411a7430cb969e3cbced36659d7"
  },
  {
    "url": "index.html",
    "revision": "50e5aa5380b83ba5be9e0093d2658a98"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "8a505d0af652da505141a897536c8784"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "c848f9c7fb3ae744d7507dca30148025"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "0ca80055e540fbd40792c8dfd6f212e6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1437e550e1f62b08f0f4c338dacf8381"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e65a41198379389b51a7c1620f85e5cc"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "4ea0a1f44ce9a7fae8638bee0c067c64"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "5d566adbdb70b3d047c19455eb6cc2ba"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a773c52c7f4ee77e5a1d760255d10e0f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "aa5aafb48efbe997131d47a0cae00d65"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "324c6e1c02766331e6b25678304aeff2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d591a31f66016ccdc7c07d5b49eb94f4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "591744b211bac94dcaaf1f1c1cccf460"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "27fe6081b6ba043767e97a9385495cc7"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "2bf7148fab332643dc0ffe39318c0b35"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7e4539933b1a3b4770e17e34bff953f5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "274d448eaf8ba03e1f6c5568d14ab9f4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9e00ea1f53540ece3197c46d48abcb60"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "4e56b9b6cdecde8da4e7ccaa34ffa050"
  },
  {
    "url": "Node/basic.html",
    "revision": "9aaa1f01bb0c1d536d7a30b65afa854a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f35fd18b9dc6d4b2cf4c1e208b3d1657"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "48f312f51ba275be519416e9ec5815b3"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "7b730e318e77efd07643ceb5719574ae"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "0faca8035a64256436c766da12fa9f42"
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
