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
    "revision": "f520c38a7dd573ca6169de1d0ec66b36"
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
    "url": "assets/js/12.c275e9ca.js",
    "revision": "8c23f92c1d5b2d89f43a05b4f0d49ede"
  },
  {
    "url": "assets/js/13.8b5170d4.js",
    "revision": "99a561eb9716db105a7dafa6584ef9ae"
  },
  {
    "url": "assets/js/14.b5d446ba.js",
    "revision": "1d5eddcf384a7969968a100039214dd9"
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
    "url": "assets/js/17.c52117ad.js",
    "revision": "87a989ed420602f3ba98e3844e5c875b"
  },
  {
    "url": "assets/js/18.1a66b48b.js",
    "revision": "6cc8753cd3c8d5af4a31cc7a47a916ff"
  },
  {
    "url": "assets/js/19.6b13286c.js",
    "revision": "0f31afa7aaed65b9d365c1a48d46b379"
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
    "url": "assets/js/21.188e6207.js",
    "revision": "34a2814c07a1c95c60a5016bde49a52e"
  },
  {
    "url": "assets/js/22.72f61fb7.js",
    "revision": "fc545d39c24ba2badda47335127fb804"
  },
  {
    "url": "assets/js/23.3b2f953d.js",
    "revision": "a5722b41d6b725c4719eae1908a34070"
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
    "url": "assets/js/26.95c0ccb2.js",
    "revision": "a35f107ef9bec8f42db93781ce5203ec"
  },
  {
    "url": "assets/js/27.e6075c23.js",
    "revision": "880e51e11e8f45a14e8be33f3b07b1cf"
  },
  {
    "url": "assets/js/28.d844450d.js",
    "revision": "231a0270ef8c86e99f30a510821902f8"
  },
  {
    "url": "assets/js/29.6e8a25bb.js",
    "revision": "8888d6a8fa93fa73116ad46af5b48a17"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.b4ddae6e.js",
    "revision": "292809f09b2fe44b93e25b9b5232b509"
  },
  {
    "url": "assets/js/31.52e7f407.js",
    "revision": "fa2d60b3440c7e4e002a76d38cd4d720"
  },
  {
    "url": "assets/js/32.25196118.js",
    "revision": "3fbd4782745270fdb610ed7f962040d3"
  },
  {
    "url": "assets/js/33.17a38fb2.js",
    "revision": "8e27519b3bd538b36d79b174f1270920"
  },
  {
    "url": "assets/js/34.caebc05f.js",
    "revision": "b76b0dd193c10c7707bc8c701e819e31"
  },
  {
    "url": "assets/js/35.21473335.js",
    "revision": "1d70cff1493fe1bc8bac72b4ce705f01"
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
    "url": "assets/js/39.3d6b0194.js",
    "revision": "68fd4beeb204162ba64d7bfda306e761"
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
    "url": "assets/js/41.da014ce2.js",
    "revision": "052c1a482b126991642316a4a9f3f352"
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
    "url": "assets/js/app.7a9019aa.js",
    "revision": "db3870101f93eb035ce12c22c6108eaa"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "0d438e475a153357df39724f19635b5d"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "2c1e320be42a4dc1afd4f81eaaebe85f"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "f1ddeb95b34ed13658e0fec1fdcf9537"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "6cc09b12880929cccbb9dada5d58275c"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "fabd1eb6564c8e74c78f6842dabd57f2"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "d85b09ad8878bf527bea0dba01175ce6"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "47d77e073bf18f34a206d39f594b5c51"
  },
  {
    "url": "index.html",
    "revision": "cf7f322dc2f8313e19691152c3037a6d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4820cebf748d984002200d64aae9a285"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "7f8455320683c74ddd9253dbff455e66"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "55ea2e65528969e27e53414bdfa6e516"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8ff11c4fae79f1bf5be44b9c084edeee"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d54ad195724f434b1fbc6902c6c6213e"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "684b4d85f95347b82a901c447e9213a7"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "fc297e7c5a6ba30860d3e87b611ddb22"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a98e9f340c59cb73c0c1bb0a16b96425"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "f386ba75e57b1d2544f669982c9ec79d"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "80edcde5032d37cffeb1d8004e5bed01"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "3d9e818d5acd89c6d15acfa4eda2e514"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ba08de687cc784a0f2b15f69548e6c73"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b93cb7bd94ff0894b2b03a17db6a57a3"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "b30283c3a79059903bcd8cc001105c9a"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b08dd69e6b2e124ee42db96ae497f214"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "349c64b0558a18599429477fadb5c831"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ae35ba0ea8064dc04561fa0260b14244"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "639781ea01f7eb3f00810ea106beb5be"
  },
  {
    "url": "Node/basic.html",
    "revision": "423179aa022ae136527fc8146ccbb1d3"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e6f0effd464d739a487ff3da2cc8949d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "1ee36d71652a7edeeff8c7111fefa011"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "5471a6fc1fda7ac6826e0f231ff18e74"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "808ffba1c974067bb2735b7cd69f8498"
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
