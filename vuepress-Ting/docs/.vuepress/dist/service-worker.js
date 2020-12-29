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
    "revision": "0dcbfbdfc4ff178ef2b98eafa78b0d0b"
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
    "url": "assets/js/11.5998cc8d.js",
    "revision": "f0a59b33905dab1c0f39403ec5c06ed6"
  },
  {
    "url": "assets/js/12.5cd4b6b3.js",
    "revision": "cdeec5b9baaf16c7a70491552890179f"
  },
  {
    "url": "assets/js/13.10dd5b57.js",
    "revision": "73cd2555aca0991e5a7301b3b78c5723"
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
    "url": "assets/js/19.28c38aa4.js",
    "revision": "c72f07f6d22e56d8a5ed1eacc4dad007"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.b272054b.js",
    "revision": "0f06eccc6b7bd96e1f4ff7741663f575"
  },
  {
    "url": "assets/js/21.9a62fe99.js",
    "revision": "2726bfa7e951d4b6d59d4091c85a1326"
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
    "url": "assets/js/app.9836cf7c.js",
    "revision": "579f6f7f24ec780b4b7435a522ef9bd0"
  },
  {
    "url": "index.html",
    "revision": "5a9cc66b32a78168842b724acf854bfd"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7dfa92a9d86ca6284d8b64d0b1c8808c"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d101fd1e6dada2be83b3430e44e2abfc"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "df2b97051fdf6da4883208b416459a4d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "4bf8ec9682aa248fd78be13a1a832038"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "509b983c0f1c9c80f816b2e16f923485"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "97f6ae311f0a350ddda6b77a14794ed1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "0550fb7d13243b9a5f73185eac58706d"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "080cf08d368ac15886166ff0d04edbf2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "6a5bbecd670973bdba555ca9c42853d2"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "f3b76ac5d278e2817dfb6172b65b2c1b"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5415f94cc35e9eadbd48a094c5377cc3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "ce43b73d4258e0c8877edaabf3a38c87"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "efc2202d59cd598ea3b086cef7cd8143"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "fa4a52dad10aba2d4be0b0194a6d320d"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9ef1a3ba7986aea097ea2c5fb5f24620"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "20530c91a025eae9ee895e1fe1593c39"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7125dcf21d0528006a03c7a9d48fdf88"
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
