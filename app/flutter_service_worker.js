'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "397d9c6d7f4ef82fa373a0d8a6358bf1",
"assets/AssetManifest.bin.json": "0519bb0df1ae920338f253114a9cb8d8",
"assets/AssetManifest.json": "50ac73b8c519354227504795c3b7de4c",
"assets/assets/images/1734126672812-715x375.webp": "0fd0832b4fb41c168c8bfca0e8eaf306",
"assets/assets/images/28846751-f4c0-4b0f-b240-230ea6a060a4.jpg": "383e6cdd817270f70b9425b5a32c5ef8",
"assets/assets/images/7b0b2e34-1d68-4c93-86ad-64f979fc25b6.jpg": "fd81df14dffa8911671ee0561e51d8cf",
"assets/assets/images/ab67616100005174f8f872bfd239a7205ec73672.jpg": "92f58e67e976bfafacccbbf5b4e65980",
"assets/assets/images/Add%2520files%2520via%2520upload%2520%25C2%25B7%2520Grandjig_jig-links@f155ba4.html": "713d7fb6679bbb2b66584d976ead5be8",
"assets/assets/images/ea591e5d-317b-4983-adff-7cd349319d7d.jpg": "68c4b44b3f1dfa007fbdb116d4705863",
"assets/assets/images/Hotkid-e1674790768602-1440x720.jpg": "f8122f1a4817b6f2d8e70205f020e3b5",
"assets/assets/images/image%2520(1).webp": "8b999a060206f95884bd1bbc54d77c6c",
"assets/assets/images/image-154.webp": "8beddc5413d64392e3cb072b11d687e8",
"assets/assets/images/image.webp": "ffd3fe4c4a38ca8a2a9f435b4299861a",
"assets/assets/images/jig_splash_logo.png": "6c156e5cb7142bbc1fd098811f45cba4",
"assets/assets/images/uuiiuu.jpg": "34474bf5a8aa56e3a8b8d00627e6c7fa",
"assets/assets/images/Victony.jpg": "12d1ce3cc290f6647d2b20069874d684",
"assets/assets/images/wizard-chan-WMPbo": "d6406785b9a01786a763a9b482dff4c8",
"assets/assets/images/wizard-chan-WMPbo%2520(1)": "d6406785b9a01786a763a9b482dff4c8",
"assets/assets/images/yt6.jpg": "cae2ac2195d087b8886d3303c4f435f0",
"assets/assets/images/yt7.jpg": "4b239c45318200d7528c655e4cf9af8a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e4fa2bbc03e23832c39f9f1c91929f74",
"assets/NOTICES": "b439baae963825cbefe25758a28ed67d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6c156e5cb7142bbc1fd098811f45cba4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "aa7ed2a2b7aa21be9877d37c8caa61b4",
"icons/Icon-192.png": "6c156e5cb7142bbc1fd098811f45cba4",
"icons/Icon-512.png": "6c156e5cb7142bbc1fd098811f45cba4",
"icons/Icon-maskable-192.png": "6c156e5cb7142bbc1fd098811f45cba4",
"icons/Icon-maskable-512.png": "6c156e5cb7142bbc1fd098811f45cba4",
"index.html": "8dc12c6afc1af9b0cbdd0024c6efb37e",
"/": "8dc12c6afc1af9b0cbdd0024c6efb37e",
"main.dart.js": "31a3ac857f8c0417c6ca9112bd00a30a",
"manifest.json": "0385ab18e27550ccea00cbc8d9329018",
"splash/img/dark-1x.png": "3b33cfed27ae42b571f95d4f97411570",
"splash/img/dark-2x.png": "c3531afd42ff5d539dcdf831487f5651",
"splash/img/dark-3x.png": "c7bcd7757627bb553832e9dafbf73595",
"splash/img/dark-4x.png": "ff694f5b2282502b6a55b1c035e93502",
"splash/img/light-1x.png": "3b33cfed27ae42b571f95d4f97411570",
"splash/img/light-2x.png": "c3531afd42ff5d539dcdf831487f5651",
"splash/img/light-3x.png": "c7bcd7757627bb553832e9dafbf73595",
"splash/img/light-4x.png": "ff694f5b2282502b6a55b1c035e93502",
"version.json": "9e254a51a76172c136d715962cfbf2ad"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
