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
    "revision": "03c10e4dad2705bd2280351b8e612f33"
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
    "url": "assets/js/10.c5eb8a75.js",
    "revision": "1384704d554c1dbff29f9930a314e2aa"
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
    "url": "assets/js/13.e496d170.js",
    "revision": "f986b6e0d861e30651435e69f6f45f9a"
  },
  {
    "url": "assets/js/14.b5d446ba.js",
    "revision": "1d5eddcf384a7969968a100039214dd9"
  },
  {
    "url": "assets/js/15.011f454a.js",
    "revision": "dd7a02ce22b84d97bf1e27fa6a12289d"
  },
  {
    "url": "assets/js/16.1c420206.js",
    "revision": "f2b7ec365db8e5efabdd520da6e8089b"
  },
  {
    "url": "assets/js/17.560bbe95.js",
    "revision": "24d60a0df557355e2d7a9319f0fd09e1"
  },
  {
    "url": "assets/js/18.9f51839f.js",
    "revision": "6f0bf2e447903ab179393cc4c7761f70"
  },
  {
    "url": "assets/js/19.c1502f40.js",
    "revision": "cb7832bdcfce903c585bf7ba24fe706f"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.3ef738f5.js",
    "revision": "d0d65b27ebcd2d0c5a99cb4893e39b0a"
  },
  {
    "url": "assets/js/21.168bd7e2.js",
    "revision": "44296a9a5b97d0f5fad3a00513baf5da"
  },
  {
    "url": "assets/js/22.3a5d9cd7.js",
    "revision": "be0a03a7fd24cd0cebd346fe5d57cbfc"
  },
  {
    "url": "assets/js/23.36b1b176.js",
    "revision": "f81d90461b5b4d45fc09b31e5c989154"
  },
  {
    "url": "assets/js/24.8228014c.js",
    "revision": "1cd9e8e207ee4cf497d71a6cd35eb79d"
  },
  {
    "url": "assets/js/25.85bbf856.js",
    "revision": "9f39a91319b3f5e64146755ed5f3e6ae"
  },
  {
    "url": "assets/js/26.40ab824a.js",
    "revision": "d181a197e2f0398ace5f536d57fa8b83"
  },
  {
    "url": "assets/js/27.3057b20a.js",
    "revision": "e222f7b582eedd3a7dd18cfac78a9230"
  },
  {
    "url": "assets/js/28.3e1f4bcd.js",
    "revision": "f3f0b2895d04e1b86c1c0459b7b19dd4"
  },
  {
    "url": "assets/js/29.31af9f43.js",
    "revision": "27bd80da0dd6b84f2dd45a4f8b22c38a"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.52251e24.js",
    "revision": "ebb853d3c38e274f9364d5c9168bbec7"
  },
  {
    "url": "assets/js/31.df6a1123.js",
    "revision": "76229be42448d0a1d0355fb47300c210"
  },
  {
    "url": "assets/js/32.ed3ef984.js",
    "revision": "949e7bc2778b33f4c0f644f7c396c0cc"
  },
  {
    "url": "assets/js/33.8fb0c13e.js",
    "revision": "f0d5dc236203b968ee6ec78a9d54e788"
  },
  {
    "url": "assets/js/34.6d854865.js",
    "revision": "515e5e3e8f013571f83d8462667a7642"
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
    "url": "assets/js/37.8ce97ac8.js",
    "revision": "604cbd1c1746c29c5213ec95c7419ea0"
  },
  {
    "url": "assets/js/38.b33c9d51.js",
    "revision": "370909039e09fc4e65ac0c649bb5703d"
  },
  {
    "url": "assets/js/39.73343c67.js",
    "revision": "ae196c71570d5626272ace1e22c6b4d9"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.7c2ee8cf.js",
    "revision": "641a5bb287ffe87759eb0a78ba1c9d36"
  },
  {
    "url": "assets/js/41.8d8b82e0.js",
    "revision": "4d1d7ea356c5e09bbd21db302c9d6311"
  },
  {
    "url": "assets/js/42.11bc2f97.js",
    "revision": "323d3704aa15d3f63e51949ea046c7eb"
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
    "url": "assets/js/7.d23ebf99.js",
    "revision": "e09605e8ec4ec72fecc8692d226da1bc"
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
    "url": "assets/js/app.2bee6478.js",
    "revision": "e3487d60d112b1a423fe5df203683092"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "abb7792169f0e94bc47df087e033b0ac"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "41e277b060163954b4aa99683f1ec286"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "2df9a33460cf1ad7f17ba0f54518bad2"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "bf00f43e9917103c0f149d3714fbdc59"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "46f7317665cde73174714e3f33c3fc38"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "093ad4f3ae23c354c8fef636bcd5667e"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "f73a6a61a788c0892cfa5d8c4a44aba3"
  },
  {
    "url": "index.html",
    "revision": "1f060a65b45bdce08120c355cbda1ba8"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "91c696ccd8d42e6e0dfcc2a07a7621b4"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "3c469bf36a922346116312903e164005"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "bf236d83a9ed247b37fa52b28c35b91b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2cde7be1fd5c48917b810e42d31979ee"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c65f4df33cdee5b40e9c8be0639bcc65"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "a4a9707f77ff493dfd1526996a74cde6"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "77734a4232effb83a4da71f75d27b222"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5281d6fa5e72a371b63c0512b017d6bd"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "bb5f373a2aa53c6dbf634a2b76028647"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "1217c81c9c060f745ed215953081a81d"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "cdf79ec91132983b6d68f4d0377bb303"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "8b1b1b3ae7d18622632d6ad949648e00"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "01484d7c67515bd68985302e0e151b43"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "494c9dda1ef503357ed2c84f6e0f150f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "de8fe228ca5e0b2baecb3f886570f8ab"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b788a6d2587dfb43758b0432a8a311af"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "8dd1ed4acbab15881239613b8c3392df"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7262f2ec4828e31dfe837a47e7bebe96"
  },
  {
    "url": "Node/basic.html",
    "revision": "058367bf293f7602f750e55600d7f6eb"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "1af9c677abeef9afd51fcfb493ca423a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "88ca1476edd36b64806ce5c4c27f43eb"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "82290c19a0ca878081c154cc2f78b565"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "c50d3bd75159171f6db14aec7f8c9ac8"
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
