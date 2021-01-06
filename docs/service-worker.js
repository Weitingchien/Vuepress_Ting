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
    "revision": "63a5aa1d612bab4960a96a770a508106"
  },
  {
    "url": "assets/css/0.styles.e6633141.css",
    "revision": "1f32aba50148da57c07fd403fd8b221e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vuejs-logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "assets/img/vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "assets/img/vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.acff9fcf.js",
    "revision": "7826b431fd2de581111f7fea8eab5722"
  },
  {
    "url": "assets/js/14.a0620633.js",
    "revision": "2dd5712ce9e1d8e795abacb8e2d24002"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.0bef3f13.js",
    "revision": "991abc627b0a17834b009d234fd9efdd"
  },
  {
    "url": "assets/js/17.5b891347.js",
    "revision": "5262d220656a8665e4d681b997bea23b"
  },
  {
    "url": "assets/js/18.8b1a7037.js",
    "revision": "daff5912b34622f754e32223f8db10ea"
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
    "url": "assets/js/20.8ac4e8bb.js",
    "revision": "1de1de405bdf4abf38834b63f4eaafbd"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.1fcd1d00.js",
    "revision": "de554e49a75aaee691bce7e0fecea010"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.49604a82.js",
    "revision": "0904b56a9362d102f8d34598216b3ae9"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.2f3f5549.js",
    "revision": "a6cfcbee2c69fc949c7eaf56db765613"
  },
  {
    "url": "assets/js/29.09fd1d5e.js",
    "revision": "987501b46e64884fb93ff6ad14575c4b"
  },
  {
    "url": "assets/js/3.c0007ece.js",
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
    "url": "assets/js/app.e84fd3f4.js",
    "revision": "d37a708c1c3c62727457c5d5386e7230"
  },
  {
    "url": "index.html",
    "revision": "22360ef0dc8f117474f55cca6c23176b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "cce6587048b71b1284d140693d960093"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "127704cb2e838fb2b4e701e4aba52b40"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "11cdc898faf7eb9db6833688b26f458e"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5ef99cb617097f57b1d2f4aedb149acb"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fe9534af42a527cc4719a581694e0268"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4e8a254a188facff8a0c10387950346e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a83e25d379a50845d11b43fc5f8f3277"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "63f6c4749e86349bcfaca1a2d585b4f1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "28fa7ba90ea07ce4be574534980d9070"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7e32b4daf6fb1590656bdab46858824c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "655ef17a3add733d453a5dff5068057e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5c8af2d77ad886e2ebb9df12e999a5fa"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "61c6bbbcc000f1e6d00b10a4a307db83"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ee5b3d8273550ad570c43ea64de9c87b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d0a323b4c258d772e4eb23eb6ec085b2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "15b09571c5df0d4785cc29361f094a4b"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0cffa57431b8806d8d1a0cf04ae0ea4f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "5201050d2b0198ab9959558cddced21d"
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
