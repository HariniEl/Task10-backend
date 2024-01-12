const mongoose = require("mongoose");

async function db() {
  try {
    const db = await mongoose.connect('mongodb+srv://XXX:XXXX@cluster0.tvglm.mongodb.net/XXXX?retryWrites=true&w=majority');

    const response = await mongoose.connect(process.env.MONGODB_URI);
    if (response.connections.length > 0) {
      console.log("Database connection successful");
    } else {
      console.log("Could not establish connection");
    }
  } catch (error) { 
    console.log("Error connecting to database");
    console.error(error);
  }
}

module.exports = { db };