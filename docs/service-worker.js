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
    "revision": "cc880f5cd1e1640cc3bcba23444cd958"
  },
  {
    "url": "assets/css/0.styles.7bce3c7b.css",
    "revision": "ea7b35055c8ed4edef869f7dc9d44bf5"
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
    "url": "assets/js/10.9999eac0.js",
    "revision": "48426918e816c490c522bfe025e18696"
  },
  {
    "url": "assets/js/11.d61bd4d3.js",
    "revision": "97935ab868c6c555a74144c3f9febbed"
  },
  {
    "url": "assets/js/12.f87c64e7.js",
    "revision": "464ddfc924bb8f34b10f8c08d310e15c"
  },
  {
    "url": "assets/js/13.ca3eb5d9.js",
    "revision": "55bee6c79f04523ffd2fceac491ab3b3"
  },
  {
    "url": "assets/js/14.ff001c5b.js",
    "revision": "e41b97667f42e78112a8303ab028595e"
  },
  {
    "url": "assets/js/15.50f2ac71.js",
    "revision": "88eceefaf7a82ff84272fe3018778791"
  },
  {
    "url": "assets/js/16.507d8b7d.js",
    "revision": "b3c95e1f9331f8dc6d7c95e4a4b81733"
  },
  {
    "url": "assets/js/17.02ba3247.js",
    "revision": "f75b6dbc559c3b9497e57f0be57bc6a6"
  },
  {
    "url": "assets/js/18.98ff6b90.js",
    "revision": "efb1b8678e684b447778f7492e0a4002"
  },
  {
    "url": "assets/js/19.f05bb258.js",
    "revision": "14d0fd5c02437de712463ade70c6934e"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.7b855f4b.js",
    "revision": "35f5d1fd0fefb4f8c3d392612927b368"
  },
  {
    "url": "assets/js/21.9193b570.js",
    "revision": "6dd57288fbf18f5ab48f67093545588f"
  },
  {
    "url": "assets/js/22.e1cae2f1.js",
    "revision": "55e9ae0390695554b9fdc255912d23a8"
  },
  {
    "url": "assets/js/23.351dd5cc.js",
    "revision": "8d879c55a07cf90ca5c9e6e8020ee433"
  },
  {
    "url": "assets/js/24.b3e767ef.js",
    "revision": "f3fad38f0757499a6518c490a516e5ef"
  },
  {
    "url": "assets/js/25.9c7c00c5.js",
    "revision": "e46d11a80ecdac57fc7037606e6bfc4d"
  },
  {
    "url": "assets/js/26.55c4afcc.js",
    "revision": "e127800b9b66be0cc339070be5b608e2"
  },
  {
    "url": "assets/js/27.b271735c.js",
    "revision": "1ea8e42834a8e66fa9dd43c57951469f"
  },
  {
    "url": "assets/js/28.18d3fe39.js",
    "revision": "fdda2bb43fe4a0edaa2e740176746fc5"
  },
  {
    "url": "assets/js/29.464e2626.js",
    "revision": "cb04ed019d9326703c335daf0c813926"
  },
  {
    "url": "assets/js/3.afb81690.js",
    "revision": "8d60d2b772a58a6432e8910191272907"
  },
  {
    "url": "assets/js/30.7c7db51e.js",
    "revision": "aab06965cf753f438a169747d169a11a"
  },
  {
    "url": "assets/js/31.de91244f.js",
    "revision": "f65de9f29b8ebbc4e13d2b2deae07469"
  },
  {
    "url": "assets/js/32.a8f7b559.js",
    "revision": "7c8a70f2df0d888b8969a0634ed7e089"
  },
  {
    "url": "assets/js/33.c9fe14ee.js",
    "revision": "fd009716aa0d246dee37c8580f618981"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.9749b1e0.js",
    "revision": "a5c31530fa69a649493899a0e771bf0d"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.2c0146aa.js",
    "revision": "1337d536527626075f58f1dbcfe58f44"
  },
  {
    "url": "assets/js/8.8d2fb1c1.js",
    "revision": "548d521502a8eb6c184d9a11599b4e8f"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.e7acd9ac.js",
    "revision": "10140575de75f583eb039da73ec08877"
  },
  {
    "url": "index.html",
    "revision": "efc9381e967a3227e8c6c0eaa307bb4d"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "f774865b95dbd080c287043870a9fc23"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "fa41488e2b38b95770ec175763ca17a1"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "551da065fc84b08e4487775a6cfbafe0"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "cd82f9e471364b165d27241d605f71e0"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "df05ac3ee71ea8aef0d9668e2fd05842"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "37ed6413042ad73341b6c1ddec4c5a46"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "cc42ed50b08ca88d83b63e93baa9c400"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "bdcb36a1b3e26649107fac249f26dc14"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "663df5cb3475e978ca5972e7be17c81e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "97d4fe7aa574eeacff6f142073a25db1"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "84adb83c8c31dfe81f64616848ad5d5d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "ef2bee3aeef35ff79ec541ee08e3f7b3"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f1a23e5cd33a8fef3666b965ace8d3a4"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "8c3f178da05a4814fae377bf8c88a460"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "f38027640769f5ced22736ae6e9a55ea"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "09077ad70b105efe7793664879dea8df"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "629fdbcc9ca6cf31bfdb2542efee3748"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "2ac977a5c81ba9a61c26124c378ae4b0"
  },
  {
    "url": "Node/basic.html",
    "revision": "e6879508169ea9fb3a84f38248933411"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3aac3ca74f6bee27ceba7c2dc5645023"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "d253b5f59b8d690687e3442615755613"
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
