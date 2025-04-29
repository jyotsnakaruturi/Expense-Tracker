const express = require("express");
const cron = require("node-cron");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DB).then(() => {
    console.log("DB connection is successful");
}).catch((e) => {
    console.log(e);
});

const app = express();

// Simple route to keep server alive
app.get("/", (req, res) => {
    res.send("Background service is running...");
});

// Example cron job that runs every minute
cron.schedule('* * * * *', () => {
    console.log('Running a task every minute');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
