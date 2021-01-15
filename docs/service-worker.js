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
    "revision": "d7d1ac880ee7c08d4d07ea4d31b327b9"
  },
  {
    "url": "assets/css/0.styles.3dee2dda.css",
    "revision": "cd8b50ffbecb3746b4a11b666f57328a"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.f6420561.js",
    "revision": "3c2c33ec248aef2c05ae77193f017540"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.0bef3f13.js",
    "revision": "991abc627b0a17834b009d234fd9efdd"
  },
  {
    "url": "assets/js/17.5b891347.js",
    "revision": "5262d220656a8665e4d681b997bea23b"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
  },
  {
    "url": "assets/js/19.ab85ca15.js",
    "revision": "43937b9b776118d1ad64c37f5d14fd01"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.f5d1a4d9.js",
    "revision": "2d30c9584a1b6aee958eea75fb3c414d"
  },
  {
    "url": "assets/js/21.aa14218c.js",
    "revision": "0d527070ea771ddfa84a64ebbb99a30c"
  },
  {
    "url": "assets/js/22.6af61cdb.js",
    "revision": "afbdd44478886e0cc34614d8049b7e69"
  },
  {
    "url": "assets/js/23.81e19d30.js",
    "revision": "330677d7005feba05f33a675d32d4e86"
  },
  {
    "url": "assets/js/24.80920d52.js",
    "revision": "081250bda54fbff5562a59fdff10b6f0"
  },
  {
    "url": "assets/js/25.68b2c7e8.js",
    "revision": "6a6f27e3a745f26aec5d2674be51260a"
  },
  {
    "url": "assets/js/26.d10e026a.js",
    "revision": "31bc78ba8f4827cac2c99613fbbce58f"
  },
  {
    "url": "assets/js/27.7bad2d32.js",
    "revision": "b6554754ed83df2ee1b00ab67ba0f47a"
  },
  {
    "url": "assets/js/28.74950dbb.js",
    "revision": "28f0c8155ab70aec289137f891153e40"
  },
  {
    "url": "assets/js/29.d226f03d.js",
    "revision": "5d0fb9b487bd8c67704aa38ffc0551f6"
  },
  {
    "url": "assets/js/3.86eaccd3.js",
    "revision": "c009db7ab3239bbfc2fdd20bf9c9f3b0"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
  },
  {
    "url": "assets/js/4.c482f19f.js",
    "revision": "b4781e6340f666d4b15234869c1fa3b9"
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
    "url": "assets/js/7.e4edf25a.js",
    "revision": "abede7770fed24b37fc0f5e45d8daed1"
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
    "url": "assets/js/app.fffc2610.js",
    "revision": "ada3af523bdb77b852ab24a0fc109a3b"
  },
  {
    "url": "index.html",
    "revision": "c815bf8998b7cbf6e7efa64a3970a045"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "dcddf87d7be7d5d0a7cb3fab995cde0e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "78568a3842a0c1b1d1a99afc0880bf1b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "eadf4c4b49888dbc071de9af01e685a5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e485ddb0a23e4210ce325b397605eb50"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fd4ebfcaed69a7f79a9b7296fa46b27c"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "71365c8765b3d55bdce80332f1321ec6"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "1d31459eb2fe981260485f36a217c9b4"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "80f2725583e6fd7cba8a2256599289e4"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c72930b5276015d0ff6053225a340dd3"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "165a61ae06e3e391c3ffbbae2e237aa7"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "0c7797ccad51bad5527b9997a7c36856"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "34225844c35f420104c31d94e2f8c263"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "1f64eabd60c464b384fd20ceb2c0c437"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "e3389388ba01b0d0d1f0b39b37a9333d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "91297a4f63b1753c39d4d5f2561a74a2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "2701780a9b869bef4f024efc0d70a40d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f15fabe44f354c2ebd4a596a23e8ab5f"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "dc2df4d4837c2e4485a3273c9a5f1441"
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
