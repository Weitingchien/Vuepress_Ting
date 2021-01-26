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
    "revision": "55026b7abafb5f71016626d8674c190e"
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
    "url": "assets/js/11.d61bd4d3.js",
    "revision": "97935ab868c6c555a74144c3f9febbed"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.04692178.js",
    "revision": "c6c595811b05a23313472de154e73cde"
  },
  {
    "url": "assets/js/17.32576081.js",
    "revision": "a3012f8b6212e5f4dca0773d0ebd9103"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
  },
  {
    "url": "assets/js/19.496533e5.js",
    "revision": "3cf9e4ff8bf3374d39313f6dd2df0767"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.22ec3981.js",
    "revision": "a6980627185b6e42fa893cf87e7ff4c6"
  },
  {
    "url": "assets/js/21.f791c179.js",
    "revision": "525c90a30cd45ff5bd73cb7acc51dbb0"
  },
  {
    "url": "assets/js/22.6af61cdb.js",
    "revision": "afbdd44478886e0cc34614d8049b7e69"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
  },
  {
    "url": "assets/js/24.d9029438.js",
    "revision": "c996e03c66ffa5b53729cd921bcbaa2a"
  },
  {
    "url": "assets/js/25.5dd3e63a.js",
    "revision": "c511bb52c6dee177c1e5bb790d5ef82d"
  },
  {
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
  },
  {
    "url": "assets/js/27.232e1570.js",
    "revision": "af26fc05088d8d7d53a4a0e846e6caf8"
  },
  {
    "url": "assets/js/28.1c81415f.js",
    "revision": "8aebc1830575a3fd43717596b1059473"
  },
  {
    "url": "assets/js/29.5abff2b7.js",
    "revision": "8e525d1796ebc4d2c24bac97d4bdb70f"
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
    "url": "assets/js/7.7025208d.js",
    "revision": "04b78f3f1da0c6bfd922f8170ad5ba30"
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
    "url": "assets/js/app.417ad04f.js",
    "revision": "c449d594b1ef8f825f2e835b84eeba80"
  },
  {
    "url": "index.html",
    "revision": "40630018b4ebf660823184ee744a43d6"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3f290b78b7791964bffc2e1800ed67ba"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "76c4aaa0e8e39e1758d977676a6f7c6c"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "47d97c52e8a9e473946cd32eba8bd013"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "ab50284acdc5fde0b6492333977d9f12"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f797df7ed40eeac8e7e6c5426f761c56"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4aaaa0291b9775490832e0404ec4fd41"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2e4583f2ca5caa86db5b817c06be6507"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "84175d929975a8cdf52b9fa8caa89d19"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "ce0d86bbb58c612f75b568571de6d974"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "29caee6a20dc62fd36c00918871c6faf"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "cbc4bbb36269841f421adcb2cdfd4c48"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "4b597e38afbacce5ef8a0a7927f9b6b6"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "ed6c90d36bbf9c882950c5719d678eb7"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "26f984f0f1518e9c8d972392223389d4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1fe2e0e67fee8a404d2b0e2c3dac49dd"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "499934248c3088ad1011efcef261513f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5a2a1b16505e1de86ff7c93740b54bfb"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "315b5324550b0e2f71e21691015013d4"
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
