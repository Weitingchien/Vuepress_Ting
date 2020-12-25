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
    "revision": "8351a962caf033bede6f669b14195109"
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
    "url": "assets/js/10.d7d74967.js",
    "revision": "6ea9a02aae7cb0bb7e77eddbd6136437"
  },
  {
    "url": "assets/js/11.0ab169d4.js",
    "revision": "be4e800ddf2a209ddadba70e4028c4e2"
  },
  {
    "url": "assets/js/12.bf213e3f.js",
    "revision": "9b1106bdb1656b93e57e9652d9dbec49"
  },
  {
    "url": "assets/js/13.98209747.js",
    "revision": "514aa0e71b0682db9c089b2f083401e9"
  },
  {
    "url": "assets/js/14.21f7cb30.js",
    "revision": "5cf7ad603cdc2a2df9455aebd83ba41f"
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
    "url": "assets/js/18.fc770b1e.js",
    "revision": "000c2896c979a1ce1e721211437ae54c"
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
    "url": "assets/js/20.32e44c9d.js",
    "revision": "f2656868474d8ca2d9e299497c167a69"
  },
  {
    "url": "assets/js/21.0e1e84a5.js",
    "revision": "b20fa70f336081b9c22a6831557860cc"
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
    "url": "assets/js/app.fd6f63f3.js",
    "revision": "ca960b7005e7ea5ac88a69271bba750b"
  },
  {
    "url": "index.html",
    "revision": "b8ce1da6317c1b5553c3ecc7297ddde8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3980e30447a970d9599633c5b466b3fc"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "fe827a52c5d304431b2321871766b2ba"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c02b92237c34d788ea0f419c41194d28"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7ed40d0ece48d3f045b3951b7c586418"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "cfff51fb31f1c8ff21c41f0a07b1158d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e49a97db2b09a7a5c7b55d3e0b9e4477"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "dc745c3a8c3903a276d81607738da1da"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "7fbe55fc817c6fb462daa3ff6dc3f297"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "72f70b9bab49b0df185adbde2576b238"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "8364933351a5d5217a9e8cab8e529fa4"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1e1e8e7369823b7b4c883bdbc5230919"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6b3e0737bd47a2f6c847a0ee99381e61"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e52eac9d931460ed37b87a0f74117bf4"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "48cf825823487092b0f4861eae6306cb"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f48813dbcfbb9c22b04c1e2a33120cff"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "c7b72d069f4829847ebf94cb96a6dda5"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "ec396da33e0e68e09db9e6d2abc46e03"
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
