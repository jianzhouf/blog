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
    "revision": "a67fd591593dcc6586c6fa521848116e"
  },
  {
    "url": "assets/css/0.styles.b79dcaf8.css",
    "revision": "c30d2386cde4242133dd0c0436af9519"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/threeColumnLayout1.5b55ad4d.png",
    "revision": "5b55ad4d20f9b4e69ead6aefed3a81f6"
  },
  {
    "url": "assets/img/threeColumnLayout2.afe43eae.png",
    "revision": "afe43eae8a45b6c4aeadd8f652348d8f"
  },
  {
    "url": "assets/js/2.7111e6b5.js",
    "revision": "e19579a22b6fadee77eea6f3d8af41c3"
  },
  {
    "url": "assets/js/3.fc68dbf2.js",
    "revision": "a46acae3b63b516231c98ea9d463cfad"
  },
  {
    "url": "assets/js/4.3ecb5f29.js",
    "revision": "0441eece15b4b3a17727a06de2621c1d"
  },
  {
    "url": "assets/js/5.4b463621.js",
    "revision": "91bf70f4598c40a78a0b15604b4afe28"
  },
  {
    "url": "assets/js/6.bdf30bc4.js",
    "revision": "aef899b91fe5b0443709be3d9f2aded8"
  },
  {
    "url": "assets/js/7.841e0f0d.js",
    "revision": "93995dd08d2691a48f2541cba8527aad"
  },
  {
    "url": "assets/js/8.c748376e.js",
    "revision": "61568b6432785bce582f2999c3107f33"
  },
  {
    "url": "assets/js/app.e75c558e.js",
    "revision": "20ca8c823569f5cbdef8d4ea16199858"
  },
  {
    "url": "CSS/index.html",
    "revision": "4e0823b1219624fdc41d3b557b5b0bd3"
  },
  {
    "url": "CSS/ThreeColumnLayout.html",
    "revision": "db496e37872a05058fc1e2db406fc1cc"
  },
  {
    "url": "index.html",
    "revision": "b393621e0886455b7c7cbd889c29fa6a"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "8729b3fbb7b65b4b1c8764bfab97942f"
  },
  {
    "url": "JavaScript/promise.html",
    "revision": "3e0b32e212f021170fe8dd0060ec122b"
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
