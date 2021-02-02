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
    "revision": "a349084dcbec850db3ecfb593410796d"
  },
  {
    "url": "assets/css/0.styles.7f133768.css",
    "revision": "8c09f52944c2031184dc7a72b4af1245"
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
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.92d290be.js",
    "revision": "783c3789934f0fcdff2eb6aa3b996fca"
  },
  {
    "url": "assets/js/17.14042ac5.js",
    "revision": "b16c55908aeb0901944ca48315629242"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
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
    "url": "assets/js/20.6dc2dd0e.js",
    "revision": "e37aa7d6e7d197c88a715efc20d003e5"
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
    "url": "assets/js/24.1db4d140.js",
    "revision": "4cecb529fdcdafb2f4221c66562452d7"
  },
  {
    "url": "assets/js/25.68b2c7e8.js",
    "revision": "6a6f27e3a745f26aec5d2674be51260a"
  },
  {
    "url": "assets/js/26.52ad3678.js",
    "revision": "770f795052d56375acffebc874cc3452"
  },
  {
    "url": "assets/js/27.d445d9f0.js",
    "revision": "64ef7e5e80035ad3e25089aff29a881e"
  },
  {
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
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
    "url": "assets/js/7.e4edf25a.js",
    "revision": "abede7770fed24b37fc0f5e45d8daed1"
  },
  {
    "url": "assets/js/8.8d2fb1c1.js",
    "revision": "548d521502a8eb6c184d9a11599b4e8f"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.2ce32061.js",
    "revision": "47b1140a4d6968a75c50ec25bfeaafe3"
  },
  {
    "url": "index.html",
    "revision": "4d791b2a8de46d370e4ffe4cd3fa831c"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0a74eb8d3ef1bf458ca97963d1179724"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "13dfbcdba41a8c436b94d25a1b3f7036"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "cc0f39cbe6ec9f3a175f293c86ac814a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3ed7330e44c522efe049246fe9fac8bb"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d3b8ec2378d6512d394333a266380db3"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b90b8b28709e1be6cc0ffd9ded7e753f"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f07a074614e6e5bb1c9f828917919c53"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "d882700f40b9c8e1314b7e490bd4a8e4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "82dce775373e2a0e5e6bfe89e82f4fe1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7354d9f1e178c7db44e593d41c55b7e4"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "60d2106a8aab8342e0032b539314ed3c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "0e32dd99d7c5ac1b8c5d466ce9542d34"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a95732b268b37959e5138823500e308a"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8871272406ff1a3360e84038e13d0ecb"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "bb893a72194da0c26e978fc43915ce1b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "8f66b2b837b8ec7d54ccf9d3382cae94"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "c2c1248608ee2dcd5ec1d061fb443522"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "ce146b09f89f546ad0bfb26309ba97b7"
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
