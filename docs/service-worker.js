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
    "revision": "396ff076a4caa479bfe9cbc45af1c0a6"
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
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.8b0ba9f4.js",
    "revision": "7c0a5c254f652d21a887878a510be943"
  },
  {
    "url": "assets/js/17.6bea3c21.js",
    "revision": "c44ef592dfbe6c67c50b3874ddff6531"
  },
  {
    "url": "assets/js/18.ec7567be.js",
    "revision": "7e53be54f054ce179b5733ac94697161"
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
    "url": "assets/js/20.0a478a02.js",
    "revision": "08c4df1573b7ac4bbd0bf5d597d9c4ac"
  },
  {
    "url": "assets/js/21.eda8ae30.js",
    "revision": "26a6a5d352d2d0b2818b967b135adcdc"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.ac74a65a.js",
    "revision": "ff1fb464ea78da7c1700089b036da1ee"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.215059be.js",
    "revision": "b97a8544090fe711de799514be96eae9"
  },
  {
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.c0eb8084.js",
    "revision": "98f73e3735b4070a879c409b942517b9"
  },
  {
    "url": "assets/js/28.2ec47995.js",
    "revision": "75b538724a1a94f31a125086331c41cd"
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
    "url": "assets/js/app.cabd5865.js",
    "revision": "f552b97add1a3b4eb194e6f07d8d591c"
  },
  {
    "url": "index.html",
    "revision": "ab7c5deca9dee70ae80734b55e9cfa3a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4d3864407f2b6649fb598950f2ba8d2b"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "00ada4c9c9dbdb8e826c6f53d813031b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "a9d8d7fe53ee2a1e37c3745515e92f98"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "ad3b9036aed032754f9ed68e9f270a4d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f9fce7f5d93c2e13061d70e5d21b0752"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a4d16f4298610031a66638c738da3350"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "7df1fca0c0984453ccc695c7a02da258"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "976eb709613dd05fee68ddd7648bcf48"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "c10369627f10714db5b76f6ddf859dfc"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c96f609ffc267082b84ef480c6363643"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "5f0f6b8c152072994eaa07d2bf65dd4d"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "4e6de4d5df4bc8e7b2bc819f9c763d96"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "4a87a0e47433d8cb13dbc644304078b3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "282631c7a2083c55e53c011b7ed062d1"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6e1f88b73ab0fa58a1b4d3514f03d39f"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e58091e1953dc0c2be38c00df183aa50"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "078394620774c58a09a35a174d2d4f04"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f595265bd8fb7e770b9b24867c629b80"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7d14bec1cdb4da08a0be49cafa022d5e"
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
