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
    "revision": "63b2f22b88ee2e35d81230665108389e"
  },
  {
    "url": "assets/css/0.styles.5f90c0e8.css",
    "revision": "f741ab6ea056ca9dc76c1bd575026268"
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
    "url": "assets/js/10.83dc0a4c.js",
    "revision": "074407ba42a5f1510dcde77ff319af41"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.1718e057.js",
    "revision": "163864f89a31bed9abf6384fc9be90aa"
  },
  {
    "url": "assets/js/13.0bc8e782.js",
    "revision": "4f9633c4e80ea2bfaf9c43fd99f418b9"
  },
  {
    "url": "assets/js/14.ff08828a.js",
    "revision": "332373e3e3173b9e2bb4224bdbfe5d75"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.0ec5631d.js",
    "revision": "d26b3ddfc665dd46d3f0eff6bf8a0e92"
  },
  {
    "url": "assets/js/17.0559f719.js",
    "revision": "afe4099b77481dc4d9e1be8c0f7db203"
  },
  {
    "url": "assets/js/18.69a42bd5.js",
    "revision": "dee225e441e836483d675f74f62fa1b5"
  },
  {
    "url": "assets/js/19.f34ee28c.js",
    "revision": "a603489d9347a8115e278b8197c9f4a4"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.2dfb97e2.js",
    "revision": "42600154e936e27be2439e9e0fe7a099"
  },
  {
    "url": "assets/js/21.81c51144.js",
    "revision": "9a484d215b9c0c78d5788bfb7984fc1e"
  },
  {
    "url": "assets/js/22.6f3f7cae.js",
    "revision": "136b2a87ea40f28192b43b773569d39a"
  },
  {
    "url": "assets/js/23.8766baa8.js",
    "revision": "b51acbfaf65c7b516689991c08d193e4"
  },
  {
    "url": "assets/js/24.23cf0630.js",
    "revision": "27ad97e0cfdaf4711c00f53fceb977fe"
  },
  {
    "url": "assets/js/25.2bd6822c.js",
    "revision": "814b13763bcf188fdfd3da6f40a11901"
  },
  {
    "url": "assets/js/26.999527d0.js",
    "revision": "82c702a962fd8401ab11fc8f11d21e61"
  },
  {
    "url": "assets/js/27.34f12b37.js",
    "revision": "3151a24f02a690725803cb1770a09482"
  },
  {
    "url": "assets/js/28.9b271d49.js",
    "revision": "5f938b9a2e28c2beb1d1450975460cef"
  },
  {
    "url": "assets/js/29.698d911d.js",
    "revision": "c9a6f75285703a4da54708f4a385bf83"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.860e956c.js",
    "revision": "a7502186e6d8ce2c2f1b92618e92a8fb"
  },
  {
    "url": "assets/js/31.c8f0c0b4.js",
    "revision": "8d6caa0ec51bd20b69c3941d297c0c2c"
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
    "url": "assets/js/34.ad4332a4.js",
    "revision": "188a2e56c51943d6ca7b839bb13f248a"
  },
  {
    "url": "assets/js/35.dc2ecd3f.js",
    "revision": "40c5fc74cd5a5c5334168b069829d477"
  },
  {
    "url": "assets/js/36.c1fb910f.js",
    "revision": "81c0e51b6b50e2bf8f7e034d2a5897ae"
  },
  {
    "url": "assets/js/37.6f46435a.js",
    "revision": "35680008a9921e8b07102a15b77ca80f"
  },
  {
    "url": "assets/js/38.8c14db82.js",
    "revision": "f43d3c516374ab1cff7e139f3ae065fb"
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
    "url": "assets/js/40.d5092849.js",
    "revision": "9630a13486dbac18eab7d23987760176"
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
    "url": "assets/js/8.b1744ffd.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.26117c4d.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.f20bb8a1.js",
    "revision": "174482a70331129158ce70b42a2c91a6"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "34f84b3103db2ec2c335a38b9ba3c264"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "acb6be2b839f71e18d1fcccd294fdbf9"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "c0c97d1a259bc2fdb2e4f9f25b953da7"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "73a86d7be39e299348798580eca69d41"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "7bfa3f82c64b6413b04679f5d27c1a11"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "15bd50e261933409b0d560e53b58af52"
  },
  {
    "url": "index.html",
    "revision": "9cf6d68564a9e05d6dbe91b1203a0878"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "693f4b67ca59a9f01792095c34375942"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "aa4838b76e832a17db3c916ff9624688"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "f14cc4878322408c2b3a1f78236e12f3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8e26088b1cd30aba96b7772ae5647557"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "34cd6f99a8fe058a64282211d18d0e22"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "193111c142f003e2891374093c1b314f"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "57e05e548506b5d78337ffa6bdd3ec85"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "e6766d348b3f569243d1e7636002681f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "c23707bfe72a25870b15d62b60c58360"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "629783ab66c4f32eddbf5d56daeb7773"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "0115bf26f5233d8b8151cc26ccf20b44"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "fe24c81074b8f993c9af4c0011e54d7a"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "3baa664cc9875392e2dbcd32be2132a0"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "3e60452caea3db50dee51ab48dba1992"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "dc6e0a2a076a876ab997c8b855002a30"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "63a9c82ae4a0b2f2d50181442ed9fdc2"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7384bb065e77a428f2ec8604952beb12"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9e98d7fcada45a29ddd84a8e5cbcbd08"
  },
  {
    "url": "Node/basic.html",
    "revision": "1fa6ce151a8f86a764679b22a0a08517"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f8eb2163d8ade14283af77fd9e9c88f7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "861ce5e78d8e04cb9cd8ec9b5c159412"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "9cfaa4c50c495eb2f5f55fdb76f4a426"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "556f77766f61f6e2c6160d3e697eebf5"
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
