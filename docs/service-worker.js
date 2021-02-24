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
    "revision": "497e904bf7557240e1f36d632c11b288"
  },
  {
    "url": "assets/css/0.styles.d0f47da7.css",
    "revision": "9aadcc45f28307c9f74600c291653517"
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
    "url": "assets/js/11.b8865698.js",
    "revision": "d558ba9f5114b96da6808ace3acc6527"
  },
  {
    "url": "assets/js/12.c35d6fff.js",
    "revision": "9640063935468b3a55c00cac0dc36568"
  },
  {
    "url": "assets/js/13.9bcdac69.js",
    "revision": "c1084ed7625fd1459923edccff4b4cf9"
  },
  {
    "url": "assets/js/14.4be895ec.js",
    "revision": "7721528a70c10c13e949094f5e759820"
  },
  {
    "url": "assets/js/15.b251fb70.js",
    "revision": "5779fc52bb2466056ef565212ade9195"
  },
  {
    "url": "assets/js/16.0062b4f3.js",
    "revision": "b784ba44d0f3f0c08108e807bb1dc38f"
  },
  {
    "url": "assets/js/17.9b87e644.js",
    "revision": "fe59b1d4ac68dc6a705823fefe8731e7"
  },
  {
    "url": "assets/js/18.ba1b3e66.js",
    "revision": "71ad84adfb659734adf25225ea6b8353"
  },
  {
    "url": "assets/js/19.b3b22f15.js",
    "revision": "689745007366f28a2070e823b49c2f8c"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.50997520.js",
    "revision": "81f0b3046641d175cf4ed6fd4e5def3f"
  },
  {
    "url": "assets/js/21.513f9955.js",
    "revision": "e5101c44e349c9e93148da90a3f18bdf"
  },
  {
    "url": "assets/js/22.df461fdb.js",
    "revision": "e741c09efe32f939a93b91b1e2846715"
  },
  {
    "url": "assets/js/23.6a5b7980.js",
    "revision": "b6112ee1569a4e5afc9349cff00ddcc4"
  },
  {
    "url": "assets/js/24.ec522b95.js",
    "revision": "0e1868192dc7cf2f4a062d7530e419fe"
  },
  {
    "url": "assets/js/25.a557f09c.js",
    "revision": "c158c1bb595eff076a06beb17a7be887"
  },
  {
    "url": "assets/js/26.b307758c.js",
    "revision": "1804c698f5a14615eaf03a2bf12b3c0d"
  },
  {
    "url": "assets/js/27.0a43a367.js",
    "revision": "6fa88cb94ce47c403e158e3e91c8c0db"
  },
  {
    "url": "assets/js/28.9e720006.js",
    "revision": "2c31ce918adb3074e3f34285d1eb00fc"
  },
  {
    "url": "assets/js/29.5ec76d73.js",
    "revision": "84bebbe97cc2f7ed670f29a94910313a"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.dd54cd52.js",
    "revision": "6cb0c32271ef259f38db3b1be453d0e2"
  },
  {
    "url": "assets/js/31.5fdb1501.js",
    "revision": "48c3bf6458268d44da62650e01afcee6"
  },
  {
    "url": "assets/js/32.a4d236f6.js",
    "revision": "4687bb5e5eba680d997e4fded03ee439"
  },
  {
    "url": "assets/js/4.98dbd328.js",
    "revision": "dd2dcbd8fb4aa2ea63fd4fe064d72eb4"
  },
  {
    "url": "assets/js/5.193ae560.js",
    "revision": "a746e64ff47e7b324ad1cff8bf19ece9"
  },
  {
    "url": "assets/js/6.3acc59a6.js",
    "revision": "411b997edb8eebdf5626a9c51a80b778"
  },
  {
    "url": "assets/js/7.65695a92.js",
    "revision": "e0fc436b1751d684d6756e5416746c78"
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
    "url": "assets/js/app.9d390d1d.js",
    "revision": "8e46c8ee92a3d0b04fc28457dfd7b100"
  },
  {
    "url": "index.html",
    "revision": "afc84d14102c54c524c9eaeaef992d6b"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "945475007e062200505cb9b2a25f1823"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "5f8112c44e1d30c109676ccaf184a98c"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "e6b04b650ae9ab1b5296ba770d5e53d9"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6d731feba2adacfaa13d38ab91e15948"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "9aec4b2ea33045603a41768888bdf277"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "6a1da2dae6c3448dd4f58398edad0265"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "610b437803c2f07223003f3cad444e26"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "bd1324a6a2641e8b42e422698b74e8b5"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "34865aedf6b5b54c54c6f8deda5ef9d2"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "bf60624c42619fb60d7de25da7f839a1"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "db62bff6b52e18aa5f468f6116c32fb1"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "78dfca4121a9b89210e65055d8df7168"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "44da8fde5ccdb758d3b44633b1e85d39"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "b28dbf0da1f7b789fce1c7ad64a0656b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4297cc468765537b54403e697ebfaeac"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "7b28824db44ea95b2481b3279bf18508"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "d3e13372c8f7ebfac92bd9ffd4ecfe1c"
  },
  {
    "url": "Node/basic.html",
    "revision": "95885d8b8b4e4f98b26d7e5073088f47"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "6ce5a0fdcc8035cee2027271215ccd76"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "88aaa4af2f2111e53d9cf8746944e76b"
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
