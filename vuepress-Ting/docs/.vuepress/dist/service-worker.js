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
    "revision": "aa0b925c1cdc95b41d9c42545e710ca1"
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
    "url": "assets/js/16.b9d3e2c5.js",
    "revision": "12723b3702f95260904a6c6d0a9b1e9d"
  },
  {
    "url": "assets/js/17.a6fae8cd.js",
    "revision": "aebb858481ff3255121257b60402cb27"
  },
  {
    "url": "assets/js/18.9f51839f.js",
    "revision": "6f0bf2e447903ab179393cc4c7761f70"
  },
  {
    "url": "assets/js/19.3ce231be.js",
    "revision": "161e582cbc286bc967e4dd87361038ea"
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
    "url": "assets/js/21.b4a5404a.js",
    "revision": "052e120719e5a01a7d813e23b77520de"
  },
  {
    "url": "assets/js/22.4dfa3e4b.js",
    "revision": "4f689b3040bdf71f1693975d1d3d0598"
  },
  {
    "url": "assets/js/23.765e003b.js",
    "revision": "8561b13e854a29103a03f417cfe65524"
  },
  {
    "url": "assets/js/24.8228014c.js",
    "revision": "1cd9e8e207ee4cf497d71a6cd35eb79d"
  },
  {
    "url": "assets/js/25.8ba08e9d.js",
    "revision": "66a5bf178faff099a5c527288b6f4c76"
  },
  {
    "url": "assets/js/26.692aa6e1.js",
    "revision": "49f15a863390a4592c5d9b2f6833bbdd"
  },
  {
    "url": "assets/js/27.3057b20a.js",
    "revision": "e222f7b582eedd3a7dd18cfac78a9230"
  },
  {
    "url": "assets/js/28.5dc3d003.js",
    "revision": "352a3753bc6b4fe77f002aca8a71b335"
  },
  {
    "url": "assets/js/29.d1314057.js",
    "revision": "7514d93d226be3c50168925c5a3fe8ec"
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
    "url": "assets/js/34.6d854865.js",
    "revision": "515e5e3e8f013571f83d8462667a7642"
  },
  {
    "url": "assets/js/35.875dee0b.js",
    "revision": "6d057fcf49c2c50804341287f42308ac"
  },
  {
    "url": "assets/js/36.b374a792.js",
    "revision": "8feaebfa4d2cd4d1e1a50d493af9c279"
  },
  {
    "url": "assets/js/37.8f787f46.js",
    "revision": "2f202d7e9a9c9109cfb9cfdc91e7ff24"
  },
  {
    "url": "assets/js/38.623bbf19.js",
    "revision": "f5506983e93985239694b75b314496d9"
  },
  {
    "url": "assets/js/39.0efd9108.js",
    "revision": "b6fe2839f4b8f222a148441de6c35139"
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
    "url": "assets/js/41.101ea161.js",
    "revision": "d1aad06df0fe7106ea0dedd4352525c5"
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
    "url": "assets/js/7.19bf9b44.js",
    "revision": "7486b57bbc85a1af61f77fde952a4550"
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
    "url": "assets/js/app.6643def5.js",
    "revision": "8e69efc4033a8ac5b27bb5b14a21b8cc"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "8a27f1c85eb05174d240b44d00afb1ff"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "58d0d08a7cdffa4b758af4d35d78f406"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "a77f8678945aa5aac003dd8d5c48402e"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "4342862e6b0f51a5e2ec3fcd5e534f32"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "66126b31358bb13851e6c10655ad4feb"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "91cd084998f64ae844f4a969aac87b9b"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "2b4d29f149ec618442d1fc131cef837f"
  },
  {
    "url": "index.html",
    "revision": "7547ee38907362859e16052fe22f6b61"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "26657038f82fa2242dc8c034746db7a1"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "83ff26907e05c8506c650b8aaea9acdf"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "2bf8c49fe714cd84870b33901bbac7b2"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d91588b3d16a922f4b0c20090455b837"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "49b66791a31a412f7a90f18059d4cb27"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "2c5e498a105a2697cb6eaf68c58d4366"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "62cf50f42d42b4f6e3c48ab26530ad3c"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "b8e55c76a3a10f7a8ca2aad00dff96dc"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "b65614359a1ca37f0dfa85098f00f474"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "c36639ad1e1d8ced43f9b12fe051e44b"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c8d4d55e8f2382656321e3fbf740a735"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7459634e55636e497167654987ccb785"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "42ec42e08e5a90989fca6711e9642861"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "a6182125b0770ea03ec24661bc9150e5"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5f9db2c6b7824030b202924bb250f35d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "b09e276ef40ceaccccd59b01b99b6719"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "2e73d006f5803b9d08a9e6f934bdf3f5"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "fa06c9ab787fe85ccbbbfc65e66cb593"
  },
  {
    "url": "Node/basic.html",
    "revision": "4115637f83dd2c101346b3cf8c1ee199"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "5b1155092690148579fda604b8634d51"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "079014ba35e534755b958cd91a5c3196"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "b704d4a4f05f5a089dc4fcbbba0ff49f"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "31ec98c83f8c9eb8a379afd8c9b6f083"
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
