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
    "revision": "1c9476cfe09274fa17eadf2928edc7a1"
  },
  {
    "url": "assets/css/0.styles.c6707bb5.css",
    "revision": "44b11f49b6d2b23fd01bd446a39b247d"
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
    "url": "assets/js/11.17514c33.js",
    "revision": "e638f4e99f7ea96968bcdf443bde6aa2"
  },
  {
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.cf5786e4.js",
    "revision": "3ac9a15ffec7dcabd787e89d310cc3e3"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.3e76da2f.js",
    "revision": "630f2ec10ab12d401a9bc477769660d1"
  },
  {
    "url": "assets/js/17.3faa3595.js",
    "revision": "ef4c3a36d057604f2fcb21b339c911ef"
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
    "url": "assets/js/20.6f0a9733.js",
    "revision": "4f0f95219b3355789686c67bd71732c2"
  },
  {
    "url": "assets/js/21.551c9d81.js",
    "revision": "3b9f3f4ae6db0b9cd8200b27932b5467"
  },
  {
    "url": "assets/js/22.a8200ae2.js",
    "revision": "a7dff3d2573820cf977b70cf6262ce2e"
  },
  {
    "url": "assets/js/23.5af4f184.js",
    "revision": "e29c0b402283d7f406bffe717f7d3e87"
  },
  {
    "url": "assets/js/24.ec522b95.js",
    "revision": "0e1868192dc7cf2f4a062d7530e419fe"
  },
  {
    "url": "assets/js/25.9fe39335.js",
    "revision": "28a7387e19c029eb23bf917c8ab3981f"
  },
  {
    "url": "assets/js/26.fd980008.js",
    "revision": "d9f7c0f1038b201dbf007beae84dbdc7"
  },
  {
    "url": "assets/js/27.c0eb8084.js",
    "revision": "98f73e3735b4070a879c409b942517b9"
  },
  {
    "url": "assets/js/28.827b92d3.js",
    "revision": "f1827a1d82bd86c2d22d813f11a2e40a"
  },
  {
    "url": "assets/js/29.c99606f7.js",
    "revision": "6bb2431601d068484494d89041e2706f"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.b3ab7ee7.js",
    "revision": "a7502186e6d8ce2c2f1b92618e92a8fb"
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
    "url": "assets/js/7.311dd1de.js",
    "revision": "723543769febdc94589aa1d21a3dab91"
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
    "url": "assets/js/app.b52903a2.js",
    "revision": "203fe191084f36e64ea978fa7ab019e1"
  },
  {
    "url": "index.html",
    "revision": "e2037dbeb472df5711430f022d6dcbcc"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "af54352f835d58bc789cbfab32edd43d"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "bd332efa69bd74b83fba057b870ac00c"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "7bcc34ba6c920e06db4d19f24cc983ba"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "f1ebbb543b82a036ccf3170be91bd181"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8a03a362239eed4091e1b69cdcdc26c1"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e0061db4fa6da0fa7daf057e60383242"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "7aaf16e91cd6336a2ee047cff744f30f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "bb2d039da84a8a081140ef7cd0f752d9"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ba256355663392a06af76b82769c0745"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8a2e45520aa1d8dc965c7d585b353299"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "da6aa4daf3cee57426c6677af847ff66"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "38b2bda0a3e444ad145358959359cb03"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "a204ca9ff63fa027c93174ecd63d5702"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e9dc35f10a03656f991cf36dbf4f0678"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "25a90694b035b0acf6f2a742ef3ce118"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e5d3510ca89a060ec86ecf9e0f5df4c5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "3b01da0355ca0631c8ad2d53a1e6d66f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a31e7b36cc18be356888fc794d146160"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "123d43769a7e3eeed1f22984d1b4ba30"
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
