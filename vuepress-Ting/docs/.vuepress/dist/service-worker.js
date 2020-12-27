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
    "revision": "b51b9d357f39ec033798f199746cc7ab"
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
    "url": "assets/js/10.aad4dbd7.js",
    "revision": "633645e566726d85d0adb0de3d610914"
  },
  {
    "url": "assets/js/11.75a49c77.js",
    "revision": "12fdd8441b95e4a347c4f1fbd14154a1"
  },
  {
    "url": "assets/js/12.bf213e3f.js",
    "revision": "9b1106bdb1656b93e57e9652d9dbec49"
  },
  {
    "url": "assets/js/13.540b39d4.js",
    "revision": "14329623dae0fc55f07d33fda1f7e0bc"
  },
  {
    "url": "assets/js/14.8f8ce3bd.js",
    "revision": "f03499997210034c426959ee6e455526"
  },
  {
    "url": "assets/js/15.78d4de2c.js",
    "revision": "7e3664477cd2d17ece9c1c39b6639a7d"
  },
  {
    "url": "assets/js/16.92b49ec0.js",
    "revision": "f8d67f32028017f8a7fd7d86d77c0687"
  },
  {
    "url": "assets/js/17.63b8d2fe.js",
    "revision": "7f9467b98e09b2e74182d7cd9693211a"
  },
  {
    "url": "assets/js/18.3d4c95a3.js",
    "revision": "85c005801edec174cc67bb9d6a211414"
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
    "url": "assets/js/21.08bc3a79.js",
    "revision": "e1d2d227436b488345df9f513ed72559"
  },
  {
    "url": "assets/js/22.86cfa6a4.js",
    "revision": "8d0adca1c0270dae7003f08c2f4b5a34"
  },
  {
    "url": "assets/js/23.39a45a67.js",
    "revision": "c1ac3bb73cafbee59ddb1816870b0180"
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
    "url": "assets/js/26.4264b9ba.js",
    "revision": "86cda4a200cddf96f7e55c522ae6835f"
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
    "url": "assets/js/9.0e9052cd.js",
    "revision": "69b8a925ba3e5fca5325e29032aa9b2d"
  },
  {
    "url": "assets/js/app.8195d4d9.js",
    "revision": "62311f0755a4c160d18d017dae3947f7"
  },
  {
    "url": "index.html",
    "revision": "c33a2e67ca5f2a87698c7059857b71d8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "5e9e0870e53ec3152ebce068dfbc191f"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "7cf9719df69f18df8c8fb4a573da895d"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "11f6f81cf1dca1123dd54a317d616da3"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "61531324a874500bc077dd13b8d9ddb6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8846ecbd52e1654aac0ca6c3d8964880"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b3751a853aa4be8ae74c8e0b60f2d2d9"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "fe93efab17a7b663b7d23ec8c7e1be00"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "072aa3774b5cf0b988dec4b5a8b5965c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "533859048f95fc87ec3a295605472e7b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "69ed0c6583548b09e8ab8ca5e7e6bc9f"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5291139bc147c4c7f97dff64ea8b6ce6"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3c8489d4b355286bc7a69a1b71ecf11a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "98c89079eb3647a431225e678e5dd7e9"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "030fe4f7168e838399e488d80fbd9e03"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "4d8ac4fdbd46382d0b34bdd07a616994"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f245b57c666d313704f9060bac164e5d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "fe760a2501006be08f24d8ff294cc171"
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
