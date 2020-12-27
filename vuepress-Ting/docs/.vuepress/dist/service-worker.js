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
    "revision": "a5a4ff4d07de61dfb9b10352bb765e53"
  },
  {
    "url": "assets/css/0.styles.716e2279.css",
    "revision": "b45e464f90fe6a08d3d14e45e47f05e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5b09b6b.js",
    "revision": "b6e359efd5ec92252989ced6dbb8c9b4"
  },
  {
    "url": "assets/js/11.59525a0d.js",
    "revision": "e291a41ddb6c08c948fb960b1a2bf415"
  },
  {
    "url": "assets/js/12.914d7d3d.js",
    "revision": "97c2d9644be9236994dfabb3cf96c337"
  },
  {
    "url": "assets/js/13.98209747.js",
    "revision": "514aa0e71b0682db9c089b2f083401e9"
  },
  {
    "url": "assets/js/14.d16535c4.js",
    "revision": "43332cfde7845cb8c9c419c769dce508"
  },
  {
    "url": "assets/js/15.d281f73b.js",
    "revision": "872bf650b53e8410108c19e7fd35299f"
  },
  {
    "url": "assets/js/16.69fb4477.js",
    "revision": "b1bd56044a44dc46ad0b8a3a88b5cd15"
  },
  {
    "url": "assets/js/17.fedc7138.js",
    "revision": "75c20a653bbe0f24ac31458155df1d28"
  },
  {
    "url": "assets/js/18.8ea8ed3f.js",
    "revision": "72c05e99a2f6c1c677794a0a10341b73"
  },
  {
    "url": "assets/js/19.db49b9b1.js",
    "revision": "7730543a6317cb8803cd47cfb31c1aa2"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.32e44c9d.js",
    "revision": "f2656868474d8ca2d9e299497c167a69"
  },
  {
    "url": "assets/js/21.b7229cc6.js",
    "revision": "fec98cbff41977c5aef32ffc95acf4f2"
  },
  {
    "url": "assets/js/22.201250ed.js",
    "revision": "d2160d98a115cee524c5477ab4ba833d"
  },
  {
    "url": "assets/js/23.a6b43a67.js",
    "revision": "b9f23de22d75aabbc3426c837948833a"
  },
  {
    "url": "assets/js/24.01a01738.js",
    "revision": "6ea0d5749eae7b553a5acef53cd19edd"
  },
  {
    "url": "assets/js/25.1fae29c4.js",
    "revision": "e9727cfea28d4f618dd7194b46ac16a0"
  },
  {
    "url": "assets/js/26.b576705f.js",
    "revision": "9b7ae8172a0c14adce0cd3953ef0a11a"
  },
  {
    "url": "assets/js/27.aeec6b72.js",
    "revision": "16173beed26fa981eeed3002ecb64299"
  },
  {
    "url": "assets/js/3.02bb17f7.js",
    "revision": "067fef848a1c5f16c59662064bed8714"
  },
  {
    "url": "assets/js/4.b088725e.js",
    "revision": "53c5036e16fe6bafa247c196f7ae7b83"
  },
  {
    "url": "assets/js/5.5b20e35d.js",
    "revision": "91cfd4a83e8cbf9145dde2b1be69d7fb"
  },
  {
    "url": "assets/js/6.65910c0a.js",
    "revision": "76f1bb90e660c4a8f9f9dec03aad8241"
  },
  {
    "url": "assets/js/7.8cac0113.js",
    "revision": "5a6dc05de39fd2900e37b51d03038380"
  },
  {
    "url": "assets/js/8.3f3c386a.js",
    "revision": "7c08ae7dc722cf61603374b5f709f646"
  },
  {
    "url": "assets/js/9.b1730dff.js",
    "revision": "d68ec6a5c77e2964583a1cdd07a4beb5"
  },
  {
    "url": "assets/js/app.b1ef7408.js",
    "revision": "3d68a11403e7f9988b073e616d5847f2"
  },
  {
    "url": "index.html",
    "revision": "4ec61cf28712a9810ae0c6e319b4d1b3"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "a5ac89670481b5ea6ee0a5edc178b25d"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "432d900fa8266bf846f8b2d6e4df924b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "aae5301c6bac988de243ffdac3bfd216"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6300745854e85f45dafc80d0b1601672"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2ffe43c0ef6151c9b551e9be85842470"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6fc10d7dbeadbcf46bddec9fc98d8bf0"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5836422644b11f49d31f850534f4d9ec"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "5f01fb60c060508698673163ffea9f49"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "f989c14ef9671ec6387aecc96480a1f8"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "cee4abf27ee26829e1cd6c96ee0ef410"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c5ea43aefa4593dbed1dffe57653dee3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "8f24a693bc2bbec86c23badbd043755c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ff92cf9a919810d2fb401eda43d6e2fa"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "516ae78717e6a9dc7cc80c3a5ede1fb5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "71e43584d24bbae5b8aaaa3242544b7f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "19df40ff6e16fda0ec2c101c1c49bdd3"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8f837fc8a7d0fe903ed0ec0230a2b55e"
  },
  {
    "url": "vuejs-logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
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
