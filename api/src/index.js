require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// init app
const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api router
app.use('/api', require('./routers/url'));
// initial router
app.use('/', require('./routers'));
// get port
const PORT = process.env.PORT || 3000;
// start server
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
