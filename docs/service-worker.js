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
    "revision": "7db5f684d3059cc3bbb717fae8b11955"
  },
  {
    "url": "assets/css/0.styles.7f133768.css",
    "revision": "8c09f52944c2031184dc7a72b4af1245"
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
    "url": "assets/js/11.8c5f3f64.js",
    "revision": "8f6c5c4c2298ea2a30c3422e97cffce2"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.cf5786e4.js",
    "revision": "3ac9a15ffec7dcabd787e89d310cc3e3"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.308209d5.js",
    "revision": "1cd5ebc99f853d323d9eab3e2bc18ca3"
  },
  {
    "url": "assets/js/17.d0c35455.js",
    "revision": "29ec58b57c2fb3728046d2cedc2fa28f"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.e384ef82.js",
    "revision": "d97e409dab4a0465ffc07fd55aac94be"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.00b32853.js",
    "revision": "cd2ff549c41e2c665ff073d1bda29444"
  },
  {
    "url": "assets/js/21.8f8952d5.js",
    "revision": "1c3d8ec04986625e2162e57a602b565c"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.2fbb3c67.js",
    "revision": "4e788262829d9c7026fa3f0e5ddb4832"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.a557f09c.js",
    "revision": "c158c1bb595eff076a06beb17a7be887"
  },
  {
    "url": "assets/js/26.ae28bd6a.js",
    "revision": "294e9b7ae05304c8a6b5dbcdf93a5b39"
  },
  {
    "url": "assets/js/27.08077e3a.js",
    "revision": "0e7ccb276d59fd004e33a60a31490746"
  },
  {
    "url": "assets/js/28.a254c5c2.js",
    "revision": "215dd99735029c51e7e12d5643588b44"
  },
  {
    "url": "assets/js/29.b1213f5e.js",
    "revision": "0085b934ce03fe1ad3658a2bd278950d"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.949071bd.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
  },
  {
    "url": "assets/js/4.3bead0d7.js",
    "revision": "02ea3b4a851cf9faafed602a1dc4f112"
  },
  {
    "url": "assets/js/5.2b550773.js",
    "revision": "82c79708c25e47fdb9de09cf03d8256b"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.a3ad9c33.js",
    "revision": "fbc890034f685aa8b0ea65b808878137"
  },
  {
    "url": "assets/js/8.8d2fb1c1.js",
    "revision": "548d521502a8eb6c184d9a11599b4e8f"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.736152de.js",
    "revision": "39bc0cd7b3f20fb168c48fa96b77e58f"
  },
  {
    "url": "index.html",
    "revision": "3648f4d0b06d2d820882b053f58beb96"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "a93ed752d4b2d073c90b21e29c2c8937"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "a1b1be67148eebdd278c039c4bfce62e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "340cd3d3f287e819bffa48d505e5d074"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c1fc34543c0d4fe6d89dc8c16b27bdce"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f1c6725d19f4d4bd46d663dde2dd3471"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6fca92d6a8b3cd104bd3583c45a64219"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "511d613f4b9b7b55fedd7b8e7c1788e3"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "cf4f27f5b9667d0b5bda05b236d04f9d"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "e624c1ff7bc972193ffd2f22828dc11b"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "16c0e8068fe2f0838b3e7cc836b820e1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "048263e7a59db89e84de1318bb59d155"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7f748d2e3815c99c687502ef44c498aa"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "891d70a5ef7ef17d494e7a85a9bbfdc9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "8bf99b09e645e51081e146917fd1b364"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "c81d8b8cd76855e4f3f469f1754d2675"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "255656770a8d8cc2b57d8fbe215dd8d5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "a2db8314c088e5f4e2b6ea2170bb707c"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ebac68acd19c1b7478e31b032526301b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "cbc3b3e67d9e70bef67583f61fcfac48"
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
