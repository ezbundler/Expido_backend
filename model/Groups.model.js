const mongoose = require("mongoose");



const groupSchema =new mongoose.model({
    name:{
        type:String,    
        required:true,
        trim:true,

    },
    description:{
        type:String,
        trim:true,

    },
    members: [
        {
          type: mongoose.Schema.Types.ObjectId, // Use ObjectId to store user IDs
          ref: 'User', // Reference the User model
        },
      ],
    type:{
        type:String,
        enum:["Common","LovedOne","BestFreind"],
        default:"Common",   

    },

})


module.exports = mongoose.model("Group", groupSchema);