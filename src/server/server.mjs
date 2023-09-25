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
  console.log("Error in get / command");
  let collection = await db.collection("Users");
  let results = await collection.findOne({});
  console.log(results.name);
  res.send(results.name).status(200);
});

// This section will help you get a list of all the records.
app.get("/names", async (req, res) => {
  let collection = await db.collection("Users");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
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
