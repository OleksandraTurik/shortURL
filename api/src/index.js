require('dotenv').config();
const express = require('express');
const path = require('path');
const engine = require('consolidate');
const connectDB = require('./db');

// init app
const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', engine.mustache);
app.set('view engine', 'html');

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
