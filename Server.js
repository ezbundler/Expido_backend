const express = require('express');
const dotenv = require('dotenv');
const mongoose  = require ('mongoose')
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("database connected"))
.catch((error)=>{
    console.log(error)

})










