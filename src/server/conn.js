import { MongoClient } from "mongodb";

const username = encodeURIComponent("admin");
const password = encodeURIComponent("5zerGz37zrIuzYEo")
const { MongoClient, ServerApiVersion } = require('mongodb');
let uri = "mongodb+srv://${username}:${password}@democluster.5m0g3uv.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

let db = conn.db("users")
export default db;