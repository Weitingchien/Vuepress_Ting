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
    "revision": "55494d0f68cf249c92a39044e949f729"
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
    "url": "assets/js/11.1206c8f8.js",
    "revision": "b4cbcca67eb31ad02f80edc9aa07fcc1"
  },
  {
    "url": "assets/js/12.d7dab4aa.js",
    "revision": "36ca0a1d248b9065d5f85d3acfbf065e"
  },
  {
    "url": "assets/js/13.96ddde0c.js",
    "revision": "4bf9a086a834493bf863a3b7b9575665"
  },
  {
    "url": "assets/js/14.628d7417.js",
    "revision": "3da23a4a7618ebed403e99a61bc2df1f"
  },
  {
    "url": "assets/js/15.942be6f4.js",
    "revision": "7960dcbfd5bbd9e39c4af8afecad29ac"
  },
  {
    "url": "assets/js/16.cc8d7413.js",
    "revision": "277aee276fd6abd6c4cef6a44db03ecb"
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
    "url": "assets/js/20.1f44c586.js",
    "revision": "a7c4a9f22dbe85488fddb660d4e95192"
  },
  {
    "url": "assets/js/21.9a62fe99.js",
    "revision": "2726bfa7e951d4b6d59d4091c85a1326"
  },
  {
    "url": "assets/js/22.86cfa6a4.js",
    "revision": "8d0adca1c0270dae7003f08c2f4b5a34"
  },
  {
    "url": "assets/js/23.a6b43a67.js",
    "revision": "b9f23de22d75aabbc3426c837948833a"
  },
  {
    "url": "assets/js/24.4c7790bd.js",
    "revision": "cf5367c6b127d5d085ad7ca86ba80aad"
  },
  {
    "url": "assets/js/25.db77b850.js",
    "revision": "c1772a598ac39068fcf090f595eecbf8"
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
    "url": "assets/js/app.0d9b7e73.js",
    "revision": "bc425a33cd0df13f7e5f0052d6c47818"
  },
  {
    "url": "index.html",
    "revision": "ffe8fd12037e19e1c3f329d51f7afa93"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "40b232341414f3c1fbc844315c8e2661"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4cc94ee34fd24969a962af93fffd7f9e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e01d3ac0d37a599e461a1d6680fb0edc"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "64b982738a66e75488e4fadb6f791e02"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "32726c507c7808dda5a1d56a473b1951"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e57b294d9d24f7f847acf06cc7cd7b07"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4eb158d1a5dab6e851429195f551948b"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "db58d201fb0002df7cc9b42dfcc00a78"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "4f54ca3bf592dc345c8227dd3404e0b5"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "f9dfdc87606189d068713005f2c9c8dc"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "4e05706b261c4fff585426ccfb27a3e4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "4bed74ed1ac2fbfa0c93e8ed5c2c0f42"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "7869522f73f079cf136fdc4285e1a27e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0e1bfd4d16d8290e95423ac443cb2028"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "5cb365661f4a2043e78f481b9a4a9528"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b99f90c445d4140e6c62664947b897bc"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "cda59018fa123658a4ad8790a13d0c1f"
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
