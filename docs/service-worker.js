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
    "revision": "3717ed824c9ef5fc73eeec2d2e79de6f"
  },
  {
    "url": "assets/css/0.styles.6524abe9.css",
    "revision": "46dd3a1339381061400302ea16dad21f"
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
    "url": "assets/js/10.61381736.js",
    "revision": "49cfb3d1b62304e3ea4f9206bf018f78"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.d3453af1.js",
    "revision": "aca86cbf4a0e53440fe1e21ddcf7acc1"
  },
  {
    "url": "assets/js/13.c5bfba0b.js",
    "revision": "f15e8b3c687ac572516b5b1590fd3b94"
  },
  {
    "url": "assets/js/14.39ed3f6a.js",
    "revision": "f2bacc8c59b7b23bb1cf884ca549b48b"
  },
  {
    "url": "assets/js/15.c96ebfad.js",
    "revision": "1cdb9b41dbe5b35442021764c9b8a43c"
  },
  {
    "url": "assets/js/16.606c9b73.js",
    "revision": "9ac66ac6817fce9ffedbcc046648ba05"
  },
  {
    "url": "assets/js/17.9002a01a.js",
    "revision": "8bdaecd7c47822e0399f288838fa457a"
  },
  {
    "url": "assets/js/18.fcd21fc9.js",
    "revision": "143d61f55b16b0954740c084403961dc"
  },
  {
    "url": "assets/js/19.9cafec51.js",
    "revision": "5ccc79870482aefee744b2cff64d1cc0"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.e747b2c3.js",
    "revision": "543fef18371dba1fcdc9f38b86db6d39"
  },
  {
    "url": "assets/js/21.b9741145.js",
    "revision": "7b4d0cf4f8b2383d146a95cae668d7f2"
  },
  {
    "url": "assets/js/22.612d4d0e.js",
    "revision": "c5c2a6b59a2ed7a852b22b97b00cab09"
  },
  {
    "url": "assets/js/23.a429fbb6.js",
    "revision": "44878e0205401c9e86abc96c8c7adcf9"
  },
  {
    "url": "assets/js/24.0255d4cb.js",
    "revision": "567964f3ed8f7783f8f1b4e6b165321e"
  },
  {
    "url": "assets/js/25.7915a207.js",
    "revision": "3ef16bd036795bfb48fff0f1bbd78377"
  },
  {
    "url": "assets/js/26.d45bb6ed.js",
    "revision": "29e123a27d8f58fa80b2a5e9ade0f13b"
  },
  {
    "url": "assets/js/27.3dc6baf0.js",
    "revision": "c2324bcb6f673e002b5f22da9be491ef"
  },
  {
    "url": "assets/js/28.613662bb.js",
    "revision": "48918931b5eeaf7ff04d68ce3d413432"
  },
  {
    "url": "assets/js/29.4b5bf8d6.js",
    "revision": "96a7ea6434b0bc09eea22d6a9d010cf9"
  },
  {
    "url": "assets/js/3.349b0dbd.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.ff7e7b96.js",
    "revision": "925126460d4445cc735478c86df533e5"
  },
  {
    "url": "assets/js/31.6cacbec9.js",
    "revision": "15c31e0f4eed4d1279e5f6c4c6a42802"
  },
  {
    "url": "assets/js/32.539bc864.js",
    "revision": "81aaefda8cd45b434569c2f3961770ea"
  },
  {
    "url": "assets/js/33.da6f0d66.js",
    "revision": "171110218606184a4855a44e9f8ceab3"
  },
  {
    "url": "assets/js/34.78538d23.js",
    "revision": "78c52812e512849819870c55f30f0083"
  },
  {
    "url": "assets/js/35.9321b03d.js",
    "revision": "62c7510cee9f2ef90684a30df08b29d2"
  },
  {
    "url": "assets/js/36.94c7b292.js",
    "revision": "7238e251a4d1544234e858babf82b60a"
  },
  {
    "url": "assets/js/37.3e230b0d.js",
    "revision": "4fce43d503c0ffa83196338057dc436a"
  },
  {
    "url": "assets/js/38.61af0c6b.js",
    "revision": "4c8c9d91695c8e83bec15edbb2175b4c"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/5.9fef5e85.js",
    "revision": "60a53394e2a6bc58ff79ae155ff457a4"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.b0ca8be6.js",
    "revision": "b2c6f76217d47b0441430d292d42655b"
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
    "url": "assets/js/app.3daf347a.js",
    "revision": "58785c87055c761928e1415a28ea99ac"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "19585b6c20ec5a2b392a18d3afd74257"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "cd1301a36e92a843ddc9c362f8983b2e"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "4ea3ddab30acf6d2d19def1fa9e218ba"
  },
  {
    "url": "index.html",
    "revision": "87ac9b75711f0788f6d25dc7d68d14ba"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "9a3d26ee817d60e0be4944a723494242"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "3fddfb3024b0ceb3cfa7a7432bf7ed2d"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "abdc8650c58abdc07b081595455de334"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8b279383b11fe14891c5c1a3fa4c1823"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "ed1f09c242013f35bcec6b032bfd947d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "6264607fd93b07d6c60b37c4c9b47479"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "32fda6398e474172f3a83a2cc3077944"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4c34120f47480df215a947949340556d"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "e7b551e3d91239c6b19f3f74ff3159a6"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "2e37a8b499808283c0c4be40abc04195"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d465d410a359f80a1465640e50674903"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "08fc6ba67cbde56a46012185c6bcbbc1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "d54539c0696fce499b6dc69581f15a8d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "6cbf5720f0ce90f617d639be8282be26"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c75c8b8eefcb4b500dac5804b2a2237c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3f096ea53537982caeb078a106cdea38"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "98292480a523001f07385553c5cb01bd"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "74c47a54ba79381092221da2f3493831"
  },
  {
    "url": "Node/basic.html",
    "revision": "e94f225dd7eeaf12125b4b6bff8dce8a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "66fc935f546bf989281592b7d3d3a894"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "efd8ab0ffd99e798dc17eb9fd56f1f27"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "fed4b908c534d65b11e3762792c9d87b"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "22768ad2b13208e589f7aa1038438892"
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
