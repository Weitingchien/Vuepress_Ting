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
    "revision": "eb23f0662b8c789dcf4a029eab11d4cb"
  },
  {
    "url": "assets/css/0.styles.d652ee0e.css",
    "revision": "b5d0a55fb0cb10911aa5b72abb6a37f7"
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
    "url": "assets/js/12.477d9bf5.js",
    "revision": "b6cb002f5916987791cef70cc81d3f0a"
  },
  {
    "url": "assets/js/13.9e384755.js",
    "revision": "de85352019110a5c47944aedee48dee8"
  },
  {
    "url": "assets/js/14.52a0f5be.js",
    "revision": "5d75e07da112342bfa9768c87cf5a0c1"
  },
  {
    "url": "assets/js/15.898485c2.js",
    "revision": "0252dcb6c50fdacb1e0a5ecbba54116d"
  },
  {
    "url": "assets/js/16.cbc1bf8e.js",
    "revision": "888b8643c1707bb360ad1e3a45c3bebe"
  },
  {
    "url": "assets/js/17.d393735a.js",
    "revision": "54164866ed6f9cde5a2b05ee050895f7"
  },
  {
    "url": "assets/js/18.228a01ea.js",
    "revision": "fed49a8d253d3af9d29c07fe0753d001"
  },
  {
    "url": "assets/js/19.1738a179.js",
    "revision": "086f4edcc99af7d7c810ffc24a9bef3c"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.fc858126.js",
    "revision": "64951855fba1f1536195dc2668f538fd"
  },
  {
    "url": "assets/js/21.c323dbaf.js",
    "revision": "28931030084735fec0152eb8c7caf790"
  },
  {
    "url": "assets/js/22.df418696.js",
    "revision": "44713ae217a4f3f119ae0ab48814baed"
  },
  {
    "url": "assets/js/23.56e42b90.js",
    "revision": "b971fb3d72c63e1691ae1b7012060873"
  },
  {
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.b1e3ea7c.js",
    "revision": "0a01054169ddc941d44499f765a6641b"
  },
  {
    "url": "assets/js/27.c81fb0e2.js",
    "revision": "aca329c87f605af30bfc8c95910ee106"
  },
  {
    "url": "assets/js/28.462acdcb.js",
    "revision": "49f30c2c7ea7cbfc75cd31ca76c3df9b"
  },
  {
    "url": "assets/js/29.905db022.js",
    "revision": "5e2d4ceade8dcfa210be4bb6388b1d2a"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.c4712235.js",
    "revision": "06a30aca7db81f1ada9c0109f00e638c"
  },
  {
    "url": "assets/js/31.762315f6.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.70b0e260.js",
    "revision": "71c78b00919ac582d9a5f2077d3e418f"
  },
  {
    "url": "assets/js/33.e6da0290.js",
    "revision": "ca7a43eb3289fc99704f1921ca6b73f9"
  },
  {
    "url": "assets/js/34.338c8575.js",
    "revision": "85e4742fe76b12ab6d5ba4390d64fd97"
  },
  {
    "url": "assets/js/35.69489b73.js",
    "revision": "176ec85f0cdc0e9a4aeca98474c73399"
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
    "url": "assets/js/7.448d2672.js",
    "revision": "3e57e250159c49542295d4e1c70d5fbc"
  },
  {
    "url": "assets/js/8.2566fce6.js",
    "revision": "030c63e9fb4b301437be71f321008ea3"
  },
  {
    "url": "assets/js/9.1ac85436.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.605a700f.js",
    "revision": "8b9425515b0b5aa9f952d7af6af85769"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "3bbae39786ef501e70b45cdc62f3d842"
  },
  {
    "url": "index.html",
    "revision": "e54c34bdce15b8861e275e55c1bf8dd7"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "9c3681c51d44c1275927f1bb5995125a"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "04d910bb1777a879b2f0531a097853c0"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "abfd4d3e8f111478937d6b5369d89c21"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "9d0fa7711bad22a336d923e55839d0dd"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "da82e611114d8732378a03086fa18e0b"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "235083a406c681635eebc2d2fc35c053"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "54490dcd09cf35956d58751425a264e5"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c5deb44092a2fcb3dc6b656c1e0cee81"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "c4d909de4c88005df71dd54884550c7c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "8598978709b083e43280026a8630603c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "580be9b9d7841c733580f308b2970a42"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "71a7e7369de274dc19f556788bd05527"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ce4b09b72b3453df8a1afbeaf1ad64de"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "001295aa7829cf8bcfb6d21fa013d45c"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "6e8807c26346e1f777690ccbf71a0104"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "a95d7bd44809fd25bb30bedecb0aa045"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7e07f6e4dd97fe924dd1899900639087"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9a3749697cade3c11ee46a7d974ed3b9"
  },
  {
    "url": "Node/basic.html",
    "revision": "e029ffa126a2b5c078de2bf23434dddc"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "42f8648be19bf8e1fc0eb35f05ce94bb"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "99b01983db8e538a4c09ccb92a0136e4"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "0b3c331e087af0ef45a00e52b02d3ef1"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "eaa4e9ee7a9d8adc3280a762c5ed0f66"
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
