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
    "revision": "7bfbcef6172914b456156c3094610bcd"
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
    "url": "assets/js/10.5abad7c5.js",
    "revision": "fe44c8b881c9184fb2bbdf9bb9b308a7"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.15d52c22.js",
    "revision": "0098cd22a7e28f3f6e8ba511b6e797b6"
  },
  {
    "url": "assets/js/13.2502baa0.js",
    "revision": "d166b1aa58a9ddfb58d73208c022bb2a"
  },
  {
    "url": "assets/js/14.52a0f5be.js",
    "revision": "5d75e07da112342bfa9768c87cf5a0c1"
  },
  {
    "url": "assets/js/15.6ca293c6.js",
    "revision": "f937bc81bbc170ce1f4d9a4caa5b4ac5"
  },
  {
    "url": "assets/js/16.a2d7cb4c.js",
    "revision": "0bcdc04381a4d6deb3edd9bc9a4ce214"
  },
  {
    "url": "assets/js/17.0a44765b.js",
    "revision": "1e8ad2e8b475a285261cdfcd7fadae81"
  },
  {
    "url": "assets/js/18.44394166.js",
    "revision": "0fa42f1ea69ddef2862fa49be1f25ae5"
  },
  {
    "url": "assets/js/19.385e34d7.js",
    "revision": "ad03bd975794cddfa3c6c75163fb089c"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.4c49bd58.js",
    "revision": "5f27b1314801596370bb1faca895a1a8"
  },
  {
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.1e32cae3.js",
    "revision": "6a7c447348f069d1010aa314d2181847"
  },
  {
    "url": "assets/js/23.de7a1abc.js",
    "revision": "497354be1b58b59e012163c89b4a0bac"
  },
  {
    "url": "assets/js/24.030acaf8.js",
    "revision": "4df1f79a60e6c26afde28770d9ad23cc"
  },
  {
    "url": "assets/js/25.a54c5335.js",
    "revision": "be3ce34d41faf2913ace07653b7629ed"
  },
  {
    "url": "assets/js/26.26199eb5.js",
    "revision": "a114649c5ce2778b1f2ba67a5875a57c"
  },
  {
    "url": "assets/js/27.29c55c7e.js",
    "revision": "51368e830288d7ac4e2308a806ba3986"
  },
  {
    "url": "assets/js/28.32e0d93f.js",
    "revision": "bb8f1de0db2a6d9533256a4524c46f9b"
  },
  {
    "url": "assets/js/29.905db022.js",
    "revision": "5e2d4ceade8dcfa210be4bb6388b1d2a"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.459ece0e.js",
    "revision": "cb32739b2aa1dde7bf600827f2604048"
  },
  {
    "url": "assets/js/31.d1c3c553.js",
    "revision": "0f5dc15a8c3b38c55efba09a18baaafe"
  },
  {
    "url": "assets/js/32.1678b80c.js",
    "revision": "271b600a9eb3b669a6ac4ea47353bf9c"
  },
  {
    "url": "assets/js/33.c7d23566.js",
    "revision": "53a5c6eaf1a74f5badb799fb6013dbe5"
  },
  {
    "url": "assets/js/34.b33f5cca.js",
    "revision": "17eec1405c9d4763c1d56eaa3b13c0d6"
  },
  {
    "url": "assets/js/35.69489b73.js",
    "revision": "176ec85f0cdc0e9a4aeca98474c73399"
  },
  {
    "url": "assets/js/36.05948a05.js",
    "revision": "005e7dcf9e1a5afceb0f9c5e0c05df4e"
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
    "url": "assets/js/7.8c0fdf81.js",
    "revision": "74467b20cf062a5a529e46072eaa5783"
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
    "url": "assets/js/app.e661bfe7.js",
    "revision": "59900b215fccb3786d1719de706ec093"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "ec3a765e8425481f7f900ec1f1772140"
  },
  {
    "url": "index.html",
    "revision": "3ce32f98dc58e1f80b8f959a937e6b37"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "10cd0e43efdb0802ee8ddf6a0d70983c"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "47fa2a6b934e810a1eef40366cfe2179"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "daa8be6fb1139eb7b01c9107ebe496b6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "cbf141700e84db5644e6fb78aae805a2"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "61f6fe91f14ee170694d525151f331c4"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fc17d10a59d49402e4b640b050d16339"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6f7ca63a649bdad32f8bd32efe8f1a94"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "870ed4032cf473fab09913ac2164f043"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "b1804d6578eded31af0f8fae1eb6c066"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "bceb5e96da05d4477d088e285622ae1c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "9bc5f53719450086c83cdeeb66fa1c01"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "6f1e2b0af6cc078915126a20ae6ced67"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "adf542408904cd51821549bbc3d94d64"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7b2d1ec0d71088c802d7b72d6d792d9b"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "4d25d403752d0d95919a4b106df5441f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8701538d55b4b665cd8fd008c19522f7"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "03f727dacdfed8e5f51043477ca57a51"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7537cadd39230f7e59f2fb506d699770"
  },
  {
    "url": "Node/basic.html",
    "revision": "e4bd2f1ed57aab8f6b55ebbdcf3d8ae4"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ce89557221ece389add44aa99eac678e"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "cac29a6d7323f5fee3ae1fe28ced7285"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "b39b7225351ac0d8ab483d77de4eded9"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "54cf0fc27685e90fc9811b06cfa8f421"
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
