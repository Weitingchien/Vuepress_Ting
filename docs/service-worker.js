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
    "revision": "1a95d51aa992145fa5b842380acc2ec1"
  },
  {
    "url": "assets/css/0.styles.83a75524.css",
    "revision": "4e4425470374790b10259b13f9885ac3"
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
    "url": "assets/js/10.9a6da3f5.js",
    "revision": "3070f5959e3f9b60b7535f4fc9591b1c"
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
    "url": "assets/js/14.b551bb7b.js",
    "revision": "729c18ce6786928fd0487e6cefb12519"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.fc2dbbdc.js",
    "revision": "92c2eba001814163a63ebeb920c1ef6c"
  },
  {
    "url": "assets/js/17.e91ebd62.js",
    "revision": "61e1a88044ec0b3b3d6e354257a16264"
  },
  {
    "url": "assets/js/18.c6716f7e.js",
    "revision": "0d0b081821c276bc5753b7f8c275efd6"
  },
  {
    "url": "assets/js/19.0d84f59e.js",
    "revision": "455bc4c984ef2bf1aa87899851bdb978"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.d56828b8.js",
    "revision": "a0aa3f96f6502c5808312b47efd054a9"
  },
  {
    "url": "assets/js/21.826ca9ad.js",
    "revision": "8d849f831e6950812bf5719d7a05bbb6"
  },
  {
    "url": "assets/js/22.4dfa3e4b.js",
    "revision": "4f689b3040bdf71f1693975d1d3d0598"
  },
  {
    "url": "assets/js/23.4d880c50.js",
    "revision": "1650b384977093662ecd4c8d067f797f"
  },
  {
    "url": "assets/js/24.d0f3a56f.js",
    "revision": "92c00908474efffcbb724ea6a983c7df"
  },
  {
    "url": "assets/js/25.494309d2.js",
    "revision": "b1670e697eed212cb71ab119f6c5266a"
  },
  {
    "url": "assets/js/26.f112aa97.js",
    "revision": "17a0211649f19e5989831a950fab66ae"
  },
  {
    "url": "assets/js/27.e6075c23.js",
    "revision": "880e51e11e8f45a14e8be33f3b07b1cf"
  },
  {
    "url": "assets/js/28.5dc3d003.js",
    "revision": "352a3753bc6b4fe77f002aca8a71b335"
  },
  {
    "url": "assets/js/29.6e8a25bb.js",
    "revision": "8888d6a8fa93fa73116ad46af5b48a17"
  },
  {
    "url": "assets/js/3.349b0dbd.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.66dc60ec.js",
    "revision": "6dd57750e893a624211f5bbbd797efb2"
  },
  {
    "url": "assets/js/31.52e7f407.js",
    "revision": "fa2d60b3440c7e4e002a76d38cd4d720"
  },
  {
    "url": "assets/js/32.27132d97.js",
    "revision": "ae850871d7d97540f14dc968772355f6"
  },
  {
    "url": "assets/js/33.0b16418c.js",
    "revision": "db5d68ac6f8d2090ac800960edc63aa2"
  },
  {
    "url": "assets/js/34.f231c6a9.js",
    "revision": "373c01fd0fe0ed2295e1adbff67687c4"
  },
  {
    "url": "assets/js/35.875dee0b.js",
    "revision": "6d057fcf49c2c50804341287f42308ac"
  },
  {
    "url": "assets/js/36.4326853c.js",
    "revision": "b28694025b9175536429d2fe55b54994"
  },
  {
    "url": "assets/js/37.b99f9f14.js",
    "revision": "428170952af08fe961a4839ea70d916a"
  },
  {
    "url": "assets/js/38.869a3c78.js",
    "revision": "0d5c738d181a85cbe44518c8bdb26736"
  },
  {
    "url": "assets/js/39.6d735461.js",
    "revision": "b743287e797af4419be857c76926609f"
  },
  {
    "url": "assets/js/4.a263a56a.js",
    "revision": "bf6c77832d5cb54aadf206eeed782626"
  },
  {
    "url": "assets/js/40.b1d713b1.js",
    "revision": "b459f798b88da2f1b7a46f2a7ce4156a"
  },
  {
    "url": "assets/js/41.d598cc55.js",
    "revision": "8a83e617b173260921ca6944720d850c"
  },
  {
    "url": "assets/js/42.1a457860.js",
    "revision": "43eed923bf80f1ff1d62906ebcda0075"
  },
  {
    "url": "assets/js/43.d1ae8d67.js",
    "revision": "9cd7bcb52c9f6d02b350642861948dd6"
  },
  {
    "url": "assets/js/44.4956fc0f.js",
    "revision": "23d57f91d9790881b236c7ec0f38a2d4"
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
    "url": "assets/js/7.5782b45a.js",
    "revision": "c63b4937a51a0920a22b22ab505a9378"
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
    "url": "assets/js/app.4d8ca0a1.js",
    "revision": "b5b1559e253e19ef8265d33eeb60f6d9"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "9a4652f80df37338ac80170b18dda3cc"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "3387f68943d2f3682646e1f974c07526"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "cf47d7f8f94c79d6e258ed08a3093760"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "f80b457bdaaa63a74b0d5ab5e55b20a7"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "d5f7adb8108722504512135d6ec0043b"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "44f7242abb85f1c32cc47e4caf6dc7cb"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "8d5184716945c092daad2d9723056176"
  },
  {
    "url": "index.html",
    "revision": "c273c7a47133063fb1be19dbcf57e3b8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "479f7f650f83385375b1eab4e47431b9"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "d2712f82cfd71dbc2ab9c1cf11a40b81"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "55033c01962674c81bf37d02632c349c"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2e970f3a967fa0740bd131a75792559e"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "9d6bacac7d25e2d0a617e36129482aa9"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "563670564d67682acda6f54509a5576b"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "88de90d2aae7d29548a4d4c767deae6f"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ae3edbfa5426246a6c7c6d37d7b32d2c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "62ebf98e500101e0afcc531d8a819aa6"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "7392ec8732839ca1b20ce8be6ecfbbbc"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "7d2071d5603292dda9829b4d443d53b1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "677954780b323439adea878942373a3e"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b290ca26fb28f2193035d15117814e25"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1653ef1ce5a34cfd2f70b6820de1efa7"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b70eecbb4a6391bb14044562c75724dc"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "1e4e02dec9560dd19c65c213163dd3ef"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "2de568d1d0418ca86c158f568df57561"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "583373554f5d6e671c691a306209299b"
  },
  {
    "url": "Node/basic.html",
    "revision": "9a0c53c7664f302f42295d04a40b8e61"
  },
  {
    "url": "React/basic.html",
    "revision": "c4a00838899aa86aa84e6110ba165ce6"
  },
  {
    "url": "React/lifecycle.html",
    "revision": "26aa5071778ae98b4c221e80df8db73f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3a5c8c19c3b26df047bda5c06cf19f1d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8388ff64d37fca36ea1f29e348994b3f"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "acf091417c49f82b1261052ceaee7dbb"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "0a87804d383244b1ef8056f510430d28"
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
