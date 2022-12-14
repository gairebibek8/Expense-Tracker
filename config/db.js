const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // these true statements handle the error/warnings that we might encounter from MONGOose
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;