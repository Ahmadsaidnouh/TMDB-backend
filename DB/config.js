const mongoose = require("mongoose");

const initConnection = () => {
    // return mongoose.connect(process.env.CONNECTION_STRING_ONLINE)
    return mongoose.connect(process.env.CONNECTION_STRING_ONLINE)
        .then(() => console.log("connected"))
        .catch((err) => console.log("error", err));
}

module.exports = initConnection;