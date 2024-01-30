const {MongoClient} = require("mongodb")
const dURL = "mongodb://localhost:27017"
const client = new MongoClient(dURL)
client.connect()

const database = client.db("Electricity_Bill")

function getCollection(collectionName)
{
    return database.collection(collectionName);
}

module.exports = {getCollection}