


const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running")
})



const uri = process.env.DB_ACCESS
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
 
       const projectsCollection = client.db("tanvirtaqi").collection("projects")
       
 
       app.get('/projects', async (req, res) => {
        const query = {}
        const result =await projectsCollection.find(query).toArray()
        res.send(result)
       })
 
    } finally {
 
    }
 }
 run().catch(err => console.log(err.message))



app.listen(port, () => {
    console.log("server listening on port", port);
 })