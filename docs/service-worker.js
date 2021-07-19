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
    "revision": "267a76a7432606dd063ea7e17c757795"
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
    "url": "assets/js/10.61381736.js",
    "revision": "49cfb3d1b62304e3ea4f9206bf018f78"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.58fd49ef.js",
    "revision": "aef05893c8a6a4e1e3b48fb9c71a8a0a"
  },
  {
    "url": "assets/js/13.51ee4c32.js",
    "revision": "b10a0a26af3ebc6dbd4a80b911605359"
  },
  {
    "url": "assets/js/14.dc3c8bf3.js",
    "revision": "b3876ae017caafd1ac64b3eb2fb162ca"
  },
  {
    "url": "assets/js/15.789765a8.js",
    "revision": "08430306d38813d5f134f111e3c2fc7f"
  },
  {
    "url": "assets/js/16.d927c521.js",
    "revision": "b85d319451e6b64767834f27f0693cfd"
  },
  {
    "url": "assets/js/17.b8099e1c.js",
    "revision": "e3d29400d32dec717b41aa1f98abd462"
  },
  {
    "url": "assets/js/18.ac48cf3d.js",
    "revision": "45ae41ac4cfa31476046cb8d390a8eaf"
  },
  {
    "url": "assets/js/19.5ebe5d56.js",
    "revision": "e8f1391703c50f55b375a33b76b692c8"
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
    "url": "assets/js/21.6eea1520.js",
    "revision": "997c89fb21c7a2303b663fd9c96a5893"
  },
  {
    "url": "assets/js/22.e9b16e94.js",
    "revision": "e6b04c762a7982c018ecb458d5dacc7b"
  },
  {
    "url": "assets/js/23.3462602c.js",
    "revision": "6594a1c1eacc67fb5fa41d81e7329cb4"
  },
  {
    "url": "assets/js/24.f8180799.js",
    "revision": "732a3bc22f0ded1c37e9a786b7ff691e"
  },
  {
    "url": "assets/js/25.7915a207.js",
    "revision": "3ef16bd036795bfb48fff0f1bbd78377"
  },
  {
    "url": "assets/js/26.7823ba29.js",
    "revision": "dba81471707a05d6db273b23167cb376"
  },
  {
    "url": "assets/js/27.1aebdd79.js",
    "revision": "bb48264b997d96be888e5030fb14ad7a"
  },
  {
    "url": "assets/js/28.64dcf246.js",
    "revision": "3922b34a2a73e78f288fe12325a6a7e9"
  },
  {
    "url": "assets/js/29.abea1375.js",
    "revision": "5373afac38e0e2d3c242eb0ccc4698c1"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.e2acb3ec.js",
    "revision": "fddd1704c0efdc26ed9c6830a01b4e45"
  },
  {
    "url": "assets/js/31.966708ec.js",
    "revision": "5075dc887e5cdbd78e9f13294fedc5a8"
  },
  {
    "url": "assets/js/32.bb1d3db3.js",
    "revision": "9513a8db61ecac539ddda7162811cd76"
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
    "url": "assets/js/5.a0e6fb5f.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
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
    "url": "assets/js/8.6d5c1c6d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.1c72589f.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.47cddada.js",
    "revision": "0b68653820e933c5b5b1d723ab102e4c"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "e5a36bc9d1bd85ce22d54e4ced52e576"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "9bcb27df0d136b2641924be72c31d9e0"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "357fc6c515419ca51b7932ce8766e04f"
  },
  {
    "url": "index.html",
    "revision": "85f2a3f7ead0710f0e007e3a3ace8804"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "0a060f9ae4b904dc1bd2f7ba4d96ced7"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "31ce35d113a6909b918ead9fef5cd42f"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "3c0b0ccf39b22415275df1cf16f9da81"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "41fa650319783e9da0f1587a5e97cd39"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6658d902e1e161a83535476cbe28afc2"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d23f33b7fef2f4c63cc40493e15bff68"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ec36e35e73409bd34ad0f8971104dda8"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "0e02b5c063b791b4e4c6735b3b41a28d"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "bf14045937d01fcdee3ae56ea319cf0e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "0a57105e3156b255c8e5d518af159f11"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "be8036d4a404f98a7e0f4c822bbad2ef"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "827768dadc035f84f7c6719321a505f9"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "60096bce86af27242b6a066ec2694078"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "16fca60adb8134bad3345f4d33139fa8"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "120755ec1fd785df7e51ddc72835fd69"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "11bf0b420c214bdcc69915dfea15521d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "6902c4c632898b983f3249ae1bb94afc"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "b3ada986ed2b26ecfe143079888ffc6a"
  },
  {
    "url": "Node/basic.html",
    "revision": "4883ad56bed9a8bc8d54c64a952010ad"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a9e0b934ba4b7eb73abf8b95e631b635"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "00fde9d06840ddd251823238d940a310"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "ba0c0e4601cbe94e54ed6a675e167219"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "48a102a61d56ade8bfe25291f2d9051f"
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
