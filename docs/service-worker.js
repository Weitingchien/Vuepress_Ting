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
    "revision": "45b0115bb19524fc4902420bd91e2a62"
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
    "url": "assets/js/11.d61bd4d3.js",
    "revision": "97935ab868c6c555a74144c3f9febbed"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.4be895ec.js",
    "revision": "7721528a70c10c13e949094f5e759820"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.c32fd334.js",
    "revision": "bc8fdea1f9a4d543393031dddc328068"
  },
  {
    "url": "assets/js/17.14042ac5.js",
    "revision": "b16c55908aeb0901944ca48315629242"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
  },
  {
    "url": "assets/js/19.15f6a179.js",
    "revision": "00c08e4b634f038864f49b4bcf12fd1e"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.87581c77.js",
    "revision": "9d4cb55689b5e1984d20507208c228da"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
  },
  {
    "url": "assets/js/22.6e8492a6.js",
    "revision": "2a50aa80783a8ea616776604122a8260"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.80920d52.js",
    "revision": "081250bda54fbff5562a59fdff10b6f0"
  },
  {
    "url": "assets/js/25.2185303a.js",
    "revision": "15668cfd2f5cc8c2a187a305da4ebbd9"
  },
  {
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
  },
  {
    "url": "assets/js/27.17188752.js",
    "revision": "384efb7ef9ad238b9e265c335fd2b980"
  },
  {
    "url": "assets/js/28.1c81415f.js",
    "revision": "8aebc1830575a3fd43717596b1059473"
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
    "url": "assets/js/7.e4edf25a.js",
    "revision": "abede7770fed24b37fc0f5e45d8daed1"
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
    "url": "assets/js/app.a981ed2f.js",
    "revision": "bb4223393e531fe0f0ec7f5b3f837761"
  },
  {
    "url": "index.html",
    "revision": "18829f91efc1e4ec31fac0cc152e766b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "09292e0dc87623fad707dfb1831261dc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "598d0a98aa59d7a7674df46eb8ffdf98"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "303c5cd4dcb28efb7ddffb670ac5096b"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3f8fd6fc533f1ff81e1496d45ce96ddc"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "df58d3a89bac309bad7417408ac50a60"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "15b653dbbdc83a0d0fa5650e6c2899a1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a1a876c28e59b2ab0f9349ff6fe3cb94"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "6eae2e2f0d3de77e3730070ad1bc4c22"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b62465c9be73318e7586f3887f148fec"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "8b566a1418f70deef56661b20ded8a0f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "52f9ec5b8baed35e8208b58dc0f633cc"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "cfa7a67d2fee98aac7401ad1ea620dab"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5a96e70eb8aa2e9c1bd58ef601eed22a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "89e8924c628ecbfdbd8a21b4a851a761"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1bd7b576cde004ec3ee6c69871160c03"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "d4544e3307f975ca787078e903139927"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "adbbf3f0300d1dc17da89e6708042e95"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "302fd42bb4292e41d1ecc710607c76ae"
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
