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
    "revision": "a62b14de39388510c3f788ed5f0ff5f4"
  },
  {
    "url": "assets/css/0.styles.69e4efad.css",
    "revision": "3f5d038a396f5ee955e2f367ab1769d6"
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
    "url": "assets/js/12.cf83cb18.js",
    "revision": "a8c09df9ecc73df4806204714e4ee450"
  },
  {
    "url": "assets/js/13.7ba80adf.js",
    "revision": "3a69427efc33dfacfee94094d8cc3104"
  },
  {
    "url": "assets/js/14.287aa94a.js",
    "revision": "5580b2c43d741df4c71619c02a9f846f"
  },
  {
    "url": "assets/js/15.ba12daa5.js",
    "revision": "1b86b5b9e8bf52e21d63fd95e480903e"
  },
  {
    "url": "assets/js/16.e37d20a1.js",
    "revision": "a11710486004ed4f594b9b18d0f6f243"
  },
  {
    "url": "assets/js/17.d15fce3c.js",
    "revision": "a5157827f7934a6ec1c58ead5bc0f0b8"
  },
  {
    "url": "assets/js/18.04db3e7b.js",
    "revision": "8ee57bfb3ba25eff703ef1bd620cab1f"
  },
  {
    "url": "assets/js/19.dd8d4ba8.js",
    "revision": "88d52487cffbc1eec9f1eccd5a00ab95"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.1542a2d0.js",
    "revision": "20ed56f553d57beb597bc2d59c4d6f04"
  },
  {
    "url": "assets/js/21.6b0e37b8.js",
    "revision": "c7250012052a004243d772a97a5b5230"
  },
  {
    "url": "assets/js/22.f92d400b.js",
    "revision": "90deeaf648ad84cae165f7dfe7d0ea92"
  },
  {
    "url": "assets/js/23.f61f5495.js",
    "revision": "6ce86f52fc5fb778f49716fa7975c5d0"
  },
  {
    "url": "assets/js/24.830441ad.js",
    "revision": "93a1939204c719765e68a1d823787854"
  },
  {
    "url": "assets/js/25.2252cbe2.js",
    "revision": "2ebfbaf1f98a828150815a24c61bea06"
  },
  {
    "url": "assets/js/26.999527d0.js",
    "revision": "82c702a962fd8401ab11fc8f11d21e61"
  },
  {
    "url": "assets/js/27.ed59a030.js",
    "revision": "f903ea51aca68d72f0c9a3c4d45a93dd"
  },
  {
    "url": "assets/js/28.ce0be2a6.js",
    "revision": "959b36775ca84ec59f7d97013edd90f0"
  },
  {
    "url": "assets/js/29.be8b2d4a.js",
    "revision": "27cdd242cd22e1a032af228bd5b2a9ea"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.f8c50472.js",
    "revision": "15ac8283355034491bff946000199ecf"
  },
  {
    "url": "assets/js/31.49d96937.js",
    "revision": "6f0934c81dd3c16c2b947164619db526"
  },
  {
    "url": "assets/js/32.958a4592.js",
    "revision": "22300548ad4d7a22ac206cf0844ef782"
  },
  {
    "url": "assets/js/33.0bba6b33.js",
    "revision": "74da5a52f04aee0786b9d5d4c00d0711"
  },
  {
    "url": "assets/js/34.ea2aa3fb.js",
    "revision": "4e3cbf816d8d70c1109064d4311e914a"
  },
  {
    "url": "assets/js/35.46b64556.js",
    "revision": "b281fc5297e4f20dd0933eb6f517e69b"
  },
  {
    "url": "assets/js/36.281c4e62.js",
    "revision": "b506958db3dc5c0ef3b30ec18e728c37"
  },
  {
    "url": "assets/js/37.76c48cfa.js",
    "revision": "b2fe52fa2336c8ce1fef71b0d117bddf"
  },
  {
    "url": "assets/js/38.9665df37.js",
    "revision": "4dabf05f80d560bc5fec4092422620d5"
  },
  {
    "url": "assets/js/39.b0153363.js",
    "revision": "982dcc8e6ab2e6c3b38404f5dcd0810f"
  },
  {
    "url": "assets/js/4.05bf60ba.js",
    "revision": "2c2f8db0bbd61480f31116f68dfe33f4"
  },
  {
    "url": "assets/js/40.6a8b6073.js",
    "revision": "e2c099d1da4f02a1c6be13598365fb1c"
  },
  {
    "url": "assets/js/41.d5e869ba.js",
    "revision": "d08f51274cc0f07384cf5de897c5b128"
  },
  {
    "url": "assets/js/5.8465d1c2.js",
    "revision": "9d4f677c2b636d1b3c2009fbbc9e42e6"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.00149598.js",
    "revision": "d37218136addeca1eba48189041db6cd"
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
    "url": "assets/js/app.90648d35.js",
    "revision": "be1fa340176af3e9fb6f12cd59bd0299"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "632d18cecdd61b10c73bd15bf5960476"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "d6e50d391d23df8968c7b6f9e39fb68c"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "9fe0d1e2ab4664f329d05da809727902"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "7cf0623d0c7bcfedb1f956a8d3c283c4"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "ec3b48a05f563a9823f2bae769610020"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "7659068764d97151014642874f20a963"
  },
  {
    "url": "index.html",
    "revision": "8789dced8b2d4e555dbb7d501a26df3c"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "e991d3171240d8e2b3c6bd8c9c1e4800"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "7b1ec7c648882dd5443e2241316e72f7"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "060f4b5880cac6ca08fa345e304ead77"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "d961e82032ee3e9ca7daa28f958b79d0"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "9f42057501150cd9974359a39034ed9c"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "7dd8dc6284f0fec8b6faa0454095acfb"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "500300679cd6fe8734c6c58f14a1fe50"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "65257ca9365eff3f4764a5a52b1dcf4c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "edac44f5787c4c1abaadbd466c0bd062"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "00ffa8fec89af0d3c7eb0b5a46529cf1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b5a6cf1797cd13703ba0f9ee1364baa9"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0b4a1c42922e6d9dd6c3a0b8150b0f20"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "045b1280c60b1e0497ce9985d98e345a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "62e65fb9637ebabb89f13dc5c73481fc"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "280e0be81bbbb44b7b6c02584e23a02e"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "f864e9edb51c9b641a9320918261d297"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "2ecfae52417ff1b3097c9086df1bd49a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "98272044454646295011d42c6c6468c9"
  },
  {
    "url": "Node/basic.html",
    "revision": "6f520b85e4d167009f08e947a541467f"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "cccbad386862fed77c82cb844aae0090"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "2a4de874f20d21f228496e7638c19436"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "f75c30ea077fd18a4b3fa55d3ecac55c"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "08b8569e4e9ea105f375f63774a5c41e"
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
