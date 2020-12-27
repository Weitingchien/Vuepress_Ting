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
    "revision": "1279e818d9d66805fdbc15d9afce7ab4"
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
    "url": "assets/js/10.d5b09b6b.js",
    "revision": "b6e359efd5ec92252989ced6dbb8c9b4"
  },
  {
    "url": "assets/js/11.5299fc65.js",
    "revision": "6232d57bfeb4d0479e427657626ef018"
  },
  {
    "url": "assets/js/12.5cd4b6b3.js",
    "revision": "cdeec5b9baaf16c7a70491552890179f"
  },
  {
    "url": "assets/js/13.eb1e23e2.js",
    "revision": "90485b55c5ad8e62f4e590b962679b0f"
  },
  {
    "url": "assets/js/14.628d7417.js",
    "revision": "3da23a4a7618ebed403e99a61bc2df1f"
  },
  {
    "url": "assets/js/15.4fb5966a.js",
    "revision": "6e2f2770b88d159d7ccea2ff4c080a56"
  },
  {
    "url": "assets/js/16.9d981005.js",
    "revision": "54c4db5fc8a7be83817c4426c0e8ed50"
  },
  {
    "url": "assets/js/17.63b8d2fe.js",
    "revision": "7f9467b98e09b2e74182d7cd9693211a"
  },
  {
    "url": "assets/js/18.cd6be039.js",
    "revision": "b4c4278e9475f0cf9bbb25293456ba4d"
  },
  {
    "url": "assets/js/19.60c7d3bc.js",
    "revision": "891207cc25f51511a97f81ebaaee90b9"
  },
  {
    "url": "assets/js/2.b92b684f.js",
    "revision": "407bdde5d87c61844459abd80a9e735f"
  },
  {
    "url": "assets/js/20.32e44c9d.js",
    "revision": "f2656868474d8ca2d9e299497c167a69"
  },
  {
    "url": "assets/js/21.0e1e84a5.js",
    "revision": "b20fa70f336081b9c22a6831557860cc"
  },
  {
    "url": "assets/js/22.86cfa6a4.js",
    "revision": "8d0adca1c0270dae7003f08c2f4b5a34"
  },
  {
    "url": "assets/js/23.a6b43a67.js",
    "revision": "b9f23de22d75aabbc3426c837948833a"
  },
  {
    "url": "assets/js/24.4c7790bd.js",
    "revision": "cf5367c6b127d5d085ad7ca86ba80aad"
  },
  {
    "url": "assets/js/25.db77b850.js",
    "revision": "c1772a598ac39068fcf090f595eecbf8"
  },
  {
    "url": "assets/js/26.b576705f.js",
    "revision": "9b7ae8172a0c14adce0cd3953ef0a11a"
  },
  {
    "url": "assets/js/27.aeec6b72.js",
    "revision": "16173beed26fa981eeed3002ecb64299"
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
    "url": "assets/js/5.df797711.js",
    "revision": "89bd9e5ee3e8a5ecd2e17c172b0f615e"
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
    "url": "assets/js/app.d0ed0944.js",
    "revision": "ddb70747d157cb81e1e03ed384533296"
  },
  {
    "url": "index.html",
    "revision": "a775d7c8d921c5c9e02484a6f13a8d3b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d8a07ff543dafc760fb1450aa8179046"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "da2e138a246ba8bb396402862f1fe762"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e4f33fdc6f8a558d07d5ca37229f8213"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "3f8073aa55c322583f9aadc6bc5d4bf4"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "fdaa2da48a9e431a629176f2100d374d"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "9628280d16eaf90a33c43f45b729aba3"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "4e11bc4b6680a19f09068e2bcc3b7318"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "b55d5d614fdeff62ed19a562d77a656a"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "ff55f324a69605117e419eaa53b37f26"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "aaae7621431f86079a84f23439bfec14"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "9be371826d48e38257a5b758bdfbef1d"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "01ccb47f15d24e70fbffb258a17bdb9d"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "d4698b40807068c1f9d825f47551c748"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "3c3483c38ed3af3f19c6a0257779647e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "dca06d535f71cea8375d1c1452caef48"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "f4f283445411ac605e38d84788a8ea04"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "29d9d7ad50c5ceaddd7c4ae25769cd57"
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
