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
    "revision": "5c97430cb94477239b852b41e09b280b"
  },
  {
    "url": "assets/css/0.styles.e9234512.css",
    "revision": "b003cf0aa06ec189db713d7b221188d9"
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
    "url": "assets/js/13.9eb4f552.js",
    "revision": "6416e038941e122255d2723637022e9c"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
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
    "url": "assets/js/17.49d5d912.js",
    "revision": "d671c64ad391c02a9df446d572cae969"
  },
  {
    "url": "assets/js/18.7908b314.js",
    "revision": "dc868fe5b192782fdb2309918e69b626"
  },
  {
    "url": "assets/js/19.0b0eeb4a.js",
    "revision": "7919c02b84416163163a94bb74fdb0e7"
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
    "url": "assets/js/22.eac8a064.js",
    "revision": "66425d988b5bcbb7d250f1d97a23fbb3"
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
    "url": "assets/js/25.9fe39335.js",
    "revision": "28a7387e19c029eb23bf917c8ab3981f"
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
    "url": "assets/js/28.827b92d3.js",
    "revision": "f1827a1d82bd86c2d22d813f11a2e40a"
  },
  {
    "url": "assets/js/29.651b58d6.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.afb81690.js",
    "revision": "8d60d2b772a58a6432e8910191272907"
  },
  {
    "url": "assets/js/30.49701771.js",
    "revision": "7c1ef902ac38f599042ea4d5672eaa6b"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
  },
  {
    "url": "assets/js/4.c482f19f.js",
    "revision": "b4781e6340f666d4b15234869c1fa3b9"
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
    "url": "assets/js/app.1ac9be46.js",
    "revision": "fabb92ba2ba90d8824608f1b099d4b05"
  },
  {
    "url": "index.html",
    "revision": "f6b007e89c7abe2b3e6fccaae975caa1"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c32bedc75ba778ff042ddb84d013679e"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "bb3f36a31d75a5b4be7bd227e346bfc3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1e1b3a25d3c43afd63c32715d9af8b7d"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "9ed8c8932d7c307292cad720853c4f59"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "1d8ce65b22fdc96c437068c42f7247f0"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a3df0a2bcc4f1ab62678a1b05b72de7e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c63d586385fcc8f35d0e070c6de2a2ad"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "109ebbfa2d7ca7df7a7f8f29e3c3ab60"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "660db84f02c09b6a0d4ccbd782266a59"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "63df6879a95d0cff30e0930e22c429e5"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "984189c2a4d89dbf18d84d415df605a2"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "2ad29d9f29ad45dc42099280da456084"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "4e847fb8077131a2a08687cb25cedaed"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "543193978aeb2989c0ca901f4549470c"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "bae82b663b08f6c0a2270958a61db63a"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "43e1a16a428390a63d6e96de6cf577da"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "750dabd5b02e40dae847922a418ca21a"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a8ddbb9b65cf53637dfe082db641afb1"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c00bc4b0fe22c0ca34b159f0761d8b5b"
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
