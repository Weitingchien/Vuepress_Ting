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
    "revision": "81d2ce9cac2f49e6e1254f65ae7c8c94"
  },
  {
    "url": "assets/css/0.styles.c1fd2e23.css",
    "revision": "31b3a392cfa6c8422e6af3b6e2b3692e"
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
    "url": "assets/js/12.c21c9dd8.js",
    "revision": "61d313131e91a831fe35b48d5a3e8603"
  },
  {
    "url": "assets/js/13.05e0b4a7.js",
    "revision": "7f12a42dd137a9649650e10f9395e792"
  },
  {
    "url": "assets/js/14.678f18a5.js",
    "revision": "e82157b73f946182c87ccdc1dd3f52e7"
  },
  {
    "url": "assets/js/15.03ac6bad.js",
    "revision": "9501c2e6425b3ed50534663d1c9b5f36"
  },
  {
    "url": "assets/js/16.944576c4.js",
    "revision": "a2417b810bf42d05d9a312e647689195"
  },
  {
    "url": "assets/js/17.c435acf8.js",
    "revision": "fa191f0b0b1d1786b6e8a09bc64bb094"
  },
  {
    "url": "assets/js/18.f72029af.js",
    "revision": "d658563cc873bbe3e93c9a6bb7d183c7"
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
    "url": "assets/js/20.fcc880c4.js",
    "revision": "e166f7b6b2d4ff06a37c95106943088b"
  },
  {
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.2846d499.js",
    "revision": "2ebf21aa08dcb46f50ffe3f3b0243265"
  },
  {
    "url": "assets/js/23.b2adfd9d.js",
    "revision": "1ababe5241e60e5163549d6b7865f2ef"
  },
  {
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.42bd7070.js",
    "revision": "822fa42a4469b9f5435b16a35f3ced32"
  },
  {
    "url": "assets/js/27.c81fb0e2.js",
    "revision": "aca329c87f605af30bfc8c95910ee106"
  },
  {
    "url": "assets/js/28.6f2c3bd8.js",
    "revision": "a6f0f11b1e983f9ac41d580a2760acd3"
  },
  {
    "url": "assets/js/29.102e1102.js",
    "revision": "d65170c8b7f03aee45f117c2139733a5"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.25f10e47.js",
    "revision": "723833be16b6fdba113f200e6a94c0de"
  },
  {
    "url": "assets/js/31.6a54328d.js",
    "revision": "d15404ce5151b22bd8b4a51738bad9dc"
  },
  {
    "url": "assets/js/32.2d7fcd9c.js",
    "revision": "bd5ddccf0870a6a9fdd15c9569410539"
  },
  {
    "url": "assets/js/33.b599cbee.js",
    "revision": "f2ba3e0cb3d5c1b9f3a25edb95f07c44"
  },
  {
    "url": "assets/js/34.8276203c.js",
    "revision": "4f3b555322fdb25170151f68e7824898"
  },
  {
    "url": "assets/js/35.6f1bc7fc.js",
    "revision": "0db7f6d272393ff2d1f428be998c2f68"
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
    "url": "assets/js/8.254c524d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.ca386020.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.65f994e8.js",
    "revision": "395527d452b303eae33605c6f20a353e"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "b0f6c1aa93da34b1b45ca7ec00630039"
  },
  {
    "url": "index.html",
    "revision": "294cba2fd793cce3532e0c0b3e694437"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "65c6d727eed840bfc6ab99627d7c8716"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "803118dca7eb5ff0035d2b7db4efd5c5"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "fef6adebebbdd5ee5bad43c32aac5bf8"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e0f98671da7afa497e8bab20fef4793b"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "2fb4a7d52919676ce77ab6fdb8bab8c6"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "3fd4a693f8a3c5316cf28f5b0c419792"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7c517972e932573b070d850d5fb6f371"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "83649d9c2e0ae0a9f1cbf6c14fa01ca1"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "fbdc8bd6c71da2d04d18859d7ddbd5dd"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "25e9d9312768af49bc3ad6fc484580c8"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "38fa6585f5c8f11fd5af183add0d216c"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "34925156ad8c79f7ea6e32eb1b53be1b"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "22aacb98312799900158df5d0c481389"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "c070f40f2322e72d502511d6d8610242"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5ce394ccdc1867b92ed38ff64c789db4"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "f8ed922c664b93129f5ba8640a66629b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "50304d5c6cd48053630652e1f904fea9"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f38ee773b961e840ca428422d043c43a"
  },
  {
    "url": "Node/basic.html",
    "revision": "10e1a31683e142a9b9fe2f184a9958db"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "2be1b4f39ebe62c8c064b33de45254fa"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f6ec4db4fa22fd51e9e73263220510d2"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "8dcc2e1c4f63f332eb89ad020cf4583c"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "31476f579bb1d01b4d0a155795e0fcd3"
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
