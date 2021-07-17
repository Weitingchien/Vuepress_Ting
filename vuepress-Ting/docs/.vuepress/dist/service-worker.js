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
    "revision": "90fdbacf2f34e48ea3ef3a513a15c347"
  },
  {
    "url": "assets/css/0.styles.bf9856b6.css",
    "revision": "9c5032b770d86fb22baabc9f08bf46db"
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
    "url": "assets/js/10.76436528.js",
    "revision": "b6906936a7154ad7491773d35a0cd6ba"
  },
  {
    "url": "assets/js/11.66e0efd9.js",
    "revision": "db8e4045e54b22c0c91019accf4679e6"
  },
  {
    "url": "assets/js/12.95325169.js",
    "revision": "5e86b7cae5e7d180e45c89e724dea5a0"
  },
  {
    "url": "assets/js/13.82b086b8.js",
    "revision": "6e80c7d233caecc46c190d27d3fe9f01"
  },
  {
    "url": "assets/js/14.3fd47b75.js",
    "revision": "78294c05808efb72e305be8814ec5dd7"
  },
  {
    "url": "assets/js/15.cacbe7c1.js",
    "revision": "315a1cde29753651830c15ff6e0bf55f"
  },
  {
    "url": "assets/js/16.b195e23f.js",
    "revision": "0c478a636e36c73109fd1f68218a47c7"
  },
  {
    "url": "assets/js/17.a5b8869e.js",
    "revision": "81ec177005b82b0fc97cefef380f98e6"
  },
  {
    "url": "assets/js/18.3e36758d.js",
    "revision": "8a31ad46b5ab931021fbd99d47d937a1"
  },
  {
    "url": "assets/js/19.339889cf.js",
    "revision": "64379f1ac7d2898309b210936b22d214"
  },
  {
    "url": "assets/js/20.f3bd4816.js",
    "revision": "40343382ef220661a850089c701d9c2b"
  },
  {
    "url": "assets/js/21.06f7a014.js",
    "revision": "36b528240b7863e6c2fb0a6b38cba262"
  },
  {
    "url": "assets/js/22.1af2b4fb.js",
    "revision": "1d787449f49e8ce9af9d89f5bc7d9a4d"
  },
  {
    "url": "assets/js/23.39ee7d38.js",
    "revision": "a6080c8e9954c4cd9435e80bfbf168ce"
  },
  {
    "url": "assets/js/24.06d1e7bc.js",
    "revision": "b2474032ff63fb50e2b59c2f00cda960"
  },
  {
    "url": "assets/js/25.ec6f0851.js",
    "revision": "b3d270c52cc4d75f48647496c9747c99"
  },
  {
    "url": "assets/js/26.541966dc.js",
    "revision": "b542c26dbf58b0b20c880746a3f74f99"
  },
  {
    "url": "assets/js/27.440c825f.js",
    "revision": "49b56a6e6d16a0b8e70d9e2fdd930b44"
  },
  {
    "url": "assets/js/28.37db889a.js",
    "revision": "47a536c35ba1a4ba1636ec54df4f97b5"
  },
  {
    "url": "assets/js/29.573ee4f8.js",
    "revision": "27ec2f96d6b2a3cf1447fd6c795c0954"
  },
  {
    "url": "assets/js/3.43a3e45f.js",
    "revision": "ccd5208da5872e0218aca39eed6b7ab6"
  },
  {
    "url": "assets/js/30.b9aa6ae9.js",
    "revision": "ec7f4f4e51eee9adb91d11ad32abb333"
  },
  {
    "url": "assets/js/31.469b65c1.js",
    "revision": "555ba4c5d8a1b464830654199fb37144"
  },
  {
    "url": "assets/js/32.5bc2f917.js",
    "revision": "bd524f963edb79d859ed28b845e2e97b"
  },
  {
    "url": "assets/js/33.6aaf6a01.js",
    "revision": "b52880d3dbcc741b98cfbaa7b9b23896"
  },
  {
    "url": "assets/js/34.49e254a4.js",
    "revision": "780d81f902e96c89af0436e69a5332d3"
  },
  {
    "url": "assets/js/35.015f41eb.js",
    "revision": "fd9b8d99843827eaa9d122791aff2d26"
  },
  {
    "url": "assets/js/36.c53f4306.js",
    "revision": "bebd28e7b736c4d87c09b33977641c77"
  },
  {
    "url": "assets/js/37.69219393.js",
    "revision": "af42ecf92371143aa965baed924b669e"
  },
  {
    "url": "assets/js/4.b6be05ae.js",
    "revision": "3e10a363f95a6a13007cb9a6c265d581"
  },
  {
    "url": "assets/js/5.5868b6ca.js",
    "revision": "4f323794102afe5b16512d24d79745fe"
  },
  {
    "url": "assets/js/6.6c4d97de.js",
    "revision": "13dc83cde9c2ed5de822d9e25969203c"
  },
  {
    "url": "assets/js/7.cc552615.js",
    "revision": "f54d4628bc956f4fe30252cad28821c0"
  },
  {
    "url": "assets/js/8.8809392e.js",
    "revision": "8cd7e2d4f4f4cbdb73e8a2e44f9bdd71"
  },
  {
    "url": "assets/js/9.cfae2e7f.js",
    "revision": "ede9a2bea9bbcc952b531bb34e0cdd41"
  },
  {
    "url": "assets/js/app.5cfcc059.js",
    "revision": "e5e10318ec354a1c5c18c35b67b9f908"
  },
  {
    "url": "assets/js/vendors~docsearch.aeb215a9.js",
    "revision": "66b0af55cdfaecd11dcd25ea0c079922"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "dc9286859c029826a3fed5f591703d76"
  },
  {
    "url": "index.html",
    "revision": "55dd79feda023e9a59ec9473a78fea0a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c06e1f2b3feef9e321b4621f50517f39"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "76d2e4ffbaad73ef4669832d90be280a"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d0bddb4d868a2b5321d584d7a4c72ca7"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "21b5325746d775aa21801057d71553a5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d04311f6e03aa9354b0b54278ce4f983"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "1adbd5b3cedd35766221c6783a84af40"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8d3f2a0137940d0b061cdd5f72535342"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e09d97970bcc45f3002650fcfcea03a1"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "75494f69c167f4536ff75263e93c0bbb"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b1a876f94aaa39f445899a71ed607fb9"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "f4130e92164468089b0783b676405348"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "58fa0bd1f52b9a9d5549dfaabe7f24fa"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "bc105b1d59c59e85fa0c5005a8e07320"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c727c54a61df6914cb0a3dccd83cfd8f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5403b7c11749c94f4c03da43164298b6"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "52ad831e5d1e6d1cbfc32ff4e5fa7592"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "8e3f9ff4db2da92071a090b8df7a271d"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c0653fae98f6811d5a27ff547f780988"
  },
  {
    "url": "Node/basic.html",
    "revision": "b7ac66921a26a62dc8f1c579f7fc42e3"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "debc72211c7e9a87b89ccab47eefbb2c"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "5569d9a0c3fdfec44cccac9427f81e4e"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "485ef24eef5ae4a960179d58c5b46020"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "24095a75d2b8a2d76278672c9cf5c2b2"
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
