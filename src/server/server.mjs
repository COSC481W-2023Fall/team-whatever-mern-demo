import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import db from "./db/conn2.mjs";
import { ObjectId } from "mongodb";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// get a single name from collection
app.get("/", async (req, res) => {
  let collection = await db.collection("Users");
  let results = await collection.findOne({}, { sort: { _id: -1 } });
  res.send(JSON.stringify(results.name)).status(200);
});

// This section will help you get a list of all the records.
app.get("/names", async (req, res) => {
  let collection = await db.collection("Users");
  let results = await collection.find({}).toArray();
  var parsedResults = JSON.parse(results);
  for (var i = 0; i < parsedResults.length; i++) {
    parsedResults[i] = parsedResults[i].name;
  }
  res.send(parsedResults).status(200);
  console.log(parsedResults);
});

// This section will help you create a new record.
app.post("/submit-name", async (req, res) => {
  let newDocument = {
    name: req.body.name,
  };
  let collection = await db.collection("Users");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default app;
