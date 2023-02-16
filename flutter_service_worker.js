'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a8a3600f618d8c26c3fc645bd6f49081",
"index.html": "02c86550cdc01ed7b7663ec5bc8f6be7",
"/": "02c86550cdc01ed7b7663ec5bc8f6be7",
"main.dart.js": "6a6bdf009921742cd65db61e3b33967f",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "487430d67017ad36d0357e89370a7592",
".git/config": "c2e5140669d21d8074c289a1dd0c75f8",
".git/objects/61/f86ad5f687f1268db405c1e758025df97cf1f1": "011c20219097d7a01262c45459a824ff",
".git/objects/61/28b6beebdc1399c8d12f96a159e23aaae2acd2": "2757301414c9b8d64dadce96c543075c",
".git/objects/95/c66ea35ea0b98baf0e0e034d3bdce00b965ce4": "ffde9bc0bd228c539d94a3d7aa844712",
".git/objects/3b/73b92f937cd5a5e5e4a7414b4ab80038231bc2": "e72cb85b2dfbef43a631ed1ca8186cc3",
".git/objects/03/e7fefabeb275c22cf061f38b1b50f3b3785197": "c0ce8f46afafe69c4242c30c9aefd7c7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3c/973953aeccc5d5c4717faf742890f2adffa645": "e3d39605bf8dd714b8721f8c257df129",
".git/objects/56/c0237686c812aef9c82f57f07962800ef38ae9": "eeccb7001f3449943594b5d20037db02",
".git/objects/3d/53620e605b8f444f758b734d8ad5bd9310d701": "28cea8b1c1f8c4965cace3211bd68937",
".git/objects/94/bdb2c867ef0a5629fa2e8ec6e69136768c85fc": "5bb86cbb65d83fd4cba272d56848fc66",
".git/objects/d9/ecf638a04db262518fc6196b09998c18da8cf8": "4f68439996fbc1324beb0e441e6669a5",
".git/objects/df/67fdd249f9d1d576edda11abad0fdfd73b69b2": "5ca0f8fb66ce12d8c8d3b5f778a71431",
".git/objects/da/a82e54995421b583fb7ca67749573cb8326469": "3eff0bbb7060ad09cc361a3da221da13",
".git/objects/da/2e37f657d815c024595ad4d5dd70a5563b253c": "2f9f11e021f8abe77174c001dde8336c",
".git/objects/a2/3f4ab10d9fdb5075d3fc55d12d8d033eb8c49c": "d66d215996441c46c3ad3e7d2831d9a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d1d62e4d6d12aed75677c175fc525ba362d340": "76ce36f39ec973a3da3d06ea81cc4b0d",
".git/objects/bc/3eb95cac7abf85bfbce60e8a4e891976e9b148": "35c33e8c3d4954f6322dd784c8bdb157",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f08b339239b0244a57beeadd9d91b23a2a2d63": "240c2871d0857ba1e7bcf01287640e52",
".git/objects/fc/85736bb0c11cf3862025c94e2e36c97ff88e1b": "2ac5351404984f2e8b476936b64a7bd3",
".git/objects/f2/7009913f23fce7fb6323c5c9b882bcaf8c7c5c": "403cf9801e10684b0d09f8e010b2c78f",
".git/objects/f5/3d38e730aa9b0b06f96131df058b512b3ed2d6": "913d14cb937a3889b248d1cdfb4acd7b",
".git/objects/ca/39336a1672b5f64ad01c6448e61eb2c3b2a015": "a5f874831e3ae1438868697be97a909e",
".git/objects/c6/ce1466d628cdad5e8b7acdc92bfd03e1eed8b1": "efc9b89e4dbd51132896dc04d6bd5b03",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/1f/5b74db69870343b6a42863217e399bafc3100c": "b894a6a1aa48ec5cf55d8a232dfa2e63",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/0bcc2d61333c61e0584c16c9af3b96fdd5508e": "c15dd50cbed040d0a2bb4fc29cb70405",
".git/objects/80/80fa706ad64a827a41952ea007cfccc9cbfe6b": "1c8df31923f4fd0311a074125664784f",
".git/objects/80/86c3c1ff936799f257fea2f51949edcd9a858e": "2284bbcf2a70b942bc0e6af5b750d071",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/c2be198b73b80a68426bcc316f49d1d7478ea5": "f62bbfcd7780c69e941866f7704da1f3",
".git/objects/21/ae33418b00cb58a7391c42527d13ba0396de68": "7657e88a63974ea75366a49cd3cfbcf9",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/2f/4be8e3297162bdddd6397fd4e85bb42004f201": "1499cf47236d84d225d285fba2a01e59",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/97a53a3e1f232a877d9bdc1c7825b8c00bd1ff": "92fc0c0145f22166860846c3bf8de7b2",
".git/objects/36/6c5b82e9cf73559175e5ec55350c6dba3ddc51": "2ef89f1067b820aa154002d1f1c8f0fb",
".git/objects/5d/b95f7c4c984cbec4a173f334321079c50bbf64": "45e04ec3fd7a54c5189afbb2b0a70d3c",
".git/objects/31/6e0e11aebdb57cfe8557d13a90b59612d7d803": "a52274d272b766e8e956d61fe6ae2d81",
".git/objects/31/b2b3189591ca456b6c4286f741e29aac95bcf4": "08198f7fcf01bee00f39794382f101a4",
".git/objects/96/26c530114ea5643739c3bea3f3f487de2e2f13": "aecfb8b5c2a176089e791da7cfb8080a",
".git/objects/54/70df2a9b9a6e244f456689ee809b082511e8ad": "4bcddcad478934046350ea736fb474bd",
".git/objects/30/7a4538c10df42e9e58e149311240d48c665dcf": "e8445d0ceb2432309658ad8c1adf9c3d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/ba351b8be7bddb44735e3f1e6008456ee16f8d": "c8dd3b1f00a920ffdb0f2c6860707971",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/d1a381266583aca39e0940d061c90793cad278": "0836ee4a7079e8a733346ca0c4092ff5",
".git/objects/0a/1220c96ae7a838b358e1aae9119a4c4b55c977": "77a4d47f9167750ad8b04ce57a805ea1",
".git/objects/ba/1d39fbd88ad9bd309a427aa685f075aa739ab0": "7816a6e7d922fbc449b35ea1ea700f25",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/d5/a450c96a8fc3c50c86062a429ccd436b894599": "90a9c0605edad4e02aa3cc020336bc7b",
".git/objects/aa/a406e0fb7e7d839fc8f4dc78a5e2e1fe99cc57": "c612a97a439cd353f753ef4e79ad2bd6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d322867e7cd76dfa77ed409c1e0e70310f3db4": "12c7042ed624a56d6a0ab3b6dcfddb51",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/2ae12111bd9fb3b2e01c2c131c86ea2eecb8af": "77c8e18c3370dd6356f9024b3e7255ec",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/cd/1f261ee6ab8ed1a8f0dd4c65b50b8a14068935": "d6d8a79bedfa658e7ab558f3a5e983f3",
".git/objects/e9/5d979a20be53d8c7859ff7292d377f971f51db": "f70a349616241641a99079234f8df5ee",
".git/objects/f1/3b51947e92ebf9aa5c22483decea6d14d3b5c0": "42fd1c9e5cb7e1292de54146f3cfde04",
".git/objects/e7/a3104b6bc81ab4e71f952c74a73f64f846f108": "27b4e242f1f130c022da8e0cdbb7213b",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/5e0ec02423672d1851bc488b4971e4ccb4f393": "01421f84243deba66017c6622e1fb3f7",
".git/objects/1e/5485d5f8dd7dbc442a517a5e46ac8dd433667b": "45e375c7ba44eb5d64f94fa14effc323",
".git/objects/1e/b881723145ddc32f1fb52ccc0c0e0f7fa378b6": "a45d83f4567101160b2ac1f808592a2f",
".git/objects/24/db5edb6fe1d69630c8bde393c3983320b1a064": "3b489b6ce357f25158b64f4276c61e56",
".git/objects/23/a17b1d21c24a95e977c1f927feb7f1758bf7c4": "62ede2f70a52b6f545419963baf69dc7",
".git/objects/4f/0df8bb9bfcfc1c3ff8fc73e3d2fc75b20d9f3f": "10ac62f7dc9299bf702455d00e67b17a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/84228710e7cee06078d3375f542c01fceda645": "ffbf37337739980aca516753f5369480",
".git/objects/71/3da6c640283130ef7a92b6befa81e2e300f959": "ef12b0a9e5aa86a14456c4bf6d3e44c7",
".git/objects/71/94631ba95ddcc13b25d80fbfc0869de4d08f9c": "c3e3745c0414131c0774701745398203",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2e/d9c5ae254efff59f50786ad98c6d11013e284d": "1c23fa573db187384270006833d66adc",
".git/objects/7f/77511542306ada0833493d2c03e09f9e52f5f7": "474c6c7d176af7c2a32cf2ec06bab949",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ad8e03a216bde5afcb42a0fa194a16c",
".git/logs/refs/heads/main": "5ad8e03a216bde5afcb42a0fa194a16c",
".git/logs/refs/remotes/origin/main": "99a3066caafe5009bd9fe1b2c2766359",
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
".git/refs/heads/main": "21250fa72a57ecd07078f6a879cee599",
".git/refs/remotes/origin/main": "21250fa72a57ecd07078f6a879cee599",
".git/index": "92416cd562275bd4e1877c4febfb9254",
".git/COMMIT_EDITMSG": "29e74cb551ad578a9b7d9c071753fed7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "936f3829f4fe0d41240aa578fb8972aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
