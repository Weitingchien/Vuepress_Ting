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
    "revision": "c6e42a9aad8e2862000abf724b7bf926"
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
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.d5ec8a02.js",
    "revision": "89d8cdc0dc484bc4a4bf28ae7c5e0960"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.b32ca792.js",
    "revision": "5fc79c89b53b776d52d0386653949f74"
  },
  {
    "url": "assets/js/16.3e76da2f.js",
    "revision": "630f2ec10ab12d401a9bc477769660d1"
  },
  {
    "url": "assets/js/17.f4b91bec.js",
    "revision": "84e23abf91fdb3a402c0a8c1f786ad6f"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.215541ec.js",
    "revision": "dc5da7878fb9c4f9898c2248ef53e9cb"
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
    "url": "assets/js/21.e7db6832.js",
    "revision": "ff2c69ffad76a7a3d8da0b712b33dad0"
  },
  {
    "url": "assets/js/22.2aa5e9e6.js",
    "revision": "238d531e300f972e4a127e188098701e"
  },
  {
    "url": "assets/js/23.f4ab85b2.js",
    "revision": "3615a1d9f0d3d081057dfd38de06dbc2"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.a075e0da.js",
    "revision": "d887df39afcd4462935eadcac28594ac"
  },
  {
    "url": "assets/js/26.0fbb226d.js",
    "revision": "848836001595f70191a84adef0466600"
  },
  {
    "url": "assets/js/27.08077e3a.js",
    "revision": "0e7ccb276d59fd004e33a60a31490746"
  },
  {
    "url": "assets/js/28.b1c7ba9d.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.7cbdc209.js",
    "revision": "86431945cf016b2341254a6317026770"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.6efda52c.js",
    "revision": "dff618c4c489e5e6b36d56dfc611f6ae"
  },
  {
    "url": "assets/js/31.d4248534.js",
    "revision": "dfc63f418c23bcf3a195607fec085b5e"
  },
  {
    "url": "assets/js/32.a4d236f6.js",
    "revision": "4687bb5e5eba680d997e4fded03ee439"
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
    "url": "assets/js/7.67ce5218.js",
    "revision": "10538b3425d3e28fd2ea61c4c274cf5f"
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
    "url": "assets/js/app.b1630b5e.js",
    "revision": "9cc0f1c37a92c5a57e17033af45324ca"
  },
  {
    "url": "index.html",
    "revision": "0d2b20f87aa643e6444bfa07d4bb3da8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7b5b23350c9bcf91e59a545253b8e1c3"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4f905dffd09ae9525de7203b39236d15"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8f8070b4f67a73db7c121c81d656e8cf"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "db9b0241895e1e1d5e47bbfb4763b673"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2b00fe5064e6e19a7c380b760d6d137e"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a56a9b6d9d31a5b681057178921ba444"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "8ad54ce399489be017ec313c9317a1d0"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "881ad54482fda60b593d453e660de2ed"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "f4654d2f49ae2f9aea73cc585d0e3739"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "1a6dcc90e36c82639efd732dc3d8d863"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "4048bf419f4734aed6c766427f3d30e1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c9a31e0893b6f8ca038d43164db7b97b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "fa103a83152f9522268fb3e9bc7ddb05"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "528a80f401c8624e9a1b5a4b5842c15e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "2210e0a06571e0cb31050ec5b27a5578"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "04a270482fdf24a70f5c8c43e584b79b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "994f6fa7d1c9c9494b8490c5f0bfbba3"
  },
  {
    "url": "Node/basic.html",
    "revision": "f01e93baaf6418f7688e3579047d776d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a587143faa3d71580aec2f4b53ef770b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "910b9e361ccde1e0c0f5b4abbb63ddb4"
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
