const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
const cors=require("cors");
const fileupload=require("express-fileupload");
require("dotenv").config();

const PORT=process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

const approute=require("./routes/Useroute");
app.use("/api/v1",approute);

require("./config/database").connect();
require("./config/cloudinary").cloudinaryconnect();

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})