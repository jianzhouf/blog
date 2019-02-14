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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8315efa5b075e4fef599d1b4fe852211"
  },
  {
    "url": "assets/css/0.styles.bad3de2e.css",
    "revision": "b8540ae45e112a73dca604dbf88df30c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.c64f9292.js",
    "revision": "7378a2249c685e8aba5b1f3e44dba1d8"
  },
  {
    "url": "assets/js/3.0c763d24.js",
    "revision": "030c0ead899a0de4365bd67d6abc7e60"
  },
  {
    "url": "assets/js/4.be6e2b8f.js",
    "revision": "80e6cbe1d4134bebb09ad210dfd74391"
  },
  {
    "url": "assets/js/5.554b337d.js",
    "revision": "5e09ca6f3497226180b8a7570ac4d2b1"
  },
  {
    "url": "assets/js/6.b9730622.js",
    "revision": "97fca75c78647d0d874b9fbb2e785296"
  },
  {
    "url": "assets/js/7.34c02bad.js",
    "revision": "cb841bbb7ba5519f7261ad09189eb99c"
  },
  {
    "url": "assets/js/8.bd45e8df.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.a7f82e82.js",
    "revision": "ca216bda7fba536e4dee14a51530f765"
  },
  {
    "url": "CSS/index.html",
    "revision": "a7e5f09b4c88b97166c82585eae15af6"
  },
  {
    "url": "CSS/ThreeColumnLayout.html",
    "revision": "5da2bb14479bab59176993c0b77e2f17"
  },
  {
    "url": "hero.jpg",
    "revision": "401e29a186894bae76d9b123d49d8b58"
  },
  {
    "url": "index.html",
    "revision": "01e06b96e8afbfffcc0d92a3f675df33"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "0562cebed9ab6dc4cf725b49e2ee26a6"
  },
  {
    "url": "JavaScript/promise.html",
    "revision": "59c868387b9978a3dd4f94a0af351d5c"
  },
  {
    "url": "threeColumnLayout1.png",
    "revision": "5b55ad4d20f9b4e69ead6aefed3a81f6"
  },
  {
    "url": "threeColumnLayout2.png",
    "revision": "afe43eae8a45b6c4aeadd8f652348d8f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
