const User = require('../model/User.model');
const jwt = require('jsonwebtoken');
const express = require("express");
const {generateToken,verifyToken}=require('../utils/jwt.js');



const signUp = async(req, res, next) => {
    const {email, password, name} = req.body;
    try{
        console.log(email,password,name,"details for signupppppppppppppppppppppppppppppppppppp")
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({ message:"User already exist" });
        }
        const user =await User.create({name, email,password});
        console.log(user,"user createddddddddddddddddddddddddddd")
        const accesstoken = generateToken(user._id);


        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
          });


          res.status(201).json({
            user: user
          });
    }catch(error){
res.status(500).json({message: error.message});
    }
};


module.exports = {signUp};
