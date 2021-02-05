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
    "revision": "af1b478a38a12f478cf1965f01c1f5a4"
  },
  {
    "url": "assets/css/0.styles.74a4d2ed.css",
    "revision": "40bec2c5fd4ea6e98960d88c6ec33b27"
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
    "url": "assets/js/11.618b7f0e.js",
    "revision": "0eb5a77d96078a8be7da31f95f306b4d"
  },
  {
    "url": "assets/js/12.6dec696e.js",
    "revision": "e27180958ea0f79b791dd490a3cfc568"
  },
  {
    "url": "assets/js/13.789069db.js",
    "revision": "84c7844fa1ed1c708ebf0b07c8e71ff6"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
  },
  {
    "url": "assets/js/15.b8fafb60.js",
    "revision": "b6bed5b90d4c5373be17fcf59f34d1a4"
  },
  {
    "url": "assets/js/16.739cee10.js",
    "revision": "0eb8179328dacc7f2a2f201bf1fc769e"
  },
  {
    "url": "assets/js/17.8031d6ae.js",
    "revision": "4c1082f596e233db89795e64f9882fce"
  },
  {
    "url": "assets/js/18.ca61ccf6.js",
    "revision": "a24e51941442f58ef4b44af452e4d531"
  },
  {
    "url": "assets/js/19.e384ef82.js",
    "revision": "d97e409dab4a0465ffc07fd55aac94be"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.6597ada0.js",
    "revision": "51e1eb938bef7004ebc6f979ba851c12"
  },
  {
    "url": "assets/js/21.4f9b4bb7.js",
    "revision": "b9f3571c309da23a70e90cc0388386f4"
  },
  {
    "url": "assets/js/22.fa006d9b.js",
    "revision": "bfe7e10c16f4a3306202bb8404b85fc4"
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
    "url": "assets/js/25.9fe39335.js",
    "revision": "28a7387e19c029eb23bf917c8ab3981f"
  },
  {
    "url": "assets/js/26.db0cf773.js",
    "revision": "8a076907a3fdd160b2bd65fa681754eb"
  },
  {
    "url": "assets/js/27.bfc31279.js",
    "revision": "d0afe5b46917c9d1e9b0adde8797c722"
  },
  {
    "url": "assets/js/28.2ec47995.js",
    "revision": "75b538724a1a94f31a125086331c41cd"
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
    "url": "assets/js/4.92051216.js",
    "revision": "51baa684f4ab90af77880df5eae3792b"
  },
  {
    "url": "assets/js/5.d1850850.js",
    "revision": "5d2e2008d48691fad115c18c45541325"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.311dd1de.js",
    "revision": "723543769febdc94589aa1d21a3dab91"
  },
  {
    "url": "assets/js/8.3e1cc00e.js",
    "revision": "c5d22cc8c06ab823fb53aee83b099e61"
  },
  {
    "url": "assets/js/9.bb2e6c46.js",
    "revision": "9c24eb0514530fc58531d7c284cf3c26"
  },
  {
    "url": "assets/js/app.aaa60781.js",
    "revision": "73dd324c564f010ae2c19ceaa1f0d7fc"
  },
  {
    "url": "index.html",
    "revision": "9073dd9cb4fd4deb934a21f91399ce26"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b04b550382743e4576f05c218ff1ffbd"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4dca13b3c73a5120b141277e5e055d1b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e3f1d20f0447207963c68b035ede1b6e"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "920d1eea9b1d7ea449e572e941bd79b3"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "805fea7102a8098998ca94def34dc2cf"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "fc3745ba8adbe86e41695b1ea03ea36e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "546fa275c160edc7ef6c73f8a1573243"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "1eaa29c83885cfb1252c71044d821cd9"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b485e1813d6c6f886cce2d7063b39ad2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "ad784a82899249f88dd38c017134aab4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "490a6aee13d2e35f5da93c98818501d7"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "6e4c51cdf75866fcc18a88132de4d447"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "2144c2f9db9938e4205dfb4ade26f63e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "586863d60e8a02cccdf3763c2c64c7fa"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "208e12007e2dd8628df3cee35c6ce062"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b72ef22e0eea904d0414ea19a8572e4a"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "550a5acaef92422d5f44d999978088d8"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "536bc41b9f8e988aaca41ed023e46e0d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "4890045554175f532b6d936a3a523f6f"
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
