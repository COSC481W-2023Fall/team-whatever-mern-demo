import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

const UserSchema = new mongoose.Schema({
    name: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel

const Names = () => {
  const [names, setNames] = useState([]);

  // Calls to the back end to get the names information from the json
  useEffect(() => {
    fetch("https://demo-webserver.onrender.com/names")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Names</Card.Title>
        <ListGroup>
        {/* For loop for each name in the list of names */}
        {names
          .filter((name) => name !== "please enter your name")
          .map((name) => (
            <ListGroup.Item>{name}</ListGroup.Item>
          ))}
      </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Names;
