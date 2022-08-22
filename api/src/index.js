require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const connectDB = require('./db');
const spec = require('./doc');

// init app
const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// api documentation
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(spec));
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
