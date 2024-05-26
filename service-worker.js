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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e61440a78d7568ee509342d63bff51cc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "2a20150c5149f471501a4273a917b00f"
  },
  {
    "url": "assets/css/0.styles.0ba46b3a.css",
    "revision": "a38042b14ac0c123fdee2c674e0ede80"
  },
  {
    "url": "assets/img/img1.3d5cddd8.png",
    "revision": "3d5cddd8e7c5740d67f6a7573ae6e5de"
  },
  {
    "url": "assets/img/img2.d40d6a78.png",
    "revision": "d40d6a789f123d4dfc763e2460945015"
  },
  {
    "url": "assets/img/img3.3f74b8c9.png",
    "revision": "3f74b8c9afafcbb442475eeaa18a1dd4"
  },
  {
    "url": "assets/img/img4.40ee4d71.png",
    "revision": "40ee4d71244923b8448241fa010dd4ad"
  },
  {
    "url": "assets/img/img5.75326b7d.png",
    "revision": "75326b7df68e5b87b59179475b6aecaa"
  },
  {
    "url": "assets/img/img6.baa027cb.png",
    "revision": "baa027cbd4800483629aaa27a6970ca0"
  },
  {
    "url": "assets/img/img7.97d9b070.png",
    "revision": "97d9b070c327c111c4e552298fa3babc"
  },
  {
    "url": "assets/img/img8.4429b75c.png",
    "revision": "4429b75c6cb89296539b492f57874124"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.6d266f9b.js",
    "revision": "0f2e6adc2e9a295c34f1c63777ad8930"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.5073245e.js",
    "revision": "2d6e06f2f6fd864c9b9bf3c8b5b28210"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.73d7025e.js",
    "revision": "fcb55ba3e1e5ffffa4416a288436253d"
  },
  {
    "url": "assets/js/16.a7121d16.js",
    "revision": "1e048f62d72c0447f51cb614d9803e75"
  },
  {
    "url": "assets/js/17.ac8f90eb.js",
    "revision": "5e32d9a0b114caa1121b2939f1ecec2f"
  },
  {
    "url": "assets/js/18.97155529.js",
    "revision": "57cfcfbf2b6a9d269eb1786b76f97f44"
  },
  {
    "url": "assets/js/19.4e855bdc.js",
    "revision": "e674ae536b31de54ae60a9952d163536"
  },
  {
    "url": "assets/js/2.7969bedd.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.1f6bd6a8.js",
    "revision": "d592fba4274287b97d4d3e79f202a82f"
  },
  {
    "url": "assets/js/21.65e30104.js",
    "revision": "252fdff9e6cec85b07b9426e87316809"
  },
  {
    "url": "assets/js/22.c3df40bd.js",
    "revision": "ff2b239c1c92ec6df4d198e831d1399d"
  },
  {
    "url": "assets/js/24.d9e4ffe6.js",
    "revision": "62dcd27b82fdb84d503de2f5fcdf59ca"
  },
  {
    "url": "assets/js/3.d0a670f3.js",
    "revision": "8bc333678940dea86f27c80fa2908dfd"
  },
  {
    "url": "assets/js/4.65923f1a.js",
    "revision": "3e6079eb8a4ba82cb9d9beb32f22ed9e"
  },
  {
    "url": "assets/js/5.77652e35.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.9244ebc6.js",
    "revision": "c73d08778ed669bd415a47cbe3a4246b"
  },
  {
    "url": "assets/js/7.eb73e1ac.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.502954a1.js",
    "revision": "60383180bd5d78b424a620f895ae0b64"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6b85d574bd25390421f2dc28350b123a"
  },
  {
    "url": "design/index.html",
    "revision": "4713160bdc1774e4af8c7713c6c8061b"
  },
  {
    "url": "index.html",
    "revision": "80c9a6c74f9d4be742eece42ddd8b68c"
  },
  {
    "url": "intro/index.html",
    "revision": "71a1a9ed413724bf61a592eee63863a9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "16e62909db562f72e8c0c1edcfab322c"
  },
  {
    "url": "software/index.html",
    "revision": "c0f97c1ff1779b1236086f59e23a6bfa"
  },
  {
    "url": "test/index.html",
    "revision": "09f1fbc54d4e76d1340f7e4b6b389db5"
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
