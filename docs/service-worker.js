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
    "revision": "a0949d8c1aa9a474601d1230640e982c"
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
    "url": "assets/js/11.0ab169d4.js",
    "revision": "be4e800ddf2a209ddadba70e4028c4e2"
  },
  {
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.540b39d4.js",
    "revision": "14329623dae0fc55f07d33fda1f7e0bc"
  },
  {
    "url": "assets/js/14.3f2b0647.js",
    "revision": "30fd34c2f7f388ae647f014c6190ad54"
  },
  {
    "url": "assets/js/15.2d1eb95e.js",
    "revision": "dcade61238ddc794dbd599458f056eb3"
  },
  {
    "url": "assets/js/16.4a7080cd.js",
    "revision": "0bb77639186463e048fd997039585b10"
  },
  {
    "url": "assets/js/17.fedc7138.js",
    "revision": "75c20a653bbe0f24ac31458155df1d28"
  },
  {
    "url": "assets/js/18.cd6be039.js",
    "revision": "b4c4278e9475f0cf9bbb25293456ba4d"
  },
  {
    "url": "assets/js/19.85f6e334.js",
    "revision": "a41ee752ffee90ae1724304186e5ccad"
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
    "url": "assets/js/23.8d8ffe1b.js",
    "revision": "173241129a1c2a7fdc4291618979408c"
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
    "url": "assets/js/app.7e32f169.js",
    "revision": "1fb5e8f04c51de0a9cf30ec6dc3730ca"
  },
  {
    "url": "index.html",
    "revision": "c61fb5b1f01a0337d2a27ec51cd70c6e"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "2954e4e611faffd00a38156d3506b190"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e95f44808fab88139e4f35c1d9e79fb4"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "4d3fcebd56dbff161e83d2c4bab81286"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "8cf61166e1a08dfb889be9ab78516362"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "79f27792dfb48ac12accf88b053a24ab"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "572f581da57463c7b07c9cde61e825ba"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a409949e94355746625ac05e1eeaeb2f"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "485b180381d161e305d076b865950051"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "51f4c7daebab3256592e50cd0b39bb6b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e70ed36a9c07451d525e79ab1d1be483"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "e6ba0bc7ec78aa8c261945a54eb4f749"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "99f231c8bef980828189e1591cad0364"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6534807f4ae21f9fbdf25cb17645d1c4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "cbe44fe87e1b1f607e9fb2c77984457b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "45c6dbcc2402ada4317d2765f0682643"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e3b74785e49819d40772a62cd6ee829b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "b5699c1042e288f508f9e662705c72a3"
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
