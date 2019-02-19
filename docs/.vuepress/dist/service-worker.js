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
    "revision": "12d2f0823e308578de97c2035737239f"
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
    "url": "assets/js/3.eaa22188.js",
    "revision": "158f142172a7e9b9f04a25b742a0e932"
  },
  {
    "url": "assets/js/4.c0dc786c.js",
    "revision": "141a803c9b7a4b57bdd5147bfdc38d64"
  },
  {
    "url": "assets/js/5.446e71b4.js",
    "revision": "d61aafd2237b6cb09c143d5840cb2be1"
  },
  {
    "url": "assets/js/6.8f313190.js",
    "revision": "d147348a7927ad2a60f55bf241316d9b"
  },
  {
    "url": "assets/js/7.5756feb1.js",
    "revision": "8101e63e48390ddf8b3ecb4e7028ab31"
  },
  {
    "url": "assets/js/8.cd810289.js",
    "revision": "505ffd4d4935a88f03d8ba112bd2f250"
  },
  {
    "url": "assets/js/9.4c178180.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.f85fb3c1.js",
    "revision": "371695fbb8f0e820be2271f127f758a1"
  },
  {
    "url": "CSS/index.html",
    "revision": "25bf994cfeaa44e04fe2cb82d51c25ae"
  },
  {
    "url": "CSS/ThreeColumnLayout.html",
    "revision": "ebed9e31217613a692115e8feb1c84e0"
  },
  {
    "url": "hero.jpg",
    "revision": "401e29a186894bae76d9b123d49d8b58"
  },
  {
    "url": "HTTP/index.html",
    "revision": "0ee79cef0775d835b71f572b18908ed7"
  },
  {
    "url": "index.html",
    "revision": "2a2abe44671080641fbd551dcbdf4175"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "55a8d66d7579f3a256239428f4625ade"
  },
  {
    "url": "JavaScript/promise.html",
    "revision": "ced388eefdaf4b66fa4f327c32105897"
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
