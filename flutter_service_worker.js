'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2d040522ab8ae37e25c7e64808f00254",
"index.html": "ef4c57a36ae60087c61feaf4797c1ef1",
"/": "ef4c57a36ae60087c61feaf4797c1ef1",
"main.dart.js": "54c020a9e2ddd0f1f4e1d0b8068f7fcb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0376e8a667a9c52cd6c564144cbc84cc",
".git/config": "36c3cf1f455dcd69d558625dadd6aea9",
".git/objects/3e/08e72f5cd819439a21b5380c4be4cdb6399dfc": "218e7ca331b90f661d80de0c4fd8994e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/e25809e6a1273626e6efbb3e8647857b76cb10": "3920289abbfc238e70cfa2563070be99",
".git/objects/67/b12627ad75e4214a52ac77b3dd41475ab0ccde": "3829a52b6b19f3cb2930a8280c9647df",
".git/objects/0b/1829a83264aa60f581c875bc45fe0ea6a68f4d": "33c8cd8660b6843cd4908b1b0f8eeaff",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/c61710ae9c0a7a176a7d185dd27b87111caca9": "59b676739c329f8f797aa16a1af245fa",
".git/objects/02/8501bbeffca63ed6bae4ef732af37f586a0e4e": "b8b1066711d60b0176ded128a45f912c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/681ecc0ee28e2c02f96511029ecc9f109a0f83": "c3e0299efae3f48c67ccda59e05f8510",
".git/objects/b4/2db87ebf8383a7199afd9c7afb33bd9691528d": "b1d41307d0ce985946e25ace769ce055",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/7208e132aac9c7d1977fd246ae6920fdcd3e5c": "5b6a96b101548c55ff787fceb54c5246",
".git/objects/e5/2d4918da14e0dc458efcea5ab760067a4d690e": "7cddadca1a2f33d77f6c792da738939c",
".git/objects/e2/ac8490f4de16d745af43da45946938d17b4684": "5beadbfa7c3df87598a8463ed99d1a9f",
".git/objects/f3/2731bd1f27f90458de2b5d32ad60f9acf2a04b": "544f4dd9859bda1d77e48931a8b28204",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2078602134ca1609a3a3af411bd5fe7ca53b0e": "87d412c8cbde2ccd8abb731dc4f03e01",
".git/objects/c9/3f882f566382db209884adb7ea455438e307b7": "523d5cff536458c50d2074845ed6171f",
".git/objects/f5/7b7cb63306eaed1f9f18c1fe826d7fdf73f517": "60a32d806f7303be250b9d23756c597f",
".git/objects/c8/526736027a17274a68420e44297d72a1818f3b": "c35ec181079bd85add23d35186678d22",
".git/objects/fb/f743ecfb90c86f9da5ab135ecbfc4ef9ad053f": "8cb7a044ac8709d8449473310f3670a3",
".git/objects/ed/0f5bce879796461ebb93969d28a2bbb35efd0f": "b04073753f14074306c811c28eff23e8",
".git/objects/18/98c480149f57886582e02752150513f491d626": "b8c65efda7bbb33e0d5113fb4b89d6a9",
".git/objects/11/a8f012863de5214624fcb817206e3afcf78871": "6646c11dd63570adb1a3d1cc6fe0a0d1",
".git/objects/16/3318c40596f2217cdf606b1815772a2655b850": "cd08dd0d5897c79913587286d5ced9d4",
".git/objects/89/b2ba2e51a47b4e178a293b96d302e3d42cc53e": "186c24765fb74c0e117ff0ab7a5f1eb9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/21/1e263a5f5b6140124a81e7cdd9c1dcdb175e59": "f11c9fcac6180c4c20a3597d6b02cee4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/34e45cbc7689f9a07ee8db26a9da1f82e929bc": "71366a9c9638f40121e0f06cabd3a054",
".git/objects/00/6dffcb9f53d1231aca2d75bfdc8c76604698bc": "c83d6fe199c3ff4314a4bdcede45be0d",
".git/objects/6e/a79cedd3b0ad62b32a7832e8089291f11f919b": "0a27e7626561147816cb4bbdd495ea58",
".git/objects/6e/7fca3c92b3e25ce4ed006c046463a655e65bc3": "dc53f9965a6bbc2c7a44da7a0c9ec120",
".git/objects/36/d6a15e7df87c61bf7f9dcc2b25303490d96a4e": "d64b851fda1fac89817c201c670f2037",
".git/objects/5c/9073b412cd32cfaa3765613d250d07babb2d48": "25e7d9d4b670da36491bb51c51539fd4",
".git/objects/65/1b7a0b5570661f068e8abec4154e9e34f65d6b": "12ad7471a4eaaebfe83a8425e0400288",
".git/objects/62/b7a400c1327f8b7960f665e5c86f90c2306580": "558cf86589740cd0f8af5a4954e37add",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/6a723283d5573b80d8f0bd55b31eff88d6b019": "bf818bb89787eb33f2a8738cce24c330",
".git/objects/62/186667c904bfb88d51735de7e9c7891e653cbe": "16b939640b372b05bd0c4763d449d7a4",
".git/objects/53/833ab6e394336cfcc8890632e04e1de0777437": "49099c217416a2c4b34ae94204ca8e71",
".git/objects/30/8c5136cbbeba64f8342d6ddaa9eaf36a053f88": "93feb21cf04e871f6066874f803ee2e7",
".git/objects/5b/fc165da331c75d6aa782c26c6a2bf50605f674": "13fd6a1981e7446b6a28ede6bf641d5a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/578f024328d49895976b76659311b39ea25f5c": "c768e91a1f0154218fe220449ba9eedb",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/0a/f9578a9a9afc4dcaedbb4e3afe968074f7442c": "ba074ef968e0853caabd8e13a378a157",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/ff598f147c6444d897834d00c9f3f0c6de6745": "38da42cf0d8c75518cdae5b903a96c72",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c157f656b8c7acabc050ae14cc71c9b95fcf81": "5434a48389fb7341a21e40e6c3fd429a",
".git/objects/ea/c8fe3c727269b419b579dc0b895b9ffaf1c7bb": "b27fb69350eda59da0465a704f95f4e1",
".git/objects/cc/d4c216d63099856ea5cc773557eb7d039389e3": "a1cb4a08b48ff0d5a6faa11280ec04ec",
".git/objects/e6/7a39736813b4327931c15fb6da6fe2f0fff9e7": "a94b470c0f408116dad2fc8d1ed7393b",
".git/objects/f9/ae6766974c7f9888085882ba04b23f1cbfa1e1": "5eff8ea872a8b97ac7b8b3953f360778",
".git/objects/f0/db95d33129751bc1ca076cbf883ec38e039814": "a048a47a40819c9cf33a839a2ad62d3a",
".git/objects/f0/4e6d7d3733b8b30ef1ce0d76c5917d34d90d42": "d304543b99168bb547b705ec808ee6b1",
".git/objects/f6/52b8f44c84c4fde9da59aa49ddcd59b0542530": "e4173ab1c4d1da5ff6dc1904380b45eb",
".git/objects/e9/807f715368372d91791496d07422537c904de0": "a4c59731e5d705a747b7fcee1547627c",
".git/objects/e9/7c21d61e382a2c1a0690ffc4e3ab417d541c87": "797a4f84c5d1d77192c81a7b73b7a2d4",
".git/objects/f1/b1f9242bf8f9bee9e771164304bce24f056dfa": "af39a6593202a9fb21d9d60ce4d8c100",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/0f284ede2d40e12556de0323fbd5792e2467d7": "035e050dbb45123605364f4b3e6297fd",
".git/objects/ce/ed840cc1b4e8d8e9220d4061b7e34228a3a322": "8d192e852b4b23c966466a53f9a4f77f",
".git/objects/e0/f32d96b7f1b89f1519bffc6d7f95f083769fb2": "8c5a28e71f0cceaf63ab67319c30e44b",
".git/objects/46/5bbeb0455c5876a636cb6b05a34e4e631dd2db": "ea644fcec518d07441f9c9f252176f12",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/8e172dee9c7ce50bbae39cd879f0c231527d20": "92ca01095a9fc914ca1658e36687dcfc",
".git/objects/4a/072e8ba1ed932e61f208e935bb6b2cf1308bc8": "977880ae2adbb34071ef59d4d1c0fbcb",
".git/objects/12/4b53a19428b8107d23ab75bfb8dcd4e8a8699d": "5d3d28e45c7e04d89cf434d3cbe5f237",
".git/objects/85/c2fd4e5adf6dadd5f39a3e1df1bc89d6679f5a": "eb8757cbd52fa4e6e63d140208c7c7f9",
".git/objects/1d/54f13630b90a9cbcb65b2f96bdb04a5318c8b0": "e2dcb5510eb55ec085a33eb78a9c530a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/2b/26b1c379e30a7214a3fea91b0c6226646c3377": "4b099b8a73b6ff53ec568c2365f66aaf",
".git/objects/2b/3728437edfc2a243165e7060b95d1793486b3d": "0e05989900cdfb9d0788515c282d94a0",
".git/objects/14/cea41f99e2df229303df6938bbc080179311e5": "db29bbc2222b3f08071f0bf5abedfa78",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6bcfbec89956a3452cb3729b18098ff",
".git/logs/refs/heads/main": "a6bcfbec89956a3452cb3729b18098ff",
".git/logs/refs/remotes/origin/main": "db75b67be0f1c1afad0fbe301f33cb64",
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
".git/refs/heads/main": "55e506fe1bf80cdcd3d78067e4a1c569",
".git/refs/remotes/origin/main": "55e506fe1bf80cdcd3d78067e4a1c569",
".git/index": "3933611ced2a20bd559ca54e51422e6c",
".git/COMMIT_EDITMSG": "3abdfafaa6ab79b869e01a936e4c870c",
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
