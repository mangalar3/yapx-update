const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    isim: {
        type: String,
        trim: true
    },
    soyisim:{
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    sifre: {
        type: String,
        trim: true
    },
    wishlist: {
        type: Array,
    },
    wishlist_Shop: {
        type: Array,
    },
    wishlist_Meslek: {
        type: Array,
    },
    sabittelefon:{
        type: String,
    },
    gsmtelefon:{
        type: String,
    },
    Dukkan_About:{
        type: String
    },
    faliyetalani:{
        type: String,
    },
    tckimlik:{
        type: String,
    },
    sirketunvani:{
        type: String,
    },
    user_id:{
        type: String,
    },
    sirketkurulustarihi:{
        type: String,
    },
    sirketadresi:{
        type: String,
    },
    vergidairesiili:{
        type: String,
    },
    vergikimliknumarasi:{
        type: String,
    },
    vergidairesi:{
        type: String,
    },
    dukkanadi:{
        type: String,
    },
    dukkanurunleri:{
        type: Array,
    },
    userid:{
        type: String,
    },
    verfication_number: {
        type: String,
        trim: true
    },
    dogrulama_token:{
        type: String,
        trim: true
    },
    banner:{
        type: String,
    },
    usertoken: {
        type: String,
        trim: true
    },
    dukkanurl:{
        type:String,
    },
    Dukkan_Thumbnails:{
        type:Array
    },
    Dukkan_UniqueID:{
        type:String,
    },
    Messages_List:{
        type:Array,
    },
    dukkanphoto:{
        type:String
    },
    dukkanili:{
        type:String
    },
    dukkanilcesi:{
        type:String
    },
    dukkanyorum:{
        type:Array
    },
    dukkanoysayisi:{
        type:Number,
        default: 0
    },
    dukkan_star:{
        type:Array
    },
    Meslek_Projects:{
        type:Array
    },
    Meslek_Referances:{
        type:Array
    },
    Meslek_About:{
        type:String
    },
    Meslek_Adres:{
        type:String
    },
    Meslek_Thumbnails:{
        type: Array
    },
    Meslek_Photos:{
        type: Array
    },
    Meslek_Category:{
        type: String
    },
    Meslek_SubCategory:{
        type: String
    },
    Meslek_City:{
        type:String
    },
    Meslek_Country:{
        type:String
    },
    Meslek_Category:{
        type:String
    },
    Meslek_URL:{
        type:String
    },
    meslekAdi: {
        type:String
    },
    dukkan_av:{
        type:Number
    },
    User_Status:{
        type:String
    },
    User_GivenTime:{
        type:String
    },
    Unreaded_MessageCount: {
        type:Number,
        default: 0,
    },
    Email_Permission:{
        type:Boolean,
        default:false
    },
    kayit_id: {
        type: String,
        trim: true,
    },
    Id_Visibility:{
        type:Boolean,
        default:true
    },
    Date_Visibility:{
        type:Boolean,
        default:true
    },
    Name_Visibility:{
        type:Boolean,
        default:true
    },
    Shop_Name_Visibility:{
        type:Boolean,
        default:true
    },
    Address_Visibility:{
        type:Boolean,
        default:true
    },
   
}, { collection: 'kullanicilar',locale: 'tr', timestamps: true });
UserSchema.pre('save', async function (next) {
    try {
        // kayit_id atanmamışsa işlemleri gerçekleştir
        if (!this.kayit_id) {
            const latestUser = await this.constructor.findOne({}, { kayit_id: 1 }, { sort: { kayit_id: -1 } });

            if (latestUser && latestUser.kayit_id) {
                let nextKayitIdNumber;

                if (this.dukkanadi) {
                    const latestBUser = await this.constructor.findOne({ kayit_id: { $regex: /^K_/ } }, { kayit_id: 1 }, { sort: { kayit_id: -1 } });
                    nextKayitIdNumber = latestBUser ? parseInt(latestBUser.kayit_id.split('_')[1]) + 1 : 1000001;
                    this.kayit_id = `K_${nextKayitIdNumber}`;
                } else if (this.Meslek_Category) {
                    const latestBUser = await this.constructor.findOne({ kayit_id: { $regex: /^M_/ } }, { kayit_id: 1 }, { sort: { kayit_id: -1 } });
                    nextKayitIdNumber = latestBUser ? parseInt(latestBUser.kayit_id.split('_')[1]) + 1 : 1000001;
                    this.kayit_id = `M_${nextKayitIdNumber}`;
                } else {
                    // Sadece B'ler içinde sıralı bir şekilde arttırma yap
                    const latestBUser = await this.constructor.findOne({ kayit_id: { $regex: /^B_/ } }, { kayit_id: 1 }, { sort: { kayit_id: -1 } });
                    nextKayitIdNumber = latestBUser ? parseInt(latestBUser.kayit_id.split('_')[1]) + 1 : 1000001;
                    this.kayit_id = `B_${nextKayitIdNumber}`;
                }
            } else {
                // Eğer latestUser tanımsızsa veya latestUser.kayit_id tanımsızsa
                this.kayit_id = 'B_1000000';
            }
        }

        next();
    } catch (error) {
        next(error);
    }
});





const User = mongoose.model('kullanicilar', UserSchema);

module.exports = User;