const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('Connecting to the database...');
    console.error(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    try {

        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
        console.log(`Connected to the database: ${connectionInstance.connection.name}`);
    } catch (err) {
        console.error('Error connecting to the database');
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;