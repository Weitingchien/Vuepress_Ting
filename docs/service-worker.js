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
    "revision": "2f3325caf989e157fb9684b544bf26fb"
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
    "url": "assets/js/11.6f89eeb3.js",
    "revision": "403def5b9056c885b5adbe9e51ee4dff"
  },
  {
    "url": "assets/js/12.2df5fd80.js",
    "revision": "74e5ea9bdb5c2c7d841b4c37474aef71"
  },
  {
    "url": "assets/js/13.5ba5a1ea.js",
    "revision": "a511dca3d94088b7e7b64277406a9717"
  },
  {
    "url": "assets/js/14.ebd0dffc.js",
    "revision": "2641c693cf544e37481b6794326c8d96"
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
    "url": "assets/js/20.7bf35745.js",
    "revision": "c05795908193b9736e4fc2be1113ef9a"
  },
  {
    "url": "assets/js/21.f1d766b2.js",
    "revision": "f754303e5d120763d6c9d0ca731dd34b"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.3301fd33.js",
    "revision": "68d73a93afc1e4c7a94d557b6405d36f"
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
    "url": "assets/js/26.d9f31171.js",
    "revision": "97c889ff6c1388d47be36f2ac4c6428a"
  },
  {
    "url": "assets/js/27.7bad2d32.js",
    "revision": "b6554754ed83df2ee1b00ab67ba0f47a"
  },
  {
    "url": "assets/js/28.34aac115.js",
    "revision": "5d6e6803bd1aea8578b1e2ae29964d7b"
  },
  {
    "url": "assets/js/29.09fd1d5e.js",
    "revision": "987501b46e64884fb93ff6ad14575c4b"
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
    "url": "assets/js/7.7025208d.js",
    "revision": "04b78f3f1da0c6bfd922f8170ad5ba30"
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
    "url": "assets/js/app.88335174.js",
    "revision": "e49830ca060c742626c6b8f8cadf3f89"
  },
  {
    "url": "index.html",
    "revision": "e325573c921da4f34cfe867f5e007875"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "cbb7c6a7358e7ecd30bb28e650f70f29"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "904a16990a6a0ed0b5199f15746f7be3"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "da567cb78d4fce748ff7655086a287f3"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "56ee6361ff9a34104f57607773c7f5c2"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "09e516cf036e704e5787545143c98d4c"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6c7723d9dc1ab39ac01e300862c22bf3"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5ae0a405f38d466818de719d8585ec40"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "7cd05d9c52090c5aeb51fdc1a6a44afc"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "4eec6945e005a2bc8ffcb932ba6b0e74"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0274d13bed853f5519a74fc16e2622e7"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "085505f9628ac47e9a7ab6316c3f3b4f"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "48ab4239af8f8ebd06db51cffc3df690"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "a6e46c87022f29be58248f607cfbc3a5"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "f4155b8ae01f620b486e0020f29f681f"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "43b1c4a90dd6d74bbe7d0edfcc89a402"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "618aa99ed9440fb08220e418b1e92d28"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "b462ea4fea006c33429e9fc9291a8c10"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "1cfd23df3bbe9786da0a05908637822c"
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
