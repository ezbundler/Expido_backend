const express = require('express');
const dotenv = require('dotenv');
const mongoose  = require ('mongoose')
const cors = require('cors');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("database connected"))
.catch((error)=>{
    console.log(error)

})










