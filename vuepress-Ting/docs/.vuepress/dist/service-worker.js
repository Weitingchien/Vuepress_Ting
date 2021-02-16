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
    "revision": "913e981dbe16b33b48ca5bb72a24fc6f"
  },
  {
    "url": "assets/css/0.styles.c6707bb5.css",
    "revision": "44b11f49b6d2b23fd01bd446a39b247d"
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
    "url": "assets/js/13.c84294b1.js",
    "revision": "f01f645c67ac0efdb7e878261e656db3"
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
    "url": "assets/js/16.d0e9dc9c.js",
    "revision": "d5141c45b682256e844f4ba6cd7b7022"
  },
  {
    "url": "assets/js/17.b2c32869.js",
    "revision": "76aaeafb0ac6883a98e0b42ede50185e"
  },
  {
    "url": "assets/js/18.95ecec18.js",
    "revision": "88285ce74256d1f545698fb3b3a3ec81"
  },
  {
    "url": "assets/js/19.215541ec.js",
    "revision": "dc5da7878fb9c4f9898c2248ef53e9cb"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.0a478a02.js",
    "revision": "08c4df1573b7ac4bbd0bf5d597d9c4ac"
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
    "url": "assets/js/23.613a3014.js",
    "revision": "3e4cb0dc0a9d2cfd369becb918ddea31"
  },
  {
    "url": "assets/js/24.ae9911e1.js",
    "revision": "6b68638a64cd8e310a1fe4b00bbb909a"
  },
  {
    "url": "assets/js/25.a075e0da.js",
    "revision": "d887df39afcd4462935eadcac28594ac"
  },
  {
    "url": "assets/js/26.6d689f01.js",
    "revision": "3d213d8d09d624330d7e120796fa98b2"
  },
  {
    "url": "assets/js/27.a9cad2dd.js",
    "revision": "55b5a3be69e49a2d2ad93f9f991940cc"
  },
  {
    "url": "assets/js/28.e9a229ae.js",
    "revision": "887ed8fc4ef99edf04c8e1754af1e038"
  },
  {
    "url": "assets/js/29.651b58d6.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.33681213.js",
    "revision": "c7c5f5f7a8c613528b1fbee1886be375"
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
    "url": "assets/js/app.e0467689.js",
    "revision": "a8819114b35376cb03297652b46bc750"
  },
  {
    "url": "index.html",
    "revision": "cd760f009991f37565bf9c07906ff172"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "02381ed65669de19a39860d30e63cfca"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "36daad5718c34166f4d6e31cd0d3f251"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "42915d3f0242388d773e1a7da0dd72ff"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "61ab8e3fa258fc7482192b5f727fbd57"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "11f280206d74beadeea1eb352d480b00"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "95f2e3d1970d9f3679608f909791961a"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "0a737a35c62efa88c1e0837f29446eb2"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "cacf8b8f4034a3bf95a76d48ceaf8152"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "1ae32dfeb6ecabad428b2f43893c9c1f"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "93f3d3f91b4f17f118847c22f9a3be3f"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "278182c1f83f85763a824dd0d25e76a8"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "51c1e20ae712966fa72a48fd47cecc75"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "69d029204502a159acee9f51b129c18c"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "fa9cefc07498341fea171c9e3646ba53"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "0c3de966663440d3efab6db397a6c8dc"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0afc957917bd8c0827dc9f282fad48df"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "ccf21398c47156613ab9b15a64c67da6"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "26eea828aba37de469bf4193285ff99a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "2b7bbfde986fd9c3ecf298361cacae71"
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
