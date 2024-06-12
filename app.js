const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // Corrected path

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL, {
  });
}

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
      title: "Test Listing",
      description: "This is a test listing",
      price: 1000,
      location: "GHAZIABAD ,U.P",
      country: "India",
    });
    await sampleListing.save();
    console.log("Sample listing was saved");
    res.send("Listing saved successfully");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
