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
    "revision": "aa42176d299142cca8b748755846916b"
  },
  {
    "url": "assets/css/0.styles.a52d4a0b.css",
    "revision": "b4f0aab51afa7f3e7d0ef2d13b2e0e8f"
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
    "url": "assets/js/10.4101b572.js",
    "revision": "a42b20f95d32e55f9f4097869ce6e387"
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
    "url": "assets/js/13.e328e07b.js",
    "revision": "c0f7fcb8a4633eea13382cc571923e39"
  },
  {
    "url": "assets/js/14.2a0fa4d8.js",
    "revision": "bb223041f8480aa1cfe13a9d6065d102"
  },
  {
    "url": "assets/js/15.2bc6e61c.js",
    "revision": "ec9f245b38e3d3269cbd81024d753ff9"
  },
  {
    "url": "assets/js/16.542bf740.js",
    "revision": "befe28737f8c75fb970b308553469c1b"
  },
  {
    "url": "assets/js/17.8190025a.js",
    "revision": "37cb256267546126b4d41465ff96a4f1"
  },
  {
    "url": "assets/js/18.5f1256be.js",
    "revision": "2d453267fdbfe1906f5ecb08b96833a8"
  },
  {
    "url": "assets/js/19.5d5d1e68.js",
    "revision": "893bef4dc817f570bc64b6054c7126ac"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.6c8b0911.js",
    "revision": "c76e491f7576a0ed62edc67ee78bd335"
  },
  {
    "url": "assets/js/21.21ddc33e.js",
    "revision": "24e5a54fe74f040dbfd2a7ba55e1c8e4"
  },
  {
    "url": "assets/js/22.b7f8d027.js",
    "revision": "cc430652ea0b827af14e28011871a8e3"
  },
  {
    "url": "assets/js/23.34841739.js",
    "revision": "dc2b97381736074a089e5e2f69b428fe"
  },
  {
    "url": "assets/js/24.078418f2.js",
    "revision": "761d0e00e8449ca7f205b9129e7afea1"
  },
  {
    "url": "assets/js/25.6dbd9eba.js",
    "revision": "389db5fea7d989d22c49bca0da893e95"
  },
  {
    "url": "assets/js/26.bdfaf372.js",
    "revision": "38c225e4d51a08fcbca4ef815224781d"
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
    "url": "assets/js/29.d0c228e7.js",
    "revision": "a7a72b3d4343d3a212fc5a70b9e5e230"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.1078ac8b.js",
    "revision": "dff618c4c489e5e6b36d56dfc611f6ae"
  },
  {
    "url": "assets/js/31.2c23dcc3.js",
    "revision": "7ac29171a16ae6d12b4c2d7ce4992bef"
  },
  {
    "url": "assets/js/32.5216ba6e.js",
    "revision": "fdce891c6a981dd3055d7878bded028f"
  },
  {
    "url": "assets/js/33.cc859735.js",
    "revision": "1d584224a4d7515e746362291ffcf589"
  },
  {
    "url": "assets/js/34.804a0afc.js",
    "revision": "f544d69b233a07fb7fcc4bdfcb9af12d"
  },
  {
    "url": "assets/js/35.34d6ec69.js",
    "revision": "95bd2bd9c401ee49edb4fcb7545de9a0"
  },
  {
    "url": "assets/js/4.fe7d941f.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
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
    "url": "assets/js/app.d9082661.js",
    "revision": "59d0cfad2bd82da9d49209c79ffb3873"
  },
  {
    "url": "index.html",
    "revision": "347cd9de876f6b6875a8853afb6dc250"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "117f3b856081abaee7fd7c6f6e8eac33"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "eab27415a4481fb1e554c5c4c34b9b9a"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "a6593f851b44228bea50c8ac8bd9c170"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "783578583a305c34ae415be9a0a6bcc1"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "60129aab57b7bfa29437ed37f2551bc6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "22b5fe0361d06a7aae78184398d57957"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "4dca513e8c4dc657113316792a9157e5"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f6eca59de811e917dd61648fd093dcb5"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "b3255d8260accf77030de19c53f045e9"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "752bc8ca4be5f078f324d87d4a63a9dc"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cc08a91982f5c374fd4398be30700c4d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "92e69436bf16893cfe580251debdc0c0"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "90ed5ca58ece500cfd6e047b2c745b64"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6c14710f7f71f6689cbef1fbfe6fc6e4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "ae5afc081e9a34d1ca68fd4d02bc216f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "286ec8dd464a27af2332218adcc4550c"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "aa77a3ea10c85bdfb2b04f98758ef4e9"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "dfe3d3f02f5677a469e140038fae5f14"
  },
  {
    "url": "Node/basic.html",
    "revision": "ffd5eda4ae4f85179b5c8766be3c24ec"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "efd6308245ce232beb1ab672e9f2ca1e"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "eb81e63cec441f77b9673956f4f8d0eb"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "4e36b25c662176302a235594b6f6ed15"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "87106d96ec3fd62f61c04ecb6291f40b"
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
