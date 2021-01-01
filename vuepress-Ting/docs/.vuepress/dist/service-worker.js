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
    "revision": "381fd4fc6cbdfcbd4fcb9352180fca91"
  },
  {
    "url": "assets/css/0.styles.6262c6a0.css",
    "revision": "c8cb527c1a82d05708983d9adab5e4e5"
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
    "url": "assets/js/11.a51313fc.js",
    "revision": "7b6e167fd7c96e62e8565a701f892e6d"
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
    "url": "assets/js/15.942be6f4.js",
    "revision": "7960dcbfd5bbd9e39c4af8afecad29ac"
  },
  {
    "url": "assets/js/16.cc8d7413.js",
    "revision": "277aee276fd6abd6c4cef6a44db03ecb"
  },
  {
    "url": "assets/js/17.fedc7138.js",
    "revision": "75c20a653bbe0f24ac31458155df1d28"
  },
  {
    "url": "assets/js/18.547852e4.js",
    "revision": "11f0d8aa41ad66e67c6e21f4c69afe27"
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
    "url": "assets/js/24.92271209.js",
    "revision": "d842c311ad11193d40a013a1da7bffec"
  },
  {
    "url": "assets/js/25.b3059be7.js",
    "revision": "b80b9d4bf6c59ca8043be8d78755d4c8"
  },
  {
    "url": "assets/js/26.982b40e7.js",
    "revision": "8c2af07ce905f458b1b96b85ebbeccd0"
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
    "url": "assets/js/3.3fc3a409.js",
    "revision": "0ec305a5b10a06e0ed1c696edfee5a6e"
  },
  {
    "url": "assets/js/4.fd9388ea.js",
    "revision": "4696b0cdfa39b8bafbee26cc49b42a40"
  },
  {
    "url": "assets/js/5.ec72b8af.js",
    "revision": "5979ecf3195f58e5ecf9a6b15181c8be"
  },
  {
    "url": "assets/js/6.170849cc.js",
    "revision": "60771dc8efe07ab8a09727d98d80090f"
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
    "url": "assets/js/app.946b8b93.js",
    "revision": "13c145437c2eb743028e348e66c1d6c8"
  },
  {
    "url": "index.html",
    "revision": "26c56f526f1bf438f82e879b0bfd8d16"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "8d9ce4e9f6bf14c2e5c36ac8ee32add8"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "9f34f8288923c7463950d5bfb01df48f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "89f9a48942de7db45050e8c7bc6f9d96"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "d9c1780212dfe7c006d5235c57d1d733"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "72f12c5b4be1262f93f71599fbdd1751"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "9922b51c2e2d2922cb64fa6e44609328"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "5fd650bcc8ba66cbabc26587e2df658e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "5b6b4aa6a4bf1eae33408e8b6351f924"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "9ed3aa01ec9e58578a52b14906006857"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "0dc1b63be7fb0ce909c8c2df93983f93"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "0664dc2a2c81769a6958ad42d7e6875d"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "e738170349cc4f6b1398acd29967fb74"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "7a0c924333a18e4e1249cfc7ee54bafb"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "94c6a5373e6d4895361f29cfdfb31237"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "c3f11cfc5a54e55b6157c333e03a962f"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "c3c47f1055d22f301fbbd3d2b0f30c98"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "9eb8c1a29547e56790fee59e8d3724a8"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "e9d5cf0f3357c9816e4014f142ecb304"
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
