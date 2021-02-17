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
    "revision": "82ba21f73226793025d5e8181f2e8109"
  },
  {
    "url": "assets/css/0.styles.7f133768.css",
    "revision": "8c09f52944c2031184dc7a72b4af1245"
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
    "url": "assets/js/11.17514c33.js",
    "revision": "e638f4e99f7ea96968bcdf443bde6aa2"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.2f6bf183.js",
    "revision": "355e2361ebcfc648139a121f8109e544"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.d0e9dc9c.js",
    "revision": "d5141c45b682256e844f4ba6cd7b7022"
  },
  {
    "url": "assets/js/17.039fee4f.js",
    "revision": "8536a057937255878407afbab9bac83c"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.9f982ce1.js",
    "revision": "58689c693026f4ee4880bf93d65eb195"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.39fc09de.js",
    "revision": "7a445a528fc8ee805e51891a27f0fb40"
  },
  {
    "url": "assets/js/21.eda8ae30.js",
    "revision": "26a6a5d352d2d0b2818b967b135adcdc"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.f4ab85b2.js",
    "revision": "3615a1d9f0d3d081057dfd38de06dbc2"
  },
  {
    "url": "assets/js/24.c54d3343.js",
    "revision": "dcda03747fe97ea04cc66f5d233e0fb3"
  },
  {
    "url": "assets/js/25.215059be.js",
    "revision": "b97a8544090fe711de799514be96eae9"
  },
  {
    "url": "assets/js/26.5b92f9e9.js",
    "revision": "a25e0f24ac8db7dd1a74f49b6adb9e46"
  },
  {
    "url": "assets/js/27.0a43a367.js",
    "revision": "6fa88cb94ce47c403e158e3e91c8c0db"
  },
  {
    "url": "assets/js/28.eef81cc9.js",
    "revision": "5ec18da961636d0e2a64d45fe18ef02a"
  },
  {
    "url": "assets/js/29.b1213f5e.js",
    "revision": "0085b934ce03fe1ad3658a2bd278950d"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.949071bd.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
  },
  {
    "url": "assets/js/4.3bead0d7.js",
    "revision": "02ea3b4a851cf9faafed602a1dc4f112"
  },
  {
    "url": "assets/js/5.2b550773.js",
    "revision": "82c79708c25e47fdb9de09cf03d8256b"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.a3ad9c33.js",
    "revision": "fbc890034f685aa8b0ea65b808878137"
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
    "url": "assets/js/app.c5df08da.js",
    "revision": "d48349a9c0038fe02c909d37dd091d8c"
  },
  {
    "url": "index.html",
    "revision": "3a805cfcca31e5138ad2a5d7e791e179"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "7d52de63016b9078d2ce1d0492518cbe"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "da4ac3c11f14e7799d2432638ae38c06"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "f8750341d982c9eb35c1d4dee96a125d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "78369103f3430ccc664deea2c7118ebb"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "02ac3eca2555f3e733a5ed7416c8f136"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "80a32a416ca3fd89d6e76df4f35f3923"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "a4b780e7c33d2c26e2615fb8468a072c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "b740455632bf2ebc4b3d318806add2a0"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "30c7a89f69fd2349b058f96f25698bcf"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "22e19003263117f330bb7a76da1f8816"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "f7d3689f4667e3e3d1d2d13745bdc4cd"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "56e1f8ffcb817e3f79496dc5b0a32907"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "78b4fba6e872a8219d52644ef7c124e9"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "5bb0b5b7a97c436d238595a1eb138cbf"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "36371dc0df01669e5205b0ed80b8fca1"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0cca389354d6e91580a00825efd99850"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "60185a75dd0f4d2fd16f078b70503aa8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "049e032dee63c0488c0511fed62446d9"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e1a618a7daf434ba817f434316bfdb73"
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
