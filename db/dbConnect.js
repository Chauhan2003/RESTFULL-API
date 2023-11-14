const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const dbConnect = async() => {
    mongoose.connect(process.env.DB_STRING).then(()=>{
        console.log("Server Is Connected To MongoDB Atlas");
    }).catch((err)=>{
        console.log("Server Not Connected To MongoDB Atlas",  err);
    })
}

module.exports = dbConnect;