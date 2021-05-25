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
    "revision": "cc9c5f4ae59c9221924cfa92987f408d"
  },
  {
    "url": "assets/css/0.styles.5e509d99.css",
    "revision": "c8e5a97aaa06af4cd65526f824c97999"
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
    "url": "assets/js/10.fb454d89.js",
    "revision": "6f952cd42812bd1242b0370978033d59"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.ca320ef7.js",
    "revision": "0ef14c81a156820075e23874b73c78d9"
  },
  {
    "url": "assets/js/13.d850070c.js",
    "revision": "0fb3ddf4e96b76ca9d12410b80307812"
  },
  {
    "url": "assets/js/14.f83bafe4.js",
    "revision": "689095a4b39ef3434ce733b9d8320368"
  },
  {
    "url": "assets/js/15.7535824e.js",
    "revision": "0609f0586f61784126107a72e2471d6b"
  },
  {
    "url": "assets/js/16.ea1b66c6.js",
    "revision": "9bd90dcd369e4e7a8dda165d31891e55"
  },
  {
    "url": "assets/js/17.c21d3cff.js",
    "revision": "6f32f3b354e28e9facce20bb1934890c"
  },
  {
    "url": "assets/js/18.6543691b.js",
    "revision": "d93d0538f5817b29c604f922a1fc254e"
  },
  {
    "url": "assets/js/19.7531513b.js",
    "revision": "146b2f22d39ce5bdc228121d3d5c512f"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.f6b0130e.js",
    "revision": "0e204dd17499fd1fb95492a14f2a6d15"
  },
  {
    "url": "assets/js/21.5207ba55.js",
    "revision": "2256a7bf64a000189bce37bcae021c01"
  },
  {
    "url": "assets/js/22.9012dbf6.js",
    "revision": "239ce2260eedc3ebf5b86a64b1e174da"
  },
  {
    "url": "assets/js/23.34841739.js",
    "revision": "dc2b97381736074a089e5e2f69b428fe"
  },
  {
    "url": "assets/js/24.5f966eee.js",
    "revision": "2f6336c22ec4c18d1c9865893db09f37"
  },
  {
    "url": "assets/js/25.6dbd9eba.js",
    "revision": "389db5fea7d989d22c49bca0da893e95"
  },
  {
    "url": "assets/js/26.0dc065c4.js",
    "revision": "992de13a3f2d2982a5ea8c3c8b6bb554"
  },
  {
    "url": "assets/js/27.767eb4e2.js",
    "revision": "53fbb6e0bf4be26b790bc41e7a74b882"
  },
  {
    "url": "assets/js/28.d16f0045.js",
    "revision": "c2a7d6a5f9d3dce91ece5cab3f731746"
  },
  {
    "url": "assets/js/29.de006daf.js",
    "revision": "d3537372837d67e1169e961f2f9d3c66"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.0df019ab.js",
    "revision": "46aceaa9e2d6629c7dbbb692346f12ad"
  },
  {
    "url": "assets/js/31.722e7285.js",
    "revision": "27cc736fddc17b781ecc2ed7ac4eb224"
  },
  {
    "url": "assets/js/32.20929214.js",
    "revision": "d7e37bd31a246b09fdcaab88fdb9dff2"
  },
  {
    "url": "assets/js/33.46e092f1.js",
    "revision": "a0b405da0972be64a91f6c8936bc3328"
  },
  {
    "url": "assets/js/34.f29d118b.js",
    "revision": "2d2a9e39d4590f0eaaf66c9c5eba702d"
  },
  {
    "url": "assets/js/35.34d6ec69.js",
    "revision": "95bd2bd9c401ee49edb4fcb7545de9a0"
  },
  {
    "url": "assets/js/4.5770f9a1.js",
    "revision": "af2bf8813ee517356056a8e5e78c039f"
  },
  {
    "url": "assets/js/5.2ecd2552.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.a1267de7.js",
    "revision": "a9e040b02d5aec91c06ad379240938b8"
  },
  {
    "url": "assets/js/8.d2b563d5.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.1ac85436.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.1181cf4f.js",
    "revision": "f4c1e8284def4ad88e3b31d991d16395"
  },
  {
    "url": "index.html",
    "revision": "94dca19d3e4e10a9c8a408c389292f52"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b86cc7ee343a82c6290be136ea9dffdb"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "83e28815cd0ba4f9bb88d90b05f05f37"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c0f6dc502920d727e6dd68a3f8fbc629"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "74c9857239b6316fdaafd5072e408066"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "f853b4548f21f0b107104ec083042ea7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "e394293ade4922f11a1bcd71b5a444d1"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7b7e78bb638c3b91b98d60b8b0b8c5e9"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "53ecefb87be7b2f5fbdff44926ef0688"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "52e9198346fe55581be6ee47ff1d7f15"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ef6a00b500a5f93f4b9afcd1cc77f321"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cb83e0758c7f193fc0e075e255eb21fd"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "2d6e7886a2fcc66a71e9325adbe82984"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "e6a4d3e3483b2254b33147391e20ae1c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "2b3f36cc9effe47be889cea178b05619"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7ab72d2baed5ea7d0e8414fe1846348d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "0d1a740cdffe99b38118744a13944eee"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "00dab8956c1a16ad81633e5978f48aca"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "fb05137c0bda11c06d588ea703990530"
  },
  {
    "url": "Node/basic.html",
    "revision": "f89793e7a30e3f8737b68b7b0512f139"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a8c0a0afe7afc86e89232f2fbab2b849"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "65eaa9fbce337c36cb69d1b45aebfd9a"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "a3cb77e8e515728bfc2d00803c49c095"
  },
  {
    "url": "Vue_2/v-model.html",
    "revision": "94b96beac85e997748d9b7446af59446"
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
