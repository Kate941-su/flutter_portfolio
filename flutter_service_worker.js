'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2d040522ab8ae37e25c7e64808f00254",
"index.html": "0cb962e8fbe46529397d9e30830b3e38",
"/": "0cb962e8fbe46529397d9e30830b3e38",
"main.dart.js": "39af64652e99023c3a8bbb9d171bd2c9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0376e8a667a9c52cd6c564144cbc84cc",
"assets/AssetManifest.json": "f8766869a32059b2278664fe20ac54f3",
"assets/NOTICES": "a9548eb1c21c1b1cace03031aab02daa",
"assets/FontManifest.json": "52b75e16efe8f0e7a6d16b21ae32d8ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "2cc81c8635292af35b9e553e67b939c1",
"assets/fonts/Ubuntu-L.ttf": "2759de5c01527bd9730b4d1838e6c938",
"assets/fonts/MaterialIcons-Regular.otf": "e7c5f04ecac3877e3c85a7146a741d26",
"assets/assets/images/about/python.png": "d37732994b50da946ee8657bed66e456",
"assets/assets/images/about/smp.jpg": "6d77c9581e284319920daf93b4f734cb",
"assets/assets/images/about/mol.jpg": "d30e848650ea4377d81b2238243f3aec",
"assets/assets/images/about/born.jpg": "5c51d444cc60bd3eeea91970d7a9c319",
"assets/assets/images/about/router.jpg": "72191292f8933b0f0f6f841ce975a788",
"assets/assets/images/about/be.jpg": "2bc27c37e1666999d666965b8635ae28",
"assets/assets/images/my_logo.png": "8712e31bcae8312dde751c7dfc890d59",
"assets/assets/images/works/works_thumbnail/kyosho_thumb.jpg": "61d1ab8c2df108d9c705c3f8f6443ef1",
"assets/assets/images/works/works_thumbnail/nakaze_thumb.png": "5622255f1f1a52af97d8c1bc4e0b8894",
"assets/assets/images/works/works_thumbnail/blood_pressure_thumb.png": "a9d72217c1d9525391405e08f42f70bc",
"assets/assets/images/works/works_thumbnail/kaitos_room_thumb.png": "b26cce1b8a0cd87767d51b616cedb508",
"assets/assets/images/works/works_thumbnail/portfolio_thumb.png": "4d14ffd83f290bca7d306102dc6004d8",
"assets/assets/images/works/works_detail/portfolio1.png": "4d14ffd83f290bca7d306102dc6004d8",
"assets/assets/images/works/works_detail/kaitonoheya.png": "b26cce1b8a0cd87767d51b616cedb508",
"assets/assets/images/works/works_detail/blood_pressure2.png": "a9d72217c1d9525391405e08f42f70bc",
"assets/assets/images/works/works_detail/kyosho3.jpg": "c9a6896fb095c014df85be7fdc7e5bd0",
"assets/assets/images/works/works_detail/kyosho2.jpg": "559c1e1e811a4e336e3593a9f2c3e040",
"assets/assets/images/works/works_detail/ApplicationModel.png": "1a1c1a6877766209f347f4907c53be49",
"assets/assets/images/works/works_detail/blood_pressure3.png": "7369ac85effd6b27482a6fb5b79597d7",
"assets/assets/images/works/works_detail/blood_pressure1.png": "aa7167f50edf20f180b16e6e7cebce79",
"assets/assets/images/works/works_detail/kyosho1.jpg": "61d1ab8c2df108d9c705c3f8f6443ef1",
"assets/assets/images/works/works_detail/ApplicationModel_uPzSoe8.png": "1a1c1a6877766209f347f4907c53be49",
"assets/assets/images/works/works_detail/kyosho4_PjKDEo0.jpg": "a1df79ad3670855ac51f08d4a778dacf",
"assets/assets/images/works/works_detail/blood_pressure4.png": "dcb8526cf0b3f53fba90d8dc54f717ef",
"assets/assets/images/works/works_detail/kyosho4.jpg": "a1df79ad3670855ac51f08d4a778dacf",
"assets/assets/images/works/works_detail/kailog3.png": "0cc5a7133b5cb39db6e1863e1bad6846",
"assets/assets/images/works/works_detail/kailog2.png": "fc69f45a18c47438769589881ba59082",
"assets/assets/images/works/works_detail/nakaze5.png": "f9279751a640f963d64e7dc92e0b9c0c",
"assets/assets/images/works/works_detail/kailog1.png": "2364f994b5410cc004f8f52f5ff7d68d",
"assets/assets/images/works/works_detail/nakaze4.png": "6818a7739a68c69c1e50f8f3366a495f",
"assets/assets/images/works/works_detail/kailog4.png": "c516d437fa027991da54c005f6387f5c",
"assets/assets/images/works/works_detail/nakaze1.png": "5622255f1f1a52af97d8c1bc4e0b8894",
"assets/assets/images/works/works_detail/nakaze3.png": "6aed52fca484c714bb31eb555f59ee21",
"assets/assets/images/works/works_detail/nakaze2.png": "5622255f1f1a52af97d8c1bc4e0b8894",
"assets/assets/images/skills/python.png": "6bc9f1e8667e5060ea0628fb137b798c",
"assets/assets/images/skills/cpp.png": "cd5180cd4ac647f534b67a2162f5e18d",
"assets/assets/images/skills/dj.jpg": "77418e57b89ea7516d77bf37e9bfae3d",
"assets/assets/images/skills/js.png": "6971ea6af8d154adf3bbc572150f9869",
"assets/assets/images/skills/swift.png": "39581203c969a4252eee275632030ccb",
"assets/assets/images/skills/flt.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/images/skills/mark.png": "38e0df7ae49ed6863b501257fd76dafc",
"assets/assets/images/skills/php.png": "e57992301409aed52429d15b6a3714f0",
"assets/assets/images/skills/wp.png": "d4eb53b73cd27be0420adba8cc835fc7",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
