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
    "revision": "cc25a5bf7765d99f4f3dabec3bb249df"
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
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.acff9fcf.js",
    "revision": "7826b431fd2de581111f7fea8eab5722"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.feadc359.js",
    "revision": "569225f5a8d15ec26d1438fcfc2ae221"
  },
  {
    "url": "assets/js/16.34e49f69.js",
    "revision": "6706cb8f9d89d9c4c5ae68cb0893e49d"
  },
  {
    "url": "assets/js/17.451ef8ed.js",
    "revision": "b501827d9fda6973a48fd5baaebde430"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
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
    "url": "assets/js/20.4a097f14.js",
    "revision": "d83ad5bdf3cd7a4e20986b28e7687c8d"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.63c6bce0.js",
    "revision": "0859ed45fea25c578744c6bd38eb602e"
  },
  {
    "url": "assets/js/25.cca6c446.js",
    "revision": "3124241bb9ac6ecbefed8ca421a32358"
  },
  {
    "url": "assets/js/26.52ad3678.js",
    "revision": "770f795052d56375acffebc874cc3452"
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
    "url": "assets/js/app.0a829301.js",
    "revision": "b706ef6961a2184b5cfda517865f714d"
  },
  {
    "url": "index.html",
    "revision": "b362e0eaef2ce8b0b33b673fec8e662c"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "109acefe86d02f243b97bbe1e12ee434"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b2fd792e18a0c0f85c2881d2686f800c"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e0f7d58e6a15609e20602fb517a06cad"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7f4dca4004ada61e9c8c51f562c77252"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "c00fd200ae4a2467f059a2870f0fdff8"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "d92fcaef8763f93d9ab7dbf70fe390ab"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "16d15d79f127fefcf7c0c97096bd76d7"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "dd3ecf222611dc8aa8011c24b8ddd5d7"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c16c102a5b5fee39f1ce7f2b267e367b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0f078b8f1ca6b2580b002f2b6f0158d2"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b3321751a68cb06b523128babcc5363b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ecf83877c593239aea9d39afe4314053"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "e10cef36879f6fb85ec8a1af94f0a46c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "259257da978a893caa291ee48e105047"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5133743ba06bac98d267e2d8b98a11c2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "151eaaa7b5be8036ebebf7f5eb1028fb"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a87e03e9b3215d9a3a49d7a71ca969b5"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "48e236407b175c391710e1ca31cbad9a"
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
