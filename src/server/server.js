require('dotenv').config()

// If you use "npm run dev" while inside the server folder it should run the script with nodemon which will update the server automatically on file saves 

// creates express app 
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json())

// Just a holder file for the names list since we're not using a database for it
const names = require('./names.json')


// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})

// routes
app.get('/', (req, res, next) => {
    // This should probably get the index page but I'm not sure how to do that
})

// this route will get the names from the json file
app.get('/names', (req, res, next) => {
    // This should get the names page but I don't know how to do that either
    res.send(names)
})
