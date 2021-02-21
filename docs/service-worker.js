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
    "revision": "4a3f7511e5bc23bd8268070dbeddf4d0"
  },
  {
    "url": "assets/css/0.styles.a97371bb.css",
    "revision": "bfee028ec58cb04eb676966adb63f479"
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
    "url": "assets/js/11.457a38ed.js",
    "revision": "3bee594bc853af3dd167373fb070b6cd"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
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
    "url": "assets/js/16.3e76da2f.js",
    "revision": "630f2ec10ab12d401a9bc477769660d1"
  },
  {
    "url": "assets/js/17.fb60ce22.js",
    "revision": "21f5b9f4fac702634a0bffeef3d54918"
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
    "url": "assets/js/21.6744a9dd.js",
    "revision": "7893855b502006653547acfb99594868"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.5af4f184.js",
    "revision": "e29c0b402283d7f406bffe717f7d3e87"
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
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.ebcfea8d.js",
    "revision": "a2c6a9d96736dd58bdbea7b0ff0820e8"
  },
  {
    "url": "assets/js/28.2ec47995.js",
    "revision": "75b538724a1a94f31a125086331c41cd"
  },
  {
    "url": "assets/js/29.651b58d6.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.86eaccd3.js",
    "revision": "c009db7ab3239bbfc2fdd20bf9c9f3b0"
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
    "url": "assets/js/4.92051216.js",
    "revision": "51baa684f4ab90af77880df5eae3792b"
  },
  {
    "url": "assets/js/5.5c4830ef.js",
    "revision": "d5a58e822b4e169f68fdc0b7019adcc4"
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
    "url": "assets/js/app.28eeba42.js",
    "revision": "20fe1f644422ba02c5ce6547e2f2abaf"
  },
  {
    "url": "index.html",
    "revision": "65d1b5b4996605eca37715e672a444dc"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "581015cf8e18a4a47d73a9279d6d50d6"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "c919a6b59a1e91dfe0f886686d8602c7"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "ea441c140a7a37a33857067494e69060"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d185c7887e06b18b86dcde297d17f68d"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "dfce5b00b6ffa3d82028f94b9ddb8713"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "493c6d5fa4517939960415936c6309c6"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "f919bcae83a59367a18108b436453c19"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "9229b18961c6170b2902ef6a00e6adbf"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "42f5b9bd142f7559ab99601758090992"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b7542907fa148f32074642ef935199de"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "bd18dcdf0f2b308cf1a19ff16d1c3b62"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b13e98fe6c2efee7d8c8d77c28425713"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "4cebcc78d57f8c402643191e6730218f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "8b903b2e49b8518d77d24872bf03938f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "83fa9d8f3a84bd7f5b26c0ab96dcea2c"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "eedcbed5e9725d0508c988e306c20157"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "73af2513a10e210e49fe415c4dc54c41"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "47c85a93bcc42afa51f507c245466b5e"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "890437029cda99791c41af6e611245fe"
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
