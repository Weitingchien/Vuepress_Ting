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
    "revision": "33c3f1e47bf8c77526e5529b137c2221"
  },
  {
    "url": "assets/css/0.styles.399da0a9.css",
    "revision": "3fb189fa9ace7311a059bf7f5b3c38da"
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
    "url": "assets/js/11.4d0bb7fb.js",
    "revision": "3fd13011b213fded660f8014db8efd62"
  },
  {
    "url": "assets/js/12.76170078.js",
    "revision": "5396073b8138e2f05a2b1da9ad4f1f6c"
  },
  {
    "url": "assets/js/13.26a2a48a.js",
    "revision": "23b3b659eaf9795161cc991c13d4204d"
  },
  {
    "url": "assets/js/14.4be895ec.js",
    "revision": "7721528a70c10c13e949094f5e759820"
  },
  {
    "url": "assets/js/15.b251fb70.js",
    "revision": "5779fc52bb2466056ef565212ade9195"
  },
  {
    "url": "assets/js/16.b8a239a3.js",
    "revision": "0ef4f003f6393264f783bd1720e1a7a8"
  },
  {
    "url": "assets/js/17.a1efdc2c.js",
    "revision": "a85243c234608006d2161d4b8c6f53c6"
  },
  {
    "url": "assets/js/18.4fd5f62a.js",
    "revision": "bd6e3ed1b89d9efc68db630f2ca1fcb7"
  },
  {
    "url": "assets/js/19.86590cac.js",
    "revision": "32bc92f724f740d1f223857200da1cb6"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.db6575b7.js",
    "revision": "e89c6f8731e0cddc0d974816494c6cdc"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
  },
  {
    "url": "assets/js/22.219554c3.js",
    "revision": "b8e47dfb1d0e3c4afaf2d14ee28b1c53"
  },
  {
    "url": "assets/js/23.fcedd960.js",
    "revision": "a5da9ac46f587fb20baa389d4d43f3d1"
  },
  {
    "url": "assets/js/24.0a4cb037.js",
    "revision": "e0c26037c4f61657346f3aea6477f25a"
  },
  {
    "url": "assets/js/25.2a1debb4.js",
    "revision": "e058528727f5dcf0c3bbef76d1a419b1"
  },
  {
    "url": "assets/js/26.d10e026a.js",
    "revision": "31bc78ba8f4827cac2c99613fbbce58f"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
  },
  {
    "url": "assets/js/29.d226f03d.js",
    "revision": "5d0fb9b487bd8c67704aa38ffc0551f6"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
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
    "url": "assets/js/7.eccf7b37.js",
    "revision": "fa33beafcbf77352c1895c764cccdf17"
  },
  {
    "url": "assets/js/8.8d2fb1c1.js",
    "revision": "548d521502a8eb6c184d9a11599b4e8f"
  },
  {
    "url": "assets/js/9.10295493.js",
    "revision": "dd668313c2ce280c5a298dbf38fe168a"
  },
  {
    "url": "assets/js/app.edb972a7.js",
    "revision": "e4fb8d3fa1ee7fd6e5c08adcc34dfb9f"
  },
  {
    "url": "index.html",
    "revision": "b2257b9fcbdb043bd13dcebc1401687a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "38d9893f65de96db6f2dacb4b44fd650"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "5eadd82f10cfdf87ac3aa1ce7411b04d"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1cd198f3e4dd8dd9c2b13f80fb42d19c"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e3bd46d4834869955f7b621fe69c5345"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f674949c27d171fc1fc8d6901b12c274"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "d42e24027460630e443a735d50e1b665"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "90c81d974e96e8c3a0f3319547249cf4"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "38a343c954d1fc127cec5dcaed941475"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "44695f4b143108473b7b9caa731dc73d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "19e0061df93c92d5f4bed7d431f1d166"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "4026dcf8255cef9d2023d0b78d34a453"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "d71b4c2a9c2c77a83f8df450b70ce8e9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "0ae0dcbc1313c3ea20e2afae98b1afe5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "90bb0991418ab5e93de0cd9408fc085b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "c5c8719bb594f4386aa6048f582b1e4d"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ede492f07dc19da6df18d080cf355bcf"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b2b7d9d406132004b57c598add7935bf"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d30587f4775dbfcd27cc39b573463fca"
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
