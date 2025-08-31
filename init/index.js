const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("Old data deleted.");

    const modifiedData = initData.data.map((obj) => ({
      ...obj,
      image: {
        url: obj.image.url,
        filename: "seed-image", // just a dummy value for consistency
      },
      owner: "688103def5556448de12b7b0", // Replace with your valid User ID
    }));

    await Listing.insertMany(modifiedData);
    console.log("Data initialized successfully!");
  } catch (err) {
    console.error("Error initializing DB:", err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();
