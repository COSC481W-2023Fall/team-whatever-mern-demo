import { MongoClient } from "mongodb";

const username = encodeURIComponent("admin");
const password = encodeURIComponent("QTQkX6gTbeZmBhjB")
// const { MongoClient, ServerApiVersion } = require('mongodb');
let uri = "mongodb+srv://admin:QTQkX6gTbeZmBhjB@democluster.5m0g3uv.mongodb.net/?retryWrites=true&w=majority";


// const connectionString = process.env.MONGODB_CONNECT_URI

const client = new MongoClient(uri)

let conn;
try{
  conn = await client.connect();
  
  console.log("Connection Successfull MONGO")
}catch(e){
  console.error(e)
}

let db = conn.db("Users")
export default db;