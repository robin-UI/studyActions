const mongoose = require('mongoose');
// const mongoURL = "mongodb://localhost:27017/e-testdb" 
const mongoURL = "mongodb+srv://robinme1971:robinme1971@cluster0.aazgtek.mongodb.net/?retryWrites=true&w=majority"

//Function to connect mongodb server
const connectedToMongo = () => {
    mongoose.connect(mongoURL, () =>{
        console.log("connected to mongo success");
    })
}

module.exports = connectedToMongo;