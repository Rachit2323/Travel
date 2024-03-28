const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const detailController = require("./controllers/Details.js");

const app = express();


app.use(cors());

mongoose.connect("mongodb+srv://Rachit23:UhP8Iiyp4xxptvmM@cluster0.fgnb20h.mongodb.net/drive", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});


app.get("/api", detailController.fetchDataFromMongoDB);

const server = app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});
