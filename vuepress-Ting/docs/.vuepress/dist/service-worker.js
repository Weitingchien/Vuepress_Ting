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
    "revision": "c0e7540795de546fd9c9c6c270f95aea"
  },
  {
    "url": "assets/css/0.styles.10cddc46.css",
    "revision": "1a4110babc8a3eb8b9313916cb6e1196"
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
    "url": "assets/js/10.4060e872.js",
    "revision": "d4b67d19ffe1b46d78a4bac20949d43e"
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
    "url": "assets/js/13.8fc00dbc.js",
    "revision": "6519796e4d27bef1f6a658fab19153af"
  },
  {
    "url": "assets/js/14.1a267087.js",
    "revision": "b85beff513b1e543040cc8c690db9162"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.f2aaeaee.js",
    "revision": "c688d629edde27aad138963bb702e341"
  },
  {
    "url": "assets/js/17.d5da158b.js",
    "revision": "a1772a96ec7b53f86dcdb8d1fd524243"
  },
  {
    "url": "assets/js/18.527af9b5.js",
    "revision": "364b27ed76ca65fd04a00d22a9349de8"
  },
  {
    "url": "assets/js/19.ac772f73.js",
    "revision": "516c6742f1fed6d35559927c22451b7f"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.64171698.js",
    "revision": "d158e6575aeca465a9fac4bde7ad419f"
  },
  {
    "url": "assets/js/21.7102c99b.js",
    "revision": "3adb9ae0d486ba3f9541a846cc0ce1a2"
  },
  {
    "url": "assets/js/22.be319499.js",
    "revision": "e7810b0e50ee619a2c2d8057da6d9b46"
  },
  {
    "url": "assets/js/23.e36e1fd1.js",
    "revision": "4e52f3b9e07244e021f540646cb8b116"
  },
  {
    "url": "assets/js/24.0eeccccc.js",
    "revision": "7b68081251a21c3fe0263f7efec0b681"
  },
  {
    "url": "assets/js/25.55e75f7f.js",
    "revision": "e47749954cac3e9bf96153203f90a604"
  },
  {
    "url": "assets/js/26.e3b30620.js",
    "revision": "b0fdd1f655595d9e682ee479eb0079ee"
  },
  {
    "url": "assets/js/27.808b5768.js",
    "revision": "8b343c68eb5d8f74719377658e60acdb"
  },
  {
    "url": "assets/js/28.e164e17d.js",
    "revision": "593648b556929988f6287b2f219d1a2b"
  },
  {
    "url": "assets/js/29.0966366e.js",
    "revision": "a4cc8c8c2012ac9d7e07266b4c5f87b5"
  },
  {
    "url": "assets/js/3.349b0dbd.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.28915e1c.js",
    "revision": "9a24cbef24ad6bbab740689dda3b2278"
  },
  {
    "url": "assets/js/31.9185d1bb.js",
    "revision": "052a7ae84371a75911e2b6acd087089a"
  },
  {
    "url": "assets/js/32.f3bb442d.js",
    "revision": "a354336658ec16fdc6ce471398cd8a11"
  },
  {
    "url": "assets/js/33.0497acc5.js",
    "revision": "1d584224a4d7515e746362291ffcf589"
  },
  {
    "url": "assets/js/34.632d9502.js",
    "revision": "8eb9e7d2658f64a00b2027bbaf165718"
  },
  {
    "url": "assets/js/35.ff291bc7.js",
    "revision": "5c186b15b8f769feee5a045f007c8e0a"
  },
  {
    "url": "assets/js/36.7a881584.js",
    "revision": "c8501c82e4837cbfdcc557d5b3457969"
  },
  {
    "url": "assets/js/37.b8bbcbe4.js",
    "revision": "062435cfbb0a29b42baffd00a1d61e44"
  },
  {
    "url": "assets/js/38.5d9ff033.js",
    "revision": "b9bc2860159340bd381358e49713b082"
  },
  {
    "url": "assets/js/39.a5bf5b91.js",
    "revision": "a547b1e523cd4803ac2290e36d16a1cc"
  },
  {
    "url": "assets/js/4.a40011f8.js",
    "revision": "06cc846b40c24fbffef10bdd288d0418"
  },
  {
    "url": "assets/js/40.506e9514.js",
    "revision": "be68aa020864ac7ef43868e7eca31325"
  },
  {
    "url": "assets/js/41.96e78901.js",
    "revision": "0548f08507d5c660d3dd393c24d7da02"
  },
  {
    "url": "assets/js/42.ee575ba5.js",
    "revision": "846a4df3d5da7fb48611e6b40f6adec8"
  },
  {
    "url": "assets/js/43.79ba80e7.js",
    "revision": "e0b71ae01090d9f9625fa30bade79c8c"
  },
  {
    "url": "assets/js/44.53dbd717.js",
    "revision": "36b3e8b0164078f98d21a4564d85c1b0"
  },
  {
    "url": "assets/js/45.fcd7fbb0.js",
    "revision": "2abf64959e7d640354e23c64fc045c27"
  },
  {
    "url": "assets/js/46.dd27b868.js",
    "revision": "dc208d9d45f46f8709796b0ece07ed1b"
  },
  {
    "url": "assets/js/5.b2dc554c.js",
    "revision": "c71471b9a5e826791e2730241d4ddbcf"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.a74b54b4.js",
    "revision": "2180de890370b07723604af0b3553d72"
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
    "url": "assets/js/app.811b3454.js",
    "revision": "c7624b7141a1d9f7787de7bf6bc0071a"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "be6e5d4e0211524322a691910becead6"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "f5aa739eb2fd38b87e6d45e2df1085b7"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "e7dd4f5b09718f9c8525ddbff69bda9b"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "37bf29a7cb620e96934ee56a373b107e"
  },
  {
    "url": "DataStructuresAndAlgorithm/palindromenumber.html",
    "revision": "e7c14931bbcbf81d2ee9f162e330c457"
  },
  {
    "url": "DataStructuresAndAlgorithm/reversearray.html",
    "revision": "c36e79caccc14e0546d1573a07c57ac7"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "4d32e37dea5880f2b260b22c30f0614e"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "1f18373dd32b5fc6130c21f99ec30e78"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "f024cc1c8e6c5ea545cc83a2507e4db9"
  },
  {
    "url": "index.html",
    "revision": "2a68e320aadc39a29c3d5150e9397440"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "1377aaad1d7c8f0b96430cb9894600ae"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "0a905ecec8023a4c1363304852327f8f"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "f016f14a425b7bd0605add65e714571f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bc08da3b001e2bffde6eaccc362c294c"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "7ad079bc52d7e2f29da68c088db18770"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fbee5a59d281098e825880bd23257626"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "5b8774c54b378b61babf12f396589b5f"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4d95538f146cc95e8b642ca5d4d85476"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "a0afad14378300b499a2ca3ba575cde7"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "eb96cede0d90ef66926be1d9806d2890"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "4b6ef59643cdb99e645e0025c63d09d4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "d93c40bda60891f59ff5c41edb9ab3ef"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7ef4b03d8aa2ac6d926009a4ac60873c"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "def1f4237e50cc35ae2d64cc38bb54f5"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "fed9f83b573abc677238f4fb4820e292"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "9842b545dee77772125e961bf31d35d9"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "dfd1cc18141f292f4f887495d8bbbee2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "0477254601e2b00e74c0a6c8f66157ac"
  },
  {
    "url": "Node/basic.html",
    "revision": "e7c952da4ab1c4c56865bdeaa09515a0"
  },
  {
    "url": "React/basic.html",
    "revision": "9c5989b49b0032f2144674c429e015a7"
  },
  {
    "url": "React/lifecycle.html",
    "revision": "c50965e91765915a2e81d6b00029f96f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e656f7507bf61e1b0ebe23b4cfb6a964"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d84725553c0a89f50d1647a536d652cf"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "eb2d11f5eb6c4fd6526e379b1da85238"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "7943453999f79de2b15684ab213b0e50"
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
