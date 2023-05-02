const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");
const CryptoJs = require("crypto-js")

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    userId: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    country: {
        type: String,
        // required: true
    },
    isConfirmed: {
        type: Boolean,
        default: true 
        // default: false 
    },
    accountType: String,
    gender: String,
    birthDate: String,
    watchList: [String],
    rates: [String],
    profilePic: String
}, {timestamps: true});

userSchema.pre("save", function(next) {
    if(this.password) {
        // this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALT));
        // this.accountType = "native";
        this.password = CryptoJs.AES.encrypt(this.password, process.env.SECRET_KEY).toString();
    }
    // else {
    //     this.accountType = "native";

    // }
    this.userId = this.userName.replaceAll(" ", "").toLowerCase() + "-" + this._id.toString();

    next();
});
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;