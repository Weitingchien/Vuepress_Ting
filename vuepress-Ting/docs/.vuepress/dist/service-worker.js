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
    "revision": "2032e6d29c02b93d7a0ef6db1f7689b6"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.6dec696e.js",
    "revision": "e27180958ea0f79b791dd490a3cfc568"
  },
  {
    "url": "assets/js/13.b4d14af6.js",
    "revision": "4659e29c79b705dc02bb5b8c981c1879"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
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
    "url": "assets/js/17.5708cfe7.js",
    "revision": "5a02e0a01633374b0529f42c0cc56ce7"
  },
  {
    "url": "assets/js/18.04e2cac4.js",
    "revision": "7408c620440f16bca75ebb785dacaaee"
  },
  {
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.1c418a7c.js",
    "revision": "2fcea2412b16d68b371f598aed5e0648"
  },
  {
    "url": "assets/js/21.f791c179.js",
    "revision": "525c90a30cd45ff5bd73cb7acc51dbb0"
  },
  {
    "url": "assets/js/22.bdfdaf69.js",
    "revision": "bbcde53a3dd8c15cb34ca32732cc9ef2"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.0a4cb037.js",
    "revision": "e0c26037c4f61657346f3aea6477f25a"
  },
  {
    "url": "assets/js/25.b0de9949.js",
    "revision": "ad425b6bd0cf04de7f0232f66e0314c8"
  },
  {
    "url": "assets/js/26.52ad3678.js",
    "revision": "770f795052d56375acffebc874cc3452"
  },
  {
    "url": "assets/js/27.17188752.js",
    "revision": "384efb7ef9ad238b9e265c335fd2b980"
  },
  {
    "url": "assets/js/28.c41aaef5.js",
    "revision": "2c31ce918adb3074e3f34285d1eb00fc"
  },
  {
    "url": "assets/js/29.b168b5c8.js",
    "revision": "f1e533e4fa76d5919f958e7ab9b337d4"
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
    "url": "assets/js/app.1ea1157b.js",
    "revision": "23ba214f8e66bcee5d1070835f3a6d4e"
  },
  {
    "url": "index.html",
    "revision": "9fc06507dcc0e107ab685284669144f1"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "651c9c241afd4063035046100366c386"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "7167763d85b9ec17464856e5786ec66e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "511c108077e8fd3395e51892404ce1c5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b849032cb49906ab301a3d9ced85a234"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e45ca27353e167eeaa0068978ebdae7a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "96dd6e1831f33290a70fdd67c87462b9"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4f4ae848066cd04b0c6341d8fbf13fd4"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "3ca3df7a6eaee8cfeeb83b70ce6f4ed0"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8be04bc817a7834a09d92f6c443cc716"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e9bf07e0b5ced5b5f229e5643546018a"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ed39eaae622233671b0e26b998a44d94"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "2a7b9e74489cdd9dcb2c3d486b5ad970"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3c65810bb349aa62e08161117a8992d3"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "30ab01b1579c20492ee5512d460465b8"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "446613d86a6465324185f5b727a1a682"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "5b4dfd9f572685c0fb86a3f78d5d452b"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f2a9f2a9797818fce548c5dde631a357"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c4134d577ffed9e258093b76a8bea24f"
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
