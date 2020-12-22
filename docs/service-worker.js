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
    "revision": "8af0b0ce7a2ae3863975c01b78244e7a"
  },
  {
    "url": "assets/css/0.styles.64dc47d0.css",
    "revision": "f163c8bafee3c5b68a5e5f64e452a53d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81b40eca.js",
    "revision": "347cc4b86acc475521d3e3424a290ec0"
  },
  {
    "url": "assets/js/11.a52111b2.js",
    "revision": "edb553301980d88ca3b3008bda46f8a3"
  },
  {
    "url": "assets/js/12.3960054d.js",
    "revision": "8cdc9c57e3a521d952ce79186a770ffd"
  },
  {
    "url": "assets/js/13.540b39d4.js",
    "revision": "14329623dae0fc55f07d33fda1f7e0bc"
  },
  {
    "url": "assets/js/14.ca5e86f2.js",
    "revision": "9aef9af06effaac46a08428875854f51"
  },
  {
    "url": "assets/js/15.2d1eb95e.js",
    "revision": "dcade61238ddc794dbd599458f056eb3"
  },
  {
    "url": "assets/js/16.b124e2c0.js",
    "revision": "c96962672c41d60ec9b8a118f6030bd6"
  },
  {
    "url": "assets/js/17.91e0466f.js",
    "revision": "7d6dc189ff47c064b49a71762340bbc9"
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
    "url": "assets/js/20.1f44c586.js",
    "revision": "a7c4a9f22dbe85488fddb660d4e95192"
  },
  {
    "url": "assets/js/21.9a62fe99.js",
    "revision": "2726bfa7e951d4b6d59d4091c85a1326"
  },
  {
    "url": "assets/js/22.6789428c.js",
    "revision": "db1d6c2f1df0e48a7b9064a5157e698a"
  },
  {
    "url": "assets/js/23.f4cf3f74.js",
    "revision": "d7b6560479d4e9b044b43e70b9c9a17b"
  },
  {
    "url": "assets/js/24.862e7289.js",
    "revision": "c0c49919a38dae2c4daced8154b526a7"
  },
  {
    "url": "assets/js/25.9fa8969a.js",
    "revision": "8c63d234a7516ef1cbc01c69f6dfc850"
  },
  {
    "url": "assets/js/26.86bf2207.js",
    "revision": "713697b4182af5c73f951253cb586735"
  },
  {
    "url": "assets/js/27.aeec6b72.js",
    "revision": "16173beed26fa981eeed3002ecb64299"
  },
  {
    "url": "assets/js/3.4e979fe2.js",
    "revision": "6f183a1484e4f3e95f48fa31ed69e3ab"
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
    "url": "assets/js/9.e5e91997.js",
    "revision": "ca54c4545acdafe4c94be0aed8f2af17"
  },
  {
    "url": "assets/js/app.5847501f.js",
    "revision": "4ca735d7bfefd638554703de7e668858"
  },
  {
    "url": "index.html",
    "revision": "057d4e8d890918313649794c3f59dea4"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "a1255b4e9fbdad0914ddc8d9c0041691"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8360913e6d77a6ea10f1aab0f445e4e6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "5f43360db8422e58a47df46ca597cdac"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "31d493166662a28f8012c0d9929e12c7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e02300f9d29e790627115fdc1db3eada"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "0da203cdf405abfcc19bd94c54127aac"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "b64633c655aac570ea04969140d64d87"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0b593624fce2c61bc6e3e3aa2a606b2e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "3e39973b0ad505d547dea1bda671a29d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "db2b65599f40d3762e594530a6915557"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ab5d92670e185aaa8d677aae8c5ae6dc"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c01427f4168a73bb61f36e791e9f6328"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3d3f7e69222a86ee608222c0d4240016"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e79c10e01609ae93716698a672797833"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9f90b3f118786e4ba4ab56317da270d7"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "deec0efd36b17c52244f780e0f25d3a4"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "2548615fcf6a0dc65f83782f9f310b96"
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
