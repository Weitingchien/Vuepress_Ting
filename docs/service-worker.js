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
    "revision": "1fdab3bb2f3506388ef4cd51e93d9d23"
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
    "url": "assets/js/10.2f6d68de.js",
    "revision": "7f50d53620aaa0bc88a4e927db0a9ecd"
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
    "url": "assets/js/14.e356be83.js",
    "revision": "144af324c6b33952a5f10b90aec2f1e1"
  },
  {
    "url": "assets/js/15.011f454a.js",
    "revision": "dd7a02ce22b84d97bf1e27fa6a12289d"
  },
  {
    "url": "assets/js/16.10c49961.js",
    "revision": "0ef8b50ae8472df371e4600abe311d3b"
  },
  {
    "url": "assets/js/17.975b059d.js",
    "revision": "6ec15b965c133abcffb1899e021e45be"
  },
  {
    "url": "assets/js/18.08ef5c25.js",
    "revision": "d37678b29048ff150bfe460c3cb7877e"
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
    "url": "assets/js/20.3ae4ba98.js",
    "revision": "72368850fdadd334f3495c99085fc88f"
  },
  {
    "url": "assets/js/21.0dbbf05f.js",
    "revision": "10cc6062b48d7fa9dfcb2cf82bef4f64"
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
    "url": "assets/js/27.2732454d.js",
    "revision": "3e274eb64aadf8c55808d33c8ee4d549"
  },
  {
    "url": "assets/js/28.5dc3d003.js",
    "revision": "352a3753bc6b4fe77f002aca8a71b335"
  },
  {
    "url": "assets/js/29.9a72a475.js",
    "revision": "f8d21ee73ade72f7f9fb3afa73ba0d81"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.66dc60ec.js",
    "revision": "6dd57750e893a624211f5bbbd797efb2"
  },
  {
    "url": "assets/js/31.28a003ec.js",
    "revision": "a46fba9bcd483e2a61500446f7b3bad2"
  },
  {
    "url": "assets/js/32.d4bf4d7b.js",
    "revision": "957cc81328385d28645637f396581d91"
  },
  {
    "url": "assets/js/33.17a38fb2.js",
    "revision": "8e27519b3bd538b36d79b174f1270920"
  },
  {
    "url": "assets/js/34.c9f2554f.js",
    "revision": "b14ff2cf08355e379d0cf7ae005bf019"
  },
  {
    "url": "assets/js/35.21473335.js",
    "revision": "1d70cff1493fe1bc8bac72b4ce705f01"
  },
  {
    "url": "assets/js/36.faddf535.js",
    "revision": "3ce76fe40393c2a878a3dc92e1379aee"
  },
  {
    "url": "assets/js/37.270ee88d.js",
    "revision": "2f1b02cb698566e270b3ac1da4e6e753"
  },
  {
    "url": "assets/js/38.e7033770.js",
    "revision": "bcce7bca9fe92aeba3d2a67c052af4b6"
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
    "url": "assets/js/40.8e78699b.js",
    "revision": "e1925758754d31171f91723ef2647f58"
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
    "url": "assets/js/app.010b0a07.js",
    "revision": "4aa973c79f5dd97a6115e895e5abd775"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "c95299968c9112298ed6de8352e90388"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "3eed5f4dc8b8d3b997cbf056059b1822"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "35cd30c3b7d06323286f8dfdfdee1019"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "55447a332284bf857f458ca66d36ad62"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "198c4a02427e7c8e352e2cf5c175a8f2"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "81fcda82ab697efc127974b26acdd939"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "b6def6578621d3edbfbdd186488d7405"
  },
  {
    "url": "index.html",
    "revision": "f0a085421734a8aa360fcbe0406135ad"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "395344d82cb3b1d338022b129fc83772"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "d71ec89140c8931ca0509229b1ad2834"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "3b872974983c720914ac2a325badc334"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bcba41b3bfb32c4807212cd555626bdc"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3f77efb37375582a790d411bdeabfba0"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "5a1a85a157e078eef7e1c2f60d0188c3"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "d55a4ece50f72e4a3c275faa3260d610"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ab777e0ece1b6e5a303a84e5a7a47629"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "fc2170453bc3ac249c73745fc38f96e8"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a2e11fd8980f42cdd69b7d8a9ad6bfb4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "96fbebe93e945f7a82b2e964e50dd7e6"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "8e6fdd6d0419bda704c76bc77f6c9cde"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "c16940ee13d44088fa29d3dbe567c18a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ed6222d8b2534252f6724752475c672f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "539997193b363b47941259979f1d48b5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "8a344d4d089e6a036daba7a010f5d909"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "5cb48aaeb94439a1f2cc25a0aa6c45d5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "74cb8be75b78b71243212f965563d625"
  },
  {
    "url": "Node/basic.html",
    "revision": "3f0458a9caa8e62f55dbe5bbc215dc66"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "52ba4f252406177c1f76fcb29b173238"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "da2222ef4ced1c4e0ea1e90fb6fa9506"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "68190cdbbddffbc3d4e1ae1a40e7b78b"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "9272c6ed7742ffae83d29ded596e3e38"
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
