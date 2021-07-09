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
    "revision": "ba15fc729b735a61736d523a73a30b27"
  },
  {
    "url": "assets/css/0.styles.c1fd2e23.css",
    "revision": "31b3a392cfa6c8422e6af3b6e2b3692e"
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
    "url": "assets/js/10.5abad7c5.js",
    "revision": "fe44c8b881c9184fb2bbdf9bb9b308a7"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.2c86f63f.js",
    "revision": "de0690e8daf718eb736c46d5574a15e2"
  },
  {
    "url": "assets/js/13.05e0b4a7.js",
    "revision": "7f12a42dd137a9649650e10f9395e792"
  },
  {
    "url": "assets/js/14.db443f2c.js",
    "revision": "c0f1f75efffbbfd70d607fe8dd54113f"
  },
  {
    "url": "assets/js/15.097c44d4.js",
    "revision": "867acdbe0f6c41cf07d43fbecd544937"
  },
  {
    "url": "assets/js/16.cbc1bf8e.js",
    "revision": "888b8643c1707bb360ad1e3a45c3bebe"
  },
  {
    "url": "assets/js/17.819cffc9.js",
    "revision": "e449f834a2979808fa04d9f0006dd312"
  },
  {
    "url": "assets/js/18.d7e1195f.js",
    "revision": "3a858e087a921f2b12d0cf8522c90a25"
  },
  {
    "url": "assets/js/19.b030a3cc.js",
    "revision": "c8191b7ef80ba139f907f6c36cc6aba0"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.4c49bd58.js",
    "revision": "5f27b1314801596370bb1faca895a1a8"
  },
  {
    "url": "assets/js/21.91bb13b7.js",
    "revision": "591417b0477f26f7c341e6bb1a397eb5"
  },
  {
    "url": "assets/js/22.df418696.js",
    "revision": "44713ae217a4f3f119ae0ab48814baed"
  },
  {
    "url": "assets/js/23.9928187f.js",
    "revision": "fbe42a01ea70ca091944009782ef69c0"
  },
  {
    "url": "assets/js/24.af209135.js",
    "revision": "eeffd76c56d69aaa6c3e9ebef7e40352"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.26199eb5.js",
    "revision": "a114649c5ce2778b1f2ba67a5875a57c"
  },
  {
    "url": "assets/js/27.c81fb0e2.js",
    "revision": "aca329c87f605af30bfc8c95910ee106"
  },
  {
    "url": "assets/js/28.6f2c3bd8.js",
    "revision": "a6f0f11b1e983f9ac41d580a2760acd3"
  },
  {
    "url": "assets/js/29.102e1102.js",
    "revision": "d65170c8b7f03aee45f117c2139733a5"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.25f10e47.js",
    "revision": "723833be16b6fdba113f200e6a94c0de"
  },
  {
    "url": "assets/js/31.6a54328d.js",
    "revision": "d15404ce5151b22bd8b4a51738bad9dc"
  },
  {
    "url": "assets/js/32.2d7fcd9c.js",
    "revision": "bd5ddccf0870a6a9fdd15c9569410539"
  },
  {
    "url": "assets/js/33.b599cbee.js",
    "revision": "f2ba3e0cb3d5c1b9f3a25edb95f07c44"
  },
  {
    "url": "assets/js/34.8276203c.js",
    "revision": "4f3b555322fdb25170151f68e7824898"
  },
  {
    "url": "assets/js/35.6f1bc7fc.js",
    "revision": "0db7f6d272393ff2d1f428be998c2f68"
  },
  {
    "url": "assets/js/36.05948a05.js",
    "revision": "005e7dcf9e1a5afceb0f9c5e0c05df4e"
  },
  {
    "url": "assets/js/4.fe7d941f.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/5.2ecd2552.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.8c0fdf81.js",
    "revision": "74467b20cf062a5a529e46072eaa5783"
  },
  {
    "url": "assets/js/8.254c524d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.ca386020.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.f623a758.js",
    "revision": "408d431157a5fb73a74b238077fcea0f"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "af9be308928ab0cfd4e1e4d57a238e3b"
  },
  {
    "url": "index.html",
    "revision": "335455e7fbdb0c17353df534ecef4a88"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "224d0e05f9f2aa2407967d1a44f1e1d6"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "6b70b1a45249381e0cd2477c9b7dc093"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "a8eb1246204d66cc777518082a1f02d7"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "ee8c94c86e22945b258529848ffb6b17"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "753a0de20aae2d1f2bbdb7b810299376"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fa532121021f0911997f122e97010aac"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8f8f9460d4a22b73a8051efc05d1b207"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "6ad5ba9bef050c9b06c23394d7d91ac3"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "49a0f1efce043bec802de4e59b8ecb95"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "efc02dd1dc4f3c513d779cec31e525c2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "31142aeef648eeb5e24512311790c734"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "681305e8df70c4ddb3baceaa58a6be40"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "6fd56ebfe7e5538056a19570d616b9fd"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "708e099d466281b321504ab7a9348c5f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "de4005cf732de7359e06945fd2cf3965"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "f0332191d89742f45dd204c0064cc78b"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "93aa07f837e4719a729c83f6b4309c60"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "0ceb90143274635cf94e87484250cdbc"
  },
  {
    "url": "Node/basic.html",
    "revision": "1ad4d5ae544a9643feee01412142b44c"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "e10139742eb72051b555a283a2fc6c20"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8dd3c8395df5b26a0aa43e3e0550d912"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "a8d585eab079928c57115eb77624a461"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "8bf086cb92d9b23635f52ed00d9a56ef"
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
