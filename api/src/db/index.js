const mongoose = require('mongoose');
require('dotenv').config();

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connect');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// export the connection object
module.exports = connectDB;
