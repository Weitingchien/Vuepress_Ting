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
    "revision": "635f9af6ad1d685dd60324561c883bc8"
  },
  {
    "url": "assets/css/0.styles.a3ee1fcb.css",
    "revision": "d5a4f377dd111e499128be48160b5a1b"
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
    "url": "assets/js/10.8cbbd3b7.js",
    "revision": "a6041e1085bb581d085a8c9743f7e988"
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
    "url": "assets/js/14.b551bb7b.js",
    "revision": "729c18ce6786928fd0487e6cefb12519"
  },
  {
    "url": "assets/js/15.a93ea14f.js",
    "revision": "cf1892a83da521def47cf9c66e6c9653"
  },
  {
    "url": "assets/js/16.17300789.js",
    "revision": "af8f0e9d5d1f3daea476f1200f91726f"
  },
  {
    "url": "assets/js/17.dbbe1ba4.js",
    "revision": "e046a10563c79f8b69ace39aece68a32"
  },
  {
    "url": "assets/js/18.f34e7ee3.js",
    "revision": "06d750be2e487c8a72bae84738f05cb2"
  },
  {
    "url": "assets/js/19.f2da918d.js",
    "revision": "72a308bd70b479e69cf3843781367bc4"
  },
  {
    "url": "assets/js/2.80755b45.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.6b3c63af.js",
    "revision": "d6892b4894710f745f2d3f65c473baa5"
  },
  {
    "url": "assets/js/21.96d90769.js",
    "revision": "c10914982aafcab1358391b49f7212ee"
  },
  {
    "url": "assets/js/22.6f05fa66.js",
    "revision": "fe90c3d77227a3d6059590e5512c8ba4"
  },
  {
    "url": "assets/js/23.d9960624.js",
    "revision": "91ed1d2b42a6e7bf44eda5b5aed59c51"
  },
  {
    "url": "assets/js/24.16442431.js",
    "revision": "67d6c8c1e2ff2602233dd79eae0b4d33"
  },
  {
    "url": "assets/js/25.7afbf014.js",
    "revision": "5fe3842880cc6d9dc05df345ad83165b"
  },
  {
    "url": "assets/js/26.2aa140c1.js",
    "revision": "6d74aa709a6c5432c17b9b63b3a9a67c"
  },
  {
    "url": "assets/js/27.90306964.js",
    "revision": "8700070a70d06a88071aa9f2fa96a2c4"
  },
  {
    "url": "assets/js/28.093bcc4c.js",
    "revision": "c489da9c882f541bf4170b5e5ad76156"
  },
  {
    "url": "assets/js/29.9346d821.js",
    "revision": "2bd8f46e1e79faccb57dfea396077260"
  },
  {
    "url": "assets/js/3.da408e31.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.ae358f73.js",
    "revision": "1c30bfee69c463905b167fea4db1558c"
  },
  {
    "url": "assets/js/31.786b6141.js",
    "revision": "70062cf1cbeccb6367f00cfa9bdb3bf3"
  },
  {
    "url": "assets/js/32.10b11c92.js",
    "revision": "84c02d9714c7fc90ff4c848214b00bd1"
  },
  {
    "url": "assets/js/33.c7e8078a.js",
    "revision": "119955552d6137c08206e5c943107d5c"
  },
  {
    "url": "assets/js/34.bace1197.js",
    "revision": "a49b05540e518fa245a10de8614e251c"
  },
  {
    "url": "assets/js/35.84810453.js",
    "revision": "7aa30b9db367a667d08df7a23bc45d8a"
  },
  {
    "url": "assets/js/36.f17e82be.js",
    "revision": "f6188a73559b6b584ccc946f6179c679"
  },
  {
    "url": "assets/js/37.30acb3cd.js",
    "revision": "66ee0e142781b3a356a7395b57e357b7"
  },
  {
    "url": "assets/js/38.410a7d93.js",
    "revision": "9870d5f1ac47b69140a2728ef3b54f7a"
  },
  {
    "url": "assets/js/39.3b595f66.js",
    "revision": "e8a73ea7aa40c3d40cac8459660daeaa"
  },
  {
    "url": "assets/js/4.c1600d0c.js",
    "revision": "e4e53e9fe1f74b89aab936501b1b1688"
  },
  {
    "url": "assets/js/40.242dc4c8.js",
    "revision": "32b888eba5c3d152ef3a94d564d50fca"
  },
  {
    "url": "assets/js/41.2ca697c0.js",
    "revision": "9e53de22a9e1a2a6625c7b954416938b"
  },
  {
    "url": "assets/js/42.6ab0ca2b.js",
    "revision": "076e5613bf72ec3b108584f887eb90ab"
  },
  {
    "url": "assets/js/43.cf5eb24c.js",
    "revision": "5b65bf74f5473bea53ab12c774b9a753"
  },
  {
    "url": "assets/js/44.17706669.js",
    "revision": "2de3d0dd3c870ce044bfe96ac6206e2f"
  },
  {
    "url": "assets/js/45.a451701d.js",
    "revision": "6d6f33446d21a199548916479e1842df"
  },
  {
    "url": "assets/js/5.1609d363.js",
    "revision": "9d06001c27f3678ab15bb59783c1fc2d"
  },
  {
    "url": "assets/js/6.1072d828.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.3b7bbb04.js",
    "revision": "2b37a0b035da496f792d1c8c55d7ffac"
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
    "url": "assets/js/app.f0ffd2dc.js",
    "revision": "7d55dc92843c8292d464de9fd34da073"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "67ce0a813ca7ae9d8483f768f7f63f20"
  },
  {
    "url": "DataStructuresAndAlgorithm/dictionary.html",
    "revision": "b924e1c36025809a958da9423a3d6378"
  },
  {
    "url": "DataStructuresAndAlgorithm/hashtable.html",
    "revision": "3afb805523f7790d4b245b0e5cef8928"
  },
  {
    "url": "DataStructuresAndAlgorithm/linkedlist.html",
    "revision": "671b48002369419c3def1bb4cbf9fc1a"
  },
  {
    "url": "DataStructuresAndAlgorithm/reversearray.html",
    "revision": "81b59582029afc90237664a7d1a2148d"
  },
  {
    "url": "DataStructuresAndAlgorithm/set.html",
    "revision": "ad16cfe7619b3e1531aeb1255b53bd70"
  },
  {
    "url": "DataStructuresAndAlgorithm/sorting.html",
    "revision": "2ec1de1bc43cd98c056003c28c94ae4a"
  },
  {
    "url": "DataStructuresAndAlgorithm/tree.html",
    "revision": "d52be13f5f6bd33623d398348aedc0ac"
  },
  {
    "url": "index.html",
    "revision": "ea52d921ead587032a9db1c3a91a14b7"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "d0d8c4e98d0e6247221286f4cfffdbfb"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "750061bbb3f21f0268b1d744b8f59acb"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "d92a53ca2098b7007830dc797f632a2b"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "c9e48d916378e053b156d291b81bd7be"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "72916b33d25f2dbc1f5648b9503baf21"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "d3f90c09f92eb2d3d7a2994f36faa551"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "c5e283a6be88183e18b798a4a2ff4943"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "aef2c1d09482abea02a678d43576c50c"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "8d133e25fe476d81ca0ea464d99f5a5e"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "09f21f258a74084e1655ebde7d28bf5c"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "c66d41eb1ce7c4abd08111b1ceefeb51"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "6b58b96932b5aaa1280cf524dba0ebef"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "3f358497c9ebb93183ea87b81d011777"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "8b110b6bb344e6b96479e06cf99e73f0"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "33ae7112041488f4c4d4762549a20994"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "84a9ca1d2e265f9688be4b3698727bd7"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "c26f030a4ad6f58de234883ae6258860"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "d90ac3eb2f5efa972429a80e993346b0"
  },
  {
    "url": "Node/basic.html",
    "revision": "db2e49747cf5cb3775bfbff581db3bae"
  },
  {
    "url": "React/basic.html",
    "revision": "d95d62fede411a7ab16dec415c0e404a"
  },
  {
    "url": "React/lifecycle.html",
    "revision": "151aeb7e9760e8a4d3b3219d64a8e423"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "c3758272bb4bb68e596d8bd8ab672439"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "8ce107f5ca89eb0d3f6600c420d62244"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "a1ce6ea9e69564881da85c9d52a9b9bd"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "f55b5e9d7d23fdbe0dc1740383a6ece9"
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
