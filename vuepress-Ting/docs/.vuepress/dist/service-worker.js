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
    "revision": "92340dd576adeb81a9b69922c66d8787"
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
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.d0e9dc9c.js",
    "revision": "d5141c45b682256e844f4ba6cd7b7022"
  },
  {
    "url": "assets/js/17.ffcaf866.js",
    "revision": "337ae217567ae48fd86c47b5498f6f3a"
  },
  {
    "url": "assets/js/18.58a17586.js",
    "revision": "88068037775a637278f32285fd71f6b2"
  },
  {
    "url": "assets/js/19.62acc159.js",
    "revision": "9cb2ff4d10a6c11c4fd869c0c4cfcb70"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.39fc09de.js",
    "revision": "7a445a528fc8ee805e51891a27f0fb40"
  },
  {
    "url": "assets/js/21.f4f4b103.js",
    "revision": "61491aa60c114afec10a5cc6969c0271"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.2fbb3c67.js",
    "revision": "4e788262829d9c7026fa3f0e5ddb4832"
  },
  {
    "url": "assets/js/24.d6a9df7a.js",
    "revision": "745acd2c85c603e36020b307d4f2d9bb"
  },
  {
    "url": "assets/js/25.1feb5c4d.js",
    "revision": "41d8c863ed929d12f47193ea6beb9ce2"
  },
  {
    "url": "assets/js/26.5b92f9e9.js",
    "revision": "a25e0f24ac8db7dd1a74f49b6adb9e46"
  },
  {
    "url": "assets/js/27.c0eb8084.js",
    "revision": "98f73e3735b4070a879c409b942517b9"
  },
  {
    "url": "assets/js/28.a254c5c2.js",
    "revision": "215dd99735029c51e7e12d5643588b44"
  },
  {
    "url": "assets/js/29.d7c955e3.js",
    "revision": "cb04ed019d9326703c335daf0c813926"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.949071bd.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
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
    "url": "assets/js/7.a3ad9c33.js",
    "revision": "fbc890034f685aa8b0ea65b808878137"
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
    "url": "assets/js/app.3407c92c.js",
    "revision": "37e1efcef1981b16f7a914fdb7b0e21d"
  },
  {
    "url": "index.html",
    "revision": "c370ea7d5f987225b14d8274fcc89cae"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "16cc477d925eab3d604e6c8bc7cadb4a"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6d02da88214f209b3e012e7323723f89"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "9bdece28254e6b3bde0d747bb0607db7"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2ad9038b39785223b5384c8f053787b4"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "81d5a28e41eb55f3a42f872ce7dd1555"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c499d5adc14e2090d71c6be70ef664f1"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "d44b65a7631d1323ece33773d450089d"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "3cfa8987d2adc09238de2b5fda762f87"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "4703913b1614a06ca796e8891a814995"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "71b27bffcb6af3e6b31295d40756af09"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e2797e62ef9f620a4e91cc540a3b2e7b"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "dbf64957d795124924bf397bf837034d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "790b8c86b6d92e79f096b0cd63edbf4e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5091ea3366f691df66f086b540251e94"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "7ac6140ae0ded9cdd48cd75bfb82906e"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "41cc39cf058ef3af9de1ff5afb0fc82d"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "726dc3f3fad486cfd95b1375caa88917"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0b2e7847e16441aca3e7760d0fe56de7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "9ba4e0d4bf7439da35d69adf4cd6c229"
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
