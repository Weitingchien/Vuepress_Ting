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
    "revision": "b890be60451a8396ffd3a958d0c609b9"
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
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.7013a5d7.js",
    "revision": "52ad1b5c8b861fa01fdf2b58b3d23e39"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.ec6de913.js",
    "revision": "d6eccc49a8dcc356bf0b98a7d7204821"
  },
  {
    "url": "assets/js/16.5c6cb0a5.js",
    "revision": "e1f0da034495d5f7e850adc00b431f5d"
  },
  {
    "url": "assets/js/17.2c684c14.js",
    "revision": "91e5a78bf24499d27b45e6c1eb756d41"
  },
  {
    "url": "assets/js/18.e2d18710.js",
    "revision": "77a226a5cc5581d5400cf39c40379627"
  },
  {
    "url": "assets/js/19.637f8fcf.js",
    "revision": "b1a3e94f7fefc5591ecaa9b7116c7a29"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.50997520.js",
    "revision": "81f0b3046641d175cf4ed6fd4e5def3f"
  },
  {
    "url": "assets/js/21.d3e8b49b.js",
    "revision": "8bf92571a83607fc9b7481e6e7aa7fa2"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.5af4f184.js",
    "revision": "e29c0b402283d7f406bffe717f7d3e87"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.a557f09c.js",
    "revision": "c158c1bb595eff076a06beb17a7be887"
  },
  {
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.bfc31279.js",
    "revision": "d0afe5b46917c9d1e9b0adde8797c722"
  },
  {
    "url": "assets/js/28.7c3b4461.js",
    "revision": "130154be4085c65d301788d73779fc87"
  },
  {
    "url": "assets/js/29.7a8eff79.js",
    "revision": "ae896e44e54712e09054d827b7b47b5a"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.892a4f53.js",
    "revision": "15ac8283355034491bff946000199ecf"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
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
    "url": "assets/js/7.311dd1de.js",
    "revision": "723543769febdc94589aa1d21a3dab91"
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
    "url": "assets/js/app.4c23177b.js",
    "revision": "353416491ef39114509fef38d6d0cb49"
  },
  {
    "url": "index.html",
    "revision": "869b4eeed47bf97a7a473839f145bc95"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "3a2b50c0839698f54dc02f15958c4868"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "f0a9fc0f2f271a74d6c0867d50f866a0"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2e071b4910781c310d5c7b81b4343ffe"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "9598a61fa4c6f2736221008d38f455d2"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "46dba39e171e7abc1d05c8aa9a9690ed"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e1dc7244e3095de099c50f577224909a"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "441e5157213cc39b993857dc7b48a571"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "f2c2cf000233ba0adfaa8d9370c8f8b9"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ab638fb7887ac0b208e484727be86d56"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "1971599234feacfb753b274bee6e452b"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "1e7d8d961a6e99555554b27e80171cbc"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "a298cad002824026366626d06b203ae4"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "df34cdc6e59b95bca376b78db265e5fc"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "51e9d3d4b3c04a5562684c2a7f23c776"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ba2ca66676cf66df3189af8c106bdb62"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "140995465a3bff15f9e3547bfaad37c3"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "3bc8ac008ef125e96b6c2099cdb99976"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "540206b3798e334bda88e61f8d2cb285"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "1dbfe72f5f0873c4fbbed7d0f3283397"
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
