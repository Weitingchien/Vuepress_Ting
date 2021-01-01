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
    "revision": "82e51847469dba9dfe7f00aa35309eca"
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
    "url": "assets/js/10.9de8f3d9.js",
    "revision": "beb4a394a8b7859cb71400e4d5205939"
  },
  {
    "url": "assets/js/11.a51313fc.js",
    "revision": "7b6e167fd7c96e62e8565a701f892e6d"
  },
  {
    "url": "assets/js/12.582f0ef0.js",
    "revision": "6aa92129f16ff79b5020cb477d6cf17d"
  },
  {
    "url": "assets/js/13.41993b1a.js",
    "revision": "477f656ed6622362f347048e4785fb67"
  },
  {
    "url": "assets/js/14.d16535c4.js",
    "revision": "43332cfde7845cb8c9c419c769dce508"
  },
  {
    "url": "assets/js/15.78d4de2c.js",
    "revision": "7e3664477cd2d17ece9c1c39b6639a7d"
  },
  {
    "url": "assets/js/16.4a7080cd.js",
    "revision": "0bb77639186463e048fd997039585b10"
  },
  {
    "url": "assets/js/17.ec269785.js",
    "revision": "41b6828880b5cad8a1c16baa3916b7d5"
  },
  {
    "url": "assets/js/18.5c197afb.js",
    "revision": "473cfaffe4b2fb7fdfd4e136a95b2aa3"
  },
  {
    "url": "assets/js/19.6c4f6d50.js",
    "revision": "f860715c5c8cd9641b37457644585790"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.4c603a99.js",
    "revision": "091fdf8f6c506e86ec9e2d653f3bc8f4"
  },
  {
    "url": "assets/js/21.b4a98ccc.js",
    "revision": "325d5e817e9a22693eeefdb2986d4dd0"
  },
  {
    "url": "assets/js/22.8dc6afcd.js",
    "revision": "6c4cb48f947f0142667bb42de9025e14"
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
    "url": "assets/js/app.7dc9f113.js",
    "revision": "e3516de12408c2eafb5dba021cb47e19"
  },
  {
    "url": "index.html",
    "revision": "1c33f888e89f5f421701fabfba2b516a"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "930418a91fa13d86954dfe8e778a3c69"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "4a937d544a78075ad125f9174305529f"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "8875b82a799ab77e137d07facc9fb3c1"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "e87797c910d9e8404e80f2bae845bb79"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d33423b1c72756ebc913610fff40b78c"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "a568a046cdd4b2601b511572c5d8fa77"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "dff46de70cada6456770dde34cdb223e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "11743fdc5d3820e4bc59b3d9092fd887"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "d3757f18e03967372f25d4114f2f4c1a"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "811d7748874b87e96c468b959da47f0c"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "35e23d1ff4e73ce6666bc6f3a828eb21"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "d1b5eda9612bb3019d434c3baebb012a"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "d515de2bb3f5b38336b90ed2ee1fdbd0"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "a0827978e8be9168deb0326ce617a241"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "1cb2aad495eab69bfd15600c7beb7090"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "36bfca3e85dab72bf66da3dab2dc7535"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0952e441f3390a95d40715ab01b535dd"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "c0ac8236f76b1fca6e1d970270c86bf1"
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
