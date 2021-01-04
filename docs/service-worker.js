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
    "revision": "eb1300b2aa4225f71c91f0873a8e3e5c"
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
    "url": "assets/js/10.d7d74967.js",
    "revision": "6ea9a02aae7cb0bb7e77eddbd6136437"
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
    "url": "assets/js/13.41993b1a.js",
    "revision": "477f656ed6622362f347048e4785fb67"
  },
  {
    "url": "assets/js/14.e1132ad9.js",
    "revision": "460becf877b03a716a950e549822ee2a"
  },
  {
    "url": "assets/js/15.55534c20.js",
    "revision": "0316014538ed2df7b023245c942fc25b"
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
    "url": "assets/js/18.cbc9029c.js",
    "revision": "cb82b840d15179d0bacfbdb0f8656675"
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
    "url": "assets/js/20.2861137c.js",
    "revision": "506570ed74601907d6e3609fbb938ee3"
  },
  {
    "url": "assets/js/21.b4a98ccc.js",
    "revision": "325d5e817e9a22693eeefdb2986d4dd0"
  },
  {
    "url": "assets/js/22.988fe20b.js",
    "revision": "973ba333678a01b9b5df2f3f4596b544"
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
    "url": "assets/js/26.49710edc.js",
    "revision": "f08a6f086820856d1196cffb9ddec6ab"
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
    "url": "assets/js/app.477a8b40.js",
    "revision": "ae1ca30f9ff7c20cc65a51327938b333"
  },
  {
    "url": "index.html",
    "revision": "e098b3df654a2f8dc1e956a924c43304"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "4b77bc7c45c614338ec45917c950b4ef"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "bb18a271725c6f0994bcdb1d65141596"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c17c9ef66619e431460655a4370479f9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b495960c1b4fc6c892634c0596fd0c43"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "4b0e8096869c76d1f0b2fa7b74515871"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "8b4997a9fa42d77d4e122f60281d9873"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5e478ef62bcf186c10a5b90de70a13f0"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "166e83ddb443bdd98e1fd566846db4c3"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "4ed84876e3c010d4ff346ac9d8eb2ce8"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "a8eef0b9f8c839a3c759152ba98dfc4f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "46cb110cff3ab1798a03f9ad2b939f80"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "3f5b537e04d17c490df1d9f03d97d3a0"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "bcac86bbe6b7794cbb7b58f2b4bf5514"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3d930ebca5fc126ace70fc73fb026829"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "b8fb4e93b86ce552646bc1d48309cea2"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "f7ee33872bd2005b7273511d2145f319"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "c5c4809643675702bda69adebe873412"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f679db2ae27f87db4f15e007b8b18dae"
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
