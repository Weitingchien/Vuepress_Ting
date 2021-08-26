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
    "revision": "058891574fd529d635bede228f8c3f0b"
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
    "url": "assets/js/10.61525b01.js",
    "revision": "88e938c2b23444725742be6800b39985"
  },
  {
    "url": "assets/js/11.f63bf1a0.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.49011c38.js",
    "revision": "592f24186667753827c3599cbed84c1e"
  },
  {
    "url": "assets/js/13.8b5170d4.js",
    "revision": "99a561eb9716db105a7dafa6584ef9ae"
  },
  {
    "url": "assets/js/14.b551bb7b.js",
    "revision": "729c18ce6786928fd0487e6cefb12519"
  },
  {
    "url": "assets/js/15.3d88df5e.js",
    "revision": "635ab050a6e22943c4ae0a3cf36e47d0"
  },
  {
    "url": "assets/js/16.10c49961.js",
    "revision": "0ef8b50ae8472df371e4600abe311d3b"
  },
  {
    "url": "assets/js/17.c456059a.js",
    "revision": "53d253546abed035cd25dda44361a4ca"
  },
  {
    "url": "assets/js/18.9f51839f.js",
    "revision": "6f0bf2e447903ab179393cc4c7761f70"
  },
  {
    "url": "assets/js/19.b50aad5a.js",
    "revision": "a4b89108050904796ff268c5325eecdd"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.08f8d378.js",
    "revision": "8a1aff9bac1ee2c25601a959d37f6246"
  },
  {
    "url": "assets/js/21.826ca9ad.js",
    "revision": "8d849f831e6950812bf5719d7a05bbb6"
  },
  {
    "url": "assets/js/22.7af4a8fd.js",
    "revision": "3ec74b3261cd11dbbdd51c4f14b201f4"
  },
  {
    "url": "assets/js/23.65090586.js",
    "revision": "7c3286b04d618e8a91e60ec267865b69"
  },
  {
    "url": "assets/js/24.d0f3a56f.js",
    "revision": "92c00908474efffcbb724ea6a983c7df"
  },
  {
    "url": "assets/js/25.8ba08e9d.js",
    "revision": "66a5bf178faff099a5c527288b6f4c76"
  },
  {
    "url": "assets/js/26.95c0ccb2.js",
    "revision": "a35f107ef9bec8f42db93781ce5203ec"
  },
  {
    "url": "assets/js/27.31f1b80c.js",
    "revision": "98eaf14d26f60efc176e175c6c0d4819"
  },
  {
    "url": "assets/js/28.87a6b3d0.js",
    "revision": "91d34d01f58ad2c500e09615947c647c"
  },
  {
    "url": "assets/js/29.d1314057.js",
    "revision": "7514d93d226be3c50168925c5a3fe8ec"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.f91a94c4.js",
    "revision": "945795ea0c8eb95df622f15f95b6fdf2"
  },
  {
    "url": "assets/js/31.0a43b256.js",
    "revision": "b83fd3ce532dcb68a563c207e97b59e9"
  },
  {
    "url": "assets/js/32.27132d97.js",
    "revision": "ae850871d7d97540f14dc968772355f6"
  },
  {
    "url": "assets/js/33.8fb0c13e.js",
    "revision": "f0d5dc236203b968ee6ec78a9d54e788"
  },
  {
    "url": "assets/js/34.6d854865.js",
    "revision": "515e5e3e8f013571f83d8462667a7642"
  },
  {
    "url": "assets/js/35.97a1d1a2.js",
    "revision": "77351f82df08e35fc8373a19ad7c8d84"
  },
  {
    "url": "assets/js/36.7aed0d2f.js",
    "revision": "8affdbc616465bedee11d107563ff95f"
  },
  {
    "url": "assets/js/37.404ee74b.js",
    "revision": "66af1d3dccdfe7c982272bd040cec3c0"
  },
  {
    "url": "assets/js/38.e7033770.js",
    "revision": "bcce7bca9fe92aeba3d2a67c052af4b6"
  },
  {
    "url": "assets/js/39.0efd9108.js",
    "revision": "b6fe2839f4b8f222a148441de6c35139"
  },
  {
    "url": "assets/js/4.4112ba5e.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/40.44595c9b.js",
    "revision": "ef1e93941ab67cfce1739159f5da0323"
  },
  {
    "url": "assets/js/41.6e639e2c.js",
    "revision": "6ac6bf8a082b031358a9c0e78e343448"
  },
  {
    "url": "assets/js/42.11bc2f97.js",
    "revision": "323d3704aa15d3f63e51949ea046c7eb"
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
    "url": "assets/js/7.d23ebf99.js",
    "revision": "e09605e8ec4ec72fecc8692d226da1bc"
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
    "url": "assets/js/app.1d626008.js",
    "revision": "c9ef85bc5976c3d2a2ec2dc09450447c"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "c0a6b46ad689b0718cafe5534672a7cb"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "225fb11657743362055d6406a6ef58d8"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "8512313c03073338dab79d890b5cfa8b"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "7fcd0d9406e58fa2e1b4c1c048a61d52"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "bbe49451199e3bf2f18edb9910ea5707"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "fbf46ce288e7814f1f9c73a3652369df"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "25c14ec84385205c773a611af697297c"
  },
  {
    "url": "index.html",
    "revision": "0d86f815bf2003fd07ebb673fec68c16"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "c05e3efe70af23e5ae0a327b6408c14e"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "4763eee3b2043c5118d20ccd39fb5e48"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "572abb98cd6095da25bbea2d0c424eff"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "bddc90976f5aa90fb9dc3faec6ea303a"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "c42cda5a6aabc6835e80bbc57e4b88c7"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d045191fc82c710783cb49afbdcdfe4e"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c738c5483852f050a8cca42e3aa1da4e"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "ee871c359316be990ac0a8658b0a5b9f"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "603493fe3df4a8625272bfabbf22390c"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "ff7e3f38ed1a43b826c74cf4440b5830"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "8f6e79663fd496b56b96ea837877d43c"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "d422dea05d9c418b8a52049a32e76653"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "fed37cd871704503e531f8ed017224f9"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "8939f6c9294eca8f103aeabbdee1fa0f"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "435fce2376a6c7c3622433627540a62b"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "cf5b1ef9de5753563d703edcbcaea8b0"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "0448147cac33be8138341eb237d69fae"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "e684c26d1f17cbd5c52595fba9f4d6b0"
  },
  {
    "url": "Node/basic.html",
    "revision": "9e67c4ae86899dbfea88c849842c49f1"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "8c45b01dd93084af06beb507b653bd7c"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "f30db0fc8af6f6a3132b9f2953af8f10"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "211e508e511ff6dd7da635838fa112f5"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "d74ac39ee6678d958ce632e87fc6cae5"
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
