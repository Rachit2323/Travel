const mongoose = require("mongoose");

const Detail = require("../models/Detail.js");

async function fetchDataFromMongoDB(req, res) {
  try {

    const data = await Detail.find({});



    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


module.exports = {
  fetchDataFromMongoDB,
};
