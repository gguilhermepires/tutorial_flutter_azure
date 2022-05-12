'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cbf89f8a776e00c4c5c2611da1940e2b",
"assets/assets/icons/chat.svg": "6147989a378d194412a8ab46b074b828",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/login.svg": "29789505ffbeb46eb1b684cd50dab810",
"assets/assets/icons/painter.png": "7003c0511592a16a8ab39ed6cb9ab9e0",
"assets/assets/icons/painting.svg": "1cae51e07bc4e9ddd7576282b487939d",
"assets/assets/icons/roller.png": "f728893bdfe9107ccd74385e5e5e4fed",
"assets/assets/icons/signup.svg": "5f366fc66557521e8664354e8dd00b98",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/images/a.png": "22f8f115c4e878cbb244d0f782374074",
"assets/assets/images/add.png": "ed07f6d0da249437b77b7eec89991f35",
"assets/assets/images/b.png": "03caad34460416f9ec06a543d7a5e8e4",
"assets/assets/images/c.png": "3689cae3562c466f33571e7e4324b801",
"assets/assets/images/camera.png": "69514f8fabf05102a1034aeaf64b7f76",
"assets/assets/images/d.png": "c96660d310ac353c4a7377a5769e8ab5",
"assets/assets/images/icone01.png": "54a972d0f6b814b10c709ce47b598225",
"assets/assets/images/icone02.png": "bdeb42c7145192d7da91171780fe0b68",
"assets/assets/images/icone03.png": "0d6da2bb2b0f6a2898a2537179106d8b",
"assets/assets/images/icone04.png": "367aaea976c21574e4b0f5eb555983ad",
"assets/assets/images/icone05.png": "30f2e6bd0ceff56cbd3e6642bad19d98",
"assets/assets/images/icone06.png": "4150f083659450abf85a433ba9f12097",
"assets/assets/images/icone07.png": "b3c814d661dfa8b950e4f8a92b6dd8ae",
"assets/assets/images/icone08.png": "49bb4be6c908aa5dadf9b6b3e87c68d7",
"assets/assets/images/icone09.png": "2d702d0907bdb31a3e764cb823501248",
"assets/assets/images/icone10.png": "fa0266cbb908393a20d6f4439911fb20",
"assets/assets/images/iconeBm.jpeg": "1602e50c648ea673f9300324300649d8",
"assets/assets/images/iconeCadBasico.png": "ab017d2c7f25cabf318e49cb16f9b426",
"assets/assets/images/iconeOs.png": "992816d1b3c9da5788a0b4ada29b97b4",
"assets/assets/images/icones.zip": "daac929185612058272abd5f7c7e64b8",
"assets/assets/images/imagemTesteTracao.png": "ea0ae28f942db5d82f382d1c21d25085",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/logo.png": "fe88e74072064cdf7741cbb9367f7b82",
"assets/assets/images/logoNotificacao.png": "f9225c9f8212c9328dbf537dfbd546ba",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/mountains1.jpg": "2bb41e9b93621b157a31610dff899f92",
"assets/assets/images/mountains2.jpg": "7e01671788229779c9f8ed4945827c03",
"assets/assets/images/normaD610/1g.jpg": "ae2294d1012b64b2eac31ccc4412d601",
"assets/assets/images/normaD610/1p.jpg": "2bd7f2a0e57b3a3799c1875bda2b5f8e",
"assets/assets/images/normaD610/1s.jpg": "577492f6e614628166671986cf45089d",
"assets/assets/images/normaD610/2g.jpg": "df24b029fa94b03d4ea2d37a50341ba8",
"assets/assets/images/normaD610/2p.jpg": "55a03ca357f4ca8dfce4f74b5afb1c61",
"assets/assets/images/normaD610/2s.jpg": "08d0deaaef6f15b68575a728d98f9712",
"assets/assets/images/normaD610/3g.jpg": "ea751342997541a9c3e3bd262c6103cf",
"assets/assets/images/normaD610/3p.jpg": "d026fc5314a6df83cf79d3e64c016876",
"assets/assets/images/normaD610/3s.jpg": "66c77c430a169db3cd16abdb1bfdd724",
"assets/assets/images/normaD610/4g.jpg": "9580cfa1c2eed22cee928e7d7eec5880",
"assets/assets/images/normaD610/4p.jpg": "b7cac21dbb0bda7b00fb6a99db4317a9",
"assets/assets/images/normaD610/4s.jpg": "5ea3eb93044c5455bcba198af4d159d6",
"assets/assets/images/normaD610/5g.jpg": "2e03e663dcf2430e4d8809cffc1d347e",
"assets/assets/images/normaD610/5p.jpg": "722d79984db17c7ca2777f055d75f866",
"assets/assets/images/normaD610/5s.jpg": "6d0e0d552029a726657b0a0c8f43eba0",
"assets/assets/images/normaD610/6g.jpg": "8ec72a2e3b5b032dc3ec475546729228",
"assets/assets/images/normaD610/6p.jpg": "6f6b0f5f0a750e0bd4136dbe8b4e03a8",
"assets/assets/images/normaD610/6s.jpg": "0bc9fd24f4002b94deb3bf58e072d408",
"assets/assets/images/normaD610/7g.jpg": "49a5e5d7999d8c1bacb9429f0dfe7744",
"assets/assets/images/normaD610/7p.jpg": "93e2be2c906d3e37cbcdebfebc1641b8",
"assets/assets/images/normaD610/7s.jpg": "0d18ddb10261463606e6c519d182ca93",
"assets/assets/images/normaD610/8g.jpg": "5d950a1429af8a781c96156be6a8a512",
"assets/assets/images/normaD610/8p.jpg": "ab3471dd7f50131789d55abfee886d63",
"assets/assets/images/normaD610/8s.jpg": "60cca0120ca03d0d1c0f54b71f89cf78",
"assets/assets/images/normaD610/9g.jpg": "325c07bf06b6f6c1d0955c3ac9b15875",
"assets/assets/images/normaD610/9p.jpg": "24250deb25d21a7fb20def60b8a1aac0",
"assets/assets/images/normaD610/9s.jpg": "24e40d29f028d35719824f99d35cbb64",
"assets/assets/images/roller.jpg": "b296061957312bc838914740be7afb7a",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/testeAderencia01.jpeg": "a9950aff40adeaa1efa8dfc5891e54e6",
"assets/assets/images/testeAderencia02.jpeg": "e95de5ec5652dc9076faa045c293a606",
"assets/assets/images/testeAderencia03.jpeg": "62d84c04e8334292a18f113fa52249cc",
"assets/assets/images/upload.png": "31a936a3d4f63a34138bb06bf55ff848",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b36fa2993b3aa1acb65e740707c893a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "df72540508834cd7f2dd7f4985cee794",
"/": "df72540508834cd7f2dd7f4985cee794",
"main.dart.js": "3e83c65cdb53eea8293e7fb0b83d3355",
"manifest.json": "3ac59c144a947293178b6b4ae68cb7ea",
"version.json": "d7210237fd673738848cbb7dff7f6edc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
