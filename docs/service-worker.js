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
    "revision": "09cf1486f0e8d914a429b0529cf4fdac"
  },
  {
    "url": "assets/css/0.styles.1feb2ef1.css",
    "revision": "3616f07ba822520089284b626a3f2bab"
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
    "url": "assets/js/12.6f4ac1b0.js",
    "revision": "03f2339e6c484acfdd0c34f122d9757e"
  },
  {
    "url": "assets/js/13.6eef5801.js",
    "revision": "2ca541f39801276e3541fcb994a63b57"
  },
  {
    "url": "assets/js/14.db443f2c.js",
    "revision": "c0f1f75efffbbfd70d607fe8dd54113f"
  },
  {
    "url": "assets/js/15.a7f4881f.js",
    "revision": "84f6de8a1200400d6628bf03fd3c39ab"
  },
  {
    "url": "assets/js/16.cbc1bf8e.js",
    "revision": "888b8643c1707bb360ad1e3a45c3bebe"
  },
  {
    "url": "assets/js/17.b992e0c2.js",
    "revision": "aa5fb4bb8f311f7323132dd117865ee1"
  },
  {
    "url": "assets/js/18.d3fb94bb.js",
    "revision": "c34f4946819c0f3eaba94aeab4ec26dd"
  },
  {
    "url": "assets/js/19.f5d37330.js",
    "revision": "fccc4330d1a9d2125d54bb3207516fbc"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.42b559d2.js",
    "revision": "be6e5003e1fd7576d5bdbccc11d4f969"
  },
  {
    "url": "assets/js/21.fbc26941.js",
    "revision": "c9bf759d68921c47134e2b5c7ed3e12a"
  },
  {
    "url": "assets/js/22.78b6d019.js",
    "revision": "cdc397e528ae9de6583f075ac5b8ae05"
  },
  {
    "url": "assets/js/23.e22cfe14.js",
    "revision": "3f046b732a5fd942d9082a7f68a627a7"
  },
  {
    "url": "assets/js/24.af209135.js",
    "revision": "eeffd76c56d69aaa6c3e9ebef7e40352"
  },
  {
    "url": "assets/js/25.afb295ab.js",
    "revision": "efddb16d08415f6e2f3a3d8edbad3096"
  },
  {
    "url": "assets/js/26.9f4bf2e5.js",
    "revision": "13be57567e1d9eebb49c881d3bb68669"
  },
  {
    "url": "assets/js/27.c81fb0e2.js",
    "revision": "aca329c87f605af30bfc8c95910ee106"
  },
  {
    "url": "assets/js/28.6e72a63a.js",
    "revision": "61394f39007570302d508e0289f1a396"
  },
  {
    "url": "assets/js/29.dfe84f5c.js",
    "revision": "a9333d9237cf6cccacc18732c85e65f9"
  },
  {
    "url": "assets/js/3.21f6bbbc.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.c4712235.js",
    "revision": "06a30aca7db81f1ada9c0109f00e638c"
  },
  {
    "url": "assets/js/31.762315f6.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.c05c2ac6.js",
    "revision": "90f8a19bed40e926f38377e9eb8e8e1b"
  },
  {
    "url": "assets/js/33.c7d23566.js",
    "revision": "53a5c6eaf1a74f5badb799fb6013dbe5"
  },
  {
    "url": "assets/js/34.9505bbb3.js",
    "revision": "a7f2a01be8d62f277c30bb7617637403"
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
    "url": "assets/js/4.ad946dfa.js",
    "revision": "10d2af58ecacd1c4863e379ea04f28df"
  },
  {
    "url": "assets/js/5.ea6759b2.js",
    "revision": "9d4f677c2b636d1b3c2009fbbc9e42e6"
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
    "url": "assets/js/app.9a1a52e0.js",
    "revision": "f76afa1f6a5d12614573bf42cb614770"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "bcd929338e0afb596163c15452af8e98"
  },
  {
    "url": "index.html",
    "revision": "4f5558424bb57b4418fb4f7c68651b77"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "ba8da58d09521f045ef0c6ba8d0657c0"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "6381e20fb6c8fa3a3c40b4908905528c"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "ef2509c6e05bbf7a7c6e90f66deeea97"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "92d72369b12f5b999f6944d50975306a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "1e559006a25bc62cf482945008fb5ed3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "5c3cc0d8a129ec9f2b7de26f59e038aa"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "801a15a26c4db5301530c6424eaf5d89"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "3786883eb2a892ed63f76487f55c2e4a"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "1b6996cdde8e6f09ab97cadfac8487fc"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b459da2d8f627d90756a0efe12e73443"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b95d7aba4a4462af53e3ab014332c801"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "230ff5a72710c2eb5710095f2341379f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "71b3d2be013f3ee5ff606749a2cb2818"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "005f48386d140930abc9cd88f9ac3536"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3958f006426f7861e9f6c35c6cd0434b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b9a8feaf1b75f52152c016486758088a"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0c222304e8a30313a9eb4e7472c4a481"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c24192bb0deb694d280fbc6e80f7ddf3"
  },
  {
    "url": "Node/basic.html",
    "revision": "640869f953bb6bd6e9ab0a901aa4f0f0"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "1f7ed80039fee413d5415601a23836b7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "9a74aa54f4316a07f22ef2c6d85ca378"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "9936e9022d4cb52fba5c1166a92412d9"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "2e1cad93b1351a480a89d64d5d62d342"
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
