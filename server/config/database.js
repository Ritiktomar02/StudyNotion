const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection URL
const MONGODB_URL =  "mongodb+srv://ritiktomar0209:fKnK8Vjmd3GoE47h@cluster0.xwgrg.mongodb.net/Studynotion";

// Function to connect to the database
exports.connect = () => {
    console.log("Attempting to connect to the database...");

    mongoose
        .connect(MONGODB_URL, {
            serverSelectionTimeoutMS: 30000, // 30 seconds timeout for database server selection
        })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.error("Database connection failed:");
            console.error(err.message);
            process.exit(1); // Exit the application if the connection fails
        });
};
