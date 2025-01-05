const user = require('../model/User.model.js');
const jwt = require('jsonwebtoken');
const express = require("express");
const {generateToken,verifyToken}=require('../utils/jwt.js');



const signUp = async(req, res, next) => {
    const {email, password, name} = req.body;
    try{
        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({ message:"User already exist" });
        }
        const user =await user.create({name, email,password});
        const accesstoken = generateToken(user._id);
    }catch(error){

    }
};
