const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://junaid:Jasnum!9@2@cluster0.ksbwxvs.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI = "mongodb://localhost:27017"
const connectToMongo= ()=>{
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;