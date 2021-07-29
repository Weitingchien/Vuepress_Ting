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
    "revision": "7af9186b7157453db30eef98245d67d5"
  },
  {
    "url": "assets/css/0.styles.a955cdd4.css",
    "revision": "e06c44bb4975545247556a387cfae182"
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
    "url": "assets/js/12.c275e9ca.js",
    "revision": "8c23f92c1d5b2d89f43a05b4f0d49ede"
  },
  {
    "url": "assets/js/13.7ba80adf.js",
    "revision": "3a69427efc33dfacfee94094d8cc3104"
  },
  {
    "url": "assets/js/14.b5d446ba.js",
    "revision": "1d5eddcf384a7969968a100039214dd9"
  },
  {
    "url": "assets/js/15.8a4f9fc5.js",
    "revision": "3eea1e3d7645b94afe674ca0438d9201"
  },
  {
    "url": "assets/js/16.0ec5631d.js",
    "revision": "d26b3ddfc665dd46d3f0eff6bf8a0e92"
  },
  {
    "url": "assets/js/17.795ccb27.js",
    "revision": "9494219fe91abb9bd2f866507a0d2d1f"
  },
  {
    "url": "assets/js/18.8f0758c4.js",
    "revision": "8de89d757024075e029e12ec8c9b8016"
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
    "url": "assets/js/20.47f805ae.js",
    "revision": "2d5851651545847fc3779856fa170cf1"
  },
  {
    "url": "assets/js/21.ea5807b2.js",
    "revision": "5486e5fdbcd1b8f2587de8eee1504143"
  },
  {
    "url": "assets/js/22.f92d400b.js",
    "revision": "90deeaf648ad84cae165f7dfe7d0ea92"
  },
  {
    "url": "assets/js/23.7f0c7c07.js",
    "revision": "60b2ffdb955e1ba6cf15b8a9ad6f5457"
  },
  {
    "url": "assets/js/24.4bdaa26b.js",
    "revision": "c6e21419002da716610339f0673666d8"
  },
  {
    "url": "assets/js/25.0190ed59.js",
    "revision": "f6e3120655e06ab030a2540b0a4d7a8e"
  },
  {
    "url": "assets/js/26.f8e05a70.js",
    "revision": "74d89158eed040646d1e25b6504db9c6"
  },
  {
    "url": "assets/js/27.cc9b9471.js",
    "revision": "485463e74ac3bd735eb9a51b613682b4"
  },
  {
    "url": "assets/js/28.9b271d49.js",
    "revision": "5f938b9a2e28c2beb1d1450975460cef"
  },
  {
    "url": "assets/js/29.be8b2d4a.js",
    "revision": "27cdd242cd22e1a032af228bd5b2a9ea"
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
    "url": "assets/js/32.958a4592.js",
    "revision": "22300548ad4d7a22ac206cf0844ef782"
  },
  {
    "url": "assets/js/33.378b9b91.js",
    "revision": "0d69c115d1f9ec549097a0d10294e841"
  },
  {
    "url": "assets/js/34.c128e686.js",
    "revision": "7518b361c5a26cf95ac8a57c881fdef9"
  },
  {
    "url": "assets/js/35.43ac4049.js",
    "revision": "af16ecb9959cb06b2acf6df2902aa265"
  },
  {
    "url": "assets/js/36.7c294c77.js",
    "revision": "4216a46c36538e30f44ff30efbe4e3f3"
  },
  {
    "url": "assets/js/37.365cd172.js",
    "revision": "d8a11eb302f68a56d26728963de0aa45"
  },
  {
    "url": "assets/js/38.2a75e619.js",
    "revision": "8fee0f951e449af7ccd8f554b03ccbc2"
  },
  {
    "url": "assets/js/39.b0153363.js",
    "revision": "982dcc8e6ab2e6c3b38404f5dcd0810f"
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
    "url": "assets/js/7.2138f7d0.js",
    "revision": "4499960ef97adef9f90d2468f2ff89cd"
  },
  {
    "url": "assets/js/8.947cdf14.js",
    "revision": "030c63e9fb4b301437be71f321008ea3"
  },
  {
    "url": "assets/js/9.26117c4d.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.1d409a95.js",
    "revision": "c91cfc44fa1f9f49aa5a479cc7b5ac78"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "48021ca84fc0e06049ae6379784b2be2"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "ff34ed09a2c790e31692d3e40d68e3d4"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "e7c9775ba719617dcf62d85ac1e7cd9c"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "3a350b2de0ee6bed2ac4985043bb0e17"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "62e7add7c76a615f3c80b11c9c86a609"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "25f39c5790a3a4c1936e4823d6ab11ea"
  },
  {
    "url": "index.html",
    "revision": "ecc1e214fc5135619068a771dacd471d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b703923667cee3bb10741cae8a6bbb36"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "b8958e5a6e96c4abd79186087d2adf49"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "86b7aa9b671afcc41ace656c6089305f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bac3fa1217bd9693c8b8d6cfce5d45fb"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "37a53917ca9216ac70081e69a03fc73c"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "78933f0eacdc964fb4e7615b75dbd052"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c90f34837cb5865e6f3c6d8344ea9f38"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1fe72fc23b4ec74aacdb65b781771988"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "316de077195365e7f54a159efc4b9984"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0db82195f689ec300a65eee22f97ea0e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "2a6761a9330b8b176f8ffdf3a8a3f839"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "b5ab52de4fb5f2cdeb5f78ff1fd7987d"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "dc4eeb33142631b13030174f21dba585"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "997f728a1de92e4e3e6b961a7ed84f41"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "33496dad9e72cc3cb91629e3ddf7accf"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "26d19c909dc13ec5164e635c8d0928fa"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "bf5363919c457b26d14b7059a3eefcfc"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "1056bdaf2737596fab00bb53707b1b1f"
  },
  {
    "url": "Node/basic.html",
    "revision": "24cf374361c5bba60338c0ef7f875e6f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a931f6dc18f50dd4e836ec7c188fbf6d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "651db7509ad3ee95c2f2c4d195780726"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "8d8d905a16e29d11c6d9a73a2a7030bd"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "33bbde295cc809054f1d0332a0a77cc2"
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
