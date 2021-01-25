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
    "revision": "37f7017e9bb34fafd4ec5d0d85b2d056"
  },
  {
    "url": "assets/css/0.styles.74a4d2ed.css",
    "revision": "40bec2c5fd4ea6e98960d88c6ec33b27"
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
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.1c7601b9.js",
    "revision": "151031576aa6830f224d59d261717c7b"
  },
  {
    "url": "assets/js/15.ec463772.js",
    "revision": "33c3ad19b8a64d368ae0fe12583dd983"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
  },
  {
    "url": "assets/js/17.a1efdc2c.js",
    "revision": "a85243c234608006d2161d4b8c6f53c6"
  },
  {
    "url": "assets/js/18.4fd5f62a.js",
    "revision": "bd6e3ed1b89d9efc68db630f2ca1fcb7"
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
    "url": "assets/js/20.ddb39110.js",
    "revision": "ff1be9aef352ff5c06ab450130b36e8a"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
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
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.6eecde5d.js",
    "revision": "a501f06334c9544cc335e62614c12cb6"
  },
  {
    "url": "assets/js/27.ecffae88.js",
    "revision": "f8124364595ffc300cb420efae63356f"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
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
    "url": "assets/js/4.92051216.js",
    "revision": "51baa684f4ab90af77880df5eae3792b"
  },
  {
    "url": "assets/js/5.d1850850.js",
    "revision": "5d2e2008d48691fad115c18c45541325"
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
    "url": "assets/js/app.0002638e.js",
    "revision": "a0dcc73d31afee9139a06cdefc514f90"
  },
  {
    "url": "index.html",
    "revision": "0cc16252c80e93864c088e1d14422a9d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "38159b97d754f4e6fabc43de00a1425e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e1fda428970421ea28529e5168803338"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e510ac14790341f69b1b46757fcd6df9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "fa3e4c01d928ffc0193e585950881492"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2e2a82fcacf4a705982e689a573e4060"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "74aa726e15f7ed1e71cd538283846bd6"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "bc5746e971f4546fd547697cf7c1ceab"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "8addfaabe50ec50a8c676ac95f939676"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "6ee77b0a14c2953c7e34488c5fe81cfa"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "763fecef511abbe2a23b3447b0dc84be"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "d2cf918531cd0286bfb01d9c056946eb"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ccc05d4f6270e716ec162c4dddc6ba19"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7c2107703d20baf244b19b5bf2d5508a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3b0e58988294747cc6bf1653598dcacf"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "166a7774f6153196e473f0a3e5820983"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "392e26f426b5055e16978a76ba284965"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "4456f6f0d2328bbc9a7905bac498c69b"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c90ff780968fb7ca7b40e4f7a26f7478"
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
