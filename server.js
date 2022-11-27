const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: "./config/config.env" });

connectDB();

const actions = require("./routes/transactions");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

// app.get('/', (req, res) => res.send('Hello!'));
app.use("/api/v1/transactions", actions);

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}!`.green.bold));