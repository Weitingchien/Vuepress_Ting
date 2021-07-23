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
    "revision": "c20d4d5959ad0274b013fd75c0259286"
  },
  {
    "url": "assets/css/0.styles.5f90c0e8.css",
    "revision": "f741ab6ea056ca9dc76c1bd575026268"
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
    "url": "assets/js/10.d68747da.js",
    "revision": "4a64aacc4a0a2abafcc00fd3f611edab"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.c275e9ca.js",
    "revision": "8c23f92c1d5b2d89f43a05b4f0d49ede"
  },
  {
    "url": "assets/js/13.8b5170d4.js",
    "revision": "99a561eb9716db105a7dafa6584ef9ae"
  },
  {
    "url": "assets/js/14.ff08828a.js",
    "revision": "332373e3e3173b9e2bb4224bdbfe5d75"
  },
  {
    "url": "assets/js/15.a8df3adf.js",
    "revision": "cfd092ae79dfc8d77a99d49896b77033"
  },
  {
    "url": "assets/js/16.43b8d9db.js",
    "revision": "896d70eb283b927cf2b51728c14e6c64"
  },
  {
    "url": "assets/js/17.2948b9af.js",
    "revision": "e1e74c64f1bcce29ebdb39e267a3373f"
  },
  {
    "url": "assets/js/18.08bb70d6.js",
    "revision": "12e52fa774fe038f55b222ae850d6974"
  },
  {
    "url": "assets/js/19.2b444ea9.js",
    "revision": "9a26b7ed3aefa588a989d5f344ef542f"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.fbc6d33f.js",
    "revision": "aa60d660504bf29d074f84330628118e"
  },
  {
    "url": "assets/js/21.a9d2b5eb.js",
    "revision": "069f166041fdbe07a6932605de522255"
  },
  {
    "url": "assets/js/22.f92d400b.js",
    "revision": "90deeaf648ad84cae165f7dfe7d0ea92"
  },
  {
    "url": "assets/js/23.f61f5495.js",
    "revision": "6ce86f52fc5fb778f49716fa7975c5d0"
  },
  {
    "url": "assets/js/24.23cf0630.js",
    "revision": "27ad97e0cfdaf4711c00f53fceb977fe"
  },
  {
    "url": "assets/js/25.2bd6822c.js",
    "revision": "814b13763bcf188fdfd3da6f40a11901"
  },
  {
    "url": "assets/js/26.999527d0.js",
    "revision": "82c702a962fd8401ab11fc8f11d21e61"
  },
  {
    "url": "assets/js/27.ed59a030.js",
    "revision": "f903ea51aca68d72f0c9a3c4d45a93dd"
  },
  {
    "url": "assets/js/28.9f1ccef9.js",
    "revision": "e435b2d527e7bcc7b0ba205342456e34"
  },
  {
    "url": "assets/js/29.be8b2d4a.js",
    "revision": "27cdd242cd22e1a032af228bd5b2a9ea"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.a5c1f29b.js",
    "revision": "b46982a8c3d5f7626f4db82a048e75a1"
  },
  {
    "url": "assets/js/31.c8f0c0b4.js",
    "revision": "8d6caa0ec51bd20b69c3941d297c0c2c"
  },
  {
    "url": "assets/js/32.958a4592.js",
    "revision": "22300548ad4d7a22ac206cf0844ef782"
  },
  {
    "url": "assets/js/33.0bba6b33.js",
    "revision": "74da5a52f04aee0786b9d5d4c00d0711"
  },
  {
    "url": "assets/js/34.ad4332a4.js",
    "revision": "188a2e56c51943d6ca7b839bb13f248a"
  },
  {
    "url": "assets/js/35.a36e7546.js",
    "revision": "711b9860009df397d2c6980bcfb474b1"
  },
  {
    "url": "assets/js/36.1c87204a.js",
    "revision": "eab39b52c6d361122a824235fdba3f5b"
  },
  {
    "url": "assets/js/37.f5daa282.js",
    "revision": "f70553ae8113893fc65deec6fe330c05"
  },
  {
    "url": "assets/js/38.8c14db82.js",
    "revision": "f43d3c516374ab1cff7e139f3ae065fb"
  },
  {
    "url": "assets/js/39.285db0bb.js",
    "revision": "7e0e1e1f58a0c936f8a980d6de94dbe3"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.6a8b6073.js",
    "revision": "e2c099d1da4f02a1c6be13598365fb1c"
  },
  {
    "url": "assets/js/41.d5e869ba.js",
    "revision": "d08f51274cc0f07384cf5de897c5b128"
  },
  {
    "url": "assets/js/5.a0e6fb5f.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.00149598.js",
    "revision": "d37218136addeca1eba48189041db6cd"
  },
  {
    "url": "assets/js/8.b1744ffd.js",
    "revision": "39df00ce760bf1ef5439a8a6197d7fb2"
  },
  {
    "url": "assets/js/9.26117c4d.js",
    "revision": "fb8d18f46248bb91b5cd6c4964456b13"
  },
  {
    "url": "assets/js/app.843930cf.js",
    "revision": "1f1f373a1b99844537b0c692770e0152"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "d25b15f461459f3ef56b74cc3200e39d"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "75f5d477fe2cfa3000703530ffd552c1"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "974c9f19f1a70f4d2398edaff5f6dab1"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "392716464371705af5d4001be2bd7902"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "b1a1eb22fab6ec9612442f0207088b78"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "2cc66cebbcf39981943c20bfc3970cde"
  },
  {
    "url": "index.html",
    "revision": "bb9214198482fc261d7b7470537194e3"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "bc556bbbbc4af3eae8dcce9f6273add8"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "95f9697d0457e440b9518ef251c140f0"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "51d8cc5811293a0db86322ee548258e2"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "7b0bda3836fc578c612a1d5550226772"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c0277d1db5084dfd0fcff3989c2ac520"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "a114c9fd7058f26e919fbbfb825a6b80"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "e62bf7888882321d60efc7cfc462ea89"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "b03fe2df59f7254f1b16d69cc15ea0e7"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "19073f4edf161c8f8d2aab20f1dbeb46"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "9d51187e786d77c92ce17c6a6a449aa9"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8198e2ed848d73ee88db5854e6b7abf6"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "2768cf631d808a89ba9aa34d97653cab"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "f91e904c2c191168c084c838d35901af"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "e2d3607e1ed3453dcc9a1306a4699273"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "c37f6b19156bec51349879573eb5f37f"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "54a669a76a7e47cdee56bb2953ffedfc"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "3bc784184c2cdb2f0d14b3f6e30cc3d7"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "e95b967305ce28b867c7c5e4d2c8c64d"
  },
  {
    "url": "Node/basic.html",
    "revision": "0115ff49411f2804d38f97ef3e26abcc"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "2a4e3c1eb9c47dc623237c512f241f79"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8bdb398794f6bda021025b32224e5c72"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "0beb3863b3227de382d9579227c48f5a"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "fd6c99cce3cc63f1ccd181a419ebfc09"
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
