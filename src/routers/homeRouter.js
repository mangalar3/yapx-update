const router = require('express').Router();
const homeController = require('../controllers/homeController');
const multerConfig = require('../config/multerConfig');
const jqueryController = require('../controllers/frontControllers/jqueryController');

//GET
router.get('/', homeController.homeYonlendirme);
router.get('/anasayfa', homeController.homeShow);
router.get('/arama', homeController.arama);
router.get('/aramasayfa/:aramasayfa/:ara', homeController.aramasayfa);
router.get('/filtresayfa/:aramasayfa/:ara', homeController.filtresayfa);
router.get('/sifremiunuttum', homeController.sifremiunuttum);
router.get('/sifremiunuttumcode', homeController.sifremiunuttumcode);
router.get('/urunler/:urunno', homeController.urundetaylari,homeController.yorumekle);
router.get('/kayitol', homeController.kayitol);
router.get('/giris', homeController.giris);
router.get('/kayitbasarili',homeController.kayitbasarili);
router.get('/meslekkayitbasarili',homeController.meslekkayitbasarili);
router.get('/girisSecim', homeController.girisSecim);
router.get('/kayitolSecim', homeController.kayitolSecim);
router.get('/kurumsalhesap', homeController.kurumsalregister);
router.get('/isteklistesi', homeController.isteklistesi);
router.get('/cikisyap', homeController.logout);
//router.get('/hakkimizda', homeController.hakkimizda);
router.get('/dukkanlar/:dukkanlar', homeController.dukkanlar);
router.get('/hesabim', homeController.hesabim);
router.get('/kategoriler/:kategoriler',homeController.kategoriler)
router.get('/anakategori/:kategori',homeController.anakategori)
router.get('/404',homeController.dortyuzdort)
router.get('/kategori/:kategori',homeController.kategori)
router.get('/meslekaltkategori/:id',homeController.meslekKategoriAlt)
router.get('/meslekustkategori/:id',homeController.meslekKategoriUst)
router.get('/filters/:kategoriler',jqueryController.filters)
router.get('/FilterPoints/:kategoriler',jqueryController.FilterPoints)
router.get('/urunekle',homeController.urunekle2)
router.get('/urunekle/:urunkategori',homeController.urunekleurun)
router.get('/urunekleArama',homeController.urunekleArama)
router.get('/getWishList',homeController.getWishList)
router.get('/messagePage',homeController.messagePage)
router.get('/changePasswordForget',homeController.SifremiUnuttumChange)
router.get('/isteklistesiekle/:istek', homeController.isteklistesiadd);
router.get('/isteklistesiremove/:istek', homeController.isteklistesiremove);
router.get('/isteklistesiekleDukkan/:dukkanurl', homeController.FavoriDukkanlar);
router.get('/isteklistesiekleDukkanRemove/:dukkanurl', homeController.FavoriDukkanlarRemove);
router.get('/isteklistesiekleMeslek/:dukkanurl', homeController.FavoriMeslekler);
router.get('/isteklistesiekleMeslekRemove/:dukkanurl', homeController.FavoriMesleklerRemove);
router.get('/meslekPage', homeController.meslekPage);
router.get('/kayitolMeslek', homeController.MeslekKayitol);
router.get('/meslekkayitol', homeController.MeslekRegisterGet);
router.get('/yeniurl/:kategoriler',jqueryController.product_url);
router.get('/aramagoster/:kelime',jqueryController.aramagoster);
router.get('/urunara/:aranan',jqueryController.aramasayfa2);
router.get('/BrandFilter',jqueryController.ProductFilter);
router.get('/searchAtShop',jqueryController.FilterAtShop)
router.get('/FilterPrice/:kategoriler',jqueryController.FilterPrice);
router.get('/FilterBrandAtShop',jqueryController.FilterBrandAtShop)
router.get('/mesajlarim',homeController.mesajlarim);
router.get('/siralafiyatagore',jqueryController.fiyatagorelisteleSatici);
router.get('/bireysel-uyelik-sozlesmesi',homeController.bireyseluyeliksozlesmesi);
router.get('/kurumsal-uyelik-sozlesmesi',homeController.kurumsaluyeliksozlesmesi);
router.get('/mesafeli-satis-sozlesmesi',homeController.mesafelisatissozlesmesi);
router.get('/hakkimizda',homeController.hakkimizda);
// POST
router.post('/dukkanaekle',homeController.dukkanaekle)
router.post('/dukkanaeklev2',homeController.DukkanaEkleV2forAtTheUrunPage)
router.post('/urunuduzenle/:url',homeController.urunuduzenle)
router.post('/childComment',homeController.IsDecoded,homeController.childComment)
router.post('/childComment2',homeController.IsDecoded,homeController.childCommentDukkan)
router.post('/childComment3',homeController.IsDecoded,homeController.childCommentMeslek)
router.post('/addFavoriDukkanlar',homeController.IsDecoded,homeController.FavoriDukkanlar)
router.post('/urunukaldir/:url',homeController.IsDecoded,homeController.urunukaldir)
router.post('/urunukaldirv2',homeController.IsDecoded,homeController.urunukaldirv2)
router.post('/urunbul',homeController.urunbul)
router.post('/altMeslekKategoriSehirPost',homeController.MeslekSehirFiltresi)
router.post('/addPhotoDukkan',multerConfig.single('imag'),homeController.addPhotoDukkan)
router.post('/changePassword',homeController.changePassword)
router.post('/meslekPhotoUpdate',multerConfig.array('imag',5),homeController.MeslekPhotoChange)
router.post('/addThumbnails',multerConfig.array('imag',5),homeController.addMeslekThumbnails)
router.post('/addProject',multerConfig.array('Project_Photos',5),homeController.addProjectMeslek)
router.post('/addReferanceMeslek',homeController.addReferanceMeslek)
router.post('/addAbout',homeController.addAboutMeslek)
router.post('/addContanct',homeController.addContanct)
router.post('/removePhotoMeslek',homeController.meslekProfilePhotoDelete)
router.post('/FilterSearchText',jqueryController.FilterSearchText)

