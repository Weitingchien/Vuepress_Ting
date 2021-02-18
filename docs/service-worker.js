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
    "revision": "7494964da9363685a24b22b100b8f2f6"
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
    "url": "assets/js/11.960c11a9.js",
    "revision": "364ebbb802643f5862bc0a3a8c6181f4"
  },
  {
    "url": "assets/js/12.73e17025.js",
    "revision": "832e0f178daeffdf4f4306ce349e09c6"
  },
  {
    "url": "assets/js/13.cf5786e4.js",
    "revision": "3ac9a15ffec7dcabd787e89d310cc3e3"
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
    "url": "assets/js/16.f240a6f0.js",
    "revision": "45d59aebe10c698919e0c141280afc01"
  },
  {
    "url": "assets/js/17.c2b42e50.js",
    "revision": "c0e42efac86c49765fcf3bbc9979ee87"
  },
  {
    "url": "assets/js/18.7908b314.js",
    "revision": "dc868fe5b192782fdb2309918e69b626"
  },
  {
    "url": "assets/js/19.0b0eeb4a.js",
    "revision": "7919c02b84416163163a94bb74fdb0e7"
  },
  {
    "url": "assets/js/2.f581e58b.js",
    "revision": "31b53f4aa6ad77ce8043614c2038a3bc"
  },
  {
    "url": "assets/js/20.39fc09de.js",
    "revision": "7a445a528fc8ee805e51891a27f0fb40"
  },
  {
    "url": "assets/js/21.eda8ae30.js",
    "revision": "26a6a5d352d2d0b2818b967b135adcdc"
  },
  {
    "url": "assets/js/22.eac8a064.js",
    "revision": "66425d988b5bcbb7d250f1d97a23fbb3"
  },
  {
    "url": "assets/js/23.613a3014.js",
    "revision": "3e4cb0dc0a9d2cfd369becb918ddea31"
  },
  {
    "url": "assets/js/24.6c13ad7c.js",
    "revision": "e8cbcdd1ab9f3dd25376a35850a480fd"
  },
  {
    "url": "assets/js/25.215059be.js",
    "revision": "b97a8544090fe711de799514be96eae9"
  },
  {
    "url": "assets/js/26.6d689f01.js",
    "revision": "3d213d8d09d624330d7e120796fa98b2"
  },
  {
    "url": "assets/js/27.a9cad2dd.js",
    "revision": "55b5a3be69e49a2d2ad93f9f991940cc"
  },
  {
    "url": "assets/js/28.827b92d3.js",
    "revision": "f1827a1d82bd86c2d22d813f11a2e40a"
  },
  {
    "url": "assets/js/29.651b58d6.js",
    "revision": "57491c94c55a7fbd6a14182645350694"
  },
  {
    "url": "assets/js/3.bf8937fb.js",
    "revision": "ac93bc4149937369082ba8fdec63b91c"
  },
  {
    "url": "assets/js/30.825c902c.js",
    "revision": "8546eafe2e1f3f788eae15fc61320aab"
  },
  {
    "url": "assets/js/31.ec9448ce.js",
    "revision": "50275334f00ee69251abe07efcdf8388"
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
    "url": "assets/js/7.311dd1de.js",
    "revision": "723543769febdc94589aa1d21a3dab91"
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
    "url": "assets/js/app.d8893b93.js",
    "revision": "1884f2bf241eab4910fab584cbcaadb6"
  },
  {
    "url": "index.html",
    "revision": "cdfb5a73f44eb9ebe9d15e71f7998474"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "f2e0e1e57be8060f3b5cfa873faf42f5"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "8a6f9310a60b682c8e7f4937f521e646"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "2173642db1adad3e74ba94b1c77ab125"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "46f13786a4417bf5b57a6670f2fe0272"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "921abbf101f642110e657c87cd7e6351"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "ff464d0bad5b9c16a5d78e5540430648"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "190623e6aa7cc40357d252d22b37e7d5"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "314d4002b51179fb2f50ac972c8c5108"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "5dcd325730d927f1b6a190a6777c83af"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c216586188063b4d5656024b0caeecbe"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "9dd465455db12ed48083de3ee588bf68"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "ce8c6b2b82e103aab7da966e887c62f8"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "1d8745febcd74541768174e2394a5e2e"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "757241a9ede4daac80eef5fbeb713c19"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "3ae189da826e71a5ea1350fb15a482bc"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9a2ef73cd813abcd5161fefee7f1e5a4"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "8e6e4e5ee84d8d691f0232b55f8e9dee"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "a5984b0a2024cbe4e9c5577ddf096162"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "50c6e199c988d0f1038af9d8645821e7"
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
