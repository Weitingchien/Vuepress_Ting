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
    "revision": "63cadde4a64047b521fc2a7024198d10"
  },
  {
    "url": "assets/css/0.styles.c1fd2e23.css",
    "revision": "31b3a392cfa6c8422e6af3b6e2b3692e"
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
    "url": "assets/js/10.5abad7c5.js",
    "revision": "fe44c8b881c9184fb2bbdf9bb9b308a7"
  },
  {
    "url": "assets/js/11.7c3e8153.js",
    "revision": "3bde99ab253f07cee89ec05741617d28"
  },
  {
    "url": "assets/js/12.fd2d24ed.js",
    "revision": "bad7788a25077124237300b17a373f9a"
  },
  {
    "url": "assets/js/13.05e0b4a7.js",
    "revision": "7f12a42dd137a9649650e10f9395e792"
  },
  {
    "url": "assets/js/14.debe50f0.js",
    "revision": "62d580ed551565f5c6509ac52371db72"
  },
  {
    "url": "assets/js/15.bed19c5f.js",
    "revision": "1bae66f7238d2b4a0e038afcc5b927fc"
  },
  {
    "url": "assets/js/16.944576c4.js",
    "revision": "a2417b810bf42d05d9a312e647689195"
  },
  {
    "url": "assets/js/17.775c4945.js",
    "revision": "96a2268df9632ee55fd9a3b1bc231fa1"
  },
  {
    "url": "assets/js/18.8d4bc5e6.js",
    "revision": "748d38f3eb26bb03984cc11141391ba2"
  },
  {
    "url": "assets/js/19.f5d37330.js",
    "revision": "fccc4330d1a9d2125d54bb3207516fbc"
  },
  {
    "url": "assets/js/2.5fc37086.js",
    "revision": "899bc130e16df576e5c200fe73b1ce29"
  },
  {
    "url": "assets/js/20.42b559d2.js",
    "revision": "be6e5003e1fd7576d5bdbccc11d4f969"
  },
  {
    "url": "assets/js/21.34168160.js",
    "revision": "b204e3d12ec88ba497ce8feb35571154"
  },
  {
    "url": "assets/js/22.df418696.js",
    "revision": "44713ae217a4f3f119ae0ab48814baed"
  },
  {
    "url": "assets/js/23.ff09caec.js",
    "revision": "c27264f49e3ac7fbc94ce5fb36be311e"
  },
  {
    "url": "assets/js/24.4c8d695b.js",
    "revision": "47fda6e1a5340c164a3b89e78a4636e0"
  },
  {
    "url": "assets/js/25.5d2a8f07.js",
    "revision": "4bea6513ff4bbbbbaae8e5220653552b"
  },
  {
    "url": "assets/js/26.9f4bf2e5.js",
    "revision": "13be57567e1d9eebb49c881d3bb68669"
  },
  {
    "url": "assets/js/27.29c55c7e.js",
    "revision": "51368e830288d7ac4e2308a806ba3986"
  },
  {
    "url": "assets/js/28.32e0d93f.js",
    "revision": "bb8f1de0db2a6d9533256a4524c46f9b"
  },
  {
    "url": "assets/js/29.905db022.js",
    "revision": "5e2d4ceade8dcfa210be4bb6388b1d2a"
  },
  {
    "url": "assets/js/3.7d57839e.js",
    "revision": "9a032abb61382f0f3b31177cd9c31bc6"
  },
  {
    "url": "assets/js/30.25f10e47.js",
    "revision": "723833be16b6fdba113f200e6a94c0de"
  },
  {
    "url": "assets/js/31.762315f6.js",
    "revision": "190884ac8970224d31ee0a49a7a8f45d"
  },
  {
    "url": "assets/js/32.ecc5d6c6.js",
    "revision": "b30ca78d4ad91f7ca8d436799a8a78b8"
  },
  {
    "url": "assets/js/33.60dfeb82.js",
    "revision": "171110218606184a4855a44e9f8ceab3"
  },
  {
    "url": "assets/js/34.8276203c.js",
    "revision": "4f3b555322fdb25170151f68e7824898"
  },
  {
    "url": "assets/js/35.69489b73.js",
    "revision": "176ec85f0cdc0e9a4aeca98474c73399"
  },
  {
    "url": "assets/js/36.05948a05.js",
    "revision": "005e7dcf9e1a5afceb0f9c5e0c05df4e"
  },
  {
    "url": "assets/js/4.fe7d941f.js",
    "revision": "823eb0d5768e2c9397b7849acae98785"
  },
  {
    "url": "assets/js/5.2ecd2552.js",
    "revision": "1bc49d4febfb86c06f7bca35ec9d982a"
  },
  {
    "url": "assets/js/6.68c61189.js",
    "revision": "e9d94d1e960d50deac7cb7a496100870"
  },
  {
    "url": "assets/js/7.8c0fdf81.js",
    "revision": "74467b20cf062a5a529e46072eaa5783"
  },
  {
    "url": "assets/js/8.254c524d.js",
    "revision": "42246de4d6c9375bc3d7b0a332ce05c1"
  },
  {
    "url": "assets/js/9.ca386020.js",
    "revision": "929ebef2bc30ec800ba18b94219293b2"
  },
  {
    "url": "assets/js/app.19299df9.js",
    "revision": "97de9f051227e86b157637319acbeb81"
  },
  {
    "url": "DataStructuresAndAlgorithm/array.html",
    "revision": "1045587a45e32ad33a46c9f6fdd688e9"
  },
  {
    "url": "index.html",
    "revision": "3f8723df5c798a4708f8e28c65646642"
  },
  {
    "url": "JavaScript_1/ajax-json.html",
    "revision": "b5657183302c9c929e74d5b4e076428b"
  },
  {
    "url": "JavaScript_1/dom.html",
    "revision": "2efe43a14534c4ccbe28d3583366252d"
  },
  {
    "url": "JavaScript_1/dynamic.html",
    "revision": "01ee935228828db2771141a45fdf9d29"
  },
  {
    "url": "JavaScript_1/function.html",
    "revision": "4c81f9412a1fe349e6a99da0c45dc01b"
  },
  {
    "url": "JavaScript_1/hoisting.html",
    "revision": "b55aa43858b150d9598e2a44f27359e5"
  },
  {
    "url": "JavaScript_1/index.html",
    "revision": "8ab53d636e7625d1aa01748388ee7036"
  },
  {
    "url": "JavaScript_1/logical-operators.html",
    "revision": "bd298de033e6baf0f53ac254aac84eed"
  },
  {
    "url": "JavaScript_1/looseequals-strictequals.html",
    "revision": "45563e94cc366072d1cdc4fe8c84b001"
  },
  {
    "url": "JavaScript_1/object-defineproperty.html",
    "revision": "e3d21d9fca9e7ac78b661e1d8d94f1dc"
  },
  {
    "url": "JavaScript_1/objects.html",
    "revision": "5e56edc77172cebffc2596a82788752a"
  },
  {
    "url": "JavaScript_1/precedenceassociativity.html",
    "revision": "7a59e6b5c43453490088d3dcb639f60d"
  },
  {
    "url": "JavaScript_1/primitivedatatype.html",
    "revision": "41eb23578819810e92bcc136ae83627f"
  },
  {
    "url": "JavaScript_1/prototype.html",
    "revision": "7a2236c98ec680e67005dee223b5941f"
  },
  {
    "url": "JavaScript_1/scopechain.html",
    "revision": "72ff0068fc37b171c37daf3c93fc9492"
  },
  {
    "url": "JavaScript_1/statement-expression.html",
    "revision": "338be961b2293cad7886f24083ddcc60"
  },
  {
    "url": "JavaScript_1/thread-async-sync.html",
    "revision": "4dfc6a036801be717d83f71f5a6c930d"
  },
  {
    "url": "JavaScript_1/truthy-falsy.html",
    "revision": "9f6786b1993da41b04667aa75388c8c4"
  },
  {
    "url": "JavaScript_1/varletconst.html",
    "revision": "abf0fc7871f09ddaaff7ee747775718b"
  },
  {
    "url": "Node/basic.html",
    "revision": "4e8ba6150e9bb0b901a5cca8c09babac"
  },
  {
    "url": "Vue_2/basic.html",
    "revision": "ef9e2cd88ef33950f41ec44165a0bb1d"
  },
  {
    "url": "Vue_2/index.html",
    "revision": "51b31066598d48b0983c73d08ba7b58b"
  },
  {
    "url": "Vue_2/v-basic.html",
    "revision": "6c9de786a94178f378c013c5d117a753"
  },
  {
    "url": "Vue_2/v-lifecycle.html",
    "revision": "c4dcc855e4de6c710debdeb94fc5e64d"
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
