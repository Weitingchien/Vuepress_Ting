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
    "revision": "a6788475b77f83669abca1b2b0c6ed61"
  },
  {
    "url": "assets/css/0.styles.d4a88f7c.css",
    "revision": "eb8afa374e5631a857b665d77518e4b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5b09b6b.js",
    "revision": "b6e359efd5ec92252989ced6dbb8c9b4"
  },
  {
    "url": "assets/js/11.2d2d4a2d.js",
    "revision": "0ad0e645a860aca8a85460da6e972ef0"
  },
  {
    "url": "assets/js/12.fe8077c7.js",
    "revision": "62fd487f76be7439819b8f44bace0192"
  },
  {
    "url": "assets/js/13.10dd5b57.js",
    "revision": "73cd2555aca0991e5a7301b3b78c5723"
  },
  {
    "url": "assets/js/14.ca5e86f2.js",
    "revision": "9aef9af06effaac46a08428875854f51"
  },
  {
    "url": "assets/js/15.78d4de2c.js",
    "revision": "7e3664477cd2d17ece9c1c39b6639a7d"
  },
  {
    "url": "assets/js/16.8c3491b3.js",
    "revision": "80b86330ec400f6e3c64ebcdc6c155b8"
  },
  {
    "url": "assets/js/17.91e0466f.js",
    "revision": "7d6dc189ff47c064b49a71762340bbc9"
  },
  {
    "url": "assets/js/18.a1e8bfa9.js",
    "revision": "22e090ab02620ebb6a90c3e20bf30e43"
  },
  {
    "url": "assets/js/19.b0c6fb2f.js",
    "revision": "cbe1e1ccd44eca7afb59e07d40cb0100"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.633be29f.js",
    "revision": "25179f5366d94c894379ce9c3127f9b1"
  },
  {
    "url": "assets/js/21.8eb29029.js",
    "revision": "5b81233ef3eab16b9b6d55ee67525c64"
  },
  {
    "url": "assets/js/22.6809e544.js",
    "revision": "843960eaa7ec6a5edb61b3163f13d198"
  },
  {
    "url": "assets/js/23.74b248f5.js",
    "revision": "e2daffcd07189d97caf7457bdbab24cc"
  },
  {
    "url": "assets/js/24.ca4a1308.js",
    "revision": "7e5684b3cf196284db11f818d09e16c2"
  },
  {
    "url": "assets/js/25.df886384.js",
    "revision": "3e41f2d489124f93c6c09ead50c9e121"
  },
  {
    "url": "assets/js/26.982b40e7.js",
    "revision": "8c2af07ce905f458b1b96b85ebbeccd0"
  },
  {
    "url": "assets/js/27.c3d6aa21.js",
    "revision": "5c401d6e07156f17cf40c70d66d3e0ba"
  },
  {
    "url": "assets/js/28.ef89bada.js",
    "revision": "692b00f8ba6857b81834ca34a5a628ca"
  },
  {
    "url": "assets/js/3.3fc3a409.js",
    "revision": "0ec305a5b10a06e0ed1c696edfee5a6e"
  },
  {
    "url": "assets/js/4.fd9388ea.js",
    "revision": "4696b0cdfa39b8bafbee26cc49b42a40"
  },
  {
    "url": "assets/js/5.f3ad43f0.js",
    "revision": "c73b7af210743a73e9cb82135a27bdfb"
  },
  {
    "url": "assets/js/6.65910c0a.js",
    "revision": "76f1bb90e660c4a8f9f9dec03aad8241"
  },
  {
    "url": "assets/js/7.8cac0113.js",
    "revision": "5a6dc05de39fd2900e37b51d03038380"
  },
  {
    "url": "assets/js/8.3f3c386a.js",
    "revision": "7c08ae7dc722cf61603374b5f709f646"
  },
  {
    "url": "assets/js/9.b1730dff.js",
    "revision": "d68ec6a5c77e2964583a1cdd07a4beb5"
  },
  {
    "url": "assets/js/app.3dd8396a.js",
    "revision": "902366887e2eb8798d70532582197bb4"
  },
  {
    "url": "index.html",
    "revision": "a6c285c9223063270907f8d8b57749ad"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c644a719facf6a9bbbca0dd9c16c5027"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8762e297183ed27af836a1f06b5dd40e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "71ba64932ea0e65ecea70786509f3b43"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "4027c12755210de621eeb5109f6875e2"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "efa9566a0afc69b64140de5920e968f8"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "b2f25b471cf118a01db2c7a7b5da25de"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "c98bfaa8bfabb864641f131375ce1f59"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "a37a7df36cfeb2b43674da23a8595288"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "3cd775fee20d269cd25c0064653a45a8"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "b01e0a0fb30a154aa4cc94f643c78b5e"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "044d347697274a8811a7a08ed57c56c7"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "43f246031e1911e51738ea4afd261ab4"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "3c67739d26b8a7ce20ad3ec14ac3bed3"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "6221b458ebc69f061801a0a14023cbe3"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "aefc2c4ae5182ccb9e5abc028af6c945"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "6d87d69195bf5e02a64aa0466d37f9e3"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "bdf5a97a9f40a2d4d23d5daa5efc2a45"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e4f1ae9e8bbbcd60bfb3389411e29d3d"
  },
  {
    "url": "vuejs-logo.png",
    "revision": "7da827b37ab5aab5ab843e1d875374d8"
  },
  {
    "url": "vuejsappleicon.png",
    "revision": "857a0dfe8095c69f5d672a66cc16c8c7"
  },
  {
    "url": "vuejsappletouch.png",
    "revision": "95f17ecd3beb5f19bd95e729c2642382"
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
