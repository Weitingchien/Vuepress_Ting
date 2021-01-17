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
    "revision": "161d138a64f9b9fceaf51822cf673168"
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
    "url": "assets/js/11.457a38ed.js",
    "revision": "3bee594bc853af3dd167373fb070b6cd"
  },
  {
    "url": "assets/js/12.5ae7c33f.js",
    "revision": "b45cd557b75d902acaced48833229322"
  },
  {
    "url": "assets/js/13.b13687e9.js",
    "revision": "0d4fb54da0de9eb07e557146a5b0dcf8"
  },
  {
    "url": "assets/js/14.095369ea.js",
    "revision": "721deabdaac8549bf8627f48ddf3f6de"
  },
  {
    "url": "assets/js/15.f84af6a7.js",
    "revision": "aee07931bf0c1e84c1b52745b5a9a16c"
  },
  {
    "url": "assets/js/16.2c0a5a67.js",
    "revision": "e5e131ab9b26369df6738c89f32f89cc"
  },
  {
    "url": "assets/js/17.3a48664e.js",
    "revision": "e3e1d64887722feb73df72ec2430e896"
  },
  {
    "url": "assets/js/18.bac4b61d.js",
    "revision": "fd082eeccb949a9532b42d037f716d66"
  },
  {
    "url": "assets/js/19.6362a9ae.js",
    "revision": "380e49bfdc70dde5c88dce9ef42b6217"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.99f6ab6a.js",
    "revision": "4a016788489dcae40803cc396e8a4235"
  },
  {
    "url": "assets/js/21.f791c179.js",
    "revision": "525c90a30cd45ff5bd73cb7acc51dbb0"
  },
  {
    "url": "assets/js/22.39b7719a.js",
    "revision": "a0289c9e648e11217f0be314a15509b8"
  },
  {
    "url": "assets/js/23.305d35a8.js",
    "revision": "8b3317d7bdd204b7fead0cff60131666"
  },
  {
    "url": "assets/js/24.cbb8ca43.js",
    "revision": "f9fe6e66a039d49e34763cc5a4352115"
  },
  {
    "url": "assets/js/25.5dd3e63a.js",
    "revision": "c511bb52c6dee177c1e5bb790d5ef82d"
  },
  {
    "url": "assets/js/26.c4bd1de6.js",
    "revision": "3f9ef30c8c10feb83fffff586c645bce"
  },
  {
    "url": "assets/js/27.49748f6a.js",
    "revision": "500ec43b6d2b1bb64fa47cb74eb00770"
  },
  {
    "url": "assets/js/28.1c81415f.js",
    "revision": "8aebc1830575a3fd43717596b1059473"
  },
  {
    "url": "assets/js/29.5178bd29.js",
    "revision": "c4f44d63c1f5f7f0c4caa76bb7f30361"
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
    "url": "assets/js/app.e93a1386.js",
    "revision": "f684d6666de71a0c477045efebc155e5"
  },
  {
    "url": "index.html",
    "revision": "adee2fe917589cf08943c8fb49b14ded"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "26eff368be4a0df1df7f1bd8b29bcf56"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6c105bc086c4c092ad761bb21a3fa175"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "1b070e8efa335d2def94ba88e9d5d2fe"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3f4531bf376350807ca435ac76d86d9a"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "f57c380ccf5bf144a65675a657997775"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7ccf61a01eeabf474b16fad796284ebc"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "d0ebf4f6d2b88a4ab22ed52d1445cef1"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "105ed45d0be4b56aa428b8ee5005455f"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "854d9cc06f7e527c0d00747a1212c37d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "21dbca8b5e04b9d3b91862788656cb02"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "6177f40191b46f5770141dbc3b9aebd5"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "7d20c2bb735d135ea28296dc5626bdc6"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "00699b3a2a6cd64fca56c2e1a10e69c2"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "467f400bc168165476cc95bbd89adadb"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1f14216d1222776af9637c0d758988f8"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "3fb525d618f3a33410330aa6db84951d"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "de2277e6ca9a50d93058c805e880dd4a"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "60b145e6a9ef33bcc8d675244bcb8b81"
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
