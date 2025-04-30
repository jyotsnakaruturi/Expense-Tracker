const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expenseEmail = require("./helpers/sendMail");
const Expense = require("./models/Expense");

dotenv.config();

mongoose.connect(process.env.DB).then(() => {
    console.log("DB connection is successful");
}).catch((e) => {
    console.log(e);
});

 
// Simple route to keep server alive
app.get("/", (req, res) => {
    res.send("Background service is running...");
});

// Example cron job that runs every minute
const run=()=>{
    cron.schedule('* * * * *', () => {
        expenseEmail()
    });
};
run();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
