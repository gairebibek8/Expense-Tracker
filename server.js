const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 2000;

app.get('/', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}!`.green.bold));