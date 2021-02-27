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
    "revision": "955a50a1cebc5d42e3bdd67f9b64dc8f"
  },
  {
    "url": "assets/css/0.styles.e5f03543.css",
    "revision": "cd72f3f0afe035a540306990503a1e5f"
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
    "url": "assets/js/12.b2546ab3.js",
    "revision": "e6747824d26a759e5c2e71d303517217"
  },
  {
    "url": "assets/js/13.a789eea6.js",
    "revision": "fd829837208e3a6e12bdb3f7a2e91c2e"
  },
  {
    "url": "assets/js/14.31ad8158.js",
    "revision": "19c89ae051db468acf0607553d0da726"
  },
  {
    "url": "assets/js/15.37e12547.js",
    "revision": "bc441af98180a86a38cf7190698000a4"
  },
  {
    "url": "assets/js/16.739cee10.js",
    "revision": "0eb8179328dacc7f2a2f201bf1fc769e"
  },
  {
    "url": "assets/js/17.4bf3536c.js",
    "revision": "d88b7782fc10fdd5cc280bc0a7365e25"
  },
  {
    "url": "assets/js/18.ec7567be.js",
    "revision": "7e53be54f054ce179b5733ac94697161"
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
    "url": "assets/js/23.ac74a65a.js",
    "revision": "ff1fb464ea78da7c1700089b036da1ee"
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
    "url": "assets/js/26.6d689f01.js",
    "revision": "3d213d8d09d624330d7e120796fa98b2"
  },
  {
    "url": "assets/js/27.c0eb8084.js",
    "revision": "98f73e3735b4070a879c409b942517b9"
  },
  {
    "url": "assets/js/28.02ce1b9a.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.5ec76d73.js",
    "revision": "84bebbe97cc2f7ed670f29a94910313a"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.d8979072.js",
    "revision": "fc8827510a6e4326769234ac6a53175a"
  },
  {
    "url": "assets/js/31.d4248534.js",
    "revision": "dfc63f418c23bcf3a195607fec085b5e"
  },
  {
    "url": "assets/js/32.a4d236f6.js",
    "revision": "4687bb5e5eba680d997e4fded03ee439"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.67ce5218.js",
    "revision": "10538b3425d3e28fd2ea61c4c274cf5f"
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
    "url": "assets/js/app.77f649c1.js",
    "revision": "5e5141c8eba0794241bb12670e778461"
  },
  {
    "url": "index.html",
    "revision": "be013e3a02c90d9b226a1f4a7aa57616"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "9c13db116c4f2f48059a7e2150a28510"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "0b1fd8fc4dac316dca2f96e777a5c5ea"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "acc5d2a38aa3bce8fdc606f95da47429"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d905bdcddd4bf9407e8f03eb76cb7f16"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "22021d503c7001aa013bf3607cee9c0a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "82f107064fafeed8df932e8326b45fe4"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "87089f3bbba16629d0bddb05242ab775"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "0d5b0b18309275c865623f2b06a30fb8"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "27be8bd976597dc5fe6b96f664189c06"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8f7f2258bfdcc95343c2bd613f78cb1a"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "121f54263cb2d24019b94a3cfcfe85b5"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "11d00fbda2a6ee7b569fd0f99072253a"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "ef9867955d943cb7a0069eb97c39ae0e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "342bdd0fb052bac716b3435106f1bc2d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "aaa81f5d4c0bfb4d75dc4c89986e3f75"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e37cb4a1b97b0557825a87d2234d6e0c"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "0a675e3f60767a3eec89ab9b214f3f9b"
  },
  {
    "url": "Node/basic.html",
    "revision": "dd16a587128415f94dd463a5500f5c89"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0d9c254add9ee7505b9b6edb3b364557"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "dae10901436303bf9ba910b089adeb38"
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