router.post('/FilterCityCountry',jqueryController.FilterCityCountry)
router.post('/FilterCityCountrySearch',jqueryController.FilterCityCountrySearch)
router.post('/changePasswordForgetPost',homeController.SifremiUnuttumChangePost)
router.post('/FilterCityCountrySearchMeslek',jqueryController.FilterCityCountrySearchMeslek)
router.post('/FilterCityCountrySearchMeslekKategori',jqueryController.FilterCityCountrySearchMeslekKategori)
router.post('/searchSelect', homeController.searchSelect);
router.post('/filtre', homeController.filtre);
router.post('/giris', homeController.loginUser);
router.post('/checkEmail', homeController.checkEmail);
router.post('/emailChecker',homeController.emailChecker)
router.post('/yorumekle/:urun', homeController.yorumekle);
router.post('/yorumekledukkan/:dukkan', homeController.yorumekleDukkan);
router.post('/yorumekleMeslek/:dukkan', homeController.yorumekleMeslek);
router.post('/urungetirv2',homeController.urunbulv2)
router.post('/kayitol', homeController.kayitolpost);
router.post('/kurumsalpost', homeController.kurumsalpost);
router.post('/meslekRegister', homeController.MeslekRegister);
router.post('/sendMessage/:userid',homeController.IsDecoded,homeController.mesajgonder)
router.post('/sendMessagev2/:id',homeController.IsDecoded,homeController.mesajgonderContinue)
router.post('/sifremiunuttum', homeController.sifremiunuttumPost);
router.post('/kayitolcode', homeController.kayitolcodeget);
router.post('/sifremiunuttumcode', homeController.sifremiunuttumcodePost);
router.post('/kayitolcodepost', homeController.kayitolcodepost);
router.post('/cikisyap', homeController.logout);
router.post('/visibility', homeController.updateVisibility);

module.exports = router;