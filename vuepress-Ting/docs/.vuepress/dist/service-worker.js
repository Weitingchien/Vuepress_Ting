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
    "revision": "306b37942974c5a2d4448a89861adea7"
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
    "url": "assets/js/11.4d0bb7fb.js",
    "revision": "3fd13011b213fded660f8014db8efd62"
  },
  {
    "url": "assets/js/12.4b38de91.js",
    "revision": "53b8d625549e317cbf2da495b28f9a76"
  },
  {
    "url": "assets/js/13.04baa5a6.js",
    "revision": "08789771d0578f086ef29a36d15288cc"
  },
  {
    "url": "assets/js/14.e7fd611c.js",
    "revision": "fa138647e5f4f030769585e8e4d75d16"
  },
  {
    "url": "assets/js/15.ac732154.js",
    "revision": "3b433b7ca64b2255a18cfee180e5c70e"
  },
  {
    "url": "assets/js/16.ab0356e1.js",
    "revision": "725fcb77b63ee4d5f2ea07a48df7d983"
  },
  {
    "url": "assets/js/17.3a48664e.js",
    "revision": "e3e1d64887722feb73df72ec2430e896"
  },
  {
    "url": "assets/js/18.e4d9cc16.js",
    "revision": "5209a6808119953cc4a44afb9adc8ddf"
  },
  {
    "url": "assets/js/19.1e2fc0b5.js",
    "revision": "18f7cbcced210975f5cb64112aa445e2"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.307852d2.js",
    "revision": "f2508c0254b90858c26d40aee8ce9177"
  },
  {
    "url": "assets/js/21.e89d45c7.js",
    "revision": "902ce7bc4d87fecf61f1002f949ed0b1"
  },
  {
    "url": "assets/js/22.909960d1.js",
    "revision": "8f725098e54e9c2f93c5b753dfded6fb"
  },
  {
    "url": "assets/js/23.d068b4f1.js",
    "revision": "2c615b6610591183711b5f88664b5126"
  },
  {
    "url": "assets/js/24.e919932c.js",
    "revision": "2425d0c753dc074b7d61ca3a93659fa8"
  },
  {
    "url": "assets/js/25.18a7d503.js",
    "revision": "80fe322807056e3d46ec28e54b55e880"
  },
  {
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
  },
  {
    "url": "assets/js/27.ecffae88.js",
    "revision": "f8124364595ffc300cb420efae63356f"
  },
  {
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.d226f03d.js",
    "revision": "5d0fb9b487bd8c67704aa38ffc0551f6"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.9e797ee9.js",
    "revision": "6d53ecad55597175c4c226c9adfd1e32"
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
    "url": "assets/js/app.80202ee9.js",
    "revision": "20be7b74304c183bcbbfb48d9fd71a5e"
  },
  {
    "url": "index.html",
    "revision": "a195b7968a912173a42a40086f0ad500"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "f960e8964ed01ded76bb461bb818f0f7"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6903093e278b90883d7e5161fa61f5f5"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "4c7303ae6f63f6f5febba8a7e8f9310f"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "715c1f68d3c6f94369a21976565b7d9c"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "1cb54b8de82ae8bf712f44c0c32c76b4"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "205993a3337246d29bc64060c5c2a0fd"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "46b65aa18f552f58acdfab7516f75aea"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "56812f4c28cbcf65d9e4831e5fbd7cea"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "3b6418002807a1b836abe7c481337995"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "e2b6033df0811bdcdcf39bb2e1dfeccb"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "55d47d6a09a467652d38a6ac3d321ac9"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "5f248f2dcf065a316b2c9f5e867024ac"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "95466711873d05267c2f1e16313ece77"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "ee6eedf598e5c26397a67b4f71daaf60"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "e653cdcd2c279df1029e903a8435581e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "7926b027b0e9f7115d50df444c925644"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "3b05a4c0f88f3ae523ec535335c57154"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "180fea07fda62dce590b9772bbc15344"
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
