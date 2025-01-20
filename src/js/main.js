import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

const key = '48329924-6906af0078b1de986ec16b549';
// q - не може перевищуват 100 символів
const example = {
  total: 289348,
  totalHits: 500,
  hits: [
    {
      id: 7679117,
      pageURL:
        'https://pixabay.com/photos/flower-stamens-hypericum-macro-7679117/',
      type: 'photo',
      tags: 'flower, stamens, hypericum, beautiful flowers, flower wallpaper, macro, yellow, flower background, flower, yellow, yellow, yellow, yellow, nature, yellow',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/12/26/13/50/flower-7679117_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gc003e3eb8efb2533836339b0d242a814f4217597c711b5f9bdb55543ff3f1142b2be4aa6ffc45046a5bb020e4e229e68afcb8226dd3d3a9d60f8b831068a8091_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g4d3ca6f4d183a23e4618d7dd491c30966e5544bab763695d0ed4505e9e2d2e162733a5b07815d9f994af55aab016b61bf50934431e095aa4d59c42a07168115d_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 8137356,
      views: 26669,
      downloads: 20462,
      collections: 850,
      likes: 122,
      comments: 20,
      user_id: 4379051,
      user: '4379051',
      userImageURL: '',
    },
    {
      id: 6316445,
      pageURL: 'https://pixabay.com/photos/rapeseeds-yellow-flowers-6316445/',
      type: 'photo',
      tags: 'rapeseeds, yellow, flowers, yellow flowers, rapeseed field, flower wallpaper, bloom, beautiful flowers, blossom, flora, flower background, nature, yellow, yellow, yellow, yellow, yellow, yellow flowers, yellow flowers, yellow flowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2021/06/06/21/55/rapeseeds-6316445_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/ge20e7cfa0aa3203a7564919d323c0ec98a93ca4f9d677d4c46d7876dfe20fe6bd6c35419c20b736a49c40b79fa46672777318a824c87364bff3389f04c2b953b_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gd81988c53a9d712f3f1138af0caa685d861c8548f2f1a2bf6420cfd7ddb911aa11f63a698442d60214e85c2f2f1fc2cbb922e13e7db6f434926aa324b06459d0_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 7735260,
      views: 37706,
      downloads: 30171,
      collections: 949,
      likes: 88,
      comments: 21,
      user_id: 11378535,
      user: '__Tatius__',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/10/16/11-47-36-873_250x250.jpeg',
    },
    {
      id: 4295713,
      pageURL:
        'https://pixabay.com/photos/yellow-poppy-flower-yellow-flower-4295713/',
      type: 'photo',
      tags: 'yellow poppy, flower, yellow flower, petals, flower wallpaper, yellow petals, blossom, bloom, ornamental plant, plant, flowering plant, nature, close up, beautiful flowers, yellow poppy, yellow poppy, yellow poppy, yellow poppy, flower, flower, flower, yellow flower, yellow flower, yellow flower, flower background, yellow flower, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2019/06/24/10/49/yellow-poppy-4295713_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g8ac2827d7f3829d11aadab5b050dc4307a8d0eaad9a586ae898321d1884dadd30950765a1bf6e49faed05bea97a59d58fe20530c865f309e03f86b18c38c363a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/ga125b5729d0504794717b55fa5cd68250b28691b9da2cc0709c211715c3f7ce98695a521ce366f9429d458afe629879d7becd5e635921f9b340c1c364b2b30a1_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 4738491,
      views: 10018,
      downloads: 5452,
      collections: 585,
      likes: 71,
      comments: 9,
      user_id: 7001566,
      user: 'IngeGG',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/06/19/10-30-15-601_250x250.jpg',
    },
    {
      id: 6520851,
      pageURL:
        'https://pixabay.com/photos/flower-yellow-flower-bloom-blossom-6520851/',
      type: 'photo',
      tags: 'flower, yellow flower, bloom, blossom, petals, beautiful flowers, yellow petals, flora, plant, flower background, nature, flower wallpaper, close up, macro, macroperspective, flower, flower, flower, flower, flower, yellow flower, yellow flower, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2021/08/04/02/02/flower-6520851_150.jpg',
      previewWidth: 150,
      previewHeight: 103,
      webformatURL:
        'https://pixabay.com/get/g1697aeb310652620e60a07559924c4be0ca42be2abf0d3f493df8b9a4d24a272ed0af13faad1df298e4871cccf06875d4f99717fce933c4e38c4a66f97384d65_640.jpg',
      webformatWidth: 640,
      webformatHeight: 439,
      largeImageURL:
        'https://pixabay.com/get/gb61148d30eaf7ffd5ed6fe007fd2f5d6e40b55df54e1449c073e971143dffd67c3ec01dd5769c956a005ad20501986a8032b1686971047c8a2703ab3d35e9f7a_1280.jpg',
      imageWidth: 3910,
      imageHeight: 2680,
      imageSize: 3171422,
      views: 17580,
      downloads: 9732,
      collections: 1450,
      likes: 112,
      comments: 21,
      user_id: 6246704,
      user: 'fernandozhiminaicela',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/02/27/14-16-13-192_250x250.jpg',
    },
    {
      id: 6162613,
      pageURL:
        'https://pixabay.com/photos/yellow-rose-rose-flower-cereal-6162613/',
      type: 'photo',
      tags: 'yellow rose, rose, flower, cereal, yellow flower, garden, nature, rose flower, closeup, plants, flora, fragrant, flower background, plant, floral, beautiful flowers, blossomed, light yellow, beautiful, flowers, roses, soft, yellow rose, yellow rose, yellow rose, yellow rose, yellow rose, rose, flower wallpaper, yellow flower, flowers, roses',
      previewURL:
        'https://cdn.pixabay.com/photo/2021/04/08/18/59/yellow-rose-6162613_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gc24952eb2e5a29c12fa8e42151de7dcf31a3a59038faf16152bb638b437e1092d2d3027c1b82c90b1ae0f964298c45d49cbc69b5d4aa18cde22bee449095df8d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gf2b62c030c331fc2db363b9f64856d0f63f34994377efc144c41c56ed6ffaa3769c8a6686bc0f68f3e178a6b162b877a6717a84214ab93e0a275527184c3756b_1280.jpg',
      imageWidth: 4240,
      imageHeight: 2832,
      imageSize: 2389361,
      views: 57218,
      downloads: 42676,
      collections: 1852,
      likes: 288,
      comments: 199,
      user_id: 9363663,
      user: 'Nowaja',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/09/15/15-16-12-52_250x250.jpg',
    },
    {
      id: 7019264,
      pageURL:
        'https://pixabay.com/photos/flower-petal-wet-macro-tulip-7019264/',
      type: 'photo',
      tags: 'flower, petal, wet, macro, tulip, yellow, flower wallpaper, splash, bloom, botanical, flower background, spring, nature, petals, flora, plant, flower, yellow, yellow, yellow, beautiful flowers, yellow, yellow, spring, spring',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/02/17/18/22/flower-7019264_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g4f770146fe11e85ffa023c14db67849ff2ae66ebe3a45a3c7a17f569fecc64ae9ec6a85f4d3be214653cbea5817eb3ed447945f49090b0c7733c1af6eea2c6e7_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g13b20cfc5356c4dfd3f805c97d3b63b3444c33b01adbab72d15ea0fe19a35e4763eb135be94849df6e83c173ec6595d15c0e51418f287e9b7e7da684018e7e55_1280.jpg',
      imageWidth: 6001,
      imageHeight: 4000,
      imageSize: 3386198,
      views: 32181,
      downloads: 26426,
      collections: 1897,
      likes: 163,
      comments: 25,
      user_id: 19662978,
      user: 'angelicavaihel',
      userImageURL:
        'https://cdn.pixabay.com/user/2021/03/15/08-35-41-698_250x250.png',
    },
    {
      id: 4750726,
      pageURL:
        'https://pixabay.com/photos/flower-petals-bloom-yellow-yellow-4750726/',
      type: 'photo',
      tags: 'flower, flower background, petals, bloom, yellow, yellow, yellow, nature, beautiful flowers, yellow, yellow, flower wallpaper, yellow',
      previewURL:
        'https://cdn.pixabay.com/photo/2020/01/08/17/32/flower-4750726_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/ga567e443e971565ca348a0ef11d4e328d4c291145bbbe2cc75ed575d93bf992ac16796a1f78a0fcc53ed87397e59b0a51f8d13ab6cf8a3de7a62268ce8a4db2c_640.jpg',
      webformatWidth: 640,
      webformatHeight: 425,
      largeImageURL:
        'https://pixabay.com/get/g46ff6cb157a0794acf819b4bf205552e1d7d5c7a6efd8c6da57dea71fa335fbae8f641004b0d30f42d62ae11461c89cabd638a5dff59990c8417488dbdb40bd9_1280.jpg',
      imageWidth: 3008,
      imageHeight: 2000,
      imageSize: 1453867,
      views: 10809,
      downloads: 7340,
      collections: 516,
      likes: 65,
      comments: 24,
      user_id: 14174246,
      user: 'Zotx',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/11/20/20-56-12-836_250x250.jpg',
    },
    {
      id: 6558487,
      pageURL:
        'https://pixabay.com/photos/flowers-coast-sea-yellow-flowers-6558487/',
      type: 'photo',
      tags: 'flowers, coast, sea, beautiful flowers, yellow flowers, bloom, plant, flower background, tree, water, nature, flowers, sea, flower wallpaper, yellow flowers, yellow flowers, yellow flowers, yellow flowers, yellow flowers, tree, tree, tree, water, nature',
      previewURL:
        'https://cdn.pixabay.com/photo/2021/08/19/16/31/flowers-6558487_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g46b32d15743e00412aa82c95697ccbca2b2b7a524256f56fa515445eea8588621e71dca062b12b87cb17f7574ec2fbfb16e82253c090b7b15536bbd89a6f1ebd_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g1f9c13bd381370fb15a26c90f2ae2ca3d2f3ba8714f543dfc609a8eb3aaa1605b7482332284630d367178323a40b81505720b3cd0d2752219478ba6cb55a0710_1280.jpg',
      imageWidth: 4256,
      imageHeight: 2832,
      imageSize: 4587665,
      views: 179597,
      downloads: 149901,
      collections: 6077,
      likes: 335,
      comments: 40,
      user_id: 21633244,
      user: 'lillolillolillo',
      userImageURL:
        'https://cdn.pixabay.com/user/2021/06/09/06-56-51-212_250x250.jpg',
    },
    {
      id: 715540,
      pageURL:
        'https://pixabay.com/photos/yellow-flower-blossom-bloom-petals-715540/',
      type: 'photo',
      tags: 'yellow, flower, flower wallpaper, blossom, bloom, petals, flower background, yellow flower, yellow petals, flora, floriculture, horticulture, botany, nature, plant, beautiful flowers, single flower, close up, yellow, flower, flower, flower, flower, flower, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/04/10/00/41/yellow-715540_150.jpg',
      previewWidth: 150,
      previewHeight: 84,
      webformatURL:
        'https://pixabay.com/get/ge7d4d9596025656bf62a055282ca63de3dd68dde2528bf296ca9bece9bed560b70e5f2e2f737a87f96f0da4a338352ec_640.jpg',
      webformatWidth: 640,
      webformatHeight: 360,
      largeImageURL:
        'https://pixabay.com/get/g9f93a751f21773262cd4f680280475a91fe5bdded3716702c5370423b6de21fb380a501e7dabc1c2b11ab4c6cf52aacf92b9e25aa69aaed0c2b74500cff67d34_1280.jpg',
      imageWidth: 3020,
      imageHeight: 1703,
      imageSize: 974940,
      views: 179057,
      downloads: 110229,
      collections: 2173,
      likes: 411,
      comments: 54,
      user_id: 916237,
      user: 'Wow_Pho',
      userImageURL:
        'https://cdn.pixabay.com/user/2015/04/07/14-10-15-590_250x250.jpg',
    },
    {
      id: 7927829,
      pageURL:
        'https://pixabay.com/photos/bird-sunbird-olive-backed-sunbird-7927829/',
      type: 'photo',
      tags: 'bird, beautiful flowers, sunbird, olive-backed sunbird, flower, grass, garden, nature, flower background, ornithology, animal, singapore, yellow-bellied sunbird, yellow, red, sunbird, sunbird, sunbird, sunbird, sunbird, flower, yellow, flower wallpaper, yellow, yellow, yellow, yellow',
      previewURL:
        'https://cdn.pixabay.com/photo/2023/04/15/14/21/bird-7927829_150.jpg',
      previewWidth: 100,
      previewHeight: 150,
      webformatURL:
        'https://pixabay.com/get/gbc762f7b1d6b03a8f8c22e3e3725481d7bbf041b9ce57cfbcb4c4bea16dde9e880d3e282d8c2231ecb4d7c7e7d3ee4ee2cd5f541f12d791d4cacb20130463595_640.jpg',
      webformatWidth: 427,
      webformatHeight: 640,
      largeImageURL:
        'https://pixabay.com/get/g63b9a786273f14e22c75639e796680a07009a6dffeb1abcf64ab5ccaa8e58da1ed3e3164761e9ac371b126c16a228488d33d9cf7243d78d258972d045fdada76_1280.jpg',
      imageWidth: 3758,
      imageHeight: 5637,
      imageSize: 3640356,
      views: 60198,
      downloads: 52624,
      collections: 1552,
      likes: 192,
      comments: 38,
      user_id: 15871962,
      user: 'xiSerge',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/06/04/07-00-41-258_250x250.jpg',
    },
    {
      id: 7193390,
      pageURL:
        'https://pixabay.com/photos/flower-ranunculus-petals-dark-7193390/',
      type: 'photo',
      tags: 'flower, ranunculus, petals, dark, blossom, nature, flora, close up, macro, yellow, flower background, spring, flower, flower, flower, ranunculus, dark, dark, yellow, yellow, yellow, beautiful flowers, yellow, flower wallpaper, yellow, spring, spring, spring, spring, spring',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/05/13/10/35/flower-7193390_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g2bdc9e559825382097348a4e69a526d33f1a981b36d789cbb582fffdeaeb01a4c06f8ee6c0c673803e94a3de61be98b8485ad59ce09b61170a4a7c8ff14049e7_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g45556d06c57c26ad8962949990330cb63e23633334f4a03e2d9cd2fb31c6d2007af955c163c6f361d893328d9de56053b9ba38adf072745471ce2a681f86579b_1280.jpg',
      imageWidth: 5472,
      imageHeight: 3648,
      imageSize: 2311191,
      views: 13909,
      downloads: 9993,
      collections: 1273,
      likes: 104,
      comments: 11,
      user_id: 25590070,
      user: 'nohopuku_photography',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/10/17/09-33-11-665_250x250.jpg',
    },
    {
      id: 273391,
      pageURL:
        'https://pixabay.com/photos/flower-yellow-petals-yellow-flower-273391/',
      type: 'photo',
      tags: 'flower, yellow petals, yellow flower, bloom, blossom, flower wallpaper, flora, floriculture, horticulture, botany, nature, close up, flower, flower, beautiful flowers, flower background, flower, yellow flower, yellow flower, yellow flower, yellow flower, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2014/02/24/05/11/flower-273391_150.jpg',
      previewWidth: 150,
      previewHeight: 112,
      webformatURL:
        'https://pixabay.com/get/g66ddc6a255e5c477a59abfdb0a7f2ef3544c08fdbc7b5c0caff745b1612975a7133da6a9df47ae9f5adce7ad5b53db3a_640.jpg',
      webformatWidth: 640,
      webformatHeight: 480,
      largeImageURL:
        'https://pixabay.com/get/g5bc1d25434c079be865476d3238a91b75828e012955d6831161b3edd8b0597cd65c8c07cb45cc00484868a3c6aa3f5a269693f917826b02311bbf6284025d756_1280.jpg',
      imageWidth: 2607,
      imageHeight: 1956,
      imageSize: 890318,
      views: 25690,
      downloads: 9312,
      collections: 529,
      likes: 86,
      comments: 14,
      user_id: 152861,
      user: 'angelac72',
      userImageURL:
        'https://cdn.pixabay.com/user/2014/02/10/02-47-32-118_250x250.jpg',
    },
    {
      id: 4936511,
      pageURL:
        'https://pixabay.com/photos/flowers-yellow-flowers-nature-4936511/',
      type: 'photo',
      tags: 'flowers, flower wallpaper, yellow flowers, nature, spring, flora, flower background, yellow flowers, yellow flowers, yellow flowers, yellow flowers, yellow flowers, beautiful flowers, spring, spring, spring',
      previewURL:
        'https://cdn.pixabay.com/photo/2020/03/16/10/27/flowers-4936511_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g50e667cb795f8112e7d26e81e9d2dc22bc7295dd133da10152eb29a6184f5cd5d3e02aa5bdd2ccc5317311269d2f114bbd5608eb8e3a269a95e1c6c3745fc024_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gfbb9b554d7090b6fb745441a7dea95ac4c5ca76ba99205e982335d4dbd5fd542c2bf1a696b96b831c382e23798a2dffd6ff5a31e10f3ecf3561f5b5c4edcdf64_1280.jpg',
      imageWidth: 5000,
      imageHeight: 3333,
      imageSize: 2156782,
      views: 35657,
      downloads: 22823,
      collections: 1252,
      likes: 128,
      comments: 21,
      user_id: 3603324,
      user: 'phtorxp',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/11/27/11-56-03-466_250x250.jpg',
    },
    {
      id: 256776,
      pageURL:
        'https://pixabay.com/photos/flowers-yellow-flowers-plants-256776/',
      type: 'photo',
      tags: 'flowers, yellow flowers, plants, nature, bloom, petals, blossom, flowers, flowers, yellow flowers, yellow flowers, yellow flowers, flower background, yellow flowers, beautiful flowers, flower wallpaper, yellow flowers',
      previewURL:
        'https://cdn.pixabay.com/photo/2014/02/02/15/05/flowers-256776_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gfc527740157b3d6532f5458dcff2272818bdd1f15d8054b8c4d1f77cd291b3c2f1acad6752105d34e626b2c24ed78fe2_640.jpg',
      webformatWidth: 640,
      webformatHeight: 428,
      largeImageURL:
        'https://pixabay.com/get/ge5dc43e2a8020c57c158d5e45acaa7d43c5f4af5c7e4623f7b7012c4b65627377cdd18fde5d99cb4c6f52d3e45876d2fea5c29c828aad3664d66a6ac8e9a5c73_1280.jpg',
      imageWidth: 3872,
      imageHeight: 2592,
      imageSize: 2371385,
      views: 15056,
      downloads: 7610,
      collections: 933,
      likes: 107,
      comments: 22,
      user_id: 768,
      user: 'GLady',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/02/23/18-02-16-112_250x250.jpg',
    },
    {
      id: 6553135,
      pageURL: 'https://pixabay.com/photos/jerusalem-artichoke-flower-6553135/',
      type: 'photo',
      tags: 'jerusalem artichoke, flower, yellow flower, tobinambur, petals, yellow petals, blossom, bloom, plant, nature, close up, flower background, jerusalem artichoke, jerusalem artichoke, beautiful flowers, flower wallpaper, jerusalem artichoke, jerusalem artichoke, jerusalem artichoke, flower, flower, flower, yellow flower, yellow flower, yellow flower, yellow flower, yellow flower, nature',
      previewURL:
        'https://cdn.pixabay.com/photo/2021/08/17/13/56/jerusalem-artichoke-6553135_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/ge58d435bfe4632324110fed0e80a92e53afd262dcefe42caef0eff7a36a5af8d93cc236d0c724f1956c09151617a0b7723680847bc9686d9cb16055a5a990a19_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g1930116ed95f18d9402a33e08e50181db8459b7617440a581f57199f52760215a62cec4614dc0700a997a79c6092b75f61fa29f4d63a924ebf3bd748cb9c4b39_1280.jpg',
      imageWidth: 6240,
      imageHeight: 4160,
      imageSize: 2866091,
      views: 8462,
      downloads: 6172,
      collections: 531,
      likes: 112,
      comments: 59,
      user_id: 1195798,
      user: 'Couleur',
      userImageURL:
        'https://cdn.pixabay.com/user/2024/11/29/15-20-47-533_250x250.jpg',
    },
    {
      id: 2107024,
      pageURL:
        'https://pixabay.com/photos/crocus-flowers-yellow-bloom-2107024/',
      type: 'photo',
      tags: 'crocus, flowers, yellow, bloom, blossom, yellow flowers, petals, yellow petals, flower wallpaper, flower background, spring flowers, flowering plants, plants, spring, nature, meadow, early bloomer, springtime, harbinger of spring, crocus, flowers, yellow, yellow, yellow, yellow, yellow, yellow flowers, yellow flowers, beautiful flowers, yellow flowers, yellow flowers, spring, springtime',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/02/28/22/37/crocus-2107024_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g7a5be13d1771aa8d93319ca6ffa45e9e78e46929fb38e39fe34ba7a28b2b7150e3e34f7a50cf85cce7a9f19a1f4bcc50f7b1448b6737f34359b8abd7d7e37170_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gb9497b6cf1a93b0c7066682fa42f2d943120f85911a110dd544e231149c8ea1b8e521eeab1bd7437770906f68a4bb063b3627836932b7ac6d6a14ef33465516d_1280.jpg',
      imageWidth: 4896,
      imageHeight: 3264,
      imageSize: 2596169,
      views: 111783,
      downloads: 71851,
      collections: 1429,
      likes: 314,
      comments: 51,
      user_id: 1195798,
      user: 'Couleur',
      userImageURL:
        'https://cdn.pixabay.com/user/2024/11/29/15-20-47-533_250x250.jpg',
    },
    {
      id: 7341288,
      pageURL:
        'https://pixabay.com/photos/flower-yellow-flower-petals-7341288/',
      type: 'photo',
      tags: 'flower, yellow flower, petals, yellow petals, flora, flower background, nature, blossom, bloom, close up, flower, flower, beautiful flowers, flower, flower, flower wallpaper, flower, yellow flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2022/07/24/09/32/flower-7341288_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g95264c1792d16220eed763df5a82c280e058e00566112a87cc8127301872e691977b38cecb956cc691c30a188a64604d0b474403482abdf6ee6eb8097af115db_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gc6793e26b7206dbb91ba0af32a341ab3a65dbfa44872636a35a191ae8383d44410dca727da72c0367e6f1889b0d9fb1a11826b515b63b9b709eab9ae66059398_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 4490213,
      views: 26741,
      downloads: 21550,
      collections: 998,
      likes: 100,
      comments: 19,
      user_id: 37761,
      user: 'Lolame',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/05/19/22-51-58-56_250x250.jpg',
    },
    {
      id: 1512813,
      pageURL:
        'https://pixabay.com/photos/lilies-yellow-flowers-petals-1512813/',
      type: 'photo',
      tags: 'lilies, yellow, flowers, petals, yellow lilies, yellow flowers, yellow petals, pistils, blossom, flower background, beautiful flowers, bloom, flora, floriculture, horticulture, botany, flower wallpaper, nature, plants, close up, spring, lilies, yellow, yellow, flowers, flowers, flowers, flowers, flowers, yellow flowers, yellow flowers, spring',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/07/12/18/54/lilies-1512813_150.jpg',
      previewWidth: 150,
      previewHeight: 75,
      webformatURL:
        'https://pixabay.com/get/gdf904d2770305bd929a61958a3505ddb4cc584a1924a449140d629ce66c009bfc04a4d2ca686dd1cc105c7a9edc2dbcf2e33c66928a877352cf21c1dc9cc1fff_640.jpg',
      webformatWidth: 640,
      webformatHeight: 323,
      largeImageURL:
        'https://pixabay.com/get/gb6826346129152b411472644a2b04ee1c733f01f97835f5abbaa73c00db37c05c40be0572d22d406e5b6f6cce37b1e902d81ba51b22da91ae48cb8e5fb3838ab_1280.jpg',
      imageWidth: 3861,
      imageHeight: 1952,
      imageSize: 1037708,
      views: 224482,
      downloads: 140575,
      collections: 3970,
      likes: 654,
      comments: 66,
      user_id: 2364555,
      user: 'NoName_13',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/12/12/07-40-59-226_250x250.jpg',
    },
    {
      id: 4384750,
      pageURL:
        'https://pixabay.com/photos/flower-yellow-flower-plant-macro-4384750/',
      type: 'photo',
      tags: 'flower, yellow flower, plant, macro, flower wallpaper, blossom, bloom, close up, flower, yellow flower, flower background, yellow flower, yellow flower, nature, yellow flower, yellow flower, beautiful flowers, macro',
      previewURL:
        'https://cdn.pixabay.com/photo/2019/08/04/20/48/flower-4384750_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/g829bce5214d9d135fff15ed99c0b9cd5d71645eeecc299e1e2ba8ae0a182ce4cb0b8a52c734b315b72da5fbc088ad51f6708f7c46156c7e8c4ea17f36e8bc8f8_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g8e38b90bd61e8568dd1bea7517b9a5683351d9415ac8043b358023e32df0f091850f60aef1f5687b0d35db30d5b1a21569c16840b542de7a4846070067738691_1280.jpg',
      imageWidth: 5286,
      imageHeight: 3532,
      imageSize: 1161871,
      views: 5218,
      downloads: 3649,
      collections: 192,
      likes: 48,
      comments: 26,
      user_id: 7520060,
      user: 'DerWeg',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/07/09/08-27-31-784_250x250.jpg',
    },
    {
      id: 4297647,
      pageURL:
        'https://pixabay.com/photos/tulip-flower-yellow-flower-petals-4297647/',
      type: 'photo',
      tags: 'tulip, flower, yellow flower, petals, beautiful flowers, yellow petals, bloom, blossom, flora, plant, nature, tulip, tulip, tulip, flower, yellow flower, yellow flower, yellow flower, yellow flower, yellow flower, flower wallpaper, nature, flower background, nature',
      previewURL:
        'https://cdn.pixabay.com/photo/2019/06/25/07/21/tulip-4297647_150.jpg',
      previewWidth: 120,
      previewHeight: 150,
      webformatURL:
        'https://pixabay.com/get/g89b6862918d83deaff6e87f20a96c7fac2e4e783191b456d7253ab4479f8112663fe5e2432dabd6da7b0c78397f76cc92d38e1a9509719675fea771bd2515eab_640.jpg',
      webformatWidth: 512,
      webformatHeight: 640,
      largeImageURL:
        'https://pixabay.com/get/g633093447eb0aefdb51f4059b3538e5b3d0dc86554ab63454df5a07afb7581025b5d596924db4fa4e2159aad1767a0458b34b14f46cecaab1ae7e81cae476fc8_1280.jpg',
      imageWidth: 3576,
      imageHeight: 4472,
      imageSize: 721590,
      views: 18763,
      downloads: 15268,
      collections: 274,
      likes: 40,
      comments: 6,
      user_id: 12868935,
      user: 'macroviewpoint',
      userImageURL:
        'https://cdn.pixabay.com/user/2024/10/23/17-23-17-155_250x250.jpg',
    },
  ],
};

