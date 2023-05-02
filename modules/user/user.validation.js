const Joi = require("joi");
// userName : {
//     type: String,
//     required: true
// },
// userId: {
//     type: String,
// },
// email: {
//     type: String,
//     required: true,
//     unique: true
// },
// password: {
//     type: String
// },
// country: {
//     type: String,
//     required: true
// },
// isConfirmed: {
//     type: Boolean,
//     default: false
// },
// accountType: String,
// gender: String,
// birthDate: String,
// watchList: [String],
// rates: [String],
// profilePic: String
const signUpValidation = {
    body: Joi.object().required().keys({
        userName: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().pattern(new RegExp("^[A-Z0-9][a-z0-9]{3,}")),
        cPassword: Joi.ref("password"),
        // country: Joi.string(),
        // gender: Joi.string(),
        // birthDate: Joi.string(),
        // country: Joi.string().required(),
    })
};
const signInValidation = {
    body: Joi.object().required().keys({
        email: Joi.string().required().email(),
        password: Joi.string().pattern(new RegExp("^[A-Z0-9][a-z0-9]{3,}")),
        // country: Joi.string(),
        // gender: Joi.string(),
        // birthDate: Joi.string(),
        // country: Joi.string().required(),
    })
};

// const signInValidation = {
//     body: Joi.object().required().keys({
//         email: Joi.string().required().email(),
//         password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
//     })
// };

// const updateProfileValidation = {
//     body: Joi.object().required().keys({
//         userName: Joi.string().required(),
//         email: Joi.string().required().email(),
//         phone: Joi.string().required(),
//         location: Joi.string().required()
//     })
// };

// const updatePasswordValidation = {
//     body: Joi.object().required().keys({
//         oldPassword: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//         newPassword: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//         cNewPassword: Joi.ref("newPassword")
//     })
// };

// const forgetPasswordValidation = {
//     body: Joi.object().required().keys({
//         email: Joi.string().required().email()
//     })
// };

// const sendConfirmationEmailValidation = {
//     body: Joi.object().required().keys({
//         email: Joi.string().required().email()
//     })
// };

// const deletePostValidation = {
//     body: Joi.object().required().keys({
//         postId: Joi.string().required().min(24).max(24)
//     })
// }



module.exports = {
    signUpValidation,
    signInValidation,
    // updateProfileValidation,
    // updatePasswordValidation,
    // forgetPasswordValidation,
    // sendConfirmationEmailValidation,
    // deletePostValidation
}