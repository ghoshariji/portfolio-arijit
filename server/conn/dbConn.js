const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("DataBase Connect")
})
.catch((err)=>{
    console.log("Error to connect DB" + err)
})