// const API_KEY = '48329924-6906af0078b1de986ec16b549';
// const URL =
//   'https://pixabay.com/api/?key=' +
//   API_KEY +
//   '&q=' +
//   encodeURIComponent('red roses');
// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) {
//       console.log(hit.pageURL);
//     });
//   else console.log('No hits');
// });

const galleryList = document.querySelector('.gallery');

// Тут нижче не розберешся :)))))) Дестркуктуризація? Не чув...
const elementsArray = example.hits.map(element => {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = element;
  const addListItem = document.createElement('li');
  addListItem.classList.add('gallery-item');
  const imgLink = document.createElement('a');
  imgLink.classList.add('gallery-link');
  imgLink.href = largeImageURL;
  const addImage = document.createElement('img');
  addImage.alt = tags;
  addImage.src = webformatURL;
  addImage.classList.add('gallery-image');
  imgLink.appendChild(addImage);
  addListItem.appendChild(imgLink);
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');
  descriptionContainer.innerHTML = `<div class="item-desc-container"><span class="description-name">Likes</span><span class="description-counts">${likes}</span></div>
    <div class="item-desc-container"><span class="description-name">Views</span><span class="description-counts">${views}</span></div>
    <div class="item-desc-container"><span class="description-name">Comments</span><span class="description-counts">${comments}</span></div>
    <div class="item-desc-container"><span class="description-name">Downloads</span><span class="description-counts">${downloads}</span></div>`;

  addListItem.appendChild(descriptionContainer);
  return addListItem;
});

galleryList.append(...elementsArray);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

gallery.on('show.simplelightbox', function () {});

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});
