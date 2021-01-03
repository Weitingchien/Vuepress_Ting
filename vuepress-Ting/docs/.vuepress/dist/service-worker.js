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
    "revision": "977fa49d1f6392448550ffdda42bcb83"
  },
  {
    "url": "assets/css/0.styles.510813a5.css",
    "revision": "6b3235816aa943f177bc62eb73c5f635"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9de8f3d9.js",
    "revision": "beb4a394a8b7859cb71400e4d5205939"
  },
  {
    "url": "assets/js/11.38186784.js",
    "revision": "63dd3892f14b53ff3814f2cb9288ee05"
  },
  {
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.7a941d8e.js",
    "revision": "5178520123acc8212fa2a1f328a30814"
  },
  {
    "url": "assets/js/14.e1132ad9.js",
    "revision": "460becf877b03a716a950e549822ee2a"
  },
  {
    "url": "assets/js/15.4fb5966a.js",
    "revision": "6e2f2770b88d159d7ccea2ff4c080a56"
  },
  {
    "url": "assets/js/16.cc8d7413.js",
    "revision": "277aee276fd6abd6c4cef6a44db03ecb"
  },
  {
    "url": "assets/js/17.63b8d2fe.js",
    "revision": "7f9467b98e09b2e74182d7cd9693211a"
  },
  {
    "url": "assets/js/18.87a49390.js",
    "revision": "2e01fd5ad5d23b6bbd5980872524f683"
  },
  {
    "url": "assets/js/19.b0c6fb2f.js",
    "revision": "cbe1e1ccd44eca7afb59e07d40cb0100"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.4c603a99.js",
    "revision": "091fdf8f6c506e86ec9e2d653f3bc8f4"
  },
  {
    "url": "assets/js/21.6c8b5585.js",
    "revision": "2f75eb60c76cfcdf4f56b7ea341d1866"
  },
  {
    "url": "assets/js/22.7867cd91.js",
    "revision": "aa38601aa618ba04b021afc151b9fbd5"
  },
  {
    "url": "assets/js/23.454edbc1.js",
    "revision": "0693b959f65d459b68deadb03aadd398"
  },
  {
    "url": "assets/js/24.92271209.js",
    "revision": "d842c311ad11193d40a013a1da7bffec"
  },
  {
    "url": "assets/js/25.caa6e571.js",
    "revision": "57a6433ba80b18aa0163e6134b7c1b91"
  },
  {
    "url": "assets/js/26.982b40e7.js",
    "revision": "8c2af07ce905f458b1b96b85ebbeccd0"
  },
  {
    "url": "assets/js/27.ae86d498.js",
    "revision": "026550a24c8be314384263edb5d8e59e"
  },
  {
    "url": "assets/js/28.ef89bada.js",
    "revision": "692b00f8ba6857b81834ca34a5a628ca"
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
    "url": "assets/js/5.f3ad43f0.js",
    "revision": "c73b7af210743a73e9cb82135a27bdfb"
  },
  {
    "url": "assets/js/6.a9a4beac.js",
    "revision": "beb7285711e7c5d3ac51033eb7f21cf8"
  },
  {
    "url": "assets/js/7.357a5e7b.js",
    "revision": "8ba30408a0b87747fa064583e4015720"
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
    "url": "assets/js/app.05caf3a9.js",
    "revision": "f66ce8299f8a552eabdd017e26d5be8e"
  },
  {
    "url": "index.html",
    "revision": "acef06508212535c2140873d59fafc79"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c0355be3e9ef6538d7ee1f843a3c72ec"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "04a18c25a2c56ec37d7d19e529ecffb6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "07b36d96edb9eb657183bd23b0ba93f5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "5c36e0c410f1977dcbd3410dd9eb92fc"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e03772c4c931d3db59a64089ea0b4f48"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "891e0bfdd6ebe546bcf2effc2cd52f0e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c9e8322705f9d096ddeb58cebea49c66"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "96d9dedbe21f657d353dbfd415d43e1b"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "e20db085317323a6ee3549bfd83f9545"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0509e84196194237c84b626a032a1b0a"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "08552acb15007a5aefbfaf03159d8f8c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b5a3794a912b79fa33ea7947a859b35b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "0fce1441cc9739ec958b16025e550058"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "c31fba5add9c6cac6fcf2ee129c9a868"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "6aa916139d0ff7b32dfe063208ddfeca"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ced0a2ecfa0a90485826ef094908fa76"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "adcddb61763176fe665611682ad57bd4"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7e42f43003010ebf769adb5a6a8acd9f"
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
