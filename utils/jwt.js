const jwt = require("jsonwebtoken");


const generateToken = (userID)=>{
    return jwt.sign({id:userID}, process.env.JWT_SECRET, {
expiresIn:"2d",
    });
};


const verifyToken = (token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);


}



module.exports = { generateToken, verifyToken};