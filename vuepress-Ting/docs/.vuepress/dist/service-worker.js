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
    "revision": "fe5f83f9ed2051a728dfda3dc1d68b33"
  },
  {
    "url": "assets/css/0.styles.2597105d.css",
    "revision": "205d671f2f45e11a739c48ffdf1e5cc2"
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
    "url": "assets/js/10.c5eb8a75.js",
    "revision": "1384704d554c1dbff29f9930a314e2aa"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.ebe0ed1a.js",
    "revision": "c07c8d38abcb09ad51f3c6b810dd0fbf"
  },
  {
    "url": "assets/js/13.8fc00dbc.js",
    "revision": "6519796e4d27bef1f6a658fab19153af"
  },
  {
    "url": "assets/js/14.eba54d88.js",
    "revision": "066911520a7ae6519045f8f1a7716b07"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.43b8d9db.js",
    "revision": "896d70eb283b927cf2b51728c14e6c64"
  },
  {
    "url": "assets/js/17.183e4a1a.js",
    "revision": "bf622a2715ca89fb219f90991fb442ee"
  },
  {
    "url": "assets/js/18.22031266.js",
    "revision": "44245e5b6edbce74f29d2bbb00d66f44"
  },
  {
    "url": "assets/js/19.2205f341.js",
    "revision": "aeb954d910bcee4829b332e71b2c8ddd"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.fcbc521c.js",
    "revision": "768fe531f2750dfd1a7dd94e9012eb49"
  },
  {
    "url": "assets/js/21.7b611b25.js",
    "revision": "dcbc278a12c1eb120bbbbd88ea4fc3a9"
  },
  {
    "url": "assets/js/22.e4a4c6da.js",
    "revision": "0aa9cc4fa5cce18b3b0fdfc305d86591"
  },
  {
    "url": "assets/js/23.4b8b85d2.js",
    "revision": "63b69648858644b54ff61dee02ac605e"
  },
  {
    "url": "assets/js/24.4f6d3b1d.js",
    "revision": "6fd0692d3e66b567ff7e04a521580ab3"
  },
  {
    "url": "assets/js/25.2252cbe2.js",
    "revision": "2ebfbaf1f98a828150815a24c61bea06"
  },
  {
    "url": "assets/js/26.f8e05a70.js",
    "revision": "74d89158eed040646d1e25b6504db9c6"
  },
  {
    "url": "assets/js/27.6182d7ac.js",
    "revision": "04adf26d7ab544e9fa39f44f33bb274f"
  },
  {
    "url": "assets/js/28.ce0be2a6.js",
    "revision": "959b36775ca84ec59f7d97013edd90f0"
  },
  {
    "url": "assets/js/29.75774701.js",
    "revision": "9047d561590d4e13b2138b4008b3581b"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.66fd0514.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.8cafd1b7.js",
    "revision": "f6a32fde4d34a79c3a5df88ab923ff92"
  },
  {
    "url": "assets/js/32.20441617.js",
    "revision": "039f07c0605c11a0bcf43750c873e1cc"
  },
  {
    "url": "assets/js/33.c3ce60f0.js",
    "revision": "2fde1084afd5c3bdbebbc828b073e879"
  },
  {
    "url": "assets/js/34.d426ba43.js",
    "revision": "d7ae8badd87e42d46be0e42f66c2f81f"
  },
  {
    "url": "assets/js/35.72c48b8e.js",
    "revision": "7f346193bbf3ac9f85e9010e9d400501"
  },
  {
    "url": "assets/js/36.7c294c77.js",
    "revision": "4216a46c36538e30f44ff30efbe4e3f3"
  },
  {
    "url": "assets/js/37.ee05eed5.js",
    "revision": "5035934ae5ac1b24437387fd2f410bc4"
  },
  {
    "url": "assets/js/38.4e621635.js",
    "revision": "61ad49617711489b2799d4d544a1031d"
  },
  {
    "url": "assets/js/39.285db0bb.js",
    "revision": "7e0e1e1f58a0c936f8a980d6de94dbe3"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.f39bc3fe.js",
    "revision": "a7f8101fedb07593365ae750e2873e7c"
  },
  {
    "url": "assets/js/41.d5e869ba.js",
    "revision": "d08f51274cc0f07384cf5de897c5b128"
  },
  {
    "url": "assets/js/5.a0e6fb5f.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.00149598.js",
    "revision": "d37218136addeca1eba48189041db6cd"
  },
  {
    "url": "assets/js/8.6d5c1c6d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.1c72589f.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.ca4d6e4b.js",
    "revision": "ac9a5676065a3ba9246349f12a0b8607"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "032c84cf45a008d7903fcd9397ac6c2d"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "6624bb68db9a05133eb8339c1e92dae8"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "45b135112da0607a6b4c04824974ba90"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "eb26e96034e43d76e1d73f7b4634e7c7"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "b50b1705b90be85cec5302d2192a3b25"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "b7fb1a8cbd99f38d8b62b3c22dd1224e"
  },
  {
    "url": "index.html",
    "revision": "1bb507745850a493dac5ca70dfb16d4b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4f73c7e9e803856775f3de2e52223e25"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "fe4a51efa0131fb0d41c76ef6ddabd04"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4788f3a3275af1c9cb5f2a29bdbd079e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "0627eb4c8a6bcea5c05fc8ee04f70ad2"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "27ddad5ce9715560a0a4ae432fe2a956"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f865166ec2e23a2b89ef897f22a1cddc"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b8c5f74bdc0676f7d582108e5fb294f0"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "fc625608e765d8c1adaa5604052475f9"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "240ce8a909f73be365547caf04f6bce1"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "09fe25cdaf69fcc6148110710b4bc9c4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "f06215f7d6cc4096f34cb2c9c8e1981d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "16aefecefd1034942ffd3b6726ed0881"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "1aef98170d534291ee2d67b1a0c74928"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "9fea1b7a16445a37ae39c22d781fcf3a"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7227a31a9c2392df7ed1cf89fbc26970"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6122d0472fbc5d0787061553c3d9792d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "a94e70e52e1f7670b42fd8e14e4d70e3"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "1366f339fe4866b8f28aac6d6b6f1b07"
  },
  {
    "url": "Node/basic.html",
    "revision": "542a78dd82587f66ceb13937a6fa98e4"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "166d3a55802c1a0284e90c57e47d44d7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "59da7d02238e63c342ffec2aea9c54ce"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "998f6fc37b0cc22734867f688674a8c1"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "9e4c9fbc9c1590bde686a10e03fa3581"
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
