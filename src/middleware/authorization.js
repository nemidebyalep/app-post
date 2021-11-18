const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = async(req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
        if (!typeof bearerHeader !== 'undefinied') {

            const jwtToken = bearerHeader;
            const payload = jwt.verify(jwtToken, `${process.env.JWT_KEY}`)
            req.user = payload.user;
            next();
        }
        if (!bearerHeader) {
            return res.status(403).json("Verify token");
        }
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            error: 'No tienes autorizacion'
        })

    }

}

module.exports = {
    verifyToken,

}