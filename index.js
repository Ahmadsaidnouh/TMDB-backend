const cors = require("cors");
require("dotenv").config();
const express = require('express')
const app = express()
const path = require("path");
// const multer = require("multer");

const port = process.env.PORT;
const { userRoutes } = require("./routes/allroutes");
const initConnection = require("./DB/config");
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// });
// const upload = multer({storage: storage})
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors({}));
app.use(userRoutes);
initConnection();
// app.post("/profile", upload.single("avatar"), function(req, res) {
//     // console.log(req.file);
//     res.send("saf");
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))