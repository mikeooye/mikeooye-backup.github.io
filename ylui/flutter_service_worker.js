'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4902131760edf70e31ade3ad47e5f2e7",
"index.html": "c820f30342a8e9ac8c6a293ed92f7563",
"/": "c820f30342a8e9ac8c6a293ed92f7563",
"main.dart.js": "ccbbecdb65b569ef6013da79bb22f823",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/images/notion.png": "4979b4864ac6fd62d462e3295bc1020b",
"assets/images/flutter.jpg": "e8b99517f7ca42b0d9b0360659c97b49",
"assets/images/js.png": "745456d8484e68cc411c189a28276d4c",
"assets/images/tabs_icon/3.0x/message_selected.png": "2cfcb3db7346c613f229c56c244f58b1",
"assets/images/tabs_icon/3.0x/me_default.png": "d3a37cc238e9ab4497c7f57d583d4d74",
"assets/images/tabs_icon/3.0x/message_default.png": "a48d06acc153bdbc9b01ba110b852532",
"assets/images/tabs_icon/3.0x/work_default.png": "3e97e55a45f960e1081f97e57991e3cc",
"assets/images/tabs_icon/3.0x/community_default.png": "90187af487aa987b1b1b1c957152ab8b",
"assets/images/tabs_icon/3.0x/me_selected.png": "74993ea6d148a398497461cd059716b2",
"assets/images/tabs_icon/3.0x/work_selected.png": "830a1d53c111071882b1de547f0e8e5c",
"assets/images/tabs_icon/3.0x/community_selected.png": "1256316c82cbcb86aaf182b67fdcf013",
"assets/images/chrome.png": "88976bffd83742d95d7e9d51a8d65ac8",
"assets/images/macos.png": "803edfad2005071cc989486f79fa7b09",
"assets/images/swift.png": "d7b361f749bb06a3bf42fe49e5ba2d19",
"assets/images/youtube.png": "a9f99bb89aaf5fd21a45c4058349284d",
"assets/AssetManifest.json": "cb469b3b1c5cac5dff97ca381a3e8fad",
"assets/NOTICES": "089a2dd96a6f7be31000073880f3a61f",
"assets/FontManifest.json": "cf9253062c7dad721479205ae0bff730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_ylui/lib/assets/2.0x/x-mark.png": "ee3dde47a9fdcd1476e7c7cbdd322c2f",
"assets/packages/flutter_ylui/lib/assets/3.0x/icon_right.png": "6415fef3a9b45d26d082f9b911d1a34d",
"assets/packages/flutter_ylui/lib/assets/3.0x/cb_selected_disable.png": "52db62b9a280435e53346f00ac20af10",
"assets/packages/flutter_ylui/lib/assets/3.0x/cb_unselected.png": "65c89096a1fb303fdbefe99004791b2f",
"assets/packages/flutter_ylui/lib/assets/3.0x/back_arrow.png": "c24af8a74061b640d534266e28302c89",
"assets/packages/flutter_ylui/lib/assets/3.0x/radio_unselected.png": "77ad62cb64f297bd2ae1a52da0adacb9",
"assets/packages/flutter_ylui/lib/assets/3.0x/loading_indicator.png": "5bccec0fa90aae3b692c1b9d4e730ae7",
"assets/packages/flutter_ylui/lib/assets/3.0x/radio_selected_disable.png": "703696275947a71e27c43462df4d13c2",
"assets/packages/flutter_ylui/lib/assets/3.0x/radio_unselected_disable.png": "7382607f0350f641bae5fb175800afb0",
"assets/packages/flutter_ylui/lib/assets/3.0x/cb_selected.png": "a2bc56410ba25c8693b83b82a0e3a948",
"assets/packages/flutter_ylui/lib/assets/3.0x/cb_unselected_disable.png": "991976ea578be9ebf37bfef3390b5732",
"assets/packages/flutter_ylui/lib/assets/3.0x/radio_selected.png": "d27ff654b5fa585a94bfed4a0342bf65",
"assets/lib/views/yl_toast_demo.dart": "870dac56080f0fab4d91777f0ca5bc47",
"assets/lib/views/dialog/rich_dialog_demo.dart": "e213df4b4fa8f401b597c203b0c0eda0",
"assets/lib/views/dialog/sliding_up_panel_demo.dart": "2aec204e39d701538ce52ac96ce0142d",
"assets/lib/views/dialog/dialog_demo.dart": "2cbf97f19a7eea2ee171734c54157176",
"assets/lib/views/dialog/action_sheet_demo.dart": "a228f9fce4b883ba0418c4e5f1204fd3",
"assets/lib/views/button/button_group_demo.dart": "73db7abba66376c6856dd93e0cf25114",
"assets/lib/views/floating_bottom_view.dart": "dded4db6e9404a09b09794858dc41013",
"assets/fonts/iconfont.ttf": "16c3d124ec399622158840c6de5a77e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
