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
    "revision": "26d6ee0524c80a0d58d99d2d89c03f51"
  },
  {
    "url": "assets/css/0.styles.9602c8bb.css",
    "revision": "ed55f5f987dd62ea62bba54d0aa785bd"
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
    "url": "assets/js/10.aa5591be.js",
    "revision": "9940e565f90eb7d09574aa1876979980"
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
    "url": "assets/js/13.8b5170d4.js",
    "revision": "99a561eb9716db105a7dafa6584ef9ae"
  },
  {
    "url": "assets/js/14.45728762.js",
    "revision": "c37ccd25cc80b5ee7f637f3d1a4b095c"
  },
  {
    "url": "assets/js/15.a93ea14f.js",
    "revision": "cf1892a83da521def47cf9c66e6c9653"
  },
  {
    "url": "assets/js/16.0da8f436.js",
    "revision": "fc06d418ed0254b2413fb2e62fa43bb1"
  },
  {
    "url": "assets/js/17.179d6344.js",
    "revision": "50f86f268443e4de1c0721b43d07e89e"
  },
  {
    "url": "assets/js/18.bcba37d5.js",
    "revision": "e5fb13f16603afbd1970fdc5b270b76f"
  },
  {
    "url": "assets/js/19.983c2b36.js",
    "revision": "0450bc38b1418ab5e8ee506cc4af29a7"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.6f2b71b9.js",
    "revision": "9f68e10eb91056cf40499651441c5266"
  },
  {
    "url": "assets/js/21.e84cb5ad.js",
    "revision": "7e18415e70e9af844a159e47710e2ffd"
  },
  {
    "url": "assets/js/22.f6d92ca2.js",
    "revision": "7cf98a32aa5c93b9e6375c8974c76eb1"
  },
  {
    "url": "assets/js/23.247609d8.js",
    "revision": "43bf58e0c3d43578cf9d94fdadf5eec2"
  },
  {
    "url": "assets/js/24.192b049f.js",
    "revision": "118ef9d86880313531e06e430b2e7be1"
  },
  {
    "url": "assets/js/25.f275ddce.js",
    "revision": "15c44d5e45164726f0a57cd558da899c"
  },
  {
    "url": "assets/js/26.53fa0a2c.js",
    "revision": "678bf161c598af0adb69d93179ab22ff"
  },
  {
    "url": "assets/js/27.03700383.js",
    "revision": "7c02a17b8caef3d34ccbf7400abfc095"
  },
  {
    "url": "assets/js/28.8df1762f.js",
    "revision": "6c4077a30176450b577ec8d68317e24c"
  },
  {
    "url": "assets/js/29.174c2f1c.js",
    "revision": "83e5dcc4d7e318e488fed5a281f31497"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.f7274ea4.js",
    "revision": "0a6e1ea60ae352dd7066422886acbc66"
  },
  {
    "url": "assets/js/31.12ae0986.js",
    "revision": "f5459868ef1c1b993344f5de907391d0"
  },
  {
    "url": "assets/js/32.1eb38858.js",
    "revision": "001f7e84a388fdbbb0d5a96ca0b89a1b"
  },
  {
    "url": "assets/js/33.0bc174ea.js",
    "revision": "c2ac60555c2744ccaa998ca783193e6b"
  },
  {
    "url": "assets/js/34.c0a943e4.js",
    "revision": "df3680b9817ccee1b7c48fb975505f5a"
  },
  {
    "url": "assets/js/35.02cdf74a.js",
    "revision": "67ba2b77dd897da2c1266c945a64aa6e"
  },
  {
    "url": "assets/js/36.6e6f22c8.js",
    "revision": "0133eb1b267472f448448bbaf6cf2934"
  },
  {
    "url": "assets/js/37.31822647.js",
    "revision": "b1d39cb49c290f9536516b01006ddd23"
  },
  {
    "url": "assets/js/38.34adcfdf.js",
    "revision": "89aec049aa18e6c838a2927c92f8354c"
  },
  {
    "url": "assets/js/39.f5c59cfb.js",
    "revision": "1ad65962f1700355ccb3332af9db8eca"
  },
  {
    "url": "assets/js/4.a40011f8.js",
    "revision": "06cc846b40c24fbffef10bdd288d0418"
  },
  {
    "url": "assets/js/40.8111b8e6.js",
    "revision": "4b104502e92272c6313313deeb3725fd"
  },
  {
    "url": "assets/js/41.e189a89b.js",
    "revision": "af0f885e78cb97d1e75bac047c736fe7"
  },
  {
    "url": "assets/js/42.8c5c916c.js",
    "revision": "258d5d081cf7fad7863ae280b97214a3"
  },
  {
    "url": "assets/js/43.2521c2c7.js",
    "revision": "c7e374aa2a9aa6727f6bc4f7cc24852a"
  },
  {
    "url": "assets/js/44.63d926bf.js",
    "revision": "7f20980ec97929a1b7bc358c5845c871"
  },
  {
    "url": "assets/js/45.7b7c08d8.js",
    "revision": "711bd317aa7d0034fad79200f21dce90"
  },
  {
    "url": "assets/js/46.f47f7e9d.js",
    "revision": "27acd3afd1cdb395a3e0a275f5a0942c"
  },
  {
    "url": "assets/js/47.6248d00e.js",
    "revision": "4e1dae9aaf56a84014ffcd97948356d3"
  },
  {
    "url": "assets/js/5.799421fd.js",
    "revision": "0b255879235e6de728821eaada00d478"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.97308c68.js",
    "revision": "a26ff3d8461cfc4c79486da90afb6f64"
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
    "url": "assets/js/app.c6b4c406.js",
    "revision": "ec5174bb17548d84688c5eb04feb5cb6"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "300ad6f45a2a3bc618b3a2fb3c40125d"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "836d7d6b574ffd67a7246da872c42d95"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "46d38bc6a2f688c3f7fccec4f02ca830"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "bf19a6221a2d92b8c22b5a90b33b1c91"
  },
  {
    "url": "DataStructuresAndAlgorithm/palindromenumber.html",
    "revision": "b7ad65d1a0a7efe2cd1069ebd55e2212"
  },
  {
    "url": "DataStructuresAndAlgorithm/reversearray.html",
    "revision": "4acb97ee5dac062c719ad90bf995dcaa"
  },
  {
    "url": "DataStructuresAndAlgorithm/romantointeger.html",
    "revision": "fe6e5391dfacdd52676303a772c6989d"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "6bbbad8729061769f0af9b9ce0833b4a"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "7edc22398b187ceca98d0fc256413583"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "353b6b1797bbfc5a8c5d6f90c13acddd"
  },
  {
    "url": "index.html",
    "revision": "a57cabed9f0c880b82ec3d873a731d7f"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "89662899eec90d296e49e0ade047a828"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "509a8a0660643f74995bf7f670bb6524"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c1cbb9a2e00578d67cbcc889634321a6"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "200aa82933bc8f2252d628254c1793ba"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "f8633465145e045ed2c91216204268e7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "20c70beab1936f95b581bc4d9d2c9ef7"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "0e762da2ee4d3a9aedcb90d341225a98"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "69b1c50edfa3eef1a7418234101e284f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "05d7d8215ed1a7ab19af1f0ae3cf1aff"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "367f633536bf3cf64b64b3cebed2f24d"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "5ceeafe13f19f7fb64ac4997c09c0bd5"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "402422ac1e7ba6e2dc2b744e1522dec6"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "dbe56275609120da552e0a2d7d3e275f"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "a3c856e554feeb7d0dc2a99b2af0dac0"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "06f0ebfaa7422b01f29b10171e7cb130"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3369d1df13d83155e7970de6bc03052c"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1b7ab1ec5d76dd618d058c341e62ff86"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "83bb4ec22981362fbc1f8c7ff23e3113"
  },
  {
    "url": "Node/basic.html",
    "revision": "67130c02f072189e509098a7dfa29f3b"
  },
  {
    "url": "React/basic.html",
    "revision": "16cbebf351298f7f116e7c1e2b10e36b"
  },
  {
    "url": "React/lifecycle.html",
    "revision": "8b9426018ddabbdf738683e24340e870"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "449ef41dd254db8d7c5c913ef580e8e7"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "7ff4dc31bf8428f43582d49fd6ae2673"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "05bc4b3ab97a4cb3b8307b4e77fe3837"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "4edd08e33741316365123bc2e8a1f12a"
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
