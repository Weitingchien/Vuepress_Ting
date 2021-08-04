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
    "revision": "af20d1c483bb449e34e72dec74bb2454"
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
    "url": "assets/js/13.0bc8e782.js",
    "revision": "4f9633c4e80ea2bfaf9c43fd99f418b9"
  },
  {
    "url": "assets/js/14.287aa94a.js",
    "revision": "5580b2c43d741df4c71619c02a9f846f"
  },
  {
    "url": "assets/js/15.3112a4dd.js",
    "revision": "e55940e5b9747d13f4da3137475457fe"
  },
  {
    "url": "assets/js/16.fc2dbbdc.js",
    "revision": "92c2eba001814163a63ebeb920c1ef6c"
  },
  {
    "url": "assets/js/17.2e8fcf0e.js",
    "revision": "59a5f4a339ff712b42ddb9a37a356b29"
  },
  {
    "url": "assets/js/18.7c78b3dd.js",
    "revision": "eda1e7f4a8d41560fe553be1c532949f"
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
    "url": "assets/js/20.31524337.js",
    "revision": "17c53aae744d443ecce518bb445603c5"
  },
  {
    "url": "assets/js/21.d573da22.js",
    "revision": "4a01e194ac53046a8f0a682cceb082d1"
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
    "url": "assets/js/27.bf0fd0df.js",
    "revision": "ad0bfd31f5172cbb1a86d4797ebff2c8"
  },
  {
    "url": "assets/js/28.5dc3d003.js",
    "revision": "352a3753bc6b4fe77f002aca8a71b335"
  },
  {
    "url": "assets/js/29.ea5613bf.js",
    "revision": "610e957de1b4acb19488faa8bf401981"
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
    "url": "assets/js/32.27132d97.js",
    "revision": "ae850871d7d97540f14dc968772355f6"
  },
  {
    "url": "assets/js/33.8fb0c13e.js",
    "revision": "f0d5dc236203b968ee6ec78a9d54e788"
  },
  {
    "url": "assets/js/34.f62af0fb.js",
    "revision": "b7a2dfaff66c986177c49cd35283a895"
  },
  {
    "url": "assets/js/35.038c9d96.js",
    "revision": "27e846e40392a50a2641df85f1fa813f"
  },
  {
    "url": "assets/js/36.629686e6.js",
    "revision": "22e598563bc9891bdc494c8155bfb084"
  },
  {
    "url": "assets/js/37.270ee88d.js",
    "revision": "2f1b02cb698566e270b3ac1da4e6e753"
  },
  {
    "url": "assets/js/38.623bbf19.js",
    "revision": "f5506983e93985239694b75b314496d9"
  },
  {
    "url": "assets/js/39.08d3d23e.js",
    "revision": "a547b1e523cd4803ac2290e36d16a1cc"
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
    "url": "assets/js/app.f1ca41d8.js",
    "revision": "7ae9ce34b3d9fa0eabfd29f535916d06"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "f923d123da42e975370301ec890e8bb9"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "4c9d95f2e9c0a09e24ce8279e75064ab"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "03d331c322d93d2508e167c7e044c8d7"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "3ae10eec7a2708e699b3579b98b090e8"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "ff033f660e7b5d0643985b249b97e08c"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "31a17cef13a3c04bbbaeaf378b059ed1"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "5abddf19d53fa9312d3345581c940643"
  },
  {
    "url": "index.html",
    "revision": "4e6c62bc757555876b674ce0d8e53995"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "cf43dec57637319931c8d76e6763bc00"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "209c78a78c10a6a51b2274ed8d74f744"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "b9b4ea1d578bbe1ddddca6986e15fb32"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bea1249115feea7a9b4b7062f883db54"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "67c7c8072a3fa378b9771e9b44ea2e87"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "b2343e6b897aca0fc668a3e77e6e40da"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e7ba6efa9571b19085d39084db768d02"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "45e71d297afd56405798d2c2f0060c6f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "7595d3eaa171ed334e75af1a2b482c72"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "6662d653f07354398f158cd128425f3c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "77bf0c3c3cccfa89105e917852c51c19"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "c53da9359cc40fb781c5d68a30d9c6ab"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "d68df4bf7cff62e2bb6375990ba4041a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "47940326dda256e11c4609949906eff3"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "ca7805f0e76bf50f01b524343eb59031"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "487ff2e3018aa5a3ce209ccef65cca07"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "d36b98c5dc81c4fee8dc54cc3109b71b"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c14219f80071d1336b74e54b0bb10a3c"
  },
  {
    "url": "Node/basic.html",
    "revision": "ad125d26a4be37b056897bc1f6d673b9"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "1a141f53b6156ae2ac011b1db8bc5c88"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "31abc63c04f65d4d475fdcf345957d8a"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "a4863c20c9d75a84b1d7c284b2997fe5"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "ed4e65ede463604b9ad4c34e70a55484"
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
