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
    "revision": "ec2608a5ceca3a611abb664975465649"
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
    "url": "assets/js/10.b8801a03.js",
    "revision": "127525677cd484f33ff71b0fa9d1ad10"
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
    "url": "assets/js/13.0bc8e782.js",
    "revision": "4f9633c4e80ea2bfaf9c43fd99f418b9"
  },
  {
    "url": "assets/js/14.e5596204.js",
    "revision": "e34494c9a20732699baeccdb6b1933eb"
  },
  {
    "url": "assets/js/15.8d224171.js",
    "revision": "6af5a1519148a66cc7a7c59bc7cc7ec0"
  },
  {
    "url": "assets/js/16.b9d3e2c5.js",
    "revision": "12723b3702f95260904a6c6d0a9b1e9d"
  },
  {
    "url": "assets/js/17.a9f25c57.js",
    "revision": "7ee27b2854745cafdae4e58cb0a61b59"
  },
  {
    "url": "assets/js/18.1c4e5a28.js",
    "revision": "778b9c8e3254686c3f1d4376afc104eb"
  },
  {
    "url": "assets/js/19.0ea3e14e.js",
    "revision": "2680da82e8781ebbad99d3beb4666721"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.453a3448.js",
    "revision": "5b2f50187f3718581f3d3e599ab0782b"
  },
  {
    "url": "assets/js/21.dea0e272.js",
    "revision": "48b97734e7d40729e247066127ca31db"
  },
  {
    "url": "assets/js/22.47550fcd.js",
    "revision": "002cf31a15fd0fba9ed47a70903c9198"
  },
  {
    "url": "assets/js/23.8abec553.js",
    "revision": "eb096dc12d2bcabc1d79fcf24e451fa9"
  },
  {
    "url": "assets/js/24.9b008147.js",
    "revision": "1e38583e62de1113fcfb22b960fb23cf"
  },
  {
    "url": "assets/js/25.73b5409f.js",
    "revision": "3caca2a5315ebf5c6103842e4c8ed160"
  },
  {
    "url": "assets/js/26.20230d05.js",
    "revision": "0f261b8fc02e810912a04c2ec6fee8f3"
  },
  {
    "url": "assets/js/27.5560b5c5.js",
    "revision": "e10df5d44cc11a2e19b3e2fefc6805b2"
  },
  {
    "url": "assets/js/28.7a9c3ae0.js",
    "revision": "873677ec7002342192c93f18983ff473"
  },
  {
    "url": "assets/js/29.ed876d73.js",
    "revision": "7cc110ee670ce836ebebffb8a8b4bf59"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.805511cc.js",
    "revision": "9c724f58ccc6b8d4ed891eb61cf18ebe"
  },
  {
    "url": "assets/js/31.e46c5391.js",
    "revision": "2e7b6bc97aa168f482df54736019b2f2"
  },
  {
    "url": "assets/js/32.076ccd94.js",
    "revision": "00f3c60ba1f873c68f923382bc91e39c"
  },
  {
    "url": "assets/js/33.8564e279.js",
    "revision": "7e23a58c4ecb70d22673f74bc4e7de49"
  },
  {
    "url": "assets/js/34.59d7dd1b.js",
    "revision": "ed620e6a28a8ae29246fd75e4777e0e7"
  },
  {
    "url": "assets/js/35.5d9ff354.js",
    "revision": "4e5c6c69845ef5a8e2c48f6f3c63706d"
  },
  {
    "url": "assets/js/36.f7d8ad88.js",
    "revision": "8f533ac31a1abe5608dfd034daf6d5b0"
  },
  {
    "url": "assets/js/37.147e4184.js",
    "revision": "f79606bc3fe08bfce1c0a4d1ca8879f0"
  },
  {
    "url": "assets/js/38.cd5c4024.js",
    "revision": "05c0fee1149595e5a76c37097fb2a851"
  },
  {
    "url": "assets/js/39.7808b380.js",
    "revision": "6759724dc0a3d3524a14f648eece8683"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.fced7a10.js",
    "revision": "04a84a742887d353a1cd996933147ddd"
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
    "url": "assets/js/7.320721c7.js",
    "revision": "16a9d54933de43217df42db1e1a250d6"
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
    "url": "assets/js/app.1faf2b9e.js",
    "revision": "7f250c2298127a0aa713084fad1a45ff"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "87ad8ac84aa5e3961f6387796a80db9f"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "ef1d36c07abae5b9cfa4bcb5b6977764"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "54fbd96e7f0c2820a925657388842397"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "492863ee9e3d67b181d9b5883627c40d"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "1fc4b9e11d5b3338febf57126f3d4c1b"
  },
  {
    "url": "index.html",
    "revision": "a2bb60b895ccdcadb4fd11e56ad9afba"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d6684febeae0df79da56062ed1b6caf3"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "02b2d583f73246fdc70708c8be5579a7"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "e2309c160c162c99095310a4ccdb4789"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "5f9a7224659e2d8f3d202353fc5ff53d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "f899b343bebd853517eace84b00e377a"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "6c69309c1b5e3b0a022b905f053fdfc4"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "02ee48f89fa3008b2ebbf807d5f72ac0"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "2d93a4756179e391723686b6b3a4a506"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "3881195fd20edd7f90ee9bab4e108bfb"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "d14441c959409901a44ced36d22b43be"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8f86173eea41ce28dbd813b06d80bc29"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0781d257189c9516d9a3a3d04d12a8fc"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ebbbfabbba9b585edd340eff4395bb78"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "de4089d6d39b9c2aa056cd382f7900f1"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "18643121b05cd50b012b3f742a8bb58b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "9b15422173c8fa06fb5b38d36d97bbaa"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0d90a8cda41b5b53f31dababf7d7c346"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f3c1644437757dd1d540e1c7c6e4ed65"
  },
  {
    "url": "Node/basic.html",
    "revision": "ceee451f59935fb329c7cf97fe18179a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "fee32986d3be3aa6c23fa6dbb2ab9a1d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "9c9dfee15ba99d69537bd7a778989eef"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "b410eaf803ff7df5184aae72cc5607df"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "9bbabeacd92040a23fba5c66c9afb6a4"
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
