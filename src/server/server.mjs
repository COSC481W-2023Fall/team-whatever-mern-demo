require('dotenv').config()


// If you use "npm run dev" while inside the server folder it should run the script with nodemon which will update the server automatically on file saves 
const express = require('express');
const cors = require('cors');
const fs = require('fs');
import db from "./conn.mjs";
import { ObjectId } from "mongodb";
const PORT = 3030;

const app = express();

app.use(cors());
app.use(express.json());


// Imports the names json for name storage
const names = require('./names.json');

// Logs the port # the server is on
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + {PORT});
});

// Gives the front end the index information
app.get('/', (req, res, next) => {
    
    var temp = names.people[names.people.length-1].name;
    
    res.status(200).json(temp);
});

// Gives the front end the list of names to be used on the /names page
app.get('/names', async (req, res, next) => {
    // Send the list of names as a JSON array
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// Functions to submit a name to the json file for storage
app.post('/submit-name', async (req, res) => {
    const { name } = req.body;
    
    // If nothing is entered, it will not push empty name to the json
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    // Add the new name to the json
    names.people.push({ name });

    let collection = await db.collection("Users");
    let result = await collection.insertOne(name)
    res.send(result).status(204);

    // Write the information to the json
    //fs.writeFileSync('./names.json', JSON.stringify(names, null, 2));

    //let namesURI = "mongodb+srv://${username}:${password}@democluster.5m0g3uv.mongodb.net --collection USERS --type json --file names.json"
    
    res.status(201).json({ message: "Name submitted successfully" });
});