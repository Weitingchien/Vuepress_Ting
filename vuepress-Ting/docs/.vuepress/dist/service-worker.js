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
    "revision": "1e86432bfa661c59c8560992d39bf177"
  },
  {
    "url": "assets/css/0.styles.a3fc8a8b.css",
    "revision": "26a95cb44d9bedb06e23dc34c85315f7"
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
    "url": "assets/js/10.aa5591be.js",
    "revision": "9940e565f90eb7d09574aa1876979980"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.1718e057.js",
    "revision": "163864f89a31bed9abf6384fc9be90aa"
  },
  {
    "url": "assets/js/13.e496d170.js",
    "revision": "f986b6e0d861e30651435e69f6f45f9a"
  },
  {
    "url": "assets/js/14.753be37a.js",
    "revision": "00497b97e19b93e3b4114036c9112ee2"
  },
  {
    "url": "assets/js/15.011f454a.js",
    "revision": "dd7a02ce22b84d97bf1e27fa6a12289d"
  },
  {
    "url": "assets/js/16.b1e84701.js",
    "revision": "6ff9580ca727bb4f3024aff778452327"
  },
  {
    "url": "assets/js/17.179d6344.js",
    "revision": "50f86f268443e4de1c0721b43d07e89e"
  },
  {
    "url": "assets/js/18.b0cfeab1.js",
    "revision": "054aad8b862cb39b69a8c37a5df2c3cf"
  },
  {
    "url": "assets/js/19.a64381a7.js",
    "revision": "49e2136708b6a10eed9c2c560347a6be"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.e7055157.js",
    "revision": "720cd11091b0e1d333d494ed40ae81c4"
  },
  {
    "url": "assets/js/21.af3b2ff8.js",
    "revision": "5ceb8817090b05ae608fb69f45553d70"
  },
  {
    "url": "assets/js/22.6a54ba69.js",
    "revision": "413298b80775a6e91d092c8d475354d0"
  },
  {
    "url": "assets/js/23.981e7255.js",
    "revision": "89372364b64e96de481f2eec92f40d3e"
  },
  {
    "url": "assets/js/24.bd7eee17.js",
    "revision": "6c9adc9c1bbd7493e5948dbe0c801940"
  },
  {
    "url": "assets/js/25.7e23805a.js",
    "revision": "979fd638074340c99416d20c6f41c206"
  },
  {
    "url": "assets/js/26.5b0730c9.js",
    "revision": "92739f57df5c683476f83bb18e421303"
  },
  {
    "url": "assets/js/27.03700383.js",
    "revision": "7c02a17b8caef3d34ccbf7400abfc095"
  },
  {
    "url": "assets/js/28.8df1762f.js",
    "revision": "6c4077a30176450b577ec8d68317e24c"
  },
  {
    "url": "assets/js/29.7e87c5c8.js",
    "revision": "d88687db926afa12e32b50b15bfc6342"
  },
  {
    "url": "assets/js/3.349b0dbd.js",
    "revision": "abcf0a793a3a9bacbcf31c79d57db0aa"
  },
  {
    "url": "assets/js/30.168a1b54.js",
    "revision": "c4af9d8243e6a93bdabe6bc44780be4e"
  },
  {
    "url": "assets/js/31.00efaa50.js",
    "revision": "ce30291aaac4353b921266f97a498a63"
  },
  {
    "url": "assets/js/32.5cc88271.js",
    "revision": "addd87debd4f12a22dba3e2934485e18"
  },
  {
    "url": "assets/js/33.14185fa2.js",
    "revision": "2461c76bc5b1f47b272dde9e4159e870"
  },
  {
    "url": "assets/js/34.db619a92.js",
    "revision": "17eec1405c9d4763c1d56eaa3b13c0d6"
  },
  {
    "url": "assets/js/35.8233734a.js",
    "revision": "f44e8210bd67ba4f716841f2e99e0ea5"
  },
  {
    "url": "assets/js/36.ff3ee743.js",
    "revision": "d2d7be2ba7ff2ef9cbede9807efbfc8e"
  },
  {
    "url": "assets/js/37.ab1c7894.js",
    "revision": "83b4dedf0e9af0f49638db4edf8dd142"
  },
  {
    "url": "assets/js/38.5f14ba37.js",
    "revision": "68aad443d20511aa2ec49d1c3d686e11"
  },
  {
    "url": "assets/js/39.a46505c5.js",
    "revision": "64ba58b76228b3586279e1d282e712cb"
  },
  {
    "url": "assets/js/4.a40011f8.js",
    "revision": "06cc846b40c24fbffef10bdd288d0418"
  },
  {
    "url": "assets/js/40.ae34a32a.js",
    "revision": "d03c2ac97a6cb9d97dfcdced760aafb4"
  },
  {
    "url": "assets/js/41.5180224e.js",
    "revision": "33444d860ae270f9036be0cee07388f8"
  },
  {
    "url": "assets/js/42.5bbcdcc7.js",
    "revision": "52b84e3f8518b481753d81bf37c33464"
  },
  {
    "url": "assets/js/43.2be1eab0.js",
    "revision": "69f1adae04358a028cba1e34bd14e850"
  },
  {
    "url": "assets/js/44.91bc2b36.js",
    "revision": "6dd921f343edbdb80c6e5d0287450a07"
  },
  {
    "url": "assets/js/45.402795b1.js",
    "revision": "21a645a94c6307d3018b6a7ef52fcf99"
  },
  {
    "url": "assets/js/46.8068ed63.js",
    "revision": "43539694f1a010b50a0d3a50e985c9c9"
  },
  {
    "url": "assets/js/47.6248d00e.js",
    "revision": "4e1dae9aaf56a84014ffcd97948356d3"
  },
  {
    "url": "assets/js/5.b2dc554c.js",
    "revision": "c71471b9a5e826791e2730241d4ddbcf"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.64656d21.js",
    "revision": "430ac1545a48226dd8bebc051fa2c471"
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
    "url": "assets/js/app.7fb0a069.js",
    "revision": "6081d31cca06d25255ba3b55818e1d79"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "51bfc8601a999398971b0f5ea0c1fe65"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "117af51aa4aee5a722aa20a51f18d74f"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "0a59df0300e1a232490064f32f4b90bf"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "3f6fea119e1c48ce875d641d24cb2645"
  },
  {
    "url": "DataStructuresAndAlgorithm/palindromenumber.html",
    "revision": "b8bb82396cc8d5f79b498ade06e50a68"
  },
  {
    "url": "DataStructuresAndAlgorithm/reversearray.html",
    "revision": "83cbf593791a12e4cc881ce0c76ed0db"
  },
  {
    "url": "DataStructuresAndAlgorithm/romantointeger.html",
    "revision": "ae66e205ab70fc0c1bb1880b3bb78aa6"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "5866672a70627812ab3488906aa8b526"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "96689438b97305ef35d4f1da8dc28376"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "4d5e5157886f2402c8c0797ca5955522"
  },
  {
    "url": "index.html",
    "revision": "f71116e5b2e4ab90b6e5f6ae01d637bd"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "e469ac8e57d2de5eff29cb61e40cf762"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "4c0279c5e98e208282acce161931f620"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "9bf134673f4661b2ac03c0508fba4a1e"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "88271072f9e2e7d79d541269d13e02e5"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "6cc95d1dd2cab3adf666418be363b611"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "df69fa3d3e767a3de9d4c34dfbf7699c"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "7b6d868c6e2edb8a8d3f7f05a46b2594"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "9a91ac6dadc0b874291a2e0118469678"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "e414d35aca90f5668f5c6f2756879607"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "4879c342ccef2fb11b8c33f2c57c798d"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "b9b3729d9214da03eaec5c007c88f34a"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "d6189bbadd42cf31e6c298a29f14248f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "90d6955b8285734bbea34d7e99346e7e"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "29df84cfc46715060e24234b90357c63"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "1208ea2e22179b71ce61f77f3f9a79bc"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "71d26009be869d439f16d5316978c47a"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "18c828972136df526df8e5a5d510605e"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "9240d4e326e316dc875b09fd12090e63"
  },
  {
    "url": "Node/basic.html",
    "revision": "d756d06994d907b9dcda269fb04dcd49"
  },
  {
    "url": "React/basic.html",
    "revision": "661fb43f16b3ec5bfc49173f6f72a3b2"
  },
  {
    "url": "React/lifecycle.html",
    "revision": "5b56718f0e8f9795a7ad16be5bdd5308"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "0a1dfad872b1701ed01924c81929df74"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "a6ca4133c6e72ee723b782d3e26a2682"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "c5cfd021cce02d1354dbeb96fef25257"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "ece7a157e3c9d0361b24286a32061b12"
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
