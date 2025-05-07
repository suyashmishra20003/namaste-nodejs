const { MongoClient } = require("mongodb");

const URL = 'mongodb+srv://suyashmishra20003:0191Ex131104@suyashcluster0.7mij7o1.mongodb.net/'

const dbName = "HelloWorld";

const client = new MongoClient(URL);
async function run() {
    try {
        // Connect to the Atlas cluster
        await client.connect();
        console.log("Connected successfully to Database");

        // Get the database and collection on which to run the operation
        const db = client.db(dbName);

        const collection = db.collection("User");

        const data = {            
                firstName: 'Arun',
                lastName: 'Mishra',
                city: 'Chhatarpur',
                pinCode: '215525'
        }

        //* Adding Data
        // await collection.insertMany([data])

        //* Updating Data
        // await collection.updateOne(
        //     {'firstName':'Shubham'},
        //     {$set:{'lastName':'Dagar','city':'Delhi',  'pinCode' : '201307'}}
        // )

        //* Removing Data

        // await collection.deleteOne(
        //     {'firstName':'Kush'}
        // )

        //* Reading Data
        const findResult = await collection.find({}).toArray()

        console.log(findResult)

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

// NOTES

// Go to mongodb website
// Create a free M0NGO cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete