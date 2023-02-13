'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b3c25d78bb96f4352f7edc20a377d58b",
"index.html": "765f5f524ac9da95d93f1eec108ad4ec",
"/": "765f5f524ac9da95d93f1eec108ad4ec",
"main.dart.js": "98b8361b90a6032b1c8f7b150ab6f1af",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dead7662713742e940e88b8e7acf139e",
".git/config": "c2e5140669d21d8074c289a1dd0c75f8",
".git/objects/61/f86ad5f687f1268db405c1e758025df97cf1f1": "011c20219097d7a01262c45459a824ff",
".git/objects/95/c66ea35ea0b98baf0e0e034d3bdce00b965ce4": "ffde9bc0bd228c539d94a3d7aa844712",
".git/objects/3b/73b92f937cd5a5e5e4a7414b4ab80038231bc2": "e72cb85b2dfbef43a631ed1ca8186cc3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/94/bdb2c867ef0a5629fa2e8ec6e69136768c85fc": "5bb86cbb65d83fd4cba272d56848fc66",
".git/objects/df/67fdd249f9d1d576edda11abad0fdfd73b69b2": "5ca0f8fb66ce12d8c8d3b5f778a71431",
".git/objects/da/a82e54995421b583fb7ca67749573cb8326469": "3eff0bbb7060ad09cc361a3da221da13",
".git/objects/da/2e37f657d815c024595ad4d5dd70a5563b253c": "2f9f11e021f8abe77174c001dde8336c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/85736bb0c11cf3862025c94e2e36c97ff88e1b": "2ac5351404984f2e8b476936b64a7bd3",
".git/objects/f2/7009913f23fce7fb6323c5c9b882bcaf8c7c5c": "403cf9801e10684b0d09f8e010b2c78f",
".git/objects/f5/3d38e730aa9b0b06f96131df058b512b3ed2d6": "913d14cb937a3889b248d1cdfb4acd7b",
".git/objects/c6/ce1466d628cdad5e8b7acdc92bfd03e1eed8b1": "efc9b89e4dbd51132896dc04d6bd5b03",
".git/objects/80/80fa706ad64a827a41952ea007cfccc9cbfe6b": "1c8df31923f4fd0311a074125664784f",
".git/objects/80/86c3c1ff936799f257fea2f51949edcd9a858e": "2284bbcf2a70b942bc0e6af5b750d071",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/ae33418b00cb58a7391c42527d13ba0396de68": "7657e88a63974ea75366a49cd3cfbcf9",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/b95f7c4c984cbec4a173f334321079c50bbf64": "45e04ec3fd7a54c5189afbb2b0a70d3c",
".git/objects/31/6e0e11aebdb57cfe8557d13a90b59612d7d803": "a52274d272b766e8e956d61fe6ae2d81",
".git/objects/96/26c530114ea5643739c3bea3f3f487de2e2f13": "aecfb8b5c2a176089e791da7cfb8080a",
".git/objects/54/70df2a9b9a6e244f456689ee809b082511e8ad": "4bcddcad478934046350ea736fb474bd",
".git/objects/30/7a4538c10df42e9e58e149311240d48c665dcf": "e8445d0ceb2432309658ad8c1adf9c3d",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/0f/d1a381266583aca39e0940d061c90793cad278": "0836ee4a7079e8a733346ca0c4092ff5",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/d5/a450c96a8fc3c50c86062a429ccd436b894599": "90a9c0605edad4e02aa3cc020336bc7b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/2ae12111bd9fb3b2e01c2c131c86ea2eecb8af": "77c8e18c3370dd6356f9024b3e7255ec",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/f1/3b51947e92ebf9aa5c22483decea6d14d3b5c0": "42fd1c9e5cb7e1292de54146f3cfde04",
".git/objects/e7/a3104b6bc81ab4e71f952c74a73f64f846f108": "27b4e242f1f130c022da8e0cdbb7213b",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/5e0ec02423672d1851bc488b4971e4ccb4f393": "01421f84243deba66017c6622e1fb3f7",
".git/objects/1e/b881723145ddc32f1fb52ccc0c0e0f7fa378b6": "a45d83f4567101160b2ac1f808592a2f",
".git/objects/23/a17b1d21c24a95e977c1f927feb7f1758bf7c4": "62ede2f70a52b6f545419963baf69dc7",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/94631ba95ddcc13b25d80fbfc0869de4d08f9c": "c3e3745c0414131c0774701745398203",
".git/objects/2e/d9c5ae254efff59f50786ad98c6d11013e284d": "1c23fa573db187384270006833d66adc",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f44bc038418f2f4312ad99233dda971",
".git/logs/refs/heads/main": "5f44bc038418f2f4312ad99233dda971",
".git/logs/refs/remotes/origin/main": "829bf42e06cf6d1e1d3e54d723ba298d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8534651427170f085c0b621010ef7277",
".git/refs/remotes/origin/main": "8534651427170f085c0b621010ef7277",
".git/index": "cf24a09dd7afbd2c0bca13d12a3c4197",
".git/COMMIT_EDITMSG": "943336c31dc047ec12555a0dee976882",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "8e7917091955df35c62375109958cf95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "72cf12407bfd7598f0bbb44c38855f9d",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "74601b2ba7dae595fa19f461ffb658c8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
