const mongoose= require("mongoose")


exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log("Database not connected successfully");
        console.log("Error: ",err);
        process.exit(1);
    })
}