const jwt = require("jsonwebtoken");
const userModel = require("../DB/models/user.model");

const auth = (type) => {
    return async (req, res, next) => {
        const tokenHeader = req.headers["authorization"];
        // console.log(tokenHeader);
        if(tokenHeader) {
            if (tokenHeader.startsWith("Bearer")) {
                const token = tokenHeader.split(" ")[1];
                // console.log(token);
                try {
                    const user = jwt.verify(token, process.env.SECRET_KEY);
                    if(user.isLoggedIn) {
                        try {
                            const findUser = await userModel.findOne({_id: user.id});
                            if(findUser) {
                                if(findUser.isConfirmed) {
                                    req.user = findUser;
                                    next();
                                }
                                else {
                                    res.status(400).json({message: `${type} email isn't confirmed!!`})
                                }
                            }
                            else {
                                res.status(400).json({message: `${type} with such id doesn't exist!!`})
                            }
                        } catch (error) {
                            res.status(400).json({message: `${type} with such id doesn't exist!!`, error})
                        }
                    }
                    else {
                        res.status(400).json({message: `${type} isn't logged in!!`})
                    }
                } catch (error) {
                    res.status(400).json({message: 'Invalid token!!'})
                }
            }
            else {
                res.status(400).json({message: 'Invalid token!!'})
            }
        }
        else {
            res.status(400).json({message: 'Invalid token!!'})
        }
    }
}

module.exports = auth;