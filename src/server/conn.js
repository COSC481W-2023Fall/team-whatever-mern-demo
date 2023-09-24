const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Connected to MongoDB Successfully")
    }catch(error){
        console.log("Connection to MongoDB Failed")
    }
}

module.exports = connectDB
let db = conn.db("Users")
export default db;