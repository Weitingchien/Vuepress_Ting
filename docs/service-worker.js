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
    "revision": "55da5f611ceb4ec381729f73744775c7"
  },
  {
    "url": "assets/css/0.styles.716e2279.css",
    "revision": "b45e464f90fe6a08d3d14e45e47f05e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81b40eca.js",
    "revision": "347cc4b86acc475521d3e3424a290ec0"
  },
  {
    "url": "assets/js/11.4a4f1248.js",
    "revision": "64d3998ee154ebdf2898634f5d7960bf"
  },
  {
    "url": "assets/js/12.bf213e3f.js",
    "revision": "9b1106bdb1656b93e57e9652d9dbec49"
  },
  {
    "url": "assets/js/13.96ddde0c.js",
    "revision": "4bf9a086a834493bf863a3b7b9575665"
  },
  {
    "url": "assets/js/14.e1132ad9.js",
    "revision": "460becf877b03a716a950e549822ee2a"
  },
  {
    "url": "assets/js/15.d281f73b.js",
    "revision": "872bf650b53e8410108c19e7fd35299f"
  },
  {
    "url": "assets/js/16.4a7080cd.js",
    "revision": "0bb77639186463e048fd997039585b10"
  },
  {
    "url": "assets/js/17.fedc7138.js",
    "revision": "75c20a653bbe0f24ac31458155df1d28"
  },
  {
    "url": "assets/js/18.86991b35.js",
    "revision": "2188f97d32d45d050aad4e41e5af64bf"
  },
  {
    "url": "assets/js/19.f164421f.js",
    "revision": "ba20a031a32751bd762266f1e9f6136e"
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
    "url": "assets/js/21.b4a98ccc.js",
    "revision": "325d5e817e9a22693eeefdb2986d4dd0"
  },
  {
    "url": "assets/js/22.7867cd91.js",
    "revision": "aa38601aa618ba04b021afc151b9fbd5"
  },
  {
    "url": "assets/js/23.4440c9b8.js",
    "revision": "57d5a33ff03f9e454fb050f8ad545a62"
  },
  {
    "url": "assets/js/24.9282b173.js",
    "revision": "40f2f814113fb8e1c5dc707fd5d1205c"
  },
  {
    "url": "assets/js/25.8e239ec2.js",
    "revision": "7069ef4d9acd0e8adb183bf95263ee27"
  },
  {
    "url": "assets/js/26.42f99739.js",
    "revision": "4a4d3d1437a78834b34efeabdd2d9f21"
  },
  {
    "url": "assets/js/27.ae86d498.js",
    "revision": "026550a24c8be314384263edb5d8e59e"
  },
  {
    "url": "assets/js/28.ef89bada.js",
    "revision": "692b00f8ba6857b81834ca34a5a628ca"
  },
  {
    "url": "assets/js/3.02bb17f7.js",
    "revision": "067fef848a1c5f16c59662064bed8714"
  },
  {
    "url": "assets/js/4.b088725e.js",
    "revision": "53c5036e16fe6bafa247c196f7ae7b83"
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
    "url": "assets/js/app.89ba092a.js",
    "revision": "9aa26659ecd6cdcb1c1f03df0a7b492d"
  },
  {
    "url": "index.html",
    "revision": "8da38392e4e7b27135e29ef171384483"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "25ec002393f6ce4c11dc53023e672537"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "6c96b778f159bf4f2d50f8e09efb6600"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c3f3d5562ddc71c6f9561c6f5e565dc7"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "a92e77db3608b32a25a43cdac2b97c44"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "67c69fbc0cee0a70366165ad33254b9a"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "cf907a24f478d5e2359dcb97f38b8253"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "45c071f32e41781ea2e3a13866790e33"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "04589e36f7ee969adfac98670c45498e"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bce6d8206aad25750301b9c4428e82c4"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "7cc6816cf78c55a5b4c38e86a711f218"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "b5feb3d19e29e39e051d53cfb90c17bb"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1d601ff64b8617bcdc653632c9bba75f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b67984981a3cb0851186ffc99e76da23"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "86db5a795aa237210f5fbda206343ad5"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "ae031e685cfa527d9620c588b4933292"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "6f419b7d7bad909415e80a10f54f002e"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "80bd7723f48a52acbee48652948a6b20"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e062cf3e5e1faeb449d9945d3521141b"
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
